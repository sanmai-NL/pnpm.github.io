"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2379],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(2081),a=r(4604),o=(r(9496),r(9613)),c=["components"],i={id:"patch",title:"pnpm patch <pkg>"},p=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Added in: v7.4.0",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/es/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/es-ES",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/es/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/es/next/cli/patch-commit"}},u={},s=[],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v7.4.0"),(0,o.kt)("p",null,"Prepare a package for patching (inspired by a similar command in Yarn)."),(0,o.kt)("p",null,"This command will cause a package to be extracted in a temporary directory intended to be editable at will."),(0,o.kt)("p",null,"Once you're done with your changes, run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (with ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>")," being the temporary directory you received) to generate a patchfile and register it into your top-level manifest via the ",(0,o.kt)("a",{parentName:"p",href:"/es/next/package_json#pnpmpatcheddependencies"},(0,o.kt)("inlineCode",{parentName:"a"},"patchedDependencies"))," field."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"The pnpm patch command demo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);