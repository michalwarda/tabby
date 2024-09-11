use std::collections::HashMap;

use async_trait::async_trait;
use juniper::{graphql_object, GraphQLEnum, GraphQLInterface, GraphQLObject};
use regex::{Captures, Regex};

use super::{
    repository::Repository,
    web_documents::{CustomWebDocument, PresetWebDocument},
    Context,
};
use crate::{policy::AccessPolicy, Result};

/// Represents the kind of context source.
#[derive(GraphQLEnum)]
pub enum ContextSourceKind {
    Git,
    Github,
    Gitlab,
    Doc,
    Web,
}

#[derive(GraphQLInterface)]
#[graphql(context = Context, for = [CustomWebDocument, PresetWebDocument, Repository, WebContextSource])]
pub struct ContextSource {
    pub source_kind: ContextSourceKind,

    /// Represents the source of the context, which is the value mapped to `source_id` in the index.
    pub source_id: String,

    /// Display name of the source, used to provide a human-readable name for user selection, such as in a dropdown menu.
    pub source_name: String,
}

impl ContextSourceValue {
    pub fn source_id(&self) -> String {
        match self {
            ContextSourceValueEnum::Repository(x) => x.source_id().into(),
            ContextSourceValueEnum::CustomWebDocument(x) => x.source_id(),
            ContextSourceValueEnum::PresetWebDocument(x) => x.source_id(),
            ContextSourceValueEnum::WebContextSource(x) => x.source_id().into(),
        }
    }

    pub fn source_name(&self) -> String {
        match self {
            ContextSourceValueEnum::Repository(x) => x.source_name().into(),
            ContextSourceValueEnum::CustomWebDocument(x) => x.source_name().into(),
            ContextSourceValueEnum::PresetWebDocument(x) => x.source_name().into(),
            ContextSourceValueEnum::WebContextSource(x) => x.source_name().into(),
        }
    }
}

pub struct WebContextSource;

const PUBLIC_WEB_INTERNAL_SOURCE_ID: &str = "internal-public-web";

#[graphql_object(context = Context, impl = [ContextSourceValue])]
impl WebContextSource {
    fn source_kind(&self) -> ContextSourceKind {
        ContextSourceKind::Web
    }

    pub fn source_id(&self) -> &'static str {
        PUBLIC_WEB_INTERNAL_SOURCE_ID
    }

    pub fn source_name(&self) -> &'static str {
        "Web"
    }
}

#[derive(GraphQLObject)]
#[graphql(context = Context)]
pub struct ContextInfo {
    pub sources: Vec<ContextSourceValue>,
}

impl ContextInfo {
    pub fn helper(&self) -> ContextInfoHelper {
        ContextInfoHelper::new(self)
    }
}

pub struct ContextInfoHelper {
    sources: HashMap<String, String>,
}

impl ContextInfoHelper {
    pub fn new(context_info: &ContextInfo) -> Self {
        Self {
            sources: context_info
                .sources
                .iter()
                .map(|source| (source.source_id(), source.source_name()))
                .collect(),
        }
    }

    /// Replace content tagged with `[[source:${id}]]` with its display name.
    pub fn rewrite_tag(&self, content: &str) -> String {
        let re = Regex::new(r"\[\[source:(.*?)\]\]").unwrap();
        let new_content = re.replace_all(content, |caps: &Captures| {
            let source_id = caps.get(1).unwrap().as_str();
            if source_id == PUBLIC_WEB_INTERNAL_SOURCE_ID {
                // For public-web source, don't include it in the content.
                return "".to_owned();
            }
            if let Some(display_name) = self.sources.get(source_id) {
                display_name.to_string()
            } else {
                caps[0].to_owned()
            }
        });
        new_content.to_string()
    }

    pub fn can_access_source_id(&self, source_id: &str) -> bool {
        self.sources.contains_key(source_id)
    }

    pub fn iter_source_ids(&self) -> impl Iterator<Item = &str> {
        self.sources.keys().map(|s| s.as_str())
    }
}

#[async_trait]
pub trait ContextService: Send + Sync {
    /// Read context information from the backend. If `policy` is `None`, this retrieves all context information without applying any access policy.
    async fn read(&self, policy: Option<&AccessPolicy>) -> Result<ContextInfo>;
}
