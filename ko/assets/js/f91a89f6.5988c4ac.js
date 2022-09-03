"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5137],{9613:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,_=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return r?t.createElement(_,a(a({ref:n},c),{},{components:r})):t.createElement(_,a({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5021:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(2081),o=r(4604),p=(r(9496),r(9613)),a=["components"],i={id:"errors",title:"\uc5d0\ub7ec \ucf54\ub4dc"},l=void 0,s={unversionedId:"errors",id:"version-7.x/errors",title:"\uc5d0\ub7ec \ucf54\ub4dc",description:"ERRPNPMUNEXPECTED_STORE",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ko/errors",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"errors",title:"\uc5d0\ub7ec \ucf54\ub4dc"},sidebar:"version-7.x/docs",previous:{title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30",permalink:"/ko/git"},next:{title:"\ub85c\uace0",permalink:"/ko/logos"}},c={},u=[{value:"ERR_PNPM_UNEXPECTED_STORE",id:"err_pnpm_unexpected_store",level:2},{value:"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE",id:"err_pnpm_no_matching_version_inside_workspace",level:2},{value:"ERR_PNPM_PEER_DEP_ISSUES",id:"err_pnpm_peer_dep_issues",level:2},{value:"ERR_PNPM_OUTDATED_LOCKFILE",id:"err_pnpm_outdated_lockfile",level:2}],m={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"err_pnpm_unexpected_store"},"ERR_PNPM_UNEXPECTED_STORE"),(0,p.kt)("p",null,"\ubaa8\ub4c8 \ub514\ub809\ud1a0\ub9ac\uac00 \uc788\uace0 \ub2e4\ub978 \uc800\uc7a5\uc18c \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc5ec\ub7ec\ubd84\uc774 \uc2a4\ud1a0\uc5b4 \ub514\ub809\ud1a0\ub9ac\ub97c \uc758\ub3c4\uc801\uc73c\ub85c \ubcc0\uacbd\ud55c\ub2e4\uba74, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uc744 \uc2e4\ud589\ud558\uc5ec pnpm\uc774 \uc0c8\ub85c\uc6b4 \uc2a4\ud1a0\uc5b4\ub97c \ud1b5\ud574 \uc758\uc874\uc131\uc744 \uc7ac\uc124\uce58\ud569\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"err_pnpm_no_matching_version_inside_workspace"},"ERR_PNPM_NO_MATCHING_VERSION_INSIDE_WORKSPACE"),(0,p.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uac00 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \uc758\uc874\uc131\uc744 \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," \ud328\ud0a4\uc9c0\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies")," \uc5d0\uc11c ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0")," \ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "dependencies": {\n    "bar": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"\uadf8\ub7ec\ub098, \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc624\uc9c1 ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@2.0.0")," \ub9cc \uc874\uc7ac\ud558\uba70, ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uc740 \uc2e4\ud328\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud574\ub2f9 \uc624\ub958\ub97c \uc218\uc815\ud558\ub824\uba74, ",(0,p.kt)("a",{parentName:"p",href:"/ko/workspaces#workspace-protocol-workspace"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ud504\ub85c\ud1a0\ucf5c")," \ub97c \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub4e0 \uc758\uc874\uc131\uc740 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc788\ub294 \ud328\ud0a4\uc9c0 \ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm -r update")," \uba85\ub839\uc5b4\ub97c \ud1b5\ud574 \ub610\ub294 \uc218\ub3d9\uc73c\ub85c \uc218\ud589\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"err_pnpm_peer_dep_issues"},"ERR_PNPM_PEER_DEP_ISSUES"),(0,p.kt)("p",null,"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ud574\uacb0\ub418\uc9c0 \uc54a\uc740 \ud53c\uc5b4 \uc758\uc874\uc131\uc774 \uc788\uac70\ub098 \ud53c\uc5b4 \uc758\uc874\uc131\uc774 \uc6d0\ud558\ub294 \ubc94\uc704\uc640 \uc77c\uce58\ud558\uc9c0 \uc54a\uc73c\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \uc774 \uc2e4\ud328\ud569\ub2c8\ub2e4. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub824\uba74 \ub204\ub77d\ub41c \ud53c\uc5b4 \uc758\uc874\uc131\uc744 \uc124\uce58\ud558\uc2ed\uc2dc\uc624."),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"\uc758 ",(0,p.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing")," \ubc0f ",(0,p.kt)("a",{parentName:"p",href:"package_json#pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions")," \ud544\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub7ec\ud55c \uc624\ub958\ub97c \uc120\ud0dd\uc801\uc73c\ub85c \ubb34\uc2dc\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"err_pnpm_outdated_lockfile"},"ERR_PNPM_OUTDATED_LOCKFILE"),(0,p.kt)("p",null,"This error happens when installation cannot be performed without changes to the lockfile. This might happen in a CI environment if someone has changed a ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," file in the repository without running ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," afterwards. Or someone forgot to commit the changes to the lockfile."),(0,p.kt)("p",null,"To fix this error, just run ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," and commit the changes to the lockfile."))}d.isMDXComponent=!0}}]);