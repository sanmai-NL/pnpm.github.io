"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9039],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(9496);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),y=p,f=u["".concat(l,".").concat(y)]||u[y]||m[y]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:p,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=r(2081),p=r(4604),a=(r(9496),r(9613)),o=["components"],c={id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},l=void 0,i={unversionedId:"pnpm-workspace_yaml",id:"version-6.x/pnpm-workspace_yaml",title:"pnpm-workspace.yaml",description:"pnpm-workspace.yaml \u5b9a\u4e49\u4e86 \u5de5\u4f5c\u7a7a\u95f4 \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/pnpm-workspace_yaml.md",sourceDirName:".",slug:"/pnpm-workspace_yaml",permalink:"/zh/6.x/pnpm-workspace_yaml",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"pnpm-workspace_yaml",title:"pnpm-workspace.yaml"},sidebar:"version-6.x/docs",previous:{title:".npmrc",permalink:"/zh/6.x/npmrc"},next:{title:".pnpmfile.cjs",permalink:"/zh/6.x/pnpmfile"}},s={},m=[],u={toc:m};function y(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," \u5b9a\u4e49\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh/6.x/workspaces"},"\u5de5\u4f5c\u7a7a\u95f4")," \u7684\u6839\u76ee\u5f55\uff0c\u5e76\u80fd\u591f\u4f7f\u60a8\u4ece\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u5305\u542b / \u6392\u9664\u76ee\u5f55 \u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5305\u542b\u6240\u6709\u5b50\u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pnpm-workspace.yaml"',title:'"pnpm-workspace.yaml"'},"packages:\n  # \u6240\u6709\u5728 packages/ \u548c components/ \u5b50\u76ee\u5f55\u4e0b\u7684 package\n  - 'packages/**'\n  - 'components/**'\n  # \u4e0d\u5305\u62ec\u5728 test \u6587\u4ef6\u5939\u4e0b\u7684 package\n  - '!**/test/**'\n")),(0,a.kt)("p",null,"\u5373\u4f7f\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u76ee\u5f55\u4f4d\u7f6e\u901a\u914d\u7b26\uff0c\u6839\u76ee\u5f55\u4e0b\u7684package\u76ee\u5f55\u4e5f\u603b\u662f\u88ab\u5305\u542b."))}y.isMDXComponent=!0}}]);