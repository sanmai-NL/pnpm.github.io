"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4909],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||p;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(2081),o=n(4604),p=(n(9496),n(9613)),a=["components"],i={id:"deploy",title:"pnpm deploy"},l=void 0,c={unversionedId:"cli/deploy",id:"cli/deploy",title:"pnpm deploy",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/ja/next/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/ja/next/cli/init"},next:{title:"package.json",permalink:"/ja/next/package_json"}},d={},u=[{value:"Files included in the deployed project",id:"files-included-in-the-deployed-project",level:2}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3: v7.4.0"),(0,p.kt)("admonition",{type:"warning"},(0,p.kt)("p",{parentName:"admonition"},"This command is experimental")),(0,p.kt)("p",null,"Deploy a package from a workspace."),(0,p.kt)("p",null,"Usage:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"In case you build your project before deployment, also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," option to skip ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," installation."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"Usage in a docker image. After building everything in your monorepo, do this in a second image that uses your monorepo base image as a build context or in an additional build stage:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"files-included-in-the-deployed-project"},"Files included in the deployed project"),(0,p.kt)("p",null,"By default, all the files of the project are copied during deployment. The project's ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' may contain a "files" field to list the files and directories that should be copied.'))}m.isMDXComponent=!0}}]);