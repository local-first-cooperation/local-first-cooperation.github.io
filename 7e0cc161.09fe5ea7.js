(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(124)),i={id:"executive-summary",title:"Executive Summary"},c={unversionedId:"about/executive-summary",id:"about/executive-summary",isDocsHomePage:!1,title:"Executive Summary",description:"Humankind is the most resilient higher life form on this planet, which stems from two main characteristics: highly adaptive and tenacious individuals who are capable of complex and abstract cooperation. Our usage of computers has added to our capabilities but has also made us more vulnerable by centralisation, creating single points of failure. As we are mirroring our societies\u2019 high-level cooperation in computer networks, we also need to mirror our natural resilience in our software designs to take the next step forward, otherwise we will fail. This resilience needs to be woven into the fabric of all our digital interactions, from manufacturing of goods over healthcare, economic services, and public authority to social networks.",source:"@site/docs/about/executive-summary.md",slug:"/about/executive-summary",permalink:"/docs/about/executive-summary",editUrl:"https://github.com/local-first-cooperation/local-first-cooperation.github.io/edit/master/docs/about/executive-summary.md",version:"current"},s=[],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Humankind is the most resilient higher life form on this planet, which stems from two main characteristics: highly adaptive and tenacious individuals who are capable of complex and abstract cooperation. Our usage of computers has added to our capabilities but has also made us more vulnerable by centralisation, creating single points of failure. As we are mirroring our societies\u2019 high-level cooperation in computer networks, we also need to mirror our natural resilience in our software designs to take the next step forward, otherwise we will fail. This resilience needs to be woven into the fabric of all our digital interactions, from manufacturing of goods over healthcare, economic services, and public authority to social networks."),Object(a.b)("p",null,"We call this design goal local-first cooperation, complementing cloud native architecture where the need for resilience outweighs the economies of scale. We derive some core principles on which such software systems are built:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"require only local communication for local interactions\u200a\u2014\u200agoing via a central message exchange always adds potential for failure"),Object(a.b)("li",{parentName:"ul"},"allow each part to act autonomously, with decisions being taken on the local computing device"),Object(a.b)("li",{parentName:"ul"},"construct the parts for cooperation between them, solve larger problems using multiple devices working together"),Object(a.b)("li",{parentName:"ul"},"accept uncertainty and make decisions based on local but possibly incomplete information"),Object(a.b)("li",{parentName:"ul"},"expect dynamic changes in the network of neighbouring and cooperating parts")),Object(a.b)("p",null,"Upon this basis we build more complex interactions, forming hierarchical behaviour and covering longer distances in space and time. We connect such local applications with centralised services like global blockchains or the cloud, but these connections cannot be required for local interactions that must always work."),Object(a.b)("p",null,"Some further restrictions follow from the principles, most notably that we can only employ consensus (i.e. have a strongly consistent data model) when we can afford the latency and fallibility that come with it. The principles also give guidance in terms of software architecture, namely that data structures need to support evolution since we store facts for a long time, and that the flow of information is a primary design target. Finally, implementing autonomous parts is fostered by communicating events rather than state; this allows each part to independently derive and structure the information it needs."))}u.isMDXComponent=!0}}]);