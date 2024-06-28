(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5608],{97895:function(){},95588:function(e,t,a){Promise.resolve().then(a.bind(a,22339))},22339:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ep}});var s=a(36164),r=a(3546),n=a(42891),l=a.n(n),o=a(70652),i=a.n(o),d=a(11978),c=a(83332),u=a(14712),f=a.n(u),m=a(71480),x=a(21808),h=a(93877),p=a(43240),g=a(9010),b=a(6246),j=a(98454),y=a(70526),v=a(80605),N=a(11634),w=a(74248),k=a(31458),S=a(79972),A=a(81565),Y=a(82394),_=a(5266),D=a(29),M=a(68172),C=a(48537),R=a(30601),I=a(91302),Z=a(30220);let E="community-dialog-shown";function T(){let{status:e}=(0,I.kP)(),[t,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{"authenticated"!==e||localStorage.getItem(E)||(a(!0),localStorage.setItem(E,"true"))},[e]),(0,s.jsx)(Z.Vq,{open:t,onOpenChange:a,children:(0,s.jsxs)(Z.cZ,{children:[(0,s.jsxs)(Z.fK,{className:"gap-3",children:[(0,s.jsx)(Z.$N,{children:"Join the Tabby community"}),(0,s.jsx)(Z.Be,{children:"Connect with other contributors building Tabby. Share knowledge, get help, and contribute to the open-source project."})]}),(0,s.jsx)(Z.cN,{className:"sm:justify-start",children:(0,s.jsxs)("a",{target:"_blank",href:"https://links.tabbyml.com/join-slack-webserver",className:(0,k.d)(),children:[(0,s.jsx)(A.IconSlack,{className:"-ml-2 h-8 w-8"}),"Join us on Slack"]})})]})})}var z=a(94529),H=a(63743),O=a(52569),V=a(7449),K=a(94755),B=a(36619),P=a(99092),U=a.n(P),L=a(72223),q=a(42390),Q=a.n(q),F=a(40055),G=a(18500),J=a(70410),$=a(35814),W=a(39018),X=a.n(W),ee=a(60079),et=a(994),ea=a(37568),es=a(16294),er=a(82382),en=a(85948);function el(e){let{active:t,payload:a}=e;if(t&&a&&a.length){let{value:e,views:t,name:r}=a[0].payload;return t?(0,s.jsx)(S.Zb,{children:(0,s.jsxs)(S.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Rate:"}),(0,s.jsxs)("b",{children:[e,"%"]})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:r})]})}):null}return null}function eo(e){let{active:t,payload:a,type:r}=e;if(t&&a&&a.length){let{views:e,selects:t,name:n}=a[0].payload;return e?(0,s.jsx)(S.Zb,{children:(0,s.jsxs)(S.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[("view"===r||"all"===r)&&(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completions:"}),(0,s.jsx)("b",{children:e})]}),("accept"===r||"all"===r)&&(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptances:"}),(0,s.jsx)("b",{children:t})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:n})]})}):null}return null}function ei(e){let{from:t,to:a,dailyStats:r}=e,{theme:n}=(0,g.X)(),l=(0,$.Z)(null==r?void 0:r.map(e=>e.views)),o=(0,$.Z)(null==r?void 0:r.map(e=>e.selects)),i=(0,B.Z)({start:t,end:a}),d={},c={};null==r||r.forEach(e=>{let t=U()(e.start).format("YYYY-MM-DD");d[t]=d[t]||0,c[t]=c[t]||0,d[t]+=e.views,c[t]+=e.selects},{});let u=0===l?0:(o/l*100).toFixed(2),f=i.map(e=>{let t=U()(e).format("YYYY-MM-DD"),a=d[t]||0,s=c[t]||0;return{name:U()(e).format("MMMM D"),value:0===a?0:parseFloat((s/a*100).toFixed(2)),selects:s,views:a}}),m=i.map(e=>{let t=U()(e).format("YYYY-MM-DD"),a=d[t]||0,s=c[t]||0,r=a-s;return{name:U()(e).format("MMMM D"),views:a,selects:s,pending:0===a?.5:r,realPending:0===a?0:r,viewPlaceholder:0===a?.5:0,selectPlaceholder:0===s?.5:0}});return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-x-4 md:space-y-0 xl:justify-start",children:[(0,s.jsxs)(S.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-3 md:block","data-aos":"fade-up","data-aos-delay":"200",children:[(0,s.jsx)(S.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,s.jsx)(S.ll,{className:"text-sm font-normal leading-none tracking-tight",children:"Acceptance Rate"})}),(0,s.jsx)(S.aY,{className:"px-4 pb-2",children:(0,s.jsxs)("div",{className:"font-bold",children:[u,"%"]})}),(0,s.jsx)(ee.h,{width:"100%",height:40,children:(0,s.jsxs)(et.w,{data:f,margin:{top:10,right:20,left:15,bottom:5},children:[(0,s.jsx)(ea.x,{type:"monotone",dataKey:"value",stroke:"dark"===n?"#e8e1d3":"#54452c",strokeWidth:1.5}),(0,s.jsx)(es.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(el,{})})]})})]}),(0,s.jsxs)(S.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-3 md:block","data-aos":"fade-up","data-aos-delay":"250",children:[(0,s.jsx)(S.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,s.jsx)(S.ll,{className:"text-sm font-normal leading-none tracking-tight",children:"Completions"})}),(0,s.jsx)(S.aY,{className:"px-4 pb-2",children:(0,s.jsx)("div",{className:"font-bold",children:X()(l).format("0,0")})}),(0,s.jsx)(ee.h,{width:"100%",height:40,children:(0,s.jsxs)(er.v,{data:m,margin:{top:0===l?30:5,right:15,left:15,bottom:0},children:[(0,s.jsx)(en.$,{dataKey:"views",stackId:"stats",fill:"dark"===n?"#e8e1d3":"#54452c",radius:3}),(0,s.jsx)(en.$,{dataKey:"viewPlaceholder",stackId:"stats",fill:"dark"===n?"#423929":"#e8e1d3",radius:3}),(0,s.jsx)(es.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(eo,{type:"view"})})]})})]}),(0,s.jsxs)(S.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-transparent pb-3 md:block","data-aos":"fade-up","data-aos-delay":"300",children:[(0,s.jsx)(S.Ol,{className:"flex flex-row items-center justify-between space-y-0 px-4 pb-1 pt-4",children:(0,s.jsx)(S.ll,{className:"text-sm font-normal leading-none tracking-tight",children:"Acceptances"})}),(0,s.jsx)(S.aY,{className:"px-4 pb-2",children:(0,s.jsx)("div",{className:"font-bold",children:X()(o).format("0,0")})}),(0,s.jsx)(ee.h,{width:"100%",height:40,children:(0,s.jsxs)(er.v,{data:m,margin:{top:0===l?30:5,right:15,left:15,bottom:0},children:[(0,s.jsx)(en.$,{dataKey:"selects",stackId:"stats",fill:"dark"===n?"#e8e1d3":"#54452c",radius:3}),(0,s.jsx)(en.$,{dataKey:"selectPlaceholder",stackId:"stats",fill:"dark"===n?"#423929":"#e8e1d3",radius:3}),(0,s.jsx)(es.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(eo,{type:"accept"})})]})})]})]})})}function ed(e){let{data:t}=e,{theme:a}=(0,g.X)(),r=(0,K.iP)(),n=r.width||0;return(0,s.jsx)(L.ZP,{data:t,colorScheme:"dark"===a?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:n>=800?7:9,hideTotalCount:!0,showWeekdayLabels:!0,fontSize:11})}function ec(){var e,t,a;let r,n;let[{data:l}]=(0,j.P)(),o=(0,d.useSearchParams)(),i=(0,v.UA)(),c=i||"true"===o.get("sample"),u=U()().subtract(6,"day").startOf("day").utc().format(),f=U()().endOf("day").utc().format(),[{data:m,fetching:x}]=(0,F.aM)({query:J.Cl,variables:{start:u,end:f,users:null==l?void 0:null===(e=l.me)||void 0===e?void 0:e.id}});if(c){let e=(0,B.Z)({start:U()().subtract(6,"day").toDate(),end:U()().toDate()});r=e.map(e=>{let t=[G.SQ.Typescript,G.SQ.Python,G.SQ.Rust],a=Q()(U()(e).format("YYYY-MM-DD")+(null==l?void 0:l.me.id)),s=Math.ceil(20*a()),r=Math.ceil(s/.35);return{start:U()(e).utc().format(),end:U()(e).add(1,"day").utc().format(),completions:r,selects:s,views:r,language:t[s%t.length]}})}else r=null==m?void 0:m.dailyStats.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views,language:e.language}));let[{data:h,fetching:p}]=(0,F.aM)({query:J.Y6,variables:{users:null==l?void 0:null===(t=l.me)||void 0===t?void 0:t.id}}),g=0;if(c){let e=(0,B.Z)({start:U()().toDate(),end:U()().subtract(365,"days").toDate()});n=e.map(e=>{let t=Q()(U()(e).format("YYYY-MM-DD")+(null==l?void 0:l.me.id)),a=Math.ceil(20*t()),s=a+Math.floor(10*t());return{start:U()(e).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),end:U()(e).add(1,"day").format("YYYY-MM-DD[T]HH:mm:ss[Z]"),completions:s,selects:a,views:s}})}else n=null==h?void 0:h.dailyStatsInPastYear.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views}));let b=(null==n?void 0:n.reduce((e,t)=>{let a=U().utc(t.start).format("YYYY-MM-DD");return g+=t.views+t.selects,{...e,[a]:t.views}},{}))||{},y=Array(365).fill("").map((e,t)=>{let a=U()().subtract(t,"days").format("YYYY-MM-DD"),s=b[a]||0;return{date:a,count:s,level:Math.min(4,Math.ceil(s/5))}}).reverse();return(null==l?void 0:null===(a=l.me)||void 0===a?void 0:a.id)?(0,s.jsxs)("div",{className:"flex w-full flex-col gap-y-4",children:[(0,s.jsxs)("div",{"data-aos":"fade-up","data-aos-delay":"150",children:[(0,s.jsxs)("h3",{className:"mb-2 text-xs font-medium tracking-tight",children:[(0,s.jsx)("b",{children:g})," activities in the last year"]}),(0,s.jsx)("div",{className:"flex items-end justify-center rounded-xl border px-5 py-4",children:(0,s.jsx)(ed,{data:y})})]}),(0,s.jsx)(ei,{dailyStats:r,from:U()().subtract(6,"day").toDate(),to:U()().toDate()})]}):(0,s.jsx)(s.Fragment,{})}a(47682);var eu=a(11208);let ef=(0,p.BX)("\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n");function em(){let[e]=(0,h.Ot)(),{data:t}=(0,b.Q)(),[{data:a}]=(0,j.P)(),n=(0,v.xG)(),{theme:o}=(0,g.X)(),[i]=(0,R.Hb)(),u=(0,r.useRef)(null),m=(0,d.useRouter)(),[p,y]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{setTimeout(()=>{if(u.current){let e=u.current.scrollHeight>u.current.clientHeight;f().init({once:!0,duration:250,disable:e})}},100)},[u.current]),(0,r.useEffect)(()=>{m.prefetch("/search")},[m]),!t||!(null==a?void 0:a.me))return(0,s.jsx)(s.Fragment,{});let N=i?{height:"calc(100vh - ".concat(R.wt,")")}:{height:"100vh"};return(0,s.jsxs)("div",{className:"transition-all",style:N,children:[(0,s.jsx)("header",{className:"flex h-16 items-center justify-end px-4",children:(0,s.jsxs)("div",{className:"flex items-center gap-x-6",children:[(0,s.jsx)(M.q,{children:(0,s.jsx)(H.T,{})}),(0,s.jsx)(V.Z,{showHome:!1,showSetting:!0,children:(0,s.jsx)(O.Y,{className:"h-10 w-10 border"})})]})}),(0,s.jsx)("main",{className:"h-[calc(100%-4rem)] flex-col items-center justify-center overflow-auto pb-8 lg:flex lg:pb-0",ref:u,children:(0,s.jsxs)("div",{className:"mx-auto flex min-h-0 w-full flex-col items-center px-10 lg:-mt-[2vh] lg:max-w-4xl lg:px-0",children:[(0,s.jsx)(l(),{src:c.Z,alt:"logo",width:192,className:(0,w.cn)("mt-4 invert dark:invert-0",{"mb-4":n&&e.value,"mb-2":!n||!e.value}),"data-aos":"fade-down","data-aos-delay":"150"}),(0,s.jsxs)("div",{className:(0,w.cn)(" flex scroll-m-20 items-center gap-2 text-sm tracking-tight text-secondary-foreground",{"mb-6":n&&e.value,"mb-9":!n||!e.value}),"data-aos":"fade-down","data-aos-delay":"100",children:[(0,s.jsx)("span",{children:"research"}),(0,s.jsx)(eu.Z,{orientation:"vertical",className:"h-[80%]"}),(0,s.jsx)("span",{children:"develop"}),(0,s.jsx)(eu.Z,{orientation:"vertical",className:"h-[80%]"}),(0,s.jsx)("span",{children:"debug"})]}),n&&e.value&&(0,s.jsx)("div",{className:"mb-10 w-full","data-aos":"fade-down",children:(0,s.jsx)(z.Z,{onSearch:e=>{y(!0),sessionStorage.removeItem(x.$6.SEARCH_LATEST_MSG),sessionStorage.setItem(x.$6.SEARCH_INITIAL_MSG,e),m.push("/search")},showBetaBadge:!0,autoFocus:!0,loadingWithSpinning:!0,isLoading:p,cleanAfterSearch:!1})}),(0,s.jsxs)("div",{className:"flex w-full flex-col gap-x-5 lg:flex-row",children:[(0,s.jsx)("div",{className:"mb-10 w-full rounded-lg p-4 lg:mb-0 lg:w-[21rem]",style:{background:"dark"===o?"#333":"#e8e1d3"},"data-aos":"fade-up","data-aos-delay":"100",children:(0,s.jsx)(ex,{})}),(0,s.jsx)(ec,{})]})]})})]})}function ex(e){let{className:t}=e,[{data:a},r]=(0,j.P)(),n=(0,y.j)(),l=(0,N.D)(ef,{onCompleted:()=>r()});return(null==a?void 0:a.me)?(0,s.jsxs)("div",{className:t,children:[(0,s.jsxs)(S.aY,{className:"flex flex-col gap-6 px-0",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(_._,{className:"text-xs font-semibold",children:"Endpoint URL"}),(0,s.jsx)(C.q,{value:n})]}),(0,s.jsx)("span",{className:"flex items-center gap-1",children:(0,s.jsx)(Y.I,{value:n,onChange:m.Z,className:"h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 shadow-none dark:border-primary/50"})})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("span",{className:"flex items-center gap-1",children:[(0,s.jsx)(_._,{className:"text-xs font-semibold",children:"Token"}),(0,s.jsx)(C.q,{value:a.me.authToken}),(0,s.jsx)(k.z,{title:"Rotate",size:"icon",variant:"hover-destructive",onClick:()=>l(),children:(0,s.jsx)(A.IconRotate,{})})]}),(0,s.jsx)("span",{className:"flex items-center gap-1",children:(0,s.jsx)(Y.I,{className:"h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 font-mono shadow-none dark:border-primary/50",value:a.me.authToken,onChange:m.Z})})]})]}),(0,s.jsx)(S.eW,{className:"px-0 pb-2 text-xs text-muted-foreground",children:(0,s.jsxs)("span",{children:["Use information above for IDE extensions / plugins configuration, see"," ",(0,s.jsx)("a",{className:"underline",target:"_blank",href:"https://tabby.tabbyml.com/docs/extensions/configurations#server",children:"documentation website"})," ","for details"]})}),(0,s.jsxs)("div",{className:"mb-6 mt-3 flex gap-x-3 lg:mb-0",children:[(0,s.jsx)(eh,{href:"https://marketplace.visualstudio.com/items?itemName=TabbyML.vscode-tabby",name:"Visual Studio Code",icon:(0,s.jsx)(A.IconVSCode,{className:"h-5 w-5"})}),(0,s.jsx)(eh,{href:"https://plugins.jetbrains.com/plugin/22379-tabby",name:"JetBrains",icon:(0,s.jsx)(A.IconJetBrains,{className:"h-5 w-5"})})]})]}):(0,s.jsx)(s.Fragment,{})}function eh(e){let{href:t,name:a,icon:r}=e;return(0,s.jsxs)(D.u,{children:[(0,s.jsx)(D.aJ,{children:(0,s.jsx)(i(),{href:t,className:"transition-all hover:opacity-80 dark:text-muted-foreground",target:"_blank",children:r})}),(0,s.jsx)(D._v,{children:(0,s.jsx)("p",{children:a})})]})}function ep(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(em,{}),(0,s.jsx)(T,{})]})}},48537:function(e,t,a){"use strict";a.d(t,{q:function(){return o}});var s=a(36164);a(3546);var r=a(28312),n=a(31458),l=a(81565);function o(e){let{className:t,value:a,onCopyContent:o,text:i,...d}=e,{isCopied:c,copyToClipboard:u}=(0,r.m)({timeout:2e3,onCopyContent:o});return a?(0,s.jsxs)(n.z,{variant:"ghost",size:i?"default":"icon",className:t,onClick:()=>{c||u(a)},...d,children:[c?(0,s.jsx)(l.IconCheck,{className:"text-green-600"}):(0,s.jsx)(l.IconCopy,{}),i&&(0,s.jsx)("span",{children:i}),!i&&(0,s.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},94529:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(36164),r=a(3546),n=a(23455),l=a(9010),o=a(74248),i=a(81565);function d(e){let{onSearch:t,className:a,placeholder:d,showBetaBadge:c,isLoading:u,autoFocus:f,loadingWithSpinning:m,cleanAfterSearch:x=!0,inSearchPage:h}=e,[p,g]=(0,r.useState)(!1),[b,j]=(0,r.useState)(!1),[y,v]=(0,r.useState)(""),{theme:N}=(0,l.X)();(0,r.useEffect)(()=>{g(!0)},[]);let w=()=>{y&&!u&&(t(y),x&&v(""))};return(0,s.jsxs)("div",{className:(0,o.cn)("relative flex w-full items-center overflow-hidden rounded-lg border border-muted-foreground bg-background px-4 transition-all hover:border-muted-foreground/60",{"!border-zinc-400":b&&h&&"dark"!==N,"!border-primary":b&&(!h||"dark"===N),"py-0":c,"border-2 dark:border border-zinc-400 hover:border-zinc-400/60 dark:border-muted-foreground dark:hover:border-muted-foreground/60":h},a),children:[c&&(0,s.jsx)("span",{className:"absolute -right-8 top-1 mr-3 rotate-45 rounded-none border-none py-0.5 pl-6 pr-5 text-xs text-primary",style:{background:"dark"===N?"#333":"#e8e1d3"},children:"Beta"}),(0,s.jsx)(n.Z,{className:(0,o.cn)("text-area-autosize flex-1 resize-none rounded-lg !border-none bg-transparent !shadow-none !outline-none !ring-0 !ring-offset-0",{"!h-[48px]":!p,"py-4":!c,"py-5":c}),placeholder:d||"Ask anything...",maxRows:5,onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey)return e.preventDefault()},onKeyUp:e=>{if("Enter"===e.key&&!e.shiftKey)return w()},onFocus:()=>j(!0),onBlur:()=>j(!1),onChange:e=>v(e.target.value),value:y,autoFocus:f}),(0,s.jsxs)("div",{className:(0,o.cn)("mr-6 flex items-center rounded-lg p-1 transition-all",{"bg-primary text-primary-foreground cursor-pointer":y.length>0,"!bg-muted !text-primary !cursor-default":u||0===y.length,"mr-6":c,"mr-1.5":!c}),onClick:w,children:[m&&u&&(0,s.jsx)(i.IconSpinner,{className:"h-3.5 w-3.5"}),(!m||!u)&&(0,s.jsx)(i.IconArrowRight,{className:"h-3.5 w-3.5"})]})]})}},79972:function(e,t,a){"use strict";a.d(t,{Ol:function(){return o},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var s=a(36164),r=a(3546),n=a(74248);let l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});l.displayName="Card";let o=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",a),...r})});o.displayName="CardHeader";let i=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",a),...r})});i.displayName="CardTitle";let d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...r})});d.displayName="CardDescription";let c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",a),...r})});c.displayName="CardContent";let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",a),...r})});u.displayName="CardFooter"},30220:function(e,t,a){"use strict";a.d(t,{$N:function(){return h},Be:function(){return p},Vq:function(){return i},cN:function(){return x},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var s=a(36164),r=a(3546),n=a(4318),l=a(1663),o=a(74248);let i=n.fC,d=n.xz,c=n.h_;n.x8;let u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});u.displayName=n.aV.displayName;let f=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...i,children:[r,(0,s.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=n.VY.displayName;let m=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};m.displayName="DialogHeader";let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};x.displayName="DialogFooter";let h=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});h.displayName=n.Dx.displayName;let p=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})});p.displayName=n.dk.displayName},82394:function(e,t,a){"use strict";a.d(t,{I:function(){return l}});var s=a(36164),r=a(3546),n=a(74248);let l=r.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});l.displayName="Input"},5266:function(e,t,a){"use strict";a.d(t,{_:function(){return d}});var s=a(36164),r=a(3546),n=a(90893),l=a(14375),o=a(74248);let i=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.f,{ref:t,className:(0,o.cn)(i(),a),...r})});d.displayName=n.f.displayName},11208:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(36164),r=a(3546),n=a(74225),l=a(74248);let o=r.forwardRef((e,t)=>{let{className:a,orientation:r="horizontal",decorative:o=!0,...i}=e;return(0,s.jsx)(n.f,{ref:t,decorative:o,orientation:r,className:(0,l.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",a),...i})});o.displayName=n.f.displayName},29:function(e,t,a){"use strict";a.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return o},u:function(){return i}});var s=a(36164),r=a(3546),n=a(44421),l=a(74248);let o=n.zt,i=n.fC,d=n.xz,c=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...o}=e;return(0,s.jsx)(n.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",a),...o})});c.displayName=n.VY.displayName},21808:function(e,t,a){"use strict";a.d(t,{$6:function(){return n},L8:function(){return r},o0:function(){return s}});let s="name@yourcompany.com",r=20,n={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_LATEST_MSG:"_tabby_search_latest_msg"}},93877:function(e,t,a){"use strict";a.d(t,{BT:function(){return i},Ds:function(){return d},Ot:function(){return u}});var s=a(3546);let r=(e,t)=>{let[a,r]=(0,s.useState)(t),[n,l]=(0,s.useState)(!0);return(0,s.useEffect)(()=>{let t=localStorage.getItem(e);t&&r(JSON.parse(t)),l(!1)},[]),[a,t=>{r(t),localStorage.setItem(e,JSON.stringify(t))},n]};class n{get value(){if("undefined"!=typeof localStorage){let e=localStorage.getItem(this.storageKey);if(e)return"true"===e}return this.defaultValue}constructor(e,t,a,s){this.storageKey=e,this.title=t,this.description=a,this.defaultValue=s}}class l{defineGlobalVar(){return new n(this.storageKey,this.title,this.description,this.defaultValue)}defineHook(){return()=>{let[e,t,a]=r(this.storageKey,this.defaultValue);return[{value:e,title:this.title,description:this.description,loading:a},()=>{t(!e)}]}}constructor(e,t,a,s){this.storageKey="EXP_".concat(e),this.title=t,this.description=a,this.defaultValue=null!=s&&s}}let o=new l("enable_code_browser_quick_action_bar","Quick Action Bar","Enable Quick Action Bar to display a convenient toolbar when you select code, offering options to explain the code, add unit tests, and more.",!0),i=o.defineGlobalVar(),d=o.defineHook(),c=new l("enable_search","Search","Enable the search on the home page to search for anything you want to know using the local chat model.",!0);c.defineGlobalVar();let u=c.defineHook()},28312:function(e,t,a){"use strict";a.d(t,{m:function(){return o}});var s=a(3546),r=a(61200),n=a.n(r),l=a(2578);function o(e){let{timeout:t=2e3,onError:a,onCopyContent:r}=e,[o,i]=s.useState(!1),d=()=>{i(!0),setTimeout(()=>{i(!1)},t)},c=e=>{if("function"==typeof a){null==a||a(e);return}l.A.error("Failed to copy.")};return{isCopied:o,copyToClipboard:e=>{var t;if(e){if(r){r(e),d();return}if(null===(t=navigator.clipboard)||void 0===t?void 0:t.writeText)navigator.clipboard.writeText(e).then(d).catch(c);else{let t=n()(e);t?d():c()}}}}}},6246:function(e,t,a){"use strict";a.d(t,{Q:function(){return n}});var s=a(21454),r=a(3765);function n(){return(0,s.ZP)("/v1/health",e=>(0,r.Z)(e,{errorHandler:()=>{throw Error("Unhealth")}}),{shouldRetryOnError:!1})}},70526:function(e,t,a){"use strict";a.d(t,{e:function(){return i},j:function(){return d}});var s=a(3546),r=a(40055),n=a(43240),l=a(74248);let o=(0,n.BX)("\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n"),i=e=>(0,r.aM)({query:o,...e}),d=()=>{let[{data:e}]=i(),t=null==e?void 0:e.networkSetting,a=s.useMemo(()=>(null==t?void 0:t.externalUrl)||((0,l.S_)()?new URL(window.location.href).origin:""),[t]);return a}},83332:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo-dark.362a169d.png",height:149,width:395,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOklEQVR42gXAIQqAMBQA0A+K3eIVHNhEk21Wk5iN4g6w6z9GyBaDZDLr9OH0qD6/4nWHUZLtNqvL0QDmsR1AxwcSfQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}}},function(e){e.O(0,[7565,7998,5498,6312,4007,5384,1283,3449,2578,9421,1454,4421,4546,9275,7680,9148,739,314,2513,9736,1565,3396,1969,3375,5289,1744],function(){return e(e.s=95588)}),_N_E=e.O()}]);