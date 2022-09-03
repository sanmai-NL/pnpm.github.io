"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9553],{9613:(a,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>u});var i=n(9496);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function p(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function d(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function r(a,e){if(null==a)return{};var n,i,t=function(a,e){if(null==a)return{};var n,i,t={},p=Object.keys(a);for(i=0;i<p.length;i++)n=p[i],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(i=0;i<p.length;i++)n=p[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var l=i.createContext({}),k=function(a){var e=i.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):d(d({},e),a)),n},s=function(a){var e=k(a.components);return i.createElement(l.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},o=i.forwardRef((function(a,e){var n=a.components,t=a.mdxType,p=a.originalType,l=a.parentName,s=r(a,["components","mdxType","originalType","parentName"]),o=k(n),u=t,g=o["".concat(l,".").concat(u)]||o[u]||m[u]||p;return n?i.createElement(g,d(d({ref:e},s),{},{components:n})):i.createElement(g,d({ref:e},s))}));function u(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var p=n.length,d=new Array(p);d[0]=o;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r.mdxType="string"==typeof a?a:t,d[1]=r;for(var k=2;k<p;k++)d[k]=n[k];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}o.displayName="MDXCreateElement"},2812:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>k,toc:()=>m});var i=n(2081),t=n(4604),p=(n(9496),n(9613)),d=["components"],r={id:"faq",title:"Pertanyaan yang Sering Diajukan"},l=void 0,k={unversionedId:"faq",id:"faq",title:"Pertanyaan yang Sering Diajukan",description:"Mengapa folder node_modules saya menggunakan ruang penyimpanan jika paket disimpan di store global?",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/id/next/faq",draft:!1,editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"faq",title:"Pertanyaan yang Sering Diajukan"}},s={},m=[{value:"Mengapa folder <code>node_modules</code> saya menggunakan ruang penyimpanan jika paket disimpan di store global?",id:"mengapa-folder-node_modules-saya-menggunakan-ruang-penyimpanan-jika-paket-disimpan-di-store-global",level:2},{value:"Apakah hard link bekerja pada Windows?",id:"apakah-hard-link-bekerja-pada-windows",level:2},{value:"Tetapi pendekatan <code>node_modules</code> bersarang tidak kompatibel dengan Windows?",id:"tetapi-pendekatan-node_modules-bersarang-tidak-kompatibel-dengan-windows",level:2},{value:"Bagaimana dengan symlink melingkar?",id:"bagaimana-dengan-symlink-melingkar",level:2},{value:"Kenapa lebih banyak menggunakan hard link? Kenapa tidak menggunakan symlink langsung ke store global?",id:"kenapa-lebih-banyak-menggunakan-hard-link-kenapa-tidak-menggunakan-symlink-langsung-ke-store-global",level:2},{value:"Apakah pnpm berfungsi di banyak drive atau di banyak filesystem?",id:"apakah-pnpm-berfungsi-di-banyak-drive-atau-di-banyak-filesystem",level:2},{value:"Jalur store ditentukan",id:"jalur-store-ditentukan",level:3},{value:"Jalur store TIDAK ditentukan",id:"jalur-store-tidak-ditentukan",level:3},{value:"Apa kepanjangan dari <code>pnpm</code>?",id:"apa-kepanjangan-dari-pnpm",level:2},{value:"<code>pnpm</code> tidak bekerja dengan &lt;PROYEK-ANDA-DISINI&gt;?",id:"pnpm-tidak-bekerja-dengan-proyek-anda-disini",level:2},{value:"Solusi 1",id:"solusi-1",level:3},{value:"Solusi 2",id:"solusi-2",level:3},{value:"Solusi 3",id:"solusi-3",level:3}],o={toc:m};function u(a){var e=a.components,n=(0,t.Z)(a,d);return(0,p.kt)("wrapper",(0,i.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"mengapa-folder-node_modules-saya-menggunakan-ruang-penyimpanan-jika-paket-disimpan-di-store-global"},"Mengapa folder ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," saya menggunakan ruang penyimpanan jika paket disimpan di store global?"),(0,p.kt)("p",null,"pnpm membuat ",(0,p.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hard_link"},"hard link (tautan keras)")," dari store global ke folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," proyek. Hard link mengarah ke tempat yang sama pada penyimpanan dimana berkas asli berada. Ambil contoh, jika Anda memiliki ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," di proyek Anda sebagai dependensi dan itu menempati ruang 1MB, maka itu akan terlihat seperti menempati 1MB ruang di folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," proyek dan jumlah ruang yang sama di store global. Namun, 1MB itu adalah ",(0,p.kt)("em",{parentName:"p"},"ruang yang sama")," pada penyimpanan yang dialamatkan dari dua lokasi berbeda. Jadi total ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," menempati 1MB, bukan 2MB."),(0,p.kt)("p",null,"Untuk lebih lanjut tentang hal ini:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/88423/why-do-hard-links-seem-to-take-the-same-space-as-the-originals"},"Mengapa hard link tampaknya mengambil ruang yang sama dengan aslinya?")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://gist.github.com/zkochan/106cfef49f8476b753a9cbbf9c65aff1"},"Sebuah utas dari ruang obrolan pnpm")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/794"},"Sebuah issue di repositori pnpm"))),(0,p.kt)("h2",{id:"apakah-hard-link-bekerja-pada-windows"},"Apakah hard link bekerja pada Windows?"),(0,p.kt)("p",null,"Singkatnya ya. Menggunakan symbolic link (tautan simbolis) pada Windows bisa dikatakan bermasalah, namun pnpm punya solusinya. Untuk Windows, kami menggunakan ",(0,p.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions"},"junction")," sebagai gantinya."),(0,p.kt)("h2",{id:"tetapi-pendekatan-node_modules-bersarang-tidak-kompatibel-dengan-windows"},"Tetapi pendekatan ",(0,p.kt)("inlineCode",{parentName:"h2"},"node_modules")," bersarang tidak kompatibel dengan Windows?"),(0,p.kt)("p",null,"Early versions of npm had issues because of nesting all ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," (see ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-v0.x-archive/issues/6960"},"this issue"),"). Namun, pnpm tidak membuat folder yang dalam, ia menyimpan semua paket secara datar dan menggunakan symbolic link untuk membuat struktur pohon dependensi."),(0,p.kt)("h2",{id:"bagaimana-dengan-symlink-melingkar"},"Bagaimana dengan symlink melingkar?"),(0,p.kt)("p",null,"Meskipun pnpm menggunakan penautan untuk meletakkan dependensi ke dalam folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),", symlink melingkar dihindari karena paket induk ditempatkan ke folder ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang sama di mana dependensinya berada. Jadi, dependensi milik ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," tidak akan ada di ",(0,p.kt)("inlineCode",{parentName:"p"},"foo/node_modules"),", tetapi dependensi-dependensi itu berada di ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," bersamaa dengan ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," itu sendiri."),(0,p.kt)("h2",{id:"kenapa-lebih-banyak-menggunakan-hard-link-kenapa-tidak-menggunakan-symlink-langsung-ke-store-global"},"Kenapa lebih banyak menggunakan hard link? Kenapa tidak menggunakan symlink langsung ke store global?"),(0,p.kt)("p",null,"Satu paket bisa saja memiliki seperangkat dependensi yang berbeda pada satu mesin."),(0,p.kt)("p",null,"Dalam proyek ",(0,p.kt)("strong",{parentName:"p"},"A")," ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," dapat memiliki dependensi yang diselesaikan menjadi ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.0.0"),", tetapi dalam proyek ",(0,p.kt)("strong",{parentName:"p"},"B")," dependensi yang sama dari ",(0,p.kt)("inlineCode",{parentName:"p"},"foo")," mungkin diselesaikan menjadi ",(0,p.kt)("inlineCode",{parentName:"p"},"bar@1.1.0"),"; jadi, pnpm menggunakan hard link untuk ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," ke setiap proyek di mana ia digunakan, untuk membuat seperangkat dependensi yang berbeda."),(0,p.kt)("p",null,"Melakukan symlink langsung ke store global akan bekerja dengan tanda Node ",(0,p.kt)("inlineCode",{parentName:"p"},"--preserve-symlinks"),". Namun, pendekatan itu datang dengan sejumlah masalah besar. Jadi kami memutuskan untuk tetap menggunakan hard link. Untuk detail lebih lanjut tentang mengapa keputusan ini dibuat, lihat ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node-eps/issues/46"},"issue ini"),"."),(0,p.kt)("h2",{id:"apakah-pnpm-berfungsi-di-banyak-drive-atau-di-banyak-filesystem"},"Apakah pnpm berfungsi di banyak drive atau di banyak filesystem?"),(0,p.kt)("p",null,"Store paket harus berada di drive dan filesystem yang sama dengan instalasi. Jika tidak, paket akan disalin, tidak ditautkan. Hal ini karena keterbatasan dalam cara kerja hard link, di mana berkas pada satu filesystem tidak dapat dialamatkan di lokasi lain di filesystem yang berbeda. Lihat ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/712"},"issue #712")," untuk lebih jelasnya."),(0,p.kt)("p",null,"pnpm berfungsi secara berbeda dalam 2 kasus di bawah ini:"),(0,p.kt)("h3",{id:"jalur-store-ditentukan"},"Jalur store ditentukan"),(0,p.kt)("p",null,"Jika jalur store ditentukan melalui ",(0,p.kt)("a",{parentName:"p",href:"/id/next/configuring"},"konfigurasi store"),", maka penyalinan akan dilakukan antara store dan proyek apa pun yang berada di disk yang berbeda."),(0,p.kt)("p",null,"Jika Anda menjalankan ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", maka store pnpm harus pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),". Jika pnpm store terletak di disk ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", maka semua paket yang diperlukan akan disalin langsung ke lokasi proyek alih-alih ditautkan. Ini sangat menghambat manfaat penyimpanan dan kinerja dari pnpm."),(0,p.kt)("h3",{id:"jalur-store-tidak-ditentukan"},"Jalur store TIDAK ditentukan"),(0,p.kt)("p",null,"Jika jalur store tidak diatur, maka beberapa store akan dibuat (satu per drive atau filesystem)."),(0,p.kt)("p",null,"Jika instalasi dijalankan pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),", penyimpanan akan dibuat pada ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store")," di bawah akar filesystem disk ",(0,p.kt)("inlineCode",{parentName:"p"},"A"),".  Jika nantinya instalasi dijalankan pada disk ",(0,p.kt)("inlineCode",{parentName:"p"},"B"),", toko independen akan dibuat pada ",(0,p.kt)("inlineCode",{parentName:"p"},"B")," di ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpm-store"),". Proyek masih akan mempertahankan manfaat pnpm, tetapi setiap drive mungkin memiliki paket yang berlebihan."),(0,p.kt)("h2",{id:"apa-kepanjangan-dari-pnpm"},"Apa kepanjangan dari ",(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm"),"?"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"pnpm")," adalah singkatan untuk ",(0,p.kt)("inlineCode",{parentName:"p"},"performant npm")," (npm yang berperforma). ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rstacruz/"},"@rstacruz")," yang memberi nama itu."),(0,p.kt)("h2",{id:"pnpm-tidak-bekerja-dengan-proyek-anda-disini"},(0,p.kt)("inlineCode",{parentName:"h2"},"pnpm")," tidak bekerja dengan ","<","PROYEK-ANDA-DISINI>?"),(0,p.kt)("p",null,"Dalam kebanyakan kasus, hal ini berarti salah satu dependensi memerlukan paket yang tidak dideklarasikan dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),". Ini adalah kesalahan umum yang disebabkan oleh struktur ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang datar. Jika ini terjadi, ini adalah kesalahan dalam dependensi, dan dependensi tersebut harus diperbaiki. Mungkin membutuhkan waktu untuk memperbaikinya, jadi pnpm mendukung solusi untuk membuat paket buggy tersebut tetap berfungsi."),(0,p.kt)("h3",{id:"solusi-1"},"Solusi 1"),(0,p.kt)("p",null,"Dalam contoh berikut, sebuah dependensi ",(0,p.kt)("strong",{parentName:"p"},"tidak")," memiliki modul ",(0,p.kt)("inlineCode",{parentName:"p"},"iterall")," dalam daftar dependensinya sendiri."),(0,p.kt)("p",null,"Solusi paling mudah untuk menyelesaikan dependensi yang hilang dari paket buggy adalah dengan ",(0,p.kt)("strong",{parentName:"p"},"menambahkan ",(0,p.kt)("inlineCode",{parentName:"strong"},"iterall")," sebagai dependensi ke ",(0,p.kt)("inlineCode",{parentName:"strong"},"package.json"))," proyek kita."),(0,p.kt)("p",null,"Anda dapat melakukannya, dengan menginstalnya melalui ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm add iterall"),", dan akan menjadi secara otomatis ditambahkan ke ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," proyek Anda."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'  "dependencies": {\n    ...\n    "iterall": "^1.2.2",\n    ...\n  }\n')),(0,p.kt)("h3",{id:"solusi-2"},"Solusi 2"),(0,p.kt)("p",null,"Salah satu solusinya adalah menggunakan ",(0,p.kt)("a",{parentName:"p",href:"/id/next/pnpmfile#hooks"},"hooks (kait)")," guna menambahkan dependensi yang hilang ke ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," paket tersebut."),(0,p.kt)("p",null,"Ambil contoh ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/1043"},"Webpack Dashboard")," yang tidak berfungsi dengan ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),". Ini sudah diselesaikan sekarang, sehingga sudah dapat bekerja dengan ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm"),"."),(0,p.kt)("p",null,"Tapi dulu itu biasanya melemparkan eror. Adapun eror tersebut antara lain sebagai berikut:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-console"},"Error: Cannot find module 'babel-traverse'\n  at /node_modules/inspectpack@2.2.3/node_modules/inspectpack/lib/actions/parse\n")),(0,p.kt)("p",null,"Masalahnya adalah ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," digunakan dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack")," yang digunakan oleh ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack-dashboard"),", tetapi ",(0,p.kt)("inlineCode",{parentName:"p"},"babel-traverse")," tidak ditulis secara eksplisit di dalam ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," milik ",(0,p.kt)("inlineCode",{parentName:"p"},"inspectpack"),". Ini akan tetap bekerja dengan ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," dan ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn")," karena mereka membuat struktur ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang datar."),(0,p.kt)("p",null,"Solusinya adalah membuat ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs")," dengan konten berikut:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  hooks: {\n    readPackage: (pkg) => {\n      if (pkg.name === \"inspectpack\") {\n        pkg.dependencies['babel-traverse'] = '^6.26.0';\n      }\n      return pkg;\n    }\n  }\n};\n")),(0,p.kt)("p",null,"Setelah membuat ",(0,p.kt)("inlineCode",{parentName:"p"},".pnpmfile.cjs"),", hapus ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," (tidak perlu menghapus ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules"),"), karena hooks pnpm hanya memengaruhi resolusi modul. Kemudian, bangun kembali dependensi dan ini seharusnya dapat berfungsi."),(0,p.kt)("h3",{id:"solusi-3"},"Solusi 3"),(0,p.kt)("p",null,"Jika ada terlalu banyak masalah, Anda dapat menggunakan opsi ",(0,p.kt)("inlineCode",{parentName:"p"},"shamefully-hoist"),". Shamefully hoist akan menciptakan struktur ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," yang datar, serupa dengan yang dibuat oleh ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," atau ",(0,p.kt)("inlineCode",{parentName:"p"},"yarn"),". Opsi ini tidak direkomendasikan karena menghindari struktur ini adalah tujuan utama dari pendekatan ",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules")," dari pnpm."),(0,p.kt)("p",null,"Untuk menggunakannya, coba ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install --shamefully-hoist"),"."))}u.isMDXComponent=!0}}]);