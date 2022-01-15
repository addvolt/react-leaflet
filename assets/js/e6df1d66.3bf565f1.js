"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[732],{876:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7896),o=n(1461),a=(n(2784),n(876)),i=["components"],l={title:"React Leaflet Core"},c=void 0,p={unversionedId:"core-introduction",id:"core-introduction",title:"React Leaflet Core",description:"Introduction",source:"@site/docs/core-introduction.md",sourceDirName:".",slug:"/core-introduction",permalink:"/docs/core-introduction",tags:[],version:"current",frontMatter:{title:"React Leaflet Core"},sidebar:"docs",previous:{title:"Child components",permalink:"/docs/api-components"},next:{title:"Core architecture",permalink:"/docs/core-architecture"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Audience",id:"audience",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"React Leaflet's core APIs are implemented in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package to provide a separation from the public APIs.\nThe goal of this package is to make most of React Leaflet's internal logic available to developers to easily implement custom behaviors, such as third-party Leaflet plugins."),(0,a.kt)("h2",{id:"audience"},"Audience"),(0,a.kt)("p",null,"You might want to learn about the core APIs if you want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customize how public components work, by creating an alternative implementation matching your needs"),(0,a.kt)("li",{parentName:"ul"},"Implement new components not provided by React Leaflet"),(0,a.kt)("li",{parentName:"ul"},"Simply learn more about how React Leaflet works")),(0,a.kt)("p",null,"If you're only interested in using the public APIs of React Leaflet, their usage is covered in the previous sections of this documentation, notably the ",(0,a.kt)("a",{parentName:"p",href:"/docs/start-introduction"},"getting started")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-map"},"public API")," pages."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package is a dependency of the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-leaflet")," one. The main ",(0,a.kt)("a",{parentName:"p",href:"/docs/start-installation"},"installation steps")," from the getting started documentation should be followed to use the core APIs."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"All the ",(0,a.kt)("a",{parentName:"p",href:"/docs/core-api"},"core APIs")," can be imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@react-leaflet/core")," package, such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createControlComponent } from '@react-leaflet/core'\nimport { Control } from 'leaflet'\n\nexport const ZoomControl = createControlComponent(\n  (props) => new Control.Zoom(props),\n)\n")),(0,a.kt)("p",null,"The following page presents the architecture and usage in more details."))}d.isMDXComponent=!0}}]);