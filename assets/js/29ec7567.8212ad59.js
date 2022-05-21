"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8e3],{876:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(2784);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,u=d["".concat(i,".").concat(c)]||d[c]||k[c]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var a=n(7896),l=n(1461),r=(n(2784),n(876)),o=["components"],p={title:"Core API"},i=void 0,s={unversionedId:"core-api",id:"core-api",title:"Core API",description:"Interfaces and types",source:"@site/docs/core-api.mdx",sourceDirName:".",slug:"/core-api",permalink:"/docs/core-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Core API"},sidebar:"docs",previous:{title:"Core architecture",permalink:"/docs/core-architecture"},next:{title:"Logo & Branding",permalink:"/docs/extra-logo-branding"}},m={},k=[{value:"Interfaces and types",id:"interfaces-and-types",level:2},{value:"ControlledLayer",id:"controlledlayer",level:3},{value:"LeafletContextInterface",id:"leafletcontextinterface",level:3},{value:"LeafletElement",id:"leafletelement",level:3},{value:"ElementHook",id:"elementhook",level:3},{value:"DivOverlay",id:"divoverlay",level:3},{value:"SetOpenFunc",id:"setopenfunc",level:3},{value:"DivOverlayLifecycleHook",id:"divoverlaylifecyclehook",level:3},{value:"DivOverlayHook",id:"divoverlayhook",level:3},{value:"EventedProps",id:"eventedprops",level:3},{value:"LayerProps",id:"layerprops",level:3},{value:"PathProps",id:"pathprops",level:3},{value:"CircleMarkerProps",id:"circlemarkerprops",level:3},{value:"MediaOverlayProps",id:"mediaoverlayprops",level:3},{value:"PropsWithChildren",id:"propswithchildren",level:3},{value:"EventedWithChildrenProps",id:"eventedwithchildrenprops",level:3},{value:"PathWithChildrenProps",id:"pathwithchildrenprops",level:3},{value:"Utilities",id:"utilities",level:2},{value:"createElementObject",id:"createelementobject",level:3},{value:"extendContext",id:"extendcontext",level:3},{value:"Context",id:"context",level:2},{value:"LeafletContext",id:"leafletcontext",level:3},{value:"LeafletProvider",id:"leafletprovider",level:3},{value:"createLeafletContext",id:"createleafletcontext",level:3},{value:"useLeafletContext",id:"useleafletcontext",level:3},{value:"Hook factories",id:"hook-factories",level:2},{value:"createElementHook",id:"createelementhook",level:3},{value:"createControlHook",id:"createcontrolhook",level:3},{value:"createDivOverlayHook",id:"createdivoverlayhook",level:3},{value:"createLayerHook",id:"createlayerhook",level:3},{value:"createPathHook",id:"createpathhook",level:3},{value:"Lifecycle hooks",id:"lifecycle-hooks",level:2},{value:"useEventHandlers",id:"useeventhandlers",level:3},{value:"useLayerLifecycle",id:"uselayerlifecycle",level:3},{value:"usePathOptions",id:"usepathoptions",level:3},{value:"Update functions",id:"update-functions",level:2},{value:"updateCircle",id:"updatecircle",level:3},{value:"updateGridLayer",id:"updategridlayer",level:3},{value:"updateMediaOverlay",id:"updatemediaoverlay",level:3},{value:"DOM interactions",id:"dom-interactions",level:2},{value:"addClassName",id:"addclassname",level:3},{value:"removeClassName",id:"removeclassname",level:3},{value:"updateClassName",id:"updateclassname",level:3},{value:"Component factories",id:"component-factories",level:2},{value:"createContainerComponent",id:"createcontainercomponent",level:3},{value:"createDivOverlayComponent",id:"createdivoverlaycomponent",level:3},{value:"createLeafComponent",id:"createleafcomponent",level:3},{value:"High-level component factories",id:"high-level-component-factories",level:2},{value:"createControlComponent",id:"createcontrolcomponent",level:3},{value:"createLayerComponent",id:"createlayercomponent",level:3},{value:"createOverlayComponent",id:"createoverlaycomponent",level:3},{value:"createPathComponent",id:"createpathcomponent",level:3},{value:"createTileLayerComponent",id:"createtilelayercomponent",level:3}],d={toc:k};function c(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces-and-types"},"Interfaces and types"),(0,r.kt)("h3",{id:"controlledlayer"},"ControlledLayer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ControlledLayer = {\n  addLayer(layer: Layer): void\n  removeLayer(layer: Layer): void\n}\n")),(0,r.kt)("h3",{id:"leafletcontextinterface"},"LeafletContextInterface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type LeafletContextInterface = Readonly<{\n  map: Map\n  layerContainer?: ControlledLayer | LayerGroup\n  layersControl?: Control.Layers\n  overlayContainer?: Layer\n  pane?: string\n}>\n")),(0,r.kt)("h3",{id:"leafletelement"},"LeafletElement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type LeafletElement<T, C = any> = Readonly<{\n  instance: T\n  context: LeafletContextInterface\n  container?: C | null\n}>\n")),(0,r.kt)("h3",{id:"elementhook"},"ElementHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type ElementHook<E, P> = (\n  props: P,\n  context: LeafletContextInterface,\n) => MutableRefObject<LeafletElement<E>>\n")),(0,r.kt)("h3",{id:"divoverlay"},"DivOverlay"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlay = Popup | Tooltip\n")),(0,r.kt)("h3",{id:"setopenfunc"},"SetOpenFunc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type SetOpenFunc = (open: boolean) => void\n")),(0,r.kt)("h3",{id:"divoverlaylifecyclehook"},"DivOverlayLifecycleHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlayLifecycleHook<E, P> = (\n  element: LeafletElement<E>,\n  context: LeafletContextInterface,\n  props: P,\n  setOpen: SetOpenFunc,\n) => void\n")),(0,r.kt)("h3",{id:"divoverlayhook"},"DivOverlayHook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type DivOverlayHook<E extends DivOverlay, P> = (\n  useElement: ElementHook<E, P>,\n  useLifecycle: DivOverlayLifecycleHook<E, P>,\n) => (props: P, setOpen: SetOpenFunc) => ReturnType<ElementHook<E, P>>\n")),(0,r.kt)("h3",{id:"eventedprops"},"EventedProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type EventedProps = {\n  eventHandlers?: LeafletEventHandlerFnMap\n}\n")),(0,r.kt)("h3",{id:"layerprops"},"LayerProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface LayerProps extends EventedProps, LayerOptions {}\n")),(0,r.kt)("h3",{id:"pathprops"},"PathProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PathProps extends EventedProps {\n  pathOptions?: PathOptions\n}\n")),(0,r.kt)("h3",{id:"circlemarkerprops"},"CircleMarkerProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface CircleMarkerProps extends CircleMarkerOptions, PathProps {\n  center: LatLngExpression\n  children?: ReactNode\n}\n")),(0,r.kt)("h3",{id:"mediaoverlayprops"},"MediaOverlayProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface MediaOverlayProps extends ImageOverlayOptions, EventedProps {\n  bounds: LatLngBoundsExpression\n}\n")),(0,r.kt)("h3",{id:"propswithchildren"},"PropsWithChildren"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type PropsWithChildren = {\n  children?: ReactNode\n}\n")),(0,r.kt)("h3",{id:"eventedwithchildrenprops"},"EventedWithChildrenProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EventedWithChildrenProps extends EventedProps, PropsWithChildren {}\n")),(0,r.kt)("h3",{id:"pathwithchildrenprops"},"PathWithChildrenProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface PathWithChildrenProps extends PathProps, PropsWithChildren {}\n")),(0,r.kt)("h2",{id:"utilities"},"Utilities"),(0,r.kt)("h3",{id:"createelementobject"},"createElementObject"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"T"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"C = any"),": the element's container, if relevant")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"instance: t")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"context: LeafletContextInterface"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"container?: C"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#leafletelement"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletElement<T, C>"))),(0,r.kt)("h3",{id:"extendcontext"},"extendContext"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"source: LeafletContextInterface"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"extra: Partial<LeafletContextInterface>")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContextInterface"))),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("h3",{id:"leafletcontext"},"LeafletContext"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context")," used by React Leaflet, implementing the ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContextInterface"))),(0,r.kt)("h3",{id:"leafletprovider"},"LeafletProvider"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LeafletContext.Provider")," component."),(0,r.kt)("h3",{id:"createleafletcontext"},"createLeafletContext"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"map: Map"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontextinterface"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContextInterface"))),(0,r.kt)("h3",{id:"useleafletcontext"},"useLeafletContext"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hook")," returning the ",(0,r.kt)("a",{parentName:"p",href:"#leafletcontext"},(0,r.kt)("inlineCode",{parentName:"a"},"LeafletContext")),". Calling this hook will throw an error if the context is not provided."),(0,r.kt)("h2",{id:"hook-factories"},"Hook factories"),(0,r.kt)("p",null,"The following functions return ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"React hooks")," for specific purposes."),(0,r.kt)("h3",{id:"createelementhook"},"createElementHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P"),": the component's props"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"C = any"),": the element's container, if relevant")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createcontrolhook"},"createControlHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Control"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends ControlOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createdivoverlayhook"},"createDivOverlayHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useLifecycle: DivOverlayLifecycleHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createlayerhook"},"createLayerHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends LayerProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h3",{id:"createpathhook"},"createPathHook"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends FeatureGroup | Path"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PathProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("a",{parentName:"p",href:"#elementhook"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementHook<E, P>"))),(0,r.kt)("h2",{id:"lifecycle-hooks"},"Lifecycle hooks"),(0,r.kt)("p",null,"These hooks implement specific pieces of logic used by multiple components."),(0,r.kt)("h3",{id:"useeventhandlers"},"useEventHandlers"),(0,r.kt)("p",null,"This hook adds support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventHandlers")," prop, adding and removing event listeners as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<Evented>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"eventHandlers: LeafletEventHandlerFnMap | null | undefined"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"uselayerlifecycle"},"useLayerLifecycle"),(0,r.kt)("p",null,"This hook adds support for adding and removing the layer to/from its parent container or the map."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<Layer>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"context: LeafletContextInterface"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"usepathoptions"},"usePathOptions"),(0,r.kt)("p",null,"This hook adds support for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pathOptions")," prop, updating the layer as needed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: LeafletElement<FeatureGroup | Path>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: PathProps"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"update-functions"},"Update functions"),(0,r.kt)("p",null,"Shared update logic for different components."),(0,r.kt)("h3",{id:"updatecircle"},"updateCircle"),(0,r.kt)("p",null,"Updates the circle's ",(0,r.kt)("inlineCode",{parentName:"p"},"center")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"radius")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends CircleMarker"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends CircleMarkerProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"layer: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updategridlayer"},"updateGridLayer"),(0,r.kt)("p",null,"Updates the layer's ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zIndex")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends GridLayer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends GridLayerOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"layer: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updatemediaoverlay"},"updateMediaOverlay"),(0,r.kt)("p",null,"Updates the overlay's ",(0,r.kt)("inlineCode",{parentName:"p"},"bounds"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"zIndex")," if the props change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends ImageOverlay | SVGOverlay | VideoOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends MediaOverlayProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"overlay: E")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"props: P")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevProps: P"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"dom-interactions"},"DOM interactions"),(0,r.kt)("p",null,"Utility functions to change the class of a ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement"),"."),(0,r.kt)("h3",{id:"addclassname"},"addClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"className: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"removeclassname"},"removeClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"className: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h3",{id:"updateclassname"},"updateClassName"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"element?: HTMLElement")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prevClassName?: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nextClassName?: string"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h2",{id:"component-factories"},"Component factories"),(0,r.kt)("p",null,"These functions create components from the provided element hook."),(0,r.kt)("h3",{id:"createcontainercomponent"},"createContainerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PropsWithChildren"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createdivoverlaycomponent"},"createDivOverlayComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PropsWithChildren"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ReturnType<DivOverlayHook<E, P>>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createleafcomponent"},"createLeafComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useElement: ElementHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h2",{id:"high-level-component-factories"},"High-level component factories"),(0,r.kt)("p",null,"These functions combine hooks and component factories to provide high-level factories for common component types."),(0,r.kt)("h3",{id:"createcontrolcomponent"},"createControlComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Control"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends ControlOptions"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createInstance: (props: P) => E"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createlayercomponent"},"createLayerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createoverlaycomponent"},"createOverlayComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends DivOverlay"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"useLifecycle: DivOverlayLifecycleHook<E, P>"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createpathcomponent"},"createPathComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends FeatureGroup | Path"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends PathWithChildrenProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")),(0,r.kt)("h3",{id:"createtilelayercomponent"},"createTileLayerComponent"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type parameters")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"E extends Layer"),": Leaflet's element class type"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"P extends EventedProps"),": the component's props")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"createElement: (props: P, context: LeafletContextInterface) => LeafletElement<E>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"updateElement?: (instance: E, props: P, prevProps: P) => void"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<E>>")))}c.isMDXComponent=!0}}]);