(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{185:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),d=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=d(a),u=r,b=l["".concat(o,".").concat(u)]||l[u]||p[u]||i;return a?n.a.createElement(b,c(c({ref:t},m),{},{components:a})):n.a.createElement(b,c({ref:t},m))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=a[m];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),i=(a(0),a(185)),o={title:"Hardware Requirements",sidebar_label:"Hardware Requirements"},c={unversionedId:"intro_system_reqs",id:"intro_system_reqs",isDocsHomePage:!1,title:"Hardware Requirements",description:"Hardware Requirements",source:"@site/docs/intro_system_reqs.md",permalink:"/docs/intro_system_reqs",lastUpdatedAt:1599588859,sidebar_label:"Hardware Requirements",sidebar:"docs",previous:{title:"128T Software Installation Guide",permalink:"/docs/intro_installation"},next:{title:"Operating System Requirements",permalink:"/docs/intro_prepare_OS"}},s=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"Interface Requirements",id:"interface-requirements",children:[]},{value:"VMware ESXi\xa0and KVM Requirements",id:"vmware-esxi-and-kvm-requirements",children:[]}],m={rightToc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hardware-requirements"},"Hardware Requirements"),Object(i.b)("p",null,"The 128T routing software runs on both bare metal servers and as a virtual machine within hypervisor environments. For virtual environments, the same CPU, memory, and storage specifications are required for comparable throughput."),Object(i.b)("p",null,"The 128T routing software recommends a minimum of 4 CPU\xa0cores, 8GB of RAM, and at least 25GB of hard drive space."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Larger hard drives may be required if you intended to support an increased volume of flow and stored session-related information. These are used for analytical analysis of the traffic patterns and utilization of your 128T routing system. Consult with your account representative for hardware recommendations specific to your traffic throughput needs, or visit our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://community.128technology.com/"}),"online community")," for hardware profile examples."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When run as a virtual machine, CPU\xa0cores must be dedicated to the 128T router using core affinity."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"128 Technology strongly recommends the use of ECC memory for all hardware platforms."))),Object(i.b)("h2",{id:"interface-requirements"},"Interface Requirements"),Object(i.b)("p",null,'Logically, 128T routers have at least two interfaces; in many deployments they represent "LAN" and "WAN" interfaces. These may be separate physical interfaces, or they may be separate VLANs on a single physical interface. There is also typically a third interface used for management traffic.'),Object(i.b)("p",null,"Though not a hard requirement, 128 Technology, recommends using a dedicated physical interface for management traffic whenever practical, to avoid commingling data plane traffic and management traffic."),Object(i.b)("p",null,"When configuring two software ",Object(i.b)("em",{parentName:"p"},"nodes"),' in a highly available router, each node requires a dedicated physical interface for synchronizing session data to its redundant peer. Each also generally have another, separate physical interface (referred to as a "fabric" interface) that is used to forward traffic between the nodes across a logical "backplane" between them. The fabric interface is not mandatory; refer to the ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/config_ha"}),"High Availability")," documentation for more information on configuration design for high availability deployments."),Object(i.b)("h2",{id:"vmware-esxi-and-kvm-requirements"},"VMware ESXi\xa0and KVM Requirements"),Object(i.b)("p",null,"VMware ESXi (5.5, 6.0, and 6.5) and KVM\xa0(2.1.3) with libvirt (1.2.9.3 and 3.2.0) are hypervisor environments. The following adjustments are required to run 128T Routing Software in these environments: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Leverage core affinity to dedicate CPU cores to 128T software, instead of leveraging virtual CPUs."),Object(i.b)("li",{parentName:"ul"},"Set the SCSI controller to LSI Logic SAS."),Object(i.b)("li",{parentName:"ul"},"Set network adapters to type e1000. As mentioned above, typical installations include a minimum of three network adapters for router deployments."),Object(i.b)("li",{parentName:"ul"},"Separate the management interface, which is used for inter-component communication and out-of-band management, from the forwarding plane interfaces. "),Object(i.b)("li",{parentName:"ul"},"Reserve a minimum of two network interfaces for production traffic."),Object(i.b)("li",{parentName:"ul"},"Depending on your environment, set the 128T router node portgroup to either promiscuous or bridged mode when supporting one or more redundant interfaces. (For example, when you are defining and configuring a MAC\xa0address for each redundant interface.) For VMware ESXi, the portgroup mode should be set to ",Object(i.b)("em",{parentName:"li"},"promiscuous"),". For KVM libvirt, the portgroupo mode should be set to ",Object(i.b)("em",{parentName:"li"},"bridged"),". For more information, refer to the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/config_ha"}),"High Availability")," guide.")))}d.isMDXComponent=!0}}]);