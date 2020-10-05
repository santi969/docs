(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),l=(n(0),n(192)),i={title:"128T 4.5 Release Notes",sidebar_label:4.5},b={unversionedId:"release_notes_128t_4.5",id:"release_notes_128t_4.5",isDocsHomePage:!1,title:"128T 4.5 Release Notes",description:"Release 4.5.1",source:"@site/docs/release_notes_128t_4.5.md",slug:"/release_notes_128t_4.5",permalink:"/docs/release_notes_128t_4.5",version:"current",lastUpdatedAt:1600270857,sidebar_label:4.5,sidebar:"docs",previous:{title:"128T-4.2.0",permalink:"/docs/api_rest_4.2.0"},next:{title:"128T 4.4 Release Notes",permalink:"/docs/release_notes_128t_4.4"}},o=[{value:"Release 4.5.1",id:"release-451",children:[{value:"New Features and Improvements",id:"new-features-and-improvements",children:[]},{value:"Issues Fixed",id:"issues-fixed",children:[]}]},{value:"Release 4.5.0",id:"release-450",children:[{value:"New Features and Improvements",id:"new-features-and-improvements-1",children:[]},{value:"Issues Fixed",id:"issues-fixed-1",children:[]}]},{value:"Special Considerations",id:"special-considerations",children:[]},{value:"Caveats",id:"caveats",children:[]}],c={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"release-451"},"Release 4.5.1"),Object(l.b)("h3",{id:"new-features-and-improvements"},"New Features and Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33193"),' "About This System" within the GUI will display additional information if it is a container ("128T-docker") or if installed with a 128T OTP ISO.')),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35319"),' "Managed Reports" (Custom Report factory defaults) are now shipped with the product.')),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36112")," Q-in-Q VLAN stacking")),Object(l.b)("h3",{id:"issues-fixed"},"Issues Fixed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-18807")," Removed a benign error displayed in journal due to imudp module loaded by rsyslog daemon."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Symptoms:"))," The following message can be seen in the journal:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"rsyslogd[1337]: imudp: module loaded, but no listeners defined - no input will be gathered [v8.24.0 try http://www.rsyslog.com/e/2212 ]\n")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-32660")," Log files were only rotated daily which may result in larger than expected log file size for the following: saltmaster, radvd, influxdb_http, t128tuntap.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33471")," Adaptive encryption counters are incorrectly incremented when encryption is disabled and adaptive-encryption is enabled.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-33989"),' Terminating a "validate" command with CTRL-c returns to the PCLI prompt but does not stop the in-progress validation. This prevents subsequent validation attempts until the in-progress validation completes in the background.'),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Symptom:"))," The following can be seen in the PCLI output:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u2716 Validating...\n% Error: Candidate configuration is invalid:\n1. A request of type validate is already in progress. The first request was started 13 seconds ago.\n")),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.1, this issue will resolve itself after the background tasks have completed."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-35111")," ",Object(l.b)("inlineCode",{parentName:"p"},"No active NTP server")," alarm erroneously generated when 128T can successfully reach a provisioned NTP server."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Conditions:"))," When multiple NTP servers are configured, at least one is reachable and at least one is not reachable."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35331")," A custom chart that contains multiple line charts selects the incorrect graph when clicking on the corresponding legend.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35406")," Shutdown race condition may cause improper DHCP server clean up, causing DHCP server to fail on next start of 128T.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35544")," LTE SIM number (ICCID) is absent from the output of ",Object(l.b)("inlineCode",{parentName:"li"},"show device-interface")," on LTE interfaces.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35933")," ",Object(l.b)("inlineCode",{parentName:"li"},"show device-interface")," displays incorrect values for speed and duplex for PPPoE interfaces.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36050")," Race condition on HA Conductor may incorrectly report pending configuration changes when no changes exist."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.1, this issue can be mitigated by applying a configuration change."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36212")," Fixed an issue where some Automated Provisioner actions would fail silently or return an error."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Symptom:"))," The following message can be seen in the journal:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),'"state.highstate" is running as PID 29159 and was started at 2020, Jul 09 14:26:54.384868 with jid 20200709142654384868\n')))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36246")," IMSI and MSISDN are absent from the output from ",Object(l.b)("inlineCode",{parentName:"li"},"show platform")," on systems with LTE interfaces.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36341")," Race condition can occur when receiving a BGP packet destined for the 128T during startup without a fully populated FIB, causing a system fault.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36351")," User without admin privileges cannot change their password.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36358")," Currently downloading version in the asset state would persist after a download has completed."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.1, this issue can be mitigated by restarting the salt-minion service by executing ",Object(l.b)("inlineCode",{parentName:"p"},"systemctl restart salt-minion")," in the Linux shell. If not manually restarted, the salt-minion watchdog will also restart the salt-minion after one hour."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36404")," Highway process fails to start on Ubuntu distribution."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Symptom:"))," 128T running in a container will fail to initialize when the container is running on Ubuntu distributions. The following can be seen within ",Object(l.b)("inlineCode",{parentName:"p"},"highway.log"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"Execute StdErr was \u2018sysctl: cannot stat /proc/sys/net/ipv6/conf/default/optimistic_dad: No such file or directory\u2019\n")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36416")," Navigating to the DNS Config page under a router in GUI edit configuration results in error."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.1, this issue can be mitigated by configuring dns-config via the PCLI."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36536")," Deleting a session-capture filter within the PCLI can cause the highway process to fault.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36537")," Dynamic session-captures are now created with a default session count of 100 instead of unlimited.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36564")," Buffer queue depth allocation algorithm was inefficient causing latency in session setup.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36574")," After an HA interface fail over, a session collision can occur between the recovered flow and an existing reverse flow. The recovered flow does not get set up properly and can cause the highway process to fault upon session expiry."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Conditions:"))," Symmetrical services must be configured that match both forward and reverse flows."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36591")," Using connected route redistribution causes routes to be re-advertised or flapped, resulting in packet loss.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36604")," Debug tables within the GUI do not honor the node selector.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36608")," ",Object(l.b)("inlineCode",{parentName:"li"},"network-interface > management")," is not configurable when ",Object(l.b)("inlineCode",{parentName:"li"},"device-interface > type")," is not explicitly configured.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36632")," Empty Office365 metadata file results in HTTP 400 bad request error.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36638")," Polling SNMP OID 1.3.6.1.2.1.1.2 returns ",Object(l.b)("inlineCode",{parentName:"li"},"NET-SNMP-TC::linux")," instead of ",Object(l.b)("inlineCode",{parentName:"li"},"T128-MIB::t128NetworkingPlatform (1.3.6.1.4.1.45956.1)"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36645")," Bytes converter in the GUI does not handle values larger than Terabyte (TB), leaving value in bytes.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36646")," SVR Savings page automatically refreshes, resetting router selector.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36672")," Deleting all session-capture filters on a ",Object(l.b)("em",{parentName:"li"},"device-interface")," with active traffic can cause the highway process to restart.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36727")," A non-forwarding, external (i.e. management) interface configured in 128T does not obtain a DHCP IP upon disconnecting and reconnecting the cable.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36770")," Salt minion log file was not being properly rotated.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36779")," Clarified Template Import Error Message to properly indicate advanced mode templates cannot be imported in basic mode.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36780")," SNMP Traps are incorrectly sent for routers in maintenance mode when peer path goes down.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36832")," Erroneous restart required alarm raised during configuration change when restart is not needed.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36841")," TCP RST can cause the highway process to fault on a SVR path performing UDP transform.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36850, I95-36851")," An asset's available and downloaded versions are incorrectly cleared when an upgrade or rollback is initiated.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-36866")," When adding an access policy in a service in the GUI, the tenant drop down list comes up empty on the first try."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.1, this issue can be mitigated by canceling out and repeating the operation again. The list will be fully populated on subsequent attempts."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36872")," Azure-based Accelerated Networking Interfaces may fail to reinitialize upon restart of 128T.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36879")," Firewalld zone will not be created for management over forwarding interfaces that are configured with a VLAN.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36891")," Exception thrown in PCLI when ",Object(l.b)("inlineCode",{parentName:"li"},"CMD"),"+",Object(l.b)("inlineCode",{parentName:"li"},"right arrow")," jumping past the end of an auto complete command.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36927")," Race condition can cause a fault in the highway process during session setup and configuration change removes BGP service route path")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37006")," Peer path establishment may fail for waypoint interfaces that use DHCP (e.g., LTE) when upgrading from 4.4.x.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37021, I95-37026")," Configuring overlapping session-types could cause the highway process to ignore the configuration change.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37042")," 128T process ",Object(l.b)("inlineCode",{parentName:"li"},"prank")," journal logs were incorrectly excluded from output of ",Object(l.b)("inlineCode",{parentName:"li"},"save tech-support-info"),".")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37106"),' Initiating a download on an HA router may silently be ignored on one of the nodes if it was in "connected" state.')),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37131")," Unable to perform SNMP query for table indices on 128T OIDs.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37168")," Race condition can cause system fault when creating candidate configuration.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37217")," Reverse metadata was not being updated properly when the service routes were of type ",Object(l.b)("inlineCode",{parentName:"li"},"next-peer"),", resulting in an inability to recover sessions upon node failover.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37220")," 128T deployed behind a NAT may fail to recover a session after a node failure.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-37226")," Output of ",Object(l.b)("inlineCode",{parentName:"li"},"show network-interface")," on non-active HA node may result in empty address for interfaces.")),Object(l.b)("h2",{id:"release-450"},"Release 4.5.0"),Object(l.b)("h3",{id:"new-features-and-improvements-1"},"New Features and Improvements"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-9955")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cli_reference#set-config-encryption"}),"Encryption of 128T Configuration"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-1212, I95-34108")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_templates"}),"Configuration Templates"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-16104")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_management_over_forwarding"}),"Management traffic over forwarding interface"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-22304")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/concepts_pcli#-run-previous-command"}),'Re-run commands in PCLI history with "!"'))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-23898")," Improved feedback on PCLI when invalid arguments are provided to a command")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-28366")," Greatly reduced memory consumption of PCLI, allowing many more concurrent users")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-29043")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_asset_connection_resiliency"}),"Asset Connection Resiliency"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-30332")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/howto_extend_gui_nav"}),"Extensibility of GUI Navigation pane for 3rd party links"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-31405")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/about_svr_savings"}),"SVR Savings Proof Points"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-32783")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cli_reference#show-assets-summary"}),Object(l.b)("inlineCode",{parentName:"a"},"show assets summary")," enhancements"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33174")," Automatic LTE band management per carrier")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33215")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/plugin_m800_watchdog"}),"Audiocodes M800 watchdog"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33351")," Optimizations in FIB data structure allow for 20% additional entries")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33358")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_static_hostname_mapping"}),"Static Hostname Mappings"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33375")," Address latest security vulnerabilities")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33427")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/config_rate_limiting"}),"Per-Service Rate Limiting"))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33776")," ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/cli_reference#show-events-config-commit"}),Object(l.b)("inlineCode",{parentName:"a"},"show config events"))," tracks configuration changes")),Object(l.b)("h3",{id:"issues-fixed-1"},"Issues Fixed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-32594")," Validation allows for mismatched adjacency security-policy with peer network-interface security-policy for cases where multiple network interfaces in a router have the same IP Address. Only the first one is considered for matching inter-router-security policy between the network interface and peer adjacency.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33313")," Add units to ",Object(l.b)("inlineCode",{parentName:"li"},"show device-interface")," output.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-34112")," Rename ",Object(l.b)("inlineCode",{parentName:"li"},"show config events")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"show events config"),".")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-33594")," Changing the ",Object(l.b)("inlineCode",{parentName:"p"},"neighbor-as")," of an existing bgp neighbor prevents it from connecting."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 4.5.0, this issue can be mitigated by restarting the 128T or by removing and recreating the bgp configuration."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35193")," Performing a download of software may fail.\n",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"Conditions"))," 128T connection to the conductor is disconnected or restarted.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35391")," Selecting a specific line within a custom report graph does not always select the metric clicked.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35793")," Large responses from a DNS server may be rejected by 128. When this happens, FQDNs in the configuration remain unresolved.\n",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"Conditions:"))," The following log message can be seen:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"Jun 16 06:09:25.272 [DNS |DNSR] WARN (dnsManagerTP ) Failed to parse Ipv4Host (1) response for edge-global.plcm.vc: Message too long\n")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35799")," When a dynamic route is removed that exactly matches the prefix of a configured service, the route is removed from the RIB but it may remain in the FIB and still be used for establishing new sessions.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-35873,I95-35679")," Asset stuck in a connected state as a result of a corrupted linux rpmdb. The issue requires the system be updated to the 128T-installer version 2.6.1 (see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/release_notes_128t_installer_2.6#release-261"}),"IN-267"),". If the conductor is used to upgrade systems, the latest installer will be updated from the repository being used. If the systems do not have access to the 128T public repositories, the repository being used should be updated with the 128T-installer 2.6.1 version. With the correction of this issue, the PCLI command ",Object(l.b)("inlineCode",{parentName:"p"},"send command yum-cache-refresh")," has been updated to perform the rpmdb repair if the rpmdb is corrupted."),Object(l.b)("p",{parentName:"li"},"Until the system is upgraded to 128T 4.5.0 and 128T-installer 2.6.1, the issue can be mitigated by running the following linux commands:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"rm -f /var/lib/rpm/__*\nrpm --rebuilddb\n")))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35935")," Configuring the same value for ",Object(l.b)("inlineCode",{parentName:"li"},"router > conductor-address")," on different routers will generate invalid configuration.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36012")," ",Object(l.b)("inlineCode",{parentName:"li"},"show device-interface")," displays incorrect values for speed and duplex for LTE interfaces.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36109")," Sessions may not reestablish properly on a fail-over between different routers to the same destination router (e.g., Session originates on R1 to R2. Later, the same session fails over to traverse R3 to R2.)")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36146")," Non-PCLI commands, such as pagination responses, are incorrectly stored in command history.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36283")," The 128T router asset state is stuck on its current state.\n",Object(l.b)("em",{parentName:"li"},Object(l.b)("strong",{parentName:"em"},"Conditions:"))," The following log message can be seen:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"TypeError: heap argument must be a list\n")),"Until the system is upgraded to 4.5.0, this issue can be mitigated by restarting the salt-minion service by executing ",Object(l.b)("inlineCode",{parentName:"li"},"systemctl restart salt-minion")," on the Linux shell. If not manually restarted, the salt-minion watchdog will also restart the salt-minion after one hour.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36356")," Loading a configuration that changes the BGP graceful-restart restart-time may cause a highway process crash if a subsequent graceful-restart timeout occurs.")),Object(l.b)("h2",{id:"special-considerations"},"Special Considerations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-33004")," RoadRunner Removed\nThe RoadRunner process collected anonymous information from the router and sent it to 128 Technology for storage and analysis. This helped inform and allows 128 Technology to support and improve the 128 Networking Platform. The anonymous data collection tool RoadRunner has been removed from the product.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-35629")," The threshold for broadcast announcement for concurrent PCLI sessions has been increased from 4 to 10 as a result of I95-28366.")),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"I95-36525")," TLS 1.0 is no longer supported.")),Object(l.b)("h2",{id:"caveats"},"Caveats"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-34941")," ",Object(l.b)("em",{parentName:"p"},"nodejs")," process can segfault during the upgrade of the 128T."),Object(l.b)("p",{parentName:"li"},Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Corrective Action:"))," No action required. The webserver will immediately restart."))),Object(l.b)("hr",null),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"I95-33560")," When upgrading a HA conductor to version 4.4.0 or later there is a compatibility issue due to an upgrade of the asset provisioning software. This results in a reported asset error that will persist until the two nodes are upgraded to the same version."),Object(l.b)("p",{parentName:"li"},"  ",Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Symptom:"))," This error is seen during the upgrade of an HA conductor pair to version 4.4.0 or later. An upgrade of a single standalone conductor node will not see this error. The following error will be reported by the node running software version earlier than 4.4.0:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\"128T highstate: [\"Rendering SLS '128T:reverse_ssh' failed: Jinja variable 'dict object' has no attribute 'iteritems'\"]\"\n")),Object(l.b)("p",{parentName:"li"},"  This error can be viewed by running the following PCLI command from either node: ",Object(l.b)("inlineCode",{parentName:"p"},"show assets <asset-id>"),". Where asset-id is the asset-id of the node running pre 4.4.0 version that has not yet been upgraded."),Object(l.b)("p",{parentName:"li"},"  ",Object(l.b)("em",{parentName:"p"},Object(l.b)("strong",{parentName:"em"},"Corrective Action:"))," This error is transient and will only persist for the duration of the upgrade. The error will not self-correct. Continue to upgrade the second conductor node. After upgrade, verify that there are no asset state errors."))),Object(l.b)("hr",null))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,O=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);