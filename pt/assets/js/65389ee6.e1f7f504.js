"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4801],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?o.createElement(v,l(l({ref:t},c),{},{components:n})):o.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var o=n(2081),r=n(4604),a=(n(9496),n(9613)),l=["components"],i={id:"outdated",title:"pnpm outdated"},p=void 0,d={unversionedId:"cli/outdated",id:"version-6.x/cli/outdated",title:"pnpm outdated",description:"Procura pacotes antigos. A verifica\xe7\xe3o pode ser limitada a um subconjunto de pacotes instalados passando argumentos (regex n\xe3o \xe9 suportado).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/outdated.md",sourceDirName:"cli",slug:"/cli/outdated",permalink:"/pt/6.x/cli/outdated",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"outdated",title:"pnpm outdated"},sidebar:"version-6.x/docs",previous:{title:"pnpm list",permalink:"/pt/6.x/cli/list"},next:{title:"pnpm why",permalink:"/pt/6.x/cli/why"}},c={},s=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3},{value:"--global",id:"--global",level:3},{value:"--long",id:"--long",level:3},{value:"--no-table",id:"--no-table",level:3},{value:"--compatible",id:"--compatible",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--no-optional",id:"--no-optional",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Procura pacotes antigos. A verifica\xe7\xe3o pode ser limitada a um subconjunto de pacotes instalados passando argumentos (regex n\xe3o \xe9 suportado)."),(0,a.kt)("p",null,"Exemplos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm outdated\npnpm outdated "*gulp-*" @babel/core\n')),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Procura por pacotes antigos em todos os pacotes encontrados em um subdiretorio, ou em todos os pacotes da workspace caso for executado em uma workspace."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/filtering"},"Leia mais sobre filtragem.")),(0,a.kt)("h3",{id:"--global"},"--global"),(0,a.kt)("p",null,"Listar pacotes globais antigos."),(0,a.kt)("h3",{id:"--long"},"--long"),(0,a.kt)("p",null,"Added in: v4.0.0"),(0,a.kt)("p",null,"Print details."),(0,a.kt)("h3",{id:"--no-table"},"--no-table"),(0,a.kt)("p",null,"Added in: v4.0.0"),(0,a.kt)("p",null,"Prints the outdated dependencies in a list format instead of the default table. Good for small consoles."),(0,a.kt)("h3",{id:"--compatible"},"--compatible"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Prints only versions that satisfy specifications in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,a.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,a.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Checks only ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,"Added in: v4.7.0"),(0,a.kt)("p",null,"Doesn't check ",(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."))}m.isMDXComponent=!0}}]);