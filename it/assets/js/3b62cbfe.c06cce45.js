"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3173],{9613:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>m});var t=i(9496);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)i=p[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)i=p[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=t.createContext({}),s=function(e){var n=t.useContext(r),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d=function(e){var n=s(e.components);return t.createElement(r.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,p=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(i),m=a,k=u["".concat(r,".").concat(m)]||u[m]||c[m]||p;return i?t.createElement(k,o(o({ref:n},d),{},{components:i})):t.createElement(k,o({ref:n},d))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=i.length,o=new Array(p);o[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<p;s++)o[s]=i[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8342:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=i(2081),a=i(4604),p=(i(9496),i(9613)),o=["components"],l={id:"package_json",title:"package.json"},r=void 0,s={unversionedId:"package_json",id:"package_json",title:"package.json",description:"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/package_json.md",sourceDirName:".",slug:"/package_json",permalink:"/it/next/package_json",draft:!1,editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"package_json",title:"package.json"},sidebar:"docs",previous:{title:"pnpm deploy",permalink:"/it/next/cli/deploy"},next:{title:".npmrc",permalink:"/it/next/npmrc"}},d={},c=[{value:"engines",id:"engines",level:2},{value:"dependenciesMeta",id:"dependenciesmeta",level:2},{value:"dependenciesMeta.*.injected",id:"dependenciesmetainjected",level:3},{value:"peerDependenciesMeta",id:"peerdependenciesmeta",level:2},{value:"peerDependenciesMeta.*.optional",id:"peerdependenciesmetaoptional",level:3},{value:"publishConfig",id:"publishconfig",level:2},{value:"publishConfig.executableFiles",id:"publishconfigexecutablefiles",level:3},{value:"publishConfig.directory",id:"publishconfigdirectory",level:3},{value:"publishConfig.linkDirectory",id:"publishconfiglinkdirectory",level:3},{value:"pnpm.overrides",id:"pnpmoverrides",level:2},{value:"pnpm.packageExtensions",id:"pnpmpackageextensions",level:2},{value:"pnpm.peerDependencyRules",id:"pnpmpeerdependencyrules",level:2},{value:"pnpm.peerDependencyRules.ignoreMissing",id:"pnpmpeerdependencyrulesignoremissing",level:3},{value:"pnpm.peerDependencyRules.allowedVersions",id:"pnpmpeerdependencyrulesallowedversions",level:3},{value:"pnpm.peerDependencyRules.allowAny",id:"pnpmpeerdependencyrulesallowany",level:3},{value:"pnpm.neverBuiltDependencies",id:"pnpmneverbuiltdependencies",level:2},{value:"pnpm.onlyBuiltDependencies",id:"pnpmonlybuiltdependencies",level:2},{value:"pnpm.allowedDeprecatedVersions",id:"pnpmalloweddeprecatedversions",level:2},{value:"pnpm.patchedDependencies",id:"pnpmpatcheddependencies",level:2},{value:"resolutions",id:"resolutions",level:2}],u={toc:c};function m(e){var n=e.components,i=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Il file manifesto di un pacchetto. Contiene tutti i metadati del pacchetto, comprese le dipendenze, il titolo, l'autore, eccetera. Questo \xe8 uno standard mantenuto in tutti i principali gestori di pacchetti Node.JS, incluso pnpm."),(0,p.kt)("h2",{id:"engines"},"engines"),(0,p.kt)("p",null,"Puoi specificare la versione di Node e pnpm su cui funziona il tuo software:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "engines": {\n        "node": ">=10",\n        "pnpm": ">=3"\n    }\n}\n')),(0,p.kt)("p",null,"Durante lo sviluppo locale, pnpm fallir\xe0 sempre con un messaggio di errore se la sua versione non corrisponde a quella specificata nel campo ",(0,p.kt)("inlineCode",{parentName:"p"},"engine"),"."),(0,p.kt)("p",null,"A meno che l'utente non abbia impostato il flag di configurazione ",(0,p.kt)("inlineCode",{parentName:"p"},"engine-strict")," (vedi ",(0,p.kt)("a",{parentName:"p",href:"/it/next/npmrc#engine-strict"},".npmrc"),"), questo campo \xe8 solo consultivo e produrr\xe0 avvisi solo quando il tuo pacchetto \xe8 installato come dipendenza."),(0,p.kt)("h2",{id:"dependenciesmeta"},"dependenciesMeta"),(0,p.kt)("p",null,"Ulteriori informazioni meta utilizzate per le dipendenze dichiarate all'interno di ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"e ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("h3",{id:"dependenciesmetainjected"},"dependenciesMeta.*.injected"),(0,p.kt)("p",null,"Se questo \xe8 impostato su true per una dipendenza locale, il pacchetto sar\xe0 collegato alla cartella dei moduli, non collegato simbolicamente."),(0,p.kt)("p",null,"Ad esempio, il seguente ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," in uno spazio di lavoro creer\xe0 un collegamento simbolico a ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," nella cartella ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," di ",(0,p.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0"\n  }\n}\n')),(0,p.kt)("p",null,"Ma cosa succede se ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," ha ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," nelle sue dipendenze peer? Se tutti i progetti nel monorepo utilizzano la stessa versione di ",(0,p.kt)("inlineCode",{parentName:"p"},"react"),", nessun problema. Ma se ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," \xe8 richiesto da ",(0,p.kt)("inlineCode",{parentName:"p"},"card")," che utilizza ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," e ",(0,p.kt)("inlineCode",{parentName:"p"},"form")," con ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17"),"? Senza usare ",(0,p.kt)("inlineCode",{parentName:"p"},"inject"),", dovresti scegliere una singola versione di ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," e installarla come dipendenza dev di ",(0,p.kt)("inlineCode",{parentName:"p"},"button"),". Ma usando il campo ",(0,p.kt)("inlineCode",{parentName:"p"},"injected")," puoi iniettare ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," in un pacchetto e ",(0,p.kt)("inlineCode",{parentName:"p"},"button")," verr\xe0 installato con la versione di ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," di quel pacchetto."),(0,p.kt)("p",null,"Quindi questo sar\xe0 il ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," di ",(0,p.kt)("inlineCode",{parentName:"p"},"card"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "card",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "16"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"button")," sar\xe0 collegato fisicamente alle dipendenze di ",(0,p.kt)("inlineCode",{parentName:"p"},"card")," e ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," sar\xe0 collegato simbolicamente alle dipendenze di ",(0,p.kt)("inlineCode",{parentName:"p"},"card/node_modules/button"),"."),(0,p.kt)("p",null,"E questo sar\xe0 il ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," di ",(0,p.kt)("inlineCode",{parentName:"p"},"form"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "form",\n  "dependencies": {\n    "button": "workspace:1.0.0",\n    "react": "17"\n  },\n  "dependenciesMeta": {\n    "button": {\n      "injected": true\n    }\n  }\n}\n')),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"button")," sar\xe0 collegato fisicamente alle dipendenze di ",(0,p.kt)("inlineCode",{parentName:"p"},"form")," e ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17")," sar\xe0 collegato simbolicamente alle dipendenze di ",(0,p.kt)("inlineCode",{parentName:"p"},"form/node_modules/button"),"."),(0,p.kt)("h2",{id:"peerdependenciesmeta"},"peerDependenciesMeta"),(0,p.kt)("p",null,"Questo campo elenca alcune informazioni aggiuntive relative alle dipendenze elencate nel campo ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),"."),(0,p.kt)("h3",{id:"peerdependenciesmetaoptional"},"peerDependenciesMeta.*.optional"),(0,p.kt)("p",null,"Se questo \xe8 impostato su true, la dipendenza peer selezionata verr\xe0 contrassegnata come opzionale dal gestore pacchetti. Pertanto, il consumatore che lo omette non sar\xe0 pi\xf9 segnalato come errore."),(0,p.kt)("p",null,"Ad esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peerDependencies": {\n        "foo": "1"\n    },\n    "peerDependenciesMeta": {\n        "foo": {\n            "optional": true\n        },\n        "bar": {\n            "optional": true\n        }\n    }\n}\n')),(0,p.kt)("p",null,"Si noti che anche se ",(0,p.kt)("inlineCode",{parentName:"p"},"bar")," non \xe8 stato specificato in ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", \xe8 contrassegnato come facoltativo. pnpm quindi presumer\xe0 che qualsiasi versione di bar vada bene. Tuttavia, ",(0,p.kt)("inlineCode",{parentName:"p"},"pippo")," \xe8 facoltativo, ma solo per la specifica della versione richiesta."),(0,p.kt)("h2",{id:"publishconfig"},"publishConfig"),(0,p.kt)("p",null,"\xc8 possibile sovrascrivere alcuni campi nel manifesto prima che il pacchetto sia impacchettato. I seguenti campi possono essere sovrascritti:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#bin"},(0,p.kt)("inlineCode",{parentName:"a"},"bin"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#main"},(0,p.kt)("inlineCode",{parentName:"a"},"main"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://nodejs.org/api/esm.html#esm_package_exports"},(0,p.kt)("inlineCode",{parentName:"a"},"exports"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#types"},(0,p.kt)("inlineCode",{parentName:"a"},"types")," or ",(0,p.kt)("inlineCode",{parentName:"a"},"typings"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#module"},(0,p.kt)("inlineCode",{parentName:"a"},"module"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#browser"},(0,p.kt)("inlineCode",{parentName:"a"},"browser"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#esnext"},(0,p.kt)("inlineCode",{parentName:"a"},"esnext"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#es2015"},(0,p.kt)("inlineCode",{parentName:"a"},"es2015"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#unpkg-1"},(0,p.kt)("inlineCode",{parentName:"a"},"unpkg"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/package.json#microbundle"},(0,p.kt)("inlineCode",{parentName:"a"},"umd:main"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#version-selection-with-typesversions"},(0,p.kt)("inlineCode",{parentName:"a"},"typesVersions"))),(0,p.kt)("li",{parentName:"ul"},"cpu"),(0,p.kt)("li",{parentName:"ul"},"os")),(0,p.kt)("p",null,"Per sovrascrivere un campo, aggiungi la versione pubblica del campo in ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig"),"."),(0,p.kt)("p",null,"Ad esempio, il seguente ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "src/index.ts",\n    "publishConfig": {\n        "main": "lib/index.js",\n        "typings": "lib/index.d.ts"\n    }\n}\n')),(0,p.kt)("p",null,"Verr\xe0 pubblicato come:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "foo",\n    "version": "1.0.0",\n    "main": "lib/index.js",\n    "typings": "lib/index.d.ts"\n}\n')),(0,p.kt)("h3",{id:"publishconfigexecutablefiles"},"publishConfig.executableFiles"),(0,p.kt)("p",null,"Per impostazione predefinita, per motivi di portabilit\xe0, nessun file tranne quelli elencati nel campo bin verr\xe0 contrassegnato come eseguibile nell'archivio del pacchetto risultante. Il campo ",(0,p.kt)("inlineCode",{parentName:"p"},"executableFiles")," consente di dichiarare campi aggiuntivi che devono avere il flag dell'eseguibile (+x) impostato anche se non sono direttamente accessibili tramite il campo bin."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "publishConfig": {\n    "executableFiles": [\n      "./dist/shim.js"\n    ]\n  }\n}\n')),(0,p.kt)("h3",{id:"publishconfigdirectory"},"publishConfig.directory"),(0,p.kt)("p",null,"Puoi anche utilizzare il campo ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," per personalizzare la sottocartella pubblicata relativa all'attuale ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,p.kt)("p",null,"Dovrebbe avere una versione modificata del pacchetto corrente nella cartella specificata (di solito utilizzando strumenti di compilazione di terze parti)."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"In questo esempio la cartella ",(0,p.kt)("inlineCode",{parentName:"p"},'"dist"')," deve contenere un ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n  }\n}\n')),(0,p.kt)("h3",{id:"publishconfiglinkdirectory"},"publishConfig.linkDirectory"),(0,p.kt)("p",null,"Aggiunto nella versione: v7.8.0"),(0,p.kt)("p",null,"Quando \xe8 impostato su ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),", il progetto verr\xe0 collegato in modo simbolico dalla posizione ",(0,p.kt)("inlineCode",{parentName:"p"},"publishConfig.directory")," durante lo sviluppo locale."),(0,p.kt)("p",null,"Ad esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "foo",\n  "version": "1.0.0",\n  "publishConfig": {\n    "directory": "dist"\n    "linkDirectory": true\n  }\n}\n')),(0,p.kt)("h2",{id:"pnpmoverrides"},"pnpm.overrides"),(0,p.kt)("p",null,"Questo campo consente di indicare a pnpm di sovrascrivere qualsiasi dipendenza nel grafico delle dipendenze. Questo \xe8 utile per imporre a tutti i tuoi pacchetti di utilizzare una singola versione di una dipendenza, eseguire il backport di una correzione o sostituire una dipendenza con un fork."),(0,p.kt)("p",null,"Nota che il campo delle sostituzioni pu\xf2 essere impostato solo alla radice del progetto."),(0,p.kt)("p",null,"Un esempio del campo ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."overrides"'),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "overrides": {\n      "foo": "^1.0.0",\n      "quux": "npm:@myorg/quux@^1.0.0",\n      "bar@^2.1.0": "3.0.0",\n      "qar@1>zoo": "2"\n    }\n  }\n}\n')),(0,p.kt)("p",null,'Puoi specificare il pacchetto a cui appartiene la dipendenza sovrascritta separando il selettore del pacchetto dal selettore delle dipendenze con un ">", per esempio ',(0,p.kt)("inlineCode",{parentName:"p"},"qar@1>zoo")," sovrascriver\xe0 solo la dipendenza ",(0,p.kt)("inlineCode",{parentName:"p"},"zoo")," di ",(0,p.kt)("inlineCode",{parentName:"p"},"qar@1"),", non per altre dipendenze."),(0,p.kt)("h2",{id:"pnpmpackageextensions"},"pnpm.packageExtensions"),(0,p.kt)("p",null,"I campi ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," offrono un modo per estendere le definizioni dei pacchetti esistenti con informazioni aggiuntive. Ad esempio, se ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," dovrebbe avere ",(0,p.kt)("inlineCode",{parentName:"p"},"react-dom")," nelle sue ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies")," ma non ce l'ha, \xe8 possibile patchare ",(0,p.kt)("inlineCode",{parentName:"p"},"react-redux")," usando ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Le chiavi in ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," sono nomi di pacchetti o nomi di pacchetti e intervalli di semver, quindi \xe8 possibile correggere solo alcune versioni di un pacchetto:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "react-redux@1": {\n        "peerDependencies": {\n          "react-dom": "*"\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"I seguenti campi possono essere estesi utilizzando ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"dependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),", e ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependenciesMeta"),"."),(0,p.kt)("p",null,"Un esempio pi\xf9 grande:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "packageExtensions": {\n      "express@1": {\n        "optionalDependencies": {\n          "typescript": "2"\n        }\n      },\n      "fork-ts-checker-webpack-plugin": {\n        "dependencies": {\n          "@babel/core": "1"\n        },\n        "peerDependencies": {\n          "eslint": ">= 6"\n        },\n        "peerDependenciesMeta": {\n          "eslint": {\n            "optional": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"Insieme a Yarn, gestiamo un database di ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions")," per correggere i pacchetti danneggiati nell'ecosistema. Se utilizzi ",(0,p.kt)("inlineCode",{parentName:"p"},"packageExtensions"),", prendi in considerazione l'invio di un PR a monte e il contributo della tua estensione al database ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/yarnpkg/berry/blob/master/packages/yarnpkg-extensions/sources/index.ts"},(0,p.kt)("inlineCode",{parentName:"a"},"@yarnpkg/extensions")),".")),(0,p.kt)("h2",{id:"pnpmpeerdependencyrules"},"pnpm.peerDependencyRules"),(0,p.kt)("h3",{id:"pnpmpeerdependencyrulesignoremissing"},"pnpm.peerDependencyRules.ignoreMissing"),(0,p.kt)("p",null,"pnpm non stamper\xe0 avvisi sulle dipendenze peer mancanti da questo elenco."),(0,p.kt)("p",null,"Ad esempio, con la configurazione seguente, pnpm non stamper\xe0 avvisi se una dipendenza ha bisogno di ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," ma ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," non \xe8 installato:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["react"]\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Possono essere utilizzati anche i modelli di nome del pacchetto:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "ignoreMissing": ["@babel/*", "@eslint/*"]\n    }\n  }\n}\n')),(0,p.kt)("h3",{id:"pnpmpeerdependencyrulesallowedversions"},"pnpm.peerDependencyRules.allowedVersions"),(0,p.kt)("p",null,"Gli avvisi di dipendenza peer non soddisfatte non verranno stampati per le dipendenze peer dell'intervallo specificato."),(0,p.kt)("p",null,"Ad esempio, se hai alcune dipendenze che richiedono ",(0,p.kt)("inlineCode",{parentName:"p"},"react@16")," ma sai che funzionano bene con ",(0,p.kt)("inlineCode",{parentName:"p"},"react@17"),", puoi utilizzare la seguente configurazione:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowedVersions": {\n        "react": "17"\n      }\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Questo dir\xe0 a pnpm che qualsiasi dipendenza che ha react nelle sue dipendenze peer dovrebbe consentire l'installazione di ",(0,p.kt)("inlineCode",{parentName:"p"},"react")," v17."),(0,p.kt)("h3",{id:"pnpmpeerdependencyrulesallowany"},"pnpm.peerDependencyRules.allowAny"),(0,p.kt)("p",null,"Aggiunto in: v7.3.0"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"allowAny")," \xe8 una lista di modelli di nomi di pacchetto, qualsiasi dipendenza peer che corrisponde al modello verr\xe0 risolta da qualsiasi versione, indipendentemente dall'intervallo specificato in ",(0,p.kt)("inlineCode",{parentName:"p"},"peerDependencies"),". Ad esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "peerDependencyRules": {\n      "allowAny": ["@babel/*", "eslint"]\n    }\n  }\n}\n')),(0,p.kt)("p",null,"L'impostazione di cui sopra disattiva tutti gli avvisi sulle mancate corrispondenze delle versioni delle dipendenze peer relative a pacchetti ",(0,p.kt)("inlineCode",{parentName:"p"},"@babel/")," o ",(0,p.kt)("inlineCode",{parentName:"p"},"eslint"),"."),(0,p.kt)("h2",{id:"pnpmneverbuiltdependencies"},"pnpm.neverBuiltDependencies"),(0,p.kt)("p",null,'Questo campo consente di ignorare le build di dipendenze specifiche. Gli script "preinstall", "install" e "postinstall" dei pacchetti elencati non verranno eseguiti durante l\'installazione.'),(0,p.kt)("p",null,"Un esempio del campo ",(0,p.kt)("inlineCode",{parentName:"p"},'"pnpm"."neverBuiltDependencies"'),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "neverBuiltDependencies": ["fsevents", "level"]\n  }\n}\n')),(0,p.kt)("h2",{id:"pnpmonlybuiltdependencies"},"pnpm.onlyBuiltDependencies"),(0,p.kt)("p",null,"Un elenco di nomi di pacchetti che possono essere eseguiti durante l'installazione. Se questo campo esiste, solo i pacchetti elencati potranno eseguire gli script di installazione."),(0,p.kt)("p",null,"Esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "onlyBuiltDependencies": ["fsevents"]\n  }\n}\n')),(0,p.kt)("h2",{id:"pnpmalloweddeprecatedversions"},"pnpm.allowedDeprecatedVersions"),(0,p.kt)("p",null,"Aggiunto in: v7.2.0"),(0,p.kt)("p",null,"Questa impostazione consente di disattivare gli avvisi di deprecazione di pacchetti specifici."),(0,p.kt)("p",null,"Esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "allowedDeprecatedVersions": {\n      "express": "1",\n      "request": "*"\n    }\n  }\n}\n')),(0,p.kt)("p",null,"Con la configurazione pnpm di cui sopra non verranno stampati avvisi di deprecazione su qualsiasi versione di ",(0,p.kt)("inlineCode",{parentName:"p"},"request")," e circa v1 di ",(0,p.kt)("inlineCode",{parentName:"p"},"express"),"."),(0,p.kt)("h2",{id:"pnpmpatcheddependencies"},"pnpm.patchedDependencies"),(0,p.kt)("p",null,"Aggiunto in: v7.4.0"),(0,p.kt)("p",null,"Questo campo viene aggiunto/aggiornato automaticamente quando si esegue ",(0,p.kt)("a",{parentName:"p",href:"/it/next/cli/patch-commit"},"pnpm patch-commit"),". \xc8 un dizionario in cui la chiave dovrebbe essere il nome del pacchetto e la versione esatta. Il valore dovrebbe essere un percorso relativo a un file di patch."),(0,p.kt)("p",null,"Esempio:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pnpm": {\n    "patchedDependencies": {\n      "express@4.18.1": "patches/express@4.18.1.patch"\n    }\n  }\n}\n')),(0,p.kt)("h2",{id:"resolutions"},"resolutions"),(0,p.kt)("p",null,"Come ",(0,p.kt)("a",{parentName:"p",href:"#pnpmoverrides"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm.overrides")),". Lo leggiamo per facilitare la migrazione da Yarn."))}m.isMDXComponent=!0}}]);