(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(124)),o={id:"hierarchical-systems",title:"Hierarchical Systems to Cover Space and Time",sidebar_label:"Hierarchical Systems"},c={unversionedId:"techniques/hierarchical-systems",id:"techniques/hierarchical-systems",isDocsHomePage:!1,title:"Hierarchical Systems to Cover Space and Time",description:"Given the principles of local communication and autonomy, the reach of any single device is limited both in space and time.",source:"@site/docs/techniques/hierarchical-systems.md",slug:"/techniques/hierarchical-systems",permalink:"/docs/techniques/hierarchical-systems",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/techniques/hierarchical-systems.md",version:"current",sidebar_label:"Hierarchical Systems",sidebar:"docsSidebar",previous:{title:"Foresee Dynamic Changes in the Network Neighbourhood",permalink:"/docs/principles/foresee-network-dynamics"},next:{title:"Employ Scoped Consensus only Where Required",permalink:"/docs/techniques/scoped-consensus"}},s=[],l={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Given the principles of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/principles/communicate-locally"}),"local communication")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/principles/autonomy"}),"autonomy"),", the reach of any single device is limited both in space and time.\nIt cannot directly communicate with other devices that are too far away, and the facts it records will be lost and forgotten once the device ceases to function."),Object(i.b)("p",null,"These limitations can be overcome again by cooperation, by forming larger structures of multiple devices that achieve something unattainable by any single device.\nFor communication, the devices may form a mesh network with appropriate routing strategies like hierarchical overlay networks.\nFor durable storage, the devices may form a content-addressed storage network like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/BitTorrent"}),"BitTorrent")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/InterPlanetary_File_System"}),"IPFS"),".\nCombine these with the ability to physically move devices around, e.g. between Earth and Mars, and the distances that can be covered in space and time become literally astronomical."),Object(i.b)("p",null,"Besides these infrastructure concerns, cooperation on large tasks requires the responsibilities to be split up, because no single device can perform all necessary computations.\nTake as an example a fully automated manufacturing plant with thousands of individual machines, robots, vehicles, sensors, etc.\nThe function of allocating vehicles to transport goods between the machines and the warehouse is a complex task that cannot practically be performed by each logistics vehicles individually.\nIt is therefore necessary to install a hierarchy, where a group of devices keep an eye on the overall material flows within the factory and partition the problem into vehicle groups and their associated traffic routes.\nEach vehicle then only needs to respond to a limited subset of material requests and coordinate with a limited subset of other vehicles to get their part of the job done."))}p.isMDXComponent=!0}}]);