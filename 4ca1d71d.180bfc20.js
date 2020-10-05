(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{192:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=n.a.createContext({}),d=function(e){var t=n.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=d(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=d(r),u=a,b=l["".concat(o,".").concat(u)]||l[u]||p[u]||i;return r?n.a.createElement(b,c(c({ref:t},m),{},{components:r})):n.a.createElement(b,c({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=r[m];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var a=r(2),n=r(6),i=(r(0),r(192)),o={title:"Hardware Requirements",sidebar_label:"Hardware Requirements"},c={unversionedId:"intro_system_reqs",id:"intro_system_reqs",isDocsHomePage:!1,title:"Hardware Requirements",description:"Hardware Requirements",source:"@site/docs/intro_system_reqs.md",slug:"/intro_system_reqs",permalink:"/docs/intro_system_reqs",version:"current",lastUpdatedAt:1600225113,sidebar_label:"Hardware Requirements",sidebar:"docs",previous:{title:"128T Software Installation Guide",permalink:"/docs/intro_installation"},next:{title:"Operating System Requirements",permalink:"/docs/intro_prepare_OS"}},s=[{value:"Hardware Requirements",id:"hardware-requirements",children:[]},{value:"Interface Requirements",id:"interface-requirements",children:[]},{value:"VMware ESXi\xa0and KVM Requirements",id:"vmware-esxi-and-kvm-requirements",children:[]}],m={rightToc:s};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hardware-requirements"},"Hardware Requirements"),Object(i.b)("p",null,"The 128T routing software runs on both bare metal servers and as a virtual machine within hypervisor environments. For virtual environments, the same CPU, memory, and storage specifications are required for comparable throughput."),Object(i.b)("p",null,"The 128T routing software recommends a minimum of 4 CPU\xa0cores, 8GB of RAM, and at least 25GB of hard drive space. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about_certified_platforms"}),"certified platforms")," and the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about_supported_platforms"}),"platform support policy")," for more details."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Larger hard drives may be required if you intended to support an increased volume of flow and stored session-related information. These are used for analytical analysis of the traffic patterns and utilization of your 128T routing system. Consult with your account representative for hardware recommendations specific to your traffic throughput needs, or visit our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.128technology.com/"}),"online community")," for hardware profile examples."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When run as a virtual machine, CPU\xa0cores must be dedicated to the 128T router using core affinity."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"128 Technology strongly recommends the use of ECC memory for all hardware platforms."))),Object(i.b)("h2",{id:"interface-requirements"},"Interface Requirements"),Object(i.b)("p",null,'Logically, 128T routers have at least two interfaces; in many deployments they represent "LAN" and "WAN" interfaces. These may be separate physical interfaces, or they may be separate VLANs on a single physical interface. There is also typically a third interface used for management traffic.'),Object(i.b)("p",null,"Though not a hard requirement, 128 Technology, recommends using a dedicated physical interface for management traffic whenever practical, to avoid commingling data plane traffic and management traffic."),Object(i.b)("p",null,"When configuring two software ",Object(i.b)("em",{parentName:"p"},"nodes"),' in a highly available router, each node requires a dedicated physical interface for synchronizing session data to its redundant peer. Each also generally have another, separate physical interface (referred to as a "fabric" interface) that is used to forward traffic between the nodes across a logical "backplane" between them. The fabric interface is not mandatory; refer to the ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/config_ha"}),"High Availability")," documentation for more information on configuration design for high availability deployments."),Object(i.b)("h2",{id:"vmware-esxi-and-kvm-requirements"},"VMware ESXi\xa0and KVM Requirements"),Object(i.b)("p",null,"VMware ESXi (5.5, 6.0, and 6.5) and KVM\xa0(2.1.3) with libvirt (1.2.9.3 and 3.2.0) are hypervisor environments. The following adjustments are required to run 128T Routing Software in these environments: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Leverage core affinity to dedicate CPU cores to 128T software, instead of leveraging virtual CPUs."),Object(i.b)("li",{parentName:"ul"},"Set the SCSI controller to LSI Logic SAS."),Object(i.b)("li",{parentName:"ul"},"Set network adapters to type e1000. As mentioned above, typical installations include a minimum of three network adapters for router deployments."),Object(i.b)("li",{parentName:"ul"},"Separate the management interface, which is used for inter-component communication and out-of-band management, from the forwarding plane interfaces. "),Object(i.b)("li",{parentName:"ul"},"Reserve a minimum of two network interfaces for production traffic."),Object(i.b)("li",{parentName:"ul"},"Depending on your environment, set the 128T router node portgroup to either promiscuous or bridged mode when supporting one or more redundant interfaces. (For example, when you are defining and configuring a MAC\xa0address for each redundant interface.) For VMware ESXi, the portgroup mode should be set to ",Object(i.b)("em",{parentName:"li"},"promiscuous"),". For KVM libvirt, the portgroupo mode should be set to ",Object(i.b)("em",{parentName:"li"},"bridged"),". For more information, refer to the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_ha"}),"High Availability")," guide.")))}d.isMDXComponent=!0}}]);