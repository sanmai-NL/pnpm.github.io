"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9327],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||p;return t?r.createElement(g,a(a({ref:n},m),{},{components:t})):r.createElement(g,a({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(2081),i=t(4604),p=(t(9496),t(9613)),a=["components"],o={id:"continuous-integration",title:"Continuous Integration"},l=void 0,s={unversionedId:"continuous-integration",id:"version-6.x/continuous-integration",title:"Continuous Integration",description:"pnpm\uc740 \ub2e4\uc591\ud55c ci \uc2dc\uc2a4\ud15c\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/ko/6.x/continuous-integration",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"continuous-integration",title:"Continuous Integration"},sidebar:"version-6.x/docs",previous:{title:"pnpm\uc5d0\uc11c changesets \uc0ac\uc6a9\ud558\uae30",permalink:"/ko/6.x/using-changesets"},next:{title:"Git\uc73c\ub85c \uc791\uc5c5\ud558\uae30",permalink:"/ko/6.x/git"}},m={},c=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Gitlab CI",id:"gitlab-ci",level:2},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"pnpm\uc740 \ub2e4\uc591\ud55c ci \uc2dc\uc2a4\ud15c\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"travis"},"Travis"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},".travis.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\ub294\ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,p.kt)("h2",{id:"semaphore"},"Semaphore"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\b\uace0 \uce90\uc2f1\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,p.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),"\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc740 \ucf54\ub4dc\ub97c ",(0,p.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\uc5d0 \ucd94\uac00\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n  - pnpm install\n")),(0,p.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,p.kt)("p",null,"GitHub Actions\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"\ub97c \uc791\uc131\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - uses: pnpm/action-setup@v2.0.1\n      with:\n        version: 6.20.3\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n        cache: 'pnpm'\n    - name: Install dependencies\n      run: pnpm install\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2"),"\ub97c \ud1b5\ud574 dependencies\ub97c \uce90\uc2f1\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,p.kt)("strong",{parentName:"p"},"6.10+")," \ubc84\uc804\uc758 pnpm\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"gitlab-ci"},"Gitlab CI"),(0,p.kt)("p",null,"Gitlab\uc5d0\uc120 \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml"),"\ub97c \uc791\uc131\ud568\uc73c\ub85c\uc368 pnpm\uc744 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2f1\ud558\ub294\ub370\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".gitlab-ci.yml"',title:'".gitlab-ci.yml"'},'stages:\n  - build\n\nbuild:\n  stage: build\n  image: node:14.16.0-buster\n  before_script:\n    - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n    - pnpm config set store-dir .pnpm-store\n  script:\n    - pnpm install # install dependencies\n  cache:\n    key: "$CI_COMMIT_REF_SLUG"\n    paths:\n      - .pnpm-store\n')),(0,p.kt)("h2",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,p.kt)("p",null,"pnpm\uc744 \ud1b5\ud574 dependencies\ub97c \uc124\uce58\ud558\uace0 \uce90\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".bitbucket-pipelines.yml"',title:'".bitbucket-pipelines.yml"'},'definitions:\n  caches:\n    pnpm: $BITBUCKET_CLONE_DIR/.pnpm-store\n\npipelines:\n  pull-requests:\n    "**":\n      - step:\n          name: Build and test\n          image: node:14.16.0\n          script:\n            - curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@6\n            - pnpm install\n            - pnpm run build # Replace with your build/test\u2026etc. commands\n          caches:\n            - pnpm\n')))}d.isMDXComponent=!0}}]);