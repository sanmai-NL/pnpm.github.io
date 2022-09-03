"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1089],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),h=a,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(2081),a=t(4604),i=(t(9496),t(9613)),s=["components"],o={id:"using-changesets",title:"pnpm\uc5d0\uc11c changesets \uc0ac\uc6a9\ud558\uae30"},p=void 0,l={unversionedId:"using-changesets",id:"version-7.x/using-changesets",title:"pnpm\uc5d0\uc11c changesets \uc0ac\uc6a9\ud558\uae30",description:"\uc774 \ubb38\uc11c\ub97c \uc791\uc131\ud560 \ub2f9\uc2dc \ucd5c\uc2e0 pnpm \ubc84\uc804\uc740 v6.14 \uc600\uc2b5\ub2c8\ub2e4. \ucd5c\uc2e0 Changesets \ubc84\uc804\uc740 v2.16.0  \uc774\uc5c8\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-7.x/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ko/using-changesets",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"7.x",frontMatter:{id:"using-changesets",title:"pnpm\uc5d0\uc11c changesets \uc0ac\uc6a9\ud558\uae30"},sidebar:"version-7.x/docs",previous:{title:"Command line tab \uc790\ub3d9\uc644\uc131",permalink:"/ko/completion"},next:{title:"Continuous Integration",permalink:"/ko/continuous-integration"}},c={},u=[{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc0c8 changesets \ucd94\uac00\ud558\uae30",id:"\uc0c8-changesets-\ucd94\uac00\ud558\uae30",level:2},{value:"\ubcc0\uacbd \uc0ac\ud56d \ub9b4\ub9ac\uc988\ud558\uae30",id:"\ubcc0\uacbd-\uc0ac\ud56d-\ub9b4\ub9ac\uc988\ud558\uae30",level:2},{value:"GitHub Action \uc0ac\uc6a9\ud558\uae30",id:"github-action-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"\ud328\ud0a4\uc9c0 \ubc84\uc804 \uc99d\uac00",id:"\ud328\ud0a4\uc9c0-\ubc84\uc804-\uc99d\uac00",level:3},{value:"\uac8c\uc2dc",id:"\uac8c\uc2dc",level:3}],m={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\uc774 \ubb38\uc11c\ub97c \uc791\uc131\ud560 \ub2f9\uc2dc \ucd5c\uc2e0 pnpm \ubc84\uc804\uc740 v6.14 \uc600\uc2b5\ub2c8\ub2e4. \ucd5c\uc2e0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"Changesets")," \ubc84\uc804\uc740 v2.16.0  \uc774\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"\uc124\uce58"},"\uc124\uce58"),(0,i.kt)("p",null,"pnpm \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c changesets\ub97c \uc124\uc815\ud558\ub824\uba74 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc758 \ub8e8\ud2b8\uc5d0\uc11c \uac1c\ubc1c \uc758\uc874\uc131\uc73c\ub85c changesets\ub97c \uc124\uce58\ud558\uc138\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -Dw @changesets/cli\n")),(0,i.kt)("p",null,"\uadf8\ub7f0 \ub2e4\uc74c changesets\uc758 \ucd08\uae30\ud654 \uba85\ub839\uc5b4\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,i.kt)("h2",{id:"\uc0c8-changesets-\ucd94\uac00\ud558\uae30"},"\uc0c8 changesets \ucd94\uac00\ud558\uae30"),(0,i.kt)("p",null,"\uc0c8 changesets\ub97c \uc0dd\uc131\ud558\ub824\uba74 \uc800\uc7a5\uc18c\uc758 \ub8e8\ud2b8\uc5d0\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm changeset"),"\ub97c \uc2e4\ud589\ud558\uc138\uc694. ",(0,i.kt)("inlineCode",{parentName:"p"},".changeset")," \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc0dd\uc131\ub41c \ub9c8\ud06c\ub2e4\uc6b4 \ud30c\uc77c\uc740 \uc800\uc7a5\uc18c\uc5d0 \ucee4\ubc0b\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\ubcc0\uacbd-\uc0ac\ud56d-\ub9b4\ub9ac\uc988\ud558\uae30"},"\ubcc0\uacbd \uc0ac\ud56d \ub9b4\ub9ac\uc988\ud558\uae30"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset version")," \uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," (\ubc0f \uc774\ub4e4\uc758 \uc758\uc874 \ud56d\ubaa9)\ub85c \uc9c0\uc815\ub41c \ud328\ud0a4\uc9c0\uc758 \ubc84\uc804\uc744 bump\ud558\uace0 changelog \ud30c\uc77c\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install")," \ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 lockfile\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ud328\ud0a4\uc9c0\ub97c \uc7ac\ube4c\ub4dc\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ubcc0\uacbd \uc0ac\ud56d\uc744 \ucee4\ubc0b\ud569\ub2c8\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pnpm publish -r"),"\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774 \uba85\ub839\uc5b4\ub294 \uc544\uc9c1 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uc5c6\uace0 \ubc84\uc804 \ucda9\ub3cc\ub41c \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub4e4\uc744 \uac8c\uc2dc\ud569\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"github-action-\uc0ac\uc6a9\ud558\uae30"},"GitHub Action \uc0ac\uc6a9\ud558\uae30"),(0,i.kt)("p",null,"\ud504\ub85c\uc138\uc2a4\ub97c \uc790\ub3d9\ud654\ud558\uae30 \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version")," \ub97c GitHub Action\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\ud328\ud0a4\uc9c0-\ubc84\uc804-\uc99d\uac00"},"\ud328\ud0a4\uc9c0 \ubc84\uc804 \uc99d\uac00"),(0,i.kt)("p",null,"changeset \ud30c\uc77c\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," \ube0c\ub79c\uce58\uc5d0 \ub3c4\ucc29\ud558\uba74 action\uc774 \uac10\uc9c0\ud558\uba70, bump\ub41c \ubc84\uc804\uc5d0 \ub300\ud55c \ubaa8\ub4e0 \ud328\ud0a4\uc9c0\ub97c \ub098\uc5f4\ud558\ub294 \uc0c8 PR\uc744 \uc5fd\ub2c8\ub2e4. \uba38\uc9c0\ub418\uba74 \ud328\ud0a4\uc9c0\uac00 \uc5c5\ub370\uc774\ud2b8\ub418\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," \uc18d\uc131\uc744 \ucd94\uac00\ud568\uc73c\ub85c\uc368 \uac8c\uc2dc \uc5ec\ubd80\ub97c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uac8c\uc2dc"},"\uac8c\uc2dc"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"changeset publish")," \ub97c \uc2e4\ud589\ud558\ub294 \uc2a4\ud06c\ub9bd\ud2b8\uc778 ",(0,i.kt)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish"),"\ub97c \ucd94\uac00\ud568\uc73c\ub85c\uc368 ",(0,i.kt)("inlineCode",{parentName:"p"},"changeset version"),"\uc5d0 \uc758\ud574 PR\uc774 \uc5f4\ub9ac\uba74 \ub808\uc9c0\uc2a4\ud2b8\ub9ac\uc5d0 \uac8c\uc2dc\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@v1\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,i.kt)("p",null,"\uc774 \uc791\uc5c5\uc5d0 \ub300\ud55c \ucd94\uac00 \uc815\ubcf4 \ubc0f \ubb38\uc11c\ub294 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"\uc5ec\uae30"),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}h.isMDXComponent=!0}}]);