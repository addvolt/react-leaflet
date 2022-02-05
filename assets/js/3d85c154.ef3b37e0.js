"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7485],{876:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,u(u({ref:n},l),{},{components:t})):r.createElement(f,u({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var c=2;c<a;c++)u[c]=t[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8657:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(7896),o=t(1461),a=(t(2784),t(876)),u=["components"],i={title:"View bounds"},s=void 0,c={unversionedId:"example-view-bounds",id:"version-3.x/example-view-bounds",title:"View bounds",description:"",source:"@site/versioned_docs/version-3.x/example-view-bounds.md",sourceDirName:".",slug:"/example-view-bounds",permalink:"/docs/example-view-bounds",tags:[],version:"3.x",frontMatter:{title:"View bounds"},sidebar:"docs",previous:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"},next:{title:"Animated panning",permalink:"/docs/example-animated-panning"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useMemo, useState } from 'react'\nimport { MapContainer, Reactangle, TileLayer, useMap } from 'react-leaflet'\n\nconst innerBounds = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\nconst outerBounds = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\n\nconst redColor = { color: 'red' }\nconst whiteColor = { color: 'white' }\n\nfunction SetBoundsRectangles() {\n  const [bounds, setBounds] = useState(outerBounds)\n  const map = useMap()\n\n  const innerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(innerBounds)\n        map.fitBounds(innerBounds)\n      },\n    }),\n    [map],\n  )\n  const outerHandlers = useMemo(\n    () => ({\n      click() {\n        setBounds(outerBounds)\n        map.fitBounds(outerBounds)\n      },\n    }),\n    [map],\n  )\n\n  return (\n    <>\n      <Rectangle\n        bounds={outerBounds}\n        eventHandlers={outerHandlers}\n        pathOptions={bounds === outerBounds ? redColor : whiteColor}\n      />\n      <Rectangle\n        bounds={innerBounds}\n        eventHandlers={innerHandlers}\n        pathOptions={bounds === innerBounds ? redColor : whiteColor}\n      />\n    </>\n  )\n}\n\nfunction BoundsExample() {\n  return (\n    <MapContainer bounds={outerBounds}>\n      <TileLayer\n        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n        url=\"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n      />\n      <SetBoundsRectangles />\n    </MapContainer>\n  )\n}\n")))}d.isMDXComponent=!0}}]);