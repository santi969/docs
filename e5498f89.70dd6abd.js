(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(11),a=(n(0),n(228)),o={title:"LTE Peering",sidebar_label:"LTE Peering"},c={id:"bcp_lte_peering",title:"LTE Peering",description:'It is quite common for 128T routers to use LTE interfaces as a "last resort" transport when primary circuits are down, congested, or experiencing issues. This document recommends various configuration settings to strike a balance between performance and bandwidth usage for LTE interfaces, to get the most benefit from them when peering over LTE.',source:"@site/docs/bcp_lte_peering.md",permalink:"/docs/bcp_lte_peering",lastUpdatedAt:1585229343,sidebar_label:"LTE Peering",sidebar:"docs",previous:{title:"Conductor Deployment Patterns",permalink:"/docs/bcp_conductor_deployment"},next:{title:"SD-WAN Design Guide",permalink:"/docs/bcp_sdwan_design_guide"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Configuration Sample",id:"configuration-sample",children:[]},{value:"Notes about the configuration",id:"notes-about-the-configuration",children:[]}],d={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'It is quite common for 128T routers to use LTE interfaces as a "last resort" transport when primary circuits are down, congested, or experiencing issues. This document recommends various configuration settings to strike a balance between performance and bandwidth usage for LTE interfaces, to get the most benefit from them when peering over LTE.'),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"This document is intended for customers that use LTE interfaces as a last resort transport, not for those using it as a primary transport."))),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"LTE interfaces have two material differences when compared to most wireline interfaces:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Most wireless providers employ ",Object(a.b)("em",{parentName:"li"},"Carrier-Grade NAT")," equipment on their LTE network, which can cause impact to long-lived sessions between peers if there are periods of inactivity. Furthermore, it typically results in a private IP address being issued via DHCP to the LTE modem, which affects the directionality of session setup."),Object(a.b)("li",{parentName:"ol"},"LTE services are typically sold using bandwidth-based service plans. Thus, additional overhead used for machine-to-machine communications costs real money.")),Object(a.b)("p",null,"In this document, we provide a configuration fragment that illustrates how to tune your LTE interface to provide connectivity with minimal overhead."),Object(a.b)("h2",{id:"configuration-sample"},"Configuration Sample"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"    neighborhood           LTE\n        name               LTE\n        peer-connectivity  outbound-only\n        topology           spoke\n        vector             lte\n\n        bfd\n            state                enabled\n            desired-tx-interval  60000\n            authentication-type  sha256\n            multiplier           3\n            link-test-interval   120\n            link-test-length     10\n            dscp                 0\n        exit\n\n        udp-transform\n            mode  always-transform\n            nat-keep-alive-mode     enabled\n            nat-keep-alive-timeout  30\n        exit\n\n        path-mtu-discovery\n            enabled  true\n            interval 600\n        exit\n    exit\n")),Object(a.b)("h2",{id:"notes-about-the-configuration"},"Notes about the configuration"),Object(a.b)("p",null,"A ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Carrier-grade_NAT"}),"Carrier-grade NAT"),", which is indistinguishable from an enterprise-grade (or consumer) NAT from a 128T configuration perspective, requires certain configuration considerations. First, as seen in the configuration fragment above, it is important to set the ",Object(a.b)("inlineCode",{parentName:"p"},"peer-connectivity")," to ",Object(a.b)("inlineCode",{parentName:"p"},"outbound-only"),'. This will guarantee that any traffic originating at a peer and destined for the LTE device will be created "inside out" from the NAT\'s perspective. (For more information on the outbound-only feature of the 128T product, read the reference manual.)'),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"bfd")," configuration is dilated to use ",Object(a.b)("inlineCode",{parentName:"p"},"60000")," milliseconds as its interval. This configuration is empirically observed to work on most U.S. LTE provider networks \u2013 the Carrier-grade NAT devices present in the United States typically use NAT bindings longer than one minute. This value may need adjustment in your local region, if you experience difficulties in establishing sessions toward 128T routers over LTE networks."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"These BFD keepalive messages are small and therefore do not consume much bandwidth. However, on interfaces where every byte counts against your monthly bandwidth allocation, it is important to keep these settings as conservative as you can to maintain a stable connection."))),Object(a.b)("p",null,"Last, the ",Object(a.b)("inlineCode",{parentName:"p"},"udp-transform")," configuration element in the neighborhood is configured with its ",Object(a.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(a.b)("inlineCode",{parentName:"p"},"always-transform"),". Because we can presume that the Carrier-grade NAT exists, we do not need to test for it using our detection mechanism. This reduces unnecessary overhead on the path."))}l.isMDXComponent=!0},228:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return n?i.a.createElement(b,c({ref:t},d,{components:n})):i.a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);