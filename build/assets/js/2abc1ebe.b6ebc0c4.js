"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[9503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i=n.p+"assets/images/state-view-actions-10d9556585c77dfc1a22e4e6776e0164.png",o={sidebar_position:1},s="What is VelX?",l={unversionedId:"velx/intro",id:"velx/intro",title:"What is VelX?",description:"VelX is an event driven proxy state management pattern for Velte applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.",source:"@site/docs/velx/intro.mdx",sourceDirName:"velx",slug:"/velx/intro",permalink:"/next/velx/intro",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/velx/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VelX - State Management",permalink:"/next/category/velx---state-management"},next:{title:"Getting Started",permalink:"/next/velx/get-started"}},p={},c=[{value:"What is a &quot;State Management Pattern&quot;?",id:"what-is-a-state-management-pattern",level:2},{value:"Publish / Subscribe Pattern",id:"publish--subscribe-pattern",level:2},{value:"When Should I Use It?",id:"when-should-i-use-it",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-velx"},"What is VelX?"),(0,r.kt)("p",null,"VelX is an ",(0,r.kt)("strong",{parentName:"p"},"event driven proxy state management pattern")," for Velte applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion."),(0,r.kt)("h2",{id:"what-is-a-state-management-pattern"},'What is a "State Management Pattern"?'),(0,r.kt)("p",null,"Let's start with a simple Velte counter app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="global.js"',title:'"global.js"'},"import { velX } from \"velte\"\n\nconst global = new velX({\n    state: {\n        count : 0\n    },\n    actions : {\n        increment(context) {\n            context.commit('increment')\n        }\n    },\n    mutations: {\n        increment(state) {\n            state.count = state.count + 1\n            return state\n        }\n    }\n})\n\nexport default global\n")),(0,r.kt)("p",null,"It is a self-contained app with the following parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"state"),", the source of truth that drives our app;"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"view"),", a declarative mapping of the ",(0,r.kt)("strong",{parentName:"li"},"state"),";"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"actions"),", the possible ways the state could change through mutations in reaction to user inputs from the ",(0,r.kt)("strong",{parentName:"li"},"view"),".")),(0,r.kt)("p",null,'This is a simple representation of the concept of "one-way data flow":'),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:i,style:{width:300}})),(0,r.kt)("p",null,"However, the simplicity quickly breaks down when we have ",(0,r.kt)("strong",{parentName:"p"},"multiple components that share a common state"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple views may depend on the same piece of state."),(0,r.kt)("li",{parentName:"ul"},"Actions from different views may need to commit mutatations on the same piece of state.")),(0,r.kt)("p",null,"For problem one, passing props can be tedious for deeply nested components, and simply doesn't work for sibling components. For problem two, we often find ourselves resorting to solutions such as reaching for direct parent/child instance references or trying to mutate and synchronize multiple copies of the state via events. Both of these patterns are brittle and quickly lead to unmaintainable code."),(0,r.kt)("p",null,'So why don\'t we extract the shared state out of the components, and manage it in a global singleton? With this, our component tree becomes a big "view", and any component can access the state or trigger actions, no matter where they are in the tree!'),(0,r.kt)("p",null,"By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability."),(0,r.kt)("p",null,"This is the basic idea behind VelX, is inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://vuex.vuejs.org/"},"Vuex"),", ",(0,r.kt)("a",{parentName:"p",href:"http://redux.js.org/"},"Redux")," and ",(0,r.kt)("a",{parentName:"p",href:"https://guide.elm-lang.org/architecture/"},"The Elm Architecture"),". Unlike the other patterns."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"velx",src:n(5815).Z,width:"1244",height:"756"}))),(0,r.kt)("h2",{id:"publish--subscribe-pattern"},"Publish / Subscribe Pattern"),(0,r.kt)("p",null,"VelX is event driven, and was built with the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/previous-versions/msdn10/hh201955(v=msdn.10)"},"Pub/Sub pattern")," under the hood.\nIt's fairly simple, a VelX instance, contains two main methods, one that will call our actions named ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch")," and another that will call our mutations called ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),".\nThen on state change, an Event called ",(0,r.kt)("inlineCode",{parentName:"p"},"stateChange")," will be published to our entire application, and any Velte component subscribed to that named event would re-evaluate, and trigger associated DOM updates.\nThis is done for performance optimizations, so static components would run unnessasary evaluations."),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When Should I Use It?"),(0,r.kt)("p",null,"VelX helps us deal with shared state management with the cost of more concepts and boilerplate. It's a trade-off between short term and long term productivity."),(0,r.kt)("p",null,"If you've never built a large-scale SPA and jump right into using VelX, it may feel verbose and daunting. That's perfectly normal - if your app is simple, you will most likely be fine without VelX. A simple ",(0,r.kt)("a",{parentName:"p",href:"/next/misc/states"},"store pattern")," may be all you need. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better handle state outside of your Velte components, and VelX will be a no brainer for you."))}d.isMDXComponent=!0},5815:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/velx-79bd3df9342b0c50e2283740be0f33d3.jpg"}}]);