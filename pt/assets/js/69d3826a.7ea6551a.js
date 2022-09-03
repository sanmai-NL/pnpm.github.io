"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[586],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=n(2081),o=n(4604),a=(n(9496),n(9613)),l=["components"],p={id:"exec",title:"pnpm exec"},i=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",title:"pnpm exec",description:"Executa um comando shell no escopo de um projeto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/pt/6.x/cli/exec",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/pt/6.x/cli/test"},next:{title:"pnpm dlx",permalink:"/pt/6.x/cli/dlx"}},s={},d=[{value:"Exemplos",id:"exemplos",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"Exemplos",id:"exemplos-1",level:4},{value:"--parallel",id:"--parallel",level:3},{value:"--shell-mode, -c",id:"--shell-mode--c",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Executa um comando shell no escopo de um projeto."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \xe9 adicionado ao ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),", ent\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec")," permite executar comandos de depend\xeancias."),(0,a.kt)("h2",{id:"exemplos"},"Exemplos"),(0,a.kt)("p",null,"Se voc\xea tem o Jest como depend\xeancia do seu projeto, n\xe3o h\xe1 necessidade de instalar o Jest globalmente, basta execut\xe1-lo com ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm exec"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,a.kt)("p",null,"A parte do ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," \xe9 realmente opcional quando o comando n\xe3o est\xe1 em conflito com um comando interno pnpm, ent\xe3o voc\xea tamb\xe9m pode executar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,a.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,a.kt)("p",null,"Quaisquer op\xe7\xf5es para o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," devem ser listadas antes de sua palavra-chave. As op\xe7\xf5es listadas ap\xf3s a palavra-chave ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," s\xe3o passadas para o comando executado."),(0,a.kt)("p",null,"Bom. O pnpm ser\xe1 executado recursivamente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec jest\n")),(0,a.kt)("p",null,"Ruim. O pnpm n\xe3o ser\xe1 executado recursivamente, mas ",(0,a.kt)("inlineCode",{parentName:"p"},"jest")," ser\xe1 executado com a op\xe7\xe3o ",(0,a.kt)("inlineCode",{parentName:"p"},"-r"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm exec jest -r\n")),(0,a.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,a.kt)("p",null,"Added in: v2.9.0"),(0,a.kt)("p",null,"Execute o comando shell em cada projeto do espa\xe7o de trabalho."),(0,a.kt)("p",null,"The name of the current package is available through the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,a.kt)("h4",{id:"exemplos-1"},"Exemplos"),(0,a.kt)("p",null,"Prune ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," installations for all packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -r exec rm -rf node_modules\n")),(0,a.kt)("p",null,"View package information for all packages. This should be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--shell-mode")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"-c"),") option for the environment variable to work."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm -rc exec pnpm view $PNPM_PACKAGE_NAME\n")),(0,a.kt)("h3",{id:"--parallel"},"--parallel"),(0,a.kt)("p",null,"Added in: v5.1.0"),(0,a.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,a.kt)("h3",{id:"--shell-mode--c"},"--shell-mode, -c"),(0,a.kt)("p",null,"Added in: v6.31.0"),(0,a.kt)("p",null,"Runs the command inside of a shell. Uses ",(0,a.kt)("inlineCode",{parentName:"p"},"/bin/sh")," on UNIX and ",(0,a.kt)("inlineCode",{parentName:"p"},"\\cmd.exe")," on Windows."),(0,a.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pt/6.x/filtering"},"Leia mais sobre filtragem.")))}u.isMDXComponent=!0}}]);