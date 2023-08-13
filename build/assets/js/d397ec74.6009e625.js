"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[7786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(g,i(i({ref:t},c),{},{components:n})):l.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="CLI",o={unversionedId:"cli",id:"version-1.1.0/cli",title:"CLI",description:"Bootstrap your new velte projects with the official CLI tool create-velte-app",source:"@site/versioned_docs/version-1.1.0/cli.md",sourceDirName:".",slug:"/cli",permalink:"/1.1.0/cli",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-1.1.0/cli.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick Start Guide",permalink:"/1.1.0/get-started"},next:{title:"API Reference",permalink:"/1.1.0/category/api-reference"}},p={},s=[{value:"CLI Arguments",id:"cli-arguments",level:2},{value:"<code>--git, -g</code>",id:"--git--g",level:3},{value:"<code>--yes, -y</code>",id:"--yes--y",level:3},{value:"<code>--install, -i</code>",id:"--install--i",level:3},{value:"<code>--spa, -s</code>",id:"--spa--s",level:3},{value:"<code>--state-managment, -m</code>",id:"--state-managment--m",level:3},{value:"<code>--lint, -l</code>",id:"--lint--l",level:3},{value:"<code>--css, -c</code>",id:"--css--c",level:3},{value:"Bootstrapping a new Velte App",id:"bootstrapping-a-new-velte-app",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli"},"CLI"),(0,a.kt)("p",null,"Bootstrap your new velte projects with the official CLI tool ",(0,a.kt)("inlineCode",{parentName:"p"},"create-velte-app")),(0,a.kt)("p",null,"To install CLI globally, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -g create-velte-app\n")),(0,a.kt)("h2",{id:"cli-arguments"},"CLI Arguments"),(0,a.kt)("p",null,"Below are the CLI arguments that can be parsed when bootstrapping your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"'--git': Boolean,\n'--yes': Boolean,\n'--install': Boolean,\n'--spa': Boolean,\n'--state-managment': Boolean,\n'--lint': Boolean,\n'--css': Boolean,\n'-g': '--git',\n'-y': '--yes',\n'-i': '--install',\n'-s': '--spa',\n'-m': '--state-managment',\n'-l': '--lint',\n'-c': '--css'\n")),(0,a.kt)("h3",{id:"--git--g"},(0,a.kt)("inlineCode",{parentName:"h3"},"--git, -g")),(0,a.kt)("p",null,"This argument initializes git for your project."),(0,a.kt)("h3",{id:"--yes--y"},(0,a.kt)("inlineCode",{parentName:"h3"},"--yes, -y")),(0,a.kt)("p",null,"This argument will skip all prompts and use the default prompt options."),(0,a.kt)("h3",{id:"--install--i"},(0,a.kt)("inlineCode",{parentName:"h3"},"--install, -i")),(0,a.kt)("p",null,"This argument will automatically install all project dependencies."),(0,a.kt)("h3",{id:"--spa--s"},(0,a.kt)("inlineCode",{parentName:"h3"},"--spa, -s")),(0,a.kt)("p",null,"This argument will configure SPA with some preconfigured routes in your application."),(0,a.kt)("h3",{id:"--state-managment--m"},(0,a.kt)("inlineCode",{parentName:"h3"},"--state-managment, -m")),(0,a.kt)("p",null,"This argument will configure a global state managment solution with some preconfigured states in your application."),(0,a.kt)("h3",{id:"--lint--l"},(0,a.kt)("inlineCode",{parentName:"h3"},"--lint, -l")),(0,a.kt)("p",null,"This argument will configure a code linter for code quality."),(0,a.kt)("h3",{id:"--css--c"},(0,a.kt)("inlineCode",{parentName:"h3"},"--css, -c")),(0,a.kt)("p",null,"This argument will configure a pre build design system for your application with ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),"."),(0,a.kt)("h2",{id:"bootstrapping-a-new-velte-app"},"Bootstrapping a new Velte App"),(0,a.kt)("p",null,"Let's quickly bootstrap a velte application with the CLI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a folder, ours will be called ",(0,a.kt)("inlineCode",{parentName:"li"},"test-app")," and open your cmd with the folder directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir test-app\ncd test-app\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run CLI and pass in ",(0,a.kt)("inlineCode",{parentName:"li"},"--install")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-i"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"create-velte-app --install\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Answer all prompts as required by your project")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ create-velte-app --install\n? Please choose which project template to use rspack\n? Initialize a git repository? No\n? Add Router for Single Page App development? Yes\n? Add Valtio for state managment? No\n? Add Tailwind CSS for design system? Yes\n? Add ESLint for code quality? Yes\n  \u221a Copying project files\n  \u221a Installing project dependencies\nDONE Project ready\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Great, your velte project has successfully been bootstrapped, now run to start the dev server on ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3030")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm run dev\n")))}d.isMDXComponent=!0}}]);