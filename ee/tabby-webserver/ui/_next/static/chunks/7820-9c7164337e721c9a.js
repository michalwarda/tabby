"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7820],{10356:function(e,n,r){r.d(n,{P:function(){return a}});var t=r(99109),i=r(60106);let o=(0,i.BX)("\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isPasswordSet\n    }\n  }\n"),a=()=>(0,t.aM)({query:o})},19567:function(e,n,r){r.d(n,{Uw:function(){return l},c7:function(){return u},jJ:function(){return d},xG:function(){return s}});var t=r(99109),i=r(60106);let o=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n    }\n  }\n"),a=()=>{let[{data:e}]=(0,t.aM)({query:o});return null==e?void 0:e.serverInfo},s=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isChatEnabled},u=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isAdminInitialized},l=()=>{var e;return null===(e=a())||void 0===e?void 0:e.isEmailConfigured},d=()=>{var e;return null===(e=a())||void 0===e?void 0:e.allowSelfSignup}},58001:function(e,n,r){r.d(n,{Dp:function(){return S},Ho:function(){return E},QJ:function(){return w},Rn:function(){return m},av:function(){return C},bW:function(){return p},kP:function(){return A},pC:function(){return k},zq:function(){return b}});var t,i,o=r(57437),a=r(2265),s=r(24033),u=r(53771),l=r(26566),d=r.n(l),f=r(60106),c=r(39311),v=r(10356),h=r(19567);(t=i||(i={}))[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.Refresh=2]="Refresh";let g="_tabby_auth",p=()=>{if((0,c.S_)()){let e=localStorage.getItem(g);if(e)try{return JSON.parse(e)}catch(e){}}},k=e=>{localStorage.setItem(g,JSON.stringify(e))},m=()=>{localStorage.removeItem(g),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:g}))};function y(e,n){var r,t;let o=function(e,n){switch(n.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:n.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,n);return e.status==o.status&&(r=e.data,t=o.data,(null==r?void 0:r.accessToken)===(null==t?void 0:t.accessToken)&&(null==r?void 0:r.refreshToken)===(null==t?void 0:t.refreshToken))?e:o}let T=a.createContext({}),S=(0,f.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),E=e=>{let{children:n}=e,r=a.useRef(!1),[t]=d()(g,void 0),[s,l]=a.useReducer(y,{status:"loading",data:void 0}),[,f]=(0,v.P)();a.useEffect(()=>{r.current=!0,(null==t?void 0:t.accessToken)&&(null==t?void 0:t.refreshToken)?l({type:i.SignIn,data:t}):l({type:i.SignOut})},[]),a.useEffect(()=>{r.current&&((null==t?void 0:t.accessToken)&&(null==t?void 0:t.refreshToken)?(l({type:i.SignIn,data:t}),f()):l({type:i.SignOut}))},[t]);let c=a.useMemo(()=>{var e,n;if((null==s?void 0:s.status)=="authenticated")try{let{is_admin:e}=(0,u.o)(s.data.accessToken);return{data:{isAdmin:e,accessToken:s.data.accessToken},status:s.status}}catch(n){return console.error("jwt decode failed"),{status:null!==(e=null==s?void 0:s.status)&&void 0!==e?e:"loading",data:{email:"",isAdmin:!1,accessToken:s.data.accessToken}}}return{status:null!==(n=null==s?void 0:s.status)&&void 0!==n?n:"loading",data:null}},[s]);return(0,o.jsx)(T.Provider,{value:{authState:s,dispatch:l,session:c},children:n})};class I extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function $(){let e=a.useContext(T);if(!e)throw new I;return e}function b(){let{dispatch:e}=$(),[n,r]=d()(g,void 0);return async n=>(r({accessToken:n.accessToken,refreshToken:n.refreshToken}),e({type:i.SignIn,data:n}),!0)}function w(){let{dispatch:e}=$(),[n,r]=d()(g,void 0);return async()=>{r(void 0),e({type:i.SignOut})}}function A(){let{session:e}=$();return e}let P=["/auth/signin","/auth/signup","/auth/reset-password"];function C(){let e=(0,h.c7)(),n=(0,s.useRouter)(),r=(0,s.usePathname)(),{data:t,status:i}=A();return a.useEffect(()=>{"loading"!==i&&"authenticated"!==i&&(void 0===e||(e?P.includes(r)||n.replace("/auth/signin"):n.replace("/auth/signup?isAdmin=true")))},[e,i]),t}},7820:function(e,n,r){r.d(n,{Db:function(){return v},Lp:function(){return p},io:function(){return h}});var t=r(2265),i=r(69166),o=r(73997),a=r(83074),s=r(53771),u=r(24144),l=r(99109),d=r(18398),f=r(58001),c=r(57166);function v(e,n){var r;let[t,i]=(0,l.Db)(e),o=(null==n?void 0:n.form)?(r=n.form,e=>{let{graphQLErrors:n=[]}=e;for(let e of n)if(e.extensions&&e.extensions["validation-errors"]){let n=e.extensions["validation-errors"];for(let e of n.errors)r.setError(e.path,e)}else(null==e?void 0:e.originalError)&&r.setError("root",e.originalError)}):void 0,a=async e=>{let r;try{if(null==(r=await i(e))?void 0:r.error)o&&o(r.error),(null==n?void 0:n.onError)&&n.onError(r.error);else if(!(0,u.Z)(null==r?void 0:r.data)){var t;null==n||null===(t=n.onCompleted)||void 0===t||t.call(n,r.data)}}catch(e){(null==n?void 0:n.onError)&&n.onError(e);return}return r};return a}function h(e){let{data:n,error:r,stale:i}=e,o=(e,n)=>!(0,u.Z)(e)||!(0,u.Z)(n),[a,s]=(0,t.useState)(o(n,r)&&!!i);return(0,t.useEffect)(()=>{!a&&o(n,r)&&s(!0)},[n,r]),[a,s]}let g=e=>Date.now()>1e3*e,p=new d.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,o.HG)({resolvers:{Query:{invitations:(0,a.N)(),repositories:(0,a.N)(),jobRuns:(0,a.N)()}},updates:{Mutation:{deleteInvitation(e,n,r,t){e.deleteInvitation&&r.inspectFields("Query").filter(e=>"invitations"===e.fieldName).forEach(e=>{r.updateQuery({query:c.lE,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.invitations)||void 0===r?void 0:r.edges)&&(e.invitations.edges=e.invitations.edges.filter(e=>e.node.id!==n.id)),e})})},deleteRepository(e,n,r,t){e.deleteRepository&&r.inspectFields("Query").filter(e=>"repositories"===e.fieldName).forEach(e=>{r.updateQuery({query:c.S1,variables:e.arguments},e=>{var r;return(null==e?void 0:null===(r=e.repositories)||void 0===r?void 0:r.edges)&&(e.repositories.edges=e.repositories.edges.filter(e=>e.node.id!==n.id)),e})})}}}}),(0,i.M)(async e=>{let n=(0,f.bW)(),r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken;return{addAuthToOperation:n=>r?e.appendHeaders(n,{Authorization:"Bearer ".concat(r)}):n,didAuthError:(e,n)=>e.graphQLErrors.some(e=>{var n;return(null==e?void 0:null===(n=e.extensions)||void 0===n?void 0:n.code)==="UNAUTHORIZED"}),willAuthError(e){let n=(0,f.bW)();if(r=null==n?void 0:n.accessToken,t=null==n?void 0:n.refreshToken,"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null===(n=e.name)||void 0===n?void 0:n.value)&&["tokenAuth","registerUser"].includes(e.name.value)})||t&&"mutation"===e.kind&&e.query.definitions.some(e=>{var n;return"OperationDefinition"===e.kind&&(null==e?void 0:null===(n=e.name)||void 0===n?void 0:n.value)==="refreshToken"}))return!1;if(!r)return!0;try{let{exp:e}=(0,s.o)(r);return!e||g(e)}catch(e){return!0}},async refreshAuth(){if(t){var n;let i=await e.mutate(f.Dp,{refreshToken:t});(null===(n=i.data)||void 0===n?void 0:n.refreshToken)?(r=i.data.refreshToken.accessToken,t=i.data.refreshToken.refreshToken,(0,f.pC)({accessToken:r,refreshToken:t})):(0,f.Rn)()}else(0,f.Rn)()}}}),(0,d.Dk)({onError(e){e.message.startsWith("[GraphQL]")&&(e.message=e.message.replace("[GraphQL]","").trim())}}),d.Ek]})},57166:function(e,n,r){r.d(n,{GG:function(){return a},S1:function(){return o},lE:function(){return i}});var t=r(60106);let i=(0,t.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,t.BX)("\n  query repositories($after: String, $before: String, $first: Int, $last: Int) {\n    repositories(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,t.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}}]);