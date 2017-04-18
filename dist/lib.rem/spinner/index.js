/*! vue-ydui v0.5.0 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Spinner=void 0;var i=n(74),o=r(i);t.Spinner=o.default},1:function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var u=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}})}return{esModule:i,exports:o,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));d[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(m)return h;r.parentNode.removeChild(r)}if(v){var o=p++;r=f||(f=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document,c=n(4),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,m=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){m=n;var i=c(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=d[a.id];s.refs--,n.push(s)}t?(i=c(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],u=o[2],c=o[3],d={id:e+":"+i,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},15:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.m-spinner{border:1px solid #eae8e8;border-radius:1px;display:inline-block;overflow:hidden;height:.6rem}.m-spinner>a{float:left;width:.6rem;height:.6rem;line-height:.62rem;text-align:center;font-weight:700;color:#666;letter-spacing:0;background-color:#f8f8f8}.m-spinner>a:active{background-color:#ececec}.m-spinner>a:after{font-family:YDUI-INLAY;color:#777;font-size:.18rem}.m-spinner>a:first-child:after{content:"\\E60B"}.m-spinner>a:last-child:after{content:"\\E602"}.m-spinner>input{letter-spacing:0;float:left;width:.85rem;height:.6rem;line-height:2.7;text-align:center;color:#666;border:none;font-size:.26rem;background-color:#fff}',""])},74:function(e,t,n){n(125);var r=n(1)(n(185),n(85),null,null);e.exports=r.exports},85:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"m-spinner"},[n("a",{ref:"minus",attrs:{href:"javascript:;"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.counter,expression:"counter"}],ref:"numInput",staticClass:"spinner-input",attrs:{type:"text",readonly:e.readonly,placeholder:""},domProps:{value:e.counter},on:{input:function(t){t.target.composing||(e.counter=t.target.value)}}}),e._v(" "),n("a",{ref:"add",attrs:{href:"javascript:;"}})])},staticRenderFns:[]}},125:function(e,t,n){var r=n(15);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("3d2df5f8",r,!0)},185:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-spinner",data:function(){return{counter:0,tapParams:{timer:null,tapStartTime:0},parms:{max:0,min:-1}}},props:{unit:{default:1,validator:function(e){return/^([1-9]\d*)$/.test(e)}},max:{default:0,validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}},min:{default:-1,validator:function(e){return/^((-?([1-9]\d*))|0)$/.test(e)}},longpress:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},value:{validator:function(e){return/^(([1-9]\d*)|0)$/.test(e)}}},methods:{init:function(){this.checkParameters()&&(this.setDefalutValue(),this.bindEvents())},checkParameters:function(){var e=~~this.max,t=~~this.unit,n=~~this.min;return e<t&&0!=e?(console.error("[YDUI warn]: The parameter 'max'("+e+") must be greater than or equal to 'unit'("+t+")."),!1):e%t!=0?(console.error("[YDUI warn]: The parameter 'max'("+e+") and 'unit'("+t+") must be multiple."),!1):n%t!=0&&n>=0?(console.error("[YDUI warn]: The parameter 'min'("+n+") and 'unit'("+t+") must be multiple."),!1):!(e<n&&0!=e)||(console.error("[YDUI warn]: The parameter 'max'("+e+") must be greater than to 'min'("+n+")."),!1)},setDefalutValue:function(){var e=~~this.unit,t=~~this.min,n=~~this.value;return~~n>0?void this.setValue(n):void(t<0?this.setValue(e):this.setValue(t))},calculation:function(e){var t=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;if(!this.readonly){var i=this.counter,o=void 0;if("add"==e){if(o=i+r,0!=t&&o>t)return}else if(o=i-r,o<n)return;this.setValue(o),this.longpress&&this.longpressHandler(e)}},setValue:function(e){var t=~~this.max,n=~~this.min<0?~~this.unit:~~this.min,r=~~this.unit;/^(([1-9]\d*)|0)$/.test(e)||(e=r),e>t&&0!=t&&(e=t),e%r>0&&(e=e-e%r+r,e>t&&0!=t&&(e-=r)),e<n&&(e=n-n%r),this.counter=e,this.$emit("input",e)},longpressHandler:function(e){var t=this,n=(new Date).getTime()/1e3,r=n-this.tapParams.tapStartTime;r<1&&(r=.5);var i=10*r;30==r&&(i=50),r>=40&&(i=100),this.tapParams.timer=setTimeout(function(){t.calculation(e)},1e3/i)},clearTapTimer:function(){clearTimeout(this.tapParams.timer)},bindEvents:function(){var e=this,t=this.$refs.add,n=this.$refs.minus,r={mousedownEvent:"touchstart",mouseupEvent:"touchend"},i=window.Modernizr&&!!window.Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}();i||(r.mousedownEvent="mousedown",r.mouseupEvent="mouseup"),t.addEventListener(r.mousedownEvent,function(n){e.longpress&&(n.preventDefault(),n.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,t.addEventListener(r.mouseupEvent,e.clearTapTimer)),e.calculation("add")}),n.addEventListener(r.mousedownEvent,function(t){e.longpress&&(t.preventDefault(),t.stopPropagation(),e.tapParams.tapStartTime=(new Date).getTime()/1e3,n.addEventListener(r.mouseupEvent,e.clearTapTimer)),e.calculation("minus")}),this.$refs.numInput.addEventListener("change",function(){e.setValue(e.counter)})}},mounted:function(){this.init()}}}})});