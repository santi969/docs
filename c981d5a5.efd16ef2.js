(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var i=a(2),n=a(6),r=(a(0),a(192)),o={title:"128T Metadata"},s={unversionedId:"concepts_metadata",id:"concepts_metadata",isDocsHomePage:!1,title:"128T Metadata",description:"As part of 128T's operation, it performs functions such as flow classification, route selection, load balancing, etc. upon receipt of a first packet from a new five tuple source. Before sending this packet another 128T, it inserts metadata, a series of TLVs which describe attributes of the session, into the payload of the packet. Likewise, in the reverse direction, the first reverse packet will include metadata in the form of a different set of TLVs associated with decisions made on the egress 128T.",source:"@site/docs/concepts_metadata.md",slug:"/concepts_metadata",permalink:"/docs/concepts_metadata",version:"current",lastUpdatedAt:1594051376,sidebar:"docs",previous:{title:"Forwarding Plane Separation",permalink:"/docs/concepts_network_planes"},next:{title:"Metrics",permalink:"/docs/concepts_metrics"}},c=[{value:"Metadata Types",id:"metadata-types",children:[]},{value:"Metadata Insertion",id:"metadata-insertion",children:[{value:"Retriggering Metadata",id:"retriggering-metadata",children:[]}]},{value:"Metadata Versioning",id:"metadata-versioning",children:[]},{value:"Metadata Application: Load Balancing",id:"metadata-application-load-balancing",children:[{value:"Service Feedback",id:"service-feedback",children:[]}]},{value:"Metadata Application: High Availability",id:"metadata-application-high-availability",children:[]},{value:"Metadata Application: Workload Mobility",id:"metadata-application-workload-mobility",children:[]},{value:"Metadata Composition",id:"metadata-composition",children:[{value:"Metadata Header",id:"metadata-header",children:[]},{value:"False Positive Metadata",id:"false-positive-metadata",children:[]},{value:"Guaranteed Unencrypted Attributes",id:"guaranteed-unencrypted-attributes",children:[]},{value:"Contextually Encrypted Attributes (Payload attributes)",id:"contextually-encrypted-attributes-payload-attributes",children:[]}]},{value:"Attributes",id:"attributes",children:[]}],d={rightToc:c};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As part of 128T's operation, it performs functions such as flow classification, route selection, load balancing, etc. upon receipt of a first packet from a new five tuple source. Before sending this packet another 128T, it inserts metadata, a series of ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Type-length-value"}),"TLVs")," which describe attributes of the session, into the payload of the packet. Likewise, in the reverse direction, the first reverse packet will include metadata in the form of a different set of TLVs associated with decisions made on the egress 128T."),Object(r.b)("p",null,"These metadata inclusions are supplied by and exchanged between nodes within a router when deployed as a HA pair; this is frequently referred to as ",Object(r.b)("em",{parentName:"p"},"inter-node")," metadata."),Object(r.b)("p",null,"In a similar way, the 128T uses metadata when exchanging packets between 128T router instances. In these ",Object(r.b)("em",{parentName:"p"},"inter-router")," applications, a 128T router will insert metadata (on egress) to another 128T router."),Object(r.b)("p",null,"Irrespective of whether it is being used between nodes or between routers, the function of the metadata is to convey information between these two nodes; the ingress node sends information about the originator of the packet, authentication information about itself, the tenant that the endpoint has been determined to be in, the destination service, and a growing list of feature-specific parameters. In turn, the egress node supplies information back to the ingress node to provide real-time utilization information about the service, any downstream load balancing decisions it has employed, etc."),Object(r.b)("h2",{id:"metadata-types"},"Metadata Types"),Object(r.b)("p",null,"There are three main types of metadata in use within the 128T router:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Session metadata. This is the \u2018signaling exchange\u2019 sent between routers. It occurs at the outset of a session, during a metadata handshake, and will reoccur when properties of the session change and need to be re-signaled."),Object(r.b)("li",{parentName:"ol"},'Per-packet metadata. This type of metadata is mostly associated with changes made to packets regardless of what session they are associated with. An example of this is when 128T needs to fragment packets destined for another 128T; in this case, it adds "fabric fragmentation" metadata to each of the pieces, telling the egress node how to reassemble them.'),Object(r.b)("li",{parentName:"ol"},"BFD metadata. In a unique category unto itself, BFD metadata appears in every BFD packet exchanged between routers. It is a lightweight payload used to communicate service changes (e.g., when an active node fails and activity is resumed by a highly available counterpart), used as part of the BFD application to measure link quality.")),Object(r.b)("h2",{id:"metadata-insertion"},"Metadata Insertion"),Object(r.b)("p",null,"The 128T router inserts metadata only when transmitting a packet between two routers, and under the following circumstances:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It is a \u201cforward\u201d packet representing a new session and the ingress node has not yet received any reverse metadata from the recipient egress node."),Object(r.b)("li",{parentName:"ol"},"It is a \u201creverse\u201d packet from the recipient egress node to the initiating ingress node and recipient egress node has not received forward packets from this session without metadata.")),Object(r.b)("p",null,"These two comprise what is known as the \u201cmetadata handshake\u201d -- that is, the initiating router sends packets with metadata to the recipient router until it receives a reverse packet with metadata from that recipient. Likewise, the recipient continues to send metadata to the initiating router until it receives a packet without metadata. This is how two routers acknowledge receipt of metadata from their counterparts: the absence of metadata in a packet indicates that it has received metadata from its counterpart."),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Fragmented packets are being sent from a 128T router to another 128T router"),Object(r.b)("li",{parentName:"ol"},"Packets are being transformed to UDP between nodes because the original protocol has no support for L4 port numbers (and hence, SVR waypoint logic cannot be used. i.e. ICMP)"),Object(r.b)("li",{parentName:"ol"},"Packets are being transformed to UDP from TCP between routers due to the detection of a protocol-strict firewall between them"),Object(r.b)("li",{parentName:"ol"},"A NAT exists between two routers and a router detects that the NAT\u2019s address has changed.  Detection is done using a BFD exchange (not described in this document)"),Object(r.b)("li",{parentName:"ol"},"BFD Metadata")),Object(r.b)("p",null,"Metadata is always inserted directly after the L4 header of a packet."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All packets between routers will have an L4 header, since the initiating router will insert one if one did not exist in the original packet."))),Object(r.b)("h3",{id:"retriggering-metadata"},"Retriggering Metadata"),Object(r.b)("p",null,"There are a variety of reasons why metadata may need to be retriggered after the initial handshake has been successfully completed. Additionally the retriggering itself can serve different purposes depending on the catalyst. The two main scenarios for retriggering of metadata are existing flow recognition as well as existing flow modification"),Object(r.b)("h4",{id:"existing-flow-recognition"},"Existing Flow Recognition"),Object(r.b)("p",null,"This method of retriggering metadata is intended to reopen the session on the next hop due to a variety of reasons such as detecting a source NAT change from a device in the middle via BFD, or the session for some reason no longer exists on the next hop router and needs to be reopened. Ultimately the next hop router is missing a flow entry associated with the flow table key (device interface, VLAN, source IP, destination IP, source L4 port, destination L4 port, and protocol). Retriggering metadata in this scenario aims to recreate a session which should have existed or is currently in a stale state on the next-hop node."),Object(r.b)("h4",{id:"existing-flow-modification"},"Existing Flow Modification"),Object(r.b)("p",null,"This form of metadata retriggering is a result router deciding that something about the existing session needs to change on the fly."),Object(r.b)("p",null,"This could be a result of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Switching waypoints for an existing session due to a change in security actions of the session."),Object(r.b)("li",{parentName:"ul"},"The load balancer within the ingress router decided that there is a better SVR path to traverse for the session."),Object(r.b)("li",{parentName:"ul"},"Existing characteristics of a session (such as its traffic classification) have changed which must be communicated to the next hop router.")),Object(r.b)("h2",{id:"metadata-versioning"},"Metadata Versioning"),Object(r.b)("p",null,"Metadata header contains a version field which dictates the version of the header format. Presently there is only version 1 which is associated with the initial format of the header."),Object(r.b)("h2",{id:"metadata-application-load-balancing"},"Metadata Application: Load Balancing"),Object(r.b)("p",null,"Each router maintains local information about the utilization of all services which it contacts. This information is used to inform a router\u2019s session forwarding logic, which determines the most appropriate egress router for a given ingress session. There are three main inputs into a router\u2019s session forwarding algorithm:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The configuration of the fabric. This is where administrators define their preferences and requirements for session traffic. This includes application-based thresholds for the minimum viable link quality requirements (packet loss, jitter, latency), as well as the administrative preference for which path to use."),Object(r.b)("li",{parentName:"ul"},"Path (or link) data, as learned through BFD. This includes real-time path measurement for latency and jitter, as well as real-time reporting of observed packet loss.")),Object(r.b)("h3",{id:"service-feedback"},"Service Feedback"),Object(r.b)("p",null,"With each new session that is established between two routers, the metadata from the egress router includes load information to describe that service\u2019s current occupancy. This is based strictly on a count of the number of active sessions, but could be extended to use other attributes as metric data (e.g., bandwidth). These metrics are collectively referred to as \u201ccapacity criteria\u201d."),Object(r.b)("p",null,"By inserting capacity criteria in metadata, the egress router can send real-time information back, in band, to the ingress router. This information can (and should) be time sensitive \u2013 after a period of time the information, if it is not refreshed by another session assignment (and hence more metadata from the egress router), this information is considered obsolete. With frequent exchanges between two specific routers, the ingress router will have nearly perfect load information on the egress router \u2013 even if that ingress router is not the only source of traffic to that egress router."),Object(r.b)("h2",{id:"metadata-application-high-availability"},"Metadata Application: High Availability"),Object(r.b)("p",null,"At its essence, metadata represents state information that is exchanged between routers. In its most primitive use case, an ingress router sends pre-transform packet information to the egress router for it to \u201creconstitute\u201d the original source and destination addresses and ports of the original inbound packet. This is performed with the first packet for every new session entering into a 128T fabric. This same technique is also employed on non-first packets for existing sessions if a router has determined that its counterpart is no longer reachable (due to network issues or system failure)."),Object(r.b)("p",null,"After a router (which could have originally been the ingress or egress router of a session) detects that the adjacent peer it has been talking with has failed over or rebooted, an event is triggered for all flows destined to the newly active peer to restart metadata generation.  When BFD notices a state change with a connected peer indicative of a failover or reboot, it triggers an event to reevaluate path selection for active sessions. This event tells all flows generating metadata to do a one time check (when going through action processing) to see if their relevant peer has had a state change and is in need of metadata. If the event is relevant to the flow, metadata is enabled, otherwise the event is marked as observed and the existing metadata action state is unchanged."),Object(r.b)("h2",{id:"metadata-application-workload-mobility"},"Metadata Application: Workload Mobility"),Object(r.b)("p",null,"Similar to the high availability scenario, network events may sometimes require session state to be moved among routers in a 128T fabric. The term workload mobility refers to the migration of a workload (virtual machine, container, etc.) from one location in a network to another; the challenge this presents to 128T is that not only does the configuration need to account for the change (i.e., a service-route\u2019s egress interface moves), but sessions in progress may also need to move as a result."),Object(r.b)("p",null,"As with high availability, the use of metadata is critical to migrating a session from one router to another. In much the same way, when a (terminating) workload is moved to a new location, the ingress router will send packets for in-progress sessions to a new location, including brand new metadata to a new recipient."),Object(r.b)("h2",{id:"metadata-composition"},"Metadata Composition"),Object(r.b)("p",null,"Metadata that the 128T system can generate is an accumulation of attributes associated with a session being established, or in certain circumstances per-packet attributes. Below is an example of the format of metadata that will sit between the layer 4 header of a packet and its payload.  There exist both ",Object(r.b)("em",{parentName:"p"},"Header attributes")," as well as ",Object(r.b)("em",{parentName:"p"},"Payload attributes"),". Header attributes are always guaranteed to be unencrypted. Payload attributes may be encrypted depending on the configuration of a security policy.  Each attribute listed below will indicate whether it is a header attribute (unencrypted) or payload attribute (optionally encrypted).  Attributes can not exist in both sections."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{})," 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                             Cookie                            +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|Version|     Header Length     |         Payload Length        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|        Header TLVs ...        |         Payload TLVs ...      |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),Object(r.b)("h3",{id:"metadata-header"},"Metadata Header"),Object(r.b)("p",null,"The metadata header is the base structure for which all session and packet attributes are built upon. A well known \u201ccookie\u201d (",Object(r.b)("inlineCode",{parentName:"p"},"0x4c48dbc6ddf6670c")," in network byte order or ",Object(r.b)("inlineCode",{parentName:"p"},"0x0c67f6ddc6db484c")," in host byte order) is built into the header which is used in concert with contextual awareness of the packet itself to determine the presence of metadata within a packet. This is an eight byte pattern that immediately follows the L4 header, and is an indicator to a receiving router that a packet contains metadata."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{})," 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                             Cookie                            +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|Version|     Header Length     |         Payload Length        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),Object(r.b)("h5",{id:"cookie-8-bytes"},"Cookie (8 bytes)"),Object(r.b)("p",null,"The fingerprint of metadata. This value is used to determine the existence of metadata within a packet."),Object(r.b)("h5",{id:"version-4-bits"},"Version (4 bits)"),Object(r.b)("p",null,"Field representing the version of the metadata header. The current version of metadata is 0x1."),Object(r.b)("h5",{id:"header-length-12-bits"},"Header Length (12 bits)"),Object(r.b)("p",null,"Length of the metadata header including any added optional attributes that are guaranteed to be unencrypted. The value of this field is the number of bytes in the header."),Object(r.b)("h5",{id:"payload-length-2-bytes"},"Payload Length (2 bytes)"),Object(r.b)("p",null,"Length of data following the metadata header, not including the size of the header. This data could be encrypted. The value of this field is the number of bytes in the payload."),Object(r.b)("h3",{id:"false-positive-metadata"},"False Positive Metadata"),Object(r.b)("p",null,"Given that no byte sequence is truly unique in the payload of a packet, in the scenario where the original payload after the L4 header contains the same byte sequence as the cookie, false positive logic is enacted on the packet. If no metadata header has already been added to the packet, a false positive metadata header is added to the packet to indicate that the first eight bytes of the payload matches the cookie. The structure of a false positive metadata packet is one which has a metadata header length that is the same as the base header size as well as having zero payload length. The receiving side of a packet with false positive metadata will strip out the metadata header if the next hop of the packet is not expecting a metadata header."),Object(r.b)("p",null,"In the scenario where a router receives a false positive metadata header but intends to add metadata to the packet, the false positive metadata header is modified to contain the newly added attributes. Once attributes are added, the metadata header is no longer considered to be false positive."),Object(r.b)("h3",{id:"guaranteed-unencrypted-attributes"},"Guaranteed Unencrypted Attributes"),Object(r.b)("p",null,"The metadata header contains a 12 bit field associated with the header length of the metadata header. The field represents the overall length of the header. Its base value is ",Object(r.b)("inlineCode",{parentName:"p"},"0xC")," which is the initial length of the metadata header.\nThe value ",Object(r.b)("inlineCode",{parentName:"p"},"0xC")," is derived from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"  64 bits  Cookie Length\n   4 bits  Metadata Version\n  12 bits  Header Length\n+ 16 bits  Payload Length\n--------------------------\n96 bits = 12 bytes decimal = 0xC hex\n")),Object(r.b)("p",null,"Any value greater than ",Object(r.b)("inlineCode",{parentName:"p"},"0xC")," indicates additional attributes associated with this metadata header which are guaranteed to be unencrypted."),Object(r.b)("p",null,"An example of an optional attribute which would reside in the guaranteed unencrypted section of metadata would be per-packet fabric fragment attribute. This attribute is not associated with any session or encryption schema and as such, must not be encrypted."),Object(r.b)("h3",{id:"contextually-encrypted-attributes-payload-attributes"},"Contextually Encrypted Attributes (Payload attributes)"),Object(r.b)("p",null,"The metadata header contains a two byte payload length field which is associated with attributes that could be encrypted."),Object(r.b)("h2",{id:"attributes"},"Attributes"),Object(r.b)("p",null,"Attributes are optionally included TLVs that are added to the metadata header. They can be added to either the guaranteed unencrypted section, or in the contextually encrypted section of the metadata header.  Each attribute will be marked with ","[header]"," or ","[payload]"," respectively to indicate in which metadata section it belongs."))}l.isMDXComponent=!0},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return u}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),l=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(a),p=i,u=h["".concat(o,".").concat(p)]||h[p]||b[p]||r;return a?n.a.createElement(u,s(s({ref:t},d),{},{components:a})):n.a.createElement(u,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);