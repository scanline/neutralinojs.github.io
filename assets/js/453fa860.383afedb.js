"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[8384],{8248:(e,t,a)=>{a.d(t,{O:()=>n});function i(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(a[i[s]]=e[i[s]])}return a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;var s=a(6540);function n(e){var{className:t="",style:a={display:"block"},client:n,slot:r,layout:l="",layoutKey:o="",format:c="auto",responsive:d="false",pageLevelAds:u=!1,adTest:p,children:h}=e,g=i(e,["className","style","client","slot","layout","layoutKey","format","responsive","pageLevelAds","adTest","children"]);return(0,s.useEffect)((()=>{const t={};u&&(t.google_ad_client=n,t.enable_page_level_ads=!0);try{"object"==typeof window&&(window.adsbygoogle=window.adsbygoogle||[]).push(t)}catch(e){}}),[]),s.createElement("ins",Object.assign({className:`adsbygoogle ${t}`,style:a,"data-ad-client":n,"data-ad-slot":r,"data-ad-layout":l,"data-ad-layout-key":o,"data-ad-format":c,"data-full-width-responsive":d,"data-adtest":p},g),h)}},8702:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});a(6540);var i=a(53),s=a(781),n=a(8774),r=a(4586),l=a(6025),o=a(3588),c=a(8248),d=a(4848);const u="https://www.youtube.com/channel/UCRUPsj26cnJk5sI6WFHAKmA",p=[{title:"LiteMan",image:"liteman_prev_linux.gif",description:(0,d.jsx)(d.Fragment,{children:"A simple file viewer app written in Neutralinojs."}),tags:["Angular","Material"],githubLink:"https://github.com/codezri/liteman"},{title:"LitePy",image:"litepy_prev_linux.gif",description:(0,d.jsx)(d.Fragment,{children:"World's simplest Python editor built with Neutralinojs"}),tags:["React"],githubLink:"https://github.com/codezri/litepy"},{title:"Fonline Name Colorizing",image:"fonline-name-colorizing.gif",description:(0,d.jsx)(d.Fragment,{children:"A lightweight application built with Neutralinojs and Preact"}),tags:["Preact","TypeScript","Redux"],githubLink:"https://github.com/ernest-rudnicki/fonline-name-colorizing"},{title:"Vale at Red Hat app",image:"varh-app-demo.gif",description:(0,d.jsx)(d.Fragment,{children:"A desktop app for linting AsciiDoc files, built with Neutralinojs."}),tags:["JS","Material"],githubLink:"https://github.com/gaurav-nelson/varh-app"}];function h(e){let{image:t,title:a,description:s,githubLink:r,tags:c}=e;const u=(0,l.A)(`/img/apps/${t}`);return(0,d.jsxs)("div",{className:(0,i.A)("col col--6",o.A.feature),children:[u&&(0,d.jsx)("div",{className:"text--center",children:(0,d.jsx)("img",{src:u,alt:a})}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:s}),(0,d.jsx)("p",{children:c.map(((e,t)=>(0,d.jsx)("span",{className:"badge badge--warning",style:{marginRight:"6px"},children:e},t)))}),(0,d.jsx)("div",{className:o.A.buttons,children:(0,d.jsx)(n.A,{className:(0,i.A)("button button--outline button--secondary button--lg",o.A.getStarted),to:r,children:"View project"})})]})}function g(){const e=(0,r.A)(),{siteConfig:t={}}=e;return(0,d.jsxs)(s.A,{title:"Neutralinojs Apps",description:"Sample cross-platform applications built with the Neutralinojs framework. Learn how to build Neutralino apps by exploring sample apps.",children:[(0,d.jsx)("header",{className:(0,i.A)("hero hero--primary",o.A.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("h1",{className:"hero__title",children:[t.title," Apps"]}),(0,d.jsx)("p",{className:"hero__subtitle",children:"Sample apps built with Neutralinojs"})]})}),(0,d.jsx)("main",{children:p&&p.length>0&&(0,d.jsx)("section",{className:o.A.features,children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:p.map(((e,t)=>(0,d.jsx)(h,{...e},t)))})})})}),(0,d.jsx)("div",{className:o.A.intro,children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col col--12",children:(0,d.jsxs)("p",{children:["Display your Neutralinojs app here by making a pull request. You can learn more about the above projects from our ",(0,d.jsx)("a",{target:"_blank",href:u,children:"YouTube channel"})," ."]})}),(0,d.jsx)("div",{className:"col col--12",children:(0,d.jsx)(c.O,{client:"ca-pub-4805219819571962",slot:"1174653824",style:{display:"block"},layout:"in-article",format:"auto"})})]})})}),(0,d.jsx)("div",{className:(0,i.A)("hero hero--primary",o.A.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:"Start developing lightweight apps today!"}),(0,d.jsx)("p",{className:"hero__subtitle",children:(0,d.jsx)("code",{children:"npm install -g @neutralinojs/neu"})}),(0,d.jsx)("div",{className:o.A.buttons,children:(0,d.jsx)(n.A,{className:(0,i.A)("button button--outline button--secondary button--lg",o.A.getStarted),to:(0,l.A)("docs/"),children:"Get Started"})})]})})]})}},53:(e,t,a)=>{function i(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}a.d(t,{A:()=>s});const s=function(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(s&&(s+=" "),s+=t);return s}},3588:(e,t,a)=>{a.d(t,{A:()=>i});const i={heroBanner:"heroBanner_UJJx",feature:"feature_nI3B",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",intro:"intro_y8hm"}}}]);