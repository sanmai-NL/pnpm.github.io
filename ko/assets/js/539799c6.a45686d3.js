"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3835],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=l,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(c,p(p({ref:t},m),{},{components:n})):a.createElement(c,p({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(2081),l=n(4604),r=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\uc124\uce58\ud558\uae30"},o=void 0,s={unversionedId:"installation",id:"version-6.x/installation",title:"\uc124\uce58\ud558\uae30",description:"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-6.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ko/6.x/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/ko",tags:[],version:"6.x",frontMatter:{id:"installation",title:"\uc124\uce58\ud558\uae30"},sidebar:"version-6.x/docs",previous:{title:"\ub3d9\uae30",permalink:"/ko/6.x/motivation"},next:{title:"pnpm CLI",permalink:"/ko/6.x/pnpm-cli"}},m={},u=[{value:"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30",id:"\ub3c5\ub9bd\ud615-\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"Node.js is not preinstalled",id:"nodejs-is-not-preinstalled",level:3},{value:"Node.js is preinstalled",id:"nodejs-is-preinstalled",level:3},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"Using Corepack",id:"using-corepack",level:2},{value:"Using npm",id:"using-npm",level:2},{value:"Via npx resolution",id:"via-npx-resolution",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"pnpm \uc0ad\uc81c",id:"pnpm-\uc0ad\uc81c",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ub3c5\ub9bd\ud615-\uc2a4\ud06c\ub9bd\ud2b8-\uc0ac\uc6a9\ud558\uae30"},"\ub3c5\ub9bd\ud615 \uc2a4\ud06c\ub9bd\ud2b8 \uc0ac\uc6a9\ud558\uae30"),(0,r.kt)("h3",{id:"nodejs-is-not-preinstalled"},"Node.js is not preinstalled"),(0,r.kt)("p",null,"POSIX \uc2dc\uc2a4\ud15c\uc5d0\uc11c\ub294 Node.js\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544\ub3c4 \uc544\ub798 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec pnpm\uc744 \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | PNPM_VERSION=6.32.11 sh -\n")),(0,r.kt)("p",null,"curl\uc774 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 wget\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | PNPM_VERSION=6.32.11 sh -\n")),(0,r.kt)("p",null,"\uc708\ub3c4\uc6b0 (PowerShell)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:PNPM_VERSION='6.32.11' ; iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("p",null,"\uadf8 \ub2e4\uc74c ",(0,r.kt)("a",{parentName:"p",href:"/ko/6.x/cli/env"},"pnpm env")," \uba85\ub839\uc744 \uc0ac\uc6a9\ud574 Node.js\ub97c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"nodejs-is-preinstalled"},"Node.js is preinstalled"),(0,r.kt)("p",null,"On Linux or macOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@latest-6\n")),(0,r.kt)("p",null,"\uc708\ub3c4\uc6b0 (PowerShell)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm@6.32.11; Remove-Item pnpm.js\n")),(0,r.kt)("p",null,"The standalone script is signed. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/get#verifying-files"},"Here's how to verify it"),"."),(0,r.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,r.kt)("p",null,"If you have the package manager installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("h2",{id:"using-corepack"},"Using Corepack"),(0,r.kt)("p",null,"Since v16.13, Node.js is shipping ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," for managing package managers. This is an experimental feature, so you need to enable it by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the latest pnpm version and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@6.32.11 --activate\n")),(0,r.kt)("h2",{id:"using-npm"},"Using npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm@latest-6\n")),(0,r.kt)("h2",{id:"via-npx-resolution"},"Via npx resolution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx pnpm add -g pnpm\n")),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("p",null,"Once you have installed pnpm, there is no need to use other package managers to update it. You can upgrade pnpm using itself, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -g pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/ko/6.x/continuous-integration"},"Continuous Integration"),".")),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 1"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 2"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 3"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,r.kt)("p",null,"Let's assume you have the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,r.kt)("h2",{id:"pnpm-\uc0ad\uc81c"},"pnpm \uc0ad\uc81c"),(0,r.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc5d0\uc11c pnpm CLI\ub97c \uc81c\uac70\ud558\uace0 \ub514\uc2a4\ud06c\uc5d0 \uae30\ub85d\ud55c \ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc81c\uac70\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,r.kt)("a",{parentName:"p",href:"/ko/6.x/uninstall"},"pnpm \uc81c\uac70"),"\ub97c \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."))}k.isMDXComponent=!0}}]);