"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4687],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(2081),o=n(4604),i=(n(9496),n(9613)),a=["components"],c={id:"production",title:"Production (Yay\u0131nlama a\u015famas\u0131)"},s=void 0,p={unversionedId:"production",id:"version-6.x/production",title:"Production (Yay\u0131nlama a\u015famas\u0131)",description:"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run pnpm install - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/production.md",sourceDirName:".",slug:"/production",permalink:"/tr/6.x/production",draft:!1,editUrl:"https://crowdin.com/project/pnpm/tr",tags:[],version:"6.x",frontMatter:{id:"production",title:"Production (Yay\u0131nlama a\u015famas\u0131)"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways to bootstrap your package in a production environment with pnpm. One of these is to commit the lockfile. Then, in your production environment, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install")," - this will build the dependency tree using the lockfile, meaning the dependency versions will be consistent with how they were when the lockfile was committed. This is the most effective way (and the one we recommend) to ensure your dependency tree persists across environments."),(0,i.kt)("p",null,"The other method is to commit the lockfile AND copy the package store to your production environment (you can change where with the ",(0,i.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"store location option"),"). Then, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," and pnpm will use the packages from the global store, so it will not make any requests to the registry. This is recommended ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," for environments where external access to the registry is unavailable for whatever reason."))}d.isMDXComponent=!0}}]);