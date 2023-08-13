"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[5500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Quick Start Guide",l={unversionedId:"get-started",id:"version-1.0.4/get-started",title:"Quick Start Guide",description:"The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with this JavaScript overview. Prior experience with other frameworks helps, but is not required.",source:"@site/versioned_docs/version-1.0.4/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/1.0.4/get-started",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.0.4/get-started.md",tags:[],version:"1.0.4",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1.0.4/"},next:{title:"API Reference",permalink:"/1.0.4/category/api-reference"}},s={},p=[{value:"Build Tools",id:"build-tools",level:2},{value:"Other Build Tools",id:"other-build-tools",level:2},{value:"Installation",id:"installation",level:2},{value:"Custom Project",id:"custom-project",level:3},{value:"Starter Kit",id:"starter-kit",level:3},{value:"CLI Tool",id:"cli-tool",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,a.kt)("admonition",{title:"Prerequisites",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview"},"this JavaScript overview"),". Prior experience with other frameworks helps, but is not required.")),(0,a.kt)("h2",{id:"build-tools"},"Build Tools"),(0,a.kt)("p",null,"A build setup allows us to use compile velte apps during development or for ",(0,a.kt)("a",{parentName:"p",href:"/best-practice/deployment"},"production"),". The official velte build setup is based on ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),", a frontend build tool that is used to bundle assets and scripts into static assets."),(0,a.kt)("h2",{id:"other-build-tools"},"Other Build Tools"),(0,a.kt)("p",null,"Other build tools can be used to compile velte apps :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rollupjs.org/"},"Rollup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://parceljs.org/"},"Parcel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vitejs.dev/"},"Vite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rspack.dev/"},"Rspack"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These build tool would have to be configured manually to compile velte applications. ")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"custom-project"},"Custom Project"),(0,a.kt)("p",null,"If you already have a project and you want to use velte in that project, run to install the latest version of velte to your current project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install velte@1.0.4\n")),(0,a.kt)("h3",{id:"starter-kit"},"Starter Kit"),(0,a.kt)("p",null,"If you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"velte-starter-kit"),", run install all required dependencies including velte :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,a.kt)("p",null,"Serve the app, used during development :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run velte:serve\n")),(0,a.kt)("p",null,"After development, build the app for production in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run velte:build\n")),(0,a.kt)("p",null,"To get up and running with velte, grab the velte-starter-kit on GitHub:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-starter-kit"},"velte-starter-kit"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"velte-starter-kit")," is outdated and no longer maintained, it only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"velte 1.0.4")," currently. ")),(0,a.kt)("h3",{id:"cli-tool"},"CLI Tool"),(0,a.kt)("p",null,"Quickly bootstrap your new velte projects by installing and running the CLI"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"velte 1.0.4")," is not supported by the CLI, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"velte-starter-kit")," instead.")))}d.isMDXComponent=!0}}]);