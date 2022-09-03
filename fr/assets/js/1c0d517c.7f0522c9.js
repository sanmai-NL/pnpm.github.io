"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[580],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,k=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return t?r.createElement(k,a(a({ref:n},d),{},{components:t})):r.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(2081),i=t(4604),l=(t(9496),t(9613)),a=["components"],o={id:"link",title:"pnpm link"},p=void 0,c={unversionedId:"cli/link",id:"version-7.x/cli/link",title:"pnpm link",description:"Aliases: ln",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-7.x/cli/link.md",sourceDirName:"cli",slug:"/cli/link",permalink:"/fr/cli/link",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"7.x",frontMatter:{id:"link",title:"pnpm link"},sidebar:"version-7.x/docs",previous:{title:"pnpm remove",permalink:"/fr/cli/remove"},next:{title:"pnpm unlink",permalink:"/fr/cli/unlink"}},d={},u=[{value:"Options",id:"options",level:2},{value:"--dir &lt;dir&gt;, -C",id:"--dir-dir--c",level:3},{value:"<code>pnpm link &lt;dir&gt;</code>",id:"pnpm-link-dir",level:3},{value:"<code>pnpm link --global</code>",id:"pnpm-link---global",level:3},{value:"<code>pnpm link --global &lt;pkg&gt;</code>",id:"pnpm-link---global-pkg",level:3}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"ln")),(0,l.kt)("p",null,"Rend le paquet local courant accessible depuis le syst\xe8me, ou depuis un autre emplacement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"pnpm link <dir>\npnpm link --global\npnpm link --global <pkg>\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--dir-dir--c"},"--dir ","<","dir",">",", -C"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Par d\xe9faut"),"\xa0: r\xe9pertoire de travail courant"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type")," : cha\xeene de caract\xe8re contenant le chemin d'acc\xe8s")),(0,l.kt)("p",null,"Modifie l'emplacement du r\xe9pertoire vers ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>"),"."),(0,l.kt)("h3",{id:"pnpm-link-dir"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link <dir>")),(0,l.kt)("p",null,"Permet de lier un paquet depuis le dossier ",(0,l.kt)("inlineCode",{parentName:"p"},"<dir>")," vers le dossier node_modules relatif au r\xe9pertoire de travail courant ou bien sp\xe9cifi\xe9 le chemin d'acc\xe8s via l'option",(0,l.kt)("inlineCode",{parentName:"p"},"--dir"),"."),(0,l.kt)("h3",{id:"pnpm-link---global"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global")),(0,l.kt)("p",null,"Permet de lier un paquet depuis le r\xe9pertoire de travail courant ou bien sp\xe9cifier via l'option ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," vers le dossier ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," global, de cette fa\xe7on il sera accessible depuis un autre paquet avec ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm link --global <pkg>"),"."),(0,l.kt)("h3",{id:"pnpm-link---global-pkg"},(0,l.kt)("inlineCode",{parentName:"h3"},"pnpm link --global <pkg>")),(0,l.kt)("p",null,"Links the specified package (",(0,l.kt)("inlineCode",{parentName:"p"},"<pkg>"),") from global ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," of package from where this command was executed or specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"--dir")," option."))}m.isMDXComponent=!0}}]);