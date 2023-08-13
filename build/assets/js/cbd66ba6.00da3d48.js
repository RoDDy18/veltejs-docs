"use strict";(self.webpackChunkveltejs_docs=self.webpackChunkveltejs_docs||[]).push([[4355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:11},l="Fragments",s={unversionedId:"essentials/fragments",id:"version-2.0.0-rc.0/essentials/fragments",title:"Fragments",description:"A common pattern in Velte is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.",source:"@site/versioned_docs/version-2.0.0-rc.0/essentials/fragments.md",sourceDirName:"essentials",slug:"/essentials/fragments",permalink:"/essentials/fragments",draft:!1,editUrl:"https://github.com/RoDDy18/veltejs-docs/tree/main/versioned_docs/version-2.0.0-rc.0/essentials/fragments.md",tags:[],version:"2.0.0-rc.0",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Pub/Sub Events Pattern",permalink:"/essentials/pubsub"},next:{title:"Components",permalink:"/category/components"}},i={},p=[{value:"Usage",id:"usage",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fragments"},"Fragments"),(0,a.kt)("p",null,"A common pattern in Velte is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM."),(0,a.kt)("p",null,"A common pattern is for a component to return a list of children. Take this example React snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Table.jsx"',title:'"Table.jsx"'},"const Table = ()=> {\n    return (\n      <table>\n        <tr>\n          <Columns />\n        </tr>\n      </table>\n    )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Columns />")," would need to return multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"<td>")," elements in order for the rendered HTML to be valid. If a parent div was used inside the render() of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Columns />"),", then the resulting HTML will be invalid."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Columns.jsx"',title:'"Columns.jsx"'},"const Columns = ()=> {\n    return (\n      <div>\n        <td>Hello</td>\n        <td>World</td>\n      </div>\n    )\n}\n")),(0,a.kt)("p",null,"results in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table />")," output of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<table>\n  <tr>\n    <div>\n      <td>Hello</td>\n      <td>World</td>\n    </div>\n  </tr>\n</table>\n")),(0,a.kt)("p",null,"Fragments solve this problem."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To use fragments in Velte, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"v-wrap")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Columns.jsx"',title:'"Columns.jsx"'},"const Columns = ()=> {\n    return (\n      <v-wrap>\n        <td>Hello</td>\n        <td>World</td>\n      </v-wrap>\n    )\n}\n")),(0,a.kt)("p",null,"which results in a correct ",(0,a.kt)("inlineCode",{parentName:"p"},"<Table />")," output of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<table>\n  <tr>\n    <td>Hello</td>\n    <td>World</td>\n  </tr>\n</table>\n\n")))}d.isMDXComponent=!0}}]);