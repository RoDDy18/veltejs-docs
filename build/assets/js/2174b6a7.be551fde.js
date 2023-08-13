"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[6896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:11},o="Fragments",s={unversionedId:"essentials/fragments",id:"essentials/fragments",title:"Fragments",description:"A common pattern in Velte is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",source:"@site/docs/essentials/fragments.md",sourceDirName:"essentials",slug:"/essentials/fragments",permalink:"/next/essentials/fragments",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/docs/essentials/fragments.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Pub/Sub Events Pattern",permalink:"/next/essentials/pubsub"},next:{title:"Components",permalink:"/next/category/components"}},i={},p=[{value:"Usage",id:"usage",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fragments"},"Fragments"),(0,a.kt)("p",null,"A common pattern in Velte is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM."),(0,a.kt)("p",null,"A common pattern is for a component to return a list of children. Take this example React snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Table.jsx"',title:'"Table.jsx"'},"const Table = ()=> {\n    return (\n      <table>\n        <tr>\n          <Columns />\n        </tr>\n      </table>\n    )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Columns />")," would need to return multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"<td>")," elements in order for the rendered HTML to be valid. If a parent div was used inside the render() of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Columns />"),", then the resulting HTML will be invalid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Columns.jsx"',title:'"Columns.jsx"'},"const Columns = ()=> {\n    return (\n      <div>\n        <td>Hello</td>\n        <td>World</td>\n      </div>\n    )\n}\n")),(0,a.kt)("p",null,"results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table />")," output of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<table>\n  <tr>\n    <div>\n      <td>Hello</td>\n      <td>World</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.kt)("p",null,"Fragments solve this problem."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use fragments in Velte, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"v-wrap")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Columns.jsx"',title:'"Columns.jsx"'},"const Columns = ()=> {\n    return (\n      <v-wrap>\n        <td>Hello</td>\n        <td>World</td>\n      </v-wrap>\n    )\n}\n")),(0,a.kt)("p",null,"which results in a correct ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table />")," output of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<table>\n  <tr>\n    <td>Hello</td>\n    <td>World</td>\n  </tr>\n</table>\n\n")))}m.isMDXComponent=!0}}]);