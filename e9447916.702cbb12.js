(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{235:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(250)),o={title:"128T 4.0 Release Notes",sidebar_label:"4.0"},c={id:"release_notes_128t_4.0",title:"128T 4.0 Release Notes",description:"Release 4.0.1",source:"@site/docs/release_notes_128t_4.0.md",permalink:"/docs/release_notes_128t_4.0",lastUpdatedAt:1586829318,sidebar_label:"4.0",sidebar:"docs",previous:{title:"128T 4.1 Release Notes",permalink:"/docs/release_notes_128t_4.1"},next:{title:"128T Installer 2.6 Release Notes",permalink:"/docs/release_notes_128t_installer_2.6"}},l=[{value:"Release 4.0.1",id:"release-401",children:[{value:"Issues Fixed",id:"issues-fixed",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-401"},"Release 4.0.1"),Object(i.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-24556")," Analytics log file now follows the same rotation scheme as the other log files on the system.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-24873")," HTTP CONNECT method dropped when adaptive-encryption is enabled.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25203")," ZScaler plugin could cause a system fault when configured for HA.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25205")," PPPoE configured interfaces may cause the system to take longer than 5 minutes to start.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25235")," Race condition between monitoring scripts managing T1 interfaces could cause the link to be in the down state.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25241")," When logs are at DEBUG level, extensive interface flapping can cause a system fault.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25242")," Race condition with applying kernel routes could produce a FIB with the incorrect route")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25283")," Receiving a packet without metadata for an established session can cause a system fault, which can happen during upgrades or path flaps.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25292"),' For 128T network-interfaces with link  mtu smaller than configured  value, Path MTU discovery results in "Path MTU: unavailable"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25327")," shared-phys-address incorrectly checks against entire authority instead of the router.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25333")," Race condition in security key distribution can cause encryption failures.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25346")," Top sessions table does not update time correctly when graph is clicked.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25352")," Peering connection statistics displaying no data on topology page.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25353")," HA nodes of a Router that do not have their time synchronized will be unable to synchronize time series data.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25356")," Device and network Interface graphs are rendering as having no data when data is traversing links.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25425")," DHCP relay service defined as /32 causes traffic to be black-holed.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25454")," Forwarding interfaces are not able to come up when deployed in AWS.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25527")," Kernel route with next hops cannot resolve BGP route when there is also a kernel blackhole route.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25535")," Malformed packets can lead to a system fault due to misclassification.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25575")," 128T peers are unable to establish a connection when deployed in AWS.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25579")," DHCP HA interface unable to renew lease on newly active link when link down occurs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25739")," Reverse path traffic could be dropped for BGP over SVR traffic when going over an internode link.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25748")," Asymmetric routing may occur if static/kernel routes are configured as the appropriate cost is not being applied to those routes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"I95-25813")," When utilizing the Conductor as a proxy for upgrades, a Router upgrade to 4.0.0 could fail if no connection to the Internet is available."))))}s.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);