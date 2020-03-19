(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(9),a=(n(0),n(172)),i={title:"CPU Spikes",sidebar_label:"CPU Spikes"},c={id:"ts_cpu_spikes",title:"CPU Spikes",description:"This guide is to be used when investigating the root cause for a 128T router that reports alarms of CPU spikes.",source:"@site/docs/ts_cpu_spikes.md",permalink:"/docs/ts_cpu_spikes",editUrl:"https://github.com/128technology/docs/tree/master/docs/ts_cpu_spikes.md",lastUpdatedAt:1584634716,sidebar_label:"CPU Spikes",sidebar:"docs",previous:{title:"Automated Provisioner: Salt Minion",permalink:"/docs/ts_ap_salt_minion"},next:{title:"Connecting to 128T Routers from Conductor",permalink:"/docs/ts_connecting_to_routers"}},s=[{value:"Expected Behavior",id:"expected-behavior",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide is to be used when investigating the root cause for a 128T router that reports alarms of CPU spikes."),Object(a.b)("h2",{id:"expected-behavior"},"Expected Behavior"),Object(a.b)("p",null,"A CPU alarm is triggered when the average CPU of all of the cores on a system exceeds 85% for thirty seconds. This will not include any CPU cores that are pinned for packet forwarding. The alarm is cleared when the average CPU is below 85% for five (5) seconds."),Object(a.b)("p",null,"You can determine whether a system has pinned CPU cores by checking the configuration.  The CPU allocation is defined within the ",Object(a.b)("inlineCode",{parentName:"p"},"node")," configuration of a router."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@gouda.novigrad# show config running authority router novigrad node gouda \n\nconfig\n\n    authority\n\n        router  novigrad\n            name  novigrad\n\n            node  gouda\n                name                        gouda\n                enabled                     true\n                forwarding-core-mode        automatic\n")),Object(a.b)("p",null,"In particular, the ",Object(a.b)("inlineCode",{parentName:"p"},"forwarding-core-count")," indicates how many cores are dedicated for fast packet forwarding."),Object(a.b)("div",{className:"admonition admonition-note"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The default configuration has ",Object(a.b)("inlineCode",{parentName:"p"},"forwarding-core-mode")," set to ",Object(a.b)("inlineCode",{parentName:"p"},"automatic")," with no ",Object(a.b)("inlineCode",{parentName:"p"},"forwarding-core-count")," defined.  The 128T platform will attempt to right-size the configuration based on system's available resources. For some deployments, it may be desirable to override the defaults to optimize the platform for your environment."))),Object(a.b)("p",null,"When the forwarding-count-mode is set to automatic, you can see how the system has allocated resources by issuing the command ",Object(a.b)("inlineCode",{parentName:"p"},"show platform cpu"),". "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"admin@gouda.novigrad# show platform cpu \nThu 2020-03-19 15:23:24 UTC\n\n===================================================================\n gouda\n===================================================================\n ---------------\n CPU Information\n ---------------\n Type:                     Intel(R) Atom(TM) CPU  C2558  @ 2.40GHz\n Speed:                    2.400096893310547 GHz\n Hyper-Threading:          no\n Cores:                    4\n Forwarding Cores:         1\n Isolated Cores:           1\n Power-Saver:              disabled\n\nCompleted in 2.75 seconds\n")),Object(a.b)("p",null,"With an understanding of how the system is configured, we can now get to the process of examining the history of CPU usage over time. The 128T stores time series data for a number of KPIs that are relevant for system and service health and operation.  Viewing time series data is best accomplished within the GUI."),Object(a.b)("p",null,"Navigate to the ",Object(a.b)("strong",{parentName:"p"},"Custom Reports")," located on the dashboard.  From there create two reports: one for total utilization per CPU and another for utilization per 128T process, as indicated by the images below."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ts_cpu_spikes_per_cpu_chart.png",alt:"ts_cpu_spikes_per_cpu_chart"}))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/ts_cpu_spikes_per_process_chart.png",alt:"ts_cpu_spikes_per_process_chart"}))),Object(a.b)("p",null,"Alarms are optionally overlaid on top of all charts generated by the 128T.  This is very helpful in correlating system events to system behavior.  The time window of custom reports can be extended from 5 minutes to 6 months.  If you see anomalies in either the CPU and correspondingly a particular application, this may indicate the system is not performing properly."))}d.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);