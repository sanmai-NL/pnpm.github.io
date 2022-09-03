"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6305],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=p,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:p,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(2081),p=n(4604),o=(n(9496),n(9613)),a=["components"],c={id:"patch",title:"pnpm patch <pkg>"},i=void 0,l={unversionedId:"cli/patch",id:"version-7.x/cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/zh-TW/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"version-7.x/docs",previous:{title:"pnpm install-test",permalink:"/zh-TW/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/zh-TW/cli/patch-commit"}},u={},s=[],m={toc:s};function d(e){var t=e.components,n=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v7.4.0"),(0,o.kt)("p",null,"\u70ba\u4fee\u88dc\u7a0b\u5e8f\u6e96\u5099\u5957\u4ef6 (\u5f9e Yarn \u4e2d\u985e\u4f3c\u7684\u547d\u4ee4\u6fc0\u767c)\u3002"),(0,o.kt)("p",null,"\u9019\u500b\u547d\u4ee4\u5c07\u6703\u9020\u6210\u5957\u4ef6\u5728\u8a2d\u8a08\u70ba\u53ef\u7de8\u8f2f\u7684\u81e8\u6642\u76ee\u9304\u4e2d\u88ab\u58d3\u7e2e\u3002"),(0,o.kt)("p",null,"\u5728\u60a8\u5b8c\u6210\u8b8a\u66f4\u4e4b\u5f8c\uff0c\u8acb\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (\u9700\u5c07 ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>")," \u8a2d\u70ba\u60a8\u63a5\u6536\u5230\u7684\u81e8\u6642\u76ee\u9304) \u4f86\u7522\u751f\u4e00\u500b\u4fee\u88dc\u6a94\uff0c\u4e26\u900f\u904e ",(0,o.kt)("a",{parentName:"p",href:"/zh-TW/package_json#pnpmpatcheddependencies"},(0,o.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," \u6b04\u4f4d\u5c07\u5176\u8a3b\u518a\u5230\u6700\u4e0a\u5c64\u8cc7\u8a0a\u6e05\u55ae\u4e2d\u3002"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"pnpm \u4fee\u88dc\u6a94\u547d\u4ee4\u793a\u7bc4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);