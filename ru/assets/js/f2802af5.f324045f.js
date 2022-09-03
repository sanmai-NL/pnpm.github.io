"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7192],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=u(r),m=l,d=h["".concat(o,".").concat(m)]||h[m]||s[m]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var n=r(2081),l=r(4604),i=(r(9496),r(9613)),a=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,u={unversionedId:"cli/publish",id:"version-6.x/cli/publish",title:"pnpm publish",description:"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/ru/6.x/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"version-6.x/docs",previous:{title:"pnpm env <\u043a\u043e\u043c\u0430\u043d\u0434\u0430>",permalink:"/ru/6.x/cli/env"},next:{title:"pnpm pack",permalink:"/ru/6.x/cli/pack"}},c={},s=[{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",level:2},{value:"--tag &lt;\u0442\u0435\u0433&gt;",id:"--tag-\u0442\u0435\u0433",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3}],h={toc:s};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0432 \u0440\u0435\u0435\u0441\u0442\u0440."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 ",(0,i.kt)("a",{parentName:"p",href:"/ru/6.x/workspaces"},"workspace")," \u0444\u0430\u0439\u043b \u041b\u0418\u0426\u0415\u041d\u0417\u0418\u0418 \u0438\u0437 \u043a\u043e\u0440\u043d\u044f \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0443\u043f\u0430\u043a\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043f\u0430\u043a\u0435\u0442\u043e\u043c (\u0435\u0441\u043b\u0438 \u043f\u0430\u043a\u0435\u0442 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0438)."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043b\u044f \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u043e\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/6.x/package_json#publishconfig"},"publishConfig")," \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". \u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/ru/6.x/package_json#publishconfigdirectory"},(0,i.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u0431\u043e\u0440\u043a\u0438)."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),") pnpm \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b, \u0432\u0435\u0440\u0441\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0435\u0449\u0435 \u043d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u044b \u0432 \u0440\u0435\u0435\u0441\u0442\u0440\u0435."),(0,i.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,i.kt)("h3",{id:"--tag-\u0442\u0435\u0433"},"--tag ","<","\u0442\u0435\u0433",">"),(0,i.kt)("p",null,"\u041f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442 \u043f\u0430\u043a\u0435\u0442 \u0441 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u0433\u043e\u043c. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439")," \u0442\u0435\u0433."),(0,i.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,i.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,i.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,i.kt)("h3",{id:"git-checks"},"git-checks"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v4.11.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"true")," (\u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 v5)"),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"Boolean"))),(0,i.kt)("p",null,"When true, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),(0,i.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v4.11.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,i.kt)("strong",{parentName:"li"},"master")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,i.kt)("h3",{id:"--force"},"--force"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v5.18.0"),(0,i.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,i.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v6.5.0"),(0,i.kt)("p",null,"Save the list of published packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,i.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430",">"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: 4.6.0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ru/6.x/filtering"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438.")))}m.isMDXComponent=!0}}]);