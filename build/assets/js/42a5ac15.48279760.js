"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[5677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function A(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=A(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,u=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return t?o.createElement(u,r(r({ref:n},p),{},{components:t})):o.createElement(u,r({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=d;var A={};for(var i in n)hasOwnProperty.call(n,i)&&(A[i]=n[i]);A.originalType=e,A[c]="string"==typeof e?e:a,r[1]=A;for(var l=2;l<s;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>A,toc:()=>l});var o=t(7462),a=(t(7294),t(3905));const s={sidebar_position:1},r="Velte components",A={unversionedId:"components/basics",id:"version-1.0.4/components/basics",title:"Velte components",description:"You should always import VelteElement and VelteComponent from velte when using velte components.",source:"@site/versioned_docs/version-1.0.4/components/basics.md",sourceDirName:"components",slug:"/components/basics",permalink:"/1.0.4/components/basics",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.0.4/components/basics.md",tags:[],version:"1.0.4",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/1.0.4/category/components"},next:{title:"Component Traits",permalink:"/1.0.4/components/traits"}},i={},l=[{value:"Calling Components",id:"calling-components",level:2},{value:"Functional Components",id:"functional-components",level:2},{value:"Class Components",id:"class-components",level:2},{value:"Inherited Functionality",id:"inherited-functionality",level:2},{value:"<code>constructor()</code>",id:"constructor",level:3},{value:"<code>render()</code>",id:"render",level:3},{value:"<code>VelteCreated()</code>",id:"veltecreated",level:3},{value:"<code>VelteMounted()</code>",id:"veltemounted",level:3},{value:"<code>VelteUpdated()</code>",id:"velteupdated",level:3},{value:"<code>VelteDestroyed()</code>",id:"veltedestroyed",level:3},{value:"Component States",id:"component-states",level:2},{value:"<code>setState()</code>",id:"setstate",level:3},{value:"Component Lifecycle Hooks",id:"component-lifecycle-hooks",level:2},{value:"Component Methods",id:"component-methods",level:2},{value:"Method Parameters and Arguments",id:"method-parameters-and-arguments",level:3},{value:"Component Template",id:"component-template",level:2},{value:"Component Nesting",id:"component-nesting",level:2}],p={toc:l},c="wrapper";function m(e){let{components:n,...s}=e;return(0,a.kt)(c,(0,o.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"velte-components"},"Velte components"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"}," You should always import ",(0,a.kt)("inlineCode",{parentName:"p"},"VelteElement")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"VelteComponent")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"velte")," when using velte components.")),(0,a.kt)("p",null,"Comonents allows us to split the UI into independent and reusable pieces. It's common for an app to be organised into a tree of nested components.",(0,a.kt)("br",null),"\nVelte supports ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/components/basics#functional-components"},(0,a.kt)("inlineCode",{parentName:"a"},"function components"))," and ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/components/basics#class-components"},(0,a.kt)("inlineCode",{parentName:"a"},"class components"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component Tree",src:t(568).Z,width:"911",height:"228"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," In velte, every component is made up of custom content and functionality.")),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Component",src:t(5307).Z,width:"160",height:"216"}))),(0,a.kt)("p",null,"From the diagram above, every velte component is made up of ",(0,a.kt)("inlineCode",{parentName:"p"},"states"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"methods"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"templates")),(0,a.kt)("h2",{id:"calling-components"},"Calling Components"),(0,a.kt)("p",null,"Calling components is just like calling a HTML element like ",(0,a.kt)("inlineCode",{parentName:"p"},"<img>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const App = <MyComponent/>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyComponent")," is the name of the component."),(0,a.kt)("h2",{id:"functional-components"},"Functional Components"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Functional Component",src:t(5675).Z,width:"2380",height:"1156"}))),(0,a.kt)("p",null,"These components are created with ",(0,a.kt)("inlineCode",{parentName:"p"},"functions"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="functionComponent.js"',title:'"functionComponent.js"'},"function functionComponent({name}){\n    return (\n        <div>\n            <h1>I can render stuff too...</h1>\n            <p>Hello there, {name}</p>\n            <AnotherComponent/>\n        </div>\n    )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="anotherFunctionComponent.js"',title:'"anotherFunctionComponent.js"'},"const anotherFunctionComponent = ({age})=>{\n    return (\n        <div>\n            <h1>I can also render stuff too...</h1>\n            <p>Your age is {age}</p>\n            <functionComponent/>\n        </div>\n    )\n}\n")),(0,a.kt)("p",null,"Function components only accept ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/traits#data-trait"},"traits")," and return JSX for rendering. ",(0,a.kt)("br",null),"They can be used as ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/application#the-root-component"},(0,a.kt)("inlineCode",{parentName:"a"},"root components"))),(0,a.kt)("h2",{id:"class-components"},"Class Components"),(0,a.kt)("p",{align:"center"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Class Component",src:t(608).Z,width:"1190",height:"936"}))),(0,a.kt)("p",null,"These components extends ",(0,a.kt)("inlineCode",{parentName:"p"},"VelteComponent"),", so they inherit all the methods of the base ",(0,a.kt)("inlineCode",{parentName:"p"},"VelteComponent")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"velte"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"}," class component names must always start with a capital letter, its still a class afterall.")),(0,a.kt)("h2",{id:"inherited-functionality"},"Inherited Functionality"),(0,a.kt)("h3",{id:"constructor"},(0,a.kt)("inlineCode",{parentName:"h3"},"constructor()")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor()")," is powerful in velte components.",(0,a.kt)("br",null),"\nThey can define ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/components/basics#component-states"},(0,a.kt)("inlineCode",{parentName:"a"},"states"))," and component ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/components/basics#component-methods"},(0,a.kt)("inlineCode",{parentName:"a"},"methods")),". They also add ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/traits#data-trait"},(0,a.kt)("inlineCode",{parentName:"a"},"data traits"))," functionality to class components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside class component\n...\nconstructor(){\n    //define states\n    this.state = {\n        data : 0\n    }\n    //define methods\n    this.increment = () =>{\n        this.setState({count: this.state.count + 1})\n    }\n}\n...\n")),(0,a.kt)("h3",{id:"render"},(0,a.kt)("inlineCode",{parentName:"h3"},"render()")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method inherits from ",(0,a.kt)("inlineCode",{parentName:"p"},"VelteComponent"),".",(0,a.kt)("br",null),"\nThis method returns JSX to be rendered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside class component\n...\nrender(){\n    return(\n        <p>Hello velte</p>\n    )\n}\n\n")),(0,a.kt)("h3",{id:"veltecreated"},(0,a.kt)("inlineCode",{parentName:"h3"},"VelteCreated()")),(0,a.kt)("p",null,"For details, ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/hooks#veltecreated"},"see guide here")),(0,a.kt)("h3",{id:"veltemounted"},(0,a.kt)("inlineCode",{parentName:"h3"},"VelteMounted()")),(0,a.kt)("p",null,"For details, ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/hooks#veltemounted"},"see guide here")),(0,a.kt)("h3",{id:"velteupdated"},(0,a.kt)("inlineCode",{parentName:"h3"},"VelteUpdated()")),(0,a.kt)("p",null,"For details, ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/hooks#velteupdated"},"see guide here")),(0,a.kt)("h3",{id:"veltedestroyed"},(0,a.kt)("inlineCode",{parentName:"h3"},"VelteDestroyed()")),(0,a.kt)("p",null,"For details, ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/hooks#veltedestroyed"},"see guide here")),(0,a.kt)("h2",{id:"component-states"},"Component States"),(0,a.kt)("p",null,"How do we store data in a component? with ",(0,a.kt)("inlineCode",{parentName:"p"},"states"),"!!!",(0,a.kt)("br",null),"\nstates help store data for use in a component, this can be for displaying information or using the data to perform calculations or sending requests to servers..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside class component constructor\n...\nthis.state = {\n    data : value\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside class component\n...\nstate = {\n    data : value\n}\n")),(0,a.kt)("p",null,"Think of states like a local store for variables, where ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," is the name of the variable and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is the variable value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},'//inside class component constructor\n...\nthis.state = {\n    name : "Joe",\n    age : 23\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},'//inside class component\n...\nstate = {\n    name : "Joe",\n    age : 23\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," ",(0,a.kt)("inlineCode",{parentName:"p"},"states")," can also contain objects.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},'//inside class component constructor\n...\nthis.state = {\n    person : {name : "Joe", age : 23}\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},'//inside class component\n...\nstate = {\n    person : {name : "Joe", age : 23}\n}\n')),(0,a.kt)("h3",{id:"setstate"},(0,a.kt)("inlineCode",{parentName:"h3"},"setState()")),(0,a.kt)("p",null,"To update a state variable we use ",(0,a.kt)("inlineCode",{parentName:"p"},"setState()")," method inside class components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Counter.js"',title:'"Counter.js"'},"export class Counter extends VelteComponent{\n    state = {\n        count : 0\n    }\n\n    increment = () =>{\n         this.setState({count: this.state.count + 1})\n    }\n\n    render(){\n        return(\n            <div>\n                <p>{this.state.count}</p>\n                <button v-on:click = {this.increment}>Increment</button>\n            <div>\n        )\n    }\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"this.state.count"),' accesses the count variable inside the "state store".')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," is called before accessing the different methods because we use ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," to reference the current component instance.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," For scalability, your components would live in another folder ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," if using a ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/get-started#starter-kit"},(0,a.kt)("inlineCode",{parentName:"a"},"starter-kit")),". You would have to export the component by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," keyword.")),(0,a.kt)("h2",{id:"component-lifecycle-hooks"},"Component Lifecycle Hooks"),(0,a.kt)("p",null,"What if I want to perform various functions during the lifecycle of my components.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"You can, ",(0,a.kt)("inlineCode",{parentName:"p"},"velte")," supports different ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," that run during the lifecycle of your components"),(0,a.kt)("p",null,"For details, ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/hooks"},"see guide here")),(0,a.kt)("h2",{id:"component-methods"},"Component Methods"),(0,a.kt)("p",null,"Methods are functions in classes, used to perform a certain grouped task without repeating code.",(0,a.kt)("br",null),"\nIn ",(0,a.kt)("inlineCode",{parentName:"p"},"velte class components")," methods do the exact same thing. Methods in ",(0,a.kt)("inlineCode",{parentName:"p"},"velte")," live in the ",(0,a.kt)("inlineCode",{parentName:"p"},"constructor()")," function or the ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," body."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside class component\n...\nconstructor(...){\n    ...\n    //methods go here\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"class ClassComponent extends VelteComponent{\n    //methods go here\n}\n")),(0,a.kt)("p",null,"Using methods inside a class component :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Greet.js"',title:'"Greet.js"'},"export class Greet extends VelteComponent{\n    constructor(){\n        this.state = {\n            show : true\n        }\n        //this is a method inside the constructor\n        this.display = () =>{\n            return <p>Greetings Friend!!!</p>\n        }\n    }\n    \n    //this is a method inside the main body\n    greet = () =>{\n        return <p>Hello</p>\n    }\n\n    render(){\n        return(\n            <div>\n                <If condition={this.state.show}>\n                    {this.display}\n                </If>\n                {this.greet}\n            <div>\n        )\n    }\n}\n")),(0,a.kt)("h3",{id:"method-parameters-and-arguments"},"Method Parameters and Arguments"),(0,a.kt)("p",null,"When declaring a method, you can pass in parameters just like a ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript")," function.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"When calling the method, you can pass arguments for the required parameters just like calling a ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Binding.js"',title:'"Binding.js"'},'export class Binding extends VelteComponent{\n    constructor(){\n        this.state = {\n            message : "Hey dude!"\n        }\n\n        this.handleChange = (event) => {\n            event.preventDefault()\n            variableValue = event.target.value\n        }\n    }\n\n    render(){\n        return(\n            <div>\n                <p>{this.state.message}</p>\n                <input name="message" value = {this.state.message} v-on:change={this.handleChange}/>\n            </div>\n        )\n    }\n}\n')),(0,a.kt)("h2",{id:"component-template"},"Component Template"),(0,a.kt)("p",null,"Velte uses ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/essentials/syntax#jsx"},"JSX")," for templating, meaning you structure how your UI looks with JSX.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"In class components, you return JSX inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. This would render the snippet of JSX in your component when ",(0,a.kt)("a",{parentName:"p",href:"/1.0.4/components/basics#calling-components"},"called"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="classComponent.js"',title:'"classComponent.js"'},"//inside a class component\n...\nrender(){\n    return(\n        <p>Hello, from the render method</p>\n    )\n}\n")),(0,a.kt)("h2",{id:"component-nesting"},"Component Nesting"),(0,a.kt)("p",null,"Components can be nested into other components by calling them. The nested components are called ",(0,a.kt)("inlineCode",{parentName:"p"},"child components")," and host component that houses the nested components are called ",(0,a.kt)("inlineCode",{parentName:"p"},"parent components")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="childClassComponent.js"',title:'"childClassComponent.js"'},"\n//inside child class component\n...\nrender(){\n    return(\n        <div>\n            <p>Child Component</p>\n        </div>\n    )\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="parentClassComponent.js"',title:'"parentClassComponent.js"'},"\n//inside parent class component\n...\nrender(){\n    return(\n        <div>\n            <p>Parent component</p>\n            <ChildComponent/>\n        </div>\n    )\n}\n")))}m.isMDXComponent=!0},568:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA48AAADkCAYAAAA4shELAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAH7tJREFUeNrs3btvHFeiJ+DSC7JpQXLbGI+AsaAZCnC6A1CxRjMgIwV7NyATBTs3EcOdTYbM7M1IRbMhmexsoEQM7r2BIhK4lmM11vcPUMMDeQBjDE3rGh7JhiBz63RVi9Wnq5/sF9nfB5QoUd3V1adZh+dX51FnDg8Pk6YvvvjidvrldgLAl7du3fpXxQAAkDkTwmMaGt9P/x4aSb9RJABv/Ue63U5D5AtFAQDMu7P5V8ERoN1/SbfPFQMAQJKc+93vfnc7/fqpogAodfUvqevXr3+pKACAeRZ6Hm8rBoCu1JMAgPCoCAB6+qUiAACERwAAABAeAQAAEB4BAAAQHgEAABAeAQAAEB4BAAAQHgEAABAeAQAAQHgEAABAeAQAAEB4BAAAYELOj3qH3333XfL9998nb968UbrH8M477yTvvfdesrCwcOx9vXz5MvnHP/6R/PDDDwqWU+vcuXPJu+++m1y5ciU5e9Z1MQCAmQ2PP/74Y/LNN980vnJ8r169Sur1enL58uXk6tWrQ+8nfCYh0MM8CBeunj9/nly7di25ePGiAgEAGKGRXZ4XHMcjBL/QGB7Gt99+Kzgyd3766afk2bNnyevXrxUGAMCshccQUATH8Qk9kKFBPGgDOjwP5jVAvnjxQkEAAMxaeAxDxRhvQ3jQ+YrmNzLvnAMAADMYHi2OA8yaMG8YAIAZC48AAAAIjwAAAAiPAAAAIDwCAAAgPAIAADBu5xUBReGeneHWK+G+nW6yzrRduHAhOX/+fHLlypXk8uXLCgQAYB7DY7h3YQgp8xBQzp49mywsLCQXL16c6eP85ptvGuERZkWoH8IWbrvx8uXL5OrVqwoFYBgP7hz28ajtdKsldx/tnvD3upr+uZhu4ete+n62/QDACQ6PIaD87W9/awTIeXLp0qVG4zeEyVnz/PlzwZGZFn4+Q0/khx9+qDAAxmMjD1/h61oauqonMDjupH/eK3xnz8cKozPxFBMagKGHa96CYxB6Wv/617/O5LHV63VnAzPPzynARIReu4dpEKsoCmCq4TH0OM6zMPwuhMhZEuY3zmOY5+QJP6dh+CoABQ/uLKXbfrotDvCsG8ndR2caW/h7kuyWBMh7c1ymlbxMl/2AwZTCY2j0CSnJzIXHN2/eOBMA4GSGnDCv70m6hZAzaIDM3H0U5jmulwTI5Tkt00qjLI/KdMMPGmSstjoFVjEFAEYQcraS5jzFTDbcNEluDrnHeI7jYh/HEMLrUnQczX3tNQLp3Uf1sewnC8pPe+x5Ky+n2EG6v5UOz9nJj6W4j6X08Wt+6Jh37vMIAHDyguPDkqB1kG4rx9hrPMex1uX1FxvDOrOwWtYzt9QIXUny9zwYjnc/o5SFxHihndV8GKt5oAiPAACciNAYwtaTJLsNRdF2oyetn16+zuJ9VjscQ3FYZz/C4jv3xraf8QXIzei74TifNHohQXgEAGCGg2MWXlqHVAbhthqbx9pv1vsX77fT/R7DsM7ikNZafgzNBXhulgTPrZJeu+PtJ5ureaZlaz/mzbbHZFvvHtrs/pDhccVAvpgHyFU/kMwjcx4BYO6dua0MpubLJDl80UfAC2HlYfTdZtga5n6MT9N9dvv/lUY4az+OEDBXS8JrtRC6qunjVvKg2wyHIfCFXsPtke5n3O4+OkiP4WZe9sVwHXpBN/OA6RybaYefKwPhEQAYnX9XBFPz23T7vEdwjBfGCQ7ysDXKG+CGeX7VHoEoDny7peE1HNeDO6EXsLhYzXIh9I1qP5MIkCFE38znmRaPe5CFdJxj03NGEQiPAMDoPVYEE/eiS2gMvW07SfucwO1jDVPtHgx7hdF4aGu3Xs9uq7eOaj+TE0JidtuOrZYyy+agrvfoAXZuTd5vFIHwCACMzeFtZTBDQo/XgztlYW4U4elGvv84DN1Lvxd6HzvNd4xfu9blNWpdnjuq/cyCeo/jd25NxZlDZTB6FswBAJjdABmGRMZDNLPerlHcNiIbohr3Ym4p+BLZsNW4bPZGsMotCI8AAIwkQIZwF8+rC8M+R3XbiLiXsdLllhiD9AJ2610c1X4mERo73R5ls8/5jiA8AgAwsQAZFrMJq36O/rYRWa9ZHCA3+gyP3cJrt3mNo9rPuINjp9ujrPS/0ioIjwAATDZAVpPyex8+zFdkPY696N+LHULpQfTve/nCPnHoqpQE0L0x7KeX4edHZvNBw/0vK1Hovdm4hQcIjwAAzHCArKXbzZIAtZGGnf2h50FmYajaFujaH7eXtPca7rcEzay3Lg5d1fy5o91Pu1pJKL3XEkZDKHxwZ6dHcCyb33iQB8eqH0SERwAATkqIDHPt4oVummFrWLtt+8sCXGw9+nfo3Qu9n4eNLTuG4jDPMCx2bYz7KSoLljuFff49D4WLPYJj2X0oLYyD8KgIAABOZIDcjsJUrY9w1St4xeGorPcx9MCtJL3vCRlUk2x+YG1s+2ndZ60klA5qPWnthQ0L46z7gQPhEQDgJAfI5kI6B32Fq+77CiGu7LYgi6XB7+6jD5Ks97Ns/t9uI4SFIbbdhnmOaj+t+9zNy2Sz5H8P8u+v9SiHlUKZWhgHcmceP378Wfr10+Ps5NmzZ8mrV696Pu7ly5fJ119/PfeF/u677ybXrl0b6Dkff/xxsrCw0PfjBylrnwsnySDnwieffDKql31869at20qfU9wcyG+mfXhGWQDqNTrR8wgAAIDwCAAAgPAIAACA8AgAAIDwCAAAgPAIAACA8AgAAIDwCAAAAMIjAAAAwiMAAADCIwAAAMLjaXbhwgWFAAAACI+dLCwsJGfPyquXL1/2kwcAAAiP3Vy9enWuC/zSpUuNEA0AACA89ghPIUDOYw9kpVKZ+/AMAACcTOen8aJh2GYIkS9fvkx+/PHH05/Q06Ac3q+5jgAAgPA4ZKAKGwAAALPN6jUAAAAIjwAAAAiPAAAATMDU5jy+fv06+e677xoL5rx58+ZUF3K4NcfFixfN7wQAAITHQXz77bdJvV6fm0J+9epV42sIkNeuXZvL25QAAAAn28RTzPPnz+cqOBaFXtZnz575qQMAAITHbn766ae5DY7FABmG6wIAAAiPHfzwww+NADnvvv/+ez95AACA8Eh3p32BIAAAQHgEAABAeAQAAADhEQAAAOERAAAA4REAAADhEQAAAOERAAAA4REAAADhEQAAAOERAAAAOjmvCABg7v0vRQCo1xAeAYAeDj9TBoB6jV4MWwUAAEB4BAAA4PgMWwUAuntw5176507+r2q6rSd3H1VHuP/Dwr9q6b5vKHTgVNd7wiMAMIIGy5P0z6Xou/W00fLBlI5nudCASvJjC/++6cMChqhP9qPvhlC2Gz1uNf3zYc/HqfcmzrBVAE68P/7xj++fkobVYklwDCp5YwbgJFss+d5yn9+rKD7hEQBG4Q9pgPzXdPvlCX8fq13+bzrh8e6jgyRc8T9Sjf4NcBzLA9aF6r0pMmwVgNPiv4YtDZDh3l5/un///oupHs2DO6EHcSvJhlrV+nxWsdcxPKeSHF1tn17PYzZUbPfU/KQ8uBPKNAyJ284bicBk6r1K6ffC85rzCbN9TL+XcVbqvRmrr/Q8AnDafJpuX6Yh8vdT/GUfrpo/yQPffj4ctZ8GQjEg7qXbQUuwzBpVHL8htl/4bDYUCkyl3qsX/r7c4e/FxyzOYZnOXH2l5xGA0+h6uv2fPEB+dv/+/c8n+Ms+XHXfiBo84apxr4UWQuOgeLW9mjecVqPHVPs4huUk68XcKvnfcCU9rGi63eG54Xif9niF3fT56wOWy1J+/PeiRmB9wP0s5mWyUVJeex3f15GdpLWHdyvv9Vhz2sBE673dwnPCOb1d+HuzbjhIeg1hPaoTKtExNNXy19rrOApkVPXegzv7hfCbPf7o+LaiY9ruYwGgmauv9DwCcJr9Jt3+PQ2Rf57IfMgHdx6WNF5C42elj2cvtQSqu4/insf4MWWvX8kbL/sdgmOSh7fQANmZUKOykpfLk/yY4t6DygD72sgbeFslz1vK39ffuy4ulDW69qLvrjbKLbvKD4yv3osvHFXfnr9ZXVEp1HN7SevFsk7nZ7NO6NQrt5j//9P89huTspj3xj4tqY8XG8GwVz08g/WV8AjAPPjvSTaU9bMxNZ4W81tsxFfIw5XllXTrp3ftXtTwSvI5QPWo0dCtwVC86j0LjcrmkKvVEexro0sgjsPoftchvlmDbDP67nIj4BoaDJOs9/aic3C5rR7sHR4HsTPBlatDXfKwZ73fK9DOWH0lPAIwL66k26dpgPwq3f5phA2o7Jd4e6/gWvpLf7PPfcQLRFS7NKCWO+xjNWlfcCccw5mWLWuEbHdpqNQ6PGcYWyXlsh3te6XP8ikGx9AoXS/s42ZJOW31aJBt568dz6l6kpclMPp6Lw6AB1HYWiqc4/0uDlPL66jNkrprJWkf6r865nqv7L1uFvbbX50+o/WV8AjAvAnzIf8lDZCfp9uvj9mACr+096NGQq0RZrJhp/1a7tKgihs+S302yqqlxxAaIaFxN+icxcHLJjRs4ivqm20Ny/5WD9woaaDuFvZRbfR0ZGV/VKa9rspnr32zpIwfWkgHxlLvVaJzsDi6otjzeFDSc7nY4Ty+kddr2x3O8fU+69BxWY+ObXOo45mR+kp4BGBehfmQ/y8NkH9Kt/eHaEBtJe1Dkg7yBlR1wL0VrxzXo+fH4arTEKd62z7DMU5vHt9qSZjdHqKcK9G+ql0C52BzRLMGWehxCA2yuNG7lc/lAsZT79Wj87bY81jtUK8No941wI7XZtuiOO3l1P/xzEB9ZbVVgBFIw8ehUjix/ke6/T7Mh7x///6f+mg8ZQsdtPcWbvc9TLU9HBVDzl5bQ+PBnWrhMa33RGttwNWjhshGY8ueny3AM3gDb1hxcNsb0X7Cwhr9nm+DNMrWSuZVruZzutYnWG4wi6FxVPVeWe9hNWm/2LQ78Pmcnb+dVlydln7qvcHD7BTrq4n2PJ47d87Jl3rnnXcUAsBseZFuX/X5S7uWlF8NH/YeZKslITDp8b3lkuMKx7TWJYCFRsaTfDXSSTSu4gbRsD0I0763WzjumlOEuTb6eq9bUKx2WGyn0iE0rjbqte4rrs6LsddXE+15vHjxYnLhwoXk9evXc/2pvvfeeyohOGXu379/RilMT76K6qdDPPU/0+1P6ef32YANqbWS+5o1r/r2u8pgpyBYFh7LFnwon9/z4M6NpP2eYnEDbKvR4MqGP5E1QB+WBPk993+EkdZ7lSjoZBe+WkdX7A1w3oZzdv6Gl0+xvpr4sNWf//znyddffz23593ly5eThYUFFRDA9P3fdPtDGhxfDNmQ2swbPMWGS2j8hN69tQGGDcXhMfQM9npOdk+0ssZa1kOw3diyBWPC/sM8ycWSfWwMNQ9xug7yxXFG1Qhr3sw8Hh67eQLLBsYdII9b77WHx+Z5fXQOFi+g1drO16yOa4rvk1hNsqG0e9E5/vSUhMap11cTXzAnBKfr1683eiDnydmzZ5MPP/wwuXr1qooHYLoep9tv09D4+6GD41FDKjRQbibDLp+ePWbYxRtW+zi+ar4KYeiNjJd5LwuuoxQ3Ihe7lMEg+xndSomdbzewIjjCmOq9TqH06DYZ1T7P36WSMLoy4ErXJyk4zkR9NZUFc8Lw1V/96lfJjz/+mLx582YuzjO9jQBT95d0C4vi/HnEDamwoE1oSMVXg8Py6b0WkzhOEAoNid0BjjMMaQ2NqnsTKu+yobabJY2/nT7Kt1YIn5WR9Ji2LzYRNO+NaXEcGHW9l/WaHVelw9+bx1U2dHbrFATHmamvprraagiRADBmjXmNSTa38cVYXiEbRnWzZB7KRh6Q1jo0aoo9f+EWHR90aTzEc3uWSxoXS3loa7+dxYM795Ky22eMT7z662KjfJpzcrLj2elzX7tRw2krL9fdlveZrVx7L3/NSsd7WZbPFzro8jkBo6v3RhUe2295EeZkNoNrVmduJJO/r+Oog+NM1Vdu1QHAafZvSTav8asJNabKlk8PIW8/yYZ5FRsES1Gj5qDHvvfS5xTDWCVf9KY4RGv1bSOj97zJelLWc/ngzk7Su3fyXh7+ilZagly2CMZ20r6U/GGHY6l0ee/b+ZCt5bb32vl97g7QENvtGDSB0dV7rfpZFbTW5XVDHXMQ1QsbQ60mPap6bzLBcar11Vk/8QCcQv+RZPMa/2liwbEYdFpvmVFLym+hEc837KcXMG6kDHtFvZY3emoTKIteQ2u3k7KVY9v3FeZsjmIu03pU1puCI0yk3hvFsNXFkvO5V+/bXl91zGyaufpKeATgNAlDVP85DYy/TrfPp9iQai4ocdAlpPVzi46kR8Bcjhpv60k2r7DaJaitNxbQmdQ8mayhs17y/rYbZTTIDcazIa838/dY7xCuN7s2sLJhXiuFz8bCODC5em/Urxle40YSz6duBq3sONaS4e8zO+0ynbn66szjx48/S4a7N9Zbz549S169euWkGaOPP/54oEV3Xr582fctUQZ5LJykc+GTTz4Z1cs+vnXr1m2lP7vy+zwG45vXCABzzpxHAE68NDB+phQAYLwMWwUAAEB4BAAAQHgEAABAeAQAAEB4BAAAQHgEAABAeAQAAEB4BAAAAOERAAAA4REAAADhEQAYkTOfZxuAeo3OzisCAJh7v1EEgHqNXvQ8AgAAIDwCAAAgPAIAACA8AgAAIDwCAAAgPAIAACA8AgAAIDwCAACA8AgAAIDwCAAAgPAIAACA8AgAAIDwCAAAgPAIAACA8AgAAIDwCAAAAMIjAAAAwiMAAADCIwAAAMIjAAAAwiMAAADCIwAAAMIjAAAAwiMAAAAIjwAAAAiPAAAACI8AAAAIjwAAAAiPAAAACI8AAAAIjwAAAAiPAAAAIDwCAAAgPAIAACA8AgAAIDwCAAAgPAIAACA8AgAAIDwCAAAgPAIAAIDwCAAAwDGdVwQAMPd+qwgA9RrCIwDQw+HnygBQryE8AgDj9+DOYeFfu8ndR+sKBThBdVgl/fNhui2nWy3d1tN67GCMr7eR/rnV5RErY3194REATlRDZTX9cyndNqL/qabbXh7A6sqo0ZhrOkjLZKXkcYvpn08L3wnldqOt/LL9NbemWqOslTeMInz9veR/PpjIufXgzlIe/ML5vTlE8NrInx+EOmWnUY/QwoI5ADDZBtZiuu3noWij5BGhAbQVhab5dPfRXiMwHllOy265Q6OvaLOlsRoalQ/uPMnLdDV67GJe3k/zxicwnHsdvr88gXo1vPaT/Fx2HguPAHBKgmOS7E+kMXV6xMNfd0rKtNhorabBcbfw/5W8UdmrQZkNWcseDwxuaWrhcTS2k6OLVbWSume07j7aTrczb7dw0Ut4BIC5Codb+TyWTkLP12Lh3815NcUGxEreiDCEMmtg1fJGXdNi3svQ1N7r2Pr8evT8zUJZ30yyYcJH++7Ue9LsMdY7iXot6SMkFs+51RNS19Qbw+Kz+uHGLM43HMNnO3C9JjwCwPF/AVfyoajZAghlDa0s8CxFwfFmSy9Z1oA5yK9IrynYloZovS0wZr2ExbC3W9rgu/soBMq9vLy3C9+vJu29C4ulDayjHuP9DkNnYf7qtaPHhnOi2WvfnLfdVHHRZUaD4xD1mgVzAOD4v4AfRsEwzM2LF2BZbQtEgy4icRSWOvWQhZB0kIei+LnFlf2OFp4JvQqtvXebLQGrcwi+N7EyDuX04E54bztvA152HJWSkNlpH2sdvl9N99XrCFYLobKSN7S6lxPMR7129H9HDvLzql44R5eT1l7+4msVV2rOVhjNgkxx/uJBXmceFMLqfpd3sF9yXrcvuNX62rHBVo3uXDfu5q+9N7aQn73mRlQn7jZCfOce1KHqNT2PADD8L+3QgInn023nQ5/q0S/3YuOq3tbj2J/mghCdgttW4zH9DTFLCr0KrfvIFpdpb0xm39+ZaHA8Cnm7UeNzoyT01sb02ttJNpy4HpXTlpOAua3XOofHaiHwFYPKIK+/3xZcs3CzOoPl1atuvJeMawG0rKye5nV/peR1Q5ntjLJeEx4BYLhf2vfyBk4lCjBlix7EQ7bGPZdmK+856Hb8G0nnhSyWWuYVZuF3P5n+KobFsl0slH3zdhvDNr6Kah0aWuEzu9kWYLP5QhbZYR7rtaPw1Fo3HEQhslmn9HOeVJJ4Uay4bpu14DitujEbCrxfEhrbw2unC4pD1GvCIwAM/kt7K2rghCu3K12G+8RBbtjFcOp5gFprWWQnW/wlDk/drtAvJke9dmv589e6BN6t6D1kDY6j1/5gIuWeNXTKQuL2Me4jtxGV726X16+lW2hoFYefNXtEFp0YzFm9VlbXVAvnYnyRbLnP83Exf+4Hef3SuqhVONeyueHF+i8eXrrSVkeW3SO2vR4d1E5J3bhSsorqOC4YFoN0reX3QnkgrIyiXhMeAWCwBlY81LOaB6lBGgfDDa8Mv+CzxXT2SgNU/5q9dptv95V9rbUF3vZFaWr58LVq4bgmuTJstc/v9fNZxr2v/YXQbP7kdhS0n1hIhzmt18p6HZsLUnWb991pX80g1Hzubkn9NQtltpjEw3WzuvEgqi+2S4Pr8V57KXrt9ZbfC+2LgVV6hvc+6zUL5gBA/w2FeAGJvSFXRV08xnE0w9xqcryhUrW2HoWwPH33hmFZQ26Sn0F472XD1naS7Er7IPtajfZ1MNACOGEY34M71eRoLlNzwYm1sS2MAbNWr7XP544v5BwUQmO/F1daL+Jk8513Z7D04jA8yfs0xmW538fCX71/7/RRr+l5BID+HGdeW30k+8p6yv6etK5COKx+g1Lc4KhO8TPY6FB2S9G9H3uV43LSuoBFeE9rI/hcj3dhAE5WvdYMMZW350P7hZNqy2v1vmVHbcjFxGah7Kon6HMbul4THgGgH2EYUDYvpHUFwbDKXu/5brWSBtegwTHuKTuuk3UD7KyMi8PqdqNy3eprQY72Jf5Dg29liNumbET76Xd+GJyWei1YisLhYcvWXmf1qvsOfChTDI991GvCIwAM1tgKc1cGm+/WPvenMsT8uHi1vM1oUYYbY3rHo+k1Pb54Bcbt6HOolJTRuILjw6hRPMy8VzjZ9Vp/YTC2eopKrd4lSI9bfEHyg5IFguJtexT1mvAIAIM3tMLclngxgv0e91fcbQtDg93iofjYvZKGwLiGS9Z6NpCyRsf4ZL2uyy1lma0QGPc+bnQcFpd9/+GxguPR/dyKDeDm6oo1JwZzVa9l59SggWlpQre2mcTw8ficn+RtROLXHv7euwPWa8IjAAzX0NpNym+w/LDP8BgaN0/a5uqFoBQaa9nqh50svw1JoSGWLbG/P6b3GfeabrztjcgaHfvJ+HsTio2ycCzF4LzdswHXfj+0YYLjMDdOh9Ncry23nJederza5xOPo75oD1Pjvn1O+wrVS/n9EVejumOjUX6jPZ6Dks+ofej+0e+Th6Oq16y2CgDDNx4O0l++Yb5QcbXC1TxQrUUrBtbS74er+jtRgAw9kDsdGgfxv5tBs5IHz0m90+0olO1P7LWzXo/FqGFTa2nstj5muRHIm4tuHN3Eu9LSyAsLD3V+D+sti3Zk+49D6ab5jcx5vbbUpb7qVpeFwDLqRXGaF7kqhWN7Gp3jBy23zCg/r+MAeq/j85v1QOuIhuW8Dirb32ZUtx32eE9xPXt0G5DwGTy4E9fLG0l2ca+fz2Doek3PIwAcr6FVS7Ir9QdRI6Ne8tjdZLhVPZsBrt6j8XQwpve43UfjcPRBqn2RnHqHRmd77+PRFfjF5PjzNIs9DBbGQb2WnV+rUf3TaV/16P+Xx3C89WSyt8povu7eMer0UdTLx3nPQ9VrwiMAjKLhcrTgRPcrt6GxkQ3l2uwQyHbzfayUNOZuloSng/zxN5P2oVujfI8r+THXogbjev5/4xi6uRUFv+0uobx4XL0Xzxm+Ib1iYRzUa20BsFdP4kHL+dn7lh3DHG9zyO3uhMsphLAP8vqxLERvJlmPbW0Mrx0+kxv5a9Q7vPZmSY/p0PXamcePH3+Wfv30OMf97Nmz5NWrV06yMfr444+ThYWFvh//8uXL5Ouvvx75Y+EknQuffPLJqF728a1bt24rfQBgnul5BAAAQHgEAABAeAQAAEB4BAAAQHgEAABAeAQAAEB4BAAAQHgEAAAA4REAAADhEQAAAOGRkVlYWFAInBjvvPOOQgAAEB6ZlkuXLikEZt67776bnD2r2gIAEB6Zmp/97Gca5cx2ZZX+fH700UcKAgBAeGSaLly4kFy7dq3RswOzJvxchp/PixcvKgwAgCk5rwhoCg3z0EB//fp1Y4NZcO7cOaERAEB4ZBaFXsiwAQAANBm2CgAAgPAIAACA8AgAAIDwCAAAgPAIMCZWaAUAmMHweOnSJSU5ZoOufmq1VIRH4REAYObC45UrV5KzZ3Vijsvly5eHCo/hxuowz+cNAAAzFh5DcLx69aoAOQah9+Sjjz4a6rm/+MUv9L4wl0J9tLCwoCAAAEbo/Kh2FIauXr9+PXn+/Hny/fffJz/99JPSPWZoDGVaqVSGDuXhedeuXUvq9Xry3XffJa9fv1awnGrhnHn//fcFRwCAWQ6PQRgqGa74MztCgPzwww8bGwAAwNDZQhEAAAAgPAIAACA8AgAAIDwCAAAgPAIAAHBSwuMvFQMAAAC9wuNXigGgq88VAQAgPCbJnxUDQFfqSQBAeLx169ZX6dd/VhQApf53Xk8CAMx3eAx/pA2jP6df/lu6/UWRADT8Z7r9z7R+/IOiAABIkjOHh4ct3/jiiy9+nX55X9EAc+xFGhq/VAwAAEf+vwADAAhoK3GgdQtQAAAAAElFTkSuQmCC"},5307:(e,n,t)=>{t.d(n,{Z:()=>o});const o="data:image/png;base64,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"},608:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/velte-class-component-9e4831b0c3f54b24ba2b592076c3f83d.png"},5675:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/velte-function-component-755821cd19ddff1aed99b7df286c166a.png"}}]);