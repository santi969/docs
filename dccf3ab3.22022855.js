(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{227:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),i=(t(0),t(247)),c={title:"DNS Cache Plugin",sidebar_label:"DNS Cache"},o={id:"plugin_dns_cache",title:"DNS Cache Plugin",description:"The 128T-dns-cache plugin provides a DNS caching service on your 128T router by forwarding all traffic on a configured ingress-service and tenant to dnsmasq. By default it uses existing system configuration for nameserver resolution but supports optionally configuring custom server addresses. The plugin is implemented as a service function chain (SFC) where the DNS traffic received on the ingress interface is detoured through a Kernel Network Interface (KNI) to be cached by dnsmasq. A typical flow of the packets for the plugin is illustrated below:",source:"@site/docs/plugin_dns_cache.md",permalink:"/docs/plugin_dns_cache",lastUpdatedAt:1593052246,sidebar_label:"DNS Cache",sidebar:"docs",previous:{title:"Mosh Plugin",permalink:"/docs/plugin_mosh"},next:{title:"DNS App Id Plugin",permalink:"/docs/plugin_dns_app_id"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Thirdparty Software &amp; Licenses",id:"thirdparty-software--licenses",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The 128T-dns-cache plugin provides a DNS caching service on your 128T router by forwarding all traffic on a configured ",Object(i.b)("inlineCode",{parentName:"p"},"ingress-service")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tenant")," to ",Object(i.b)("inlineCode",{parentName:"p"},"dnsmasq"),". By default it uses existing system configuration for nameserver resolution but supports optionally configuring custom server addresses. The plugin is implemented as a service function chain (SFC) where the DNS traffic received on the ingress interface is detoured through a Kernel Network Interface (KNI) to be cached by ",Object(i.b)("inlineCode",{parentName:"p"},"dnsmasq"),". A typical flow of the packets for the plugin is illustrated below:"),Object(i.b)("p",null,"lan-intf (lan-tenant) > ",Object(i.b)("inlineCode",{parentName:"p"},"ingress-service")," > ",Object(i.b)("inlineCode",{parentName:"p"},"dnsmasq")," > dns-kni (",Object(i.b)("inlineCode",{parentName:"p"},"tenant"),") > egress-service > wan-intf"),Object(i.b)("p",null,"By enabling this plugin, you can provide DNS caching with fast resolution times to your network."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"The following versions are available for corresponding 128T software versions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"DNS Cache"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"128T"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128T-dns-cache-1.0.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128T >= 3.2.8; 128T < 4.3.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128T-dns-cache-2.0.0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"128T >= 4.3.0")))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is recommended to use the conductor GUI > Plugins page for installing plugins. This allows the system to select the correct version of plugin based on the 128T version."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"After installing the plugin, the 128T service on the conductor should be restarted for the changes to take effect."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Assuming the below 128T configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"config\n    authority\n        name Authority128\n        conductor-address ${DUT1_MGMT}\n        tenant dns\n            name dns\n        exit\n        tenant lan\n            name lan\n            security aes1\n        exit\n        tenant wan\n            name wan\n            security aes1\n        exit\n        service internet\n            name internet\n            security internal\n            address 0.0.0.0/0\n            access-policy _internal_\n                source _internal_\n                permission allow\n            exit\n            access-policy lan\n                source lan\n                permission allow\n            exit\n            access-policy wan\n                source wan\n                permission allow\n            exit\n            access-policy dns\n                source dns\n                permission allow\n            exit\n            share-service-routes false\n        exit\n        service dns\n            name dns\n            transport udp\n                protocol udp\n                port-range 53\n                    start-port 53\n                exit\n            exit\n            address 0.0.0.0/0\n            access-policy _internal_\n                source _internal_\n            exit\n        exit\n        router ${DUT2_ROUTER}\n            name ${DUT2_ROUTER}\n            node ${DUT2_NODE_NAME}\n                name ${DUT2_NODE_NAME}\n                role combo\n                device-interface inband-mgmt\n                    name inband-mgmt\n                    pci-address ${DUT2_MGMT_PCI}\n                    network-interface inband-mgmt-intf\n                        name inband-mgmt-intf\n                        conductor true\n                        tenant wan\n                        source-nat true\n                        dhcp v4\n                        host-service web\n                            service-type web\n                        exit\n                        host-service ssh\n                            service-type ssh\n                        exit\n                    exit\n                exit\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"We can apply the following DNS cache plugin configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"config\n    authority\n        router ${DUT2_ROUTER}\n            name ${DUT2_ROUTER}\n            dns-cache\n                enabled true\n                tenant dns\n                ingress-service dns\n            exit\n        exit\n    exit\nexit\n")),Object(i.b)("p",null,"To configure custom server addresses for dnsmasq, add the ",Object(i.b)("inlineCode",{parentName:"p"},"addresses")," field:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"dns-cache\n    enabled          true\n    addresses        1.1.1.1\n    addresses        2.2.2.2\n    tenant           dns\n    ingress-service  dns\nexit\n")),Object(i.b)("h2",{id:"thirdparty-software--licenses"},"Thirdparty Software & Licenses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"dnsmasq (GNU GPL v2, v3)")),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("p",null,"To verify that the services are running properly on the 128T router:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"systemctl status 128T-dns-cache-forwarder.service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"systemctl status 128T-dns-matcher.service"))),Object(i.b)("p",null,"Verify that the dns-cache network interface (default ",Object(i.b)("inlineCode",{parentName:"p"},"dns-cache-intf"),") is UP."))}b.isMDXComponent=!0},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?r.a.createElement(m,o(o({ref:n},l),{},{components:t})):r.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);