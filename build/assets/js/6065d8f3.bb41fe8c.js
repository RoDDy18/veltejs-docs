"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[4167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Creating a Velte Application",l={unversionedId:"essentials/application",id:"essentials/application",title:"Creating a Velte Application",description:"velte applications are structured with components made with JSX and Javascript.",source:"@site/docs/essentials/application.md",sourceDirName:"essentials",slug:"/essentials/application",permalink:"/next/essentials/application",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/essentials/application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Essentials",permalink:"/next/category/essentials"},next:{title:"Velte's Syntax",permalink:"/next/essentials/syntax"}},p={},s=[{value:"<code>VelteElement()</code>",id:"velteelement",level:2},{value:"Mounting The App",id:"mounting-the-app",level:2},{value:"<code>VelteRender()</code>",id:"velterender",level:2},{value:"The Root Component",id:"the-root-component",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-velte-application"},"Creating a Velte Application"),(0,r.kt)("p",null,"velte applications are structured with components made with ",(0,r.kt)("a",{parentName:"p",href:"/next/essentials/syntax#jsx"},"JSX")," and Javascript."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const app = <h1>This is JSX</h1>\n")),(0,r.kt)("p",null,"JSX is simply HTML in Javascript. To use JSX in velte, you need to import ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteElement")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"velte"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import {VelteElement} from "velte"\n\nconst app = <h1>This is JSX</h1>\n')),(0,r.kt)("h2",{id:"velteelement"},(0,r.kt)("inlineCode",{parentName:"h2"},"VelteElement()")),(0,r.kt)("p",null,"When you write JSX it gets converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteElement")," which returns a vnode, then this is added to the VDOM then mounted to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'//JSX\nconst app = <h1>This is JSX</h1>\n//VelteElement\nVelteElement("h1", null, "This is JSX")\n')),(0,r.kt)("h2",{id:"mounting-the-app"},"Mounting The App"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should always import ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteRender")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"velte")," when creating an app instance.")),(0,r.kt)("h2",{id:"velterender"},(0,r.kt)("inlineCode",{parentName:"h2"},"VelteRender()")),(0,r.kt)("p",null,"When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteRender()")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," file, we are creating an app instance to render to the DOM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},'\x3c!--HTML File VelteRender Renders to--\x3e\n<div id="app"></div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="app.jsx"',title:'"app.jsx"'},'//document.getElementById("app") references the element with an ID "app"\n//so this should be unique\nVelteRender(app, document.getElementById("app"))\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You are not limited to a single app instance for your entire application, multiple application instances can co-exist.")),(0,r.kt)("h2",{id:"the-root-component"},"The Root Component"),(0,r.kt)("p",null,"What if you have many JSX tags or components to render?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app.jsx"',title:'"app.jsx"'},'//this won\'t work\nimport {VelteElement,VelteRender} from "velte"\n\nconst app1 = <h1>This is JSX</h1>\nconst app2 = <h1>This is JSX</h1>\n\nVelteRender(app1, document.getElementById("app"))\nVelteRender(app2, document.getElementById("app"))\n')),(0,r.kt)("p",null,"The first time you call ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteRender()"),", we call the ",(0,r.kt)("inlineCode",{parentName:"p"},"reconcile()")," function on a real DOM node in our case ",(0,r.kt)("inlineCode",{parentName:"p"},'document.getElementById("app")'),". When you call the ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteRender()")," more than once on the same element, you are calling it with the VDOM node the first ",(0,r.kt)("inlineCode",{parentName:"p"},"VelteRender()")," returns when called for the first time. So how do we fix this problem? ",(0,r.kt)("inlineCode",{parentName:"p"},"Root Components"),".",(0,r.kt)("br",null),"\nEvery app requires a ",(0,r.kt)("strong",{parentName:"p"},"Root Component")," that can contain other components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="app.jsx"',title:'"app.jsx"'},'//this will work\nimport {VelteElement,VelteRender} from "velte"\n\nconst app1 = (\n    <div>\n        <h1>This is JSX</h1> \n        <h1>This is also JSX</h1>\n    </div>\n)\n\nVelteRender(app1, document.getElementById("app"))\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," We wrapped the two ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," tags in a ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," because, when adding multiple tags to JSX snippet it needs to be grouped.")))}d.isMDXComponent=!0}}]);