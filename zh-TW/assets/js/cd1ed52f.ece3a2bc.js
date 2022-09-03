"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6109],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(2081),a=n(4604),i=(n(9496),n(9613)),l=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,s={unversionedId:"cli/publish",id:"cli/publish",title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/zh-TW/next/cli/publish",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/zh-TW/next/cli/env"},next:{title:"pnpm pack",permalink:"/zh-TW/next/cli/pack"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"--no-git-checks",id:"--no-git-checks",level:3},{value:"--publish-branch",id:"--publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"--otp",id:"--otp",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"\u8a2d\u5b9a",id:"\u8a2d\u5b9a",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Publishes a package to the registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>] [options]\n")),(0,i.kt)("p",null,"When publishing a package inside a ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/next/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,i.kt)("p",null,"You may override some fields before publish, using the ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#publishconfig"},"publishConfig")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". You also can use the ",(0,i.kt)("a",{parentName:"p",href:"/zh-TW/next/package_json#publishconfigdirectory"},(0,i.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools)."),(0,i.kt)("p",null,"When running this command recursively (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,i.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,i.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,i.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,i.kt)("h3",{id:"--no-git-checks"},"--no-git-checks"),(0,i.kt)("p",null,"\u4e0d\u8981\u6aa2\u67e5\u76ee\u524d\u7684\u5206\u652f\u662f\u5426\u662f\u60a8\u7684\u767c\u884c\u5206\u652f\u3001\u662f\u5426\u4e7e\u6de8\u4ee5\u53ca\u662f\u5426\u8207\u9060\u7aef\u4fdd\u6301\u6700\u65b0\u72c0\u614b\u3002"),(0,i.kt)("h3",{id:"--publish-branch"},"--publish-branch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("strong",{parentName:"li"},"master")," and ",(0,i.kt)("strong",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ul"},"Types: ",(0,i.kt)("strong",{parentName:"li"},"String"))),(0,i.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,i.kt)("h3",{id:"--force"},"--force"),(0,i.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,i.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,i.kt)("p",null,"Save the list of published packages to ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,i.kt)("p",null,"An example of a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishedPackages": [\n    {\n      "name": "foo",\n      "version": "1.0.0"\n    },\n    {\n      "name": "bar",\n      "version": "2.0.0"\n    }\n  }\n]\n')),(0,i.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,i.kt)("p",null,"Does everything a publish would do except actually publishing to the registry."),(0,i.kt)("h3",{id:"--otp"},"--otp"),(0,i.kt)("p",null,"When publishing packages that require two-factor authentication, this option can specify a one-time password."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh-TW/next/filtering"},"Read more about filtering.")),(0,i.kt)("h2",{id:"\u8a2d\u5b9a"},"\u8a2d\u5b9a"),(0,i.kt)("p",null,"You can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"git-checks"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-branch")," options in the ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," file."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".npmrc"',title:'".npmrc"'},"git-checks=false\npublish-branch=production\n")))}d.isMDXComponent=!0}}]);