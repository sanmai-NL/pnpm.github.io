"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2585],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var a=n(2081),r=n(4604),l=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"Filtrage"},s=void 0,o={unversionedId:"filtering",id:"filtering",title:"Filtrage",description:"Le filtrage vous permet de restreindre les commandes \xe0 des sous-ensembles sp\xe9cifiques de packages.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/fr/next/filtering",draft:!1,editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"current",frontMatter:{id:"filtering",title:"Filtrage"},sidebar:"docs",previous:{title:"Configuration",permalink:"/fr/next/configuring"},next:{title:"Scripts",permalink:"/fr/next/scripts"}},c={},d=[{value:"Correspondant",id:"correspondant",level:2},{value:"--filter &lt;package_name&gt;",id:"--filter-package_name",level:3},{value:"--filter &lt;package_name&gt;...",id:"--filter-package_name-1",level:3},{value:"--filter &lt;package_name&gt;^...",id:"--filter-package_name-2",level:3},{value:"--filter ...&lt;package_name&gt;",id:"--filter-package_name-3",level:3},{value:"--filter &quot;...^&lt;package_name&gt;&quot;",id:"--filter-package_name-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"Excluding",id:"excluding",level:2},{value:"Multiplicity",id:"multiplicity",level:2},{value:"--filter-prod &lt;mod\xe8le_filtrage&gt;",id:"--filter-prod-mod\xe8le_filtrage",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Le filtrage vous permet de restreindre les commandes \xe0 des sous-ensembles sp\xe9cifiques de packages."),(0,l.kt)("p",null,"pnpm supporte une syntaxe de s\xe9lecteur riche pour choisir les paquets par nom ou par relation."),(0,l.kt)("p",null,"Les s\xe9lecteurs peuvent \xeatre sp\xe9cifi\xe9s via le flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," (ou ",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),") :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,l.kt)("h2",{id:"correspondant"},"Correspondant"),(0,l.kt)("h3",{id:"--filter-package_name"},"--filter ","<","package_name>"),(0,l.kt)("p",null,"Pour s\xe9lectionner un package exact, sp\xe9cifiez simplement son nom (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") ou utilisez un paterne pour s\xe9lectionner un ensemble de paquets (",(0,l.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,l.kt)("p",null,"Exemples\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,l.kt)("p",null,"Sp\xe9cifier le scope du package est optionnel, donc ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter=core")," choisira ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," si ",(0,l.kt)("inlineCode",{parentName:"p"},"core")," n'est pas trouv\xe9. Cependant, si l'espace de travail a plusieurs packages avec le m\xeame nom (par exemple, ",(0,l.kt)("inlineCode",{parentName:"p"},"@babel/core")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"@types/core"),"), le filtrage sans scope ne choisira rien."),(0,l.kt)("h3",{id:"--filter-package_name-1"},"--filter ","<","package_name>..."),(0,l.kt)("p",null,"Pour s\xe9lectionner un package et ses d\xe9pendances (directes et non directes), suffixez le nom du paquet avec des points de suspension: ",(0,l.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". Par exemple, la commande suivante ex\xe9cutera les tests de ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," et toutes ses d\xe9pendances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,l.kt)("p",null,"Vous pouvez utiliser un paterne pour s\xe9lectionner un ensemble de packages racine\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,l.kt)("h3",{id:"--filter-package_name-2"},"--filter ","<","package_name>^..."),(0,l.kt)("p",null,"Pour s\xe9lectionner UNIQUEMENT les d\xe9pendances d'un package (\xe0 la fois directes et non directes), suffixez le nom avec les points de suspension susmentionn\xe9s pr\xe9c\xe9d\xe9s d'un chevron. Par exemple, la commande suivante ex\xe9cutera les tests de ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," et toutes ses d\xe9pendances:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,l.kt)("h3",{id:"--filter-package_name-3"},"--filter ...","<","package_name>"),(0,l.kt)("p",null,"Pour s\xe9lectionner un paquet et ses packages d\xe9pendants (directs et non directs), pr\xe9fixez le nom du paquet avec des points de suspension\xa0: ",(0,l.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". For instance, this will run the tests of ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," and all packages dependent on it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,l.kt)("h3",{id:"--filter-package_name-4"},'--filter "...^',"<",'package_name>"'),(0,l.kt)("p",null,"To ONLY select a package's dependents (both direct and non-direct), prefix the package name with an ellipsis followed by a chevron. For instance, this will run tests for all packages dependent on ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,l.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,l.kt)("p",null,"A glob pattern relative to the current working directory matching projects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,l.kt)("p",null,"Includes all projects that are under the specified directory."),(0,l.kt)("p",null,"It may be used with the ellipsis and chevron operators to select dependents/dependencies as well:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,l.kt)("p",null,"It may also be combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"[<since>]"),". For instance, to select all changed projects inside a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,l.kt)("p",null,"Or you may select all packages from a directory with names matching the given pattern:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,l.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,l.kt)("p",null,"Selects all the packages changed since the specified commit/branch. May be suffixed or prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," to include dependencies/dependents."),(0,l.kt)("p",null,"For example, the next command will run tests in all changed packages since ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," and on any dependent packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,l.kt)("h2",{id:"excluding"},"Excluding"),(0,l.kt)("p",null,'Any of the filter selectors may work as exclusion operators when they have a leading "!". In zsh (and possibly other shells), "!" should be escaped: ',(0,l.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,l.kt)("p",null,"For instance, this will run a command in all projects except for ",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,l.kt)("p",null,"And this will run a command in all projects that are not under the ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,l.kt)("h2",{id:"multiplicity"},"Multiplicity"),(0,l.kt)("p",null,"When packages are filtered, every package is taken that matches at least one of the selectors. You can use as many filters as you want:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,l.kt)("h2",{id:"--filter-prod-mod\xe8le_filtrage"},"--filter-prod ","<","mod\xe8le_filtrage>"),(0,l.kt)("p",null,"Acts the same a ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter")," but omits ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies")," when selecting dependency projects from the workspace."),(0,l.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"test-pattern")," allows detecting whether the modified files are related to tests. If they are, the dependent packages of such modified packages are not included."),(0,l.kt)("p",null,'This option is useful with the "changed since" filter. For instance, the next command will run tests in all changed packages, and if the changes are in the source code of the package, tests will run in the dependent packages as well:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,l.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,l.kt)("p",null,"Allows to ignore changed files by glob patterns when filtering for changed projects since the specified commit/branch."),(0,l.kt)("p",null,"Exemple d'utilisation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}u.isMDXComponent=!0}}]);