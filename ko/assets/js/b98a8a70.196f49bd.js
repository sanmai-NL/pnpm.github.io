"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3564],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=p,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function k(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(2081),p=n(4604),l=(n(9496),n(9613)),a=["components"],i={id:"run",title:"pnpm run"},o=void 0,s={unversionedId:"cli/run",id:"cli/run",title:"pnpm run",description:"\ubcc4\uce6d: run-script",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/cli/run.md",sourceDirName:"cli",slug:"/cli/run",permalink:"/ko/next/cli/run",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"current",frontMatter:{id:"run",title:"pnpm run"},sidebar:"docs",previous:{title:"pnpm why",permalink:"/ko/next/cli/why"},next:{title:"pnpm test",permalink:"/ko/next/cli/test"}},u={},c=[{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:2},{value:"\uc0c1\uc138 \uc815\ubcf4",id:"\uc0c1\uc138-\uc815\ubcf4",level:2},{value:"<code>npm run</code>\uacfc\uc758 \ucc28\uc774\uc810",id:"npm-run\uacfc\uc758-\ucc28\uc774\uc810",level:2},{value:"\uc635\uc158",id:"\uc635\uc158",level:2},{value:"script-shell",id:"script-shell",level:3},{value:"shell-emulator",id:"shell-emulator",level:3},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--if-present",id:"--if-present",level:3},{value:"--parallel",id:"--parallel",level:3},{value:"--stream",id:"--stream",level:3},{value:"--aggregate-output",id:"--aggregate-output",level:3},{value:"enable-pre-post-scripts",id:"enable-pre-post-scripts",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:c};function k(e){var t=e.components,n=(0,p.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\ubcc4\uce6d: ",(0,l.kt)("inlineCode",{parentName:"p"},"run-script")),(0,l.kt)("p",null,"\ud328\ud0a4\uc9c0\uc758 \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc5d0 \uc815\uc758\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,l.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc5d0 \uad6c\uc131\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc788\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "watch": "webpack --watch"\n}\n')),(0,l.kt)("p",null,"\uc774\uc81c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! \uac04\ub2e8\ud558\uc9c0\uc694? \ud0a4 \uc785\ub825\uacfc \uc2dc\uac04\uc744 \uc808\uc57d\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud558\ub294 \uc0ac\ub78c\ub4e4\uc744 \uc704\ud574 \uc8fc\ubaa9\ud574\uc57c \ud560 \ub610 \ub2e4\ub978 \uc0ac\ud56d\uc740 \ubaa8\ub4e0 \uc2a4\ud06c\ub9bd\ud2b8\uac00 pnpm \uba85\ub839\uc73c\ub85c \uc568\ub9ac\uc5b4\uc2f1\ub41c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uad81\uadf9\uc801\uc73c\ub85c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm watch")," \ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run watch")," \uc758 \ucd95\uc57d\ud615\uc785\ub2c8\ub2e4 (\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 pnpm \uba85\ub839\uacfc \ub3d9\uc77c\ud55c \uc774\ub984\uc744 \uacf5\uc720\ud558\uc9c0 \uc54a\ub294 \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\ub9cc \ud574\ub2f9\ud568)."),(0,l.kt)("h2",{id:"\uc0c1\uc138-\uc815\ubcf4"},"\uc0c1\uc138 \uc815\ubcf4"),(0,l.kt)("p",null,"\uc178\uc758 \uae30\uc874 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ub354\ud558\uc5ec, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," \uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0 \uc81c\uacf5\ub41c ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc989, \ud328\ud0a4\uc9c0\uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \ud55c \uc77c\ubc18 \uba85\ub839\uc5b4\ucc98\ub7fc \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc124\uce58\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, \ub2e4\uc74c\uacfc \uac19\uc774 \uc2a4\ud06c\ub9bd\ud2b8 \ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"lint": "eslint src --fix"\n')),(0,l.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \uac00 \uc178\uc5d0 \uc804\uc5ed\uc801\uc73c\ub85c \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \uacbd\uc6b0, ",(0,l.kt)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," \ub3c4 \uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH"),"\uc5d0 \ucd94\uac00\ub418\uc5c8\uc73c\ubbc0\ub85c, \ub3c4\uad6c\uac00 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \ub8e8\ud2b8\uc5d0 \uc124\uce58\ub418\uc5c8\ub2e4\uba74 \uc5b4\ub5a4 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud328\ud0a4\uc9c0\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts"),"\uc5d0\uc11c\ub3c4 \ud638\ucd9c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"npm-run\uacfc\uc758-\ucc28\uc774\uc810"},(0,l.kt)("inlineCode",{parentName:"h2"},"npm run"),"\uacfc\uc758 \ucc28\uc774\uc810"),(0,l.kt)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c, pnpm\uc740 \uc0ac\uc6a9\uc790 \uc815\uc758 \uc2a4\ud06c\ub9bd\ud2b8 (\uc608\ub97c \ub4e4\uc5b4 ",(0,l.kt)("inlineCode",{parentName:"p"},"prestart"),") \uc5d0 \ub300\ud574 \uc784\uc758\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"pre")," \ubc0f ",(0,l.kt)("inlineCode",{parentName:"p"},"post")," \ud6c4\ud06c\ub97c \uc2e4\ud589\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. npm\uc73c\ub85c\ubd80\ud130 \uc0c1\uc18d\ub41c \uc774 \ud589\uc704\ub294 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uba85\uc2dc\uc801\uc778 \ub300\uc2e0 \uc554\uc2dc\uc801\uc778 \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uba70, \uc2e4\ud589 \ud750\ub984\uc744 \ub09c\ub3c5\ud654\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm serve")," \uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm preserve")," \ub97c \ub3d9\uc791\uc2dc\ud0a4\ub294 \ub180\ub77c\uc6b4 \uc2e4\ud589\uc73c\ub85c \uc774\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5b4\ub5a4 \uc774\uc720\ub85c npm\uc758 pre/post \uc2a4\ud06c\ub9bd\ud2b8 \ub3d9\uc791\uc774 \ud544\uc694\ud55c \uacbd\uc6b0, ",(0,l.kt)("inlineCode",{parentName:"p"},"enable-pre-post-scripts")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."),(0,l.kt)("h2",{id:"\uc635\uc158"},"\uc635\uc158"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"run")," \uba85\ub839\uc5b4\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \uc635\uc158\uc740 \uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc774\ub984 \uc55e\uc5d0 \ub098\uc5f4\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc2a4\ud06c\ub9bd\ud2b8\uc758 \uc774\ub984 \ub4a4\uc5d0 \ub098\uc5f4\ub41c \uc635\uc158\uc740 \uc2e4\ud589\ub41c \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc804\ub2ec\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \ubaa8\ub4e0 \uac83\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"--silent")," \uc635\uc158\uacfc \ud568\uaed8 pnpm CLI\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run --silent watch\npnpm --silent run watch\npnpm --silent watch\n")),(0,l.kt)("p",null,"\uba85\ub839\uc5b4 \uc774\ub984 \ub4a4\uc5d0 \uc804\ub2ec\ub41c \ubaa8\ub4e0 \uc778\uc218\ub294 \uc2e4\ud589\ub41c \uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \ucd94\uac00\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"watch"),"\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"webpack --watch"),"\ub97c \uc2e4\ud589\ud558\uba74 \uc774 \uba85\ub839\uc5b4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm run watch --no-color\n")),(0,l.kt)("p",null,"\uc774\ub807\uac8c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"webpack --watch --no-color\n")),(0,l.kt)("h3",{id:"script-shell"},"script-shell"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,l.kt)("strong",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,l.kt)("strong",{parentName:"li"},"path"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run")," \uba85\ub839\uc5b4\uc640 \ud568\uaed8 \uc2e4\ud589\ud560 \uc178 \uc2a4\ud06c\ub9bd\ud2b8."),(0,l.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, Windows\uc5d0\uc11c Git Bash\ub97c \uac15\uc81c\ub85c \uc0ac\uc6a9\ud558\ub824\uba74:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'pnpm config set script-shell "C:\\\\Program Files\\\\git\\\\bin\\\\bash.exe"\n')),(0,l.kt)("h3",{id:"shell-emulator"},"shell-emulator"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74, pnpm\uc740 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@yarnpkg/shell"},"bash-like shell")," \uc758 JavaScript \uad6c\ud604\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uc635\uc158\uc740 \ud50c\ub7ab\ud3fc \uac04 \uc2a4\ud06c\ub9bd\ud305\uc744 \ub2e8\uc21c\ud654\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uae30\ubcf8\uc801\uc73c\ub85c \ub2e4\uc74c \uc2a4\ud06c\ub9bd\ud2b8\ub294 POSIX \uaddc\uaca9\uc774 \uc544\ub2cc \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc2e4\ud328\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "test": "NODE_ENV=test node test.js"\n}\n')),(0,l.kt)("p",null,"\uadf8\ub7ec\ub098 ",(0,l.kt)("inlineCode",{parentName:"p"},"shell-emulator")," \uc758 \uc124\uc815\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc73c\uba74 \ubaa8\ub4e0 \ud50c\ub7ab\ud3fc\uc5d0\uc11c \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,'\uc774\uac83\uc740 \uac01 \ud328\ud0a4\uc9c0\uc758 "scripts" \uac1c\uccb4\uc5d0\uc11c \uc784\uc758\uc758 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ud328\ud0a4\uc9c0\uc5d0 \uba85\ub839\uc5b4\uac00 \uc5c6\uc73c\uba74 \uac74\ub108\ub701\ub2c8\ub2e4. \ud328\ud0a4\uc9c0\uc5d0 \uba85\ub839\uc5b4\uac00 \uc5c6\uc73c\uba74 \uba85\ub839\uc5b4\ub294 \uc2e4\ud328\ud569\ub2c8\ub2e4.'),(0,l.kt)("h3",{id:"--if-present"},"--if-present"),(0,l.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc815\uc758\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--if-present")," \ud50c\ub798\uadf8\ub97c \uc0ac\uc6a9\ud558\uc5ec non-zero \uc885\ub8cc \ucf54\ub4dc \ub85c \uc885\ub8cc\ub418\ub294 \uac83\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \uc2e4\ud589 \uccb4\uc778\uc744 \ub04a\uc9c0 \uc54a\uace0 \uc7a0\uc7ac\uc801\uc73c\ub85c \uc815\uc758\ub418\uc9c0 \uc54a\uc740 \uc2a4\ud06c\ub9bd\ud2b8 \uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--parallel"},"--parallel"),(0,l.kt)("p",null,"\ub3d9\uc2dc\uc131 \ubc0f \ud1a0\ud3f4\ub85c\uc9c0 \uc815\ub82c\uc744 \uc644\uc804\ud788 \ubb34\uc2dc\ud558\uace0, \uc811\ub450\ubd80\uac00 \uc788\ub294 \uc2a4\ud2b8\ub9ac\ubc0d \ucd9c\ub825\uc774 \uc788\ub294 \ubaa8\ub4e0 \uc77c\uce58\ud558\ub294 \ud328\ud0a4\uc9c0\uc5d0\uc11c \uc989\uc2dc \uc9c0\uc815\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uae34 \ube4c\ub4dc \ud504\ub85c\uc138\uc2a4\uc640 \uac19\uc740 \ub9ce\uc740 \ud328\ud0a4\uc9c0\uc5d0 \ub300\ud55c \uc7a5\uae30 \uc2e4\ud589 \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \uc120\ud638\ub418\ub294 \ud50c\ub798\uadf8\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--stream"},"--stream"),(0,l.kt)("p",null,"\uc6d0\ub798\uc758 \ud328\ud0a4\uc9c0 \ub514\ub809\ud1a0\ub9ac\uac00 \uc811\ub450\uc0ac\ub85c \ubd99\uc740 \uc790\uc2dd \ud504\ub85c\uc138\uc2a4\uc758 \ucd9c\ub825\uc744 \uc989\uc2dc \uc2a4\ud2b8\ub9ac\ubc0d\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub2e4\ub978 \ud328\ud0a4\uc9c0\uc758 \ucd9c\ub825\uc774 \uc778\ud130\ub9ac\ube0c\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--aggregate-output"},"--aggregate-output"),(0,l.kt)("p",null,"\ubcd1\ub82c\ub85c \uc2e4\ud589\ub418\ub294 \uc790\uc2dd \ud504\ub85c\uc138\uc2a4\uc758 \ucd9c\ub825\uc744 \uc9d1\uacc4\ud558\uace0 \uc790\uc2dd \ud504\ub85c\uc138\uc2a4\uac00 \uc644\ub8cc\ub420 \ub54c\ub9cc \uacb0\uacfc\ub97c \ucd9c\ub825\ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r <command>")," \uba85\ub839\uc5b4\uac00 ",(0,l.kt)("inlineCode",{parentName:"p"},"--parallel")," \ub610\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"--workspace-concurrency=<number>")," \uc640 \ud568\uaed8 \uc2e4\ud589\ud55c \ud6c4 \ub300\uc6a9\ub7c9 \ub85c\uadf8\ub97c \uc77d\uae30\uac00 \ud6e8\uc52c \uc26c\uac8c \ub9cc\ub4e4\uc5b4 \uc90d\ub2c8\ub2e4 (\ud2b9\ud788 CI\uc5d0\uc11c). ",(0,l.kt)("inlineCode",{parentName:"p"},"--reporter=append-only")," \ub9cc \uc9c0\uc6d0\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"enable-pre-post-scripts"},"enable-pre-post-scripts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uac12: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"\uc720\ud615: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc774\uba74, pnpm\uc740 \ubaa8\ub4e0 pre/post \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm foo")," \ub97c \uc2e4\ud589\ud558\ub294 \uac83\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm prefoo && pnpm foo && pnpm postfoo")," \uc744 \uc2e4\ud589\ud558\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ko/next/filtering"},"\ud544\ud130\ub9c1\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694.")))}k.isMDXComponent=!0}}]);