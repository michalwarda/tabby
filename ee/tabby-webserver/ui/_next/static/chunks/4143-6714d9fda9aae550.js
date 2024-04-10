(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4143],{33904:function(e){"use strict";var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=[[{color:"0, 0, 0",class:"ansi-black"},{color:"187, 0, 0",class:"ansi-red"},{color:"0, 187, 0",class:"ansi-green"},{color:"187, 187, 0",class:"ansi-yellow"},{color:"0, 0, 187",class:"ansi-blue"},{color:"187, 0, 187",class:"ansi-magenta"},{color:"0, 187, 187",class:"ansi-cyan"},{color:"255,255,255",class:"ansi-white"}],[{color:"85, 85, 85",class:"ansi-bright-black"},{color:"255, 85, 85",class:"ansi-bright-red"},{color:"0, 255, 0",class:"ansi-bright-green"},{color:"255, 255, 85",class:"ansi-bright-yellow"},{color:"85, 85, 255",class:"ansi-bright-blue"},{color:"255, 85, 255",class:"ansi-bright-magenta"},{color:"85, 255, 255",class:"ansi-bright-cyan"},{color:"255, 255, 255",class:"ansi-bright-white"}]],n=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0,this.decorations=[]}return t(e,null,[{key:"escapeForHtml",value:function(t){return new e().escapeForHtml(t)}},{key:"linkify",value:function(t){return new e().linkify(t)}},{key:"ansiToHtml",value:function(t,r){return new e().ansiToHtml(t,r)}},{key:"ansiToJson",value:function(t,r){return new e().ansiToJson(t,r)}},{key:"ansiToText",value:function(t){return new e().ansiToText(t)}}]),t(e,[{key:"setupPalette",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(r[e][t].color);for(var n=[0,95,135,175,215,255],o=function(e,t,r){return n[e]+", "+n[t]+", "+n[r]},i=0;i<6;++i)for(var s=0;s<6;++s)for(var l=0;l<6;++l)this.PALETTE_COLORS.push(o(i,s,l));for(var c=8,a=0;a<24;++a,c+=10)this.PALETTE_COLORS.push(o(c,c,c))}},{key:"escapeForHtml",value:function(e){return e.replace(/[&<>\"]/gm,function(e){return"&"==e?"&amp;":'"'==e?"&quot;":"<"==e?"&lt;":">"==e?"&gt;":""})}},{key:"linkify",value:function(e){return e.replace(/(https?:\/\/[^\s]+)/gm,function(e){return'<a href="'+e+'">'+e+"</a>"})}},{key:"ansiToHtml",value:function(e,t){return this.process(e,t,!0)}},{key:"ansiToJson",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:"ansiToText",value:function(e){return this.process(e,{},!1)}},{key:"process",value:function(e,t,r){var n=this,o=e.split(/\033\[/),i=o.shift();null==t&&(t={}),t.clearLine=/\r/.test(e);var s=o.map(function(e){return n.processChunk(e,t,r)});if(t&&t.json){var l=this.processChunkJson("");return l.content=i,l.clearLine=t.clearLine,s.unshift(l),t.remove_empty&&(s=s.filter(function(e){return!e.isEmpty()})),s}return s.unshift(i),s.join("")}},{key:"processChunkJson",value:function(e,t,n){var o=(t=void 0===t?{}:t).use_classes=void 0!==t.use_classes&&t.use_classes,i=t.key=o?"class":"color",s={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,isInverted:!1,clearLine:t.clearLine,decoration:null,decorations:[],was_processed:!1,isEmpty:function(){return!s.content}},l=e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);if(!l)return s;s.content=l[4];var c=l[2].split(";");if(""!==l[1]||"m"!==l[3]||!n)return s;for(;c.length>0;){var a=parseInt(c.shift());if(isNaN(a)||0===a)this.fg=this.bg=null,this.decorations=[];else if(1===a)this.decorations.push("bold");else if(2===a)this.decorations.push("dim");else if(3===a)this.decorations.push("italic");else if(4===a)this.decorations.push("underline");else if(5===a)this.decorations.push("blink");else if(7===a)this.decorations.push("reverse");else if(8===a)this.decorations.push("hidden");else if(9===a)this.decorations.push("strikethrough");else if(21===a)this.removeDecoration("bold");else if(22===a)this.removeDecoration("bold"),this.removeDecoration("dim");else if(23===a)this.removeDecoration("italic");else if(24===a)this.removeDecoration("underline");else if(25===a)this.removeDecoration("blink");else if(27===a)this.removeDecoration("reverse");else if(28===a)this.removeDecoration("hidden");else if(29===a)this.removeDecoration("strikethrough");else if(39===a)this.fg=null;else if(49===a)this.bg=null;else if(a>=30&&a<38)this.fg=r[0][a%10][i];else if(a>=90&&a<98)this.fg=r[1][a%10][i];else if(a>=40&&a<48)this.bg=r[0][a%10][i];else if(a>=100&&a<108)this.bg=r[1][a%10][i];else if(38===a||48===a){var u=38===a;if(c.length>=1){var f=c.shift();if("5"===f&&c.length>=1){var h=parseInt(c.shift());if(h>=0&&h<=255){if(o){var g=h>=16?"ansi-palette-"+h:r[h>7?1:0][h%8].class;u?this.fg=g:this.bg=g}else this.PALETTE_COLORS||this.setupPalette(),u?this.fg=this.PALETTE_COLORS[h]:this.bg=this.PALETTE_COLORS[h]}}else if("2"===f&&c.length>=3){var p=parseInt(c.shift()),d=parseInt(c.shift()),b=parseInt(c.shift());if(p>=0&&p<=255&&d>=0&&d<=255&&b>=0&&b<=255){var v=p+", "+d+", "+b;o?u?(this.fg="ansi-truecolor",this.fg_truecolor=v):(this.bg="ansi-truecolor",this.bg_truecolor=v):u?this.fg=v:this.bg=v}}}}}return null===this.fg&&null===this.bg&&0===this.decorations.length||(s.fg=this.fg,s.bg=this.bg,s.fg_truecolor=this.fg_truecolor,s.bg_truecolor=this.bg_truecolor,s.decorations=this.decorations,s.decoration=this.decorations.slice(-1).pop()||null,s.was_processed=!0),s}},{key:"processChunk",value:function(e,t,n){var o=this;t=t||{};var i=this.processChunkJson(e,t,n),s=t.use_classes;if(i.decorations=i.decorations.filter(function(e){if("reverse"===e){i.fg||(i.fg=r[0][7][s?"class":"color"]),i.bg||(i.bg=r[0][0][s?"class":"color"]);var t=i.fg;i.fg=i.bg,i.bg=t;var n=i.fg_truecolor;return i.fg_truecolor=i.bg_truecolor,i.bg_truecolor=n,i.isInverted=!0,!1}return!0}),t.json)return i;if(i.isEmpty())return"";if(!i.was_processed)return i.content;var l=[],c=[],a=[],u={},f=function(e){var t=[],r=void 0;for(r in e)e.hasOwnProperty(r)&&t.push("data-"+r+'="'+o.escapeForHtml(e[r])+'"');return t.length>0?" "+t.join(" "):""};return(i.isInverted&&(u["ansi-is-inverted"]="true"),i.fg&&(s?(l.push(i.fg+"-fg"),null!==i.fg_truecolor&&(u["ansi-truecolor-fg"]=i.fg_truecolor,i.fg_truecolor=null)):l.push("color:rgb("+i.fg+")")),i.bg&&(s?(l.push(i.bg+"-bg"),null!==i.bg_truecolor&&(u["ansi-truecolor-bg"]=i.bg_truecolor,i.bg_truecolor=null)):l.push("background-color:rgb("+i.bg+")")),i.decorations.forEach(function(e){if(s){c.push("ansi-"+e);return}"bold"===e?c.push("font-weight:bold"):"dim"===e?c.push("opacity:0.5"):"italic"===e?c.push("font-style:italic"):"hidden"===e?c.push("visibility:hidden"):"strikethrough"===e?a.push("line-through"):a.push(e)}),a.length&&c.push("text-decoration:"+a.join(" ")),s)?'<span class="'+l.concat(c).join(" ")+'"'+f(u)+">"+i.content+"</span>":'<span style="'+l.concat(c).join(";")+'"'+f(u)+">"+i.content+"</span>"}},{key:"removeDecoration",value:function(e){var t=this.decorations.indexOf(e);t>=0&&this.decorations.splice(t,1)}}]),e}();e.exports=n},57215:function(e){function t(e){if(!e)return"";if(!/\r/.test(e))return e;for(e=e.replace(/\r+\n/gm,"\n");/\r./.test(e);)e=e.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm,function(e,t,r){return r+t.slice(r.length)});return e}function r(e){if(!/\r/.test(e))return e;for(var t=e.split("\r"),r=[];t.length>0;){var n=function(e){for(var t=0,r=0;r<e.length;r++)e[t].length<=e[r].length&&(t=r);return t}(t);r.push(t[n]),t=t.slice(n+1)}return r.join("\r")}e.exports=t,e.exports.escapeCarriageReturn=t,e.exports.escapeCarriageReturnSafe=function(e){if(!e)return"";if(!/\r/.test(e))return e;if(!/\n/.test(e))return r(e);var n=(e=e.replace(/\r+\n/gm,"\n")).lastIndexOf("\n");return t(e.slice(0,n))+"\n"+r(e.slice(n+1))}},95380:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:a="",children:u,...f},h)=>(0,n.createElement)("svg",{ref:h,...o,width:s,height:s,stroke:r,strokeWidth:c?24*Number(l)/Number(s):l,className:["lucide",`lucide-${i(e)}`,a].join(" "),...f},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r}},47154:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},24033:function(e,t,r){e.exports=r(20290)},86806:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(33904),o=r(57215),i=r(2265);function s(e,t,r,n){let o,s;let l=t?null:function(e){let t={};switch(e.bg&&(t.backgroundColor=`rgb(${e.bg})`),e.fg&&(t.color=`rgb(${e.fg})`),e.decoration){case"bold":t.fontWeight="bold";break;case"dim":t.opacity="0.5";break;case"italic":t.fontStyle="italic";break;case"hidden":t.visibility="hidden";break;case"strikethrough":t.textDecoration="line-through";break;case"underline":t.textDecoration="underline";break;case"blink":t.textDecoration="blink"}return t}(r),c=t?(s="",(r.bg&&(s+=`${r.bg}-bg `),r.fg&&(s+=`${r.fg}-fg `),r.decoration&&(s+=`ansi-${r.decoration} `),""===s)?null:s=s.substring(0,s.length-1)):null;if(!e)return i.createElement("span",{style:l,key:n,className:c},r.content);let a=[],u=/(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g,f=0;for(;null!==(o=u.exec(r.content));){let[,e,t]=o,n=o.index+e.length;n>f&&a.push(r.content.substring(f,n));let s=t.startsWith("www.")?`http://${t}`:t;a.push(i.createElement("a",{key:f,href:s,target:"_blank"},`${t}`)),f=u.lastIndex}return f<r.content.length&&a.push(r.content.substring(f)),i.createElement("span",{style:l,key:n,className:c},a)}function l(e){let{className:t,useClasses:r,children:l,linkify:c}=e;return i.createElement("code",{className:t},(function(e,t=!1){return e=(0,o.escapeCarriageReturn)(function(e){let t=e;do t=(e=t).replace(/[^\n]\x08/gm,"");while(t.length<e.length);return e}(e)),n.ansiToJson(e,{json:!0,remove_empty:!0,use_classes:t})})(null!=l?l:"",null!=r&&r).map(s.bind(null,null!=c&&c,null!=r&&r)))}},27733:function(e,t,r){"use strict";r.d(t,{B:function(){return l}});var n=r(2265),o=r(56989),i=r(42210),s=r(67256);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o.b)(t),[c,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,l=a(u,r),c=(0,i.e)(t,l.collectionRef);return n.createElement(s.g7,{ref:c},o)}),h=e+"CollectionItemSlot",g="data-radix-collection-item",p=n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,c=n.useRef(null),u=(0,i.e)(t,c),f=a(h,r);return n.useEffect(()=>(f.itemMap.set(c,{ref:c,...l}),()=>void f.itemMap.delete(c))),n.createElement(s.g7,{[g]:"",ref:u},o)});return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),i=n.useRef(new Map).current;return n.createElement(c,{scope:t,itemMap:i,collectionRef:o},r)},Slot:f,ItemSlot:p},function(t){let r=a(e+"CollectionConsumer",t),o=n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${g}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return o},l]}},65400:function(e,t,r){"use strict";r.d(t,{gm:function(){return i}});var n=r(2265);let o=(0,n.createContext)(void 0);function i(e){let t=(0,n.useContext)(o);return e||t||"ltr"}}}]);