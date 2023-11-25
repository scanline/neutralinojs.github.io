(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),i=(a(0),a(120)),l={title:"Distribution Overview"},c={unversionedId:"distribution/overview",id:"distribution/overview",isDocsHomePage:!1,title:"Distribution Overview",description:"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based",source:"@site/docs/distribution/overview.md",slug:"/distribution/overview",permalink:"/docs/distribution/overview",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/distribution/overview.md",version:"current",sidebar:"docs",previous:{title:"Auto Updater",permalink:"/docs/how-to/auto-updater"},next:{title:"Framework Developer Guide",permalink:"/docs/contributing/framework-developer-guide"}},p=[{value:"Application build results",id:"application-build-results",children:[]},{value:"Selecting files for packaging",id:"selecting-files-for-packaging",children:[]},{value:"Creating a portable application package",id:"creating-a-portable-application-package",children:[{value:"Creating a portable application package for macOS",id:"creating-a-portable-application-package-for-macos",children:[]}]},{value:"Creating application installers",id:"creating-application-installers",children:[]}],o={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based\nsmall setup files. You can select an option according to your application distribution preference."),Object(i.b)("h2",{id:"application-build-results"},"Application build results"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"neu build")," command generates the following files on any supported operating system into the ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," directory."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Filename"),Object(i.b)("th",{parentName:"tr",align:null},"OS"),Object(i.b)("th",{parentName:"tr",align:null},"CPU architecture"),Object(i.b)("th",{parentName:"tr",align:null},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-linux_x64")),Object(i.b)("td",{parentName:"tr",align:null},"Linux"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x86_64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-linux_armhf")),Object(i.b)("td",{parentName:"tr",align:null},"Linux"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"armhf")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-linux_arm64")),Object(i.b)("td",{parentName:"tr",align:null},"Linux"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"arm64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-mac_x64")),Object(i.b)("td",{parentName:"tr",align:null},"macOS"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x86_64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary (Intel)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-mac_universal")),Object(i.b)("td",{parentName:"tr",align:null},"macOS"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x86_64")," and ",Object(i.b)("inlineCode",{parentName:"td"},"arm64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-mac_arm64")),Object(i.b)("td",{parentName:"tr",align:null},"macOS"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"arm64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary (M1/M2/M3)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"myapp-win_x64")),Object(i.b)("td",{parentName:"tr",align:null},"Windows"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"x86_64")),Object(i.b)("td",{parentName:"tr",align:null},"Application binary")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"resources.neu")),Object(i.b)("td",{parentName:"tr",align:null},"all"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"N/A")),Object(i.b)("td",{parentName:"tr",align:null},"Application resource file")))),Object(i.b)("p",null,"Neutralinojs officially offers only pre-built ",Object(i.b)("inlineCode",{parentName:"p"},"x64")," and ",Object(i.b)("inlineCode",{parentName:"p"},"armhf/arm64")," Linux-only binaries.\nIf you need binaries for other CPU architectures, consider building binaries from the source\nwith ",Object(i.b)("a",{parentName:"p",href:"../contributing/framework-developer-guide"},"this guide"),". We are trying to officially support all CPU\narchitectures soon!"),Object(i.b)("h2",{id:"selecting-files-for-packaging"},"Selecting files for packaging"),Object(i.b)("p",null,"The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.\nTherefore, please check our\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries"},"security policy")," before you continue\nwith the distribution process."),Object(i.b)("p",null,"As the first step for packaging, you can pick two files for each targeted operating system: application binary and\nthe resource file. For example, if you need to make an application package for ",Object(i.b)("inlineCode",{parentName:"p"},"x64")," Linux computers, pick ",Object(i.b)("inlineCode",{parentName:"p"},"myapp-linux_x64"),"\nand the ",Object(i.b)("inlineCode",{parentName:"p"},"resources.neu")," file. The ",Object(i.b)("inlineCode",{parentName:"p"},"resources.neu")," contains all application resources, so, double click on the binary and check whether\nthe resource file is not corrupted."),Object(i.b)("h2",{id:"creating-a-portable-application-package"},"Creating a portable application package"),Object(i.b)("p",null,"The following guides are not documented yet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for macOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Windows"))),Object(i.b)("h3",{id:"creating-a-portable-application-package-for-macos"},"Creating a portable application package for macOS"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"neu build")," process creates a binary file for macOS, but that file can not be executed by a double-click action on macOS as a normal application.\nThe following steps shows how to create a simple double-clickable executable on macOS."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open Terminal."),Object(i.b)("li",{parentName:"ol"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"/dist/myapp")," directory:"),Object(i.b)("li",{parentName:"ol"},"Change the binary file type to ",Object(i.b)("inlineCode",{parentName:"li"},".app")," file type:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"mv <mac_binary> <mac_binary>.app\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Give the app file the required execution permissions:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"chmod +x <mac_binary>.app\n")),Object(i.b)("p",null,"Now you can execute the app by double-click."),Object(i.b)("h2",{id:"creating-application-installers"},"Creating application installers"),Object(i.b)("p",null,"The following guides are not documented yet."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Linux")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for macOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Windows"))))}b.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.a.createElement(s,c(c({ref:t},o),{},{components:a})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<i;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);