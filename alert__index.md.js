(self["webpackChunkxiaoshuai_ui"]=self["webpackChunkxiaoshuai_ui"]||[]).push([[97],{8036:function(){},22231:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(9684);n(72255)},75139:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(67294),l=n(96089),a=n(97397),i=n.n(a);n(8036);function c(e,t){return s(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),t&&a.length===t)break}catch(o){c=!0,l=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw l}}return a}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),a=c(l,2),o=a[0],u=a[1],d=(0,r.useState)(!1),m=c(d,2),s=m[0],f=m[1];return(0,r.useEffect)((function(){var e=n.current,t=i()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":s||void 0},r.createElement("table",null,t)))},E=f,h={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}},p=function(e){var t=e.identifier,n=e["export"],a=(0,l.useApiData)(t),i=(0,r.useContext)(l.context),c=i.locale,o=/^zh|cn$/i.test(c)?h["zh-CN"]:h["en-US"];return r.createElement(r.Fragment,null,a&&r.createElement(E,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,o.name),r.createElement("th",null,o.description),r.createElement("th",null,o.type),r.createElement("th",null,o["default"]))),r.createElement("tbody",null,a[n].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e["default"]||e.required&&o.required||"--")))})))))},v=n(84638),y=r.memo((e=>{var t=e.demos,n=t["alert-basic"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"alert-\u8b66\u544a\u63d0\u793a"},r.createElement(l.AnchorLink,{to:"#alert-\u8b66\u544a\u63d0\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Alert \u8b66\u544a\u63d0\u793a"),r.createElement("p",null,"\u8b66\u544a\u63d0\u793a\uff0c\u5c55\u73b0\u9700\u8981\u5173\u6ce8\u7684\u4fe1\u606f\u3002"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.createElement(l.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.createElement(v.default,t["alert-basic"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(p,{src:"./index.tsx",identifier:"alert",export:"default"}))))})),b=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(y,{demos:n})}}}]);