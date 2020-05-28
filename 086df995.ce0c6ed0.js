(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(2),a=r(9),o=(r(0),r(241)),l={title:"128T Installer 2.1 Release Notes",sidebar_label:2.1},i={id:"release_notes_128t_installer_2.1",title:"128T Installer 2.1 Release Notes",description:"Release 2.1.0",source:"@site/docs/release_notes_128t_installer_2.1.md",permalink:"/docs/release_notes_128t_installer_2.1",lastUpdatedAt:1586828518,sidebar_label:2.1,sidebar:"docs",previous:{title:"128T Installer 2.2 Release Notes",permalink:"/docs/release_notes_128t_installer_2.2"},next:{title:"128T Monitoring Agent 2.1 Release Notes",permalink:"/docs/release_notes_monitoring_agent_2.1"}},s=[{value:"Release 2.1.0",id:"release-210",children:[{value:"Issues Fixed",id:"issues-fixed",children:[]},{value:"Caveats",id:"caveats",children:[]}]}],p={rightToc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"release-210"},"Release 2.1.0"),Object(o.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-106, IN-111")," - Installer fails due to presense of .repodata "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-112")," - 128T not started when installer does not complete but no changes were made on the system"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IN-130")," - New installation or upgrade may result in a failed installation or upgrade ")),Object(o.b)("h3",{id:"caveats"},"Caveats"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IN-126")," - Installation does not fully complete but returns Success\n",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Symptom:"))," When performing an upgrade, the installer will complete however not all packages will be updated and the following Error can be seen in the log:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Curl error (6): Couldn't resolve host name for https://mirrors.128technology.com/reposnaps/Mirrors/11_01_2018/CentOS/7.5.1804/updates/x86_64/mirror-list.html\n[Could not resolve host: mirrors.128technology.com; Unknown error]\n")),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Cause:"))," The router node could not resolve the 128T software repository"),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Corrective Action:"))," When performing the upgrade from less than 4.1.0 to 4.1.0, ensure internet or Conductor access (where Conducted hosted services are enabled)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"IN-141")," - Unsupported installed rpms result in Canceled upgrade\n",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Symptom:"))," GUI presents a failure on upgrade with the following text provided:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Error: transaction check vs depsolve:\n")),Object(o.b)("p",{parentName:"li"},"  example:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Cancelling upgrade of the second node on the router due to failure on this node: Failed to install 128T-manifest-0:4.1.0.1.el7.centos-1.x86_64:\n      Error: transaction check vs depsolve:\n      iptables = 1.4.21-28.el7 is needed by iptables-services-1.4.21-28.el7.x86_64\n")),Object(o.b)("p",{parentName:"li"},"  To diagnose the problem, try running: 'rpm -Va --nofiles --nodigest'.\nYou probably have corrupted RPMDB, running 'rpm --rebuilddb' might fix the issue.\""),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Cause:"))," Installed version of the RPM's come from a later version of the Supported 128T OS version. 128T Versions 3.2.8, 4.0.0 and 4.0.1 are supported on CentOS 7.4. Version 4.1.0 is supported on CentOS 7.5."),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("strong",{parentName:"em"},"Corrective Action:"))," For the offending RPM that comes from a different version of the OS than is installed and running, perform either operation:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},'Remove the offending rpm (in the example above "iptables-services-1.4.21-28.el7.x86_64" would be removed'),Object(o.b)("li",{parentName:"ol"},"Setup a new repo pointing to the support CentOS vault version and downgrade the related rpms\n")))))}c.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(r),m=n,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);