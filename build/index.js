(()=>{"use strict";var e={954:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(81),o=t.n(n),a=t(645),i=t.n(a)()(o());i.push([e.id,".slideshow-slider {\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    max-width: 500px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.slide {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 400px;\r\n    border-radius: 40px;\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=n.base?s[0]+n.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var m=o(p,n);n.byIndex=c,r.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);r[c].references--}for(var s=n(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}a=s}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var n={};(()=>{t.r(n),t.d(n,{SlideShow:()=>S});const e=require("react");var r=t.n(e),o=t(379),a=t.n(o),i=t(795),c=t.n(i),s=t(569),l=t.n(s),u=t(565),d=t.n(u),f=t(216),p=t.n(f),m=t(589),v=t.n(m),y=t(954),h={};h.styleTagTransform=v(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=p(),a()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const b=function(e){var t=e.backgroundColor;return r().createElement("div",{className:"slide",style:{backgroundColor:t}},r().createElement("h1",null,e.slideName))};function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}const S=function(t){var n,o,a=t.firstSlideName,i=t.secondSlideName,c=t.thirdSlideName,s=["#0088FE","#00C49F","#FFBB28"],l=(n=(0,e.useState)(0),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(n,o)||function(e,r){if(e){if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,r):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());return l[0],l[1],r().createElement("div",{className:"slideshow-slider",style:{transform:"translate3d(".concat(-0,"%, 0, 0)")}},r().createElement(b,{slideName:a,backgroundColor:s[0]}),r().createElement(b,{slideName:i,backgroundColor:s[1]}),r().createElement(b,{slideName:c,backgroundColor:s[2]}))}})(),module.exports=n})();