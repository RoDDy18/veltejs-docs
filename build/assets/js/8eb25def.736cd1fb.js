"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[8610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},s="State",l={unversionedId:"velx/core-concepts/state",id:"velx/core-concepts/state",title:"State",description:'VelX uses a single state tree per instance - that is, this single object contains all your application level state and serves as the "single source of truth" per instance. This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.',source:"@site/docs/velx/core-concepts/state.md",sourceDirName:"velx/core-concepts",slug:"/velx/core-concepts/state",permalink:"/next/velx/core-concepts/state",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/velx/core-concepts/state.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core Concepts",permalink:"/next/category/core-concepts"},next:{title:"Actions",permalink:"/next/velx/core-concepts/actions"}},i={},c=[{value:"Getting VelX State into Velte Components",id:"getting-velx-state-into-velte-components",level:2},{value:"Subscribing Velte Components to the Store",id:"subscribing-velte-components-to-the-store",level:2},{value:"Components Can Still Have Local State",id:"components-can-still-have-local-state",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state"},"State"),(0,a.kt)("p",null,'VelX uses a single state tree per instance - that is, this single object contains all your application level state and serves as the "single source of truth" per instance. This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.'),(0,a.kt)("p",null,"To define a state, we need to first create a VelX instance, then we define a ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," object. our states would then live inside this object as ",(0,a.kt)("inlineCode",{parentName:"p"},"key:value")," pairs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { velX } from "velte"\n\nconst store = new velX({\n    state: {\n        count : 0\n    }\n})\n')),(0,a.kt)("h2",{id:"getting-velx-state-into-velte-components"},"Getting VelX State into Velte Components"),(0,a.kt)("p",null,'So how do we display state inside the store in our Velte components? Since VelX stores are reactive, the simplest way to "retrieve" state from it is simply accessing the state from the store instance.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.jsx"',title:'"Counter.jsx"'},'import store from "../store/myStore"\n\nconst Counter =  ({})=>{\n    return (<p>{store.state.count}</p>)\n}\n')),(0,a.kt)("h2",{id:"subscribing-velte-components-to-the-store"},"Subscribing Velte Components to the Store"),(0,a.kt)("p",null,"For performance optimizations, Velte components don't automatically listen to store changes even though they are accessing within the component. They have to suscribe to the store instance, in our case ",(0,a.kt)("inlineCode",{parentName:"p"},"store")),(0,a.kt)("p",null,"To suscribe to the store instance, when ",(0,a.kt)("a",{parentName:"p",href:"/next/components/basics#calling-components"},"calling the component"),", pass in ",(0,a.kt)("inlineCode",{parentName:"p"},"$store")," as a trait to the component with the value of the store instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Counter $store={store}/>\n")),(0,a.kt)("p",null,"Now, whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"store.state.count")," changes, it will cause the component to re-evaluate, and trigger associated DOM updates."),(0,a.kt)("p",null,"However, it is recommended to subscribe to the VelX store instance when calling the root component, instead of individual components because:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unnecessary subscriptions would have an impact on performance, when scaling your application"),(0,a.kt)("li",{parentName:"ol"},"All child components accessing state for the store also gets re-evaluated on state change")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"//don't do this\n<div>\n    <Counter $store={store}/>\n    <AnotherComponent $store={store}/>\n</div>\n")),(0,a.kt)("p",null,"Here's an example of subscribing to the VelX store instance on calling the root component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Home.jsx"',title:'"Home.jsx"'},'import { VelteElement } from "velte"\nimport { Counter } from "../components/Counter"\n\nconst Home = ({}) =>{\n    return (\n        <div>\n            <h1>Home Page</h1>\n            <Counter/>\n            <AnotherComponent/>\n        </div>\n    )\n}\n\nexport default Home\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.jsx"',title:'"App.jsx"'},'import { VelteRender } from "velte"\nimport Home from "./routes/home"\nimport store from "./store/myStore"\n\nVelteRender(<Home $store={store}/>, document.getElementById("app"))\n\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"<AnotherComponent/>")," also accesses data from the store, it would be re-evaluated automatically."),(0,a.kt)("h2",{id:"components-can-still-have-local-state"},"Components Can Still Have Local State"),(0,a.kt)("p",null,"Using VelX doesn't mean you should put all the state in VelX. Although putting more state into VelX makes your state mutations more explicit and debuggable, sometimes it could also make the code more verbose and indirect. If a piece of state strictly belongs to a single component, it could be just fine leaving it as local state. You should weigh the trade-offs and make decisions that fit the development needs of your app."))}m.isMDXComponent=!0}}]);