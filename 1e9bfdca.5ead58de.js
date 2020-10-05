(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{192:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,u=m["".concat(o,".").concat(p)]||m[p]||b[p]||r;return n?i.a.createElement(u,s(s({ref:t},l),{},{components:n})):i.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(192)),o={title:"Operating System Requirements",sidebar_label:"Operating System Requirements"},s={unversionedId:"intro_prepare_OS",id:"intro_prepare_OS",isDocsHomePage:!1,title:"Operating System Requirements",description:"Operating System Requirements",source:"@site/docs/intro_prepare_OS.md",slug:"/intro_prepare_OS",permalink:"/docs/intro_prepare_OS",version:"current",lastUpdatedAt:1601082065,sidebar_label:"Operating System Requirements",sidebar:"docs",previous:{title:"Hardware Requirements",permalink:"/docs/intro_system_reqs"},next:{title:"Manually Installing the 128T",permalink:"/docs/intro_installation_installer"}},c=[{value:"Operating System Requirements",id:"operating-system-requirements",children:[{value:"CentOS",id:"centos",children:[]}]},{value:"BIOS Recommendations",id:"bios-recommendations",children:[{value:"Enable Automatic Restart",id:"enable-automatic-restart",children:[]},{value:"Disable Secure Boot",id:"disable-secure-boot",children:[]}]},{value:"Preparing the Operating System",id:"preparing-the-operating-system",children:[{value:"Assigning the System Interfaces",id:"assigning-the-system-interfaces",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"operating-system-requirements"},"Operating System Requirements"),Object(r.b)("p",null,"The 128T routing software supports CentOS 7.5 as its underlying operating system. "),Object(r.b)("h3",{id:"centos"},"CentOS"),Object(r.b)("p",null,"When not installing from a 128T ISO, which includes a version of the CentOS operating system, the 128T routing software requires, at a minimum, an installation of CentOS 7.5. We recommend installing the minimal\xa0package that CentOS\xa0offers, as the 128T installer will fetch and install any additional dependencies during the installation process."),Object(r.b)("h2",{id:"bios-recommendations"},"BIOS Recommendations"),Object(r.b)("p",null,"In order to configure standard, off-the-shelf hardware to perform in line with traditional routing hardware, we recommend that you configure several BIOS settings to increase performance and resiliency."),Object(r.b)("h3",{id:"enable-automatic-restart"},"Enable Automatic Restart"),Object(r.b)("p",null,"In the event of power disruption, the Automatic Restart setting in your system's BIOS can automatically restart your system once power is restored. As BIOS settings may vary between hardware vendors, consult your hardware platform's operating guides for specific instructions, or look on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.128technology.com/"}),"Interchange")," for commonly deployed 128T hardware platforms. Below are representative steps for common BIOS parameters:"),Object(r.b)("h4",{id:"to-enable-automatic-restart"},"To enable Automatic Restart:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"From the BIOS settings screen, select ACPI ",">"," Power Settings."),Object(r.b)("li",{parentName:"ol"},"Change the Automatic Restart setting to On."),Object(r.b)("li",{parentName:"ol"},"Save the configuration."),Object(r.b)("li",{parentName:"ol"},"Reboot your system. ")),Object(r.b)("h3",{id:"disable-secure-boot"},"Disable Secure Boot"),Object(r.b)("p",null,"Secure Boot verifies the integrity of the system. Because the kernel modules of the 128T are not signed, the modules required by the network interface drivers cannot be loaded at runtime. In order to allow the loading of the necessary drivers, the Secure Boot setting in the BIOS must be disabled. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'When deploying 128T on VMware ESXi release 6.7 (or newer), Secure Boot must be disabled when the Virtual Machine is created (New Virtual Machine wizard). To disable it, deselect the box "Secure Boot (EFI boot only)" found in the tab "VM Options" within the "Customize hardware" section.  '))),Object(r.b)("h4",{id:"to-disable-secure-boot"},"To disable Secure Boot:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On the BIOS settings screen, select Boot."),Object(r.b)("li",{parentName:"ol"},"Change the Secure Boot setting to Off."),Object(r.b)("li",{parentName:"ol"},"Save the configuration."),Object(r.b)("li",{parentName:"ol"},"Reboot your system.")),Object(r.b)("p",null,"BIOS settings may vary between hardware vendors. Please consult your hardware documentation for specific instructions. Additional information for common deployments of 128T hardware platforms may be found on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.128technology.com/"}),"Interchange"),"."),Object(r.b)("h2",{id:"preparing-the-operating-system"},"Preparing the Operating System"),Object(r.b)("p",null,"Before installing 128T Routing Software you must prepare your operating system according to 128 Technology's recommendations and guidelines."),Object(r.b)("h3",{id:"assigning-the-system-interfaces"},"Assigning the System Interfaces"),Object(r.b)("p",null,"Interfaces on host systems running as a 128T router, either bare metal or virtual deployment environments, are assigned for packet forwarding. At least one dedicated interface is required for packet forwarding."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Interface assignments are required only on software instances that are running as routers. Conductor nodes do not require interface assignments."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"As mentioned in the section on Hardware Requirements, 128 Technology recommends using a separate interface for management traffic if possible."))),Object(r.b)("h4",{id:"identify-interface-pci-addresses"},"Identify Interface PCI Addresses"),Object(r.b)("p",null,"Each Ethernet interface within a Linux system has a unique PCI address. This PCI address is used to bind the 128T router's configuration to the underlying hardware. During identification, be sure to record the PCI\xa0bus addresses for the individual interfaces."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Once the PCI addresses are configured for packet forwarding, the interfaces are no longer available to the Linux operating system. Incorrectly configuring the PCI addresses causes ssh connections and package installs to fail."))),Object(r.b)("h4",{id:"to-identify-pci-addresses"},"To Identify PCI\xa0Addresses:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch a command prompt window."),Object(r.b)("li",{parentName:"ol"},"Issue the command ",Object(r.b)("inlineCode",{parentName:"li"},"lshw -c network -businfo")),Object(r.b)("li",{parentName:"ol"},"The PCI addresses are displayed in the tabular output in the column labeled Bus info. These addresses are also referenced in your 128T router's configuration, with the preceding pci@ omitted, to identify which interfaces you want the system to manage and use for packet forwarding."),Object(r.b)("li",{parentName:"ol"},"Record the PCI addresses you wish to use, and close the command prompt window.",Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are unsure which device maps to which physical port on your Linux system, you can use Linux's ethtool application to blink the NIC's activity light. For example, the command ",Object(r.b)("inlineCode",{parentName:"p"},"ethtool --identify eno1 120")," will blink eno1's activity light for two minutes (120 seconds)."))),Object(r.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"PCI-to-port maps are available for commonly deployed hardware systems on our user community, ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.128technology.com/"}),"Interchange")))))),Object(r.b)("p",null,"Once you have identified the platform and determined it meets the minimum requirements, select the appropriate installation mechanism best suited for your needs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/intro_installation_installer"}),"Installing from 128T Installer")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/intro_installation_bootable_media"}),"Installing from bootable media")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/intro_installation_aws"}),"Installing on AWS"))))}d.isMDXComponent=!0}}]);