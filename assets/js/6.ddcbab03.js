(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,r,t){},126:function(e,r,t){"use strict";var n=t(1),i=t(13),o=t(12),s=t(79),a=t(49),u=t(9),c=t(78).f,f=t(54).f,h=t(7).f,p=t(127).trim,l=n.Number,d=l,g=l.prototype,N="Number"==o(t(50)(g)),v="trim"in String.prototype,b=function(e){var r=a(e,!1);if("string"==typeof r&&r.length>2){var t,n,i,o=(r=v?r.trim():p(r,3)).charCodeAt(0);if(43===o||45===o){if(88===(t=r.charCodeAt(2))||120===t)return NaN}else if(48===o){switch(r.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+r}for(var s,u=r.slice(2),c=0,f=u.length;c<f;c++)if((s=u.charCodeAt(c))<48||s>i)return NaN;return parseInt(u,n)}}return+r};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(e){var r=arguments.length<1?0:e,t=this;return t instanceof l&&(N?u(function(){g.valueOf.call(t)}):"Number"!=o(t))?s(new d(b(r)),t,l):b(r)};for(var w,I=t(8)?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),B=0;I.length>B;B++)i(d,w=I[B])&&!i(l,w)&&h(l,w,f(d,w));l.prototype=g,g.constructor=l,t(15)(n,"Number",l)}},127:function(e,r,t){var n=t(4),i=t(21),o=t(9),s=t(128),a="["+s+"]",u=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),f=function(e,r,t){var i={},a=o(function(){return!!s[e]()||"​"!="​"[e]()}),u=i[e]=a?r(h):s[e];t&&(i[t]=u),n(n.P+n.F*a,"String",i)},h=f.trim=function(e,r){return e=String(i(e)),1&r&&(e=e.replace(u,"")),2&r&&(e=e.replace(c,"")),e};e.exports=f},128:function(e,r){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},156:function(e,r,t){"use strict";var n=t(125);t.n(n).a},166:function(e,r,t){"use strict";t.r(r);t(126);var n={props:{height:Number,width:Number,autoResize:Boolean,backgroundColor:Number,clearBeforeRender:Boolean,preserveDrawingBuffer:Boolean,resolution:Number,roundPixels:Boolean,transparent:Boolean},data:function(){var e={width:this.width,height:this.height};return this.autoResize&&(e.autoResize=this.autoResize),this.backgroundColor&&(e.backgroundColor=this.backgroundColor),this.clearBeforeRender&&(e.clearBeforeRender=this.clearBeforeRender),this.preserveDrawingBuffer&&(e.preserveDrawingBuffer=this.preserveDrawingBuffer),this.resolution&&(e.resolution=this.resolution),this.roundPixels&&(e.roundPixels=this.roundPixels),this.transparent&&(e.transparent=this.transparent),{app:new PIXI.Application(e),pixiObjects:{}}},provide:function(){return{app:this.app,pixiObjects:this.pixiObjects}},computed:{stage:function(){return this.app.stage},instance:function(){return this.app.stage},renderer:function(){return this.app.renderer}},mounted:function(){var e=this;this.$el.appendChild(this.app.view),this.app.ticker.add(function(r){return e.$emit("tick",r)})},watch:{autoResize:function(e){this.renderer.autoResize=e},backgroundColor:function(e){this.renderer.backgroundColor=e},clearBeforeRender:function(e){this.renderer.clearBeforeRender=e},preserveDrawingBuffer:function(e){this.renderer.preserveDrawingBuffer=e},resolution:function(e){this.renderer.resolution=e},roundPixels:function(e){this.renderer.roundPixels=e},transparent:function(e){this.renderer.transparent=e},height:function(e){this.renderer.resize(this.width,e)},width:function(e){this.renderer.resize(e,this.height)}}},i=(t(156),t(6)),o=Object(i.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"pixi-renderer"},[this._t("default")],2)},[],!1,null,null,null);o.options.__file="Renderer.vue";r.default=o.exports}}]);