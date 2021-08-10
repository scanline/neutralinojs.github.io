(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),p=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,b=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return t?r.a.createElement(b,l(l({ref:n},u),{},{components:t})):r.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(8),a=(t(0),t(101)),o={title:"neu CLI"},l={unversionedId:"cli/neu-cli",id:"cli/neu-cli",isDocsHomePage:!1,title:"neu CLI",description:"npm",source:"@site/docs/cli/neu-cli.md",slug:"/cli/neu-cli",permalink:"/docs/cli/neu-cli",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/cli/neu-cli.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.events",permalink:"/docs/api/events"},next:{title:"Internal CLI Arguments",permalink:"/docs/cli/internal-cli-arguments"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Commands",id:"commands",children:[{value:"<code>neu create &lt;binaryName&gt;</code>",id:"neu-create-binaryname",children:[]},{value:"<code>neu build [--release]</code>",id:"neu-build---release",children:[]},{value:"<code>neu run [--mode=&lt;mode&gt;]</code>",id:"neu-run---modemode",children:[]},{value:"<code>neu update</code>",id:"neu-update",children:[]}]},{value:"Change log",id:"change-log",children:[]}],u={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@neutralinojs/neu",alt:"npm"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/npm/dt/@neutralinojs/neu",alt:"npm"})),Object(a.b)("p",null,"You can easily manage Neutralinojs applications with neu CLI."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Run the following command on your terminal to install the CLI globally."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  $ npm i -g @neutralinojs/neu\n")),Object(a.b)("h2",{id:"commands"},"Commands"),Object(a.b)("h3",{id:"neu-create-binaryname"},Object(a.b)("inlineCode",{parentName:"h3"},"neu create <binaryName>")),Object(a.b)("p",null,"Creates a new Neutralinojs app using the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs-minimal"},"minimal template"),".\n",Object(a.b)("inlineCode",{parentName:"p"},"<binaryName>")," is the name of your application binary's file. For example, if you used ",Object(a.b)("inlineCode",{parentName:"p"},"myapp"),", the final application binaries will become ",Object(a.b)("inlineCode",{parentName:"p"},"myapp-<platform>"),"."),Object(a.b)("h3",{id:"neu-build---release"},Object(a.b)("inlineCode",{parentName:"h3"},"neu build [--release]")),Object(a.b)("p",null,"This command will create ",Object(a.b)("inlineCode",{parentName:"p"},"dist")," folder. Thereafter, it will create the ",Object(a.b)("inlineCode",{parentName:"p"},"res.neu")," resource file from your application resources.\nFinally, this command will create a zip file of the application bundle only if ",Object(a.b)("inlineCode",{parentName:"p"},"--release")," flag is provided."),Object(a.b)("h3",{id:"neu-run---modemode"},Object(a.b)("inlineCode",{parentName:"h3"},"neu run [--mode=<mode>]")),Object(a.b)("p",null,"Executes the current application (This will execute specific binary depending on your operating system).\nThis command will change execution permissions (using the ",Object(a.b)("inlineCode",{parentName:"p"},"chmod")," command) of the binary files on Linux and macOS.\nBesides, it will enable live-reload for the current application.\nIn other words, when a modification happens to application resources, the Neutralinojs application will be reloaded automatically."),Object(a.b)("h3",{id:"neu-update"},Object(a.b)("inlineCode",{parentName:"h3"},"neu update")),Object(a.b)("p",null,"This command will update the existing Neutralinojs binaries and client library from the internet."),Object(a.b)("h2",{id:"change-log"},"Change log"),Object(a.b)("p",null,"Please check the version history from ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@neutralinojs/neu"},"npm"),"."))}p.isMDXComponent=!0}}]);