(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(8),o=(n(0),n(120)),l={title:"Neutralino.os"},r={unversionedId:"api/os",id:"api/os",isDocsHomePage:!1,title:"Neutralino.os",description:"Neutralino.os namespace contains methods related to the user's operating system.",source:"@site/docs/api/os.md",slug:"/api/os",permalink:"/docs/api/os",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/os.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.init",permalink:"/docs/api/init"},next:{title:"Neutralino.storage",permalink:"/docs/api/storage"}},s=[{value:"os.execCommand(command, options)",id:"osexeccommandcommand-options",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Options",id:"options",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited",children:[]}]},{value:"os.spawnProcess(command, cwd)",id:"osspawnprocesscommand-cwd",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited-1",children:[]}]},{value:"os.updateSpawnedProcess(id, action, data)",id:"osupdatespawnedprocessid-action-data",children:[{value:"Parameters",id:"parameters-2",children:[]}]},{value:"os.getSpawnedProcesses()",id:"osgetspawnedprocesses",children:[{value:"Return Object (awaited):",id:"return-object-awaited-2",children:[]}]},{value:"os.getEnv(key)",id:"osgetenvkey",children:[{value:"Parameters",id:"parameters-3",children:[]},{value:"Return String (awaited):",id:"return-string-awaited",children:[]}]},{value:"os.getEnvs()",id:"osgetenvs",children:[{value:"Return Object (awaited):",id:"return-object-awaited-3",children:[]}]},{value:"os.showOpenDialog(title, options)",id:"osshowopendialogtitle-options",children:[{value:"Parameters",id:"parameters-4",children:[]},{value:"Options",id:"options-1",children:[]},{value:"Return Object (awaited):",id:"return-object-awaited-4",children:[]}]},{value:"os.showSaveDialog(title, options)",id:"osshowsavedialogtitle-options",children:[{value:"Parameters",id:"parameters-5",children:[]},{value:"Options",id:"options-2",children:[]},{value:"Return String (awaited):",id:"return-string-awaited-1",children:[]}]},{value:"os.showFolderDialog(title)",id:"osshowfolderdialogtitle",children:[{value:"Parameters",id:"parameters-6",children:[]},{value:"Options",id:"options-3",children:[]},{value:"Return String (awaited):",id:"return-string-awaited-2",children:[]}]},{value:"os.showNotification(title, content, icon)",id:"osshownotificationtitle-content-icon",children:[{value:"Parameters",id:"parameters-7",children:[]}]},{value:"os.showMessageBox(title, content, choice, icon)",id:"osshowmessageboxtitle-content-choice-icon",children:[{value:"Parameters",id:"parameters-8",children:[]},{value:"Return String (awaited):",id:"return-string-awaited-3",children:[]}]},{value:"os.setTray(options)",id:"ossettrayoptions",children:[{value:"Options",id:"options-4",children:[]}]},{value:"os.getPath(name)",id:"osgetpathname",children:[{value:"Parameters",id:"parameters-9",children:[]},{value:"Return String (awaited):",id:"return-string-awaited-4",children:[]}]},{value:"os.open(url)",id:"osopenurl",children:[{value:"Parameters",id:"parameters-10",children:[]}]}],c={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Neutralino.os")," namespace contains methods related to the user's operating system."),Object(o.b)("h2",{id:"osexeccommandcommand-options"},"os.execCommand(command, options)"),Object(o.b)("p",null,"Executes a command and returns the output."),Object(o.b)("h3",{id:"parameters"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"command")," String: The command that is to be executed.")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"background")," Boolean: Executes the command in background and resolve the Promise immediately\nif this is set to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),". This option makes the process detached from the API function call, so if you need to\nconnect with the newly created process later, consider using ",Object(o.b)("inlineCode",{parentName:"li"},"os.spawnProcess"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stdIn")," String: Standard input as a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cwd")," String: Current working directory.")),Object(o.b)("h3",{id:"return-object-awaited"},"Return Object (awaited):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pid")," Number: Process identifier."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stdOut")," String: Standard output."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stdErr")," String: Standard error."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"exitCode")," Number: Exit code of the process.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let info = await Neutralino.os.execCommand('python --version');\nconsole.log(`Your Python version: ${info.stdOut}`);\n\nawait Neutralino.os.execCommand('npm start', { background: true });\n")),Object(o.b)("h2",{id:"osspawnprocesscommand-cwd"},"os.spawnProcess(command, cwd)"),Object(o.b)("p",null,"Spawns a process based on a command in background and let developers control it."),Object(o.b)("h3",{id:"parameters-1"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"command")," String: The command that is to be executed in a new process."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cwd")," String (optional): Current working directory.")),Object(o.b)("h3",{id:"return-object-awaited-1"},"Return Object (awaited):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," Number: A Neutralino-scoped process identifier. This value is used for controlling the\nprocess via the native API."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pid")," Number: Process identifier from the operating system.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let pingProc = await Neutralino.os.spawnProcess('ping neutralino.js.org');\n\nNeutralino.events.on('spawnedProcess', (evt) => {\n    if(pingProc.id == evt.detail.id) {\n        switch(evt.detail.action) {\n            case 'stdOut':\n                console.log(evt.detail.data);\n                break;\n            case 'stdErr':\n                console.error(evt.detail.data);\n                break;\n            case 'exit':\n                console.log(`Ping process terminated with exit code: ${evt.detail.data}`);\n                break;\n        }\n    }\n});\n")),Object(o.b)("h2",{id:"osupdatespawnedprocessid-action-data"},"os.updateSpawnedProcess(id, action, data)"),Object(o.b)("p",null,"Updates a spawned process based on a provided action and data. Throws ",Object(o.b)("inlineCode",{parentName:"p"},"NE_OS_UNLTOUP")," if the process cannot be\nupdated."),Object(o.b)("h3",{id:"parameters-2"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," Number: Neutralino-scoped process identifier."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"action")," String: An action to take. Accepts only the following values:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stdIn"),": Sends data to the process via the standard input stream."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"stdInEnd"),": Closes the standard input stream file descriptor."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"exit"),": Terminates the process."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")," Object (optional): Additional data for the ",Object(o.b)("inlineCode",{parentName:"li"},"action"),". Send stardard input string if the ",Object(o.b)("inlineCode",{parentName:"li"},"action"),"\nis ",Object(o.b)("inlineCode",{parentName:"li"},"stdIn"),".")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let nodeProc = await Neutralino.os.spawnProcess('node');\n\nNeutralino.events.on('spawnedProcess', (evt) => {\n    if(nodeProc.id == evt.detail.id) {\n        switch(evt.detail.action) {\n            case 'stdOut':\n                console.log(evt.detail.data); // 10\n                break;\n            case 'stdErr':\n                console.error(evt.detail.data);\n                break;\n            case 'exit':\n                console.log(`Node.js process terminated with exit code: ${evt.detail.data}`);\n                break;\n        }\n    }\n});\n\nawait Neutralino.os.updateSpawnedProcess(nodeProc.id, 'stdIn', 'console.log(5 + 5);');\nawait Neutralino.os.updateSpawnedProcess(nodeProc.id, 'stdInEnd');\n")),Object(o.b)("h2",{id:"osgetspawnedprocesses"},"os.getSpawnedProcesses()"),Object(o.b)("p",null,"Returns all spawned processes."),Object(o.b)("h3",{id:"return-object-awaited-2"},"Return Object (awaited):"),Object(o.b)("p",null,"An array of ",Object(o.b)("inlineCode",{parentName:"p"},"SpawnedProcess")," objects."),Object(o.b)("h4",{id:"spawnedprocess"},"SpawnedProcess"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," Number: A Neutralino-scoped process identifier.."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pid")," Number: Process identifier from the operating system.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.os.spawnProcess('ping neutralino.js.org');\nawait Neutralino.os.spawnProcess('ping codezri.org');\n\nlet processes = await Neutralino.os.getSpawnedProcesses();\nconsole.log(processes);\n")),Object(o.b)("h2",{id:"osgetenvkey"},"os.getEnv(key)"),Object(o.b)("p",null,"Provides the value of a given environment variable."),Object(o.b)("h3",{id:"parameters-3"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," String: The name of the environment variable.")),Object(o.b)("h3",{id:"return-string-awaited"},"Return String (awaited):"),Object(o.b)("p",null,"Value of the given environment variable. Returns an empty string if the environment variable is not defined."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let value = await Neutralino.os.getEnv('USER');\nconsole.log(`USER = ${value}`);\n")),Object(o.b)("h2",{id:"osgetenvs"},"os.getEnvs()"),Object(o.b)("p",null,"Returns all environment variables and their values."),Object(o.b)("h3",{id:"return-object-awaited-3"},"Return Object (awaited):"),Object(o.b)("p",null,"Environment variables details in key-value pairs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let envs = await Neutralino.os.getEnvs();\nconsole.log(envs);\n")),Object(o.b)("h2",{id:"osshowopendialogtitle-options"},"os.showOpenDialog(title, options)"),Object(o.b)("p",null,"Shows the file open dialog. You can use this function to obtain paths of existing files."),Object(o.b)("h3",{id:"parameters-4"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String (optional): Title of the dialog.")),Object(o.b)("h3",{id:"options-1"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters")," Filter[] (optional): An array of Filter objects to filter the files list."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"multiSelections")," (optional): Enables multi selections."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultPath")," String (optional): Initial path/filename displayed by the dialog.")),Object(o.b)("h4",{id:"filter"},"Filter"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," String: Filter name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"extensions")," String: Array of file extensions. Eg: ",Object(o.b)("inlineCode",{parentName:"li"},"['jpg', 'png']"))),Object(o.b)("h3",{id:"return-object-awaited-4"},"Return Object (awaited):"),Object(o.b)("p",null,"An array of selected entries."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let entries = await Neutralino.os.showOpenDialog('Open a diagram', {\n  defaultPath: '/home/my/directory/',\n  filters: [\n    {name: 'Images', extensions: ['jpg', 'png']},\n    {name: 'All files', extensions: ['*']}\n  ]\n});\nconsole.log('You have selected:', entries);\n")),Object(o.b)("h2",{id:"osshowsavedialogtitle-options"},"os.showSaveDialog(title, options)"),Object(o.b)("p",null,"Shows the file save dialog. You can use this function to obtain a path to create a new file."),Object(o.b)("h3",{id:"parameters-5"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String (optional): Title of the dialog.")),Object(o.b)("h3",{id:"options-2"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"filters")," Filter[] (optional): An array of Filter objects to filter the files list."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forceOverwrite")," Boolean (optional): Skips file overwrite warning message."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultPath")," String (optional): Initial path/filename displayed by the dialog.")),Object(o.b)("h4",{id:"filter-1"},"Filter"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," String: Filter name."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"extensions")," String[]: Array of file extensions. Eg: ",Object(o.b)("inlineCode",{parentName:"li"},"['jpg', 'png']"))),Object(o.b)("h3",{id:"return-string-awaited-1"},"Return String (awaited):"),Object(o.b)("p",null,"Selected filename."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let entry = await Neutralino.os.showSaveDialog('Save to file', {\n  defaultPath: 'untitled.jpg',\n  filters: [\n    {name: 'Images', extensions: ['jpg', 'png']},\n    {name: 'All files', extensions: ['*']}\n  ]\n});\nconsole.log('You have selected:', entry);\n")),Object(o.b)("h2",{id:"osshowfolderdialogtitle"},"os.showFolderDialog(title)"),Object(o.b)("p",null,"Shows the folder open dialog."),Object(o.b)("h3",{id:"parameters-6"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String (optional): Title of the dialog.")),Object(o.b)("h3",{id:"options-3"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultPath")," String (optional): Initial path displayed by the dialog.")),Object(o.b)("h3",{id:"return-string-awaited-2"},"Return String (awaited):"),Object(o.b)("p",null,"Selected folder."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let entry = await Neutralino.os.showFolderDialog('Select installation directory', {\n  defaultPath: '/home/my/directory/'\n});\nconsole.log('You have selected:', entry);\n")),Object(o.b)("h2",{id:"osshownotificationtitle-content-icon"},"os.showNotification(title, content, icon)"),Object(o.b)("p",null,"Displays a notification message."),Object(o.b)("h3",{id:"parameters-7"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String: Notification title."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content")," String: Content of the notification."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"icon")," String (optional): Icon name. Accpeted values are: ",Object(o.b)("inlineCode",{parentName:"li"},"INFO"),", ",Object(o.b)("inlineCode",{parentName:"li"},"WARNING"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ERROR"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"QUESTION"),". The default value is\n",Object(o.b)("inlineCode",{parentName:"li"},"INFO"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.os.showNotification('Hello world', 'It works! Have a nice day');\n\nawait Neutralino.os.showNotification('Oops :/', 'Something went wrong', 'ERROR');\n")),Object(o.b)("h2",{id:"osshowmessageboxtitle-content-choice-icon"},"os.showMessageBox(title, content, choice, icon)"),Object(o.b)("p",null,"Displays a message box."),Object(o.b)("h3",{id:"parameters-8"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String: Title of the message box."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content")," String: Content of the message box."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"choice")," String (optional): Message box buttons. Accpeted values are: ",Object(o.b)("inlineCode",{parentName:"li"},"OK"),", ",Object(o.b)("inlineCode",{parentName:"li"},"OK_CANCEL"),", ",Object(o.b)("inlineCode",{parentName:"li"},"YES_NO"),", ",Object(o.b)("inlineCode",{parentName:"li"},"YES_NO_CANCEL"),", ",Object(o.b)("inlineCode",{parentName:"li"},"RETRY_CANCEL"),",\nand ",Object(o.b)("inlineCode",{parentName:"li"},"ABORT_RETRY_IGNORE"),". The default value is ",Object(o.b)("inlineCode",{parentName:"li"},"OK"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"icon")," String (optional): Icon name. Accpeted values are: ",Object(o.b)("inlineCode",{parentName:"li"},"INFO"),", ",Object(o.b)("inlineCode",{parentName:"li"},"WARNING"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ERROR"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"QUESTION"),". The default value is ",Object(o.b)("inlineCode",{parentName:"li"},"INFO"),".")),Object(o.b)("h3",{id:"return-string-awaited-3"},"Return String (awaited):"),Object(o.b)("p",null,"User's ",Object(o.b)("inlineCode",{parentName:"p"},"choice"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.os.showMessageBox('Hello', 'Welcome');\n\nlet button = await Neutralino.os\n            .showMessageBox('Confirm',\n                            'Are you sure you want to quit?',\n                            'YES_NO', 'QUESTION');\nif(button == 'YES') {\n    Neutralino.app.exit();\n}\n")),Object(o.b)("h2",{id:"ossettrayoptions"},"os.setTray(options)"),Object(o.b)("p",null,"Creates/updates the tray icon and menu."),Object(o.b)("h3",{id:"options-4"},"Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"icon")," String: Tray icon path. Eg: ",Object(o.b)("inlineCode",{parentName:"li"},"/resources/icons/trayIcon.png"),". A\n",Object(o.b)("inlineCode",{parentName:"li"},"20x20"),"-sized PNG image file works fine on all supported operating systems."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"menuItems")," TrayMenuItem[]: An array of ",Object(o.b)("inlineCode",{parentName:"li"},"TrayMenuItem")," objects.")),Object(o.b)("h4",{id:"traymenuitem"},"TrayMenuItem"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"id")," String (optional): A unique identifier for each menu item."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"text")," String: Label of the menu item. This field is a mandatory field. Use ",Object(o.b)("inlineCode",{parentName:"li"},"-")," (hyphen) character for a menu separator."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isDisabled")," Boolean (optional): A boolean flag to disable/enable a specific menu item."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isChecked")," Boolean (optional): A boolean flag to mark a specific menu item as selected.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'let tray = {\n  icon: \'/resources/icons/trayIcon.png\',\n  menuItems: [\n    {id: "about", text: "About"},\n    {text: "-"},\n    {id: "quit", text: "Quit"}\n  ]\n};\n\nawait Neutralino.os.setTray(tray);\n')),Object(o.b)("h2",{id:"osgetpathname"},"os.getPath(name)"),Object(o.b)("p",null,"Returns known platform-specific folders such as Downloads, Music, Videos, etc."),Object(o.b)("h3",{id:"parameters-9"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," String: Name of the folder. Accepted values are: ",Object(o.b)("inlineCode",{parentName:"li"},"config"),", ",Object(o.b)("inlineCode",{parentName:"li"},"data"),", ",Object(o.b)("inlineCode",{parentName:"li"},"cache"),", ",Object(o.b)("inlineCode",{parentName:"li"},"documents"),", ",Object(o.b)("inlineCode",{parentName:"li"},"pictures"),", ",Object(o.b)("inlineCode",{parentName:"li"},"music"),", ",Object(o.b)("inlineCode",{parentName:"li"},"video"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"downloads"),", ",Object(o.b)("inlineCode",{parentName:"li"},"savedGames1"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"savedGames2"),". Throws ",Object(o.b)("inlineCode",{parentName:"li"},"NE_OS_INVKNPT")," for invalid folder names.")),Object(o.b)("h3",{id:"return-string-awaited-4"},"Return String (awaited):"),Object(o.b)("p",null,"Path."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"let downloadsPath = await Neutralino.os.getPath('downloads');\nconsole.log(`Downloads folder: ${downloadsPath}`);\n")),Object(o.b)("h2",{id:"osopenurl"},"os.open(url)"),Object(o.b)("p",null,"Opens a URL with the default web browser."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If your application is running in the default web browser, this method will open a new tab."))),Object(o.b)("h3",{id:"parameters-10"},"Parameters"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," String: URL to be opened.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Neutralino.os.open('https://neutralino.js.org');\n")))}b.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?i.a.createElement(m,r(r({ref:t},c),{},{components:n})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);