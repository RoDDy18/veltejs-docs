"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[6222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const a={sidebar_position:4},o="Tooling",i={unversionedId:"misc/tools",id:"version-1.1.0/misc/tools",title:"Tooling",description:"Various ways you can use velte for your next project.",source:"@site/versioned_docs/version-1.1.0/misc/tools.md",sourceDirName:"misc",slug:"/misc/tools",permalink:"/1.1.0/misc/tools",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.1.0/misc/tools.md",tags:[],version:"1.1.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/1.1.0/misc/routes"},next:{title:"Best Practice",permalink:"/1.1.0/category/best-practice"}},s={},p=[{value:"Online Playground",id:"online-playground",level:2},{value:"Starter kit",id:"starter-kit",level:2},{value:"Velte CLI",id:"velte-cli",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tooling"},"Tooling"),(0,l.kt)("p",null,"Various ways you can use velte for your next project."),(0,l.kt)("h2",{id:"online-playground"},"Online Playground"),(0,l.kt)("p",null,"You can try velte online without any installations, try now :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://codesandbox.io/p/sandbox/velte-rspack-y272lm"},"Velte on CodeSandbox"))),(0,l.kt)("h2",{id:"starter-kit"},"Starter kit"),(0,l.kt)("p",null,"The starter kits are perfect for different types of projects, It scales well and the project structure is easy to understand, Every logic and assets goes in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,l.kt)("p",null,"Serve the app, used during development :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,l.kt)("p",null,"After development, build the app for production in the ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," folder :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,l.kt)("p",null,"To get up and running with velte, grab the starter kits on GitHub:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-webpack-starter"},"velte-webpack-starter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-rspack-starter"},"velte-rspack-starter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-vite-starter"},"velte-vite-starter")," (Experimental)")),(0,l.kt)("h2",{id:"velte-cli"},"Velte CLI"),(0,l.kt)("p",null,"Quickly bootstrap your new velte projects by installing and running the CLI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install CLI globally")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g create-velte-app\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create test app with default arguments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir test-app\ncd test-app\ncreate-velte-app --yes --git --install\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"or Run CLI without installation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-velte-app --yes --git --install\n")))}d.isMDXComponent=!0}}]);