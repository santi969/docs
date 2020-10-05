(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.a.createElement(u,o(o({ref:t},b),{},{components:n})):i.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<r;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(192)),c={title:"Initializer Command Line Reference",sidebar_label:"Initializer Command Line Reference"},o={unversionedId:"initializer_cli_reference",id:"initializer_cli_reference",isDocsHomePage:!1,title:"Initializer Command Line Reference",description:"This is a reference document for the 128T Initializer command line interface.",source:"@site/docs/initializer_cli_reference.md",slug:"/initializer_cli_reference",permalink:"/docs/initializer_cli_reference",version:"current",lastUpdatedAt:1601308180,sidebar_label:"Initializer Command Line Reference",sidebar:"docs",previous:{title:"Installer Preferences File Reference",permalink:"/docs/installer_preferences"},next:{title:"Initializer Preferences File Reference",permalink:"/docs/initializer_preferences"}},l=[{value:"Running the Initializer",id:"running-the-initializer",children:[{value:"Interactive Mode",id:"interactive-mode",children:[]},{value:"Automated Mode",id:"automated-mode",children:[]}]},{value:"Options",id:"options",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This is a reference document for the 128T Initializer command line interface.\nFor a guide to basic usage, see the initialization section of the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intro_installation_installer/#initialize-the-128t-node"}),"Manual Installation Guide"),"."),Object(r.b)("h2",{id:"running-the-initializer"},"Running the Initializer"),Object(r.b)("p",null,"To start the Initializer, run the ",Object(r.b)("inlineCode",{parentName:"p"},"initialize128t")," command."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"initialize128t")," must always be run as the root user, or with ",Object(r.b)("inlineCode",{parentName:"p"},"sudo initialize128t"),".\nThe Initializer will detect non-root usage and exit with this message:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"You must run the Initializer as root.\n")))),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"-h"),"/",Object(r.b)("inlineCode",{parentName:"p"},"--help")," flag to display help information for the ",Object(r.b)("inlineCode",{parentName:"p"},"initialize128t"),"\ncommand line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"initialize128t --help\n")),Object(r.b)("p",null,"After a successful run, the ",Object(r.b)("inlineCode",{parentName:"p"},"initialize128t")," process will exit with a return code\nof 0. If any error was encountered during the operation, the return code will\nbe non-zero."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"128T must not be running during initialization. The Initializer will\ndetect when 128T is running and exit with this message:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"128T is running; cannot launch Initializer\n")),Object(r.b)("p",{parentName:"div"},"To stop 128T, follow the steps shown in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/intro_installation#stopping-the-128t-routing-software"}),"Installation Guide"),"."))),Object(r.b)("h3",{id:"interactive-mode"},"Interactive Mode"),Object(r.b)("p",null,"Without any arguments, the Initializer will open a wizard interface to initialize\n128T."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"initialize128t\n")),Object(r.b)("p",null,"Follow the on-screen prompts to complete the initialization process. Step-by-step\ninstructions for the Initializer wizard can be found in the\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"intro_installation_installer#initialize-the-128t-node"}),"Installation Guide"),"."),Object(r.b)("h3",{id:"automated-mode"},"Automated Mode"),Object(r.b)("p",null,"For more advanced use cases, preferences may be specified on the command line\nto perform initialization in an automated fashion, using the ",Object(r.b)("inlineCode",{parentName:"p"},"-p"),"/",Object(r.b)("inlineCode",{parentName:"p"},"--preferences"),"\noption."),Object(r.b)("p",null,"In this mode, no wizard will be displayed, but informational messages will be\nprinted to the console as the Initializer is running."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ cat /tmp/preferences.json\n{\n  "node-name": "MyNode",\n  "node-ip": "127.0.0.1",\n  "node-role": "combo",\n  "router-name": "MyRouter"\n}\n\n$ initialize128t --preferences /tmp/preferences.json\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Did you know?")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can specify a preferences file with ",Object(r.b)("inlineCode",{parentName:"p"},"-p"),", but you can ",Object(r.b)("em",{parentName:"p"},"also")," pass the\npreferences directly on the command line. For example:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'initialize128t -p \\\n    \'{"node-name": "MyNode", "node-role": "combo", "router-name": "MyRouter"}\'\n')))),Object(r.b)("p",null,"The specified preferences ",Object(r.b)("strong",{parentName:"p"},"must")," be valid JSON (trailing commas are not allowed),\nand they ",Object(r.b)("strong",{parentName:"p"},"must")," conform to the Initializer preferences file schema.\nSee the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/initializer_preferences"}),"full schema documentation")," for details."),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-d"),", ",Object(r.b)("inlineCode",{parentName:"td"},"--dry-run")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Skip all steps that modify the system, e.g. downloading software or rebooting the system. This can be useful to validate a preference file without executing the operation specified in it.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"-l LOG_LEVEL"),", ",Object(r.b)("inlineCode",{parentName:"td"},"--log-level LOG_LEVEL")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Change the log level the Installer runs with. Must be one of ",Object(r.b)("inlineCode",{parentName:"td"},"ERROR"),", ",Object(r.b)("inlineCode",{parentName:"td"},"INFO"),", ",Object(r.b)("inlineCode",{parentName:"td"},"WARNING"),", ",Object(r.b)("inlineCode",{parentName:"td"},"DEBUG"),".")))))}s.isMDXComponent=!0}}]);