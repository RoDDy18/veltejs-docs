"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[7258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:4},o="Misc",l={unversionedId:"api/misc",id:"api/misc",title:"Misc",description:"render()",source:"@site/docs/api/misc.md",sourceDirName:"api",slug:"/api/misc",permalink:"/next/api/misc",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/api/misc.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Reactivity",permalink:"/next/api/reactivity"},next:{title:"VelX",permalink:"/next/api/velx"}},s={},c=[{value:"render()",id:"render",level:3},{value:"PubSub",id:"pubsub",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"misc"},"Misc"),(0,i.kt)("h3",{id:"render"},"render()"),(0,i.kt)("p",null,"Inherited from ",(0,i.kt)("inlineCode",{parentName:"p"},"VelteComponent"),", returns velte elements, arrays, string, numbers, booleans, null or undefined."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"render() : void\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For details, ",(0,i.kt)("a",{parentName:"li",href:"/next/components/basics#render--inherited"},"see guide here"))),(0,i.kt)("h3",{id:"pubsub"},"PubSub"),(0,i.kt)("p",null,"Publish / Subscription base class which all events inherits functionality from. ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," to publish events and ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," to subscribe to events."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class PubSub {\n    events: {};\n    subscribe(event: propertyKey, callback?: () => void): any\n    publish(event: propertyKey, data?: {}): any\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For details, ",(0,i.kt)("a",{parentName:"li",href:"/next/components/basics#render--inherited"},"see guide here"))))}d.isMDXComponent=!0}}]);