"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7585],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=n(2081),r=n(4604),l=(n(9496),n(9613)),p=["components"],i={id:"installation",title:"\u5b89\u88dd"},o=void 0,m={unversionedId:"installation",id:"version-7.x/installation",title:"\u5b89\u88dd",description:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh-TW/installation",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"7.x",frontMatter:{id:"installation",title:"\u5b89\u88dd"},sidebar:"version-7.x/docs",previous:{title:"\u88fd\u4f5c\u52d5\u6a5f",permalink:"/zh-TW/motivation"},next:{title:"\u529f\u80fd\u6bd4\u8f03",permalink:"/zh-TW/feature-comparison"}},s={},u=[{value:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 Corepack \u5b89\u88dd",id:"\u4f7f\u7528-corepack-\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 npm \u5b89\u88dd",id:"\u4f7f\u7528-npm-\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 Homebrew \u5b89\u88dd",id:"\u4f7f\u7528-homebrew-\u5b89\u88dd",level:2},{value:"\u4f7f\u7528 Scoop \u5b89\u88dd",id:"\u4f7f\u7528-scoop-\u5b89\u88dd",level:2},{value:"\u76f8\u5bb9\u6027",id:"\u76f8\u5bb9\u6027",level:2},{value:"\u7591\u96e3\u6392\u89e3",id:"\u7591\u96e3\u6392\u89e3",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"},"\u4f7f\u7528\u7368\u7acb\u6307\u4ee4\u78bc\u5b89\u88dd"),(0,l.kt)("p",null,"\u5728 POSIX \u7cfb\u7d71\u4e0a\uff0c\u5373\u4f7f\u60a8\u6c92\u6709\u9810\u5148\u5b89\u88dd Node.js\uff0c\u4ecd\u53ef\u4ee5\u900f\u904e\u4e0b\u65b9\u547d\u4ee4\u5b89\u88dd pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u4e2d\u6c92\u6709\u5b89\u88dd curl\uff0c\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528 wget\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,l.kt)("p",null,"\u5728 Windows \u7cfb\u7d71\u4e0a\u5b89\u88dd \uff08\u4f7f\u7528PowerShell\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/cli/env"},"pnpm env")," \u547d\u4ee4\u4f86\u5b89\u88dd Node.js\u4e86\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528-corepack-\u5b89\u88dd"},"\u4f7f\u7528 Corepack \u5b89\u88dd"),(0,l.kt)("p",null,"\u5f9e v16.13 \u958b\u59cb\uff0cNode.js \u63d0\u4f9b\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," \u5957\u4ef6\u7ba1\u7406\u7a0b\u5f0f\u3002 \u9019\u662f\u4e00\u500b\u5be6\u9a57\u6027\u529f\u80fd\uff0c\u6240\u4ee5\u60a8\u9700\u8981\u5148\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u4f86\u555f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,l.kt)("p",null,"\u9019\u6a23 pnpm \u6703\u81ea\u52d5\u5728\u60a8\u7cfb\u7d71\u4e0a\u5b89\u88dd\u3002 \u7136\u800c\uff0c\u5b83\u53ef\u80fd\u4e0d\u662f\u6700\u65b0\u767c\u884c\u7248\u7684 pnpm\u3002 \u82e5\u8981\u5347\u7d1a\uff0c\u8acb\u6aa2\u67e5",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"\u6700\u65b0\u7684 pnpm \u7248\u672c"),"\uff0c\u7136\u5f8c\u57f7\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-npm-\u5b89\u88dd"},"\u4f7f\u7528 npm \u5b89\u88dd"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-homebrew-\u5b89\u88dd"},"\u4f7f\u7528 Homebrew \u5b89\u88dd"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u5b89\u88dd Homebrew \u5957\u4ef6\u7ba1\u7406\u5668\uff0c\u60a8\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-scoop-\u5b89\u88dd"},"\u4f7f\u7528 Scoop \u5b89\u88dd"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u6709\u5b89\u88dd\u904e Scoop\uff0c\u60a8\u53ef\u4ee5\u900f\u904e\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd pnpm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8acb\u554f\u60a8\u60f3\u8981\u5728 CI \u4f3a\u670d\u5668\u4e0a\u4f7f\u7528 pnpm \u55ce\uff1f \u8acb\u53c3\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/continuous-integration"},"\u6301\u7e8c\u6574\u5408 (CI)"))),(0,l.kt)("h2",{id:"\u76f8\u5bb9\u6027"},"\u76f8\u5bb9\u6027"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u904e\u53bb pnpm \u7248\u672c\u8207 Node.js \u5404\u500b\u7248\u672c\u7684\u76f8\u5bb9\u6027\u8868\u683c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,l.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,l.kt)("h2",{id:"\u7591\u96e3\u6392\u89e3"},"\u7591\u96e3\u6392\u89e3"),(0,l.kt)("p",null,"\u5982\u679c pnpm \u5df2\u640d\u6bc0\uff0c\u800c\u7121\u6cd5\u900f\u904e\u91cd\u65b0\u5b89\u88dd\u4f86\u4fee\u597d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u624b\u52d5\u5c07\u5176\u5f9e PATH \u4e2d\u79fb\u9664\u3002"),(0,l.kt)("p",null,"\u5047\u8a2d\u60a8\u5728\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u6642\u767c\u751f\u4e86\u9019\u500b\u932f\u8aa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u8acb\u5617\u8a66\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"which npm")," \u4f86\u5c0b\u627e pnpm \u7684\u4f4d\u7f6e\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Windows\uff0c\u5728 Git Bash \u4e2d\u57f7\u884c\u524d\u8ff0\u547d\u4ee4\uff0c \u6703\u5f97\u5230 pnpm \u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,l.kt)("p",null,"\u73fe\u5728\u5df2\u7d93\u77e5\u9053 pnpm CLI \u5b58\u653e\u7684\u4f4d\u7f6e\uff0c\u8acb\u6253\u958b\u8a72\u76ee\u9304\u4e26\u79fb\u9664\u6240\u6709\u8207 pnpm \u6709\u95dc\u7684\u6a94\u6848\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," \u7b49\u7b49\uff09\u3002 \u5b8c\u6210\u5f8c\u518d\u91cd\u65b0\u5b89\u88dd pnpm\uff0c\u61c9\u8a72\u5c31\u6062\u5fa9\u6b63\u5e38\u4e86\u3002"),(0,l.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,l.kt)("inlineCode",{parentName:"p"},"pn")," instead. Just put the following line to your ",(0,l.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,l.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u5f9e\u7cfb\u7d71\u53ca\u5176\u5beb\u5165\u78c1\u789f\u4e2d\u7684\u4efb\u4f55\u6a94\u6848\u4e2d\u79fb\u9664 pnpm CLI\uff0c\u8acb\u53c3\u95b1\u3008",(0,l.kt)("a",{parentName:"p",href:"/zh-TW/uninstall"},"\u89e3\u9664\u5b89\u88dd pnpm"),"\u3009\u3002"))}c.isMDXComponent=!0}}]);