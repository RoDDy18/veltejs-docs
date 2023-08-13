"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[5338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},o="Reactivity",s={unversionedId:"essentials/reactivity",id:"essentials/reactivity",title:"Reactivity",description:"velte's reactivity comes from reconcile() in @velte/dom which takes in the oldVnode and newVnode  to render after diffing this makes velte intelligently choose what parts of your components needs to be re-rendered, which out re-rendering everything.",source:"@site/docs/essentials/reactivity.md",sourceDirName:"essentials",slug:"/essentials/reactivity",permalink:"/next/essentials/reactivity",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/essentials/reactivity.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Velte's Syntax",permalink:"/next/essentials/syntax"},next:{title:"Traits",permalink:"/next/essentials/traits"}},l={},c=[{value:"Reactivity on Class Components",id:"reactivity-on-class-components",level:2},{value:"<code>this.setState()</code>",id:"thissetstate",level:3},{value:"<code>this.reactToState()</code>",id:"thisreacttostate",level:3},{value:"Reactivity with VelX Stores",id:"reactivity-with-velx-stores",level:2},{value:"Reactivity with createState",id:"reactivity-with-createstate",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reactivity"},"Reactivity"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," velte's reactivity comes from ",(0,r.kt)("inlineCode",{parentName:"p"},"reconcile()")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"@velte/dom")," which takes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"oldVnode")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"newVnode"),"  to render after ",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/explain-dom-diffing/"},"diffing")," this makes velte intelligently choose what parts of your components needs to be re-rendered, which out re-rendering everything.")),(0,r.kt)("h2",{id:"reactivity-on-class-components"},"Reactivity on Class Components"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," Before going through this, you should understand how velte class components works. ")),(0,r.kt)("h3",{id:"thissetstate"},(0,r.kt)("inlineCode",{parentName:"h3"},"this.setState()")),(0,r.kt)("p",null,"The responsibility of how to update the DOM whenever you call ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState()")," lies in ",(0,r.kt)("inlineCode",{parentName:"p"},"@velte/dom")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"@velte/core"),". When ",(0,r.kt)("inlineCode",{parentName:"p"},"this.setState()")," is called, velte calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Velte.__updater()")," under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.setState({count: this.state.count + 1})\n")),(0,r.kt)("p",null,"The value of ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," is updated and re-rendered where called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"render(){\n    return <p>{this.state.count}</p>\n}\n")),(0,r.kt)("h3",{id:"thisreacttostate"},(0,r.kt)("inlineCode",{parentName:"h3"},"this.reactToState()")),(0,r.kt)("p",null,"What if you want to reactively re-render a property's change not in ",(0,r.kt)("inlineCode",{parentName:"p"},"this.state")," or that isn't natively reactive?\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"this.reactToState()")," on property change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="component.jsx"',title:'"component.jsx"'},"//global stores are more complicated than this\n//non reactive data\nconst globalStore = 1\n\n...\nrender(){\n    const onChange = ()=> {\n        globalStore = globalStore + 1\n        this.reactToState() //this would call Velte.__updater() to re-render change\n    }\n    return (\n        <p>{globalStore}</p>\n        <button v-on:click={this.onChange}>change</button>\n    )\n}\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," is called before accessing the different methods because we use ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," to reference the current component instance.")),(0,r.kt)("h2",{id:"reactivity-with-velx-stores"},"Reactivity with VelX Stores"),(0,r.kt)("p",null,"For performance optimizations, Velte components don't automatically listen to store changes even though they are accessing within the component. They have to suscribe to the store instance."),(0,r.kt)("p",null,"To suscribe to the store instance, when ",(0,r.kt)("a",{parentName:"p",href:"/next/components/basics#calling-components"},"calling the component"),", pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"$store")," as a trait to the component with the value of the store instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Component $store={store}/>\n")),(0,r.kt)("p",null,"For details, ",(0,r.kt)("a",{parentName:"p",href:"/next/velx/intro"},"see guide here")),(0,r.kt)("h2",{id:"reactivity-with-createstate"},"Reactivity with createState"),(0,r.kt)("p",null,"States are the cornerstone of reactivity in Velte. They contain values that change over time; when you change a state's value, it automatically updates anything that uses it."),(0,r.kt)("p",null,"To create a state, let's import ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"velte")," and call it from our Counter component like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [count, setCount] = createState(0)\n")),(0,r.kt)("p",null,"The argument passed to the create call is the initial value, and the return value is an array with two functions, a getter and a setter. By ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"destructuring"),", we can name these functions whatever we like. In this case, we name the getter ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," and the setter ",(0,r.kt)("inlineCode",{parentName:"p"},"setCount"),"."),(0,r.kt)("p",null,"It is important to notice that the first returned value is a getter (a function returning the current value) and not the value itself. This is because the framework needs to keep track of where that signal is read so it can update things accordingly."),(0,r.kt)("p",null,"In this lesson, we'll use JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterval")," function to create a periodically incrementing counter. We can update our count state every second by adding this code to our Counter component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setInterval(() => setCount(count() + 1), 1000)\n")),(0,r.kt)("p",null,"Each tick, we read the previous count, add 1, and set the new value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return <div>Count: {count()}</div>\n")),(0,r.kt)("p",null,"To suscribe to a state change, when ",(0,r.kt)("a",{parentName:"p",href:"/next/components/basics#calling-components"},"calling the component"),", pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"$state")," as a trait to the component with the value of the store instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<PureComponent $state/>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Reactivity with ",(0,r.kt)("inlineCode",{parentName:"p"},"createState")," is under development and is currently ",(0,r.kt)("inlineCode",{parentName:"p"},"experimental"))))}u.isMDXComponent=!0}}]);