"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[6093],{8026:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var o=i(4848),s=i(8453);const d={title:"neutralino.config.json"},l=void 0,r={id:"configuration/neutralino.config.json",title:"neutralino.config.json",description:"neutralino.config.json file contains the application configuration details.\xa0Every Neutralinojs app requires",source:"@site/docs/configuration/neutralino.config.json.md",sourceDirName:"configuration",slug:"/configuration/neutralino.config.json",permalink:"/docs/configuration/neutralino.config.json",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/configuration/neutralino.config.json.md",tags:[],version:"current",frontMatter:{title:"neutralino.config.json"},sidebar:"docs",previous:{title:"Internal CLI Arguments",permalink:"/docs/cli/internal-cli-arguments"},next:{title:"Project Structure",permalink:"/docs/configuration/project-structure"}},t={},c=[{value:"Primary",id:"primary",level:2},{value:"<code>applicationId: string</code>",id:"applicationid-string",level:3},{value:"<code>version: string</code>",id:"version-string",level:3},{value:"<code>defaultMode: string</code>",id:"defaultmode-string",level:3},{value:"General",id:"general",level:2},{value:"<code>port: number</code>",id:"port-number",level:3},{value:"<code>enableServer: boolean</code>",id:"enableserver-boolean",level:3},{value:"<code>enableNativeAPI: boolean</code>",id:"enablenativeapi-boolean",level:3},{value:"<code>tokenSecurity: string</code>",id:"tokensecurity-string",level:3},{value:"<code>url: string</code>",id:"url-string",level:3},{value:"<code>documentRoot: string</code>",id:"documentroot-string",level:3},{value:"<code>exportAuthInfo: boolean</code>",id:"exportauthinfo-boolean",level:3},{value:"<code>enableExtensions: boolean</code>",id:"enableextensions-boolean",level:3},{value:"<code>extensions: object[]</code>",id:"extensions-object",level:3},{value:"<code>nativeBlockList: string[]</code>",id:"nativeblocklist-string",level:3},{value:"<code>nativeAllowList: string[]</code>",id:"nativeallowlist-string",level:3},{value:"<code>globalVariables: object</code>",id:"globalvariables-object",level:3},{value:"<code>logging.enabled: boolean</code>",id:"loggingenabled-boolean",level:3},{value:"<code>logging.writeToLogFile: boolean</code>",id:"loggingwritetologfile-boolean",level:3},{value:"<code>serverHeaders: object</code>",id:"serverheaders-object",level:3},{value:"Window mode",id:"window-mode",level:2},{value:"<code>modes.window.title: string</code>",id:"modeswindowtitle-string",level:3},{value:"<code>modes.window.width: number</code>",id:"modeswindowwidth-number",level:3},{value:"<code>modes.window.height: number</code>",id:"modeswindowheight-number",level:3},{value:"<code>modes.window.minWidth: number</code>",id:"modeswindowminwidth-number",level:3},{value:"<code>modes.window.minHeight: number</code>",id:"modeswindowminheight-number",level:3},{value:"<code>modes.window.maxWidth: number</code>",id:"modeswindowmaxwidth-number",level:3},{value:"<code>modes.window.maxHeight: number</code>",id:"modeswindowmaxheight-number",level:3},{value:"<code>modes.window.x: number</code>",id:"modeswindowx-number",level:3},{value:"<code>modes.window.y: number</code>",id:"modeswindowy-number",level:3},{value:"<code>modes.window.center: boolean</code>",id:"modeswindowcenter-boolean",level:3},{value:"<code>modes.window.trasparent: boolean</code>",id:"modeswindowtrasparent-boolean",level:3},{value:"<code>modes.window.fullScreen: boolean</code>",id:"modeswindowfullscreen-boolean",level:3},{value:"<code>modes.window.icon: string</code>",id:"modeswindowicon-string",level:3},{value:"<code>modes.window.alwaysOnTop: boolean</code>",id:"modeswindowalwaysontop-boolean",level:3},{value:"<code>modes.window.enableInspector: boolean</code>",id:"modeswindowenableinspector-boolean",level:3},{value:"<code>modes.window.borderless: boolean</code>",id:"modeswindowborderless-boolean",level:3},{value:"<code>modes.window.maximize: boolean</code>",id:"modeswindowmaximize-boolean",level:3},{value:"<code>modes.window.resizable: boolean</code>",id:"modeswindowresizable-boolean",level:3},{value:"<code>modes.window.hidden: boolean</code>",id:"modeswindowhidden-boolean",level:3},{value:"<code>modes.window.exitProcessOnClose: boolean</code>",id:"modeswindowexitprocessonclose-boolean",level:3},{value:"<code>modes.window.useSavedState: boolean</code>",id:"modeswindowusesavedstate-boolean",level:3},{value:"<code>modes.window.extendUserAgentWith: string</code>",id:"modeswindowextenduseragentwith-string",level:3},{value:"Chrome mode",id:"chrome-mode",level:2},{value:"<code>modes.chrome.width: number</code>",id:"modeschromewidth-number",level:3},{value:"<code>modes.chrome.height: number</code>",id:"modeschromeheight-number",level:3},{value:"<code>modes.chrome.args: string</code>",id:"modeschromeargs-string",level:3},{value:"CLI",id:"cli",level:2},{value:"<code>cli.binaryName: string</code>",id:"clibinaryname-string",level:3},{value:"<code>cli.resourcesPath: string</code>",id:"cliresourcespath-string",level:3},{value:"<code>cli.resourcesExclude: string</code>",id:"cliresourcesexclude-string",level:3},{value:"<code>cli.extensionsPath: string</code>",id:"cliextensionspath-string",level:3},{value:"<code>cli.extensionsExclude: string</code>",id:"cliextensionsexclude-string",level:3},{value:"<code>cli.clientLibrary: string</code>",id:"cliclientlibrary-string",level:3},{value:"<code>cli.binaryVersion: string</code>",id:"clibinaryversion-string",level:3},{value:"<code>cli.clientVersion: string</code>",id:"cliclientversion-string",level:3},{value:"<code>cli.autoReloadExclude: string</code>",id:"cliautoreloadexclude-string",level:3},{value:"<code>cli.frontendLibrary: object</code>",id:"clifrontendlibrary-object",level:3},{value:"<code>cli.distributionPath: string</code>",id:"clidistributionpath-string",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"neutralino.config.json"})," file contains the application configuration details.\xa0Every Neutralinojs app requires\nthe following mandatory keys from the config file."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"applicationId"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"url"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"defaultMode"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Other configuration properties are optional and may have default values."}),"\n",(0,o.jsx)(n.h2,{id:"primary",children:"Primary"}),"\n",(0,o.jsx)(n.p,{children:"The following configuraion values cannot be overridden in different Neutralinojs modes."}),"\n",(0,o.jsx)(n.h3,{id:"applicationid-string",children:(0,o.jsx)(n.code,{children:"applicationId: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Unique string to identify your application. Eg: ",(0,o.jsx)(n.code,{children:"js.neutralino.sample"})]}),"\n",(0,o.jsx)(n.h3,{id:"version-string",children:(0,o.jsx)(n.code,{children:"version: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Application version. Eg: ",(0,o.jsx)(n.code,{children:"2.4.22"})]}),"\n",(0,o.jsx)(n.h3,{id:"defaultmode-string",children:(0,o.jsx)(n.code,{children:"defaultMode: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Mode of the application. Accepted values are ",(0,o.jsx)(n.code,{children:"window"}),", ",(0,o.jsx)(n.code,{children:"browser"}),", and ",(0,o.jsx)(n.code,{children:"cloud"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,o.jsx)(n.p,{children:"You can override the following configuration values from different modes. For example, you can use a specific\nURL in root-level and another URL in window-mode-level, as shown below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "url": "/"\n    "modes": {\n        "window": {\n            "url": "/#window-mode"\n        }\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"port-number",children:(0,o.jsx)(n.code,{children:"port: number"})}),"\n",(0,o.jsxs)(n.p,{children:["The port of your application. If the value is ",(0,o.jsx)(n.code,{children:"0"}),", Neutralinojs will use a random available port."]}),"\n",(0,o.jsx)(n.h3,{id:"enableserver-boolean",children:(0,o.jsx)(n.code,{children:"enableServer: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables or disables the background server (Disables static file servering feature and native API messaging).\nIf you load a remote URL to the webview, you can set this option to ",(0,o.jsx)(n.code,{children:"false"}),". Make sure to set this option to ",(0,o.jsx)(n.code,{children:"true"})," if you load resources from local sources. The default value is ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"enablenativeapi-boolean",children:(0,o.jsx)(n.code,{children:"enableNativeAPI: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables or disables the native API. If you want to use any native API functions, you can set this option to ",(0,o.jsx)(n.code,{children:"true"}),". The default value is ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"tokensecurity-string",children:(0,o.jsx)(n.code,{children:"tokenSecurity: string"})}),"\n",(0,o.jsx)(n.p,{children:"Neutralinojs uses a client-server communication pattern with a local WebSocket to handle native calls. This\nlocal server is protected with an auto-generated token. This option defines the security implementation for the\ntoken."}),"\n",(0,o.jsx)(n.p,{children:"Accepts the following values:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"one-time"})," ",(0,o.jsx)(n.strong,{children:"(Recommended)"})," : Server sends the access token only once, and the client persists it in the\n",(0,o.jsx)(n.code,{children:"sessionStorage"}),". If another client (Eg: browser) tries to access the app, ",(0,o.jsx)(n.code,{children:"NE_RT_INVTOKN"})," error message will be\nshown instead of the application. Using this option is recommended since it reduces security issues."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"none"})," : Server sends the access token always, so any new client can see the application."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default value becomes ",(0,o.jsx)(n.code,{children:"one-time"})," if this setting is not specified by the developer."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["If you are using native APIs that can access your computer's internals such as ",(0,o.jsx)(n.code,{children:"os"}),", ",(0,o.jsx)(n.code,{children:"filesystem"}),", modules,\nnever use ",(0,o.jsx)(n.code,{children:"none"})," option since any new client can use those APIs."]})}),"\n",(0,o.jsx)(n.h3,{id:"url-string",children:(0,o.jsx)(n.code,{children:"url: string"})}),"\n",(0,o.jsx)(n.p,{children:"The entry URL of the application. Neutralinojs will initially load this URL.\nThis property accepts both relative and absolute URLs. See following examples."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"url": "/"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The above config loads ",(0,o.jsx)(n.code,{children:"http://localhost:<port>/"})," URL initially (internally ",(0,o.jsx)(n.code,{children:"/index.html"})," is loaded).\nYou can use remote urls too."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"url": "http://example.com"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"documentroot-string",children:(0,o.jsx)(n.code,{children:"documentRoot: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Sets the document root for the static server. For example, if you need to use ",(0,o.jsx)(n.code,{children:"resources"})," directory as\nthe document root, you can use setup ",(0,o.jsx)(n.code,{children:"documentRoot"})," as follows."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "documentRoot": "/resources/",\n    "url": "/"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Make sure to configure ",(0,o.jsx)(n.code,{children:"url"})," properly with the document root. The following configuration is ",(0,o.jsx)(n.strong,{children:"wrong"}),", it\ninstructs the static server to fetch resources from ",(0,o.jsx)(n.code,{children:"./resources/resources"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "documentRoot": "/resources/",\n    "url": "/resources/"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"However, you can use a sub-directory in URL, as shown below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "documentRoot": "/",\n    "url": "/resources/"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"exportauthinfo-boolean",children:(0,o.jsx)(n.code,{children:"exportAuthInfo: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Exports authentication details to the ",(0,o.jsx)(n.code,{children:"${NL_PATH}/.tmp/auth_info.json"})," file with the following JSON structure."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "port": "<port>",\n    "accessToken": "<access_token>"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can use the above authentication details to connect with Neutralinojs from external processes by using\nWebSocket as an IPC mechanism."}),"\n",(0,o.jsx)(n.h3,{id:"enableextensions-boolean",children:(0,o.jsx)(n.code,{children:"enableExtensions: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables/disables extensions.\nLearn more about this option ",(0,o.jsx)(n.a,{href:"/docs/how-to/extensions-overview#enable-the-extensions-feature",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"extensions-object",children:(0,o.jsx)(n.code,{children:"extensions: object[]"})}),"\n",(0,o.jsxs)(n.p,{children:["An array of extension definitions.\nLearn more about this option ",(0,o.jsx)(n.a,{href:"/docs/how-to/extensions-overview#defining-the-extensions",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"nativeblocklist-string",children:(0,o.jsx)(n.code,{children:"nativeBlockList: string[]"})}),"\n",(0,o.jsxs)(n.p,{children:["An array of native methods needs to be blocked from the frontend of the application. The wildcard character ",(0,o.jsx)(n.code,{children:"*"})," is allowed\ninside entries."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "nativeBlockList": ["os.execCommand"],\n    "nativeBlockList": ["app.*"]\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"nativeallowlist-string",children:(0,o.jsx)(n.code,{children:"nativeAllowList: string[]"})}),"\n",(0,o.jsxs)(n.p,{children:["An array of native methods needs to be allowed from the frontend of the application. The wildcard character ",(0,o.jsx)(n.code,{children:"*"})," is allowed\ninside entries."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "nativeAllowList": ["os.getEnv"],\n    "nativeAllowList": ["storage.*"]\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"globalvariables-object",children:(0,o.jsx)(n.code,{children:"globalVariables: object"})}),"\n",(0,o.jsxs)(n.p,{children:["A key-value-based JavaScript object of custom ",(0,o.jsx)(n.a,{href:"/docs/api/global-variables#custom-global-variables",children:"global variables"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"loggingenabled-boolean",children:(0,o.jsx)(n.code,{children:"logging.enabled: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Enables or disables the logging feature."}),"\n",(0,o.jsx)(n.h3,{id:"loggingwritetologfile-boolean",children:(0,o.jsx)(n.code,{children:"logging.writeToLogFile: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables or disables log file. If this setting is ",(0,o.jsx)(n.code,{children:"false"}),", the framework won't write log to ",(0,o.jsx)(n.code,{children:"neutralinojs.log"}),",\nand it will write logs to standard streams."]}),"\n",(0,o.jsx)(n.h3,{id:"serverheaders-object",children:(0,o.jsx)(n.code,{children:"serverHeaders: object"})}),"\n",(0,o.jsx)(n.p,{children:"Custom headers for the static server and Websocket handshake process. For example, the following configuration\nsends a custom header with every outgoing HTTP response."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "serverHeaders": {\n        "Test-Header-Option": "Value"\n    }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"window-mode",children:"Window mode"}),"\n",(0,o.jsx)(n.p,{children:"The following configuration values are used when the application runs with the window mode."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowtitle-string",children:(0,o.jsx)(n.code,{children:"modes.window.title: string"})}),"\n",(0,o.jsx)(n.p,{children:"Title of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowwidth-number",children:(0,o.jsx)(n.code,{children:"modes.window.width: number"})}),"\n",(0,o.jsx)(n.p,{children:"Width of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowheight-number",children:(0,o.jsx)(n.code,{children:"modes.window.height: number"})}),"\n",(0,o.jsx)(n.p,{children:"Height of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowminwidth-number",children:(0,o.jsx)(n.code,{children:"modes.window.minWidth: number"})}),"\n",(0,o.jsx)(n.p,{children:"Minimum width of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowminheight-number",children:(0,o.jsx)(n.code,{children:"modes.window.minHeight: number"})}),"\n",(0,o.jsx)(n.p,{children:"Minimum height of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowmaxwidth-number",children:(0,o.jsx)(n.code,{children:"modes.window.maxWidth: number"})}),"\n",(0,o.jsx)(n.p,{children:"Maximum width of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowmaxheight-number",children:(0,o.jsx)(n.code,{children:"modes.window.maxHeight: number"})}),"\n",(0,o.jsx)(n.p,{children:"Maximum height of the native window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowx-number",children:(0,o.jsx)(n.code,{children:"modes.window.x: number"})}),"\n",(0,o.jsxs)(n.p,{children:["Left position (",(0,o.jsx)(n.code,{children:"x"}),") of the native window."]}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowy-number",children:(0,o.jsx)(n.code,{children:"modes.window.y: number"})}),"\n",(0,o.jsxs)(n.p,{children:["Right position (",(0,o.jsx)(n.code,{children:"y"}),") of the native window."]}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowcenter-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.center: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Centers the native app window initially."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowtrasparent-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.trasparent: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables the transparent native window mode for the application instance. If the transparency mode is activated,\nusers can see through the webview if the webpage background uses transparent background colors. Partial transparency\ncan be activated using the ",(0,o.jsx)(n.code,{children:"rgba()"})," CSS color function. You can use this feature to create semi-transparent\nwindows, windows with custom shadows, and custom-shaped window frames."]}),"\n",(0,o.jsxs)(n.p,{children:["The default value is ",(0,o.jsx)(n.code,{children:"false"})," for this option."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This feature is only available on GNU/Linux and Mac systems and will be implemented soon on Windows."})}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowfullscreen-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.fullScreen: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Activates the full-screen mode."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowicon-string",children:(0,o.jsx)(n.code,{children:"modes.window.icon: string"})}),"\n",(0,o.jsx)(n.p,{children:"Application icon's file name. You can directly point to an image file in the\nresources directory. We recommend you to choose a transparent PNG file."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowalwaysontop-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.alwaysOnTop: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Activates the top-most mode."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowenableinspector-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.enableInspector: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Automatically opens the developer tools window."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowborderless-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.borderless: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Activates the borderless mode."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowmaximize-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.maximize: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Launches the application maximized."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowresizable-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.resizable: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Make the window resizable or not. The default value is ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowhidden-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.hidden: boolean"})}),"\n",(0,o.jsx)(n.p,{children:"Make the window invisible. This setting can be used to develop background services."}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowexitprocessonclose-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.exitProcessOnClose: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["If this setting is ",(0,o.jsx)(n.code,{children:"true"}),", the app process will exit when the user clicks on the close button. Otherwise,\nthe framework will dispatch the ",(0,o.jsx)(n.code,{children:"windowClose"})," event."]}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowusesavedstate-boolean",children:(0,o.jsx)(n.code,{children:"modes.window.useSavedState: boolean"})}),"\n",(0,o.jsxs)(n.p,{children:["Save and load the primary window state (width, height, x, y, values and maximized status) automatically.\nThe default value is ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"modeswindowextenduseragentwith-string",children:(0,o.jsx)(n.code,{children:"modes.window.extendUserAgentWith: string"})}),"\n",(0,o.jsx)(n.p,{children:"Extends the default webview-specific user agent string with a custom suffix. If this value is not set,\nthe webview sets the default user agent from the platform-specific rendering engine (i.e., WebKit on GNU/Linux)."}),"\n",(0,o.jsx)(n.h2,{id:"chrome-mode",children:"Chrome mode"}),"\n",(0,o.jsx)(n.p,{children:"The following configuration values are used when the application starts with the chrome mode."}),"\n",(0,o.jsx)(n.h3,{id:"modeschromewidth-number",children:(0,o.jsx)(n.code,{children:"modes.chrome.width: number"})}),"\n",(0,o.jsx)(n.p,{children:"Width of the chrome window."}),"\n",(0,o.jsx)(n.h3,{id:"modeschromeheight-number",children:(0,o.jsx)(n.code,{children:"modes.chrome.height: number"})}),"\n",(0,o.jsx)(n.p,{children:"Height of the chrome window."}),"\n",(0,o.jsx)(n.h3,{id:"modeschromeargs-string",children:(0,o.jsx)(n.code,{children:"modes.chrome.args: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Additional command-line arguments for the Chrome process. Read more about chrome mode\nfrom ",(0,o.jsx)(n.a,{href:"/docs/configuration/modes#chrome",children:"here"})]}),"\n",(0,o.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,o.jsx)(n.p,{children:"The following configuration values are used for the neu CLI."}),"\n",(0,o.jsx)(n.h3,{id:"clibinaryname-string",children:(0,o.jsx)(n.code,{children:"cli.binaryName: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Binary file name of your application. If it is ",(0,o.jsx)(n.code,{children:"myapp"}),", all binaries will use\n",(0,o.jsx)(n.code,{children:"myapp-<platform>_<arch>"})," format."]}),"\n",(0,o.jsx)(n.h3,{id:"cliresourcespath-string",children:(0,o.jsx)(n.code,{children:"cli.resourcesPath: string"})}),"\n",(0,o.jsx)(n.p,{children:"Path of your application resources."}),"\n",(0,o.jsx)(n.h3,{id:"cliresourcesexclude-string",children:(0,o.jsx)(n.code,{children:"cli.resourcesExclude: string"})}),"\n",(0,o.jsx)(n.p,{children:"Regex pattern to exclude files from final app bundle. For example, the following configuration will exclude all the TypeScript source files from the final build:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "resourcesExclude" : ".*\\\\.ts$|.*\\\\.tsx$"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"cliextensionspath-string",children:(0,o.jsx)(n.code,{children:"cli.extensionsPath: string"})}),"\n",(0,o.jsx)(n.p,{children:"Path of your application extensions."}),"\n",(0,o.jsx)(n.h3,{id:"cliextensionsexclude-string",children:(0,o.jsx)(n.code,{children:"cli.extensionsExclude: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Regex pattern to exclude files from the extensions directory of the final app package. For example, the following configuration will exclude ",(0,o.jsx)(n.code,{children:".log"})," and ",(0,o.jsx)(n.code,{children:".info"})," files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "extensionsExclude" : ".*\\\\.log$|.*\\\\.info$"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"cliclientlibrary-string",children:(0,o.jsx)(n.code,{children:"cli.clientLibrary: string"})}),"\n",(0,o.jsx)(n.p,{children:"Filename of the Neutralinojs JavaScript library."}),"\n",(0,o.jsx)(n.h3,{id:"clibinaryversion-string",children:(0,o.jsx)(n.code,{children:"cli.binaryVersion: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Neutralinojs server version. Get nightly builds by using the ",(0,o.jsx)(n.code,{children:"nightly"})," tag."]}),"\n",(0,o.jsx)(n.h3,{id:"cliclientversion-string",children:(0,o.jsx)(n.code,{children:"cli.clientVersion: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Neutralinojs client version.  Get nightly builds by using the ",(0,o.jsx)(n.code,{children:"nightly"})," tag."]}),"\n",(0,o.jsx)(n.h3,{id:"cliautoreloadexclude-string",children:(0,o.jsx)(n.code,{children:"cli.autoReloadExclude: string"})}),"\n",(0,o.jsxs)(n.p,{children:["A JavaScript regular expression to exclude files from the auto-reload file watcher. For example, the following configuration will disable auto-reloading for SASS stylesheets (",(0,o.jsx)(n.code,{children:".scss"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "autoReloadExclude": ".*\\\\.scss$"\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"|"})," character to set multiple regular expressions, as shown below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "autoReloadExclude": ".*\\\\.scss$|.*\\\\.less$"\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"clifrontendlibrary-object",children:(0,o.jsx)(n.code,{children:"cli.frontendLibrary: object"})}),"\n",(0,o.jsxs)(n.p,{children:["Enables frontend development tools (HMR, etc) for the ",(0,o.jsx)(n.code,{children:"neu run --frontend-lib-dev"})," command. Learn more about frontend\nframework integration from ",(0,o.jsx)(n.a,{href:"/docs/getting-started/using-frontend-libraries",children:"here"})]}),"\n",(0,o.jsx)(n.h3,{id:"clidistributionpath-string",children:(0,o.jsx)(n.code,{children:"cli.distributionPath: string"})}),"\n",(0,o.jsxs)(n.p,{children:["Sets the build path for neu CLI. For example, if you need to get the built binaries in ",(0,o.jsx)(n.code,{children:"build"})," folder instead of ",(0,o.jsx)(n.code,{children:"dist"}),", you can set the ",(0,o.jsx)(n.code,{children:"distributionPath"})," as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "distributionPath": "/build",\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The default value for ",(0,o.jsx)(n.code,{children:"distributionPath"})," is ",(0,o.jsx)(n.code,{children:"/dist"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var o=i(6540);const s={},d=o.createContext(s);function l(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);