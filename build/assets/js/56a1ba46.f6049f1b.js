"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[8669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,slug:"/"},i="Introduction",l={unversionedId:"intro",id:"version-1.0.4/intro",title:"Introduction",description:"Velte is a small, performant and easy-to-use frontend JavaScript framework with a declarative and component-based model building on top of standard HTML, CSS, and JavaScript for developing User Interfaces. velte in no way tries to reinvent the wheel, It takes the wheel and makes it easier to roll with. In summary, It's your typical modern framework or library but friendlier.",source:"@site/versioned_docs/version-1.0.4/intro.md",sourceDirName:".",slug:"/",permalink:"/1.0.4/",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.0.4/intro.md",tags:[],version:"1.0.4",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quick Start Guide",permalink:"/1.0.4/get-started"}},s={},d=[{value:"Why use Velte?",id:"why-use-velte",level:2},{value:"Beginner friendly",id:"beginner-friendly",level:3},{value:"Simple and fast",id:"simple-and-fast",level:3},{value:"Performant Components",id:"performant-components",level:3},{value:"Scalable",id:"scalable",level:3},{value:"Extensive",id:"extensive",level:3},{value:"Declarative",id:"declarative",level:3},{value:"Familiar Syntax",id:"familiar-syntax",level:3},{value:"Velte Components",id:"velte-components",level:2},{value:"Function Component",id:"function-component",level:3},{value:"Class Component",id:"class-component",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h1",{id:"what-is-velte"},"What is Velte?"),(0,a.kt)("p",null,"Velte is a small, performant and easy-to-use frontend JavaScript framework with a declarative and component-based model building on top of standard HTML, CSS, and JavaScript for developing User Interfaces. velte in no way tries to reinvent the wheel, It takes the wheel and makes it easier to roll with. In summary, It's your typical modern framework or library but friendlier."),(0,a.kt)("h2",{id:"why-use-velte"},"Why use Velte?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I have no idea. What started off as a joke with friends ended up with me rewriting the entire library to improve and implement more features.\n",(0,a.kt)("strong",{parentName:"p"},"Emmanuel Oni (creator)"))),(0,a.kt)("h3",{id:"beginner-friendly"},"Beginner friendly"),(0,a.kt)("p",null,"If you're Just starting out as a frontend or fullstack developer, velte can be great practice."),(0,a.kt)("h3",{id:"simple-and-fast"},"Simple and fast"),(0,a.kt)("p",null,"Weighing in at around 5 KB, velte helps keep your bundle size small. Powered by ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/snabbdom"},"snabbdom"),", rendering is blazing fast, because velte touches only the dynamic parts of your UI when updating \u2014 no need to rebuild an entire VDOM tree."),(0,a.kt)("h3",{id:"performant-components"},"Performant Components"),(0,a.kt)("p",null,"Basically, you can have hundreds of components and still achieve great performance."),(0,a.kt)("h3",{id:"scalable"},"Scalable"),(0,a.kt)("p",null,"For small to medium sized web applications."),(0,a.kt)("h3",{id:"extensive"},"Extensive"),(0,a.kt)("p",null,"Velte can be used in conjunction with other libraries to increase productivity."),(0,a.kt)("h3",{id:"declarative"},"Declarative"),(0,a.kt)("p",null,"This helps make your code easier to understand and simpler to debug."),(0,a.kt)("h3",{id:"familiar-syntax"},"Familiar Syntax"),(0,a.kt)("p",null,"Velte's syntax is inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),", ",(0,a.kt)("a",{parentName:"p",href:"https://lit.dev/"},"Lit.js")," and ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js")),(0,a.kt)("h2",{id:"velte-components"},"Velte Components"),(0,a.kt)("p",null,"Velte components can be authored in two different ways ",(0,a.kt)("inlineCode",{parentName:"p"},"classes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"functions"),". For example we have ",(0,a.kt)("inlineCode",{parentName:"p"},"<GettingStarted/>")," created as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Function Component")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Class Component")," below:"),(0,a.kt)("h3",{id:"function-component"},"Function Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GettingStarted.js"',title:'"GettingStarted.js"'},'import {VelteElement} from "velte"\n\nfunction GettingStarted() {\n    return(\n        <div className="card">\n            <h2 className="title"><i className="fas fa-book"></i> Getting Started</h2>\n            <p>You should read the documentation, it covers every bit of the library.</p>\n            <a href="#" v-attr:role="button" className="button">Read the Docs</a>\n        </div>\n    )\n}\n')),(0,a.kt)("h3",{id:"class-component"},"Class Component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="GettingStarted.js"',title:'"GettingStarted.js"'},'import {VelteComponent,VelteElement} from "velte"\n\nclass GettingStarted extends VelteComponent{\n    constructor(){\n        this.state = {}\n    }\n\n    render(){\n        return(\n            <div className="card">\n                <h2 className="title"><i className="fas fa-book"></i> Getting Started</h2>\n                <p>You should read the documentation, it covers every bit of the library.</p>\n                <a href="#" v-attr:role="button" className="button">Read the Docs</a>\n            </div>\n        )\n    }\n}\n')))}u.isMDXComponent=!0}}]);