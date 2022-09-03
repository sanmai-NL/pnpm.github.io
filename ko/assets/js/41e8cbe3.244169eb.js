"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2169],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,v=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var r=n(2081),l=n(4604),i=(n(9496),n(9613)),o=["components"],p={id:"list",title:"pnpm list"},a=void 0,c={unversionedId:"cli/list",id:"version-7.x/cli/list",title:"pnpm list",description:"\ubcc4\uce6d: ls",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/cli/list.md",sourceDirName:"cli",slug:"/cli/list",permalink:"/ko/cli/list",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"list",title:"pnpm list"},sidebar:"version-7.x/docs",previous:{title:"pnpm audit",permalink:"/ko/cli/audit"},next:{title:"pnpm outdated",permalink:"/ko/cli/outdated"}},d={},u=[{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--json",id:"--json",level:3},{value:"--long",id:"--long",level:3},{value:"--parseable",id:"--parseable",level:3},{value:"--global",id:"--global",level:3},{value:"--depth &lt;number&gt;",id:"--depth-number",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ubcc4\uce6d: ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")),(0,i.kt)("p",null,"\uc774 \uba85\ub839\uc740 \uc124\uce58\ub41c \ud328\ud0a4\uc9c0\uc758 \ubaa8\ub4e0 \ubc84\uc804 \ubc0f \ud574\ub2f9\ud558\ub294 \uc758\uc874\uc131\uc744 \ud2b8\ub9ac \uad6c\uc870\ub85c \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc704\uce58 \uc778\uc218\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"name-pattern@version-range")," \uc2dd\ubcc4\uc790\uc774\uba70, \ub294 \uba85\uba85\ub41c \ud328\ud0a4\uc9c0\ub85c\ub9cc \uacb0\uacfc\ub97c \uc81c\ud55c\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,i.kt)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),(0,i.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc5d0\uc11c \uc2e4\ud589\ub420 \ub54c \ud558\uc704 \ub514\ub809\ud130\ub9ac\uc758 \ubaa8\ub4e0 \ud328\ud0a4\uc9c0 \ub610\ub294 \ubaa8\ub4e0 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud574 \uba85\ub839\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--json"},"--json"),(0,i.kt)("p",null,"JSON \ud615\uc2dd\uc73c\ub85c \ub85c\uadf8\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--long"},"--long"),(0,i.kt)("p",null,"\ud655\uc7a5\ub41c \uc815\ubcf4\ub97c \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--parseable"},"--parseable"),(0,i.kt)("p",null,"\ud2b8\ub9ac \ubdf0 \ub300\uc2e0 \uad6c\ubb38 \ubd84\uc11d \uac00\ub2a5\ud55c \ud615\uc2dd\uc73c\ub85c \ud328\ud0a4\uc9c0 \ub514\ub809\ud1a0\ub9ac\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"\ud604\uc7ac \ud504\ub85c\uc81d\ud2b8 \ub300\uc2e0 \uae00\ub85c\ubc8c \uc124\uce58 \ub514\ub809\ud130\ub9ac\uc5d0 \ud328\ud0a4\uc9c0\ub97c \ub098\uc5f4\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--depth-number"},"--depth ","<","number",">"),(0,i.kt)("p",null,"\uc758\uc874\uc131 \ud2b8\ub9ac\uc758 \ucd5c\ub300 \ud45c\uc2dc \uae4a\uc774\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," \ub294 \uc9c1\uc811\uc801\uc778 \uc758\uc874\uc131\ub9cc \ub098\uc5f4\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," \uc740 \ud504\ub85c\uc81d\ud2b8\ub9cc \ub098\uc5f4\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," \uc635\uc158\uacfc \ud568\uaed8 \uc0ac\uc6a9\ub420 \ub54c \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ub0b4\uc5d0\uc11c \uc720\uc6a9\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," \ubc0f ",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\uc758 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \uc758\uc874\uc131 \uadf8\ub798\ud504\ub9cc \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"\uc758 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \uc758\uc874\uc131 \uadf8\ub798\ud504\ub9cc \ud45c\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"\uc758 \ud328\ud0a4\uc9c0\ub97c \ud45c\uc2dc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/ko/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}m.isMDXComponent=!0}}]);