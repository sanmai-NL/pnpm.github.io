"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8610],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||p;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<p;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(2081),o=r(4604),p=(r(9496),r(9613)),a=["components"],c={id:"production",title:"\u672c\u756a\u74b0\u5883\u3067\u306e\u5229\u7528"},i=void 0,l={unversionedId:"production",id:"production",title:"\u672c\u756a\u74b0\u5883\u3067\u306e\u5229\u7528",description:"pnpm\u3092\u4f7f\u7528\u3057\u3066\u672c\u756a\u74b0\u5883\u3067\u3042\u306a\u305f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u7acb\u3061\u4e0a\u3052\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002 1\u3064\u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002 \u305d\u3057\u3066\u3042\u306a\u305f\u306e\u672c\u756a\u74b0\u5883\u3067pnpm install\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30df\u30c3\u30c8\u3057\u305f\u6642\u70b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\u3059\u3002 \u3055\u307e\u3056\u307e\u306a\u74b0\u5883\u3067\u3042\u306a\u305f\u306e\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u3092\u56fa\u5b9a\u3059\u308b\u3082\u3063\u3068\u3082\u52b9\u679c\u7684\u306a\u65b9\u6cd5\u3067\u3059\uff08\u79c1\u305f\u3061\u304c\u63a8\u5968\u3059\u308b\u65b9\u6cd5\u3067\u3059\uff09\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/production.md",sourceDirName:".",slug:"/production",permalink:"/ja/next/production",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"production",title:"\u672c\u756a\u74b0\u5883\u3067\u306e\u5229\u7528"}},u={},s=[],f={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm\u3092\u4f7f\u7528\u3057\u3066\u672c\u756a\u74b0\u5883\u3067\u3042\u306a\u305f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u7acb\u3061\u4e0a\u3052\u308b\u65b9\u6cd5\u306f2\u3064\u3042\u308a\u307e\u3059\u3002 1\u3064\u306f\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u65b9\u6cd5\u3067\u3059\u3002 \u305d\u3057\u3066\u3042\u306a\u305f\u306e\u672c\u756a\u74b0\u5883\u3067",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install"),"\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u3059\u308b\u3068\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3055\u308c\u305f\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u3092\u69cb\u7bc9\u3057\u307e\u3059\u3002\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30df\u30c3\u30c8\u3057\u305f\u6642\u70b9\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u4e00\u81f4\u3059\u308b\u3088\u3046\u306b\u306a\u308b\u306e\u3067\u3059\u3002 \u3055\u307e\u3056\u307e\u306a\u74b0\u5883\u3067\u3042\u306a\u305f\u306e\u4f9d\u5b58\u95a2\u4fc2\u30c4\u30ea\u30fc\u3092\u56fa\u5b9a\u3059\u308b\u3082\u3063\u3068\u3082\u52b9\u679c\u7684\u306a\u65b9\u6cd5\u3067\u3059\uff08\u79c1\u305f\u3061\u304c\u63a8\u5968\u3059\u308b\u65b9\u6cd5\u3067\u3059\uff09\u3002"),(0,p.kt)("p",null,"\u3082\u30461\u3064\u306e\u65b9\u6cd5\u306f\u3001\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u30b3\u30df\u30c3\u30c8\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u3042\u306a\u305f\u306e\u672c\u756a\u74b0\u5883\u3078\u30d1\u30c3\u30b1\u30fc\u30b8\u30b9\u30c8\u30a2\u3092\u30b3\u30d4\u30fc\u3059\u308b\u65b9\u6cd5\u3067\u3059\uff08\u30d1\u30c3\u30b1\u30fc\u30b8\u30b9\u30c8\u30a2\u306e\u5834\u6240\u306f",(0,p.kt)("a",{parentName:"p",href:"npmrc#stoer-dir"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30b9\u30c8\u30a2\u306e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3"),"\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\uff09\u3002 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --offline"),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001pnpm\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u30b9\u30c8\u30a2\u304b\u3089\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u30ec\u30b8\u30b9\u30c8\u30ea\u306b\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8981\u6c42\u3057\u306a\u3044\u306e\u3067\u3059\u3002 \u3053\u306e\u65b9\u6cd5\u306f\u3001\u306a\u3093\u3089\u304b\u306e\u7406\u7531\u3067\u5916\u90e8\u30ec\u30b8\u30b9\u30c8\u30ea\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u5236\u9650\u3055\u308c\u3066\u3044\u308b\u74b0\u5883\u3067",(0,p.kt)("strong",{parentName:"p"},"\u306e\u307f"),"\u63a8\u5968\u3057\u307e\u3059\u3002"))}m.isMDXComponent=!0}}]);