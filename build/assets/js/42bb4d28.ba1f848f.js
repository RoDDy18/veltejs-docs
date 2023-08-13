"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[4996],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>h});var t=o(7294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function v(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?v(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},v=Object.keys(e);for(t=0;t<v.length;t++)o=v[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(t=0;t<v.length;t++)o=v[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=t.createContext({}),r=function(e){var n=t.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},c=function(e){var n=r(e.components);return t.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,v=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=r(o),p=i,h=s["".concat(d,".").concat(p)]||s[p]||u[p]||v;return o?t.createElement(h,a(a({ref:n},c),{},{components:o})):t.createElement(h,a({ref:n},c))}));function h(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var v=o.length,a=new Array(v);a[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var r=2;r<v;r++)a[r]=o[r];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3694:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>v,metadata:()=>l,toc:()=>r});var t=o(7462),i=(o(7294),o(3905));const v={sidebar_position:7},a="Event handling",l={unversionedId:"essentials/events",id:"version-2.0.0-rc.0/essentials/events",title:"Event handling",description:"when a user performs an action like clicking on buttons, double clicking on buttons, hovers on images and even submitting a form, our application can react to those actions known as events.",source:"@site/versioned_docs/version-2.0.0-rc.0/essentials/events.md",sourceDirName:"essentials",slug:"/essentials/events",permalink:"/essentials/events",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-2.0.0-rc.0/essentials/events.md",tags:[],version:"2.0.0-rc.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"List Rendering",permalink:"/essentials/list"},next:{title:"Form input Binding",permalink:"/essentials/input"}},d={},r=[{value:"Mouse Events",id:"mouse-events",level:2},{value:"<code>v-on:click</code>",id:"v-onclick",level:3},{value:"<code>v-on:doubleClick</code>",id:"v-ondoubleclick",level:3},{value:"<code>v-on:contextMenu</code>",id:"v-oncontextmenu",level:3},{value:"<code>v-on:mouseDown</code>",id:"v-onmousedown",level:3},{value:"<code>v-on:mouseEnter</code>",id:"v-onmouseenter",level:3},{value:"<code>v-on:mouseLeave</code>",id:"v-onmouseleave",level:3},{value:"<code>v-on:mouseMove</code>",id:"v-onmousemove",level:3},{value:"<code>v-on:mouseOut</code>",id:"v-onmouseout",level:3},{value:"<code>v-on:mouseOver</code>",id:"v-onmouseover",level:3},{value:"<code>v-on:mouseUp</code>",id:"v-onmouseup",level:3},{value:"<code>v-on:drag</code>",id:"v-ondrag",level:3},{value:"<code>v-on:dragEnd</code>",id:"v-ondragend",level:3},{value:"<code>v-on:dragEnter</code>",id:"v-ondragenter",level:3},{value:"<code>v-on:dragExit</code>",id:"v-ondragexit",level:3},{value:"<code>v-on:dragLeave</code>",id:"v-ondragleave",level:3},{value:"<code>v-on:dragOver</code>",id:"v-ondragover",level:3},{value:"<code>v-on:dragStart</code>",id:"v-ondragstart",level:3},{value:"<code>v-on:drop</code>",id:"v-ondrop",level:3},{value:"Keyboard Events",id:"keyboard-events",level:2},{value:"<code>v-on:keyDown</code>",id:"v-onkeydown",level:3},{value:"<code>v-on:keyPress</code>",id:"v-onkeypress",level:3},{value:"<code>v-on:keyUp</code>",id:"v-onkeyup",level:3},{value:"Clipboard Events",id:"clipboard-events",level:2},{value:"<code>v-on:cut</code>",id:"v-oncut",level:3},{value:"<code>v-on:copy</code>",id:"v-oncopy",level:3},{value:"<code>v-on:paste</code>",id:"v-onpaste",level:3},{value:"Form Events",id:"form-events",level:2},{value:"<code>v-on:input</code>",id:"v-oninput",level:3},{value:"<code>v-on:submit</code>",id:"v-onsubmit",level:3},{value:"<code>v-on:change</code>",id:"v-onchange",level:3},{value:"Focus Events",id:"focus-events",level:2},{value:"<code>v-on:focus</code>",id:"v-onfocus",level:3},{value:"<code>v-on:blur</code>",id:"v-onblur",level:3},{value:"UI Wheel Events",id:"ui-wheel-events",level:2},{value:"<code>v-on:scroll</code>",id:"v-onscroll",level:3},{value:"<code>v-on:wheel</code>",id:"v-onwheel",level:3},{value:"Selection Events",id:"selection-events",level:2},{value:"<code>v-on:select</code>",id:"v-onselect",level:3},{value:"Touch Events",id:"touch-events",level:2},{value:"<code>v-on:touchCancel</code>",id:"v-ontouchcancel",level:3},{value:"<code>v-on:touchEnd</code>",id:"v-ontouchend",level:3},{value:"<code>v-on:touchMove</code>",id:"v-ontouchmove",level:3},{value:"<code>v-on:touchStart</code>",id:"v-ontouchstart",level:3}],c={toc:r},s="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(s,(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-handling"},"Event handling"),(0,i.kt)("p",null,"when a user performs an action like ",(0,i.kt)("inlineCode",{parentName:"p"},"clicking on buttons"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"double clicking on buttons"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hovers on images")," and even ",(0,i.kt)("inlineCode",{parentName:"p"},"submitting a form"),", our application can react to those actions known as ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),".",(0,i.kt)("br",null)),(0,i.kt)("p",null,"To get started with event handling in velte we use ",(0,i.kt)("a",{parentName:"p",href:"/essentials/traits#event-trait"},(0,i.kt)("inlineCode",{parentName:"a"},"event traits"))),(0,i.kt)("p",null,"All event traits in velte start with the ",(0,i.kt)("inlineCode",{parentName:"p"},"v-on")," directive which stands for ",(0,i.kt)("inlineCode",{parentName:"p"},"velte-on"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"}," You cannot use ",(0,i.kt)("inlineCode",{parentName:"p"},"velte-on")," as a replacment for ",(0,i.kt)("inlineCode",{parentName:"p"},"v-on"))),(0,i.kt)("h2",{id:"mouse-events"},"Mouse Events"),(0,i.kt)("h3",{id:"v-onclick"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:click")),(0,i.kt)("h3",{id:"v-ondoubleclick"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:doubleClick")),(0,i.kt)("h3",{id:"v-oncontextmenu"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:contextMenu")),(0,i.kt)("h3",{id:"v-onmousedown"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseDown")),(0,i.kt)("h3",{id:"v-onmouseenter"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseEnter")),(0,i.kt)("h3",{id:"v-onmouseleave"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseLeave")),(0,i.kt)("h3",{id:"v-onmousemove"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseMove")),(0,i.kt)("h3",{id:"v-onmouseout"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseOut")),(0,i.kt)("h3",{id:"v-onmouseover"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseOver")),(0,i.kt)("h3",{id:"v-onmouseup"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:mouseUp")),(0,i.kt)("h3",{id:"v-ondrag"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:drag")),(0,i.kt)("h3",{id:"v-ondragend"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragEnd")),(0,i.kt)("h3",{id:"v-ondragenter"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragEnter")),(0,i.kt)("h3",{id:"v-ondragexit"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragExit")),(0,i.kt)("h3",{id:"v-ondragleave"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragLeave")),(0,i.kt)("h3",{id:"v-ondragover"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragOver")),(0,i.kt)("h3",{id:"v-ondragstart"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:dragStart")),(0,i.kt)("h3",{id:"v-ondrop"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:drop")),(0,i.kt)("h2",{id:"keyboard-events"},"Keyboard Events"),(0,i.kt)("h3",{id:"v-onkeydown"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:keyDown")),(0,i.kt)("h3",{id:"v-onkeypress"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:keyPress")),(0,i.kt)("h3",{id:"v-onkeyup"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:keyUp")),(0,i.kt)("h2",{id:"clipboard-events"},"Clipboard Events"),(0,i.kt)("h3",{id:"v-oncut"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:cut")),(0,i.kt)("h3",{id:"v-oncopy"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:copy")),(0,i.kt)("h3",{id:"v-onpaste"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:paste")),(0,i.kt)("h2",{id:"form-events"},"Form Events"),(0,i.kt)("h3",{id:"v-oninput"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:input")),(0,i.kt)("h3",{id:"v-onsubmit"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:submit")),(0,i.kt)("h3",{id:"v-onchange"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:change")),(0,i.kt)("h2",{id:"focus-events"},"Focus Events"),(0,i.kt)("h3",{id:"v-onfocus"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:focus")),(0,i.kt)("h3",{id:"v-onblur"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:blur")),(0,i.kt)("h2",{id:"ui-wheel-events"},"UI Wheel Events"),(0,i.kt)("h3",{id:"v-onscroll"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:scroll")),(0,i.kt)("h3",{id:"v-onwheel"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:wheel")),(0,i.kt)("h2",{id:"selection-events"},"Selection Events"),(0,i.kt)("h3",{id:"v-onselect"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:select")),(0,i.kt)("h2",{id:"touch-events"},"Touch Events"),(0,i.kt)("h3",{id:"v-ontouchcancel"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:touchCancel")),(0,i.kt)("h3",{id:"v-ontouchend"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:touchEnd")),(0,i.kt)("h3",{id:"v-ontouchmove"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:touchMove")),(0,i.kt)("h3",{id:"v-ontouchstart"},(0,i.kt)("inlineCode",{parentName:"h3"},"v-on:touchStart")))}u.isMDXComponent=!0}}]);