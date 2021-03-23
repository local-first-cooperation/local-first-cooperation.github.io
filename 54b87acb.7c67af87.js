(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=f(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(n),m=o,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var o=n(3),r=n(7),i=(n(0),n(124)),a={id:"information-flow",title:"Design the Flow of Information",sidebar_label:"Flow of Information"},c={unversionedId:"techniques/information-flow",id:"techniques/information-flow",isDocsHomePage:!1,title:"Design the Flow of Information",description:"Cooperation is crucially enabled by the flow of information, and we know from personal experience that the quality of the cooperation vitally depends on the quality and suitability of the received information.",source:"@site/docs/techniques/information-flow.md",slug:"/techniques/information-flow",permalink:"/docs/techniques/information-flow",editUrl:"https://github.com/local-first-cooperation/local-first-cooperation.github.io/edit/master/docs/techniques/information-flow.md",version:"current",sidebar_label:"Flow of Information",sidebar:"docsSidebar",previous:{title:"Communicate Facts",permalink:"/docs/techniques/communicate-facts"},next:{title:"Use-cases",permalink:"/docs/use-cases/overview"}},s=[],l={toc:s};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Cooperation is crucially enabled by the flow of information, and we know from personal experience that the quality of the cooperation vitally depends on the quality and suitability of the received information.\nLocal-first applications are therefore designed foremost in terms of the information flows they ingest and emit.\nA complete system of many applications running on a network of edge devices will need to be designed primarily on this level as well, taking applications of known behaviour and composing them into a larger whole."),Object(i.b)("p",null,"To this end, local-first cooperation puts emphasis not only on the design but also on the documentation and formal description of its information flows.\nStrictly described and enforced communication protocols are necessary to ensure the successful collaboration between the different autonomous pieces.\nThis autonomy is not only meant in an operational sense but also in the organisational sense of collaboration between applications written by different authors."),Object(i.b)("p",null,"Formal methods are more established in terms of data structure with schema languages like ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON schema"),".\nIn terms of communication structure this is still an active field of research on so-called behavioural types like ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://groups.inf.ed.ac.uk/abcd/session-implementations.html"}),"session types"),"."))}f.isMDXComponent=!0}}]);