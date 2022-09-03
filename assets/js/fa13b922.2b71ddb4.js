"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9324],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(2081),r=a(4604),s=(a(9496),a(9613)),o=["components"],i={title:"The year 2021 for pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},p=void 0,l={permalink:"/blog/2021/12/29/yearly-update",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/blog/2021-12-29-yearly-update.md",source:"@site/blog/2021-12-29-yearly-update.md",title:"The year 2021 for pnpm",description:"It is the end of the year and it was a good year for pnpm, so let's see how it went.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[],readingTime:2.515,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"The year 2021 for pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},nextItem:{title:"Node-Modules configuration options with pnpm",permalink:"/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},c={authorsImageUrls:[void 0]},m=[{value:"Usage",id:"usage",level:2},{value:"Download Stats",id:"download-stats",level:3},{value:"Docs visits",id:"docs-visits",level:3},{value:"GitHub stars",id:"github-stars",level:3},{value:"New users",id:"new-users",level:3},{value:"Feature Highlights",id:"feature-highlights",level:2},{value:"New lockfile format (since v6.0.0)",id:"new-lockfile-format-since-v600",level:3},{value:"Managing Node.js versions (since v6.12.0)",id:"managing-nodejs-versions-since-v6120",level:3},{value:"Injecting local dependencies (since v6.20.0)",id:"injecting-local-dependencies-since-v6200",level:3},{value:"Improved reporting of peer dependency issues (since v6.24.0)",id:"improved-reporting-of-peer-dependency-issues-since-v6240",level:3},{value:"The Competition",id:"the-competition",level:2},{value:"Yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"Others",id:"others",level:3},{value:"Future Plans",id:"future-plans",level:2}],d={toc:m};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It is the end of the year and it was a good year for pnpm, so let's see how it went."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("h3",{id:"download-stats"},"Download Stats"),(0,s.kt)("p",null,"My goal this year was to beat Bower by the number of downloads. We were able to achieve this goal ",(0,s.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29"},"in November"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8568).Z,width:"976",height:"389"})),(0,s.kt)("p",null,"pnpm was downloaded about ",(0,s.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29"},"3 times more")," in 2021 than in 2020:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5314).Z,width:"983",height:"394"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"These stats don't even measure all the different ways that pnpm may be installed!\nThey only measure the downloads of the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pnpm"},"pnpm npm package"),". This year we also added compiled binary versions of pnpm, which are shipped differently.")),(0,s.kt)("h3",{id:"docs-visits"},"Docs visits"),(0,s.kt)("p",null,"We collect some unpersonalized stats from our docs using Google Analytics.\nIn 2021, sometimes we had more than 2,000 unique visitors a week."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4485).Z,width:"665",height:"509"})),(0,s.kt)("p",null,"Most of our users are from the United States and China."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(6084).Z,width:"585",height:"498"})),(0,s.kt)("h3",{id:"github-stars"},"GitHub stars"),(0,s.kt)("p",null,"Our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"main GitHub repository")," received +5,000 stars this year."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4294).Z,width:"913",height:"800"})),(0,s.kt)("h3",{id:"new-users"},"New users"),(0,s.kt)("p",null,"Our biggest new user this year is ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/pull/89"},"Bytedance")," (the company behind TikTok)."),(0,s.kt)("p",null,"Also, many great open-source projects started to use pnpm. Some switched to pnpm because of its great support of monorepos:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")),(0,s.kt)("li",{parentName:"ul"},"and ",(0,s.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces#usage-examples"},"others"))),(0,s.kt)("p",null,"Some switched because they like how efficient, fast, and beautiful pnpm is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/Autoprefixer/status/1476226146488692736"},"Autoprefixer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/PostCSS/status/1470438664006258701"},"PostCSS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://twitter.com/Browserslist/status/1468264308308156419"},"Browserslist"))),(0,s.kt)("h2",{id:"feature-highlights"},"Feature Highlights"),(0,s.kt)("h3",{id:"new-lockfile-format-since-v600"},"New lockfile format (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.0.0"},"v6.0.0"),")"),(0,s.kt)("p",null,"One of the first and most important changes this year was the new ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," format. This was a breaking change, so we had to release v6. But it was a success. The old lockfile was causing Git conflicts frequently. Since the new format was introduced, we did not receive any complaints about Git conflicts."),(0,s.kt)("h3",{id:"managing-nodejs-versions-since-v6120"},"Managing Node.js versions (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.12.0"},"v6.12.0"),")"),(0,s.kt)("p",null,"We shipped a new command (",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm env"),") that allows to manage Node.js versions. So you may use pnpm instead of Node.js version managers like nvm or Volta."),(0,s.kt)("p",null,"Also, pnpm is shipped as a standalone executable, so you can run it even with no Node.js preinstalled on the system."),(0,s.kt)("h3",{id:"injecting-local-dependencies-since-v6200"},"Injecting local dependencies (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.20.0"},"v6.20.0"),")"),(0,s.kt)("p",null,'You may "inject" a local dependency. By default, local dependencies are symlinked to ',(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," but with this new feature you may instruct pnpm to hard link the files of the package instead."),(0,s.kt)("h3",{id:"improved-reporting-of-peer-dependency-issues-since-v6240"},"Improved reporting of peer dependency issues (since ",(0,s.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.24.0"},"v6.24.0"),")"),(0,s.kt)("p",null,"Peer dependency issues used to be printed as plain text and it was hard to understand them. They are now all grouped and printed in a nice hierarchy structure."),(0,s.kt)("h2",{id:"the-competition"},"The Competition"),(0,s.kt)("h3",{id:"yarn"},"Yarn"),(0,s.kt)("p",null,"Yarn added a pnpm linker in ",(0,s.kt)("a",{parentName:"p",href:"https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-"},"v3.1"),". So Yarn can create a similar node-modules directory structure to the one that pnpm creates."),(0,s.kt)("p",null,"Also, the Yarn team plans to implement a content-addressable storage to be more disk space efficient."),(0,s.kt)("h3",{id:"npm"},"npm"),(0,s.kt)("p",null,"The npm team decided to also adopt the symlinked node-modules directory structure that pnpm uses (related ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md"},"RFC"),")."),(0,s.kt)("h3",{id:"others"},"Others"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/jarredsumner/status/1473416431291174912/photo/1"},"Bun")," written in Zig and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/voltpkg/volt"},"Volt")," written in Rust both claim to be faster than npm/Yarn/pnpm. I did not benchmark these new package managers yet."),(0,s.kt)("h2",{id:"future-plans"},"Future Plans"),(0,s.kt)("p",null,"Faster, better, best."))}u.isMDXComponent=!0},6084:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/countries-2021-8eb9625e1798649ee04451dfb10ac851.png"},5314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/download-stats-2021-1418562cb03abd558c4a6b4b17155227.png"},4485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ga-unique-visits-2021-b8bc3649f680565127696c85bdd4b701.png"},8568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pnpm-vs-bower-stats-6ec69a7308f5fbc1433420b1b2f7457f.png"},4294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stars-2021-0061c16f424e33ba0db224d82bcb53f3.png"}}]);