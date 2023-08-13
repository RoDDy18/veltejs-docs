"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[6439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:2},o="Quick Start Guide",i={unversionedId:"get-started",id:"version-1.1.0/get-started",title:"Quick Start Guide",description:"The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with this JavaScript overview. Prior experience with other frameworks helps, but is not required.",source:"@site/versioned_docs/version-1.1.0/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/1.1.0/get-started",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.1.0/get-started.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/1.1.0/"},next:{title:"CLI",permalink:"/1.1.0/cli"}},s={},p=[{value:"Build Tools",id:"build-tools",level:2},{value:"Other Build Tools",id:"other-build-tools",level:2},{value:"Installation &amp; Usage",id:"installation--usage",level:2},{value:"Online Playground",id:"online-playground",level:3},{value:"Custom Project",id:"custom-project",level:3},{value:"Starter Kit",id:"starter-kit",level:3},{value:"CLI Tool",id:"cli-tool",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,n.kt)("admonition",{title:"Prerequisites",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview"},"this JavaScript overview"),". Prior experience with other frameworks helps, but is not required.")),(0,n.kt)("h2",{id:"build-tools"},"Build Tools"),(0,n.kt)("p",null,"A build setup allows us to use compile velte apps during development or for ",(0,n.kt)("a",{parentName:"p",href:"/best-practice/deployment"},"production"),". The official velte build setup is based on ",(0,n.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack"),", ",(0,n.kt)("a",{parentName:"p",href:"https://rspack.dev/"},"Rspack")," and ",(0,n.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),", frontend build tools that is used to bundle assets and scripts into static assets."),(0,n.kt)("h2",{id:"other-build-tools"},"Other Build Tools"),(0,n.kt)("p",null,"Other build tools can be used to compile velte apps :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rollupjs.org/"},"Rollup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://parceljs.org/"},"Parcel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"These build tool would have to be configured manually to compile velte applications. ")),(0,n.kt)("h2",{id:"installation--usage"},"Installation & Usage"),(0,n.kt)("h3",{id:"online-playground"},"Online Playground"),(0,n.kt)("p",null,"You can try velte online without any installations, try now :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codesandbox.io/p/sandbox/velte-rspack-y272lm"},"Velte on CodeSandbox"))),(0,n.kt)("h3",{id:"custom-project"},"Custom Project"),(0,n.kt)("p",null,"If you already have a project and you want to use velte in that project, run to install the latest version of velte to your current project:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install velte@1.1.0\n")),(0,n.kt)("h3",{id:"starter-kit"},"Starter Kit"),(0,n.kt)("p",null,"If you are using the starter kits, run install all required dependencies including velte :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install\n")),(0,n.kt)("p",null,"Serve the app, used during development :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")),(0,n.kt)("p",null,"After development, build the app for production in the ",(0,n.kt)("inlineCode",{parentName:"p"},"dist")," folder :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,n.kt)("p",null,"To get up and running with velte, grab the starter kits on GitHub:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-webpack-starter"},"velte-webpack-starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-rspack-starter"},"velte-rspack-starter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/RoDDy18/velte-vite-starter"},"velte-vite-starter")," (Experimental)")),(0,n.kt)("h3",{id:"cli-tool"},"CLI Tool"),(0,n.kt)("p",null,"Quickly bootstrap your new velte projects by installing and running the CLI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install CLI globally")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g create-velte-app\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create test app with default arguments")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir test-app\ncd test-app\ncreate-velte-app --yes --git --install\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"or Run CLI without installation")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-velte-app --yes --git --install\n")))}d.isMDXComponent=!0}}]);