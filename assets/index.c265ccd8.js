var h0=Object.defineProperty;var u0=(n,e,t)=>e in n?h0(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var bt=(n,e,t)=>(u0(n,typeof e!="symbol"?e+"":e,t),t),d0=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var Bo=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var Xi=(n,e,t)=>(d0(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const f0="modulepreload",p0=function(n){return"/CFW2022/"+n},Vu={},Ul=function(e,t,i){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=p0(r),r in Vu)return;Vu[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":f0,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((c,l)=>{a.addEventListener("load",c),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var $s=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++n%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";n=h}var r=(performance||Date).now(),s=r,o=0,a=t(new $s.Panel("FPS","#0ff","#002")),c=t(new $s.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=t(new $s.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var h=(performance||Date).now();if(c.update(h-r,200),h>=s+1e3&&(a.update(o*1e3/(h-s),100),s=h,o=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){r=this.end()},domElement:e,setMode:i}};$s.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,h=2*o,u=3*o,d=15*o,f=74*o,g=30*o,m=document.createElement("canvas");m.width=a,m.height=c,m.style.cssText="width:80px;height:48px";var p=m.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,a,c),p.fillStyle=e,p.fillText(n,l,h),p.fillRect(u,d,f,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u,d,f,g),{dom:m,update:function(v,b){i=Math.min(i,v),r=Math.max(r,v),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,a,d),p.fillStyle=e,p.fillText(s(v)+" "+n+" ("+s(i)+"-"+s(r)+")",l,h),p.drawImage(m,u+o,d,f-o,g,u,d,f-o,g),p.fillRect(u+f-o,d,o,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u+f-o,d,o,s((1-v/b)*g))}}};const m0=$s;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class Hn{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),Hn.nextNameID=Hn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Hn.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class g0 extends Hn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function zc(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const _0={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:zc,toHexString:zc},io={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},v0={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const i=io.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([n,e,t],i=1)=>io.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},w0={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=io.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r:n,g:e,b:t},i=1)=>io.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},y0=[_0,io,v0,w0];class x0 extends Hn{constructor(e,t,i,r){var s;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,y0.find(o=>o.match(s))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=zc(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Bl extends Hn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class b0 extends Hn{constructor(e,t,i,r,s,o){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let t,i,r,s,o,a=!1;const c=h=>{if(a){const u=h.clientX-t,d=h.clientY-i;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}a||(o-=(h.clientY-r)*this._step*this._arrowKeyMultiplier(h),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)),r=h.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{const h=parseFloat(this.$input.value);isNaN(h)||this.setValue(this._clamp(h))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,i=r=h.clientY,a=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const f=this.$slider.getBoundingClientRect();let g=(m=d,p=f.left,v=f.right,b=this._min,M=this._max,(m-p)/(v-p)*(M-b)+b);var m,p,v,b,M;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let r,s,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},c=d=>{if(o){const f=d.touches[0].clientX-r,g=d.touches[0].clientY-s;Math.abs(f)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else d.preventDefault(),e(d.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(r=d.touches[0].clientX,s=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",c),window.addEventListener("touchend",l))}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class S0 extends Hn{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class C0 extends Hn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Gu=!1;class Mh{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Gu&&o&&(function(c){const l=document.createElement("style");l.innerHTML=c;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(l,h):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Gu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,i,r,s){if(Object(i)===i)return new S0(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new b0(this,e,t,i,r,s);case"boolean":return new g0(this,e,t);case"string":return new C0(this,e,t);case"function":return new Bl(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new x0(this,e,t,i)}addFolder(e){return new Mh({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Bl||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Bl)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const M0=Mh;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="145",E0=0,qu=1,T0=2,Op=1,A0=2,zs=3,os=0,mn=1,ii=2,Di=0,Jr=1,Hc=2,$u=3,ju=4,I0=5,$r=100,R0=101,P0=102,Xu=103,Yu=104,L0=200,D0=201,N0=202,k0=203,Fp=204,Up=205,O0=206,F0=207,U0=208,B0=209,z0=210,H0=0,W0=1,V0=2,Wc=3,G0=4,q0=5,$0=6,j0=7,Bp=0,X0=1,Y0=2,li=0,K0=1,J0=2,Z0=3,Q0=4,ev=5,zp=300,as=301,ls=302,Vc=303,Gc=304,nl=306,ro=1e3,pn=1001,qc=1002,Yt=1003,Ku=1004,Ju=1005,Wt=1006,tv=1007,yo=1008,fr=1009,nv=1010,iv=1011,Hp=1012,rv=1013,nr=1014,zn=1015,ri=1016,sv=1017,ov=1018,Zr=1020,av=1021,lv=1022,Ln=1023,cv=1024,hv=1025,ar=1026,cs=1027,Wp=1028,uv=1029,dv=1030,fv=1031,pv=1033,zl=33776,Hl=33777,Wl=33778,Vl=33779,Zu=35840,Qu=35841,ed=35842,td=35843,mv=36196,nd=37492,id=37496,rd=37808,sd=37809,od=37810,ad=37811,ld=37812,cd=37813,hd=37814,ud=37815,dd=37816,fd=37817,pd=37818,md=37819,gd=37820,_d=37821,vd=36492,ui=3e3,Tt=3001,gv=3200,_v=3201,Vp=0,vv=1,ti="srgb",ir="srgb-linear",Gl=7680,wv=519,$c=35044,wd="300 es",jc=1035;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=Math.PI/180,yd=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function yv(n,e){return(n%e+e)%e}function $l(n,e,t){return(1-t)*n+t*e}function xd(n){return(n&n-1)===0&&n!==0}function Xc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Li(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(){xn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],m=r[0],p=r[3],v=r[6],b=r[1],M=r[4],x=r[7],T=r[2],R=r[5],F=r[8];return s[0]=o*m+a*b+c*T,s[3]=o*p+a*M+c*R,s[6]=o*v+a*x+c*F,s[1]=l*m+h*b+u*T,s[4]=l*p+h*M+u*R,s[7]=l*v+h*x+u*F,s[2]=d*m+f*b+g*T,s[5]=d*p+f*M+g*R,s[8]=d*v+f*x+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(r*l-h*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(h*t-r*c)*m,e[5]=(r*s-a*t)*m,e[6]=f*m,e[7]=(i*c-l*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],h=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*h,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Gp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jl={[ti]:{[ir]:lr},[ir]:{[ti]:va}},Tn={legacyMode:!0,get workingColorSpace(){return ir},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(jl[e]&&jl[e][t]!==void 0){const i=jl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nt={r:0,g:0,b:0},An={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ho(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ir){return this.r=e,this.g=t,this.b=i,Tn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ir){if(e=yv(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xl(o,s,e+1/3),this.g=Xl(o,s,e),this.b=Xl(o,s,e-1/3)}return Tn.toWorkingColorSpace(this,r),this}setStyle(e,t=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Tn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Tn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ti){const i=qp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Tn.fromWorkingColorSpace(Ho(this,Nt),e),Kt(Nt.r*255,0,255)<<16^Kt(Nt.g*255,0,255)<<8^Kt(Nt.b*255,0,255)<<0}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ir){Tn.fromWorkingColorSpace(Ho(this,Nt),t);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ir){return Tn.fromWorkingColorSpace(Ho(this,Nt),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ti){return Tn.fromWorkingColorSpace(Ho(this,Nt),e),e!==ti?`color(${e} ${Nt.r} ${Nt.g} ${Nt.b})`:`rgb(${Nt.r*255|0},${Nt.g*255|0},${Nt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(An),An.h+=e,An.s+=t,An.l+=i,this.setHSL(An.h,An.s,An.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(zo);const i=$l(An.h,zo.h,t),r=$l(An.s,zo.s,t),s=$l(An.l,zo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Qe.NAMES=qp;let Mr;class $p{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mr===void 0&&(Mr=so("canvas")),Mr.width=e.width,Mr.height=e.height;const i=Mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jp{constructor(e=null){this.isSource=!0,this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yl(r[o].image)):s.push(Yl(r[o]))}else s=Yl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$p.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xv=0;class rn extends ws{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=pn,r=pn,s=Wt,o=yo,a=Ln,c=fr,l=1,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=Ni(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=zp;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],m=c[2],p=c[6],v=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,T=(v+1)/2,R=(h+d)/4,F=(u+m)/4,y=(g+p)/4;return M>x&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=F/i):x>T?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=F/s,r=y/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-m)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pr extends ws{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Wt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xp extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bv extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(u!==m||c!==d||l!==f||h!==g){let p=1-a;const v=c*d+l*f+h*g+u*m,b=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,v*b);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const x=a*b;if(c=c*p+d*x,l=l*p+f*x,h=h*p+g*x,u=u*p+m*x,p===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,h=c*i+a*t-s*r,u=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new P,bd=new xo;class bo{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Yi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox),Jl.applyMatrix4(e.matrixWorld),this.union(Jl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Wo.subVectors(this.max,As),Er.subVectors(e.a,As),Tr.subVectors(e.b,As),Ar.subVectors(e.c,As),gi.subVectors(Tr,Er),_i.subVectors(Ar,Tr),Ki.subVectors(Er,Ar);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Ki.z,Ki.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Ki.z,0,-Ki.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Ki.y,Ki.x,0];return!Zl(t,Er,Tr,Ar,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Er,Tr,Ar,Wo))?!1:(Vo.crossVectors(gi,_i),t=[Vo.x,Vo.y,Vo.z],Zl(t,Er,Tr,Ar,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new P,new P,new P,new P,new P,new P,new P,new P],Yi=new P,Jl=new bo,Er=new P,Tr=new P,Ar=new P,gi=new P,_i=new P,Ki=new P,As=new P,Wo=new P,Vo=new P,Ji=new P;function Zl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ji.fromArray(n,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sv=new bo,Sd=new P,Go=new P,Ql=new P;class il{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ql.subVectors(e,this.center);const t=Ql.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ql.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Go.set(0,0,1).multiplyScalar(e.radius):Go.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sd.copy(e.center).add(Go)),this.expandByPoint(Sd.copy(e.center).sub(Go)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new P,ec=new P,qo=new P,vi=new P,tc=new P,$o=new P,nc=new P;class Yp{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ec.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(ec);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=vi.dot(this.direction),c=-vi.dot(qo),l=vi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(qo).multiplyScalar(d).add(ec),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){tc.subVectors(t,e),$o.subVectors(i,e),nc.crossVectors(tc,$o);let o=this.direction.dot(nc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const c=a*this.direction.dot($o.crossVectors(vi,$o));if(c<0)return null;const l=a*this.direction.dot(tc.cross(vi));if(l<0||c+l>o)return null;const h=-a*vi.dot(nc);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,h,u,d,f,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=h,v[10]=u,v[14]=d,v[3]=f,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,m=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-m*l,t[9]=-a*c,t[2]=m-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,m=l*u;t[0]=d+m*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=m+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,m=l*u;t[0]=d-m*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,m=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+m,t[1]=c*u,t[5]=m*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,m=a*l;t[0]=c*h,t[4]=m-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-m*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,m=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+m,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cv,e,Mv)}lookAt(e,t,i){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),wi.crossVectors(i,un),wi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),wi.crossVectors(i,un)),wi.normalize(),jo.crossVectors(un,wi),r[0]=wi.x,r[4]=jo.x,r[8]=un.x,r[1]=wi.y,r[5]=jo.y,r[9]=un.y,r[2]=wi.z,r[6]=jo.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],m=i[6],p=i[10],v=i[14],b=i[3],M=i[7],x=i[11],T=i[15],R=r[0],F=r[4],y=r[8],I=r[12],k=r[1],ee=r[5],ne=r[9],$=r[13],U=r[2],K=r[6],ae=r[10],de=r[14],Q=r[3],W=r[7],V=r[11],me=r[15];return s[0]=o*R+a*k+c*U+l*Q,s[4]=o*F+a*ee+c*K+l*W,s[8]=o*y+a*ne+c*ae+l*V,s[12]=o*I+a*$+c*de+l*me,s[1]=h*R+u*k+d*U+f*Q,s[5]=h*F+u*ee+d*K+f*W,s[9]=h*y+u*ne+d*ae+f*V,s[13]=h*I+u*$+d*de+f*me,s[2]=g*R+m*k+p*U+v*Q,s[6]=g*F+m*ee+p*K+v*W,s[10]=g*y+m*ne+p*ae+v*V,s[14]=g*I+m*$+p*de+v*me,s[3]=b*R+M*k+x*U+T*Q,s[7]=b*F+M*ee+x*K+T*W,s[11]=b*y+M*ne+x*ae+T*V,s[15]=b*I+M*$+x*de+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*f-i*c*f)+m*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*h-s*c*h)+p*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*h-i*l*h)+v*(-r*a*h-t*c*u+t*a*d+r*o*u-i*o*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],m=e[13],p=e[14],v=e[15],b=u*p*l-m*d*l+m*c*f-a*p*f-u*c*v+a*d*v,M=g*d*l-h*p*l-g*c*f+o*p*f+h*c*v-o*d*v,x=h*m*l-g*u*l+g*a*f-o*m*f-h*a*v+o*u*v,T=g*u*c-h*m*c-g*a*d+o*m*d+h*a*p-o*u*p,R=t*b+i*M+r*x+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/R;return e[0]=b*F,e[1]=(m*d*s-u*p*s-m*r*f+i*p*f+u*r*v-i*d*v)*F,e[2]=(a*p*s-m*c*s+m*r*l-i*p*l-a*r*v+i*c*v)*F,e[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*f-i*c*f)*F,e[4]=M*F,e[5]=(h*p*s-g*d*s+g*r*f-t*p*f-h*r*v+t*d*v)*F,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*v-t*c*v)*F,e[7]=(o*d*s-h*c*s+h*r*l-t*d*l-o*r*f+t*c*f)*F,e[8]=x*F,e[9]=(g*u*s-h*m*s-g*i*f+t*m*f+h*i*v-t*u*v)*F,e[10]=(o*m*s-g*a*s+g*i*l-t*m*l-o*i*v+t*a*v)*F,e[11]=(h*a*s-o*u*s-h*i*l+t*u*l+o*i*f-t*a*f)*F,e[12]=T*F,e[13]=(h*m*r-g*u*r+g*i*d-t*m*d-h*i*p+t*u*p)*F,e[14]=(g*a*r-o*m*r-g*i*c+t*m*c+o*i*p-t*a*p)*F,e[15]=(o*u*r-h*a*r+h*i*c-t*u*c-o*i*d+t*a*d)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,m=o*h,p=o*u,v=a*u,b=c*l,M=c*h,x=c*u,T=i.x,R=i.y,F=i.z;return r[0]=(1-(m+v))*T,r[1]=(f+x)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(f-x)*R,r[5]=(1-(d+v))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(g+M)*F,r[9]=(p-b)*F,r[10]=(1-(d+m))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const l=1/s,h=1/o,u=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),h=1/(o-s),u=(t+e)*c,d=(i+r)*l,f=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new P,In=new yt,Cv=new P(0,0,0),Mv=new P(1,1,1),wi=new P,jo=new P,un=new P,Cd=new yt,Md=new xo;class So{constructor(e=0,t=0,i=0,r=So.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}So.DefaultOrder="XYZ";So.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Ed=new P,Rr=new xo,Jn=new yt,Xo=new P,Is=new P,Tv=new P,Av=new xo,Td=new P(1,0,0),Ad=new P(0,1,0),Id=new P(0,0,1),Iv={type:"added"},Rd={type:"removed"};class Gt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DefaultUp.clone();const e=new P,t=new So,i=new xo,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new xn}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DefaultMatrixWorldAutoUpdate,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Td,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ed.copy(e).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Td,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xo.copy(e):Xo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Is,Xo,this.up):Jn.lookAt(Xo,Is,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DefaultUp=new P(0,1,0);Gt.DefaultMatrixAutoUpdate=!0;Gt.DefaultMatrixWorldAutoUpdate=!0;const Rn=new P,Zn=new P,ic=new P,Qn=new P,Pr=new P,Lr=new P,Pd=new P,rc=new P,sc=new P,oc=new P;class Bn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rn.subVectors(r,t),Zn.subVectors(i,t),ic.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(Zn),c=Rn.dot(ic),l=Zn.dot(Zn),h=Zn.dot(ic),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Qn),c.set(0,0),c.addScaledVector(s,Qn.x),c.addScaledVector(o,Qn.y),c.addScaledVector(a,Qn.z),c}static isFrontFacing(e,t,i,r){return Rn.subVectors(i,t),Zn.subVectors(e,t),Rn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Rn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Bn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Pr.subVectors(r,i),Lr.subVectors(s,i),rc.subVectors(e,i);const c=Pr.dot(rc),l=Lr.dot(rc);if(c<=0&&l<=0)return t.copy(i);sc.subVectors(e,r);const h=Pr.dot(sc),u=Lr.dot(sc);if(h>=0&&u<=h)return t.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Pr,o);oc.subVectors(e,s);const f=Pr.dot(oc),g=Lr.dot(oc);if(g>=0&&f<=g)return t.copy(s);const m=f*l-c*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Lr,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Pd.subVectors(s,r),a=(u-h)/(u-h+(f-g)),t.copy(r).addScaledVector(Pd,a);const v=1/(p+m+d);return o=m*v,a=d*v,t.copy(i).addScaledVector(Pr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rv=0;class xr extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Jr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fp,this.blendDst=Up,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gl,this.stencilZFail=Gl,this.stencilZPass=Gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rl extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new P,Yo=new De;class Sn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=$c,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Jp extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zp extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Pv=0;const wn=new yt,ac=new Gt,Dr=new P,dn=new bo,Rs=new bo,Bt=new P;class sn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gp(e)?Zp:Jp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(dn.min,Rs.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,Rs.max),dn.expandByPoint(Bt)):(dn.expandByPoint(Rs.min),dn.expandByPoint(Rs.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Bt.fromBufferAttribute(a,l),c&&(Dr.fromBufferAttribute(e,l),Bt.add(Dr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let k=0;k<a;k++)l[k]=new P,h[k]=new P;const u=new P,d=new P,f=new P,g=new De,m=new De,p=new De,v=new P,b=new P;function M(k,ee,ne){u.fromArray(r,k*3),d.fromArray(r,ee*3),f.fromArray(r,ne*3),g.fromArray(o,k*2),m.fromArray(o,ee*2),p.fromArray(o,ne*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const $=1/(m.x*p.y-p.x*m.y);!isFinite($)||(v.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar($),b.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar($),l[k].add(v),l[ee].add(v),l[ne].add(v),h[k].add(b),h[ee].add(b),h[ne].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let k=0,ee=x.length;k<ee;++k){const ne=x[k],$=ne.start,U=ne.count;for(let K=$,ae=$+U;K<ae;K+=3)M(i[K+0],i[K+1],i[K+2])}const T=new P,R=new P,F=new P,y=new P;function I(k){F.fromArray(s,k*3),y.copy(F);const ee=l[k];T.copy(ee),T.sub(F.multiplyScalar(F.dot(ee))).normalize(),R.crossVectors(y,ee);const $=R.dot(h[k])<0?-1:1;c[k*4]=T.x,c[k*4+1]=T.y,c[k*4+2]=T.z,c[k*4+3]=$}for(let k=0,ee=x.length;k<ee;++k){const ne=x[k],$=ne.start,U=ne.count;for(let K=$,ae=$+U;K<ae;K+=3)I(i[K+0]),I(i[K+1]),I(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let m=0,p=c.length;m<p;m++){a.isInterleavedBufferAttribute?f=c[m]*a.data.stride+a.offset:f=c[m]*h;for(let v=0;v<h;v++)d[g++]=l[f++]}return new Sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new yt,Nr=new Yp,lc=new il,yi=new P,xi=new P,bi=new P,cc=new P,hc=new P,uc=new P,Ko=new P,Jo=new P,Zo=new P,Qo=new De,ea=new De,ta=new De,dc=new P,na=new P;class at extends Gt{constructor(e=new sn,t=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),e.ray.intersectsSphere(lc)===!1)||(Ld.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Ld),i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=f.length;m<p;m++){const v=f[m],b=r[v.materialIndex],M=Math.max(v.start,g.start),x=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let T=M,R=x;T<R;T+=3){const F=a.getX(T),y=a.getX(T+1),I=a.getX(T+2);o=ia(this,b,e,Nr,c,l,h,u,d,F,y,I),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,b=p;v<b;v+=3){const M=a.getX(v),x=a.getX(v+1),T=a.getX(v+2);o=ia(this,r,e,Nr,c,l,h,u,d,M,x,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,p=f.length;m<p;m++){const v=f[m],b=r[v.materialIndex],M=Math.max(v.start,g.start),x=Math.min(c.count,Math.min(v.start+v.count,g.start+g.count));for(let T=M,R=x;T<R;T+=3){const F=T,y=T+1,I=T+2;o=ia(this,b,e,Nr,c,l,h,u,d,F,y,I),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let v=m,b=p;v<b;v+=3){const M=v,x=v+1,T=v+2;o=ia(this,r,e,Nr,c,l,h,u,d,M,x,T),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function Lv(n,e,t,i,r,s,o,a){let c;if(e.side===mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==ii,a),c===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:n}}function ia(n,e,t,i,r,s,o,a,c,l,h,u){yi.fromBufferAttribute(r,l),xi.fromBufferAttribute(r,h),bi.fromBufferAttribute(r,u);const d=n.morphTargetInfluences;if(s&&d){Ko.set(0,0,0),Jo.set(0,0,0),Zo.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=d[g],v=s[g];p!==0&&(cc.fromBufferAttribute(v,l),hc.fromBufferAttribute(v,h),uc.fromBufferAttribute(v,u),o?(Ko.addScaledVector(cc,p),Jo.addScaledVector(hc,p),Zo.addScaledVector(uc,p)):(Ko.addScaledVector(cc.sub(yi),p),Jo.addScaledVector(hc.sub(xi),p),Zo.addScaledVector(uc.sub(bi),p)))}yi.add(Ko),xi.add(Jo),bi.add(Zo)}n.isSkinnedMesh&&(n.boneTransform(l,yi),n.boneTransform(h,xi),n.boneTransform(u,bi));const f=Lv(n,e,t,i,yi,xi,bi,dc);if(f){a&&(Qo.fromBufferAttribute(a,l),ea.fromBufferAttribute(a,h),ta.fromBufferAttribute(a,u),f.uv=Bn.getUV(dc,yi,xi,bi,Qo,ea,ta,new De)),c&&(Qo.fromBufferAttribute(c,l),ea.fromBufferAttribute(c,h),ta.fromBufferAttribute(c,u),f.uv2=Bn.getUV(dc,yi,xi,bi,Qo,ea,ta,new De));const g={a:l,b:h,c:u,normal:new P,materialIndex:0};Bn.getNormal(yi,xi,bi,g.normal),f.face=g}return f}class zi extends sn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function g(m,p,v,b,M,x,T,R,F,y,I){const k=x/F,ee=T/y,ne=x/2,$=T/2,U=R/2,K=F+1,ae=y+1;let de=0,Q=0;const W=new P;for(let V=0;V<ae;V++){const me=V*ee-$;for(let se=0;se<K;se++){const ve=se*k-ne;W[m]=ve*b,W[p]=me*M,W[v]=U,l.push(W.x,W.y,W.z),W[m]=0,W[p]=0,W[v]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(se/F),u.push(1-V/y),de+=1}}for(let V=0;V<y;V++)for(let me=0;me<F;me++){const se=d+me+K*V,ve=d+me+K*(V+1),Ae=d+(me+1)+K*(V+1),Be=d+(me+1)+K*V;c.push(se,ve,Be),c.push(ve,Ae,Be),Q+=6}a.addGroup(f,Q,I),f+=Q,d+=de}}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const r in i)e[r]=i[r]}return e}function Dv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Nv={clone:hs,merge:Xt};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Dv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qp extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Qp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ql*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ql*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kr=90,Or=1;class Fv extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new fn(kr,Or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new P(1,0,0)),this.add(r);const s=new fn(kr,Or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const o=new fn(kr,Or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new fn(kr,Or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const c=new fn(kr,Or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new fn(kr,Or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=li,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class em extends rn{constructor(e,t,i,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uv extends pr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new em(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zi(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Di});s.uniforms.tEquirect.value=t;const o=new at(r,s),a=t.minFilter;return t.minFilter===yo&&(t.minFilter=Wt),new Fv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const fc=new P,Bv=new P,zv=new xn;class Ei{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fc.subVectors(i,t).cross(Bv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zv.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new il,ra=new P;class Th{constructor(e=new Ei,t=new Ei,i=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],h=i[6],u=i[7],d=i[8],f=i[9],g=i[10],m=i[11],p=i[12],v=i[13],b=i[14],M=i[15];return t[0].setComponents(a-r,u-c,m-d,M-p).normalize(),t[1].setComponents(a+r,u+c,m+d,M+p).normalize(),t[2].setComponents(a+s,u+l,m+f,M+v).normalize(),t[3].setComponents(a-s,u-l,m-f,M-v).normalize(),t[4].setComponents(a-o,u-h,m-g,M-b).normalize(),t[5].setComponents(a+o,u+h,m+g,M+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hv(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,h){const u=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(h,f),n.bufferData(h,u,d),l.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,f=h.updateRange;n.bindBuffer(u,l),f.count===-1?n.bufferSubData(u,0,d):(t?n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class sl extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],m=[],p=[];for(let v=0;v<h;v++){const b=v*d-o;for(let M=0;M<l;M++){const x=M*u-s;g.push(x,-b,0),m.push(0,0,1),p.push(M/a),p.push(1-v/c)}}for(let v=0;v<c;v++)for(let b=0;b<a;b++){const M=b+l*v,x=b+l*(v+1),T=b+1+l*(v+1),R=b+1+l*v;f.push(M,x,R),f.push(x,T,R)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(p,2))}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xv="vec3 transformed = vec3( position );",Yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Jv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",mw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ew=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ow=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$w=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ny=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xy=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,by=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,My=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Dy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ny=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ky=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Oy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Uy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hy=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ix=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ux=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,px=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:Wv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:qv,aomap_fragment:$v,aomap_pars_fragment:jv,begin_vertex:Xv,beginnormal_vertex:Yv,bsdfs:Kv,iridescence_fragment:Jv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Qv,clipping_planes_pars_fragment:ew,clipping_planes_pars_vertex:tw,clipping_planes_vertex:nw,color_fragment:iw,color_pars_fragment:rw,color_pars_vertex:sw,color_vertex:ow,common:aw,cube_uv_reflection_fragment:lw,defaultnormal_vertex:cw,displacementmap_pars_vertex:hw,displacementmap_vertex:uw,emissivemap_fragment:dw,emissivemap_pars_fragment:fw,encodings_fragment:pw,encodings_pars_fragment:mw,envmap_fragment:gw,envmap_common_pars_fragment:_w,envmap_pars_fragment:vw,envmap_pars_vertex:ww,envmap_physical_pars_fragment:Pw,envmap_vertex:yw,fog_vertex:xw,fog_pars_vertex:bw,fog_fragment:Sw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Mw,lightmap_fragment:Ew,lightmap_pars_fragment:Tw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:Iw,lights_pars_begin:Rw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Dw,lights_phong_fragment:Nw,lights_phong_pars_fragment:kw,lights_physical_fragment:Ow,lights_physical_pars_fragment:Fw,lights_fragment_begin:Uw,lights_fragment_maps:Bw,lights_fragment_end:zw,logdepthbuf_fragment:Hw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Vw,logdepthbuf_vertex:Gw,map_fragment:qw,map_pars_fragment:$w,map_particle_fragment:jw,map_particle_pars_fragment:Xw,metalnessmap_fragment:Yw,metalnessmap_pars_fragment:Kw,morphcolor_vertex:Jw,morphnormal_vertex:Zw,morphtarget_pars_vertex:Qw,morphtarget_vertex:ey,normal_fragment_begin:ty,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:ry,normal_vertex:sy,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:ly,clearcoat_pars_fragment:cy,iridescence_pars_fragment:hy,output_fragment:uy,packing:dy,premultiplied_alpha_fragment:fy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:vy,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:yy,shadowmap_vertex:xy,shadowmask_pars_fragment:by,skinbase_vertex:Sy,skinning_pars_vertex:Cy,skinning_vertex:My,skinnormal_vertex:Ey,specularmap_fragment:Ty,specularmap_pars_fragment:Ay,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ry,transmission_fragment:Py,transmission_pars_fragment:Ly,uv_pars_fragment:Dy,uv_pars_vertex:Ny,uv_vertex:ky,uv2_pars_fragment:Oy,uv2_pars_vertex:Fy,uv2_vertex:Uy,worldpos_vertex:By,background_vert:zy,background_frag:Hy,cube_vert:Wy,cube_frag:Vy,depth_vert:Gy,depth_frag:qy,distanceRGBA_vert:$y,distanceRGBA_frag:jy,equirect_vert:Xy,equirect_frag:Yy,linedashed_vert:Ky,linedashed_frag:Jy,meshbasic_vert:Zy,meshbasic_frag:Qy,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:rx,meshnormal_frag:sx,meshphong_vert:ox,meshphong_frag:ax,meshphysical_vert:lx,meshphysical_frag:cx,meshtoon_vert:hx,meshtoon_frag:ux,points_vert:dx,points_frag:fx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:_x},ye={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xn},uv2Transform:{value:new xn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xn}}},Un={basic:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Xt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Xt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Xt([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Xt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Xt([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Xt([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new xn},t2D:{value:null}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},cube:{uniforms:Xt([ye.envmap,{opacity:{value:1}}]),vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Xt([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Xt([ye.lights,ye.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Un.physical={uniforms:Xt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};function vx(n,e,t,i,r,s){const o=new Qe(0);let a=r===!0?0:1,c,l,h=null,u=0,d=null;function f(m,p){let v=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const M=n.xr,x=M.getSession&&M.getSession();x&&x.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===nl)?(l===void 0&&(l=new at(new zi(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:hs(Un.cube.uniforms),vertexShader:Un.cube.vertexShader,fragmentShader:Un.cube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(h!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new at(new sl(2,2),new Hi({name:"BackgroundMaterial",uniforms:hs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:f}}function wx(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function u(U,K,ae,de,Q){let W=!1;if(o){const V=m(de,ae,K);l!==V&&(l=V,f(l.object)),W=v(U,de,ae,Q),W&&b(U,de,ae,Q)}else{const V=K.wireframe===!0;(l.geometry!==de.id||l.program!==ae.id||l.wireframe!==V)&&(l.geometry=de.id,l.program=ae.id,l.wireframe=V,W=!0)}Q!==null&&t.update(Q,34963),(W||h)&&(h=!1,y(U,K,ae,de),Q!==null&&n.bindBuffer(34963,t.get(Q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function m(U,K,ae){const de=ae.wireframe===!0;let Q=a[U.id];Q===void 0&&(Q={},a[U.id]=Q);let W=Q[K.id];W===void 0&&(W={},Q[K.id]=W);let V=W[de];return V===void 0&&(V=p(d()),W[de]=V),V}function p(U){const K=[],ae=[],de=[];for(let Q=0;Q<r;Q++)K[Q]=0,ae[Q]=0,de[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:de,object:U,attributes:{},index:null}}function v(U,K,ae,de){const Q=l.attributes,W=K.attributes;let V=0;const me=ae.getAttributes();for(const se in me)if(me[se].location>=0){const Ae=Q[se];let Be=W[se];if(Be===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Be=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Be=U.instanceColor)),Ae===void 0||Ae.attribute!==Be||Be&&Ae.data!==Be.data)return!0;V++}return l.attributesNum!==V||l.index!==de}function b(U,K,ae,de){const Q={},W=K.attributes;let V=0;const me=ae.getAttributes();for(const se in me)if(me[se].location>=0){let Ae=W[se];Ae===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(Ae=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(Ae=U.instanceColor));const Be={};Be.attribute=Ae,Ae&&Ae.data&&(Be.data=Ae.data),Q[se]=Be,V++}l.attributes=Q,l.attributesNum=V,l.index=de}function M(){const U=l.newAttributes;for(let K=0,ae=U.length;K<ae;K++)U[K]=0}function x(U){T(U,0)}function T(U,K){const ae=l.newAttributes,de=l.enabledAttributes,Q=l.attributeDivisors;ae[U]=1,de[U]===0&&(n.enableVertexAttribArray(U),de[U]=1),Q[U]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),Q[U]=K)}function R(){const U=l.newAttributes,K=l.enabledAttributes;for(let ae=0,de=K.length;ae<de;ae++)K[ae]!==U[ae]&&(n.disableVertexAttribArray(ae),K[ae]=0)}function F(U,K,ae,de,Q,W){i.isWebGL2===!0&&(ae===5124||ae===5125)?n.vertexAttribIPointer(U,K,ae,Q,W):n.vertexAttribPointer(U,K,ae,de,Q,W)}function y(U,K,ae,de){if(i.isWebGL2===!1&&(U.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const Q=de.attributes,W=ae.getAttributes(),V=K.defaultAttributeValues;for(const me in W){const se=W[me];if(se.location>=0){let ve=Q[me];if(ve===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(ve=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(ve=U.instanceColor)),ve!==void 0){const Ae=ve.normalized,Be=ve.itemSize,q=t.get(ve);if(q===void 0)continue;const Xe=q.buffer,ke=q.type,X=q.bytesPerElement;if(ve.isInterleavedBufferAttribute){const J=ve.data,le=J.stride,Te=ve.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<se.locationSize;be++)T(se.location+be,J.meshPerAttribute);U.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<se.locationSize;be++)x(se.location+be);n.bindBuffer(34962,Xe);for(let be=0;be<se.locationSize;be++)F(se.location+be,Be/se.locationSize,ke,Ae,le*X,(Te+Be/se.locationSize*be)*X)}else{if(ve.isInstancedBufferAttribute){for(let J=0;J<se.locationSize;J++)T(se.location+J,ve.meshPerAttribute);U.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let J=0;J<se.locationSize;J++)x(se.location+J);n.bindBuffer(34962,Xe);for(let J=0;J<se.locationSize;J++)F(se.location+J,Be/se.locationSize,ke,Ae,Be*X,Be/se.locationSize*J*X)}}else if(V!==void 0){const Ae=V[me];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(se.location,Ae);break;case 3:n.vertexAttrib3fv(se.location,Ae);break;case 4:n.vertexAttrib4fv(se.location,Ae);break;default:n.vertexAttrib1fv(se.location,Ae)}}}}R()}function I(){ne();for(const U in a){const K=a[U];for(const ae in K){const de=K[ae];for(const Q in de)g(de[Q].object),delete de[Q];delete K[ae]}delete a[U]}}function k(U){if(a[U.id]===void 0)return;const K=a[U.id];for(const ae in K){const de=K[ae];for(const Q in de)g(de[Q].object),delete de[Q];delete K[ae]}delete a[U.id]}function ee(U){for(const K in a){const ae=a[K];if(ae[U.id]===void 0)continue;const de=ae[U.id];for(const Q in de)g(de[Q].object),delete de[Q];delete ae[U.id]}}function ne(){$(),h=!0,l!==c&&(l=c,f(l.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:ne,resetDefaultState:$,dispose:I,releaseStatesOfGeometry:k,releaseStatesOfProgram:ee,initAttributes:M,enableAttribute:x,disableUnusedAttributes:R}}function yx(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,h){n.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function xx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(F){if(F==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),d=n.getParameter(35660),f=n.getParameter(3379),g=n.getParameter(34076),m=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),b=n.getParameter(36349),M=d>0,x=o||e.has("OES_texture_float"),T=M&&x,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:T,maxSamples:R}}function bx(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ei,a=new xn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||i!==0||r;return r=d,t=h(u,f,0),i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,f){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,v=n.get(u);if(!r||g===null||g.length===0||s&&!p)s?h(null):l();else{const b=s?0:i,M=b*4;let x=v.clippingState||null;c.value=x,x=h(g,d,M,f);for(let T=0;T!==M;++T)x[T]=t[T];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const v=f+m*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<v)&&(p=new Float32Array(v));for(let M=0,x=f;M!==m;++M,x+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Sx(n){let e=new WeakMap;function t(o,a){return a===Vc?o.mapping=as:a===Gc&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vc||a===Gc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Uv(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nm extends Qp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Dd=[.125,.215,.35,.446,.526,.582],tr=20,pc=new nm,Nd=new Qe;let mc=null;const Zi=(1+Math.sqrt(5))/2,Ur=1/Zi,kd=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Zi,Ur),new P(0,Zi,-Ur),new P(Ur,0,Zi),new P(-Ur,0,Zi),new P(Zi,Ur,0),new P(-Zi,Ur,0)];class Yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){mc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:ri,format:Ln,encoding:ui,depthBuffer:!1},r=Od(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Od(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cx(s)),this._blurMaterial=Mx(s,e,t)}return r}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Nd),h.toneMapping=li,h.autoClear=!1;const f=new rl({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new at(new zi,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(Nd),m=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):b===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const M=this._cubeSize;sa(r,b*M,v>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;sa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,pc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kd[(r-1)%kd.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*tr-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):tr;p>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${tr}`);const v=[];let b=0;for(let F=0;F<tr;++F){const y=F/m,I=Math.exp(-y*y/2);v.push(I),F===0?b+=I:F<p&&(b+=2*I)}for(let F=0;F<v.length;F++)v[F]=v[F]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const x=this._sizeLods[r],T=3*x*(r>M-Xr?r-M+Xr:0),R=4*(this._cubeSize-x);sa(t,T,R,3*x,2*x),c.setRenderTarget(t),c.render(u,pc)}}function Cx(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+Dd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Xr?c=Dd[o-n+Xr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,p=2,v=1,b=new Float32Array(m*g*f),M=new Float32Array(p*g*f),x=new Float32Array(v*g*f);for(let R=0;R<f;R++){const F=R%3*2/3-1,y=R>2?0:-1,I=[F,y,0,F+2/3,y,0,F+2/3,y+1,0,F,y,0,F+2/3,y+1,0,F,y+1,0];b.set(I,m*g*R),M.set(d,p*g*R);const k=[R,R,R,R,R,R];x.set(k,v*g*R)}const T=new sn;T.setAttribute("position",new Sn(b,m)),T.setAttribute("uv",new Sn(M,p)),T.setAttribute("faceIndex",new Sn(x,v)),e.push(T),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Od(n,e,t){const i=new pr(n,e,t);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Mx(n,e,t){const i=new Float32Array(tr),r=new P(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Fd(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ud(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ex(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vc||c===Gc,h=c===as||c===ls;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Yc(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Yc(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ax(n,e,t,i){const r={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const m=f[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let m=0;if(f!==null){const b=f.array;m=f.version;for(let M=0,x=b.length;M<x;M+=3){const T=b[M+0],R=b[M+1],F=b[M+2];d.push(T,R,R,F,F,T)}}else{const b=g.array;m=g.version;for(let M=0,x=b.length/3-1;M<x;M+=3){const T=M+0,R=M+1,F=M+2;d.push(T,R,R,F,F,T)}}const p=new(Gp(d)?Zp:Jp)(d,1);p.version=m;const v=s.get(u);v&&e.remove(v),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ix(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){n.drawElements(s,f,a,d*c),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,a,d*c,g),t.update(f,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Rx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Px(n,e){return n[0]-e[0]}function Lx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Dx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let K=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",K)};p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),x===!0&&(I=2),T===!0&&(I=3);let k=h.attributes.position.count*I,ee=1;k>e.maxTextureSize&&(ee=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const ne=new Float32Array(k*ee*4*m),$=new Xp(ne,k,ee,m);$.type=zn,$.needsUpdate=!0;const U=I*4;for(let ae=0;ae<m;ae++){const de=R[ae],Q=F[ae],W=y[ae],V=k*ee*4*ae;for(let me=0;me<de.count;me++){const se=me*U;M===!0&&(o.fromBufferAttribute(de,me),ne[V+se+0]=o.x,ne[V+se+1]=o.y,ne[V+se+2]=o.z,ne[V+se+3]=0),x===!0&&(o.fromBufferAttribute(Q,me),ne[V+se+4]=o.x,ne[V+se+5]=o.y,ne[V+se+6]=o.z,ne[V+se+7]=0),T===!0&&(o.fromBufferAttribute(W,me),ne[V+se+8]=o.x,ne[V+se+9]=o.y,ne[V+se+10]=o.z,ne[V+se+11]=W.itemSize===4?o.w:1)}}p={count:m,texture:$,size:new De(k,ee)},s.set(h,p),h.addEventListener("dispose",K)}let v=0;for(let M=0;M<f.length;M++)v+=f[M];const b=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let m=i[h.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];i[h.id]=m}for(let x=0;x<g;x++){const T=m[x];T[0]=x,T[1]=f[x]}m.sort(Lx);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Px);const p=h.morphAttributes.position,v=h.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const T=a[x],R=T[0],F=T[1];R!==Number.MAX_SAFE_INTEGER&&F?(p&&h.getAttribute("morphTarget"+x)!==p[R]&&h.setAttribute("morphTarget"+x,p[R]),v&&h.getAttribute("morphNormal"+x)!==v[R]&&h.setAttribute("morphNormal"+x,v[R]),r[x]=F,b+=F):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const M=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Nx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);return r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const im=new rn,rm=new Xp,sm=new bv,om=new em,Bd=[],zd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),Vd=new Float32Array(4);function ys(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bd[r];if(s===void 0&&(s=new Float32Array(r),Bd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ol(n,e){let t=zd[e];t===void 0&&(t=new Int32Array(e),zd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function Fx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function Bx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),Ut(t,i)}}function zx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;Wd.set(i),n.uniformMatrix3fv(this.addr,!1,Wd),Ut(t,i)}}function Hx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,i))return;Hd.set(i),n.uniformMatrix4fv(this.addr,!1,Hd),Ut(t,i)}}function Wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Vx(n,e){const t=this.cache;Ft(t,e)||(n.uniform2iv(this.addr,e),Ut(t,e))}function Gx(n,e){const t=this.cache;Ft(t,e)||(n.uniform3iv(this.addr,e),Ut(t,e))}function qx(n,e){const t=this.cache;Ft(t,e)||(n.uniform4iv(this.addr,e),Ut(t,e))}function $x(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;Ft(t,e)||(n.uniform2uiv(this.addr,e),Ut(t,e))}function Xx(n,e){const t=this.cache;Ft(t,e)||(n.uniform3uiv(this.addr,e),Ut(t,e))}function Yx(n,e){const t=this.cache;Ft(t,e)||(n.uniform4uiv(this.addr,e),Ut(t,e))}function Kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||im,r)}function Jx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sm,r)}function Zx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||om,r)}function Qx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rm,r)}function eb(n){switch(n){case 5126:return kx;case 35664:return Ox;case 35665:return Fx;case 35666:return Ux;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Wx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return qx;case 5125:return $x;case 36294:return jx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Qx}}function tb(n,e){n.uniform1fv(this.addr,e)}function nb(n,e){const t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function ib(n,e){const t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function rb(n,e){const t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function sb(n,e){const t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ob(n,e){const t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ab(n,e){const t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lb(n,e){n.uniform1iv(this.addr,e)}function cb(n,e){n.uniform2iv(this.addr,e)}function hb(n,e){n.uniform3iv(this.addr,e)}function ub(n,e){n.uniform4iv(this.addr,e)}function db(n,e){n.uniform1uiv(this.addr,e)}function fb(n,e){n.uniform2uiv(this.addr,e)}function pb(n,e){n.uniform3uiv(this.addr,e)}function mb(n,e){n.uniform4uiv(this.addr,e)}function gb(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||im,s[o])}function _b(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sm,s[o])}function vb(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||om,s[o])}function wb(n,e,t){const i=this.cache,r=e.length,s=ol(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rm,s[o])}function yb(n){switch(n){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return hb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return wb}}class xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=eb(t.type)}}class bb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=yb(t.type)}}class Sb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Gd(n,e){n.seq.push(e),n.map[e.id]=e}function Cb(n,e,t){const i=n.name,r=i.length;for(gc.lastIndex=0;;){const s=gc.exec(i),o=gc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Gd(t,l===void 0?new xb(a,n,e):new bb(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Sb(a),Gd(t,u)),t=u}}}class wa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Cb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Mb=0;function Eb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Tb(n){switch(n){case ui:return["Linear","( value )"];case Tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $d(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Eb(n.getShaderSource(e),o)}else return r}function Ab(n,e){const t=Tb(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ib(n,e){let t;switch(e){case K0:t="Linear";break;case J0:t="Reinhard";break;case Z0:t="OptimizedCineon";break;case Q0:t="ACESFilmic";break;case ev:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rb(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function Pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Lb(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hs(n){return n!==""}function jd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(n){return n.replace(Db,Nb)}function Nb(n,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kc(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(n){return n.replace(kb,Ob)}function Ob(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===A0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zs&&(e="SHADOWMAP_TYPE_VSM"),e}function Ub(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function zb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case X0:e="ENVMAP_BLENDING_MIX";break;case Y0:e="ENVMAP_BLENDING_ADD";break}return e}function Hb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Wb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Fb(t),l=Ub(t),h=Bb(t),u=zb(t),d=Hb(t),f=t.isWebGL2?"":Rb(t),g=Pb(s),m=r.createProgram();let p,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Hs).join(`
`),p.length>0&&(p+=`
`),v=[f,g].filter(Hs).join(`
`),v.length>0&&(v+=`
`)):(p=[Kd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),v=[f,Kd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==li?Ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,Ab("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Kc(o),o=jd(o,t),o=Xd(o,t),a=Kc(a),a=jd(a,t),a=Xd(a,t),o=Yd(o),a=Yd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=b+p+o,x=b+v+a,T=qd(r,35633,M),R=qd(r,35632,x);if(r.attachShader(m,T),r.attachShader(m,R),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const I=r.getProgramInfoLog(m).trim(),k=r.getShaderInfoLog(T).trim(),ee=r.getShaderInfoLog(R).trim();let ne=!0,$=!0;if(r.getProgramParameter(m,35714)===!1){ne=!1;const U=$d(r,T,"vertex"),K=$d(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+I+`
`+U+`
`+K)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(k===""||ee==="")&&($=!1);$&&(this.diagnostics={runnable:ne,programLog:I,vertexShader:{log:k,prefix:p},fragmentShader:{log:ee,prefix:v}})}r.deleteShader(T),r.deleteShader(R);let F;this.getUniforms=function(){return F===void 0&&(F=new wa(r,m)),F};let y;return this.getAttributes=function(){return y===void 0&&(y=Lb(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Mb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}let Vb=0;class Gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qb(e),t.set(e,i)),i}}class qb{constructor(e){this.id=Vb++,this.code=e,this.usedTimes=0}}function $b(n,e,t,i,r,s,o){const a=new Kp,c=new Gb,l=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,I,k,ee,ne){const $=ee.fog,U=ne.geometry,K=y.isMeshStandardMaterial?ee.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||K),de=!!ae&&ae.mapping===nl?ae.image.height:null,Q=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=W!==void 0?W.length:0;let me=0;U.morphAttributes.position!==void 0&&(me=1),U.morphAttributes.normal!==void 0&&(me=2),U.morphAttributes.color!==void 0&&(me=3);let se,ve,Ae,Be;if(Q){const le=Un[Q];se=le.vertexShader,ve=le.fragmentShader}else se=y.vertexShader,ve=y.fragmentShader,c.update(y),Ae=c.getVertexShaderID(y),Be=c.getFragmentShaderID(y);const q=n.getRenderTarget(),Xe=y.alphaTest>0,ke=y.clearcoat>0,X=y.iridescence>0;return{isWebGL2:h,shaderID:Q,shaderName:y.type,vertexShader:se,fragmentShader:ve,defines:y.defines,customVertexShaderID:Ae,customFragmentShaderID:Be,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:q===null?n.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:ui,map:!!y.map,matcap:!!y.matcap,envMap:!!ae,envMapMode:ae&&ae.mapping,envMapCubeUVHeight:de,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===vv,tangentSpaceNormalMap:y.normalMapType===Vp,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Tt,clearcoat:ke,clearcoatMap:ke&&!!y.clearcoatMap,clearcoatRoughnessMap:ke&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ke&&!!y.clearcoatNormalMap,iridescence:X,iridescenceMap:X&&!!y.iridescenceMap,iridescenceThicknessMap:X&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Jr,alphaMap:!!y.alphaMap,alphaTest:Xe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!$,useFog:y.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:ne.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:me,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:li,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===mn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.customVertexShaderID),I.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)I.push(k),I.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(v(I,y),b(I,y),I.push(n.outputEncoding)),I.push(y.customProgramCacheKey),I.join()}function v(y,I){y.push(I.precision),y.push(I.outputEncoding),y.push(I.envMapMode),y.push(I.envMapCubeUVHeight),y.push(I.combine),y.push(I.vertexUvs),y.push(I.fogExp2),y.push(I.sizeAttenuation),y.push(I.morphTargetsCount),y.push(I.morphAttributeCount),y.push(I.numDirLights),y.push(I.numPointLights),y.push(I.numSpotLights),y.push(I.numSpotLightMaps),y.push(I.numHemiLights),y.push(I.numRectAreaLights),y.push(I.numDirLightShadows),y.push(I.numPointLightShadows),y.push(I.numSpotLightShadows),y.push(I.numSpotLightShadowsWithMaps),y.push(I.shadowMapType),y.push(I.toneMapping),y.push(I.numClippingPlanes),y.push(I.numClipIntersection),y.push(I.depthPacking)}function b(y,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.map&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.lightMap&&a.enable(7),I.aoMap&&a.enable(8),I.emissiveMap&&a.enable(9),I.bumpMap&&a.enable(10),I.normalMap&&a.enable(11),I.objectSpaceNormalMap&&a.enable(12),I.tangentSpaceNormalMap&&a.enable(13),I.clearcoat&&a.enable(14),I.clearcoatMap&&a.enable(15),I.clearcoatRoughnessMap&&a.enable(16),I.clearcoatNormalMap&&a.enable(17),I.iridescence&&a.enable(18),I.iridescenceMap&&a.enable(19),I.iridescenceThicknessMap&&a.enable(20),I.displacementMap&&a.enable(21),I.specularMap&&a.enable(22),I.roughnessMap&&a.enable(23),I.metalnessMap&&a.enable(24),I.gradientMap&&a.enable(25),I.alphaMap&&a.enable(26),I.alphaTest&&a.enable(27),I.vertexColors&&a.enable(28),I.vertexAlphas&&a.enable(29),I.vertexUvs&&a.enable(30),I.vertexTangents&&a.enable(31),I.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.physicallyCorrectLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.specularIntensityMap&&a.enable(15),I.specularColorMap&&a.enable(16),I.transmission&&a.enable(17),I.transmissionMap&&a.enable(18),I.thicknessMap&&a.enable(19),I.sheen&&a.enable(20),I.sheenColorMap&&a.enable(21),I.sheenRoughnessMap&&a.enable(22),I.decodeVideoTexture&&a.enable(23),I.opaque&&a.enable(24),y.push(a.mask)}function M(y){const I=g[y.type];let k;if(I){const ee=Un[I];k=Nv.clone(ee.uniforms)}else k=y.uniforms;return k}function x(y,I){let k;for(let ee=0,ne=l.length;ee<ne;ee++){const $=l[ee];if($.cacheKey===I){k=$,++k.usedTimes;break}}return k===void 0&&(k=new Wb(n,I,y,s),l.push(k)),k}function T(y){if(--y.usedTimes===0){const I=l.indexOf(y);l[I]=l[l.length-1],l.pop(),y.destroy()}}function R(y){c.remove(y)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:T,releaseShaderCache:R,programs:l,dispose:F}}function jb(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Xb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,d,f,g,m,p){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},n[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=f,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=p),e++,v}function a(u,d,f,g,m,p){const v=o(u,d,f,g,m,p);f.transmission>0?i.push(v):f.transparent===!0?r.push(v):t.push(v)}function c(u,d,f,g,m,p){const v=o(u,d,f,g,m,p);f.transmission>0?i.unshift(v):f.transparent===!0?r.unshift(v):t.unshift(v)}function l(u,d){t.length>1&&t.sort(u||Xb),i.length>1&&i.sort(d||Jd),r.length>1&&r.sort(d||Jd)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Yb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zd,n.set(i,[o])):r>=s.length?(o=new Zd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Kb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Qe};break;case"SpotLight":t={position:new P,direction:new P,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Jb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zb=0;function Qb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e1(n,e){const t=new Kb,i=Jb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,o=new yt,a=new yt;function c(h,u){let d=0,f=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let m=0,p=0,v=0,b=0,M=0,x=0,T=0,R=0,F=0,y=0;h.sort(Qb);const I=u!==!0?Math.PI:1;for(let ee=0,ne=h.length;ee<ne;ee++){const $=h[ee],U=$.color,K=$.intensity,ae=$.distance,de=$.shadow&&$.shadow.map?$.shadow.map.texture:null;if($.isAmbientLight)d+=U.r*K*I,f+=U.g*K*I,g+=U.b*K*I;else if($.isLightProbe)for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector($.sh.coefficients[Q],K);else if($.isDirectionalLight){const Q=t.get($);if(Q.color.copy($.color).multiplyScalar($.intensity*I),$.castShadow){const W=$.shadow,V=i.get($);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.directionalShadow[m]=V,r.directionalShadowMap[m]=de,r.directionalShadowMatrix[m]=$.shadow.matrix,x++}r.directional[m]=Q,m++}else if($.isSpotLight){const Q=t.get($);Q.position.setFromMatrixPosition($.matrixWorld),Q.color.copy(U).multiplyScalar(K*I),Q.distance=ae,Q.coneCos=Math.cos($.angle),Q.penumbraCos=Math.cos($.angle*(1-$.penumbra)),Q.decay=$.decay,r.spot[v]=Q;const W=$.shadow;if($.map&&(r.spotLightMap[F]=$.map,F++,W.updateMatrices($),$.castShadow&&y++),r.spotLightMatrix[v]=W.matrix,$.castShadow){const V=i.get($);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.spotShadow[v]=V,r.spotShadowMap[v]=de,R++}v++}else if($.isRectAreaLight){const Q=t.get($);Q.color.copy(U).multiplyScalar(K),Q.halfWidth.set($.width*.5,0,0),Q.halfHeight.set(0,$.height*.5,0),r.rectArea[b]=Q,b++}else if($.isPointLight){const Q=t.get($);if(Q.color.copy($.color).multiplyScalar($.intensity*I),Q.distance=$.distance,Q.decay=$.decay,$.castShadow){const W=$.shadow,V=i.get($);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,r.pointShadow[p]=V,r.pointShadowMap[p]=de,r.pointShadowMatrix[p]=$.shadow.matrix,T++}r.point[p]=Q,p++}else if($.isHemisphereLight){const Q=t.get($);Q.skyColor.copy($.color).multiplyScalar(K*I),Q.groundColor.copy($.groundColor).multiplyScalar(K*I),r.hemi[M]=Q,M++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const k=r.hash;(k.directionalLength!==m||k.pointLength!==p||k.spotLength!==v||k.rectAreaLength!==b||k.hemiLength!==M||k.numDirectionalShadows!==x||k.numPointShadows!==T||k.numSpotShadows!==R||k.numSpotMaps!==F)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=b,r.point.length=p,r.hemi.length=M,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+F-y,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=y,k.directionalLength=m,k.pointLength=p,k.spotLength=v,k.rectAreaLength=b,k.hemiLength=M,k.numDirectionalShadows=x,k.numPointShadows=T,k.numSpotShadows=R,k.numSpotMaps=F,r.version=Zb++)}function l(h,u){let d=0,f=0,g=0,m=0,p=0;const v=u.matrixWorldInverse;for(let b=0,M=h.length;b<M;b++){const x=h[b];if(x.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),d++}else if(x.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const T=r.rectArea[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const T=r.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(v),f++}else if(x.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(v),p++}}}return{setup:c,setupView:l,state:r}}function Qd(n,e){const t=new e1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function c(u){t.setup(i,u)}function l(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function t1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Qd(n,e),t.set(s,[c])):o>=a.length?(c=new Qd(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class n1 extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i1 extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o1(n,e,t){let i=new Th;const r=new De,s=new De,o=new St,a=new n1({depthPacking:_v}),c=new i1,l={},h=t.maxTextureSize,u={0:mn,1:os,2:ii},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:r1,fragmentShader:s1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new at(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op,this.render=function(x,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const F=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Di),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let ee=0,ne=x.length;ee<ne;ee++){const $=x[ee],U=$.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const K=U.getFrameExtents();if(r.multiply(K),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,U.mapSize.y=s.y)),U.map===null){const de=this.type!==zs?{minFilter:Yt,magFilter:Yt}:{};U.map=new pr(r.x,r.y,de),U.map.texture.name=$.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const ae=U.getViewportCount();for(let de=0;de<ae;de++){const Q=U.getViewport(de);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),k.viewport(o),U.updateMatrices($,de),i=U.getFrustum(),M(T,R,U.camera,$,this.type)}U.isPointLightShadow!==!0&&this.type===zs&&v(U,R),U.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(F,y,I)};function v(x,T){const R=e.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new pr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(T,null,R,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(T,null,R,f,m,null)}function b(x,T,R,F,y,I){let k=null;const ee=R.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(ee!==void 0?k=ee:k=R.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const ne=k.uuid,$=T.uuid;let U=l[ne];U===void 0&&(U={},l[ne]=U);let K=U[$];K===void 0&&(K=k.clone(),U[$]=K),k=K}return k.visible=T.visible,k.wireframe=T.wireframe,I===zs?k.side=T.shadowSide!==null?T.shadowSide:T.side:k.side=T.shadowSide!==null?T.shadowSide:u[T.side],k.alphaMap=T.alphaMap,k.alphaTest=T.alphaTest,k.clipShadows=T.clipShadows,k.clippingPlanes=T.clippingPlanes,k.clipIntersection=T.clipIntersection,k.displacementMap=T.displacementMap,k.displacementScale=T.displacementScale,k.displacementBias=T.displacementBias,k.wireframeLinewidth=T.wireframeLinewidth,k.linewidth=T.linewidth,R.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(R.matrixWorld),k.nearDistance=F,k.farDistance=y),k}function M(x,T,R,F,y){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===zs)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,x.matrixWorld);const ee=e.update(x),ne=x.material;if(Array.isArray(ne)){const $=ee.groups;for(let U=0,K=$.length;U<K;U++){const ae=$[U],de=ne[ae.materialIndex];if(de&&de.visible){const Q=b(x,de,F,R.near,R.far,y);n.renderBufferDirect(R,null,ee,Q,x,ae)}}}else if(ne.visible){const $=b(x,ne,F,R.near,R.far,y);n.renderBufferDirect(R,null,ee,$,x,null)}}const k=x.children;for(let ee=0,ne=k.length;ee<ne;ee++)M(k[ee],T,R,F,y)}}function a1(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const xe=new St;let _e=null;const N=new St(0,0,0,0);return{setMask:function(ge){_e!==ge&&!D&&(n.colorMask(ge,ge,ge,ge),_e=ge)},setLocked:function(ge){D=ge},setClear:function(ge,Ue,ct,Mt,On){On===!0&&(ge*=Mt,Ue*=Mt,ct*=Mt),xe.set(ge,Ue,ct,Mt),N.equals(xe)===!1&&(n.clearColor(ge,Ue,ct,Mt),N.copy(xe))},reset:function(){D=!1,_e=null,N.set(-1,0,0,0)}}}function s(){let D=!1,xe=null,_e=null,N=null;return{setTest:function(ge){ge?Xe(2929):ke(2929)},setMask:function(ge){xe!==ge&&!D&&(n.depthMask(ge),xe=ge)},setFunc:function(ge){if(_e!==ge){switch(ge){case H0:n.depthFunc(512);break;case W0:n.depthFunc(519);break;case V0:n.depthFunc(513);break;case Wc:n.depthFunc(515);break;case G0:n.depthFunc(514);break;case q0:n.depthFunc(518);break;case $0:n.depthFunc(516);break;case j0:n.depthFunc(517);break;default:n.depthFunc(515)}_e=ge}},setLocked:function(ge){D=ge},setClear:function(ge){N!==ge&&(n.clearDepth(ge),N=ge)},reset:function(){D=!1,xe=null,_e=null,N=null}}}function o(){let D=!1,xe=null,_e=null,N=null,ge=null,Ue=null,ct=null,Mt=null,On=null;return{setTest:function(xt){D||(xt?Xe(2960):ke(2960))},setMask:function(xt){xe!==xt&&!D&&(n.stencilMask(xt),xe=xt)},setFunc:function(xt,En,on){(_e!==xt||N!==En||ge!==on)&&(n.stencilFunc(xt,En,on),_e=xt,N=En,ge=on)},setOp:function(xt,En,on){(Ue!==xt||ct!==En||Mt!==on)&&(n.stencilOp(xt,En,on),Ue=xt,ct=En,Mt=on)},setLocked:function(xt){D=xt},setClear:function(xt){On!==xt&&(n.clearStencil(xt),On=xt)},reset:function(){D=!1,xe=null,_e=null,N=null,ge=null,Ue=null,ct=null,Mt=null,On=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,m=[],p=null,v=!1,b=null,M=null,x=null,T=null,R=null,F=null,y=null,I=!1,k=null,ee=null,ne=null,$=null,U=null;const K=n.getParameter(35661);let ae=!1,de=0;const Q=n.getParameter(7938);Q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ae=de>=1):Q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ae=de>=2);let W=null,V={};const me=n.getParameter(3088),se=n.getParameter(2978),ve=new St().fromArray(me),Ae=new St().fromArray(se);function Be(D,xe,_e){const N=new Uint8Array(4),ge=n.createTexture();n.bindTexture(D,ge),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Ue=0;Ue<_e;Ue++)n.texImage2D(xe+Ue,0,6408,1,1,0,6408,5121,N);return ge}const q={};q[3553]=Be(3553,3553,1),q[34067]=Be(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Xe(2929),c.setFunc(Wc),lt(!1),vt(qu),Xe(2884),tt(Di);function Xe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function ke(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function X(D,xe){return f[D]!==xe?(n.bindFramebuffer(D,xe),f[D]=xe,i&&(D===36009&&(f[36160]=xe),D===36160&&(f[36009]=xe)),!0):!1}function J(D,xe){let _e=m,N=!1;if(D)if(_e=g.get(xe),_e===void 0&&(_e=[],g.set(xe,_e)),D.isWebGLMultipleRenderTargets){const ge=D.texture;if(_e.length!==ge.length||_e[0]!==36064){for(let Ue=0,ct=ge.length;Ue<ct;Ue++)_e[Ue]=36064+Ue;_e.length=ge.length,N=!0}}else _e[0]!==36064&&(_e[0]=36064,N=!0);else _e[0]!==1029&&(_e[0]=1029,N=!0);N&&(t.isWebGL2?n.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function le(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const Te={[$r]:32774,[R0]:32778,[P0]:32779};if(i)Te[Xu]=32775,Te[Yu]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[Xu]=D.MIN_EXT,Te[Yu]=D.MAX_EXT)}const be={[L0]:0,[D0]:1,[N0]:768,[Fp]:770,[z0]:776,[U0]:774,[O0]:772,[k0]:769,[Up]:771,[B0]:775,[F0]:773};function tt(D,xe,_e,N,ge,Ue,ct,Mt){if(D===Di){v===!0&&(ke(3042),v=!1);return}if(v===!1&&(Xe(3042),v=!0),D!==I0){if(D!==b||Mt!==I){if((M!==$r||R!==$r)&&(n.blendEquation(32774),M=$r,R=$r),Mt)switch(D){case Jr:n.blendFuncSeparate(1,771,1,771);break;case Hc:n.blendFunc(1,1);break;case $u:n.blendFuncSeparate(0,769,0,1);break;case ju:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Jr:n.blendFuncSeparate(770,771,1,771);break;case Hc:n.blendFunc(770,1);break;case $u:n.blendFuncSeparate(0,769,0,1);break;case ju:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,T=null,F=null,y=null,b=D,I=Mt}return}ge=ge||xe,Ue=Ue||_e,ct=ct||N,(xe!==M||ge!==R)&&(n.blendEquationSeparate(Te[xe],Te[ge]),M=xe,R=ge),(_e!==x||N!==T||Ue!==F||ct!==y)&&(n.blendFuncSeparate(be[_e],be[N],be[Ue],be[ct]),x=_e,T=N,F=Ue,y=ct),b=D,I=null}function Ct(D,xe){D.side===ii?ke(2884):Xe(2884);let _e=D.side===mn;xe&&(_e=!_e),lt(_e),D.blending===Jr&&D.transparent===!1?tt(Di):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const N=D.stencilWrite;l.setTest(N),N&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Xe(32926):ke(32926)}function lt(D){k!==D&&(D?n.frontFace(2304):n.frontFace(2305),k=D)}function vt(D){D!==E0?(Xe(2884),D!==ee&&(D===qu?n.cullFace(1029):D===T0?n.cullFace(1028):n.cullFace(1032))):ke(2884),ee=D}function ft(D){D!==ne&&(ae&&n.lineWidth(D),ne=D)}function rt(D,xe,_e){D?(Xe(32823),($!==xe||U!==_e)&&(n.polygonOffset(xe,_e),$=xe,U=_e)):ke(32823)}function Cn(D){D?Xe(3089):ke(3089)}function Mn(D){D===void 0&&(D=33984+K-1),W!==D&&(n.activeTexture(D),W=D)}function A(D,xe,_e){_e===void 0&&(W===null?_e=33984+K-1:_e=W);let N=V[_e];N===void 0&&(N={type:void 0,texture:void 0},V[_e]=N),(N.type!==D||N.texture!==xe)&&(W!==_e&&(n.activeTexture(_e),W=_e),n.bindTexture(D,xe||q[D]),N.type=D,N.texture=xe)}function S(){const D=V[W];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(D){ve.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ve.copy(D))}function Re(D){Ae.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ae.copy(D))}function Pe(D,xe){let _e=u.get(xe);_e===void 0&&(_e=new WeakMap,u.set(xe,_e));let N=_e.get(D);N===void 0&&(N=n.getUniformBlockIndex(xe,D.name),_e.set(D,N))}function qe(D,xe){const N=u.get(xe).get(D);h.get(D)!==N&&(n.uniformBlockBinding(xe,N,D.__bindingPointIndex),h.set(D,N))}function et(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},W=null,V={},f={},g=new WeakMap,m=[],p=null,v=!1,b=null,M=null,x=null,T=null,R=null,F=null,y=null,I=!1,k=null,ee=null,ne=null,$=null,U=null,ve.set(0,0,n.canvas.width,n.canvas.height),Ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Xe,disable:ke,bindFramebuffer:X,drawBuffers:J,useProgram:le,setBlending:tt,setMaterial:Ct,setFlipSided:lt,setCullFace:vt,setLineWidth:ft,setPolygonOffset:rt,setScissorTest:Cn,activeTexture:Mn,bindTexture:A,unbindTexture:S,compressedTexImage2D:Y,texImage2D:ie,texImage3D:Oe,updateUBOMapping:Pe,uniformBlockBinding:qe,texStorage2D:He,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:we,compressedTexSubImage2D:Ee,scissor:We,viewport:Re,reset:et}}function l1(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return v?new OffscreenCanvas(A,S):so("canvas")}function M(A,S,Y,ue){let we=1;if((A.width>ue||A.height>ue)&&(we=ue/Math.max(A.width,A.height)),we<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Ee=S?Xc:Math.floor,He=Ee(we*A.width),Se=Ee(we*A.height);m===void 0&&(m=b(He,Se));const ie=Y?b(He,Se):m;return ie.width=He,ie.height=Se,ie.getContext("2d").drawImage(A,0,0,He,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+He+"x"+Se+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return xd(A.width)&&xd(A.height)}function T(A){return a?!1:A.wrapS!==pn||A.wrapT!==pn||A.minFilter!==Yt&&A.minFilter!==Wt}function R(A,S){return A.generateMipmaps&&S&&A.minFilter!==Yt&&A.minFilter!==Wt}function F(A){n.generateMipmap(A)}function y(A,S,Y,ue,we=!1){if(a===!1)return S;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Ee=S;return S===6403&&(Y===5126&&(Ee=33326),Y===5131&&(Ee=33325),Y===5121&&(Ee=33321)),S===33319&&(Y===5126&&(Ee=33328),Y===5131&&(Ee=33327),Y===5121&&(Ee=33323)),S===6408&&(Y===5126&&(Ee=34836),Y===5131&&(Ee=34842),Y===5121&&(Ee=ue===Tt&&we===!1?35907:32856),Y===32819&&(Ee=32854),Y===32820&&(Ee=32855)),(Ee===33325||Ee===33326||Ee===33327||Ee===33328||Ee===34842||Ee===34836)&&e.get("EXT_color_buffer_float"),Ee}function I(A,S,Y){return R(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function k(A){return A===Yt||A===Ku||A===Ju?9728:9729}function ee(A){const S=A.target;S.removeEventListener("dispose",ee),$(S),S.isVideoTexture&&g.delete(S)}function ne(A){const S=A.target;S.removeEventListener("dispose",ne),K(S)}function $(A){const S=i.get(A);if(S.__webglInit===void 0)return;const Y=A.source,ue=p.get(Y);if(ue){const we=ue[S.__cacheKey];we.usedTimes--,we.usedTimes===0&&U(A),Object.keys(ue).length===0&&p.delete(Y)}i.remove(A)}function U(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const Y=A.source,ue=p.get(Y);delete ue[S.__cacheKey],o.memory.textures--}function K(A){const S=A.texture,Y=i.get(A),ue=i.get(S);if(ue.__webglTexture!==void 0&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let we=0;we<6;we++)n.deleteFramebuffer(Y.__webglFramebuffer[we]),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[we]);else{if(n.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let we=0;we<Y.__webglColorRenderbuffer.length;we++)Y.__webglColorRenderbuffer[we]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[we]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let we=0,Ee=S.length;we<Ee;we++){const He=i.get(S[we]);He.__webglTexture&&(n.deleteTexture(He.__webglTexture),o.memory.textures--),i.remove(S[we])}i.remove(S),i.remove(A)}let ae=0;function de(){ae=0}function Q(){const A=ae;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),ae+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function V(A,S){const Y=i.get(A);if(A.isVideoTexture&&Cn(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const ue=A.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,A,S);return}}t.bindTexture(3553,Y.__webglTexture,33984+S)}function me(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ke(Y,A,S);return}t.bindTexture(35866,Y.__webglTexture,33984+S)}function se(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ke(Y,A,S);return}t.bindTexture(32879,Y.__webglTexture,33984+S)}function ve(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){X(Y,A,S);return}t.bindTexture(34067,Y.__webglTexture,33984+S)}const Ae={[ro]:10497,[pn]:33071,[qc]:33648},Be={[Yt]:9728,[Ku]:9984,[Ju]:9986,[Wt]:9729,[tv]:9985,[yo]:9987};function q(A,S,Y){if(Y?(n.texParameteri(A,10242,Ae[S.wrapS]),n.texParameteri(A,10243,Ae[S.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,Ae[S.wrapR]),n.texParameteri(A,10240,Be[S.magFilter]),n.texParameteri(A,10241,Be[S.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(S.wrapS!==pn||S.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,k(S.magFilter)),n.texParameteri(A,10241,k(S.minFilter)),S.minFilter!==Yt&&S.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(S.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(A,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Xe(A,S){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",ee));const ue=S.source;let we=p.get(ue);we===void 0&&(we={},p.set(ue,we));const Ee=W(S);if(Ee!==A.__cacheKey){we[Ee]===void 0&&(we[Ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),we[Ee].usedTimes++;const He=we[A.__cacheKey];He!==void 0&&(we[A.__cacheKey].usedTimes--,He.usedTimes===0&&U(S)),A.__cacheKey=Ee,A.__webglTexture=we[Ee].texture}return Y}function ke(A,S,Y){let ue=3553;S.isDataArrayTexture&&(ue=35866),S.isData3DTexture&&(ue=32879);const we=Xe(A,S),Ee=S.source;t.bindTexture(ue,A.__webglTexture,33984+Y);const He=i.get(Ee);if(Ee.version!==He.__version||we===!0){t.activeTexture(33984+Y),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const Se=T(S)&&x(S.image)===!1;let ie=M(S.image,Se,!1,h);ie=Mn(S,ie);const Oe=x(ie)||a,We=s.convert(S.format,S.encoding);let Re=s.convert(S.type),Pe=y(S.internalFormat,We,Re,S.encoding,S.isVideoTexture);q(ue,S,Oe);let qe;const et=S.mipmaps,D=a&&S.isVideoTexture!==!0,xe=He.__version===void 0||we===!0,_e=I(S,ie,Oe);if(S.isDepthTexture)Pe=6402,a?S.type===zn?Pe=36012:S.type===nr?Pe=33190:S.type===Zr?Pe=35056:Pe=33189:S.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ar&&Pe===6402&&S.type!==Hp&&S.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=nr,Re=s.convert(S.type)),S.format===cs&&Pe===6402&&(Pe=34041,S.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Zr,Re=s.convert(S.type))),xe&&(D?t.texStorage2D(3553,1,Pe,ie.width,ie.height):t.texImage2D(3553,0,Pe,ie.width,ie.height,0,We,Re,null));else if(S.isDataTexture)if(et.length>0&&Oe){D&&xe&&t.texStorage2D(3553,_e,Pe,et[0].width,et[0].height);for(let N=0,ge=et.length;N<ge;N++)qe=et[N],D?t.texSubImage2D(3553,N,0,0,qe.width,qe.height,We,Re,qe.data):t.texImage2D(3553,N,Pe,qe.width,qe.height,0,We,Re,qe.data);S.generateMipmaps=!1}else D?(xe&&t.texStorage2D(3553,_e,Pe,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,ie.width,ie.height,We,Re,ie.data)):t.texImage2D(3553,0,Pe,ie.width,ie.height,0,We,Re,ie.data);else if(S.isCompressedTexture){D&&xe&&t.texStorage2D(3553,_e,Pe,et[0].width,et[0].height);for(let N=0,ge=et.length;N<ge;N++)qe=et[N],S.format!==Ln?We!==null?D?t.compressedTexSubImage2D(3553,N,0,0,qe.width,qe.height,We,qe.data):t.compressedTexImage2D(3553,N,Pe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(3553,N,0,0,qe.width,qe.height,We,Re,qe.data):t.texImage2D(3553,N,Pe,qe.width,qe.height,0,We,Re,qe.data)}else if(S.isDataArrayTexture)D?(xe&&t.texStorage3D(35866,_e,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(35866,0,0,0,0,ie.width,ie.height,ie.depth,We,Re,ie.data)):t.texImage3D(35866,0,Pe,ie.width,ie.height,ie.depth,0,We,Re,ie.data);else if(S.isData3DTexture)D?(xe&&t.texStorage3D(32879,_e,Pe,ie.width,ie.height,ie.depth),t.texSubImage3D(32879,0,0,0,0,ie.width,ie.height,ie.depth,We,Re,ie.data)):t.texImage3D(32879,0,Pe,ie.width,ie.height,ie.depth,0,We,Re,ie.data);else if(S.isFramebufferTexture){if(xe)if(D)t.texStorage2D(3553,_e,Pe,ie.width,ie.height);else{let N=ie.width,ge=ie.height;for(let Ue=0;Ue<_e;Ue++)t.texImage2D(3553,Ue,Pe,N,ge,0,We,Re,null),N>>=1,ge>>=1}}else if(et.length>0&&Oe){D&&xe&&t.texStorage2D(3553,_e,Pe,et[0].width,et[0].height);for(let N=0,ge=et.length;N<ge;N++)qe=et[N],D?t.texSubImage2D(3553,N,0,0,We,Re,qe):t.texImage2D(3553,N,Pe,We,Re,qe);S.generateMipmaps=!1}else D?(xe&&t.texStorage2D(3553,_e,Pe,ie.width,ie.height),t.texSubImage2D(3553,0,0,0,We,Re,ie)):t.texImage2D(3553,0,Pe,We,Re,ie);R(S,Oe)&&F(ue),He.__version=Ee.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function X(A,S,Y){if(S.image.length!==6)return;const ue=Xe(A,S),we=S.source;t.bindTexture(34067,A.__webglTexture,33984+Y);const Ee=i.get(we);if(we.version!==Ee.__version||ue===!0){t.activeTexture(33984+Y),n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let N=0;N<6;N++)!He&&!Se?ie[N]=M(S.image[N],!1,!0,l):ie[N]=Se?S.image[N].image:S.image[N],ie[N]=Mn(S,ie[N]);const Oe=ie[0],We=x(Oe)||a,Re=s.convert(S.format,S.encoding),Pe=s.convert(S.type),qe=y(S.internalFormat,Re,Pe,S.encoding),et=a&&S.isVideoTexture!==!0,D=Ee.__version===void 0||ue===!0;let xe=I(S,Oe,We);q(34067,S,We);let _e;if(He){et&&D&&t.texStorage2D(34067,xe,qe,Oe.width,Oe.height);for(let N=0;N<6;N++){_e=ie[N].mipmaps;for(let ge=0;ge<_e.length;ge++){const Ue=_e[ge];S.format!==Ln?Re!==null?et?t.compressedTexSubImage2D(34069+N,ge,0,0,Ue.width,Ue.height,Re,Ue.data):t.compressedTexImage2D(34069+N,ge,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(34069+N,ge,0,0,Ue.width,Ue.height,Re,Pe,Ue.data):t.texImage2D(34069+N,ge,qe,Ue.width,Ue.height,0,Re,Pe,Ue.data)}}}else{_e=S.mipmaps,et&&D&&(_e.length>0&&xe++,t.texStorage2D(34067,xe,qe,ie[0].width,ie[0].height));for(let N=0;N<6;N++)if(Se){et?t.texSubImage2D(34069+N,0,0,0,ie[N].width,ie[N].height,Re,Pe,ie[N].data):t.texImage2D(34069+N,0,qe,ie[N].width,ie[N].height,0,Re,Pe,ie[N].data);for(let ge=0;ge<_e.length;ge++){const ct=_e[ge].image[N].image;et?t.texSubImage2D(34069+N,ge+1,0,0,ct.width,ct.height,Re,Pe,ct.data):t.texImage2D(34069+N,ge+1,qe,ct.width,ct.height,0,Re,Pe,ct.data)}}else{et?t.texSubImage2D(34069+N,0,0,0,Re,Pe,ie[N]):t.texImage2D(34069+N,0,qe,Re,Pe,ie[N]);for(let ge=0;ge<_e.length;ge++){const Ue=_e[ge];et?t.texSubImage2D(34069+N,ge+1,0,0,Re,Pe,Ue.image[N]):t.texImage2D(34069+N,ge+1,qe,Re,Pe,Ue.image[N])}}}R(S,We)&&F(34067),Ee.__version=we.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function J(A,S,Y,ue,we){const Ee=s.convert(Y.format,Y.encoding),He=s.convert(Y.type),Se=y(Y.internalFormat,Ee,He,Y.encoding);i.get(S).__hasExternalTextures||(we===32879||we===35866?t.texImage3D(we,0,Se,S.width,S.height,S.depth,0,Ee,He,null):t.texImage2D(we,0,Se,S.width,S.height,0,Ee,He,null)),t.bindFramebuffer(36160,A),rt(S)?d.framebufferTexture2DMultisampleEXT(36160,ue,we,i.get(Y).__webglTexture,0,ft(S)):n.framebufferTexture2D(36160,ue,we,i.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function le(A,S,Y){if(n.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ue=33189;if(Y||rt(S)){const we=S.depthTexture;we&&we.isDepthTexture&&(we.type===zn?ue=36012:we.type===nr&&(ue=33190));const Ee=ft(S);rt(S)?d.renderbufferStorageMultisampleEXT(36161,Ee,ue,S.width,S.height):n.renderbufferStorageMultisample(36161,Ee,ue,S.width,S.height)}else n.renderbufferStorage(36161,ue,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ue=ft(S);Y&&rt(S)===!1?n.renderbufferStorageMultisample(36161,ue,35056,S.width,S.height):rt(S)?d.renderbufferStorageMultisampleEXT(36161,ue,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ue=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let we=0;we<ue.length;we++){const Ee=ue[we],He=s.convert(Ee.format,Ee.encoding),Se=s.convert(Ee.type),ie=y(Ee.internalFormat,He,Se,Ee.encoding),Oe=ft(S);Y&&rt(S)===!1?n.renderbufferStorageMultisample(36161,Oe,ie,S.width,S.height):rt(S)?d.renderbufferStorageMultisampleEXT(36161,Oe,ie,S.width,S.height):n.renderbufferStorage(36161,ie,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function Te(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const ue=i.get(S.depthTexture).__webglTexture,we=ft(S);if(S.depthTexture.format===ar)rt(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ue,0,we):n.framebufferTexture2D(36160,36096,3553,ue,0);else if(S.depthTexture.format===cs)rt(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ue,0,we):n.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function be(A){const S=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,A)}else if(Y){S.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,S.__webglFramebuffer[ue]),S.__webglDepthbuffer[ue]=n.createRenderbuffer(),le(S.__webglDepthbuffer[ue],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),le(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function tt(A,S,Y){const ue=i.get(A);S!==void 0&&J(ue.__webglFramebuffer,A,A.texture,36064,3553),Y!==void 0&&be(A)}function Ct(A){const S=A.texture,Y=i.get(A),ue=i.get(S);A.addEventListener("dispose",ne),A.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture()),ue.__version=S.version,o.memory.textures++);const we=A.isWebGLCubeRenderTarget===!0,Ee=A.isWebGLMultipleRenderTargets===!0,He=x(A)||a;if(we){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)Y.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(Y.__webglFramebuffer=n.createFramebuffer(),Ee)if(r.drawBuffers){const Se=A.texture;for(let ie=0,Oe=Se.length;ie<Oe;ie++){const We=i.get(Se[ie]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&rt(A)===!1){const Se=Ee?S:[S];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<Se.length;ie++){const Oe=Se[ie];Y.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[ie]);const We=s.convert(Oe.format,Oe.encoding),Re=s.convert(Oe.type),Pe=y(Oe.internalFormat,We,Re,Oe.encoding,A.isXRRenderTarget===!0),qe=ft(A);n.renderbufferStorageMultisample(36161,qe,Pe,A.width,A.height),n.framebufferRenderbuffer(36160,36064+ie,36161,Y.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(we){t.bindTexture(34067,ue.__webglTexture),q(34067,S,He);for(let Se=0;Se<6;Se++)J(Y.__webglFramebuffer[Se],A,S,36064,34069+Se);R(S,He)&&F(34067),t.unbindTexture()}else if(Ee){const Se=A.texture;for(let ie=0,Oe=Se.length;ie<Oe;ie++){const We=Se[ie],Re=i.get(We);t.bindTexture(3553,Re.__webglTexture),q(3553,We,He),J(Y.__webglFramebuffer,A,We,36064+ie,3553),R(We,He)&&F(3553)}t.unbindTexture()}else{let Se=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Se=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,ue.__webglTexture),q(Se,S,He),J(Y.__webglFramebuffer,A,S,36064,Se),R(S,He)&&F(Se),t.unbindTexture()}A.depthBuffer&&be(A)}function lt(A){const S=x(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ue=0,we=Y.length;ue<we;ue++){const Ee=Y[ue];if(R(Ee,S)){const He=A.isWebGLCubeRenderTarget?34067:3553,Se=i.get(Ee).__webglTexture;t.bindTexture(He,Se),F(He),t.unbindTexture()}}}function vt(A){if(a&&A.samples>0&&rt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,ue=A.height;let we=16384;const Ee=[],He=A.stencilBuffer?33306:36096,Se=i.get(A),ie=A.isWebGLMultipleRenderTargets===!0;if(ie)for(let Oe=0;Oe<S.length;Oe++)t.bindFramebuffer(36160,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Oe,36161,null),t.bindFramebuffer(36160,Se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Oe,3553,null,0);t.bindFramebuffer(36008,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Se.__webglFramebuffer);for(let Oe=0;Oe<S.length;Oe++){Ee.push(36064+Oe),A.depthBuffer&&Ee.push(He);const We=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(We===!1&&(A.depthBuffer&&(we|=256),A.stencilBuffer&&(we|=1024)),ie&&n.framebufferRenderbuffer(36008,36064,36161,Se.__webglColorRenderbuffer[Oe]),We===!0&&(n.invalidateFramebuffer(36008,[He]),n.invalidateFramebuffer(36009,[He])),ie){const Re=i.get(S[Oe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Re,0)}n.blitFramebuffer(0,0,Y,ue,0,0,Y,ue,we,9728),f&&n.invalidateFramebuffer(36008,Ee)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ie)for(let Oe=0;Oe<S.length;Oe++){t.bindFramebuffer(36160,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Oe,36161,Se.__webglColorRenderbuffer[Oe]);const We=i.get(S[Oe]).__webglTexture;t.bindFramebuffer(36160,Se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Oe,3553,We,0)}t.bindFramebuffer(36009,Se.__webglMultisampledFramebuffer)}}function ft(A){return Math.min(u,A.samples)}function rt(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Cn(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Mn(A,S){const Y=A.encoding,ue=A.format,we=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===jc||Y!==ui&&(Y===Tt?a===!1?e.has("EXT_sRGB")===!0&&ue===Ln?(A.format=jc,A.minFilter=Wt,A.generateMipmaps=!1):S=$p.sRGBToLinear(S):(ue!==Ln||we!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=Q,this.resetTextureUnits=de,this.setTexture2D=V,this.setTexture2DArray=me,this.setTexture3D=se,this.setTextureCube=ve,this.rebindTextures=tt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=J,this.useMultisampledRTT=rt}function c1(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===fr)return 5121;if(s===sv)return 32819;if(s===ov)return 32820;if(s===nv)return 5120;if(s===iv)return 5122;if(s===Hp)return 5123;if(s===rv)return 5124;if(s===nr)return 5125;if(s===zn)return 5126;if(s===ri)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===av)return 6406;if(s===Ln)return 6408;if(s===cv)return 6409;if(s===hv)return 6410;if(s===ar)return 6402;if(s===cs)return 34041;if(s===Wp)return 6403;if(s===lv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===jc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===uv)return 36244;if(s===dv)return 33319;if(s===fv)return 33320;if(s===pv)return 36249;if(s===zl||s===Hl||s===Wl||s===Vl)if(o===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zu||s===Qu||s===ed||s===td)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Zu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===td)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nd||s===id)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===nd)return o===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===id)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===rd||s===sd||s===od||s===ad||s===ld||s===cd||s===hd||s===ud||s===dd||s===fd||s===pd||s===md||s===gd||s===_d)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===rd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ad)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ld)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ud)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===md)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gd)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_d)return o===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vd)return o===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Zr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class h1 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ws extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i);if(l.joints[m.jointName]===void 0){const b=new Ws;b.matrixAutoUpdate=!1,b.visible=!1,l.joints[m.jointName]=b,l.add(b)}const v=l.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class d1 extends rn{constructor(e,t,i,r,s,o,a,c,l,h){if(h=h!==void 0?h:ar,h!==ar&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=nr),i===void 0&&h===cs&&(i=Zr),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1}}class f1 extends ws{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],b=[],M=new fn;M.layers.enable(1),M.viewport=new St;const x=new fn;x.layers.enable(2),x.viewport=new St;const T=[M,x],R=new h1;R.layers.enable(1),R.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let V=v[W];return V===void 0&&(V=new _c,v[W]=V),V.getTargetRaySpace()},this.getControllerGrip=function(W){let V=v[W];return V===void 0&&(V=new _c,v[W]=V),V.getGripSpace()},this.getHand=function(W){let V=v[W];return V===void 0&&(V=new _c,v[W]=V),V.getHandSpace()};function I(W){const V=b.indexOf(W.inputSource);if(V===-1)return;const me=v[V];me!==void 0&&me.dispatchEvent({type:W.type,data:W.inputSource})}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",ee);for(let W=0;W<v.length;W++){const V=b[W];V!==null&&(b[W]=null,v[W].disconnect(V))}F=null,y=null,e.setRenderTarget(m),d=null,u=null,h=null,r=null,p=null,Q.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:d}),p=new pr(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:fr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,me=null,se=null;g.depth&&(se=g.stencil?35056:33190,V=g.stencil?cs:ar,me=g.stencil?Zr:nr);const ve={colorFormat:32856,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(ve),r.updateRenderState({layers:[u]}),p=new pr(u.textureWidth,u.textureHeight,{format:Ln,type:fr,depthTexture:new d1(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ae=e.properties.get(p);Ae.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function ee(W){for(let V=0;V<W.removed.length;V++){const me=W.removed[V],se=b.indexOf(me);se>=0&&(b[se]=null,v[se].dispatchEvent({type:"disconnected",data:me}))}for(let V=0;V<W.added.length;V++){const me=W.added[V];let se=b.indexOf(me);if(se===-1){for(let Ae=0;Ae<v.length;Ae++)if(Ae>=b.length){b.push(me),se=Ae;break}else if(b[Ae]===null){b[Ae]=me,se=Ae;break}if(se===-1)break}const ve=v[se];ve&&ve.dispatchEvent({type:"connected",data:me})}}const ne=new P,$=new P;function U(W,V,me){ne.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);const se=ne.distanceTo($),ve=V.projectionMatrix.elements,Ae=me.projectionMatrix.elements,Be=ve[14]/(ve[10]-1),q=ve[14]/(ve[10]+1),Xe=(ve[9]+1)/ve[5],ke=(ve[9]-1)/ve[5],X=(ve[8]-1)/ve[0],J=(Ae[8]+1)/Ae[0],le=Be*X,Te=Be*J,be=se/(-X+J),tt=be*-X;V.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ct=Be+be,lt=q+be,vt=le-tt,ft=Te+(se-tt),rt=Xe*q/lt*Ct,Cn=ke*q/lt*Ct;W.projectionMatrix.makePerspective(vt,ft,rt,Cn,Ct,lt)}function K(W,V){V===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(V.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;R.near=x.near=M.near=W.near,R.far=x.far=M.far=W.far,(F!==R.near||y!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,y=R.far);const V=W.parent,me=R.cameras;K(R,V);for(let ve=0;ve<me.length;ve++)K(me[ve],V);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),W.matrix.copy(R.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const se=W.children;for(let ve=0,Ae=se.length;ve<Ae;ve++)se[ve].updateMatrixWorld(!0);me.length===2?U(R,M,x):R.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(W){u!==null&&(u.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let ae=null;function de(W,V){if(l=V.getViewerPose(c||o),f=V,l!==null){const me=l.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;me.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let ve=0;ve<me.length;ve++){const Ae=me[ve];let Be=null;if(d!==null)Be=d.getViewport(Ae);else{const Xe=h.getViewSubImage(u,Ae);Be=Xe.viewport,ve===0&&(e.setRenderTargetTextures(p,Xe.colorTexture,u.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(p))}let q=T[ve];q===void 0&&(q=new fn,q.layers.enable(ve),q.viewport=new St,T[ve]=q),q.matrix.fromArray(Ae.transform.matrix),q.projectionMatrix.fromArray(Ae.projectionMatrix),q.viewport.set(Be.x,Be.y,Be.width,Be.height),ve===0&&R.matrix.copy(q.matrix),se===!0&&R.cameras.push(q)}}for(let me=0;me<v.length;me++){const se=b[me],ve=v[me];se!==null&&ve!==void 0&&ve.update(se,V,c||o)}ae&&ae(W,V),f=null}const Q=new tm;Q.setAnimationLoop(de),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}function p1(n,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===mn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function m1(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function c(b,M){const x=M.program;i.uniformBlockBinding(b,x)}function l(b,M){let x=r[b.id];x===void 0&&(g(b),x=h(b),r[b.id]=x,b.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(b,T);const R=e.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function h(b){const M=u();b.__bindingPointIndex=M;const x=n.createBuffer(),T=b.__size,R=b.usage;return n.bindBuffer(35345,x),n.bufferData(35345,T,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,M,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=r[b.id],x=b.uniforms,T=b.__cache;n.bindBuffer(35345,M);for(let R=0,F=x.length;R<F;R++){const y=x[R];if(f(y,R,T)===!0){const I=y.value,k=y.__offset;typeof I=="number"?(y.__data[0]=I,n.bufferSubData(35345,k,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):I.toArray(y.__data),n.bufferSubData(35345,k,y.__data))}}n.bindBuffer(35345,null)}function f(b,M,x){const T=b.value;if(x[M]===void 0)return typeof T=="number"?x[M]=T:x[M]=T.clone(),!0;if(typeof T=="number"){if(x[M]!==T)return x[M]=T,!0}else{const R=x[M];if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(b){const M=b.uniforms;let x=0;const T=16;let R=0;for(let F=0,y=M.length;F<y;F++){const I=M[F],k=m(I);if(I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,F>0){R=x%T;const ee=T-R;R!==0&&ee-k.boundary<0&&(x+=T-R,I.__offset=x)}x+=k.storage}return R=x%T,R>0&&(x+=T-R),b.__size=x,b.__cache={},this}function m(b){const M=b.value,x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(b){const M=b.target;M.removeEventListener("dispose",p);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function v(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:v}}function g1(){const n=so("canvas");return n.style.display="block",n}function am(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:g1(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=n.alpha!==void 0?n.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=li,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,b=0,M=null,x=-1,T=null;const R=new St,F=new St;let y=null,I=e.width,k=e.height,ee=1,ne=null,$=null;const U=new St(0,0,I,k),K=new St(0,0,I,k);let ae=!1;const de=new Th;let Q=!1,W=!1,V=null;const me=new yt,se=new De,ve=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return M===null?ee:1}let q=t;function Xe(C,H){for(let z=0;z<C.length;z++){const B=C[z],Z=e.getContext(B,H);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eh}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",qe,!1),e.addEventListener("webglcontextcreationerror",et,!1),q===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),q=Xe(H,C),q===null)throw Xe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ke,X,J,le,Te,be,tt,Ct,lt,vt,ft,rt,Cn,Mn,A,S,Y,ue,we,Ee,He,Se,ie,Oe;function We(){ke=new Tx(q),X=new xx(q,ke,n),ke.init(X),Se=new c1(q,ke,X),J=new a1(q,ke,X),le=new Rx,Te=new jb,be=new l1(q,ke,J,Te,X,Se,le),tt=new Sx(m),Ct=new Ex(m),lt=new Hv(q,X),ie=new wx(q,ke,lt,X),vt=new Ax(q,lt,le,ie),ft=new Nx(q,vt,lt,le),we=new Dx(q,X,be),S=new bx(Te),rt=new $b(m,tt,Ct,ke,X,ie,S),Cn=new p1(m,Te),Mn=new Yb,A=new t1(ke,X),ue=new vx(m,tt,J,ft,h,o),Y=new o1(m,ft,X),Oe=new m1(q,le,X,J),Ee=new yx(q,ke,le,X),He=new Ix(q,ke,le,X),le.programs=rt.programs,m.capabilities=X,m.extensions=ke,m.properties=Te,m.renderLists=Mn,m.shadowMap=Y,m.state=J,m.info=le}We();const Re=new f1(m,q);this.xr=Re,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=ke.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ke.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(I,k,!1))},this.getSize=function(C){return C.set(I,k)},this.setSize=function(C,H,z){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,k=H,e.width=Math.floor(C*ee),e.height=Math.floor(H*ee),z!==!1&&(e.style.width=C+"px",e.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(I*ee,k*ee).floor()},this.setDrawingBufferSize=function(C,H,z){I=C,k=H,ee=z,e.width=Math.floor(C*z),e.height=Math.floor(H*z),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,H,z,B){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,H,z,B),J.viewport(R.copy(U).multiplyScalar(ee).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,H,z,B){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,H,z,B),J.scissor(F.copy(K).multiplyScalar(ee).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(C){J.setScissorTest(ae=C)},this.setOpaqueSort=function(C){ne=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(C=!0,H=!0,z=!0){let B=0;C&&(B|=16384),H&&(B|=256),z&&(B|=1024),q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",qe,!1),e.removeEventListener("webglcontextcreationerror",et,!1),Mn.dispose(),A.dispose(),Te.dispose(),tt.dispose(),Ct.dispose(),ft.dispose(),ie.dispose(),Oe.dispose(),rt.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ue),Re.removeEventListener("sessionend",ct),V&&(V.dispose(),V=null),Mt.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=le.autoReset,H=Y.enabled,z=Y.autoUpdate,B=Y.needsUpdate,Z=Y.type;We(),le.autoReset=C,Y.enabled=H,Y.autoUpdate=z,Y.needsUpdate=B,Y.type=Z}function et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function D(C){const H=C.target;H.removeEventListener("dispose",D),xe(H)}function xe(C){_e(C),Te.remove(C)}function _e(C){const H=Te.get(C).programs;H!==void 0&&(H.forEach(function(z){rt.releaseProgram(z)}),C.isShaderMaterial&&rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,z,B,Z,_){H===null&&(H=Ae);const w=Z.isMesh&&Z.matrixWorld.determinant()<0,E=Ol(C,H,z,B,Z);J.setMaterial(B,w);let L=z.index;const G=z.attributes.position;if(L===null){if(G===void 0||G.count===0)return}else if(L.count===0)return;let O=1;B.wireframe===!0&&(L=vt.getWireframeAttribute(z),O=2),ie.setup(Z,B,E,z,L);let j,re=Ee;L!==null&&(j=lt.get(L),re=He,re.setIndex(j));const fe=L!==null?L.count:G.count,oe=z.drawRange.start*O,ce=z.drawRange.count*O,Ce=_!==null?_.start*O:0,he=_!==null?_.count*O:1/0,Ne=Math.max(oe,Ce),Le=Math.min(fe,oe+ce,Ce+he)-1,Me=Math.max(0,Le-Ne+1);if(Me!==0){if(Z.isMesh)B.wireframe===!0?(J.setLineWidth(B.wireframeLinewidth*Be()),re.setMode(1)):re.setMode(4);else if(Z.isLine){let Ie=B.linewidth;Ie===void 0&&(Ie=1),J.setLineWidth(Ie*Be()),Z.isLineSegments?re.setMode(1):Z.isLineLoop?re.setMode(2):re.setMode(3)}else Z.isPoints?re.setMode(0):Z.isSprite&&re.setMode(4);if(Z.isInstancedMesh)re.renderInstances(Ne,Me,Z.count);else if(z.isInstancedBufferGeometry){const Ie=Math.min(z.instanceCount,z._maxInstanceCount);re.renderInstances(Ne,Me,Ie)}else re.render(Ne,Me)}},this.compile=function(C,H){function z(B,Z,_){B.transparent===!0&&B.side===ii?(B.side=mn,B.needsUpdate=!0,Sr(B,Z,_),B.side=os,B.needsUpdate=!0,Sr(B,Z,_),B.side=ii):Sr(B,Z,_)}d=A.get(C),d.init(),g.push(d),C.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(m.physicallyCorrectLights),C.traverse(function(B){const Z=B.material;if(Z)if(Array.isArray(Z))for(let _=0;_<Z.length;_++){const w=Z[_];z(w,C,B)}else z(Z,C,B)}),g.pop(),d=null};let N=null;function ge(C){N&&N(C)}function Ue(){Mt.stop()}function ct(){Mt.start()}const Mt=new tm;Mt.setAnimationLoop(ge),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(C){N=C,Re.setAnimationLoop(C),C===null?Mt.stop():Mt.start()},Re.addEventListener("sessionstart",Ue),Re.addEventListener("sessionend",ct),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(H),H=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,H,M),d=A.get(C,g.length),d.init(),g.push(d),me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),de.setFromProjectionMatrix(me),W=this.localClippingEnabled,Q=S.init(this.clippingPlanes,W,H),u=Mn.get(C,f.length),u.init(),f.push(u),On(C,H,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(ne,$),Q===!0&&S.beginShadows();const z=d.state.shadowsArray;if(Y.render(z,C,H),Q===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(u,C),d.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const B=H.cameras;for(let Z=0,_=B.length;Z<_;Z++){const w=B[Z];xt(u,C,w,w.viewport)}}else xt(u,C,H);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(m,C,H),ie.resetDefaultState(),x=-1,T=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function On(C,H,z,B){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||de.intersectsSprite(C)){B&&ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const w=ft.update(C),E=C.material;E.visible&&u.push(C,w,E,z,ve.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==le.render.frame&&(C.skeleton.update(),C.skeleton.frame=le.render.frame),!C.frustumCulled||de.intersectsObject(C))){B&&ve.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const w=ft.update(C),E=C.material;if(Array.isArray(E)){const L=w.groups;for(let G=0,O=L.length;G<O;G++){const j=L[G],re=E[j.materialIndex];re&&re.visible&&u.push(C,w,re,z,ve.z,j)}}else E.visible&&u.push(C,w,E,z,ve.z,null)}}const _=C.children;for(let w=0,E=_.length;w<E;w++)On(_[w],H,z,B)}function xt(C,H,z,B){const Z=C.opaque,_=C.transmissive,w=C.transparent;d.setupLightsView(z),_.length>0&&En(Z,H,z),B&&J.viewport(R.copy(B)),Z.length>0&&on(Z,H,z),_.length>0&&on(_,H,z),w.length>0&&on(w,H,z),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function En(C,H,z){const B=X.isWebGL2;V===null&&(V=new pr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")?ri:fr,minFilter:yo,samples:B&&s===!0?4:0})),m.getDrawingBufferSize(se),B?V.setSize(se.x,se.y):V.setSize(Xc(se.x),Xc(se.y));const Z=m.getRenderTarget();m.setRenderTarget(V),m.clear();const _=m.toneMapping;m.toneMapping=li,on(C,H,z),m.toneMapping=_,be.updateMultisampleRenderTarget(V),be.updateRenderTargetMipmap(V),m.setRenderTarget(Z)}function on(C,H,z){const B=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,_=C.length;Z<_;Z++){const w=C[Z],E=w.object,L=w.geometry,G=B===null?w.material:B,O=w.group;E.layers.test(z.layers)&&kl(E,H,z,L,G,O)}}function kl(C,H,z,B,Z,_){C.onBeforeRender(m,H,z,B,Z,_),C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(m,H,z,B,C,_),Z.transparent===!0&&Z.side===ii?(Z.side=mn,Z.needsUpdate=!0,m.renderBufferDirect(z,H,B,Z,C,_),Z.side=os,Z.needsUpdate=!0,m.renderBufferDirect(z,H,B,Z,C,_),Z.side=ii):m.renderBufferDirect(z,H,B,Z,C,_),C.onAfterRender(m,H,z,B,Z,_)}function Sr(C,H,z){H.isScene!==!0&&(H=Ae);const B=Te.get(C),Z=d.state.lights,_=d.state.shadowsArray,w=Z.state.version,E=rt.getParameters(C,Z.state,_,H,z),L=rt.getProgramCacheKey(E);let G=B.programs;B.environment=C.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(C.isMeshStandardMaterial?Ct:tt).get(C.envMap||B.environment),G===void 0&&(C.addEventListener("dispose",D),G=new Map,B.programs=G);let O=G.get(L);if(O!==void 0){if(B.currentProgram===O&&B.lightsStateVersion===w)return Fo(C,E),O}else E.uniforms=rt.getUniforms(C),C.onBuild(z,E,m),C.onBeforeCompile(E,m),O=rt.acquireProgram(E,L),G.set(L,O),B.uniforms=E.uniforms;const j=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(j.clippingPlanes=S.uniform),Fo(C,E),B.needsLights=Fl(C),B.lightsStateVersion=w,B.needsLights&&(j.ambientLightColor.value=Z.state.ambient,j.lightProbe.value=Z.state.probe,j.directionalLights.value=Z.state.directional,j.directionalLightShadows.value=Z.state.directionalShadow,j.spotLights.value=Z.state.spot,j.spotLightShadows.value=Z.state.spotShadow,j.rectAreaLights.value=Z.state.rectArea,j.ltc_1.value=Z.state.rectAreaLTC1,j.ltc_2.value=Z.state.rectAreaLTC2,j.pointLights.value=Z.state.point,j.pointLightShadows.value=Z.state.pointShadow,j.hemisphereLights.value=Z.state.hemi,j.directionalShadowMap.value=Z.state.directionalShadowMap,j.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,j.spotShadowMap.value=Z.state.spotShadowMap,j.spotLightMatrix.value=Z.state.spotLightMatrix,j.spotLightMap.value=Z.state.spotLightMap,j.pointShadowMap.value=Z.state.pointShadowMap,j.pointShadowMatrix.value=Z.state.pointShadowMatrix);const re=O.getUniforms(),fe=wa.seqWithValue(re.seq,j);return B.currentProgram=O,B.uniformsList=fe,O}function Fo(C,H){const z=Te.get(C);z.outputEncoding=H.outputEncoding,z.instancing=H.instancing,z.skinning=H.skinning,z.morphTargets=H.morphTargets,z.morphNormals=H.morphNormals,z.morphColors=H.morphColors,z.morphTargetsCount=H.morphTargetsCount,z.numClippingPlanes=H.numClippingPlanes,z.numIntersection=H.numClipIntersection,z.vertexAlphas=H.vertexAlphas,z.vertexTangents=H.vertexTangents,z.toneMapping=H.toneMapping}function Ol(C,H,z,B,Z){H.isScene!==!0&&(H=Ae),be.resetTextureUnits();const _=H.fog,w=B.isMeshStandardMaterial?H.environment:null,E=M===null?m.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:ui,L=(B.isMeshStandardMaterial?Ct:tt).get(B.envMap||w),G=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,O=!!B.normalMap&&!!z.attributes.tangent,j=!!z.morphAttributes.position,re=!!z.morphAttributes.normal,fe=!!z.morphAttributes.color,oe=B.toneMapped?m.toneMapping:li,ce=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ce=ce!==void 0?ce.length:0,he=Te.get(B),Ne=d.state.lights;if(Q===!0&&(W===!0||C!==T)){const ze=C===T&&B.id===x;S.setState(B,C,ze)}let Le=!1;B.version===he.__version?(he.needsLights&&he.lightsStateVersion!==Ne.state.version||he.outputEncoding!==E||Z.isInstancedMesh&&he.instancing===!1||!Z.isInstancedMesh&&he.instancing===!0||Z.isSkinnedMesh&&he.skinning===!1||!Z.isSkinnedMesh&&he.skinning===!0||he.envMap!==L||B.fog===!0&&he.fog!==_||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==S.numPlanes||he.numIntersection!==S.numIntersection)||he.vertexAlphas!==G||he.vertexTangents!==O||he.morphTargets!==j||he.morphNormals!==re||he.morphColors!==fe||he.toneMapping!==oe||X.isWebGL2===!0&&he.morphTargetsCount!==Ce)&&(Le=!0):(Le=!0,he.__version=B.version);let Me=he.currentProgram;Le===!0&&(Me=Sr(B,H,Z));let Ie=!1,Ge=!1,pt=!1;const Ye=Me.getUniforms(),Rt=he.uniforms;if(J.useProgram(Me.program)&&(Ie=!0,Ge=!0,pt=!0),B.id!==x&&(x=B.id,Ge=!0),Ie||T!==C){if(Ye.setValue(q,"projectionMatrix",C.projectionMatrix),X.logarithmicDepthBuffer&&Ye.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,Ge=!0,pt=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const ze=Ye.map.cameraPosition;ze!==void 0&&ze.setValue(q,ve.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ye.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Z.isSkinnedMesh)&&Ye.setValue(q,"viewMatrix",C.matrixWorldInverse)}if(Z.isSkinnedMesh){Ye.setOptional(q,Z,"bindMatrix"),Ye.setOptional(q,Z,"bindMatrixInverse");const ze=Z.skeleton;ze&&(X.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),Ye.setValue(q,"boneTexture",ze.boneTexture,be),Ye.setValue(q,"boneTextureSize",ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const st=z.morphAttributes;if((st.position!==void 0||st.normal!==void 0||st.color!==void 0&&X.isWebGL2===!0)&&we.update(Z,z,B,Me),(Ge||he.receiveShadow!==Z.receiveShadow)&&(he.receiveShadow=Z.receiveShadow,Ye.setValue(q,"receiveShadow",Z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Rt.envMap.value=L,Rt.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1),Ge&&(Ye.setValue(q,"toneMappingExposure",m.toneMappingExposure),he.needsLights&&Cr(Rt,pt),_&&B.fog===!0&&Cn.refreshFogUniforms(Rt,_),Cn.refreshMaterialUniforms(Rt,B,ee,k,V),wa.upload(q,he.uniformsList,Rt,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(wa.upload(q,he.uniformsList,Rt,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ye.setValue(q,"center",Z.center),Ye.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Ye.setValue(q,"normalMatrix",Z.normalMatrix),Ye.setValue(q,"modelMatrix",Z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ze=B.uniformsGroups;for(let Et=0,an=ze.length;Et<an;Et++)if(X.isWebGL2){const Pt=ze[Et];Oe.update(Pt,Me),Oe.bind(Pt,Me)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Me}function Cr(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,H,z){Te.get(C.texture).__webglTexture=H,Te.get(C.depthTexture).__webglTexture=z;const B=Te.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,H){const z=Te.get(C);z.__webglFramebuffer=H,z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,z=0){M=C,v=H,b=z;let B=!0;if(C){const L=Te.get(C);L.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(36160,null),B=!1):L.__webglFramebuffer===void 0?be.setupRenderTarget(C):L.__hasExternalTextures&&be.rebindTextures(C,Te.get(C.texture).__webglTexture,Te.get(C.depthTexture).__webglTexture)}let Z=null,_=!1,w=!1;if(C){const L=C.texture;(L.isData3DTexture||L.isDataArrayTexture)&&(w=!0);const G=Te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Z=G[H],_=!0):X.isWebGL2&&C.samples>0&&be.useMultisampledRTT(C)===!1?Z=Te.get(C).__webglMultisampledFramebuffer:Z=G,R.copy(C.viewport),F.copy(C.scissor),y=C.scissorTest}else R.copy(U).multiplyScalar(ee).floor(),F.copy(K).multiplyScalar(ee).floor(),y=ae;if(J.bindFramebuffer(36160,Z)&&X.drawBuffers&&B&&J.drawBuffers(C,Z),J.viewport(R),J.scissor(F),J.setScissorTest(y),_){const L=Te.get(C.texture);q.framebufferTexture2D(36160,36064,34069+H,L.__webglTexture,z)}else if(w){const L=Te.get(C.texture),G=H||0;q.framebufferTextureLayer(36160,36064,L.__webglTexture,z||0,G)}x=-1},this.readRenderTargetPixels=function(C,H,z,B,Z,_,w){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E=Te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&w!==void 0&&(E=E[w]),E){J.bindFramebuffer(36160,E);try{const L=C.texture,G=L.format,O=L.type;if(G!==Ln&&Se.convert(G)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const j=O===ri&&(ke.has("EXT_color_buffer_half_float")||X.isWebGL2&&ke.has("EXT_color_buffer_float"));if(O!==fr&&Se.convert(O)!==q.getParameter(35738)&&!(O===zn&&(X.isWebGL2||ke.has("OES_texture_float")||ke.has("WEBGL_color_buffer_float")))&&!j){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-B&&z>=0&&z<=C.height-Z&&q.readPixels(H,z,B,Z,Se.convert(G),Se.convert(O),_)}finally{const L=M!==null?Te.get(M).__webglFramebuffer:null;J.bindFramebuffer(36160,L)}}},this.copyFramebufferToTexture=function(C,H,z=0){const B=Math.pow(2,-z),Z=Math.floor(H.image.width*B),_=Math.floor(H.image.height*B);be.setTexture2D(H,0),q.copyTexSubImage2D(3553,z,0,0,C.x,C.y,Z,_),J.unbindTexture()},this.copyTextureToTexture=function(C,H,z,B=0){const Z=H.image.width,_=H.image.height,w=Se.convert(z.format),E=Se.convert(z.type);be.setTexture2D(z,0),q.pixelStorei(37440,z.flipY),q.pixelStorei(37441,z.premultiplyAlpha),q.pixelStorei(3317,z.unpackAlignment),H.isDataTexture?q.texSubImage2D(3553,B,C.x,C.y,Z,_,w,E,H.image.data):H.isCompressedTexture?q.compressedTexSubImage2D(3553,B,C.x,C.y,H.mipmaps[0].width,H.mipmaps[0].height,w,H.mipmaps[0].data):q.texSubImage2D(3553,B,C.x,C.y,w,E,H.image),B===0&&z.generateMipmaps&&q.generateMipmap(3553),J.unbindTexture()},this.copyTextureToTexture3D=function(C,H,z,B,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _=C.max.x-C.min.x+1,w=C.max.y-C.min.y+1,E=C.max.z-C.min.z+1,L=Se.convert(B.format),G=Se.convert(B.type);let O;if(B.isData3DTexture)be.setTexture3D(B,0),O=32879;else if(B.isDataArrayTexture)be.setTexture2DArray(B,0),O=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment);const j=q.getParameter(3314),re=q.getParameter(32878),fe=q.getParameter(3316),oe=q.getParameter(3315),ce=q.getParameter(32877),Ce=z.isCompressedTexture?z.mipmaps[0]:z.image;q.pixelStorei(3314,Ce.width),q.pixelStorei(32878,Ce.height),q.pixelStorei(3316,C.min.x),q.pixelStorei(3315,C.min.y),q.pixelStorei(32877,C.min.z),z.isDataTexture||z.isData3DTexture?q.texSubImage3D(O,Z,H.x,H.y,H.z,_,w,E,L,G,Ce.data):z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(O,Z,H.x,H.y,H.z,_,w,E,L,Ce.data)):q.texSubImage3D(O,Z,H.x,H.y,H.z,_,w,E,L,G,Ce),q.pixelStorei(3314,j),q.pixelStorei(32878,re),q.pixelStorei(3316,fe),q.pixelStorei(3315,oe),q.pixelStorei(32877,ce),Z===0&&B.generateMipmaps&&q.generateMipmap(O),J.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?be.setTextureCube(C,0):C.isData3DTexture?be.setTexture3D(C,0):C.isDataArrayTexture?be.setTexture2DArray(C,0):be.setTexture2D(C,0),J.unbindTexture()},this.resetState=function(){v=0,b=0,M=null,J.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class _1 extends am{}_1.prototype.isWebGL1Renderer=!0;class Jc extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class v1{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$c,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new P;class Ta{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lm extends xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Br;const Ps=new P,zr=new P,Hr=new P,Wr=new De,Ls=new De,cm=new yt,oa=new P,Ds=new P,aa=new P,ef=new De,vc=new De,tf=new De;class w1 extends Gt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new v1(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new Ta(i,3,0,!1)),Br.setAttribute("uv",new Ta(i,2,3,!1))}this.geometry=Br,this.material=e!==void 0?e:new lm,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),cm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;la(oa.set(-.5,-.5,0),Hr,o,zr,r,s),la(Ds.set(.5,-.5,0),Hr,o,zr,r,s),la(aa.set(.5,.5,0),Hr,o,zr,r,s),ef.set(0,0),vc.set(1,0),tf.set(1,1);let a=e.ray.intersectTriangle(oa,Ds,aa,!1,Ps);if(a===null&&(la(Ds.set(-.5,.5,0),Hr,o,zr,r,s),vc.set(0,1),a=e.ray.intersectTriangle(oa,aa,Ds,!1,Ps),a===null))return;const c=e.ray.origin.distanceTo(Ps);c<e.near||c>e.far||t.push({distance:c,point:Ps.clone(),uv:Bn.getUV(Ps,oa,Ds,aa,ef,vc,tf,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(n,e,t,i,r,s){Wr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ls.x=s*Wr.x-r*Wr.y,Ls.y=r*Wr.x+s*Wr.y):Ls.copy(Wr),n.copy(e),n.x+=Ls.x,n.y+=Ls.y,n.applyMatrix4(cm)}class y1 extends rn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Yt,h=Yt,u,d){super(null,o,a,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nf=new P,rf=new P,sf=new yt,wc=new Yp,ca=new il;class x1 extends Gt{constructor(e=new sn,t=new hm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)nf.fromBufferAttribute(t,r-1),rf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nf.distanceTo(rf);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(r),ca.radius+=s,e.ray.intersectsSphere(ca)===!1)return;sf.copy(r).invert(),wc.copy(e.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const v=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let M=v,x=b-1;M<x;M+=f){const T=g.getX(M),R=g.getX(M+1);if(l.fromBufferAttribute(p,T),h.fromBufferAttribute(p,R),wc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let M=v,x=b-1;M<x;M+=f){if(l.fromBufferAttribute(p,M),h.fromBufferAttribute(p,M+1),wc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Zc extends rn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new De:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],s=[],o=[],a=new P,c=new yt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Kt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class um extends $n{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new De,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class b1 extends um{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ha=new P,yc=new Ih,xc=new Ih,bc=new Ih;class S1 extends $n{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(ha.subVectors(r[0],r[1]).add(r[0]),l=ha);const u=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(ha.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),yc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,m,p),xc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,m,p),bc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),xc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),bc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(yc.calc(c),xc.calc(c),bc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function of(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function C1(n,e){const t=1-n;return t*t*e}function M1(n,e){return 2*(1-n)*n*e}function E1(n,e){return n*n*e}function js(n,e,t,i){return C1(n,e)+M1(n,t)+E1(n,i)}function T1(n,e){const t=1-n;return t*t*t*e}function A1(n,e){const t=1-n;return 3*t*t*n*e}function I1(n,e){return 3*(1-n)*n*n*e}function R1(n,e){return n*n*n*e}function Xs(n,e,t,i,r){return T1(n,e)+A1(n,t)+I1(n,i)+R1(n,r)}class P1 extends $n{constructor(e=new De,t=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class L1 extends $n{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Xs(e,r.x,s.x,o.x,a.x),Xs(e,r.y,s.y,o.y,a.y),Xs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D1 extends $n{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new De;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N1 extends $n{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k1 extends $n{constructor(e=new De,t=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new De){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(js(e,r.x,s.x,o.x),js(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dm extends $n{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(js(e,r.x,s.x,o.x),js(e,r.y,s.y,o.y),js(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O1 extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(of(a,c.x,l.x,h.x,u.x),of(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new De().fromArray(r))}return this}}var F1=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:S1,CubicBezierCurve:P1,CubicBezierCurve3:L1,EllipseCurve:um,LineCurve:D1,LineCurve3:N1,QuadraticBezierCurve:k1,QuadraticBezierCurve3:dm,SplineCurve:O1});class Rh extends sn{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const m=[],p=i/2;let v=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function b(){const x=new P,T=new P;let R=0;const F=(t-e)/i;for(let y=0;y<=s;y++){const I=[],k=y/s,ee=k*(t-e)+e;for(let ne=0;ne<=r;ne++){const $=ne/r,U=$*c+a,K=Math.sin(U),ae=Math.cos(U);T.x=ee*K,T.y=-k*i+p,T.z=ee*ae,u.push(T.x,T.y,T.z),x.set(K,F,ae).normalize(),d.push(x.x,x.y,x.z),f.push($,1-k),I.push(g++)}m.push(I)}for(let y=0;y<r;y++)for(let I=0;I<s;I++){const k=m[I][y],ee=m[I+1][y],ne=m[I+1][y+1],$=m[I][y+1];h.push(k,ee,$),h.push(ee,ne,$),R+=6}l.addGroup(v,R,0),v+=R}function M(x){const T=g,R=new De,F=new P;let y=0;const I=x===!0?e:t,k=x===!0?1:-1;for(let ne=1;ne<=r;ne++)u.push(0,p*k,0),d.push(0,k,0),f.push(.5,.5),g++;const ee=g;for(let ne=0;ne<=r;ne++){const U=ne/r*c+a,K=Math.cos(U),ae=Math.sin(U);F.x=I*ae,F.y=p*k,F.z=I*K,u.push(F.x,F.y,F.z),d.push(0,k,0),R.x=K*.5+.5,R.y=ae*.5*k+.5,f.push(R.x,R.y),g++}for(let ne=0;ne<r;ne++){const $=T+ne,U=ee+ne;x===!0?h.push(U,U+1,$):h.push(U+1,U,$),y+=3}l.addGroup(v,y,x===!0?1:2),v+=y}}static fromJSON(e){return new Rh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph extends sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],m=[],p=[];for(let v=0;v<=i;v++){const b=[],M=v/i;let x=0;v==0&&o==0?x=.5/t:v==i&&c==Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){const R=T/t;u.x=-e*Math.cos(r+R*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(r+R*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),p.push(R+x,1-M),b.push(l++)}h.push(b)}for(let v=0;v<i;v++)for(let b=0;b<t;b++){const M=h[v][b+1],x=h[v][b],T=h[v+1][b],R=h[v+1][b+1];(v!==0||o>0)&&f.push(M,x,R),(v!==i-1||c<Math.PI)&&f.push(x,T,R)}this.setIndex(f),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(m,3)),this.setAttribute("uv",new It(p,2))}static fromJSON(e){return new Ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lh extends sn{constructor(e=1,t=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const m=g/r*s,p=f/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(m),u.y=(e+t*Math.cos(p))*Math.sin(m),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const m=(r+1)*f+g-1,p=(r+1)*(f-1)+g-1,v=(r+1)*(f-1)+g,b=(r+1)*f+g;o.push(m,p,b),o.push(p,v,b)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(l,2))}static fromJSON(e){return new Lh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Dh extends sn{constructor(e=new dm(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new De;let h=new P;const u=[],d=[],f=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function m(){for(let M=0;M<t;M++)p(M);p(s===!1?t:0),b(),v()}function p(M){h=e.getPointAt(M/t,h);const x=o.normals[M],T=o.binormals[M];for(let R=0;R<=r;R++){const F=R/r*Math.PI*2,y=Math.sin(F),I=-Math.cos(F);c.x=I*x.x+y*T.x,c.y=I*x.y+y*T.y,c.z=I*x.z+y*T.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function v(){for(let M=1;M<=t;M++)for(let x=1;x<=r;x++){const T=(r+1)*(M-1)+(x-1),R=(r+1)*M+(x-1),F=(r+1)*M+x,y=(r+1)*(M-1)+x;g.push(T,R,y),g.push(R,F,y)}}function b(){for(let M=0;M<=t;M++)for(let x=0;x<=r;x++)l.x=M/t,l.y=x/r,f.push(l.x,l.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Dh(new F1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Qr extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Aa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class U1{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const B1=new U1;class al{constructor(e){this.manager=e!==void 0?e:B1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ei={};class z1 extends Error{constructor(e,t){super(e),this.response=t}}class fm extends al{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Aa.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:i,onError:r});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ei[e],u=l.body.getReader(),d=l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(v){b();function b(){u.read().then(({done:M,value:x})=>{if(M)v.close();else{m+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let R=0,F=h.length;R<F;R++){const y=h[R];y.onProgress&&y.onProgress(T)}v.enqueue(x),b()}})}}});return new Response(p)}else throw new z1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Aa.add(e,l);const h=ei[e];delete ei[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H1 extends al{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Aa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=so("img");function c(){h(),Aa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class W1 extends al{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new y1,a=new fm(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){const l=s.parse(c);!l||(l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:pn,o.wrapT=l.wrapT!==void 0?l.wrapT:pn,o.magFilter=l.magFilter!==void 0?l.magFilter:Wt,o.minFilter=l.minFilter!==void 0?l.minFilter:Wt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=yo),l.mipmapCount===1&&(o.minFilter=Wt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l))},i,r),o}}class pm extends al{constructor(e){super(e)}load(e,t,i,r){const s=new rn,o=new H1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class V1 extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sc=new yt,af=new P,lf=new P;class G1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cf=new yt,Ns=new P,Cc=new P;class q1 extends G1{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ns),Cc.copy(i.position),Cc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cc),i.updateMatrixWorld(),r.makeTranslation(-Ns.x,-Ns.y,-Ns.z),cf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf)}}class $1 extends V1{constructor(e,t,i=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new q1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}const ni=j1();function j1(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(i[c]=0,i[c|256]=32768,r[c]=24,r[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,r[c]=-l-1,r[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,r[c]=13,r[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,r[c]=24,r[c|256]=24):(i[c]=31744,i[c|256]=64512,r[c]=13,r[c|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function X1(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=Kt(n,-65504,65504),ni.floatView[0]=n;const e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((e&8388607)>>ni.shiftTable[t])}function Y1(n){const e=n>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(n&1023)]+ni.exponentTable[e],ni.floatView[0]}var hf=Object.freeze({__proto__:null,toHalfFloat:X1,fromHalfFloat:Y1});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);class K1 extends Gt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Vr=new P,uf=new yt,df=new yt,ff=new P,pf=new P;class J1{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:i,height:r}},this.render=function(f,g){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),uf.copy(g.matrixWorldInverse),df.multiplyMatrices(g.projectionMatrix,uf),l(f,f,g),d(f)},this.setSize=function(f,g){i=f,r=g,s=i/2,o=r/2,c.style.width=f+"px",c.style.height=g+"px"};function l(f,g,m){if(f.isCSS2DObject){Vr.setFromMatrixPosition(f.matrixWorld),Vr.applyMatrix4(df);const p=f.visible===!0&&Vr.z>=-1&&Vr.z<=1&&f.layers.test(m.layers)===!0;if(f.element.style.display=p===!0?"":"none",p===!0){f.onBeforeRender(t,g,m);const b=f.element;b.style.transform="translate(-50%,-50%) translate("+(Vr.x*s+s)+"px,"+(-Vr.y*o+o)+"px)",b.parentNode!==c&&c.appendChild(b),f.onAfterRender(t,g,m)}const v={distanceToCameraSquared:h(m,f)};a.objects.set(f,v)}for(let p=0,v=f.children.length;p<v;p++)l(f.children[p],g,m)}function h(f,g){return ff.setFromMatrixPosition(f.matrixWorld),pf.setFromMatrixPosition(g.matrixWorld),ff.distanceToSquared(pf)}function u(f){const g=[];return f.traverse(function(m){m.isCSS2DObject&&g.push(m)}),g}function d(f){const g=u(f).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const b=a.objects.get(p).distanceToCameraSquared,M=a.objects.get(v).distanceToCameraSquared;return b-M}),m=g.length;for(let p=0,v=g.length;p<v;p++)g[p].element.style.zIndex=m-p}}}var Z1={jet:[{index:0,rgb:[0,0,131]},{index:.125,rgb:[0,60,170]},{index:.375,rgb:[5,255,255]},{index:.625,rgb:[255,255,0]},{index:.875,rgb:[250,0,0]},{index:1,rgb:[128,0,0]}],hsv:[{index:0,rgb:[255,0,0]},{index:.169,rgb:[253,255,2]},{index:.173,rgb:[247,255,2]},{index:.337,rgb:[0,252,4]},{index:.341,rgb:[0,252,10]},{index:.506,rgb:[1,249,255]},{index:.671,rgb:[2,0,253]},{index:.675,rgb:[8,0,253]},{index:.839,rgb:[255,0,251]},{index:.843,rgb:[255,0,245]},{index:1,rgb:[255,0,6]}],hot:[{index:0,rgb:[0,0,0]},{index:.3,rgb:[230,0,0]},{index:.6,rgb:[255,210,0]},{index:1,rgb:[255,255,255]}],spring:[{index:0,rgb:[255,0,255]},{index:1,rgb:[255,255,0]}],summer:[{index:0,rgb:[0,128,102]},{index:1,rgb:[255,255,102]}],autumn:[{index:0,rgb:[255,0,0]},{index:1,rgb:[255,255,0]}],winter:[{index:0,rgb:[0,0,255]},{index:1,rgb:[0,255,128]}],bone:[{index:0,rgb:[0,0,0]},{index:.376,rgb:[84,84,116]},{index:.753,rgb:[169,200,200]},{index:1,rgb:[255,255,255]}],copper:[{index:0,rgb:[0,0,0]},{index:.804,rgb:[255,160,102]},{index:1,rgb:[255,199,127]}],greys:[{index:0,rgb:[0,0,0]},{index:1,rgb:[255,255,255]}],yignbu:[{index:0,rgb:[8,29,88]},{index:.125,rgb:[37,52,148]},{index:.25,rgb:[34,94,168]},{index:.375,rgb:[29,145,192]},{index:.5,rgb:[65,182,196]},{index:.625,rgb:[127,205,187]},{index:.75,rgb:[199,233,180]},{index:.875,rgb:[237,248,217]},{index:1,rgb:[255,255,217]}],greens:[{index:0,rgb:[0,68,27]},{index:.125,rgb:[0,109,44]},{index:.25,rgb:[35,139,69]},{index:.375,rgb:[65,171,93]},{index:.5,rgb:[116,196,118]},{index:.625,rgb:[161,217,155]},{index:.75,rgb:[199,233,192]},{index:.875,rgb:[229,245,224]},{index:1,rgb:[247,252,245]}],yiorrd:[{index:0,rgb:[128,0,38]},{index:.125,rgb:[189,0,38]},{index:.25,rgb:[227,26,28]},{index:.375,rgb:[252,78,42]},{index:.5,rgb:[253,141,60]},{index:.625,rgb:[254,178,76]},{index:.75,rgb:[254,217,118]},{index:.875,rgb:[255,237,160]},{index:1,rgb:[255,255,204]}],bluered:[{index:0,rgb:[0,0,255]},{index:1,rgb:[255,0,0]}],rdbu:[{index:0,rgb:[5,10,172]},{index:.35,rgb:[106,137,247]},{index:.5,rgb:[190,190,190]},{index:.6,rgb:[220,170,132]},{index:.7,rgb:[230,145,90]},{index:1,rgb:[178,10,28]}],picnic:[{index:0,rgb:[0,0,255]},{index:.1,rgb:[51,153,255]},{index:.2,rgb:[102,204,255]},{index:.3,rgb:[153,204,255]},{index:.4,rgb:[204,204,255]},{index:.5,rgb:[255,255,255]},{index:.6,rgb:[255,204,255]},{index:.7,rgb:[255,153,255]},{index:.8,rgb:[255,102,204]},{index:.9,rgb:[255,102,102]},{index:1,rgb:[255,0,0]}],rainbow:[{index:0,rgb:[150,0,90]},{index:.125,rgb:[0,0,200]},{index:.25,rgb:[0,25,255]},{index:.375,rgb:[0,152,255]},{index:.5,rgb:[44,255,150]},{index:.625,rgb:[151,255,0]},{index:.75,rgb:[255,234,0]},{index:.875,rgb:[255,111,0]},{index:1,rgb:[255,0,0]}],portland:[{index:0,rgb:[12,51,131]},{index:.25,rgb:[10,136,186]},{index:.5,rgb:[242,211,56]},{index:.75,rgb:[242,143,56]},{index:1,rgb:[217,30,30]}],blackbody:[{index:0,rgb:[0,0,0]},{index:.2,rgb:[230,0,0]},{index:.4,rgb:[230,210,0]},{index:.7,rgb:[255,255,255]},{index:1,rgb:[160,200,255]}],earth:[{index:0,rgb:[0,0,130]},{index:.1,rgb:[0,180,180]},{index:.2,rgb:[40,210,40]},{index:.4,rgb:[230,230,50]},{index:.6,rgb:[120,70,20]},{index:1,rgb:[255,255,255]}],electric:[{index:0,rgb:[0,0,0]},{index:.15,rgb:[30,0,100]},{index:.4,rgb:[120,0,100]},{index:.6,rgb:[160,90,0]},{index:.8,rgb:[230,200,0]},{index:1,rgb:[255,250,220]}],alpha:[{index:0,rgb:[255,255,255,0]},{index:1,rgb:[255,255,255,1]}],viridis:[{index:0,rgb:[68,1,84]},{index:.13,rgb:[71,44,122]},{index:.25,rgb:[59,81,139]},{index:.38,rgb:[44,113,142]},{index:.5,rgb:[33,144,141]},{index:.63,rgb:[39,173,129]},{index:.75,rgb:[92,200,99]},{index:.88,rgb:[170,220,50]},{index:1,rgb:[253,231,37]}],inferno:[{index:0,rgb:[0,0,4]},{index:.13,rgb:[31,12,72]},{index:.25,rgb:[85,15,109]},{index:.38,rgb:[136,34,106]},{index:.5,rgb:[186,54,85]},{index:.63,rgb:[227,89,51]},{index:.75,rgb:[249,140,10]},{index:.88,rgb:[249,201,50]},{index:1,rgb:[252,255,164]}],magma:[{index:0,rgb:[0,0,4]},{index:.13,rgb:[28,16,68]},{index:.25,rgb:[79,18,123]},{index:.38,rgb:[129,37,129]},{index:.5,rgb:[181,54,122]},{index:.63,rgb:[229,80,100]},{index:.75,rgb:[251,135,97]},{index:.88,rgb:[254,194,135]},{index:1,rgb:[252,253,191]}],plasma:[{index:0,rgb:[13,8,135]},{index:.13,rgb:[75,3,161]},{index:.25,rgb:[125,3,168]},{index:.38,rgb:[168,34,150]},{index:.5,rgb:[203,70,121]},{index:.63,rgb:[229,107,93]},{index:.75,rgb:[248,148,65]},{index:.88,rgb:[253,195,40]},{index:1,rgb:[240,249,33]}],warm:[{index:0,rgb:[125,0,179]},{index:.13,rgb:[172,0,187]},{index:.25,rgb:[219,0,170]},{index:.38,rgb:[255,0,130]},{index:.5,rgb:[255,63,74]},{index:.63,rgb:[255,123,0]},{index:.75,rgb:[234,176,0]},{index:.88,rgb:[190,228,0]},{index:1,rgb:[147,255,0]}],cool:[{index:0,rgb:[125,0,179]},{index:.13,rgb:[116,0,218]},{index:.25,rgb:[98,74,237]},{index:.38,rgb:[68,146,231]},{index:.5,rgb:[0,204,197]},{index:.63,rgb:[0,247,146]},{index:.75,rgb:[0,255,88]},{index:.88,rgb:[40,255,8]},{index:1,rgb:[147,255,0]}],"rainbow-soft":[{index:0,rgb:[125,0,179]},{index:.1,rgb:[199,0,180]},{index:.2,rgb:[255,0,121]},{index:.3,rgb:[255,108,0]},{index:.4,rgb:[222,194,0]},{index:.5,rgb:[150,255,0]},{index:.6,rgb:[0,255,55]},{index:.7,rgb:[0,246,150]},{index:.8,rgb:[50,167,222]},{index:.9,rgb:[103,51,235]},{index:1,rgb:[124,0,186]}],bathymetry:[{index:0,rgb:[40,26,44]},{index:.13,rgb:[59,49,90]},{index:.25,rgb:[64,76,139]},{index:.38,rgb:[63,110,151]},{index:.5,rgb:[72,142,158]},{index:.63,rgb:[85,174,163]},{index:.75,rgb:[120,206,163]},{index:.88,rgb:[187,230,172]},{index:1,rgb:[253,254,204]}],cdom:[{index:0,rgb:[47,15,62]},{index:.13,rgb:[87,23,86]},{index:.25,rgb:[130,28,99]},{index:.38,rgb:[171,41,96]},{index:.5,rgb:[206,67,86]},{index:.63,rgb:[230,106,84]},{index:.75,rgb:[242,149,103]},{index:.88,rgb:[249,193,135]},{index:1,rgb:[254,237,176]}],chlorophyll:[{index:0,rgb:[18,36,20]},{index:.13,rgb:[25,63,41]},{index:.25,rgb:[24,91,59]},{index:.38,rgb:[13,119,72]},{index:.5,rgb:[18,148,80]},{index:.63,rgb:[80,173,89]},{index:.75,rgb:[132,196,122]},{index:.88,rgb:[175,221,162]},{index:1,rgb:[215,249,208]}],density:[{index:0,rgb:[54,14,36]},{index:.13,rgb:[89,23,80]},{index:.25,rgb:[110,45,132]},{index:.38,rgb:[120,77,178]},{index:.5,rgb:[120,113,213]},{index:.63,rgb:[115,151,228]},{index:.75,rgb:[134,185,227]},{index:.88,rgb:[177,214,227]},{index:1,rgb:[230,241,241]}],"freesurface-blue":[{index:0,rgb:[30,4,110]},{index:.13,rgb:[47,14,176]},{index:.25,rgb:[41,45,236]},{index:.38,rgb:[25,99,212]},{index:.5,rgb:[68,131,200]},{index:.63,rgb:[114,156,197]},{index:.75,rgb:[157,181,203]},{index:.88,rgb:[200,208,216]},{index:1,rgb:[241,237,236]}],"freesurface-red":[{index:0,rgb:[60,9,18]},{index:.13,rgb:[100,17,27]},{index:.25,rgb:[142,20,29]},{index:.38,rgb:[177,43,27]},{index:.5,rgb:[192,87,63]},{index:.63,rgb:[205,125,105]},{index:.75,rgb:[216,162,148]},{index:.88,rgb:[227,199,193]},{index:1,rgb:[241,237,236]}],oxygen:[{index:0,rgb:[64,5,5]},{index:.13,rgb:[106,6,15]},{index:.25,rgb:[144,26,7]},{index:.38,rgb:[168,64,3]},{index:.5,rgb:[188,100,4]},{index:.63,rgb:[206,136,11]},{index:.75,rgb:[220,174,25]},{index:.88,rgb:[231,215,44]},{index:1,rgb:[248,254,105]}],par:[{index:0,rgb:[51,20,24]},{index:.13,rgb:[90,32,35]},{index:.25,rgb:[129,44,34]},{index:.38,rgb:[159,68,25]},{index:.5,rgb:[182,99,19]},{index:.63,rgb:[199,134,22]},{index:.75,rgb:[212,171,35]},{index:.88,rgb:[221,210,54]},{index:1,rgb:[225,253,75]}],phase:[{index:0,rgb:[145,105,18]},{index:.13,rgb:[184,71,38]},{index:.25,rgb:[186,58,115]},{index:.38,rgb:[160,71,185]},{index:.5,rgb:[110,97,218]},{index:.63,rgb:[50,123,164]},{index:.75,rgb:[31,131,110]},{index:.88,rgb:[77,129,34]},{index:1,rgb:[145,105,18]}],salinity:[{index:0,rgb:[42,24,108]},{index:.13,rgb:[33,50,162]},{index:.25,rgb:[15,90,145]},{index:.38,rgb:[40,118,137]},{index:.5,rgb:[59,146,135]},{index:.63,rgb:[79,175,126]},{index:.75,rgb:[120,203,104]},{index:.88,rgb:[193,221,100]},{index:1,rgb:[253,239,154]}],temperature:[{index:0,rgb:[4,35,51]},{index:.13,rgb:[23,51,122]},{index:.25,rgb:[85,59,157]},{index:.38,rgb:[129,79,143]},{index:.5,rgb:[175,95,130]},{index:.63,rgb:[222,112,101]},{index:.75,rgb:[249,146,66]},{index:.88,rgb:[249,196,65]},{index:1,rgb:[232,250,91]}],turbidity:[{index:0,rgb:[34,31,27]},{index:.13,rgb:[65,50,41]},{index:.25,rgb:[98,69,52]},{index:.38,rgb:[131,89,57]},{index:.5,rgb:[161,112,59]},{index:.63,rgb:[185,140,66]},{index:.75,rgb:[202,174,88]},{index:.88,rgb:[216,209,126]},{index:1,rgb:[233,246,171]}],"velocity-blue":[{index:0,rgb:[17,32,64]},{index:.13,rgb:[35,52,116]},{index:.25,rgb:[29,81,156]},{index:.38,rgb:[31,113,162]},{index:.5,rgb:[50,144,169]},{index:.63,rgb:[87,173,176]},{index:.75,rgb:[149,196,189]},{index:.88,rgb:[203,221,211]},{index:1,rgb:[254,251,230]}],"velocity-green":[{index:0,rgb:[23,35,19]},{index:.13,rgb:[24,64,38]},{index:.25,rgb:[11,95,45]},{index:.38,rgb:[39,123,35]},{index:.5,rgb:[95,146,12]},{index:.63,rgb:[152,165,18]},{index:.75,rgb:[201,186,69]},{index:.88,rgb:[233,216,137]},{index:1,rgb:[255,253,205]}],cubehelix:[{index:0,rgb:[0,0,0]},{index:.07,rgb:[22,5,59]},{index:.13,rgb:[60,4,105]},{index:.2,rgb:[109,1,135]},{index:.27,rgb:[161,0,147]},{index:.33,rgb:[210,2,142]},{index:.4,rgb:[251,11,123]},{index:.47,rgb:[255,29,97]},{index:.53,rgb:[255,54,69]},{index:.6,rgb:[255,85,46]},{index:.67,rgb:[255,120,34]},{index:.73,rgb:[255,157,37]},{index:.8,rgb:[241,191,57]},{index:.87,rgb:[224,220,93]},{index:.93,rgb:[218,241,142]},{index:1,rgb:[227,253,198]}]};function Q1(n,e,t){return n*(1-t)+e*t}var eS=Q1,mf=Z1,ua=eS,gf=tS;function tS(n){var e,t,i,r,s,o,a,c,d,l,h;if(n||(n={}),c=(n.nshades||72)-1,a=n.format||"hex",o=n.colormap,o||(o="jet"),typeof o=="string"){if(o=o.toLowerCase(),!mf[o])throw Error(o+" not a supported colorscale");s=mf[o]}else if(Array.isArray(o))s=o.slice();else throw Error("unsupported colormap option",o);if(s.length>c+1)throw new Error(o+" map requires nshades to be at least size "+s.length);Array.isArray(n.alpha)?n.alpha.length!==2?l=[1,1]:l=n.alpha.slice():typeof n.alpha=="number"?l=[n.alpha,n.alpha]:l=[1,1],e=s.map(function(m){return Math.round(m.index*c)}),l[0]=Math.min(Math.max(l[0],0),1),l[1]=Math.min(Math.max(l[1],0),1);var u=s.map(function(m,p){var v=s[p].index,b=s[p].rgb.slice();return b.length===4&&b[3]>=0&&b[3]<=1||(b[3]=l[0]+(l[1]-l[0])*v),b}),d=[];for(h=0;h<e.length-1;++h){r=e[h+1]-e[h],t=u[h],i=u[h+1];for(var f=0;f<r;f++){var g=f/r;d.push([Math.round(ua(t[0],i[0],g)),Math.round(ua(t[1],i[1],g)),Math.round(ua(t[2],i[2],g)),ua(t[3],i[3],g)])}}return d.push(s[s.length-1].rgb.concat(l[1])),a==="hex"?d=d.map(iS):a==="rgbaString"?d=d.map(rS):a==="float"&&(d=d.map(nS)),d}function nS(n){return[n[0]/255,n[1]/255,n[2]/255,n[3]]}function iS(n){for(var e,t="#",i=0;i<3;++i)e=n[i],e=e.toString(16),t+=("00"+e).substr(e.length);return t}function rS(n){return"rgba("+n.join(",")+")"}const sS={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"},mm={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"},Lt={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"},tn={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"},Mi={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"};class te{static getFirstMatch(e,t){const i=t.match(e);return i&&i.length>0&&i[1]||""}static getSecondMatch(e,t){const i=t.match(e);return i&&i.length>1&&i[2]||""}static matchAndReturnConst(e,t,i){if(e.test(t))return i}static getWindowsVersionName(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}static getMacOSVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),t[0]===10)switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}}static getAndroidVersionName(e){const t=e.split(".").splice(0,2).map(i=>parseInt(i,10)||0);if(t.push(0),!(t[0]===1&&t[1]<5)){if(t[0]===1&&t[1]<6)return"Cupcake";if(t[0]===1&&t[1]>=6)return"Donut";if(t[0]===2&&t[1]<2)return"Eclair";if(t[0]===2&&t[1]===2)return"Froyo";if(t[0]===2&&t[1]>2)return"Gingerbread";if(t[0]===3)return"Honeycomb";if(t[0]===4&&t[1]<1)return"Ice Cream Sandwich";if(t[0]===4&&t[1]<4)return"Jelly Bean";if(t[0]===4&&t[1]>=4)return"KitKat";if(t[0]===5)return"Lollipop";if(t[0]===6)return"Marshmallow";if(t[0]===7)return"Nougat";if(t[0]===8)return"Oreo";if(t[0]===9)return"Pie"}}static getVersionPrecision(e){return e.split(".").length}static compareVersions(e,t,i=!1){const r=te.getVersionPrecision(e),s=te.getVersionPrecision(t);let o=Math.max(r,s),a=0;const c=te.map([e,t],l=>{const h=o-te.getVersionPrecision(l),u=l+new Array(h+1).join(".0");return te.map(u.split("."),d=>new Array(20-d.length).join("0")+d).reverse()});for(i&&(a=o-Math.min(r,s)),o-=1;o>=a;){if(c[0][o]>c[1][o])return 1;if(c[0][o]===c[1][o]){if(o===a)return 0;o-=1}else if(c[0][o]<c[1][o])return-1}}static map(e,t){const i=[];let r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)i.push(t(e[r]));return i}static find(e,t){let i,r;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(i=0,r=e.length;i<r;i+=1){const s=e[i];if(t(s,i))return s}}static assign(e,...t){const i=e;let r,s;if(Object.assign)return Object.assign(e,...t);for(r=0,s=t.length;r<s;r+=1){const o=t[r];typeof o=="object"&&o!==null&&Object.keys(o).forEach(c=>{i[c]=o[c]})}return e}static getBrowserAlias(e){return sS[e]}static getBrowserTypeByAlias(e){return mm[e]||""}}const ht=/version\/(\d+(\.?_?\d+)+)/i,oS=[{test:[/googlebot/i],describe(n){const e={name:"Googlebot"},t=te.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/opera/i],describe(n){const e={name:"Opera"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opr\/|opios/i],describe(n){const e={name:"Opera"},t=te.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/SamsungBrowser/i],describe(n){const e={name:"Samsung Internet for Android"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Whale/i],describe(n){const e={name:"NAVER Whale Browser"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MZBrowser/i],describe(n){const e={name:"MZ Browser"},t=te.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/focus/i],describe(n){const e={name:"Focus"},t=te.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/swing/i],describe(n){const e={name:"Swing"},t=te.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/coast/i],describe(n){const e={name:"Opera Coast"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe(n){const e={name:"Opera Touch"},t=te.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/yabrowser/i],describe(n){const e={name:"Yandex Browser"},t=te.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/ucbrowser/i],describe(n){const e={name:"UC Browser"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/Maxthon|mxios/i],describe(n){const e={name:"Maxthon"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/epiphany/i],describe(n){const e={name:"Epiphany"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/puffin/i],describe(n){const e={name:"Puffin"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sleipnir/i],describe(n){const e={name:"Sleipnir"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/k-meleon/i],describe(n){const e={name:"K-Meleon"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/micromessenger/i],describe(n){const e={name:"WeChat"},t=te.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/qqbrowser/i],describe(n){const e={name:/qqbrowserlite/i.test(n)?"QQ Browser Lite":"QQ Browser"},t=te.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/msie|trident/i],describe(n){const e={name:"Internet Explorer"},t=te.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/\sedg\//i],describe(n){const e={name:"Microsoft Edge"},t=te.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/edg([ea]|ios)/i],describe(n){const e={name:"Microsoft Edge"},t=te.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/vivaldi/i],describe(n){const e={name:"Vivaldi"},t=te.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/seamonkey/i],describe(n){const e={name:"SeaMonkey"},t=te.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/sailfish/i],describe(n){const e={name:"Sailfish"},t=te.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,n);return t&&(e.version=t),e}},{test:[/silk/i],describe(n){const e={name:"Amazon Silk"},t=te.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/phantom/i],describe(n){const e={name:"PhantomJS"},t=te.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/slimerjs/i],describe(n){const e={name:"SlimerJS"},t=te.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e={name:"BlackBerry"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(web|hpw)[o0]s/i],describe(n){const e={name:"WebOS Browser"},t=te.getFirstMatch(ht,n)||te.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/bada/i],describe(n){const e={name:"Bada"},t=te.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/tizen/i],describe(n){const e={name:"Tizen"},t=te.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/qupzilla/i],describe(n){const e={name:"QupZilla"},t=te.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/firefox|iceweasel|fxios/i],describe(n){const e={name:"Firefox"},t=te.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/electron/i],describe(n){const e={name:"Electron"},t=te.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/MiuiBrowser/i],describe(n){const e={name:"Miui"},t=te.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/chromium/i],describe(n){const e={name:"Chromium"},t=te.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,n)||te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/chrome|crios|crmo/i],describe(n){const e={name:"Chrome"},t=te.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/GSA/i],describe(n){const e={name:"Google Search"},t=te.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e={name:"Android Browser"},t=te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/playstation 4/i],describe(n){const e={name:"PlayStation 4"},t=te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/safari|applewebkit/i],describe(n){const e={name:"Safari"},t=te.getFirstMatch(ht,n);return t&&(e.version=t),e}},{test:[/.*/i],describe(n){const e=/^(.*)\/(.*) /,t=/^(.*)\/(.*)[ \t]\((.*)/,r=n.search("\\(")!==-1?t:e;return{name:te.getFirstMatch(r,n),version:te.getSecondMatch(r,n)}}}],aS=[{test:[/Roku\/DVP/],describe(n){const e=te.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,n);return{name:tn.Roku,version:e}}},{test:[/windows phone/i],describe(n){const e=te.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,n);return{name:tn.WindowsPhone,version:e}}},{test:[/windows /i],describe(n){const e=te.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,n),t=te.getWindowsVersionName(e);return{name:tn.Windows,version:e,versionName:t}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(n){const e={name:tn.iOS},t=te.getSecondMatch(/(Version\/)(\d[\d.]+)/,n);return t&&(e.version=t),e}},{test:[/macintosh/i],describe(n){const e=te.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,n).replace(/[_\s]/g,"."),t=te.getMacOSVersionName(e),i={name:tn.MacOS,version:e};return t&&(i.versionName=t),i}},{test:[/(ipod|iphone|ipad)/i],describe(n){const e=te.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,n).replace(/[_\s]/g,".");return{name:tn.iOS,version:e}}},{test(n){const e=!n.test(/like android/i),t=n.test(/android/i);return e&&t},describe(n){const e=te.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,n),t=te.getAndroidVersionName(e),i={name:tn.Android,version:e};return t&&(i.versionName=t),i}},{test:[/(web|hpw)[o0]s/i],describe(n){const e=te.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,n),t={name:tn.WebOS};return e&&e.length&&(t.version=e),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe(n){const e=te.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,n)||te.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,n)||te.getFirstMatch(/\bbb(\d+)/i,n);return{name:tn.BlackBerry,version:e}}},{test:[/bada/i],describe(n){const e=te.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,n);return{name:tn.Bada,version:e}}},{test:[/tizen/i],describe(n){const e=te.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,n);return{name:tn.Tizen,version:e}}},{test:[/linux/i],describe(){return{name:tn.Linux}}},{test:[/CrOS/],describe(){return{name:tn.ChromeOS}}},{test:[/PlayStation 4/],describe(n){const e=te.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,n);return{name:tn.PlayStation4,version:e}}}],lS=[{test:[/googlebot/i],describe(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe(n){const e=te.getFirstMatch(/(can-l01)/i,n)&&"Nova",t={type:Lt.mobile,vendor:"Huawei"};return e&&(t.model=e),t}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe(){return{type:Lt.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe(){return{type:Lt.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe(){return{type:Lt.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe(){return{type:Lt.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe(){return{type:Lt.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe(){return{type:Lt.tablet}}},{test(n){const e=n.test(/ipod|iphone/i),t=n.test(/like (ipod|iphone)/i);return e&&!t},describe(n){const e=te.getFirstMatch(/(ipod|iphone)/i,n);return{type:Lt.mobile,vendor:"Apple",model:e}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe(){return{type:Lt.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe(){return{type:Lt.mobile}}},{test(n){return n.getBrowserName(!0)==="blackberry"},describe(){return{type:Lt.mobile,vendor:"BlackBerry"}}},{test(n){return n.getBrowserName(!0)==="bada"},describe(){return{type:Lt.mobile}}},{test(n){return n.getBrowserName()==="windows phone"},describe(){return{type:Lt.mobile,vendor:"Microsoft"}}},{test(n){const e=Number(String(n.getOSVersion()).split(".")[0]);return n.getOSName(!0)==="android"&&e>=3},describe(){return{type:Lt.tablet}}},{test(n){return n.getOSName(!0)==="android"},describe(){return{type:Lt.mobile}}},{test(n){return n.getOSName(!0)==="macos"},describe(){return{type:Lt.desktop,vendor:"Apple"}}},{test(n){return n.getOSName(!0)==="windows"},describe(){return{type:Lt.desktop}}},{test(n){return n.getOSName(!0)==="linux"},describe(){return{type:Lt.desktop}}},{test(n){return n.getOSName(!0)==="playstation 4"},describe(){return{type:Lt.tv}}},{test(n){return n.getOSName(!0)==="roku"},describe(){return{type:Lt.tv}}}],cS=[{test(n){return n.getBrowserName(!0)==="microsoft edge"},describe(n){if(/\sedg\//i.test(n))return{name:Mi.Blink};const t=te.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,n);return{name:Mi.EdgeHTML,version:t}}},{test:[/trident/i],describe(n){const e={name:Mi.Trident},t=te.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){return n.test(/presto/i)},describe(n){const e={name:Mi.Presto},t=te.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test(n){const e=n.test(/gecko/i),t=n.test(/like gecko/i);return e&&!t},describe(n){const e={name:Mi.Gecko},t=te.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}},{test:[/(apple)?webkit\/537\.36/i],describe(){return{name:Mi.Blink}}},{test:[/(apple)?webkit/i],describe(n){const e={name:Mi.WebKit},t=te.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,n);return t&&(e.version=t),e}}];class _f{constructor(e,t=!1){if(e==null||e==="")throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},t!==!0&&this.parse()}getUA(){return this._ua}test(e){return e.test(this._ua)}parseBrowser(){this.parsedResult.browser={};const e=te.find(oS,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.browser=e.describe(this.getUA())),this.parsedResult.browser}getBrowser(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()}getBrowserName(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""}getBrowserVersion(){return this.getBrowser().version}getOS(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()}parseOS(){this.parsedResult.os={};const e=te.find(aS,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.os=e.describe(this.getUA())),this.parsedResult.os}getOSName(e){const{name:t}=this.getOS();return e?String(t).toLowerCase()||"":t||""}getOSVersion(){return this.getOS().version}getPlatform(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()}getPlatformType(e=!1){const{type:t}=this.getPlatform();return e?String(t).toLowerCase()||"":t||""}parsePlatform(){this.parsedResult.platform={};const e=te.find(lS,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.platform=e.describe(this.getUA())),this.parsedResult.platform}getEngine(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()}getEngineName(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""}parseEngine(){this.parsedResult.engine={};const e=te.find(cS,t=>{if(typeof t.test=="function")return t.test(this);if(t.test instanceof Array)return t.test.some(i=>this.test(i));throw new Error("Browser's test function is not valid")});return e&&(this.parsedResult.engine=e.describe(this.getUA())),this.parsedResult.engine}parse(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this}getResult(){return te.assign({},this.parsedResult)}satisfies(e){const t={};let i=0;const r={};let s=0;if(Object.keys(e).forEach(a=>{const c=e[a];typeof c=="string"?(r[a]=c,s+=1):typeof c=="object"&&(t[a]=c,i+=1)}),i>0){const a=Object.keys(t),c=te.find(a,h=>this.isOS(h));if(c){const h=this.satisfies(t[c]);if(h!==void 0)return h}const l=te.find(a,h=>this.isPlatform(h));if(l){const h=this.satisfies(t[l]);if(h!==void 0)return h}}if(s>0){const a=Object.keys(r),c=te.find(a,l=>this.isBrowser(l,!0));if(c!==void 0)return this.compareVersion(r[c])}}isBrowser(e,t=!1){const i=this.getBrowserName().toLowerCase();let r=e.toLowerCase();const s=te.getBrowserTypeByAlias(r);return t&&s&&(r=s.toLowerCase()),r===i}compareVersion(e){let t=[0],i=e,r=!1;const s=this.getBrowserVersion();if(typeof s=="string")return e[0]===">"||e[0]==="<"?(i=e.substr(1),e[1]==="="?(r=!0,i=e.substr(2)):t=[],e[0]===">"?t.push(1):t.push(-1)):e[0]==="="?i=e.substr(1):e[0]==="~"&&(r=!0,i=e.substr(1)),t.indexOf(te.compareVersions(s,i,r))>-1}isOS(e){return this.getOSName(!0)===String(e).toLowerCase()}isPlatform(e){return this.getPlatformType(!0)===String(e).toLowerCase()}isEngine(e){return this.getEngineName(!0)===String(e).toLowerCase()}is(e,t=!1){return this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)}some(e=[]){return e.some(t=>this.is(t))}}/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */class hS{static getParser(e,t=!1){if(typeof e!="string")throw new Error("UserAgent should be a string");return new _f(e,t)}static parse(e){return new _f(e).getResult()}static get BROWSER_MAP(){return mm}static get ENGINE_MAP(){return Mi}static get OS_MAP(){return tn}static get PLATFORMS_MAP(){return Lt}}function uS(n,e,t){n=+n,e=+e,t=(r=arguments.length)<2?(e=n,n=0,1):r<3?1:+t;for(var i=-1,r=Math.max(0,Math.ceil((e-n)/t))|0,s=new Array(r);++i<r;)s[i]=n+i*t;return s}var Ys={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}},Back:{In:function(n){var e=1.70158;return n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}},Bounce:{In:function(n){return 1-Ys.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Ys.Bounce.In(n*2)*.5:Ys.Bounce.Out(n*2-1)*.5+.5}}},Vs;typeof self>"u"&&typeof process<"u"&&process.hrtime?Vs=function(){var n=process.hrtime();return n[0]*1e3+n[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?Vs=self.performance.now.bind(self.performance):Date.now!==void 0?Vs=Date.now:Vs=function(){return new Date().getTime()};var jr=Vs,dS=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=jr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Gs={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Gs.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=Gs.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Gs.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Gs.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*t+s+o)*c+(-3*e+3*t-2*s-o)*a+s*r+e}}},gm=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),_m=new dS,Ia=function(){function n(e,t){t===void 0&&(t=_m),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Ys.Linear.None,this._interpolationFunction=Gs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=gm.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},n.prototype.duration=function(e){return this._duration=e,this},n.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?jr()+parseFloat(e):e:jr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},n.prototype._setupProperties=function(e,t,i,r){for(var s in i){var o=e[s],a=Array.isArray(o),c=a?"array":typeof o,l=!a&&Array.isArray(i[s]);if(!(c==="undefined"||c==="function")){if(l){var h=i[s];if(h.length===0)continue;h=h.map(this._handleRelativeValue.bind(this,o)),i[s]=[o].concat(h)}if((c==="object"||a)&&o&&!l){t[s]=a?[]:{};for(var u in o)t[s][u]=o[u];r[s]=a?[]:{},this._setupProperties(o,t[s],i[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),l?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=jr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=jr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return this._group=e,this},n.prototype.delay=function(e){return this._delayTime=e,this},n.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return this._yoyo=e,this},n.prototype.easing=function(e){return this._easingFunction=e,this},n.prototype.interpolation=function(e){return this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=jr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],c=Array.isArray(e[s]),l=Array.isArray(a),h=!c&&l;h?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}();gm.nextId;var Gn=_m;Gn.getAll.bind(Gn);Gn.removeAll.bind(Gn);Gn.add.bind(Gn);Gn.remove.bind(Gn);var fS=Gn.update.bind(Gn);const SR=Array.prototype.concat,vm=Object.prototype.toString;const Co=Array.isArray||function(e){return vm.call(e)==="[object Array]"};function pS(n){return vm.call(n)==="[object Function]"}function ci(n){return typeof n=="number"?n-n===0:!1}function wm(n,e){return Co(e)?e.map(t=>wm(n,t)):n[e]}function mS(n,e){return wm(n,e)}function Qc(n,e){if(Co(e)){const i=bn(n.length).map(()=>new Array(e.length));return e.forEach(function(r,s){bn(n.length).forEach(function(o){i[o][s]=n[o][r]})}),i}const t=new Array(n.length);for(let i=0;i<n.length;i++)t[i]=[n[i][e]];return t}function gS(n,e){return Qc(n,e).map(t=>t[0])}function _S(n){var e=[],t,i,r,s,o;for(Co(n[0])||(n=[n]),i=n.length,r=n[0].length,o=0;o<r;o++){for(t=new Array(i),s=0;s<i;s++)t[s]=n[s][o];e.push(t)}return e.length===1?e[0]:e}function us(n,e,t){var i,r,s,o,a;for(Co(n[0])||(n=[n]),r=n.length,s=n[0].length,o=t?n:new Array(r),i=0;i<r;i++)for(o[i]||(o[i]=new Array(s)),a=0;a<s;a++)o[i][a]=e(n[i][a],i,a);return o.length===1?o[0]:o}function ym(n,e,t){var i=new Array(n),r,s;for(pS(e)&&(t=e,e=n),r=0;r<n;r++)for(i[r]=new Array(e),s=0;s<e;s++)i[r][s]=t(r,s);return i}function vS(){return 0}function wS(n,e){return n===e?1:0}function xm(n,e){return ci(e)||(e=n),ym(n,e,vS)}function bm(n,e){return ci(e)||(e=n),ym(n,e,wS)}function bn(n,e,t){var i=[],r;if(t=t||1,e===void 0&&(e=n,n=0),n===e||t===0)return[];if(n<e&&t<0)return[];if(n>e&&t>0)return[];if(t>0)for(r=n;r<e;r+=t)i.push(r);else for(r=n;r>e;r+=t)i.push(r);return i}function Ti(n,e){function t(c,l,h,u){var d,f=[],g=c.length;if(l===void 0&&h===void 0&&u===void 0)return Nh(c);if(l=l||0,h=h||c.length,l=l>=0?l:g+l,h=h>=0?h:g+h,u=u||1,l===h||u===0)return[];if(l<h&&u<0)return[];if(l>h&&u>0)return[];if(u>0)for(d=l;d<h;d+=u)f.push(c[d]);else for(d=l;d>h;d+=u)f.push(c[d]);return f}var i,r;if(e=e||{},ci(e.row)){if(ci(e.col))return n[e.row][e.col];var s=mS(n,e.row);return i=e.col||{},t(s,i.start,i.end,i.step)}if(ci(e.col)){var o=gS(n,e.col);return r=e.row||{},t(o,r.start,r.end,r.step)}r=e.row||{},i=e.col||{};var a=t(n,r.start,r.end,r.step);return a.map(function(c){return t(c,i.start,i.end,i.step)})}function da(n,e,t){var i,r;if(ci(e.row)){if(ci(e.col))return n[e.row][e.col]=t;e.col=e.col||{},e.col.start=e.col.start||0,e.col.end=e.col.end||n[0].length,e.col.step=e.col.step||1,i=bn(e.col.start,Math.min(n.length,e.col.end),e.col.step);var s=e.row;return i.forEach(function(a,c){n[s][a]=t[c]}),n}if(ci(e.col)){e.row=e.row||{},e.row.start=e.row.start||0,e.row.end=e.row.end||n.length,e.row.step=e.row.step||1,r=bn(e.row.start,Math.min(n[0].length,e.row.end),e.row.step);var o=e.col;return r.forEach(function(a,c){n[a][o]=t[c]}),n}return t[0].length===void 0&&(t=[t]),e.row.start=e.row.start||0,e.row.end=e.row.end||n.length,e.row.step=e.row.step||1,e.col.start=e.col.start||0,e.col.end=e.col.end||n[0].length,e.col.step=e.col.step||1,r=bn(e.row.start,Math.min(n.length,e.row.end),e.row.step),i=bn(e.col.start,Math.min(n[0].length,e.col.end),e.col.step),r.forEach(function(a,c){i.forEach(function(l,h){n[a][l]=t[c][h]})}),n}function Nh(n){return n.map(function(e){return ci(e)?e:e.map(function(t){return t})})}function oo(n){for(var e=0,t=n.length;--t>=0;)e+=n[t];return e}function yS(n){return oo(n)/n.length}function es(n){var e=0,t=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],i=1.000000000190015,r,s,o;for(o=(s=r=n)+5.5,o-=(r+.5)*Math.log(o);e<6;e++)i+=t[e]/++s;return Math.log(2.5066282746310007*i/r)-o}function vf(n,e,t){var i=1e-30,r=1,s=e+t,o=e+1,a=e-1,c=1,l=1-s*n/o,h,u,d,f;for(Math.abs(l)<i&&(l=i),l=1/l,f=l;r<=100&&(h=2*r,u=r*(t-r)*n/((a+h)*(e+h)),l=1+u*l,Math.abs(l)<i&&(l=i),c=1+u/c,Math.abs(c)<i&&(c=i),l=1/l,f*=l*c,u=-(e+r)*(s+r)*n/((e+h)*(o+h)),l=1+u*l,Math.abs(l)<i&&(l=i),c=1+u/c,Math.abs(c)<i&&(c=i),l=1/l,d=l*c,f*=d,!(Math.abs(d-1)<3e-7));r++);return f}function xS(n,e,t){var i=1e-8,r=e-1,s=t-1,o=0,a,c,l,h,u,d,f,g,m,p,v;if(n<=0)return 0;if(n>=1)return 1;for(e>=1&&t>=1?(l=n<.5?n:1-n,h=Math.sqrt(-2*Math.log(l)),f=(2.30753+h*.27061)/(1+h*(.99229+h*.04481))-h,n<.5&&(f=-f),g=(f*f-3)/6,m=2/(1/(2*e-1)+1/(2*t-1)),p=f*Math.sqrt(g+m)/m-(1/(2*t-1)-1/(2*e-1))*(g+5/6-2/(3*m)),f=e/(e+t*Math.exp(2*p))):(a=Math.log(e/(e+t)),c=Math.log(t/(e+t)),h=Math.exp(e*a)/e,u=Math.exp(t*c)/t,p=h+u,n<h/p?f=Math.pow(e*p*n,1/e):f=1-Math.pow(t*p*(1-n),1/t)),v=-es(e)-es(t)+es(e+t);o<10;o++){if(f===0||f===1)return f;if(d=kh(f,e,t)-n,h=Math.exp(r*Math.log(f)+s*Math.log(1-f)+v),u=d/h,f-=h=u/(1-.5*Math.min(1,u*(r/f-s/(1-f)))),f<=0&&(f=.5*(f+h)),f>=1&&(f=.5*(f+h+1)),Math.abs(h)<i*f&&o>0)break}return f}function kh(n,e,t){var i=n===0||n===1?0:Math.exp(es(e+t)-es(e)-es(t)+e*Math.log(n)+t*Math.log(1-n));return n<0||n>1?!1:n<(e+1)/(e+t+2)?i*vf(n,e,t)/e:1-i*vf(1-n,t,e)/t}function bS(n,e,t){return n>1||n<0?(n>1)*1:kh(n,e,t)}function SS(n,e){var t=e/2;return kh((n+Math.sqrt(n*n+e))/(2*Math.sqrt(n*n+e)),t,t)}function CS(n,e){var t=xS(2*Math.min(n,1-n),.5*e,.5);return t=Math.sqrt(e*(1-t)/t),n>.5?t:-t}function Wi(n){return Co(n)||n.constructor.name==="jStat"}function wf(n,e){return Wi(e)?(Wi(e[0])||(e=[e]),us(n,function(t,i,r){return t+e[i][r]})):us(n,function(t){return t+e})}function MS(n,e){return Wi(e)?(Wi(e[0])||(e=[e]),us(n,function(t,i,r){return t-e[i][r]||0})):us(n,function(t){return t-e})}function yf(n,e){return Wi(e)?(Wi(e[0])||(e=[e]),cr(n,TS(e))):us(n,function(t){return t/e})}function cr(n,e){let t,i;if(n.length===void 0&&e.length===void 0)return n*e;const r=n.length,s=n[0].length,o=xm(r,t=Wi(e)?e[0].length:s);let a=0;if(Wi(e)){for(;a<t;a++)for(let c=0;c<r;c++){i=0;for(let l=0;l<s;l++)i+=n[c][l]*e[l][a];o[c][a]=i}return r===1&&a===1?o[0][0]:o}return us(n,function(c){return c*e})}function ES(n,e){var t=[],i;for(i=0;i<n.length;i++)t.push(n[i].slice());for(i=0;i<t.length;i++)Array.prototype.push.apply(t[i],e[i]);return t}function TS(n){for(var e=n.length,t=n[0].length,i=bm(e,t),r=AS(n,i),s=[],o=0,a;o<e;o++)for(s[o]=[],a=t;a<r[0].length;a++)s[o][a-t]=r[o][a];return s}function AS(n,e){var t=ES(n,e),i=t.length,r=t[0].length,s=0,o,a,c;for(a=0;a<i;a++){var l=a;for(c=a+1;c<i;c++)Math.abs(t[c][a])>Math.abs(t[l][a])&&(l=c);var h=t[a];for(t[a]=t[l],t[l]=h,c=a+1;c<i;c++)for(s=t[c][a]/t[a][a],o=a;o<r;o++)t[c][o]-=t[a][o]*s}for(a=i-1;a>=0;a--){for(s=t[a][a],c=0;c<a;c++)for(o=r-1;o>a-1;o--)t[c][o]-=t[a][o]*t[c][a]/s;for(t[a][a]/=s,o=i;o<r;o++)t[a][o]/=s}return t}function IS(n){var e=n.length,t=n[0].length,i=xm(t,t);n=Nh(n);var r,s,o;for(s=0;s<t;s++){for(i[s][s]=Math.sqrt(oo(bn(e).map(function(a){return n[a][s]*n[a][s]}))),r=0;r<e;r++)n[r][s]=n[r][s]/i[s][s];for(o=s+1;o<t;o++)for(i[s][o]=oo(bn(e).map(function(a){return n[a][s]*n[a][o]})),r=0;r<e;r++)n[r][o]=n[r][o]-n[r][s]*i[s][o]}return[n,i]}function RS(n){n=Nh(n);var e=n.length,t=bm(e);return bn(e-1,-1,-1).forEach(function(i){da(t,{row:i},yf(Ti(t,{row:i}),n[i][i])),da(n,{row:i},yf(Ti(n,{row:i}),n[i][i])),bn(i).forEach(function(r){var s=cr(n[r][i],-1),o=Ti(n,{row:r}),a=cr(Ti(n,{row:i}),s);da(n,{row:r},wf(o,a));var c=Ti(t,{row:r}),l=cr(Ti(t,{row:i}),s);da(t,{row:r},wf(c,l))})}),t}function PS(n,e){var t=!1;e[0].length===void 0&&(e=e.map(function(u){return[u]}),t=!0);var[i,r]=IS(n),s=n[0].length,o=Ti(i,{col:{end:s}}),a=Ti(r,{row:{end:s}}),c=RS(a),l=_S(o);l[0].length===void 0&&(l=[l]);var h=cr(cr(c,l),e);return h.length===void 0&&(h=[[h]]),t?h.map(function(u){return u[0]}):h}function LS(n){var e=n[0].length,t=bn(e).map(function(i){var r=bn(e).filter(function(s){return s!==i});return Sm(Qc(n,i).map(function(s){return s[0]}),Qc(n,r))});return t}function Sm(n,e){var t=n.length,i=e[0].length-1,r=t-i-1,s=PS(e,n),o=cr(e,s.map(function(f){return[f]})).map(function(f){return f[0]}),a=MS(n,o),c=yS(n),l=oo(o.map(function(f){return Math.pow(f-c,2)})),h=oo(n.map(function(f,g){return Math.pow(f-o[g],2)})),u=l+h,d=l/u;return{exog:e,endog:n,nobs:t,df_model:i,df_resid:r,coef:s,predict:o,resid:a,ybar:c,SST:u,SSE:l,SSR:h,R2:d}}function DS(n){var e=LS(n.exog),t=Math.sqrt(n.SSR/n.df_resid),i=e.map(function(c){var l=c.SST,h=c.R2;return t/Math.sqrt(l*(1-h))}),r=n.coef.map(function(c,l){return(c-0)/i[l]}),s=r.map(function(c){var l=SS(c,n.df_resid);return(l>.5?1-l:l)*2}),o=CS(.975,n.df_resid),a=n.coef.map(function(c,l){var h=o*i[l];return[c-h,c+h]});return{se:i,t:r,p:s,sigmaHat:t,interval95:a}}function NS(n){var e=n.R2/n.df_model/((1-n.R2)/n.df_resid),t=function(r,s,o){return bS(r/(o/s+r),s/2,o/2)},i=1-t(e,n.df_model,n.df_resid);return{F_statistic:e,pvalue:i}}function kS(n,e){var t=Sm(n,e),i=DS(t),r=NS(t),s=1-(1-t.R2)*((t.nobs-1)/t.df_resid);return t.t=i,t.f=r,t.adjust_R2=s,t}const OS={ols:kS};function gn(n){throw new Error(`Parameter ${n} is required`)}function FS(n,e,t){return Math.min(Math.max(n,e),t)}function xf(n,e=1){const t=Math.abs(n);return Math.min(Math.pow(t,2),e)}function US(n,e,t=0){let i=e-n;i=i%(2*Math.PI);let r=Math.abs(i);return r>Math.PI&&t===0&&(i=-Math.sign(i)*(Math.PI*2-r)),i===0&&(i=(2*(Math.random()>.5)-1)*Math.PI*2),e=n+i,r=Math.abs(i),[e,r]}function bf(n,e,t,i,r,s,o){let a;return s==="underdamped"?a=e+Math.exp(-t*n)*(-e*Math.cos(r*n)+t*-e*Math.sin(r*n)/r):s==="overdamped"&&(a=e+(-e/2+t*-e/(2*i))*Math.exp(-(t-i)*n)+(-e/2-t*-e/(2*i))*Math.exp(-(t+i)*n)),a=a+o,a}function Sf(n,e,t){let i,r,s,o,a;return i=Math.sqrt(e/n),s=t/(2*n),i>s?(a="underdamped",r=Math.sqrt(Math.pow(i,2)-Math.pow(s,2))):i<s&&(a="overdamped",o=Math.sqrt(Math.pow(s,2)-Math.pow(i,2))),{omega:i,Omega:r||null,gamma:s,Gamma:o||null,regime:a}}class nt{constructor({element:e,hide:t=!0,display:i="flex",parent:r=!1}){bt(this,"dom");bt(this,"hidden");(typeof e=="string"||e instanceof String)&&(e=nt.htmlToElement(e)),this.dom=e,this.display=i,this.hidden=t,this.dom.style.display=t?"none":this.display,r&&r.appendChild(this.dom)}show(){this.dom.style.display=this.display,this.hidden=!1}hide(){this.dom.style.display="none",this.hidden=!0}expand(){var e=this.dom.scrollHeight;this.dom.style.height=e+"px",this.transitioning=!0,this.dom.addEventListener("transitionend",()=>{this.dom.style.height=null,this.transitioning=!1},{once:!0}),this.collapsed=!1}collapse(){var e=this.dom.scrollHeight,t=this.dom.style.transition;this.dom.style.transition="",requestAnimationFrame(()=>{this.dom.style.height=e+"px",this.dom.style.transition=t,requestAnimationFrame(()=>{this.dom.style.height=0,this.transitioning=!0,this.dom.addEventListener("transitionend",()=>{this.transitioning=!1},{once:!0})})}),this.collapsed=!0}static show(e,t="flex"){e instanceof HTMLElement?(e.style.display=t,e.hidden=t==="none"):e.dom instanceof HTMLElement?(e.dom.style.display=t,e.hidden=t==="none"):console.warn("Neither element nor element.dom is not an instance of HTMLElement, so it cannot be shown or hidden.")}static hide(e){nt.show(e,"none")}static htmlToElement(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}static htmlToElements(e){var t=document.createElement("template");return t.innerHTML=e,t.content.childNodes}}class BS extends nt{constructor(e=document.body,t=document.getElementById("blocker")){let i=`<div id="fullscreen-content" class="weblab-component-div">
      <div class="weblab-component-div">
        <h3>This experiment must be run in fullscreen.</h3>
        <button id="fullscreen-button" class="button fullscreen-button">
          Enter fullscreen
        </button>
      </div>
    </div>`;super({element:i,hide:!0,parent:t}),this.engaged=!1,document.getElementById("fullscreen-button").addEventListener("click",()=>{this.requestFullscreen(e)});for(let r of["fullscreenchange","webkitfullscreenchange"])document.addEventListener(r,this.handleFullscreenChange.bind(this))}requestFullscreen(e){var t=e.requestFullscreen||e.webkitRequestFullscreen;t.call(e)}exitFullscreen(){var e=document.exitFullscreen||document.webkitExitFullscreen;e.call(document)}handleFullscreenChange(){const e=document.fullscreenElement||document.webkitFullscreenElement;if(e){console.log(`Entering full-screen mode on ${e.id}.`),this.engaged=!0;const t=new CustomEvent("enterfullscreen",{bubbles:!0,cancelable:!0,detail:{}});this.dom.dispatchEvent(t)}else{console.log("Exiting full-screen mode."),this.engaged=!1;const t=new CustomEvent("exitfullscreen",{bubbles:!0,cancelable:!0,detail:{}});this.dom.dispatchEvent(t)}}}class zS extends nt{constructor(e=document.body,t=document.getElementById("blocker")){let i=`
      <div id="pointerlock-content" class="weblab-component-div">
        <div class="weblab-component-div">
          <h3>This experiment requires your mouse cursor to be hidden.</h3>
          <button id="pointerlock-button" class="button pointerlock-button">
            Hide the cursor
          </button>
        </div
      </div>`;super({element:i,hide:!0,parent:t}),this.engaged=!1,document.getElementById("pointerlock-button").addEventListener("click",()=>{this.requestPointerlock(e)}),document.addEventListener("pointerlockchange",this.handlePointerlockChange.bind(this),!1),document.addEventListener("pointerlockerror",()=>{alert("Error: Pointer lock request failed!")},!1)}requestPointerlock(e){e.requestPointerLock()}handlePointerlockChange(){if(document.pointerLockElement){console.log(`Entering pointer lock on ${document.pointerLockElement.id}.`),this.engaged=!0;const e=new CustomEvent("enterpointerlock",{bubbles:!0,cancelable:!0,detail:{}});this.dom.dispatchEvent(e)}else{console.log("Exiting pointer lock."),this.engaged=!1;const e=new CustomEvent("exitpointerlock",{bubbles:!0,cancelable:!0,detail:{}});this.dom.dispatchEvent(e)}}}class HS extends nt{constructor(){super({element:document.getElementById("blocker"),hide:!0}),this.children={fullscreen:new BS,pointerlock:new zS,chrome:new nt({element:`
          <div id="chrome-required-content" class="weblab-component-div">
            <p>
              This experiment requires a recently updated version of Google Chrome.<br />
              Please copy the full URL and reopen it in Chrome.<br />
              Thank you! We apologize for any inconvenience.
            </p>
          </div>`,hide:!0,parent:this.dom}),desktop:new nt({element:`
          <div id="desktop-required-content" class="weblab-component-div">
            <p>
              This experiment is not supported on mobile devices.<br />
              Please reopen it on a desktop or laptop computer in Google Chrome.<br />
              Thank you! We apologize for any inconvenience.
            </p>
          </div>`,hide:!0,parent:this.dom}),connection:new nt({element:`
          <div id="connection-required-content" class="weblab-component-div">
            <p>
              Trying to connect to database server. Please wait...<br />
              The experiment will resume when you are connected.<br />
              Please complete this experiment with a stable internet connection.
            </p>
          </div>`,hide:!0,parent:this.dom}),attention:new nt({element:`
          <div id="attention-check-content" class="weblab-component-div" style="line-height:1.5em">
            <h3 style="margin-block: 0">
              Warning!<br />
            </h3>
            Our performance-monitoring algorithm thinks you are not trying very hard.<br />
            Please review the instructions and adjust your strategy if necessary.<br />
            All submissions are reviewed for quality before approval.<br />
            Please do your best, otherwise we cannot use your data.<br /><br />
            Press Enter to proceed.
          </div>`,hide:!0,parent:this.dom}),openInVR:new nt({element:`
          <div id="open-in-vr-content" class="weblab-component-div" style="line-height:1.5em">
            <h3 style="margin-block: 0">
              You must use a virtual reality headset to open this study.
            </h3>
            <p style="margin-block: 0; line-height: 2em">
              Put on headset \u2192 Open VR web browser \u2192 Log in to Prolific \u2192 'Open study in new window'<br />
            </p>
            <!--h3 style="margin-block: 0; color:cornflowerblue">Meta Quest users can share link from phone (Android or iOS)</h3>
            <p style="margin-block: 0; color:cornflowerblue; line-height: 2em">
              Log in to Prolific on your phone \u2192 'Open study in new window' \u2192 Share \u2192 Meta Quest app \u2192 Open Now \u2192 Select headset<br />
              The study should automatically open in Meta Quest Browser in your headset.
            </p-->
          </div>`,hide:!0,parent:this.dom})};for(let e of Object.keys(this.children))this[e]=this.children[e]}addChild(e=gn("childElement"),t=gn("childName")){this.children[t]=e,this[t]=this.children[t]}show(e=gn("child")){super.show();for(let[t,i]of Object.entries(this.children))t===e||i===e?i.show():i.hide()}hide(){super.hide();for(let e of Object.values(this.children))e.hide()}}class Cf{constructor(e=gn("blockName"),t=gn("shuffle"),i=gn("repetitions"),r=[]){bt(this,"blockName");bt(this,"shuffle");bt(this,"repetitions");this.blockName=e,this.shuffle=t,this.repetitions=i,this.noConsecutiveRepeats=r}}class WS extends nt{constructor({path:e=gn("path")}){let t;e.includes("pdf")?t=`<div id="consent-content" class="weblab-component-div">
        <iframe id="consent-iframe" src="${e}"></iframe>`:t=`<div id="consent-content" class="weblab-component-div">
        <iframe id="consent-iframe-vr" srcdoc='<img src="${e}" style="width: 100%"></img>'></iframe>`,t+=`<p class="consent-link">
            <a
              id="consent-download-link"
              class="consent-link"
              href="${e}"
              target="_blank"
              download="consent">
              Click here to download the form for your records.
            </a>
          </p>
          <div class="weblab-component-div">
            <input type="checkbox" id="consent-checkbox" required />
            <label for="consent-checkbox">I agree to take part in this study.</label>
          </div>
          <button id="consent-button" class="consent-button" disabled> Continue </button>
          <div class="spacer"></div>
        </div>
        `,super({element:t,hide:!0,parent:document.getElementById("screen")}),this.checkbox=document.getElementById("consent-checkbox"),this.button=document.getElementById("consent-button"),this.checkbox.addEventListener("change",this.handleCheckboxClick.bind(this)),this.button.addEventListener("click",this.dispatchConsent.bind(this))}handleCheckboxClick(e){this.button.disabled=!e.target.checked}dispatchConsent(){const e=new CustomEvent("consent",{bubbles:!0,cancelable:!0,detail:{}});this.dom.dispatchEvent(e),console.log(`dispatched ${e} to ${this.dom.id}`)}}class eh{constructor(e="CSS2D",t={}){bt(this,"object");bt(this,"position");bt(this,"rotation");const i=document.createElement("div");i.innerHTML=e,i.style.display="block",{color:i.style.color="black",opacity:i.style.opacity=1,textAlign:i.style.textAlign="center",background:i.style.background="transparent"}=t,this.object=new K1(i)}}function VS(n,e){return Array.from(e,t=>n[t])}function GS(n,e,t){n=+n,e=+e,t=(r=arguments.length)<2?(e=n,n=0,1):r<3?1:+t;for(var i=-1,r=Math.max(0,Math.ceil((e-n)/t))|0,s=new Array(r);++i<r;)s[i]=n+i*t;return s}const Mf=qS(Math.random);function qS(n){return function(t,i=0,r=t.length){let s=r-(i=+i);for(;s;){const o=n()*s--|0,a=t[s+i];t[s+i]=t[o+i],t[o+i]=a}return t}}class $S extends nt{constructor(){super({element:`
    <div id="progressbar-container" class="weblab-component-div">
      <span
        >Time Elapsed: <label id="minutes">00</label>:<label id="seconds"
          >00</label
        ><br
      /></span>
      <div id="progressbar-outer" class="weblab-component-div">
        <div id="progressbar-inner"></div>
      </div>
    </div>`,hide:!1,parent:document.getElementById("footer")});bt(this,"numerator",0);bt(this,"denominator",1);bt(this,"seconds",0);this.secondsElem=document.getElementById("seconds"),this.minutesElem=document.getElementById("minutes"),setInterval(this.setTime.bind(this),1e3)}update(t,i=this.denominator){this.numerator=t,this.denominator=i,document.getElementById("progressbar-inner").style.width=100*this.numerator/this.denominator+"%"}setTime(){this.seconds++,this.secondsElem.textContent=String(this.seconds%60).padStart(2,"0"),this.minutesElem.textContent=String(parseInt(this.seconds/60)).padStart(2,"0")}}class jS extends nt{constructor(e=gn("platform"),t){e==="P"&&!t&&gn("prolificLink");let i=`
    <div id="goodbye-content" class="weblab-component-div">
      <h4 style="margin-block: 0;">Thank you for your help!</h4>
      <div id="mturk-div" class="weblab-component-div">
        <h4 style="margin-block: 0;">
          Here is your completion code:
        </h4>
        <h3 id="code-text"></h3>
        <button id="copy-code-button">Copy code to clipboard</button>
      </div>
      <div id="prolific-div" class="weblab-component-div">
        <h4 id="return-to-prolific" style="margin-block: 0;">
          <a href="${t}">Click here to return to Prolific</a>
        </h4>
      </div>
    </div>`;super({element:i,hide:!0,parent:document.getElementById("screen")}),this.codeText=document.getElementById("code-text"),e!=="P"&&nt.hide(document.getElementById("prolific-div")),document.getElementById("copy-code-button").addEventListener("click",this.copyCode.bind(this))}updateGoodbye(e=gn("uid")){this.codeText.textContent=e}async copyCode(){try{await navigator.clipboard.writeText(this.codeText.textContent),this.codeText.style.transition="opacity 0.15s",this.codeText.style.opacity=.5,setTimeout(()=>this.codeText.style.opacity=1,150)}catch(e){console.error(e.message)}}}class XS{constructor(){bt(this,"total");bt(this,"text");bt(this,"css2d");bt(this,"currencyFormatter",new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}));bt(this,"panel");this.total=0,this.text=this.currencyFormatter.format(0),this.css2d=new eh(""),this.css2d.object.element.style.fontSize="24pt",this.panelPoints=document.getElementById("points-panel-points"),this.panelPoints&&(this.panelPoints.textContent=this.total,this.panelBonus=document.getElementById("points-panel-bonus"),this.panelBonus.textContent=this.text),this.panelWorker=document.getElementById("points-panel-worker")}add(e,t=!1,i={color:"white",startPosn:new P(0,0,0),endPosn:new P(0,.1,0)}){const r=new Ia(this).to({total:this.total+e},Math.abs(e)*10).onUpdate(()=>{this.total=Math.max(0,Math.round(this.total)),this.panelPoints.textContent=this.total}).onComplete(()=>{this.text=this.currencyFormatter.format(this.total/1e4),this.panelBonus.textContent=this.text});t?(this.css2d.object.position.set(...i.startPosn),this.css2d.object.element.style.opacity=1,this.css2d.object.element.innerHTML=e>=0?`+${e}`:`\u2212${Math.abs(e)}`,this.css2d.object.element.style.color=i.color,new Ia(this.css2d.object).to({position:{y:i.endPosn.y},element:{style:{opacity:0}}},500).delay(700).start().chain(r)):r.delay(700).start()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=function(n,e){if(!n)throw xs(e)},xs=function(n){return new Error("Firebase Database ("+Cm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},YS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mm(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):YS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw Error();const d=s<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),u!==64){const g=l<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Em=function(n){const e=Mm(n);return Oh.encodeByteArray(e,!0)},Ra=function(n){return Em(n).replace(/\./g,"")},Pa=function(n){try{return Oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(n){return Tm(void 0,n)}function Tm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!JS(t)||(n[t]=Tm(n[t],e[t]));return n}function JS(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function ZS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QS(){const n=Qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Im(){return Cm.NODE_ADMIN===!0}function eC(){return typeof indexedDB=="object"}function tC(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function nC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=()=>nC().__FIREBASE_DEFAULTS__,rC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pa(n[1]);return e&&JSON.parse(e)},Uh=()=>{try{return iC()||rC()||sC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rm=n=>{var e,t;return(t=(e=Uh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oC=n=>{const e=Rm(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},aC=()=>{var n;return(n=Uh())===null||n===void 0?void 0:n.config},Pm=n=>{var e;return(e=Uh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Ra(JSON.stringify(t)),Ra(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="FirebaseError";class ji extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=cC,Object.setPrototypeOf(this,ji.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?hC(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ji(r,a,i)}}function hC(n,e){return n.replace(uC,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const uC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n){return JSON.parse(n)}function kt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ao(Pa(s[0])||""),t=ao(Pa(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},dC=function(n){const e=Lm(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fC=function(n){const e=Lm(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ds(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function La(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Da(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Ef(s)&&Ef(o)){if(!Da(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Ef(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),h=1518500249):(l=s^o^a,h=1859775393):u<60?(l=s&o|a&(s|o),h=2400959708):(l=s^o^a,h=3395469782);const d=(r<<5|r>>>27)+l+c+h+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function mC(n,e){const t=new gC(n,e);return t.subscribe.bind(t)}class gC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");_C(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Mc),r.error===void 0&&(r.error=Mc),r.complete===void 0&&(r.complete=Mc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _C(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mc(){}function Bh(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,pe(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},cl=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n){return n&&n._delegate?n._delegate:n}class mr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ll;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xC(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yC(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yC(n){return n===Qi?void 0:n}function xC(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ut||(ut={}));const SC={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},CC=ut.INFO,MC={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},EC=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=MC[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=CC,this._logHandler=EC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}const TC=(n,e)=>e.some(t=>n instanceof t);let Tf,Af;function AC(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IC(){return Af||(Af=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dm=new WeakMap,nh=new WeakMap,Nm=new WeakMap,Ec=new WeakMap,Hh=new WeakMap;function RC(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ki(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Dm.set(t,n)}).catch(()=>{}),Hh.set(e,n),e}function PC(n){if(nh.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});nh.set(n,e)}let ih={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Nm.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ki(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function LC(n){ih=n(ih)}function DC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Tc(this),e,...t);return Nm.set(i,e.sort?e.sort():[e]),ki(i)}:IC().includes(n)?function(...e){return n.apply(Tc(this),e),ki(Dm.get(this))}:function(...e){return ki(n.apply(Tc(this),e))}}function NC(n){return typeof n=="function"?DC(n):(n instanceof IDBTransaction&&PC(n),TC(n,AC())?new Proxy(n,ih):n)}function ki(n){if(n instanceof IDBRequest)return RC(n);if(Ec.has(n))return Ec.get(n);const e=NC(n);return e!==n&&(Ec.set(n,e),Hh.set(e,n)),e}const Tc=n=>Hh.get(n);function kC(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=ki(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ki(o.result),c.oldVersion,c.newVersion,ki(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const OC=["get","getKey","getAll","getAllKeys","count"],FC=["put","add","delete","clear"],Ac=new Map;function If(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=FC.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||OC.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Ac.set(e,s),s}LC(n=>({...n,get:(e,t,i)=>If(e,t)||n.get(e,t,i),has:(e,t)=>!!If(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(BC(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function BC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rh="@firebase/app",Rf="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new zh("@firebase/app"),zC="@firebase/app-compat",HC="@firebase/analytics-compat",WC="@firebase/analytics",VC="@firebase/app-check-compat",GC="@firebase/app-check",qC="@firebase/auth",$C="@firebase/auth-compat",jC="@firebase/database",XC="@firebase/database-compat",YC="@firebase/functions",KC="@firebase/functions-compat",JC="@firebase/installations",ZC="@firebase/installations-compat",QC="@firebase/messaging",eM="@firebase/messaging-compat",tM="@firebase/performance",nM="@firebase/performance-compat",iM="@firebase/remote-config",rM="@firebase/remote-config-compat",sM="@firebase/storage",oM="@firebase/storage-compat",aM="@firebase/firestore",lM="@firebase/firestore-compat",cM="firebase",hM="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="[DEFAULT]",uM={[rh]:"fire-core",[zC]:"fire-core-compat",[WC]:"fire-analytics",[HC]:"fire-analytics-compat",[GC]:"fire-app-check",[VC]:"fire-app-check-compat",[qC]:"fire-auth",[$C]:"fire-auth-compat",[jC]:"fire-rtdb",[XC]:"fire-rtdb-compat",[YC]:"fire-fn",[KC]:"fire-fn-compat",[JC]:"fire-iid",[ZC]:"fire-iid-compat",[QC]:"fire-fcm",[eM]:"fire-fcm-compat",[tM]:"fire-perf",[nM]:"fire-perf-compat",[iM]:"fire-rc",[rM]:"fire-rc-compat",[sM]:"fire-gcs",[oM]:"fire-gcs-compat",[aM]:"fire-fst",[lM]:"fire-fst-compat","fire-js":"fire-js",[cM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map,oh=new Map;function dM(n,e){try{n.container.addComponent(e)}catch(t){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fs(n){const e=n.name;if(oh.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;oh.set(e,n);for(const t of Na.values())dM(t,n);return!0}function Wh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Oi=new Mo("app","Firebase",fM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=hM;function km(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:sh,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Oi.create("bad-app-name",{appName:String(r)});if(t||(t=aC()),!t)throw Oi.create("no-options");const s=Na.get(r);if(s){if(Da(t,s.options)&&Da(i,s.config))return s;throw Oi.create("duplicate-app",{appName:r})}const o=new bC(r);for(const c of oh.values())o.addComponent(c);const a=new pM(t,i,o);return Na.set(r,a),a}function Om(n=sh){const e=Na.get(n);if(!e&&n===sh)return km();if(!e)throw Oi.create("no-app",{appName:n});return e}function Fi(n,e,t){var i;let r=(i=uM[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}fs(new mr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM="firebase-heartbeat-database",gM=1,lo="firebase-heartbeat-store";let Ic=null;function Fm(){return Ic||(Ic=kC(mM,gM,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(lo)}}}).catch(n=>{throw Oi.create("idb-open",{originalErrorMessage:n.message})})),Ic}async function _M(n){var e;try{return(await Fm()).transaction(lo).objectStore(lo).get(Um(n))}catch(t){if(t instanceof ji)gr.warn(t.message);else{const i=Oi.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});gr.warn(i.message)}}}async function Pf(n,e){var t;try{const r=(await Fm()).transaction(lo,"readwrite");return await r.objectStore(lo).put(e,Um(n)),r.done}catch(i){if(i instanceof ji)gr.warn(i.message);else{const r=Oi.create("idb-set",{originalErrorMessage:(t=i)===null||t===void 0?void 0:t.message});gr.warn(r.message)}}}function Um(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=1024,wM=30*24*60*60*1e3;class yM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bM(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=wM}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lf(),{heartbeatsToSend:t,unsentEntries:i}=xM(this._heartbeatsCache.heartbeats),r=Ra(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Lf(){return new Date().toISOString().substring(0,10)}function xM(n,e=vM){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Df(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Df(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eC()?tC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _M(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Df(n){return Ra(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(n){fs(new mr("platform-logger",e=>new UC(e),"PRIVATE")),fs(new mr("heartbeat",e=>new yM(e),"PRIVATE")),Fi(rh,Rf,n),Fi(rh,Rf,"esm2017"),Fi("fire-js","")}SM("");var CM="firebase",MM="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fi(CM,MM,"app");function Vh(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Bm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const EM=Bm,zm=new Mo("auth","Firebase",Bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new zh("@firebase/auth");function ya(n,...e){Nf.logLevel<=ut.ERROR&&Nf.error(`Auth (${Eo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,...e){throw Gh(n,...e)}function Wn(n,...e){return Gh(n,...e)}function TM(n,e,t){const i=Object.assign(Object.assign({},EM()),{[e]:t});return new Mo("auth","Firebase",i).create(e,{appName:n.name})}function Gh(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return zm.create(n,...e)}function Ve(n,e,...t){if(!n)throw Gh(e,...t)}function si(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ya(e),new Error(e)}function fi(n,e){n||si(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new Map;function oi(n){fi(n instanceof Function,"Expected a class definition");let e=kf.get(n);return e?(fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kf.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(n,e){const t=Wh(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Da(s,e!=null?e:{}))return r;di(r,"already-initialized")}return t.initialize({options:e})}function IM(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(oi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function RM(){return Of()==="http:"||Of()==="https:"}function Of(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RM()||ZS()||"connection"in navigator)?navigator.onLine:!0}function LM(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.shortDelay=e,this.longDelay=t,fi(t>e,"Short delay should be less than long delay!"),this.isMobile=Fh()||Am()}get(){return PM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n,e){fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NM=new To(3e4,6e4);function Wm(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hl(n,e,t,i,r={}){return Vm(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=bs(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Hm.fetch()(qm(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vm(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},DM),e);try{const r=new kM(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fa(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw fa(n,"user-disabled",o);const h=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw TM(n,h,l);di(n,h)}}catch(r){if(r instanceof ji)throw r;di(n,"network-request-failed")}}async function Gm(n,e,t,i,r={}){const s=await hl(n,e,t,i,r);return"mfaPendingCredential"in s&&di(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qm(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?qh(n.config,r):`${n.config.apiScheme}://${r}`}class kM{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Wn(this.auth,"network-request-failed")),NM.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fa(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Wn(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OM(n,e){return hl(n,"POST","/v1/accounts:delete",e)}async function FM(n,e){return hl(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UM(n,e=!1){const t=_n(n),i=await t.getIdToken(e),r=$h(i);Ve(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ks(Rc(r.auth_time)),issuedAtTime:Ks(Rc(r.iat)),expirationTime:Ks(Rc(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rc(n){return Number(n)*1e3}function $h(n){var e;const[t,i,r]=n.split(".");if(t===void 0||i===void 0||r===void 0)return ya("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pa(i);return s?JSON.parse(s):(ya("Failed to decode base64 JWT payload"),null)}catch(s){return ya("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function BM(n){const e=$h(n);return Ve(e,"internal-error"),Ve(typeof e.exp<"u","internal-error"),Ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ji&&zM(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function zM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(n){var e;const t=n.auth,i=await n.getIdToken(),r=await co(n,FM(t,{idToken:i}));Ve(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GM(s.providerUserInfo):[],a=VM(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $m(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function WM(n){const e=_n(n);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VM(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function GM(n){return n.map(e=>{var{providerId:t}=e,i=Vh(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qM(n,e){const t=await Vm(n,{},async()=>{const i=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=qm(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hm.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ve(e.idToken,"internal-error"),Ve(typeof e.idToken<"u","internal-error"),Ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BM(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await qM(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new ho;return i&&(Ve(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Ve(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Ve(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return si("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e){Ve(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await co(this,this.stsTokenManager.getToken(this.auth,e));return Ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return UM(this,e)}reload(){return WM(this)}_assign(e){this!==e&&(Ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ka(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await co(this,OM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,h;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,f=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,p=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=t.createdAt)!==null&&l!==void 0?l:void 0,b=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:x,isAnonymous:T,providerData:R,stsTokenManager:F}=t;Ve(M&&F,e,"internal-error");const y=ho.fromJSON(this.name,F);Ve(typeof M=="string",e,"internal-error"),Si(u,e.name),Si(d,e.name),Ve(typeof x=="boolean",e,"internal-error"),Ve(typeof T=="boolean",e,"internal-error"),Si(f,e.name),Si(g,e.name),Si(m,e.name),Si(p,e.name),Si(v,e.name),Si(b,e.name);const I=new hr({uid:M,auth:e,email:d,emailVerified:x,displayName:u,isAnonymous:T,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:y,createdAt:v,lastLoginAt:b});return R&&Array.isArray(R)&&(I.providerData=R.map(k=>Object.assign({},k))),p&&(I._redirectEventId=p),I}static async _fromIdTokenResponse(e,t,i=!1){const r=new ho;r.updateFromServerResponse(t);const s=new hr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ka(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jm.type="NONE";const Ff=jm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n,e,t){return`firebase:${n}:${e}:${t}`}class ts{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=xa(this.userKey,r.apiKey,s),this.fullPersistenceKey=xa("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ts(oi(Ff),e,i);const r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||oi(Ff);const o=xa(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=await l._get(o);if(h){const u=hr._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ts(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ts(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zm(e))return"Blackberry";if(Qm(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||Ym(e))&&!e.includes("edge/"))return"Chrome";if(Jm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xm(n=Qt()){return/firefox\//i.test(n)}function jh(n=Qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ym(n=Qt()){return/crios\//i.test(n)}function Km(n=Qt()){return/iemobile/i.test(n)}function Jm(n=Qt()){return/android/i.test(n)}function Zm(n=Qt()){return/blackberry/i.test(n)}function Qm(n=Qt()){return/webos/i.test(n)}function ul(n=Qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function $M(n=Qt()){var e;return ul(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jM(){return QS()&&document.documentMode===10}function eg(n=Qt()){return ul(n)||Jm(n)||Qm(n)||Zm(n)||/windows phone/i.test(n)||Km(n)}function XM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n,e=[]){let t;switch(n){case"Browser":t=Uf(Qt());break;case"Worker":t=`${Uf(Qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const i=[];try{for(const r of this.queue)await r(e),r.onAbort&&i.push(r.onAbort)}catch(r){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=r)===null||t===void 0?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bf(this),this.idTokenSubscription=new Bf(this),this.beforeStateQueue=new YM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oi(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ka(e)}catch(i){if(((t=i)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_n(e):null;return t&&Ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oi(e)||this._popupRedirectResolver;Ve(t,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[oi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ve(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function dl(n){return _n(n)}class Bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mC(t=>this.observer=t)}get next(){return Ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ng(n,e,t){const i=dl(n);Ve(i._canInitEmulator,i,"emulator-config-failed"),Ve(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),s=ig(e),{host:o,port:a}=JM(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ZM()}function ig(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function JM(n){const e=ig(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:zf(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:zf(o)}}}function zf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ZM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return si("not implemented")}_getIdTokenResponse(e){return si("not implemented")}_linkToIdToken(e,t){return si("not implemented")}_getReauthenticationResolver(e){return si("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n,e){return Gm(n,"POST","/v1/accounts:signInWithIdp",Wm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM="http://localhost";class _r extends rg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):di("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Vh(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new _r(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ns(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ns(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ns(e,t)}buildRequest(){const e={requestUri:QM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends sg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ao{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ai.credential(e.oauthAccessToken)}catch{return null}}}Ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _r._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com";Ii.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ao{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Ao{constructor(){super("twitter.com")}static credential(e,t){return _r._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pi.credential(t,i)}catch{return null}}}Pi.TWITTER_SIGN_IN_METHOD="twitter.com";Pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(n,e){return Gm(n,"POST","/v1/accounts:signUp",Wm(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await hr._fromIdTokenResponse(e,i,r),o=Hf(i);return new Vi({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Hf(i);return new Vi({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Hf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tE(n){var e;const t=dl(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Vi({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await eE(t,{returnSecureToken:!0}),r=await Vi._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends ji{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Oa(e,t,i,r)}}function og(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(n,s,e,i):s})}async function nE(n,e,t=!1){const i=await co(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vi._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,e,t=!1){var i;const{auth:r}=n,s="reauthenticate";try{const o=await co(n,og(r,s,e,n),t);Ve(o.idToken,r,"internal-error");const a=$h(o.idToken);Ve(a,r,"internal-error");const{sub:c}=a;return Ve(n.uid===c,r,"user-mismatch"),Vi._forOperation(n,s,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&di(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,e,t=!1){const i="signIn",r=await og(n,i,e),s=await Vi._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function sE(n,e,t,i){return _n(n).onIdTokenChanged(e,t,i)}function oE(n,e,t){return _n(n).beforeAuthStateChanged(e,t)}function aE(n){return _n(n).signOut()}const Fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){const n=Qt();return jh(n)||ul(n)}const cE=1e3,hE=10;class lg extends ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lE()&&XM(),this.fallbackToPolling=eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);jM()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hE):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lg.type="LOCAL";const uE=lg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cg.type="SESSION";const hg=cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new fl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async l=>l(t.origin,s)),c=await dE(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Xh("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function pE(n){Vn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function mE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _E(){return ug()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firebaseLocalStorageDb",vE=1,Ua="firebaseLocalStorage",fg="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pl(n,e){return n.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function wE(){const n=indexedDB.deleteDatabase(dg);return new Io(n).toPromise()}function lh(){const n=indexedDB.open(dg,vE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ua,{keyPath:fg})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ua)?e(i):(i.close(),await wE(),e(await lh()))})})}async function Wf(n,e,t){const i=pl(n,!0).put({[fg]:e,value:t});return new Io(i).toPromise()}async function yE(n,e){const t=pl(n,!1).get(e),i=await new Io(t).toPromise();return i===void 0?null:i.value}function Vf(n,e){const t=pl(n,!0).delete(e);return new Io(t).toPromise()}const xE=800,bE=3;class pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>bE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ug()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(_E()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lh();return await Wf(e,Fa,"1"),await Vf(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wf(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>yE(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=pl(r,!1).getAll();return new Io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pg.type="LOCAL";const SE=pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ME(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Wn("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",CE().appendChild(i)})}function EE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n,e){return e?oi(e):(Ve(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends rg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ns(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AE(n){return rE(n.auth,new Yh(n),n.bypassAuthState)}function IE(n){const{auth:e,user:t}=n;return Ve(t,e,"internal-error"),iE(t,new Yh(n),n.bypassAuthState)}async function RE(n){const{auth:e,user:t}=n;return Ve(t,e,"internal-error"),nE(t,new Yh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return IE;default:di(this.auth,"internal-error")}}resolve(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new To(2e3,1e4);class Yr extends mg{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ve(e,this.auth,"internal-error"),e}async onExecution(){fi(this.filter.length===1,"Popup operations only handle one event");const e=Xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PE.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="pendingRedirect",ba=new Map;class DE extends mg{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const i=await NE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NE(n,e){const t=FE(e),i=OE(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function kE(n,e){ba.set(n._key(),e)}function OE(n){return oi(n._redirectPersistence)}function FE(n){return xa(LE,n.config.apiKey,n.name)}async function UE(n,e,t=!1){const i=dl(n),r=TE(i,e),o=await new DE(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=10*60*1e3;class zE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!gg(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Wn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gf(e))}saveEventToCache(e){this.cachedEventUids.add(Gf(e)),this.lastProcessedEventTime=Date.now()}}function Gf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function gg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(n,e={}){return hl(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GE=/^https?/;async function qE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WE(n);for(const t of e)try{if($E(t))return}catch{}di(n,"unauthorized-domain")}function $E(n){const e=ah(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!GE.test(t))return!1;if(VE.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=new To(3e4,6e4);function qf(){const n=Vn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XE(n){return new Promise((e,t)=>{var i,r,s;function o(){qf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qf(),t(Wn(n,"network-request-failed"))},timeout:jE.get()})}if(!((r=(i=Vn().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Vn().gapi)===null||s===void 0)&&s.load)o();else{const a=EE("iframefcb");return Vn()[a]=()=>{gapi.load?o():t(Wn(n,"network-request-failed"))},ME(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function YE(n){return Sa=Sa||XE(n),Sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=new To(5e3,15e3),JE="__/auth/iframe",ZE="emulator/auth/iframe",QE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tT(n){const e=n.config;Ve(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?qh(e,ZE):`https://${n.config.authDomain}/${JE}`,i={apiKey:e.apiKey,appName:n.name,v:Eo},r=eT.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${bs(i).slice(1)}`}async function nT(n){const e=await YE(n),t=Vn().gapi;return Ve(t,n,"internal-error"),e.open({where:document.body,url:tT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QE,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Wn(n,"network-request-failed"),a=Vn().setTimeout(()=>{s(o)},KE.get());function c(){Vn().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rT=500,sT=600,oT="_blank",aT="http://localhost";class $f{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lT(n,e,t,i=rT,r=sT){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},iT),{width:i.toString(),height:r.toString(),top:s,left:o}),l=Qt().toLowerCase();t&&(a=Ym(l)?oT:t),Xm(l)&&(e=e||aT,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if($M(l)&&a!=="_self")return cT(e||"",a),new $f(null);const u=window.open(e||"",a,h);Ve(u,n,"popup-blocked");try{u.focus()}catch{}return new $f(u)}function cT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="__/auth/handler",uT="emulator/auth/handler";function jf(n,e,t,i,r,s){Ve(n.config.authDomain,n,"auth-domain-config-required"),Ve(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Eo,eventId:r};if(e instanceof sg){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",th(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ao){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${dT(n)}?${bs(a).slice(1)}`}function dT({config:n}){return n.emulator?qh(n,uT):`https://${n.authDomain}/${hT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class fT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hg,this._completeRedirectFn=UE,this._overrideRedirectResult=kE}async _openPopup(e,t,i,r){var s;fi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=jf(e,t,i,ah(),r);return lT(e,o,Xh())}async _openRedirect(e,t,i,r){return await this._originValidation(e),pE(jf(e,t,i,ah(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(fi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nT(e),i=new zE(e);return t.register("authEvent",r=>(Ve(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pc,{type:Pc},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Pc];o!==void 0&&t(!!o),di(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eg()||jh()||ul()}}const pT=fT;var Xf="@firebase/auth",Yf="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _T(n){fs(new mr("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{Ve(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Ve(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tg(n)},h=new KM(a,c,l);return IM(h,t),h})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),fs(new mr("auth-internal",e=>{const t=dl(e.getProvider("auth").getImmediate());return(i=>new mT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fi(Xf,Yf,gT(n)),Fi(Xf,Yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=5*60,wT=Pm("authIdTokenMaxAge")||vT;let Kf=null;const yT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wT)return;const r=t==null?void 0:t.token;Kf!==r&&(Kf=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xT(n=Om()){const e=Wh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=AM(n,{popupRedirectResolver:pT,persistence:[SE,uE,hg]}),i=Pm("authTokenSyncURL");if(i){const s=yT(i);oE(t,s,()=>s(t.currentUser)),sE(t,o=>s(o))}const r=Rm("auth");return r&&ng(t,`http://${r}`),t}_T("Browser");const Jf="@firebase/database",Zf="0.13.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _g="";function bT(n){_g=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),kt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ao(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return mi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ST(e)}}catch{}return new CT},rr=vg("localStorage"),ch=vg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new zh("@firebase/database"),MT=function(){let n=1;return function(){return n++}}(),wg=function(n){const e=vC(n),t=new pC;t.update(e);const i=t.digest();return Oh.encodeByteArray(i)},Ro=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ro.apply(null,i):typeof i=="object"?e+=kt(i):e+=i,e+=" "}return e};let ur=null,Qf=!0;const ET=function(n,e){pe(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(is.logLevel=ut.VERBOSE,ur=is.log.bind(is),e&&ch.set("logging_enabled",!0)):typeof n=="function"?ur=n:(ur=null,ch.remove("logging_enabled"))},Jt=function(...n){if(Qf===!0&&(Qf=!1,ur===null&&ch.get("logging_enabled")===!0&&ET(!0)),ur){const e=Ro.apply(null,n);ur(e)}},Po=function(n){return function(...e){Jt(n,...e)}},hh=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ro(...n);is.error(e)},pi=function(...n){const e=`FIREBASE FATAL ERROR: ${Ro(...n)}`;throw is.error(e),new Error(e)},cn=function(...n){const e="FIREBASE WARNING: "+Ro(...n);is.warn(e)},TT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yg=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},AT=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ps="[MIN_NAME]",vr="[MAX_NAME]",Ss=function(n,e){if(n===e)return 0;if(n===ps||e===vr)return-1;if(e===ps||n===vr)return 1;{const t=ep(n),i=ep(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},IT=function(n,e){return n===e?0:n<e?-1:1},ks=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+kt(e))},Kh=function(n){if(typeof n!="object"||n===null)return kt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=kt(e[i]),t+=":",t+=Kh(n[e[i]]);return t+="}",t},xg=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const bg=function(n){pe(!yg(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},RT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LT(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const DT=new RegExp("^-?(0*)\\d{1,10}$"),NT=-2147483648,kT=2147483647,ep=function(n){if(DT.test(n)){const e=Number(n);if(e>=NT&&e<=kT)return e}return null},Cs=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw cn("Exception was thrown by user callback.",t),e},Math.floor(0))}},OT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){cn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',cn(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="5",Sg="v",Cg="s",Mg="r",Eg="f",Tg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ag="ls",Ig="p",uh="ac",Rg="websocket",Pg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,t,i,r,s=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function BT(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Dg(n,e,t){pe(typeof e=="string","typeof type must == string"),pe(typeof t=="object","typeof params must == object");let i;if(e===Rg)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Pg)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BT(n)&&(t.ns=n.namespace);const r=[];return hn(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.counters_={}}incrementCounter(e,t=1){mi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return KS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={},Dc={};function Zh(n){const e=n.toString();return Lc[e]||(Lc[e]=new zT),Lc[e]}function HT(n,e){const t=n.toString();return Dc[t]||(Dc[t]=e()),Dc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Cs(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="start",VT="close",GT="pLPCommand",qT="pRTLPCB",Ng="id",kg="pw",Og="ser",$T="cb",jT="seg",XT="ts",YT="d",KT="dframe",Fg=1870,Ug=30,JT=Fg-Ug,ZT=25e3,QT=3e4;class Kr{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Po(e),this.stats_=Zh(t),this.urlFn=c=>(this.appCheckToken&&(c[uh]=this.appCheckToken),Dg(t,Pg,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new WT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(QT)),AT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qh((...s)=>{const[o,a,c,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===tp)this.id=a,this.password=c;else if(o===VT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[tp]="t",i[Og]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[$T]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Sg]=Jh,this.transportSessionId&&(i[Cg]=this.transportSessionId),this.lastSessionId&&(i[Ag]=this.lastSessionId),this.applicationId&&(i[Ig]=this.applicationId),this.appCheckToken&&(i[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&Tg.test(location.hostname)&&(i[Mg]=Eg);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kr.forceAllow_=!0}static forceDisallow(){Kr.forceDisallow_=!0}static isAvailable(){return Kr.forceAllow_?!0:!Kr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!RT()&&!PT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Em(t),r=xg(i,JT);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[KT]="t",i[Ng]=e,i[kg]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=kt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Qh{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MT(),window[GT+this.uniqueCallbackIdentifier]=e,window[qT+this.uniqueCallbackIdentifier]=t,this.myIFrame=Qh.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Jt("frame writing exception"),a.stack&&Jt(a.stack),Jt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ng]=this.myID,e[kg]=this.myPW,e[Og]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ug+i.length<=Fg;){const o=this.pendingSegs.shift();i=i+"&"+jT+r+"="+o.seg+"&"+XT+r+"="+o.ts+"&"+YT+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(ZT)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Jt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=16384,tA=45e3;let Ba=null;typeof MozWebSocket<"u"?Ba=MozWebSocket:typeof WebSocket<"u"&&(Ba=WebSocket);class Pn{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Po(this.connId),this.stats_=Zh(t),this.connURL=Pn.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[Sg]=Jh,typeof location<"u"&&location.hostname&&Tg.test(location.hostname)&&(o[Mg]=Eg),t&&(o[Cg]=t),i&&(o[Ag]=i),r&&(o[uh]=r),s&&(o[Ig]=s),Dg(e,Rg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rr.set("previous_websocket_failure",!0);try{let i;Im(),this.mySock=new Ba(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ba!==null&&!Pn.forceDisallow_}static previouslyFailed(){return rr.isInMemoryStorage||rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ao(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(pe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=xg(t,eA);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kr,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Pn&&Pn.isAvailable();let i=t&&!Pn.previouslyFailed();if(e.webSocketOnly&&(t||cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Pn];else{const r=this.transports_=[];for(const s of uo.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}uo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=6e4,iA=5e3,rA=10*1024,sA=100*1024,Nc="t",np="d",oA="s",ip="r",aA="e",rp="o",sp="a",op="n",ap="p",lA="h";class cA{constructor(e,t,i,r,s,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Po("c:"+this.id+":"),this.transportManager_=new uo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nc in e){const t=e[Nc];t===sp?this.upgradeIfSecondaryHealthy_():t===ip?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ks("t",e),i=ks("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:op,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ks("t",e),i=ks("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ks(Nc,e);if(np in e){const i=e[np];if(t===lA)this.onHandshake_(i);else if(t===op){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===oA?this.onConnectionShutdown_(i):t===ip?this.onReset_(i):t===aA?hh("Server Error: "+i):t===rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jh!==i&&cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ap,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.allowedEvents_=e,this.listeners_={},pe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){pe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends zg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new za}getInitialEvent(e){return pe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=32,cp=768;class dt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function it(){return new dt("")}function $e(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Gi(n){return n.pieces_.length-n.pieceNum_}function _t(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new dt(n.pieces_,e)}function Hg(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hA(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Wg(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Vg(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new dt(e,0)}function Ot(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof dt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new dt(t,0)}function Je(n){return n.pieceNum_>=n.pieces_.length}function nn(n,e){const t=$e(n),i=$e(e);if(t===null)return e;if(t===i)return nn(_t(n),_t(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eu(n,e){if(Gi(n)!==Gi(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Dn(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Gi(n)>Gi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class uA{constructor(e,t){this.errorPrefix_=t,this.parts_=Wg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=cl(this.parts_[i]);Gg(this)}}function dA(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=cl(e),Gg(n)}function fA(n){const e=n.parts_.pop();n.byteLength_-=cl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Gg(n){if(n.byteLength_>cp)throw new Error(n.errorPrefix_+"has a key path longer than "+cp+" bytes ("+n.byteLength_+").");if(n.parts_.length>lp)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lp+") or object contains a cycle "+er(n))}function er(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends zg{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new tu}getInitialEvent(e){return pe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=1e3,pA=60*5*1e3,hp=30*1e3,mA=1.3,gA=3e4,_A="server_kill",up=3;class hi extends Bg{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=hi.nextPersistentConnectionId_++,this.log_=Po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Os,this.maxReconnectDelay_=pA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Im())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&za.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(kt(s)),pe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new ll,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),pe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),pe(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;hi.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&mi(e,"w")){const i=ds(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();cn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dC(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),pe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+kt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hh("Unrecognized action received from server: "+kt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){pe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gA&&(this.reconnectDelay_=Os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+hi.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){pe(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new cA(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{cn(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(_A)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&cn(u),c())}}}interrupt(e){Jt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Jt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],th(this.interruptReasons_)&&(this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>Kh(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new dt(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Jt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=up&&(this.reconnectDelay_=hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Jt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=up&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+_g.replace(/\./g,"-")]=1,Fh()?e["framework.cordova"]=1:Am()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=za.getInstance().currentlyOnline();return th(this.interruptReasons_)&&e}}hi.nextPersistentConnectionId_=0;hi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new je(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new je(ps,e),r=new je(ps,t);return this.compare(i,r)!==0}minPost(){return je.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;class qg extends ml{static get __EMPTY_NODE(){return pa}static set __EMPTY_NODE(e){pa=e}compare(e,t){return Ss(e.name,t.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return je.MIN}maxPost(){return new je(vr,pa)}makePost(e,t){return pe(typeof e=="string","KeyIndex indexValue must always be a string."),new je(e,pa)}toString(){return".key"}}const ss=new qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i!=null?i:Ht.RED,this.left=r!=null?r:ln.EMPTY_NODE,this.right=s!=null?s:ln.EMPTY_NODE}copy(e,t,i,r,s){return new Ht(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ln.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ln.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0;Ht.BLACK=!1;class vA{copy(e,t,i,r,s){return this}insert(e,t,i){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ln{constructor(e,t=ln.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ln(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ln(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ma(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ma(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ma(this.root_,null,this.comparator_,!0,e)}}ln.EMPTY_NODE=new vA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(n,e){return Ss(n.name,e.name)}function nu(n,e){return Ss(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh;function yA(n){dh=n}const $g=function(n){return typeof n=="number"?"number:"+bg(n):"string:"+n},jg=function(n){if(n.isLeafNode()){const e=n.val();pe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mi(e,".sv"),"Priority must be a string or number.")}else pe(n===dh||n.isEmpty(),"priority of unexpected type.");pe(n===dh||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp;class zt{constructor(e,t=zt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,pe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jg(this.priorityNode_)}static set __childrenNodeConstructor(e){dp=e}static get __childrenNodeConstructor(){return dp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Je(e)?this:$e(e)===".priority"?this.priorityNode_:zt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:zt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=$e(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(pe(i!==".priority"||Gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,zt.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$g(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=bg(this.value_):e+=this.value_,this.lazyHash_=wg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zt.__childrenNodeConstructor?-1:(pe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=zt.VALUE_TYPE_ORDER.indexOf(t),s=zt.VALUE_TYPE_ORDER.indexOf(i);return pe(r>=0,"Unknown leaf type: "+t),pe(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}zt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xg,Yg;function xA(n){Xg=n}function bA(n){Yg=n}class SA extends ml{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?Ss(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return je.MIN}maxPost(){return new je(vr,new zt("[PRIORITY-POST]",Yg))}makePost(e,t){const i=Xg(e);return new je(t,new zt("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new SA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=Math.log(2);class MA{constructor(e){const t=s=>parseInt(Math.log(s)/CA,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ha=function(n,e,t,i){n.sort(e);const r=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=n[c],d=t?t(u):u,new Ht(d,u.node,Ht.BLACK,null,null);{const f=parseInt(h/2,10)+c,g=r(c,f),m=r(f+1,l);return u=n[f],d=t?t(u):u,new Ht(d,u.node,Ht.BLACK,g,m)}},s=function(c){let l=null,h=null,u=n.length;const d=function(g,m){const p=u-g,v=u;u-=g;const b=r(p+1,v),M=n[p],x=t?t(M):M;f(new Ht(x,M.node,m,null,b))},f=function(g){l?(l.left=g,l=g):(h=g,l=g)};for(let g=0;g<c.count;++g){const m=c.nextBitIsOne(),p=Math.pow(2,c.count-(g+1));m?d(p,Ht.BLACK):(d(p,Ht.BLACK),d(p,Ht.RED))}return h},o=new MA(n.length),a=s(o);return new ln(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;const Gr={};class ai{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return pe(Gr&&At,"ChildrenNode.ts has not been loaded"),kc=kc||new ai({".priority":Gr},{".priority":At}),kc}get(e){const t=ds(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ln?t:null}hasIndex(e){return mi(this.indexSet_,e.toString())}addIndex(e,t){pe(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(je.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ha(i,e.getCompare()):a=Gr;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new ai(h,l)}addToIndexes(e,t){const i=La(this.indexes_,(r,s)=>{const o=ds(this.indexSet_,s);if(pe(o,"Missing index implementation for "+s),r===Gr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(je.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ha(a,o.getCompare())}else return Gr;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new je(e.name,a))),c.insert(e,e.node)}});return new ai(i,this.indexSet_)}removeFromIndexes(e,t){const i=La(this.indexes_,r=>{if(r===Gr)return r;{const s=t.get(e.name);return s?r.remove(new je(e.name,s)):r}});return new ai(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class Fe{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&jg(this.priorityNode_),this.children_.isEmpty()&&pe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fs||(Fs=new Fe(new ln(nu),null,ai.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new Fe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fs:t}}getChild(e){const t=$e(e);return t===null?this:this.getImmediateChild(t).getChild(_t(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(pe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new je(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Fs:this.priorityNode_;return new Fe(r,o,s)}}updateChild(e,t){const i=$e(e);if(i===null)return t;{pe($e(e)!==".priority"||Gi(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(_t(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(At,(o,a)=>{t[o]=a.val(e),i++,s&&Fe.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$g(this.getPriority().val())+":"),this.forEachChild(At,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":wg(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new je(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new je(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new je(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,je.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,je.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lo?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Fe(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(At),r=t.getIterator(At);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}Fe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class EA extends Fe{constructor(){super(new ln(nu),Fe.EMPTY_NODE,ai.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Fe.EMPTY_NODE}isEmpty(){return!1}}const Lo=new EA;Object.defineProperties(je,{MIN:{value:new je(ps,Fe.EMPTY_NODE)},MAX:{value:new je(vr,Lo)}});qg.__EMPTY_NODE=Fe.EMPTY_NODE;zt.__childrenNodeConstructor=Fe;yA(Lo);bA(Lo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=!0;function Vt(n,e=null){if(n===null)return Fe.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),pe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new zt(t,Vt(e))}if(!(n instanceof Array)&&TA){const t=[];let i=!1;if(hn(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=Vt(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new je(o,c)))}}),t.length===0)return Fe.EMPTY_NODE;const s=Ha(t,wA,o=>o.name,nu);if(i){const o=Ha(t,At.getCompare());return new Fe(s,Vt(e),new ai({".priority":o},{".priority":At}))}else return new Fe(s,Vt(e),ai.Default)}else{let t=Fe.EMPTY_NODE;return hn(n,(i,r)=>{if(mi(n,i)&&i.substring(0,1)!=="."){const s=Vt(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(Vt(e))}}xA(Vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA extends ml{constructor(e){super(),this.indexPath_=e,pe(!Je(e)&&$e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?Ss(e.name,t.name):s}makePost(e,t){const i=Vt(e),r=Fe.EMPTY_NODE.updateChild(this.indexPath_,i);return new je(t,r)}maxPost(){const e=Fe.EMPTY_NODE.updateChild(this.indexPath_,Lo);return new je(vr,e)}toString(){return Wg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA extends ml{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ss(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return je.MIN}maxPost(){return je.MAX}makePost(e,t){const i=Vt(e);return new je(t,i)}toString(){return".value"}}const RA=new IA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(n){return{type:"value",snapshotNode:n}}function ms(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function fo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function po(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function PA(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){pe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(fo(t,a)):pe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ms(t,i)):o.trackChildChange(po(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(At,(r,s)=>{t.hasChild(r)||i.trackChildChange(fo(r,s))}),t.isLeafNode()||t.forEachChild(At,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(po(r,s,o))}else i.trackChildChange(ms(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Fe.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.indexedFilter_=new iu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mo.getStartPost_(e),this.endPost_=mo.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,r,s,o){return this.matches(new je(t,i))||(i=Fe.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Fe.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Fe.EMPTY_NODE);const s=this;return t.forEachChild(At,(o,a)=>{s.matches(new je(o,a))||(r=r.updateImmediateChild(o,Fe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.rangedFilter_=new mo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new je(t,i))||(i=Fe.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=Fe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=Fe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=t.withIndex(this.index_),r=r.updatePriority(Fe.EMPTY_NODE);let s,o,a,c;if(this.reverse_){c=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const u=this.index_.getCompare();a=(d,f)=>u(f,d)}else c=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,h=!1;for(;c.hasNext();){const u=c.getNext();!h&&a(s,u)<=0&&(h=!0),h&&l<this.limit_&&a(u,o)<=0?l++:r=r.updateImmediateChild(u.name,Fe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;pe(a.numChildren()===this.limit_,"");const c=new je(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(h&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(po(t,i,u)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(fo(t,u));const m=a.updateImmediateChild(t,Fe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ms(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return i.isEmpty()?e:h&&o(l,c)>=0?(s!=null&&(s.trackChildChange(fo(l.name,l.node)),s.trackChildChange(ms(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,Fe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return pe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return pe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ps}hasEnd(){return this.endSet_}getIndexEndValue(){return pe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return pe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return pe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const e=new ru;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DA(n){return n.loadsAllData()?new iu(n.getIndex()):n.hasLimit()?new LA(n):new mo(n)}function fp(n){const e={};if(n.isDefault())return e;let t;return n.index_===At?t="$priority":n.index_===RA?t="$value":n.index_===ss?t="$key":(pe(n.index_ instanceof AA,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=kt(t),n.startSet_&&(e.startAt=kt(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+kt(n.indexStartName_))),n.endSet_&&(e.endAt=kt(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+kt(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function pp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==At&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends Bg{constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Po("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(pe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Wa.getListenId_(e,i),a={};this.listens_[o]=a;const c=fp(e._queryParams);this.restRequest_(s+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),ds(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",r(d,null)}})}unlisten(e,t){const i=Wa.getListenId_(e,t);delete this.listens_[i]}get(e){const t=fp(e._queryParams),i=e._path.toString(),r=new ll;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bs(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ao(a.responseText)}catch{cn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&cn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.rootNode_=Fe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){return{value:null,children:new Map}}function Jg(n,e,t){if(Je(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=$e(e);n.children.has(i)||n.children.set(i,Va());const r=n.children.get(i);e=_t(e),Jg(r,e,t)}}function fh(n,e,t){n.value!==null?t(e,n.value):kA(n,(i,r)=>{const s=new dt(e.toString()+"/"+i);fh(r,s,t)})}function kA(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&hn(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=10*1e3,FA=30*1e3,UA=5*60*1e3;class BA{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new OA(e);const i=mp+(FA-mp)*Math.random();Js(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;hn(e,(r,s)=>{s>0&&mi(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*UA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function Zg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function su(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ou(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Nn.ACK_USER_WRITE,this.source=Zg()}operationForChild(e){if(Je(this.path)){if(this.affectedTree.value!=null)return pe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new dt(e));return new Ga(it(),t,this.revert)}}else return pe($e(this.path)===e,"operationForChild called for unrelated child."),new Ga(_t(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.source=e,this.path=t,this.type=Nn.LISTEN_COMPLETE}operationForChild(e){return Je(this.path)?new go(this.source,it()):new go(this.source,_t(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Nn.OVERWRITE}operationForChild(e){return Je(this.path)?new wr(this.source,it(),this.snap.getImmediateChild(e)):new wr(this.source,_t(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Nn.MERGE}operationForChild(e){if(Je(this.path)){const t=this.children.subtree(new dt(e));return t.isEmpty()?null:t.value?new wr(this.source,it(),t.value):new _o(this.source,it(),t)}else return pe($e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _o(this.source,_t(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Je(e))return this.isFullyInitialized()&&!this.filtered_;const t=$e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function HA(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(PA(o.childName,o.snapshotNode))}),Us(n,r,"child_removed",e,i,t),Us(n,r,"child_added",e,i,t),Us(n,r,"child_moved",s,i,t),Us(n,r,"child_changed",e,i,t),Us(n,r,"value",e,i,t),r}function Us(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,c)=>VA(n,a,c)),o.forEach(a=>{const c=WA(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function WA(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function VA(n,e,t){if(e.childName==null||t.childName==null)throw xs("Should only compare child_ events.");const i=new je(e.childName,e.snapshotNode),r=new je(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n,e){return{eventCache:n,serverCache:e}}function Zs(n,e,t,i){return gl(new qi(e,t,i),n.serverCache)}function Qg(n,e,t,i){return gl(n.eventCache,new qi(e,t,i))}function qa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function yr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oc;const GA=()=>(Oc||(Oc=new ln(IT)),Oc);class wt{constructor(e,t=GA()){this.value=e,this.children=t}static fromObject(e){let t=new wt(null);return hn(e,(i,r)=>{t=t.set(new dt(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:it(),value:this.value};if(Je(e))return null;{const i=$e(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(_t(e),t);return s!=null?{path:Ot(new dt(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Je(e))return this;{const t=$e(e),i=this.children.get(t);return i!==null?i.subtree(_t(e)):new wt(null)}}set(e,t){if(Je(e))return new wt(t,this.children);{const i=$e(e),s=(this.children.get(i)||new wt(null)).set(_t(e),t),o=this.children.insert(i,s);return new wt(this.value,o)}}remove(e){if(Je(e))return this.children.isEmpty()?new wt(null):new wt(null,this.children);{const t=$e(e),i=this.children.get(t);if(i){const r=i.remove(_t(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new wt(null):new wt(this.value,s)}else return this}}get(e){if(Je(e))return this.value;{const t=$e(e),i=this.children.get(t);return i?i.get(_t(e)):null}}setTree(e,t){if(Je(e))return t;{const i=$e(e),s=(this.children.get(i)||new wt(null)).setTree(_t(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new wt(this.value,o)}}fold(e){return this.fold_(it(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ot(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,it(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(Je(e))return null;{const s=$e(e),o=this.children.get(s);return o?o.findOnPath_(_t(e),Ot(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,it(),t)}foreachOnPath_(e,t,i){if(Je(e))return this;{this.value&&i(t,this.value);const r=$e(e),s=this.children.get(r);return s?s.foreachOnPath_(_t(e),Ot(t,r),i):new wt(null)}}foreach(e){this.foreach_(it(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(Ot(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new wt(null))}}function Qs(n,e,t){if(Je(e))return new kn(new wt(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=nn(r,e);return s=s.updateChild(o,t),new kn(n.writeTree_.set(r,s))}else{const r=new wt(t),s=n.writeTree_.setTree(e,r);return new kn(s)}}}function gp(n,e,t){let i=n;return hn(t,(r,s)=>{i=Qs(i,Ot(e,r),s)}),i}function _p(n,e){if(Je(e))return kn.empty();{const t=n.writeTree_.setTree(e,new wt(null));return new kn(t)}}function ph(n,e){return br(n,e)!=null}function br(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(nn(t.path,e)):null}function vp(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(At,(i,r)=>{e.push(new je(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new je(i,r.value))}),e}function Ui(n,e){if(Je(e))return n;{const t=br(n,e);return t!=null?new kn(new wt(t)):new kn(n.writeTree_.subtree(e))}}function mh(n){return n.writeTree_.isEmpty()}function gs(n,e){return e_(it(),n.writeTree_,e)}function e_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(pe(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=e_(Ot(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Ot(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e){return r_(e,n)}function qA(n,e,t,i,r){pe(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=Qs(n.visibleWrites,e,t)),n.lastWriteId=i}function $A(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function jA(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);pe(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&XA(a,i.path)?r=!1:Dn(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return YA(n),!0;if(i.snap)n.visibleWrites=_p(n.visibleWrites,i.path);else{const a=i.children;hn(a,c=>{n.visibleWrites=_p(n.visibleWrites,Ot(i.path,c))})}return!0}else return!1}function XA(n,e){if(n.snap)return Dn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Dn(Ot(n.path,t),e))return!0;return!1}function YA(n){n.visibleWrites=t_(n.allWrites,KA,it()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function KA(n){return n.visible}function t_(n,e,t){let i=kn.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)Dn(t,o)?(a=nn(t,o),i=Qs(i,a,s.snap)):Dn(o,t)&&(a=nn(o,t),i=Qs(i,it(),s.snap.getChild(a)));else if(s.children){if(Dn(t,o))a=nn(t,o),i=gp(i,a,s.children);else if(Dn(o,t))if(a=nn(o,t),Je(a))i=gp(i,it(),s.children);else{const c=ds(s.children,$e(a));if(c){const l=c.getChild(_t(a));i=Qs(i,it(),l)}}}else throw xs("WriteRecord should have .snap or .children")}}return i}function n_(n,e,t,i,r){if(!i&&!r){const s=br(n.visibleWrites,e);if(s!=null)return s;{const o=Ui(n.visibleWrites,e);if(mh(o))return t;if(t==null&&!ph(o,it()))return null;{const a=t||Fe.EMPTY_NODE;return gs(o,a)}}}else{const s=Ui(n.visibleWrites,e);if(!r&&mh(s))return t;if(!r&&t==null&&!ph(s,it()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(Dn(l.path,e)||Dn(e,l.path))},a=t_(n.allWrites,o,e),c=t||Fe.EMPTY_NODE;return gs(a,c)}}}function JA(n,e,t){let i=Fe.EMPTY_NODE;const r=br(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(At,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=Ui(n.visibleWrites,e);return t.forEachChild(At,(o,a)=>{const c=gs(Ui(s,new dt(o)),a);i=i.updateImmediateChild(o,c)}),vp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ui(n.visibleWrites,e);return vp(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function ZA(n,e,t,i,r){pe(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ot(e,t);if(ph(n.visibleWrites,s))return null;{const o=Ui(n.visibleWrites,s);return mh(o)?r.getChild(t):gs(o,r.getChild(t))}}function QA(n,e,t,i){const r=Ot(e,t),s=br(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=Ui(n.visibleWrites,r);return gs(o,i.getNode().getImmediateChild(t))}else return null}function e2(n,e){return br(n.visibleWrites,e)}function t2(n,e,t,i,r,s,o){let a;const c=Ui(n.visibleWrites,e),l=br(c,it());if(l!=null)a=l;else if(t!=null)a=gs(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<r;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function n2(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function $a(n,e,t,i){return n_(n.writeTree,n.treePath,e,t,i)}function au(n,e){return JA(n.writeTree,n.treePath,e)}function wp(n,e,t,i){return ZA(n.writeTree,n.treePath,e,t,i)}function ja(n,e){return e2(n.writeTree,Ot(n.treePath,e))}function i2(n,e,t,i,r,s){return t2(n.writeTree,n.treePath,e,t,i,r,s)}function lu(n,e,t){return QA(n.writeTree,n.treePath,e,t)}function i_(n,e){return r_(Ot(n.treePath,e),n.writeTree)}function r_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;pe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),pe(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,po(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,fo(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,ms(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,po(i,e.snapshotNode,r.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const s_=new s2;class cu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new qi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lu(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),s=i2(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(n){return{filter:n}}function a2(n,e){pe(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),pe(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function l2(n,e,t,i,r){const s=new r2;let o,a;if(t.type===Nn.OVERWRITE){const l=t;l.source.fromUser?o=gh(n,e,l.path,l.snap,i,r,s):(pe(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Je(l.path),o=Xa(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===Nn.MERGE){const l=t;l.source.fromUser?o=h2(n,e,l.path,l.children,i,r,s):(pe(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=_h(n,e,l.path,l.children,i,r,a,s))}else if(t.type===Nn.ACK_USER_WRITE){const l=t;l.revert?o=f2(n,e,l.path,i,r,s):o=u2(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===Nn.LISTEN_COMPLETE)o=d2(n,e,t.path,i,s);else throw xs("Unknown operation type: "+t.type);const c=s.getChanges();return c2(e,o,c),{viewCache:o,changes:c}}function c2(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=qa(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Kg(qa(e)))}}function o_(n,e,t,i,r,s){const o=e.eventCache;if(ja(i,t)!=null)return e;{let a,c;if(Je(t))if(pe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=yr(e),h=l instanceof Fe?l:Fe.EMPTY_NODE,u=au(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=$a(i,yr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=$e(t);if(l===".priority"){pe(Gi(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=wp(i,t,h,c);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=_t(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=wp(i,t,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=lu(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,h,r,s):a=o.getNode()}}return Zs(e,a,o.isFullyInitialized()||Je(t),n.filter.filtersNodes())}}function Xa(n,e,t,i,r,s,o,a){const c=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(Je(t))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=h.updateFullNode(c.getNode(),f,null)}else{const f=$e(t);if(!c.isCompleteForPath(t)&&Gi(t)>1)return e;const g=_t(t),p=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=h.updatePriority(c.getNode(),p):l=h.updateChild(c.getNode(),f,p,g,s_,null)}const u=Qg(e,l,c.isFullyInitialized()||Je(t),h.filtersNodes()),d=new cu(r,u,s);return o_(n,u,t,r,d,a)}function gh(n,e,t,i,r,s,o){const a=e.eventCache;let c,l;const h=new cu(r,e,s);if(Je(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Zs(e,l,!0,n.filter.filtersNodes());else{const u=$e(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=Zs(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=_t(t),f=a.getNode().getImmediateChild(u);let g;if(Je(d))g=i;else{const m=h.getCompleteChild(u);m!=null?Hg(d)===".priority"&&m.getChild(Vg(d)).isEmpty()?g=m:g=m.updateChild(d,i):g=Fe.EMPTY_NODE}if(f.equals(g))c=e;else{const m=n.filter.updateChild(a.getNode(),u,g,d,h,o);c=Zs(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function yp(n,e){return n.eventCache.isCompleteForChild(e)}function h2(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{const h=Ot(t,c);yp(e,$e(h))&&(a=gh(n,a,h,l,r,s,o))}),i.foreach((c,l)=>{const h=Ot(t,c);yp(e,$e(h))||(a=gh(n,a,h,l,r,s,o))}),a}function xp(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function _h(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;Je(t)?l=i:l=new wt(null).setTree(t,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),g=xp(n,f,d);c=Xa(n,c,new dt(u),g,r,s,o,a)}}),l.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const g=e.serverCache.getNode().getImmediateChild(u),m=xp(n,g,d);c=Xa(n,c,new dt(u),m,r,s,o,a)}}),c}function u2(n,e,t,i,r,s,o){if(ja(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(Je(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Xa(n,e,t,c.getNode().getChild(t),r,s,a,o);if(Je(t)){let l=new wt(null);return c.getNode().forEachChild(ss,(h,u)=>{l=l.set(new dt(h),u)}),_h(n,e,t,l,r,s,a,o)}else return e}else{let l=new wt(null);return i.foreach((h,u)=>{const d=Ot(t,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),_h(n,e,t,l,r,s,a,o)}}function d2(n,e,t,i,r){const s=e.serverCache,o=Qg(e,s.getNode(),s.isFullyInitialized()||Je(t),s.isFiltered());return o_(n,o,t,i,s_,r)}function f2(n,e,t,i,r,s){let o;if(ja(i,t)!=null)return e;{const a=new cu(i,e,r),c=e.eventCache.getNode();let l;if(Je(t)||$e(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$a(i,yr(e));else{const u=e.serverCache.getNode();pe(u instanceof Fe,"serverChildren would be complete if leaf node"),h=au(i,u)}h=h,l=n.filter.updateFullNode(c,h,s)}else{const h=$e(t);let u=lu(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=n.filter.updateChild(c,h,u,_t(t),a,s):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(c,h,Fe.EMPTY_NODE,_t(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$a(i,yr(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||ja(i,it())!=null,Zs(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new iu(i.getIndex()),s=DA(i);this.processor_=o2(s);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(Fe.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(Fe.EMPTY_NODE,a.getNode(),null),h=new qi(c,o.isFullyInitialized(),r.filtersNodes()),u=new qi(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=gl(u,h),this.eventGenerator_=new zA(this.query_)}get query(){return this.query_}}function m2(n){return n.viewCache_.serverCache.getNode()}function g2(n){return qa(n.viewCache_)}function _2(n,e){const t=yr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Je(e)&&!t.getImmediateChild($e(e)).isEmpty())?t.getChild(e):null}function bp(n){return n.eventRegistrations_.length===0}function v2(n,e){n.eventRegistrations_.push(e)}function Sp(n,e,t){const i=[];if(t){pe(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Cp(n,e,t,i){e.type===Nn.MERGE&&e.source.queryId!==null&&(pe(yr(n.viewCache_),"We should always have a full cache before handling merges"),pe(qa(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=l2(n.processor_,r,e,t,i);return a2(n.processor_,s.viewCache),pe(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,a_(n,s.changes,s.viewCache.eventCache.getNode(),null)}function w2(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(At,(s,o)=>{i.push(ms(s,o))}),t.isFullyInitialized()&&i.push(Kg(t.getNode())),a_(n,i,t.getNode(),e)}function a_(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return HA(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;class l_{constructor(){this.views=new Map}}function y2(n){pe(!Ya,"__referenceConstructor has already been defined"),Ya=n}function x2(){return pe(Ya,"Reference.ts has not been loaded"),Ya}function b2(n){return n.views.size===0}function hu(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return pe(s!=null,"SyncTree gave us an op for an invalid query."),Cp(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Cp(o,e,t,i));return s}}function c_(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=$a(t,r?i:null),c=!1;a?c=!0:i instanceof Fe?(a=au(t,i),c=!1):(a=Fe.EMPTY_NODE,c=!1);const l=gl(new qi(a,c,!1),new qi(i,r,!1));return new p2(e,l)}return o}function S2(n,e,t,i,r,s){const o=c_(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),v2(o,t),w2(o,t)}function C2(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=$i(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(Sp(l,t,i)),bp(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(Sp(c,t,i)),bp(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!$i(n)&&s.push(new(x2())(e._repo,e._path)),{removed:s,events:o}}function h_(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Bi(n,e){let t=null;for(const i of n.views.values())t=t||_2(i,e);return t}function u_(n,e){if(e._queryParams.loadsAllData())return vl(n);{const i=e._queryIdentifier;return n.views.get(i)}}function d_(n,e){return u_(n,e)!=null}function $i(n){return vl(n)!=null}function vl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;function M2(n){pe(!Ka,"__referenceConstructor has already been defined"),Ka=n}function E2(){return pe(Ka,"Reference.ts has not been loaded"),Ka}let T2=1;class Mp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new wt(null),this.pendingWriteTree_=n2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function f_(n,e,t,i,r){return qA(n.pendingWriteTree_,e,t,i,r),r?No(n,new wr(Zg(),e,t)):[]}function sr(n,e,t=!1){const i=$A(n.pendingWriteTree_,e);if(jA(n.pendingWriteTree_,e)){let s=new wt(null);return i.snap!=null?s=s.set(it(),!0):hn(i.children,o=>{s=s.set(new dt(o),!0)}),No(n,new Ga(i.path,s,t))}else return[]}function Do(n,e,t){return No(n,new wr(su(),e,t))}function A2(n,e,t){const i=wt.fromObject(t);return No(n,new _o(su(),e,i))}function I2(n,e){return No(n,new go(su(),e))}function R2(n,e,t){const i=du(n,t);if(i){const r=fu(i),s=r.path,o=r.queryId,a=nn(s,e),c=new go(ou(o),a);return pu(n,s,c)}else return[]}function Ja(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||d_(o,e))){const c=C2(o,e,t,i);b2(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(d,f)=>$i(f));if(h&&!u){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=D2(d);for(let g=0;g<f.length;++g){const m=f[g],p=m.query,v=__(n,m);n.listenProvider_.startListening(eo(p),vo(n,p),v.hashFn,v.onComplete)}}}!u&&l.length>0&&!i&&(h?n.listenProvider_.stopListening(eo(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(wl(d));n.listenProvider_.stopListening(eo(d),f)}))}N2(n,l)}return a}function p_(n,e,t,i){const r=du(n,i);if(r!=null){const s=fu(r),o=s.path,a=s.queryId,c=nn(o,e),l=new wr(ou(a),c,t);return pu(n,o,l)}else return[]}function P2(n,e,t,i){const r=du(n,i);if(r){const s=fu(r),o=s.path,a=s.queryId,c=nn(o,e),l=wt.fromObject(t),h=new _o(ou(a),c,l);return pu(n,o,h)}else return[]}function vh(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,f)=>{const g=nn(d,r);s=s||Bi(f,g),o=o||$i(f)});let a=n.syncPointTree_.get(r);a?(o=o||$i(a),s=s||Bi(a,it())):(a=new l_,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=Fe.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,g)=>{const m=Bi(g,it());m&&(s=s.updateImmediateChild(f,m))}));const l=d_(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=wl(e);pe(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=k2();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=_l(n.pendingWriteTree_,r);let u=S2(a,e,t,h,s,c);if(!l&&!o&&!i){const d=u_(a,e);u=u.concat(O2(n,e,d))}return u}function uu(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=nn(o,e),l=Bi(a,c);if(l)return l});return n_(r,e,s,t,!0)}function L2(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,h)=>{const u=nn(l,t);i=i||Bi(h,u)});let r=n.syncPointTree_.get(t);r?i=i||Bi(r,it()):(r=new l_,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new qi(i,!0,!1):null,a=_l(n.pendingWriteTree_,e._path),c=c_(r,e,a,s?o.getNode():Fe.EMPTY_NODE,s);return g2(c)}function No(n,e){return m_(e,n.syncPointTree_,null,_l(n.pendingWriteTree_,it()))}function m_(n,e,t,i){if(Je(n.path))return g_(n,e,t,i);{const r=e.get(it());t==null&&r!=null&&(t=Bi(r,it()));let s=[];const o=$e(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=i_(i,o);s=s.concat(m_(a,c,l,h))}return r&&(s=s.concat(hu(r,n,i,t))),s}}function g_(n,e,t,i){const r=e.get(it());t==null&&r!=null&&(t=Bi(r,it()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=i_(i,o),h=n.operationForChild(o);h&&(s=s.concat(g_(h,a,c,l)))}),r&&(s=s.concat(hu(r,n,i,t))),s}function __(n,e){const t=e.query,i=vo(n,t);return{hashFn:()=>(m2(e)||Fe.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?R2(n,t._path,i):I2(n,t._path);{const s=LT(r,t);return Ja(n,t,null,s)}}}}function vo(n,e){const t=wl(e);return n.queryToTagMap.get(t)}function wl(n){return n._path.toString()+"$"+n._queryIdentifier}function du(n,e){return n.tagToQueryMap.get(e)}function fu(n){const e=n.indexOf("$");return pe(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new dt(n.substr(0,e))}}function pu(n,e,t){const i=n.syncPointTree_.get(e);pe(i,"Missing sync point for query tag that we're tracking");const r=_l(n.pendingWriteTree_,e);return hu(i,t,r,null)}function D2(n){return n.fold((e,t,i)=>{if(t&&$i(t))return[vl(t)];{let r=[];return t&&(r=h_(t)),hn(i,(s,o)=>{r=r.concat(o)}),r}})}function eo(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(E2())(n._repo,n._path):n}function N2(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=wl(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function k2(){return T2++}function O2(n,e,t){const i=e._path,r=vo(n,e),s=__(n,t),o=n.listenProvider_.startListening(eo(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)pe(!$i(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!Je(l)&&h&&$i(h))return[vl(h).query];{let d=[];return h&&(d=d.concat(h_(h).map(f=>f.query))),hn(u,(f,g)=>{d=d.concat(g)}),d}});for(let l=0;l<c.length;++l){const h=c[l];n.listenProvider_.stopListening(eo(h),vo(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new mu(t)}node(){return this.node_}}class gu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ot(this.path_,e);return new gu(this.syncTree_,t)}node(){return uu(this.syncTree_,this.path_)}}const F2=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ep=function(n,e,t){if(!n||typeof n!="object")return n;if(pe(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return U2(n[".sv"],e,t);if(typeof n[".sv"]=="object")return B2(n[".sv"],e);pe(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},U2=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:pe(!1,"Unexpected server value: "+n)}},B2=function(n,e,t){n.hasOwnProperty("increment")||pe(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&pe(!1,"Unexpected increment value: "+i);const r=e.node();if(pe(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},z2=function(n,e,t,i){return _u(e,new gu(t,n),i)},v_=function(n,e,t){return _u(n,new mu(e),t)};function _u(n,e,t){const i=n.getPriority().val(),r=Ep(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Ep(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new zt(a,Vt(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new zt(r))),o.forEachChild(At,(a,c)=>{const l=_u(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function wu(n,e){let t=e instanceof dt?e:new dt(e),i=n,r=$e(t);for(;r!==null;){const s=ds(i.node.children,r)||{children:{},childCount:0};i=new vu(r,i,s),t=_t(t),r=$e(t)}return i}function Ms(n){return n.node.value}function w_(n,e){n.node.value=e,wh(n)}function y_(n){return n.node.childCount>0}function H2(n){return Ms(n)===void 0&&!y_(n)}function yl(n,e){hn(n.node.children,(t,i)=>{e(new vu(t,n,i))})}function x_(n,e,t,i){t&&!i&&e(n),yl(n,r=>{x_(r,e,!0,i)}),t&&i&&e(n)}function W2(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ko(n){return new dt(n.parent===null?n.name:ko(n.parent)+"/"+n.name)}function wh(n){n.parent!==null&&V2(n.parent,n.name,n)}function V2(n,e,t){const i=H2(t),r=mi(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,wh(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,wh(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=/[\[\].#$\/\u0000-\u001F\u007F]/,q2=/[\[\].#$\u0000-\u001F\u007F]/,Fc=10*1024*1024,b_=function(n){return typeof n=="string"&&n.length!==0&&!G2.test(n)},S_=function(n){return typeof n=="string"&&n.length!==0&&!q2.test(n)},$2=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(n)},j2=function(n,e,t,i){i&&e===void 0||yu(Bh(n,"value"),e,t)},yu=function(n,e,t){const i=t instanceof dt?new uA(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+er(i));if(typeof e=="function")throw new Error(n+"contains a function "+er(i)+" with contents = "+e.toString());if(yg(e))throw new Error(n+"contains "+e.toString()+" "+er(i));if(typeof e=="string"&&e.length>Fc/3&&cl(e)>Fc)throw new Error(n+"contains a string greater than "+Fc+" utf8 bytes "+er(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(hn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!b_(o)))throw new Error(n+" contains an invalid key ("+o+") "+er(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dA(i,o),yu(n,a,i),fA(i)}),r&&s)throw new Error(n+' contains ".value" child '+er(i)+" in addition to actual children.")}},C_=function(n,e,t,i){if(!(i&&t===void 0)&&!S_(t))throw new Error(Bh(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},X2=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C_(n,e,t,i)},Y2=function(n,e){if($e(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},K2=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!b_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$2(t))throw new Error(Bh(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xu(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!eu(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function M_(n,e,t){xu(n,t),E_(n,i=>eu(i,e))}function qn(n,e,t){xu(n,t),E_(n,i=>Dn(i,e)||Dn(e,i))}function E_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Z2(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Z2(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ur&&Jt("event: "+t.toString()),Cs(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2="repo_interrupt",eI=25;class tI{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new J2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Va(),this.transactionQueueTree_=new vu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nI(n,e,t){if(n.stats_=Zh(n.repoInfo_),n.forceRestClient_||OT())n.server_=new Wa(n.repoInfo_,(i,r,s,o)=>{Tp(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ap(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{kt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new hi(n.repoInfo_,e,(i,r,s,o)=>{Tp(n,i,r,s,o)},i=>{Ap(n,i)},i=>{rI(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=HT(n.repoInfo_,()=>new BA(n.stats_,n.server_)),n.infoData_=new NA,n.infoSyncTree_=new Mp({startListening:(i,r,s,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Do(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Su(n,"connected",!1),n.serverSyncTree_=new Mp({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);qn(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function iI(n){const t=n.infoData_.getNode(new dt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function bu(n){return F2({timestamp:iI(n)})}function Tp(n,e,t,i,r){n.dataUpdateCount++;const s=new dt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=La(t,l=>Vt(l));o=P2(n.serverSyncTree_,s,c,r)}else{const c=Vt(t);o=p_(n.serverSyncTree_,s,c,r)}else if(i){const c=La(t,l=>Vt(l));o=A2(n.serverSyncTree_,s,c)}else{const c=Vt(t);o=Do(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=bl(n,s)),qn(n.eventQueue_,a,o)}function Ap(n,e){Su(n,"connected",e),e===!1&&aI(n)}function rI(n,e){hn(e,(t,i)=>{Su(n,t,i)})}function Su(n,e,t){const i=new dt("/.info/"+e),r=Vt(t);n.infoData_.updateSnapshot(i,r);const s=Do(n.infoSyncTree_,i,r);qn(n.eventQueue_,i,s)}function T_(n){return n.nextWriteId_++}function sI(n,e,t){const i=L2(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{const s=Vt(r).withIndex(e._queryParams.getIndex());vh(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Do(n.serverSyncTree_,e._path,s);else{const a=vo(n.serverSyncTree_,e);o=p_(n.serverSyncTree_,e._path,s,a)}return qn(n.eventQueue_,e._path,o),Ja(n.serverSyncTree_,e,t,null,!0),s},r=>(xl(n,"get for query "+kt(e)+" failed: "+r),Promise.reject(new Error(r))))}function oI(n,e,t,i,r){xl(n,"set",{path:e.toString(),value:t,priority:i});const s=bu(n),o=Vt(t,i),a=uu(n.serverSyncTree_,e),c=v_(o,a,s),l=T_(n),h=f_(n.serverSyncTree_,e,c,l,!0);xu(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const g=d==="ok";g||cn("set at "+e+" failed: "+d);const m=sr(n.serverSyncTree_,l,!g);qn(n.eventQueue_,e,m),hI(n,r,d,f)});const u=L_(n,e);bl(n,u),qn(n.eventQueue_,u,[])}function aI(n){xl(n,"onDisconnectEvents");const e=bu(n),t=Va();fh(n.onDisconnect_,it(),(r,s)=>{const o=z2(r,s,n.serverSyncTree_,e);Jg(t,r,o)});let i=[];fh(t,it(),(r,s)=>{i=i.concat(Do(n.serverSyncTree_,r,s));const o=L_(n,r);bl(n,o)}),n.onDisconnect_=Va(),qn(n.eventQueue_,it(),i)}function lI(n,e,t){let i;$e(e._path)===".info"?i=vh(n.infoSyncTree_,e,t):i=vh(n.serverSyncTree_,e,t),M_(n.eventQueue_,e._path,i)}function Ip(n,e,t){let i;$e(e._path)===".info"?i=Ja(n.infoSyncTree_,e,t):i=Ja(n.serverSyncTree_,e,t),M_(n.eventQueue_,e._path,i)}function cI(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Q2)}function xl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Jt(t,...e)}function hI(n,e,t,i){e&&Cs(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function A_(n,e,t){return uu(n.serverSyncTree_,e,t)||Fe.EMPTY_NODE}function Cu(n,e=n.transactionQueueTree_){if(e||Sl(n,e),Ms(e)){const t=R_(n,e);pe(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&uI(n,ko(e),t)}else y_(e)&&yl(e,t=>{Cu(n,t)})}function uI(n,e,t){const i=t.map(l=>l.currentWriteId),r=A_(n,e,i);let s=r;const o=r.hash();for(let l=0;l<t.length;l++){const h=t[l];pe(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=nn(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{xl(n,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(sr(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Sl(n,wu(n.transactionQueueTree_,e)),Cu(n,n.transactionQueueTree_),qn(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)Cs(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{cn("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}bl(n,e)}},o)}function bl(n,e){const t=I_(n,e),i=ko(t),r=R_(n,t);return dI(n,r,i),i}function dI(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=nn(t,c.path);let h=!1,u;if(pe(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,r=r.concat(sr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=eI)h=!0,u="maxretry",r=r.concat(sr(n.serverSyncTree_,c.currentWriteId,!0));else{const d=A_(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){yu("transaction failed: Data returned ",f,c.path);let g=Vt(f);typeof f=="object"&&f!=null&&mi(f,".priority")||(g=g.updatePriority(d.getPriority()));const p=c.currentWriteId,v=bu(n),b=v_(g,d,v);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=b,c.currentWriteId=T_(n),o.splice(o.indexOf(p),1),r=r.concat(f_(n.serverSyncTree_,c.path,b,c.currentWriteId,c.applyLocally)),r=r.concat(sr(n.serverSyncTree_,p,!0))}else h=!0,u="nodata",r=r.concat(sr(n.serverSyncTree_,c.currentWriteId,!0))}qn(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Sl(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Cs(i[a]);Cu(n,n.transactionQueueTree_)}function I_(n,e){let t,i=n.transactionQueueTree_;for(t=$e(e);t!==null&&Ms(i)===void 0;)i=wu(i,t),e=_t(e),t=$e(e);return i}function R_(n,e){const t=[];return P_(n,e,t),t.sort((i,r)=>i.order-r.order),t}function P_(n,e,t){const i=Ms(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);yl(e,r=>{P_(n,r,t)})}function Sl(n,e){const t=Ms(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,w_(e,t.length>0?t:void 0)}yl(e,i=>{Sl(n,i)})}function L_(n,e){const t=ko(I_(n,e)),i=wu(n.transactionQueueTree_,e);return W2(i,r=>{Uc(n,r)}),Uc(n,i),x_(i,r=>{Uc(n,r)}),t}function Uc(n,e){const t=Ms(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(pe(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(pe(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(sr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?w_(e,void 0):t.length=s+1,qn(n.eventQueue_,ko(e),r);for(let o=0;o<i.length;o++)Cs(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function pI(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):cn(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rp=function(n,e){const t=mI(n),i=t.namespace;t.domain==="firebase.com"&&pi(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&pi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||TT();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Lg(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new dt(t.pathString)}},mI=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(r=fI(n.substring(h,u)));const d=pI(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+kt(this.snapshot.exportVal())}}class N_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return pe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return Je(this._path)?null:Hg(this._path)}get ref(){return new jn(this._repo,this._path)}get _queryIdentifier(){const e=pp(this._queryParams),t=Kh(e);return t==="{}"?"default":t}get _queryObject(){return pp(this._queryParams)}isEqual(e){if(e=_n(e),!(e instanceof Mu))return!1;const t=this._repo===e._repo,i=eu(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+hA(this._path)}}class jn extends Mu{constructor(e,t){super(e,t,new ru,!1)}get parent(){const e=Vg(this._path);return e===null?null:new jn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new dt(e),i=Za(this.ref,e);return new _s(this._node.getChild(t),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new _s(r,Za(this.ref,i),At)))}hasChild(e){const t=new dt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ga(n,e){return n=_n(n),n._checkNotDeleted("ref"),e!==void 0?Za(n._root,e):n._root}function Za(n,e){return n=_n(n),$e(n._path)===null?X2("child","path",e,!1):C_("child","path",e,!1),new jn(n._repo,Ot(n._path,e))}function Pp(n,e){n=_n(n),Y2("set",n._path),j2("set",e,n._path,!1);const t=new ll;return oI(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function gI(n){n=_n(n);const e=new k_(()=>{}),t=new Cl(e);return sI(n._repo,n,t).then(i=>new _s(i,new jn(n._repo,n._path),n._queryParams.getIndex()))}class Cl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new D_("value",this,new _s(e.snapshotNode,new jn(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new N_(this,e,t):null}matches(e){return e instanceof Cl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Eu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new N_(this,e,t):null}createEvent(e,t){pe(e.childName!=null,"Child events should have a childName.");const i=Za(new jn(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new D_(e.type,this,new _s(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Eu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function _I(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,l=(h,u)=>{Ip(n._repo,n,a),c(h,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new k_(t,s||void 0),a=e==="value"?new Cl(o):new Eu(e,o);return lI(n._repo,n,a),()=>Ip(n._repo,n,a)}function vI(n,e,t,i){return _I(n,"value",e,t,i)}y2(jn);M2(jn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="FIREBASE_DATABASE_EMULATOR_HOST",yh={};let yI=!1;function xI(n,e,t,i){n.repoInfo_=new Lg(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams),i&&(n.authTokenProvider_=i)}function bI(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||pi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rp(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[wI]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Rp(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const h=r&&c?new rs(rs.OWNER):new UT(n.name,n.options,e);K2("Invalid Firebase Database URL",o),Je(o.path)||pi("Database URL must point to the root of a Firebase Database (not including a child path).");const u=CI(a,n,h,new FT(n.name,t));return new MI(u,n)}function SI(n,e){const t=yh[e];(!t||t[n.key]!==n)&&pi(`Database ${e}(${n.repoInfo_}) has already been deleted.`),cI(n),delete t[n.key]}function CI(n,e,t,i){let r=yh[e.name];r||(r={},yh[e.name]=r);let s=r[n.toURLString()];return s&&pi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tI(n,yI,t,i),r[n.toURLString()]=s,s}class MI{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jn(this._repo,it())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pi("Cannot call "+e+" on a deleted database.")}}function EI(n=Om(),e){const t=Wh(n,"database").getImmediate({identifier:e}),i=oC("database");return i&&O_(t,...i),t}function O_(n,e,t,i={}){n=_n(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&pi("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&pi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rs(rs.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:lC(i.mockUserToken,n.app.options.projectId);s=new rs(o)}xI(r,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(n){bT(Eo),fs(new mr("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bI(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),Fi(Jf,Zf,n),Fi(Jf,Zf,"esm2017")}hi.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};hi.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};TI();const AI={apiKey:"AIzaSyBqyR3tmxScb87ioPP1oSN4uMWpsu3VuKQ",authDomain:"cognitivescience.firebaseapp.com",databaseURL:"https://cognitivescience.firebaseio.com",projectId:"cognitivescience",storageBucket:"cognitivescience.appspot.com",messagingSenderId:"936242062119",appId:"1:936242062119:web:819c6602e1885e6ab97f02"};var el,F_;class II{constructor({expName:e,workerId:t=gn("workerId"),demo:i=!1,config:r=AI}){Bo(this,el);bt(this,"app");bt(this,"auth");bt(this,"database");bt(this,"databaseConnected",!1);bt(this,"userCredentials");bt(this,"uid");if(this.expName=e,this.workerId=t,this.demo=i,this.demo){this.databaseConnected=!0;return}this.app=km(r),this.auth=xT(this.app),this.database=EI(this.app),location.hostname==="localhost"&&(ng(this.auth,"http://localhost:9099"),O_(this.database,"localhost",8e3));const s=ga(this.database,".info/connected");vI(s,o=>{if(o.val()===!0){this.databaseConnected=!0;const a=new CustomEvent("dbconnect",{bubbles:!0,cancelable:!0,detail:{}});document.body.dispatchEvent(a)}else{this.databaseConnected=!1;const a=new CustomEvent("dbdisconnect",{bubbles:!0,cancelable:!0,detail:{}});document.body.dispatchEvent(a)}})}async signInAnonymously(){if(this.demo){this.uid="demo";return}try{await aE(this.auth)}catch(e){console.error(e.message)}try{this.userCredentials=await tE(this.auth),this.uid=this.userCredentials.user.uid}catch(e){console.error(e.message)}}async saveTrial(e,t){if(this.demo){this.saveSuccessful=!0;return}this.saveSuccessful=!1,e=Xi(this,el,F_).call(this,e);try{await Pp(ga(this.database,`experiments/${this.expName}/${this.uid}/${e.trialNumber}`),e),this.saveSuccessful=!0;const i=new CustomEvent("savesuccessful",{bubbles:!0,cancelable:!0,detail:t});document.body.dispatchEvent(i)}catch(i){console.error(i.message)}}async recordCompletion(){if(!this.demo)try{await Pp(ga(this.database,`workers/${this.workerId}/${this.expName}/${this.uid}`),{uid:this.uid})}catch(e){console.error(e.message)}}async localSave(){if(!this.demo){var e;try{e=await gI(ga(this.database,`/experiments/${this.expName}/${this.uid}`))}catch(r){console.error(r.message)}if(e.exists()){const r=JSON.stringify(e.toJSON(),null,"	");var t=document.createElement("a"),i=new Blob([r],{type:"text/plain"});t.href=URL.createObjectURL(i),t.download=`${this.expName}-${this.uid}.json`,t.click()}else console.error("Failed to find data in the database.")}}}el=new WeakSet,F_=function(e){return Object.keys(e).forEach(function(i){Array.isArray(e[i])?e[i].length===0?e[i][0]=-9999:e[i]=e[i].map(r=>!r&&r!==0&&r!==!1?-9999:r):!e[i]&&e[i]!==0&&e[i]!==!1&&(e[i]=-9999)}),e};var tl,U_;class RI{constructor({name:e=gn("name"),demo:t=!1,trials:i=[],startTrialNumber:r=0,cssBackground:s="black",consentPath:o="./consent.pdf",...a}){Bo(this,tl);a.cssBackground=document.body.style.background=s,this.cfg=a,this.cfg.trialNumber="info",this.cfg.name=e,this.cfg.demo=t,this.trials=i,this.trialNumber=r||0,this.getWorkerId(),this.firebase=new II({expName:this.name,workerId:this.cfg.workerId,demo:this.cfg.demo}),this.consent=new WS({path:o}),this.goodbye=new jS(this.cfg.platform,this.cfg.prolificLink),this.points=new XS,this.points.panelWorker.textContent=this.cfg.workerId,this.progress=new $S,this.blocker=new HS,this.fullscreen=this.blocker.fullscreen,this.pointerlock=this.blocker.pointerlock,this.fullscreenStates=this.pointerlockStates=[],a.vrAllowed&&(this.cfg.requireFullscreen=!1,this.cfg.requireChrome=!1)}nextTrial(){this.trialNumber++,this.progress.update(this.trialNumber)}getWorkerId(){const e=new URLSearchParams(window.location.search),t=e.get("workerId"),i=e.get("PROLIFIC_PID"),r=e.get("STUDY_ID"),s=e.get("SESSION_ID");i?(this.cfg.platform="P",this.cfg.prolificStudy=r,this.cfg.prolificSession=s,this.cfg.workerId=i):t?(this.cfg.platform="M",this.cfg.workerId=t):this.cfg.platform="X",this.cfg.workerId||(Xi(this,tl,U_).call(this),console.warn(`WARNING: workerId not found in URL parameters, assigning random id ${this.cfg.workerId}.`))}createTrialSequence(e,t=!1){t||(this.trial=[]);let i=0;for(let[r,s]of e.entries()){const o=s.options;delete s.options;const a=Object.values(s)[0].length;if(!Object.values(s).every(l=>l.length===a))return console.error("ERROR: Experiment.createTrialSequence() requires all trial-variable arrays have the same length"),-1;for(let l=0;l<o.repetitions;l++){let h={...s},u=GS(0,a);if(o.shuffle&&a>1)for(Mf(u);o.noConsecutiveRepeats.length>0&&o.noConsecutiveRepeats.every(d=>this.trials[this.trials.length-1]&&this.trials[this.trials.length-1][d]===s[d][u[0]]);)Mf(u);Object.keys(h).forEach(d=>{h[d]=VS(s[d],u)});for(let d=0;d<a;d++){let f={};for(let g of Object.keys(h))f[g]=h[g][d];f.blockName=o.blockName,f.block=r,f.cycle=i,this.trials.push(f)}i++}}this.numTrials=this.trials.length,this.progress.update(this.trialNumber,this.numTrials)}}tl=new WeakSet,U_=function(){this.cfg.workerId=String(Math.round(Math.random()*1e7)),this.cfg.workerId=this.cfg.workerId.padStart(7,"0")};class PI extends W1{constructor(e){super(e),this.type=ri}parse(e){const I=Math.pow(2.7182818,2.2);function k(_,w){let E=0;for(let G=0;G<65536;++G)(G==0||_[G>>3]&1<<(G&7))&&(w[E++]=G);const L=E-1;for(;E<65536;)w[E++]=0;return L}function ee(_){for(let w=0;w<16384;w++)_[w]={},_[w].len=0,_[w].lit=0,_[w].p=null}const ne={l:0,c:0,lc:0};function $(_,w,E,L,G){for(;E<_;)w=w<<8|qe(L,G),E+=8;E-=_,ne.l=w>>E&(1<<_)-1,ne.c=w,ne.lc=E}const U=new Array(59);function K(_){for(let E=0;E<=58;++E)U[E]=0;for(let E=0;E<65537;++E)U[_[E]]+=1;let w=0;for(let E=58;E>0;--E){const L=w+U[E]>>1;U[E]=w,w=L}for(let E=0;E<65537;++E){const L=_[E];L>0&&(_[E]=L|U[L]++<<6)}}function ae(_,w,E,L,G,O){const j=w;let re=0,fe=0;for(;L<=G;L++){if(j.value-w.value>E)return!1;$(6,re,fe,_,j);const oe=ne.l;if(re=ne.c,fe=ne.lc,O[L]=oe,oe==63){if(j.value-w.value>E)throw new Error("Something wrong with hufUnpackEncTable");$(8,re,fe,_,j);let ce=ne.l+6;if(re=ne.c,fe=ne.lc,L+ce>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ce--;)O[L++]=0;L--}else if(oe>=59){let ce=oe-59+2;if(L+ce>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ce--;)O[L++]=0;L--}}K(O)}function de(_){return _&63}function Q(_){return _>>6}function W(_,w,E,L){for(;w<=E;w++){const G=Q(_[w]),O=de(_[w]);if(G>>O)throw new Error("Invalid table entry");if(O>14){const j=L[G>>O-14];if(j.len)throw new Error("Invalid table entry");if(j.lit++,j.p){const re=j.p;j.p=new Array(j.lit);for(let fe=0;fe<j.lit-1;++fe)j.p[fe]=re[fe]}else j.p=new Array(1);j.p[j.lit-1]=w}else if(O){let j=0;for(let re=1<<14-O;re>0;re--){const fe=L[(G<<14-O)+j];if(fe.len||fe.p)throw new Error("Invalid table entry");fe.len=O,fe.lit=w,j++}}}return!0}const V={c:0,lc:0};function me(_,w,E,L){_=_<<8|qe(E,L),w+=8,V.c=_,V.lc=w}const se={c:0,lc:0};function ve(_,w,E,L,G,O,j,re,fe){if(_==w){L<8&&(me(E,L,G,O),E=V.c,L=V.lc),L-=8;let oe=E>>L;if(oe=new Uint8Array([oe])[0],re.value+oe>fe)return!1;const ce=j[re.value-1];for(;oe-- >0;)j[re.value++]=ce}else if(re.value<fe)j[re.value++]=_;else return!1;se.c=E,se.lc=L}function Ae(_){return _&65535}function Be(_){const w=Ae(_);return w>32767?w-65536:w}const q={a:0,b:0};function Xe(_,w){const E=Be(_),G=Be(w),O=E+(G&1)+(G>>1),j=O,re=O-G;q.a=j,q.b=re}function ke(_,w){const E=Ae(_),L=Ae(w),G=E-(L>>1)&65535,O=L+G-32768&65535;q.a=O,q.b=G}function X(_,w,E,L,G,O,j){const re=j<16384,fe=E>G?G:E;let oe=1,ce,Ce;for(;oe<=fe;)oe<<=1;for(oe>>=1,ce=oe,oe>>=1;oe>=1;){Ce=0;const he=Ce+O*(G-ce),Ne=O*oe,Le=O*ce,Me=L*oe,Ie=L*ce;let Ge,pt,Ye,Rt;for(;Ce<=he;Ce+=Le){let st=Ce;const ze=Ce+L*(E-ce);for(;st<=ze;st+=Ie){const Et=st+Me,an=st+Ne,Pt=an+Me;re?(Xe(_[st+w],_[an+w]),Ge=q.a,Ye=q.b,Xe(_[Et+w],_[Pt+w]),pt=q.a,Rt=q.b,Xe(Ge,pt),_[st+w]=q.a,_[Et+w]=q.b,Xe(Ye,Rt),_[an+w]=q.a,_[Pt+w]=q.b):(ke(_[st+w],_[an+w]),Ge=q.a,Ye=q.b,ke(_[Et+w],_[Pt+w]),pt=q.a,Rt=q.b,ke(Ge,pt),_[st+w]=q.a,_[Et+w]=q.b,ke(Ye,Rt),_[an+w]=q.a,_[Pt+w]=q.b)}if(E&oe){const Et=st+Ne;re?Xe(_[st+w],_[Et+w]):ke(_[st+w],_[Et+w]),Ge=q.a,_[Et+w]=q.b,_[st+w]=Ge}}if(G&oe){let st=Ce;const ze=Ce+L*(E-ce);for(;st<=ze;st+=Ie){const Et=st+Me;re?Xe(_[st+w],_[Et+w]):ke(_[st+w],_[Et+w]),Ge=q.a,_[Et+w]=q.b,_[st+w]=Ge}}ce=oe,oe>>=1}return Ce}function J(_,w,E,L,G,O,j,re,fe){let oe=0,ce=0;const Ce=j,he=Math.trunc(L.value+(G+7)/8);for(;L.value<he;)for(me(oe,ce,E,L),oe=V.c,ce=V.lc;ce>=14;){const Le=oe>>ce-14&16383,Me=w[Le];if(Me.len)ce-=Me.len,ve(Me.lit,O,oe,ce,E,L,re,fe,Ce),oe=se.c,ce=se.lc;else{if(!Me.p)throw new Error("hufDecode issues");let Ie;for(Ie=0;Ie<Me.lit;Ie++){const Ge=de(_[Me.p[Ie]]);for(;ce<Ge&&L.value<he;)me(oe,ce,E,L),oe=V.c,ce=V.lc;if(ce>=Ge&&Q(_[Me.p[Ie]])==(oe>>ce-Ge&(1<<Ge)-1)){ce-=Ge,ve(Me.p[Ie],O,oe,ce,E,L,re,fe,Ce),oe=se.c,ce=se.lc;break}}if(Ie==Me.lit)throw new Error("hufDecode issues")}}const Ne=8-G&7;for(oe>>=Ne,ce-=Ne;ce>0;){const Le=w[oe<<14-ce&16383];if(Le.len)ce-=Le.len,ve(Le.lit,O,oe,ce,E,L,re,fe,Ce),oe=se.c,ce=se.lc;else throw new Error("hufDecode issues")}return!0}function le(_,w,E,L,G,O){const j={value:0},re=E.value,fe=Pe(w,E),oe=Pe(w,E);E.value+=4;const ce=Pe(w,E);if(E.value+=4,fe<0||fe>=65537||oe<0||oe>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const Ce=new Array(65537),he=new Array(16384);ee(he);const Ne=L-(E.value-re);if(ae(_,E,Ne,fe,oe,Ce),ce>8*(L-(E.value-re)))throw new Error("Something wrong with hufUncompress");W(Ce,fe,oe,he),J(Ce,he,_,E,ce,oe,O,G,j)}function Te(_,w,E){for(let L=0;L<E;++L)w[L]=_[w[L]]}function be(_){for(let w=1;w<_.length;w++){const E=_[w-1]+_[w]-128;_[w]=E}}function tt(_,w){let E=0,L=Math.floor((_.length+1)/2),G=0;const O=_.length-1;for(;!(G>O||(w[G++]=_[E++],G>O));)w[G++]=_[L++]}function Ct(_){let w=_.byteLength;const E=new Array;let L=0;const G=new DataView(_);for(;w>0;){const O=G.getInt8(L++);if(O<0){const j=-O;w-=j+1;for(let re=0;re<j;re++)E.push(G.getUint8(L++))}else{const j=O;w-=2;const re=G.getUint8(L++);for(let fe=0;fe<j+1;fe++)E.push(re)}}return E}function lt(_,w,E,L,G,O){let j=new DataView(O.buffer);const re=E[_.idx[0]].width,fe=E[_.idx[0]].height,oe=3,ce=Math.floor(re/8),Ce=Math.ceil(re/8),he=Math.ceil(fe/8),Ne=re-(Ce-1)*8,Le=fe-(he-1)*8,Me={value:0},Ie=new Array(oe),Ge=new Array(oe),pt=new Array(oe),Ye=new Array(oe),Rt=new Array(oe);for(let ze=0;ze<oe;++ze)Rt[ze]=w[_.idx[ze]],Ie[ze]=ze<1?0:Ie[ze-1]+Ce*he,Ge[ze]=new Float32Array(64),pt[ze]=new Uint16Array(64),Ye[ze]=new Uint16Array(Ce*64);for(let ze=0;ze<he;++ze){let Et=8;ze==he-1&&(Et=Le);let an=8;for(let ot=0;ot<Ce;++ot){ot==Ce-1&&(an=Ne);for(let mt=0;mt<oe;++mt)pt[mt].fill(0),pt[mt][0]=G[Ie[mt]++],vt(Me,L,pt[mt]),ft(pt[mt],Ge[mt]),rt(Ge[mt]);Cn(Ge);for(let mt=0;mt<oe;++mt)Mn(Ge[mt],Ye[mt],ot*64)}let Pt=0;for(let ot=0;ot<oe;++ot){const mt=E[_.idx[ot]].type;for(let Xn=8*ze;Xn<8*ze+Et;++Xn){Pt=Rt[ot][Xn];for(let Ts=0;Ts<ce;++Ts){const Fn=Ts*64+(Xn&7)*8;j.setUint16(Pt+0*2*mt,Ye[ot][Fn+0],!0),j.setUint16(Pt+1*2*mt,Ye[ot][Fn+1],!0),j.setUint16(Pt+2*2*mt,Ye[ot][Fn+2],!0),j.setUint16(Pt+3*2*mt,Ye[ot][Fn+3],!0),j.setUint16(Pt+4*2*mt,Ye[ot][Fn+4],!0),j.setUint16(Pt+5*2*mt,Ye[ot][Fn+5],!0),j.setUint16(Pt+6*2*mt,Ye[ot][Fn+6],!0),j.setUint16(Pt+7*2*mt,Ye[ot][Fn+7],!0),Pt+=8*2*mt}}if(ce!=Ce)for(let Xn=8*ze;Xn<8*ze+Et;++Xn){const Ts=Rt[ot][Xn]+8*ce*2*mt,Fn=ce*64+(Xn&7)*8;for(let Uo=0;Uo<an;++Uo)j.setUint16(Ts+Uo*2*mt,Ye[ot][Fn+Uo],!0)}}}const st=new Uint16Array(re);j=new DataView(O.buffer);for(let ze=0;ze<oe;++ze){E[_.idx[ze]].decoded=!0;const Et=E[_.idx[ze]].type;if(E[ze].type==2)for(let an=0;an<fe;++an){const Pt=Rt[ze][an];for(let ot=0;ot<re;++ot)st[ot]=j.getUint16(Pt+ot*2*Et,!0);for(let ot=0;ot<re;++ot)j.setFloat32(Pt+ot*2*Et,N(st[ot]),!0)}}}function vt(_,w,E){let L,G=1;for(;G<64;)L=w[_.value],L==65280?G=64:L>>8==255?G+=L&255:(E[G]=L,G++),_.value++}function ft(_,w){w[0]=N(_[0]),w[1]=N(_[1]),w[2]=N(_[5]),w[3]=N(_[6]),w[4]=N(_[14]),w[5]=N(_[15]),w[6]=N(_[27]),w[7]=N(_[28]),w[8]=N(_[2]),w[9]=N(_[4]),w[10]=N(_[7]),w[11]=N(_[13]),w[12]=N(_[16]),w[13]=N(_[26]),w[14]=N(_[29]),w[15]=N(_[42]),w[16]=N(_[3]),w[17]=N(_[8]),w[18]=N(_[12]),w[19]=N(_[17]),w[20]=N(_[25]),w[21]=N(_[30]),w[22]=N(_[41]),w[23]=N(_[43]),w[24]=N(_[9]),w[25]=N(_[11]),w[26]=N(_[18]),w[27]=N(_[24]),w[28]=N(_[31]),w[29]=N(_[40]),w[30]=N(_[44]),w[31]=N(_[53]),w[32]=N(_[10]),w[33]=N(_[19]),w[34]=N(_[23]),w[35]=N(_[32]),w[36]=N(_[39]),w[37]=N(_[45]),w[38]=N(_[52]),w[39]=N(_[54]),w[40]=N(_[20]),w[41]=N(_[22]),w[42]=N(_[33]),w[43]=N(_[38]),w[44]=N(_[46]),w[45]=N(_[51]),w[46]=N(_[55]),w[47]=N(_[60]),w[48]=N(_[21]),w[49]=N(_[34]),w[50]=N(_[37]),w[51]=N(_[47]),w[52]=N(_[50]),w[53]=N(_[56]),w[54]=N(_[59]),w[55]=N(_[61]),w[56]=N(_[35]),w[57]=N(_[36]),w[58]=N(_[48]),w[59]=N(_[49]),w[60]=N(_[57]),w[61]=N(_[58]),w[62]=N(_[62]),w[63]=N(_[63])}function rt(_){const w=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),L=.5*Math.cos(3.14159/8),G=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),j=.5*Math.cos(3*3.14159/8),re=.5*Math.cos(7*3.14159/16),fe=new Array(4),oe=new Array(4),ce=new Array(4),Ce=new Array(4);for(let he=0;he<8;++he){const Ne=he*8;fe[0]=L*_[Ne+2],fe[1]=j*_[Ne+2],fe[2]=L*_[Ne+6],fe[3]=j*_[Ne+6],oe[0]=E*_[Ne+1]+G*_[Ne+3]+O*_[Ne+5]+re*_[Ne+7],oe[1]=G*_[Ne+1]-re*_[Ne+3]-E*_[Ne+5]-O*_[Ne+7],oe[2]=O*_[Ne+1]-E*_[Ne+3]+re*_[Ne+5]+G*_[Ne+7],oe[3]=re*_[Ne+1]-O*_[Ne+3]+G*_[Ne+5]-E*_[Ne+7],ce[0]=w*(_[Ne+0]+_[Ne+4]),ce[3]=w*(_[Ne+0]-_[Ne+4]),ce[1]=fe[0]+fe[3],ce[2]=fe[1]-fe[2],Ce[0]=ce[0]+ce[1],Ce[1]=ce[3]+ce[2],Ce[2]=ce[3]-ce[2],Ce[3]=ce[0]-ce[1],_[Ne+0]=Ce[0]+oe[0],_[Ne+1]=Ce[1]+oe[1],_[Ne+2]=Ce[2]+oe[2],_[Ne+3]=Ce[3]+oe[3],_[Ne+4]=Ce[3]-oe[3],_[Ne+5]=Ce[2]-oe[2],_[Ne+6]=Ce[1]-oe[1],_[Ne+7]=Ce[0]-oe[0]}for(let he=0;he<8;++he)fe[0]=L*_[16+he],fe[1]=j*_[16+he],fe[2]=L*_[48+he],fe[3]=j*_[48+he],oe[0]=E*_[8+he]+G*_[24+he]+O*_[40+he]+re*_[56+he],oe[1]=G*_[8+he]-re*_[24+he]-E*_[40+he]-O*_[56+he],oe[2]=O*_[8+he]-E*_[24+he]+re*_[40+he]+G*_[56+he],oe[3]=re*_[8+he]-O*_[24+he]+G*_[40+he]-E*_[56+he],ce[0]=w*(_[he]+_[32+he]),ce[3]=w*(_[he]-_[32+he]),ce[1]=fe[0]+fe[3],ce[2]=fe[1]-fe[2],Ce[0]=ce[0]+ce[1],Ce[1]=ce[3]+ce[2],Ce[2]=ce[3]-ce[2],Ce[3]=ce[0]-ce[1],_[0+he]=Ce[0]+oe[0],_[8+he]=Ce[1]+oe[1],_[16+he]=Ce[2]+oe[2],_[24+he]=Ce[3]+oe[3],_[32+he]=Ce[3]-oe[3],_[40+he]=Ce[2]-oe[2],_[48+he]=Ce[1]-oe[1],_[56+he]=Ce[0]-oe[0]}function Cn(_){for(let w=0;w<64;++w){const E=_[0][w],L=_[1][w],G=_[2][w];_[0][w]=E+1.5747*G,_[1][w]=E-.1873*L-.4682*G,_[2][w]=E+1.8556*L}}function Mn(_,w,E){for(let L=0;L<64;++L)w[E+L]=hf.toHalfFloat(A(_[L]))}function A(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(I,Math.abs(_)-1)}function S(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function Y(_){const w=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),E=new Uint8Array(Ct(w)),L=new Uint8Array(E.length);return be(E),tt(E,L),new DataView(L.buffer)}function ue(_){const w=_.array.slice(_.offset.value,_.offset.value+_.size);typeof fflate>"u"&&console.error("THREE.EXRLoader: External library fflate.min.js required.");const E=fflate.unzlibSync(w),L=new Uint8Array(E.length);return be(E),tt(E,L),new DataView(L.buffer)}function we(_){const w=_.viewer,E={value:_.offset.value},L=new Uint16Array(_.width*_.scanlineBlockSize*(_.channels*_.type)),G=new Uint8Array(8192);let O=0;const j=new Array(_.channels);for(let Le=0;Le<_.channels;Le++)j[Le]={},j[Le].start=O,j[Le].end=j[Le].start,j[Le].nx=_.width,j[Le].ny=_.lines,j[Le].size=_.type,O+=j[Le].nx*j[Le].ny*j[Le].size;const re=ge(w,E),fe=ge(w,E);if(fe>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(re<=fe)for(let Le=0;Le<fe-re+1;Le++)G[Le+re]=et(w,E);const oe=new Uint16Array(65536),ce=k(G,oe),Ce=Pe(w,E);le(_.array,w,E,Ce,L,O);for(let Le=0;Le<_.channels;++Le){const Me=j[Le];for(let Ie=0;Ie<j[Le].size;++Ie)X(L,Me.start+Ie,Me.nx,Me.size,Me.ny,Me.nx*Me.size,ce)}Te(oe,L,O);let he=0;const Ne=new Uint8Array(L.buffer.byteLength);for(let Le=0;Le<_.lines;Le++)for(let Me=0;Me<_.channels;Me++){const Ie=j[Me],Ge=Ie.nx*Ie.size,pt=new Uint8Array(L.buffer,Ie.end*2,Ge*2);Ne.set(pt,he),he+=Ge*2,Ie.end+=Ge}return new DataView(Ne.buffer)}function Ee(_){const w=_.array.slice(_.offset.value,_.offset.value+_.size);typeof fflate>"u"&&console.error("THREE.EXRLoader: External library fflate.min.js required.");const E=fflate.unzlibSync(w),L=_.lines*_.channels*_.width,G=_.type==1?new Uint16Array(L):new Uint32Array(L);let O=0,j=0;const re=new Array(4);for(let fe=0;fe<_.lines;fe++)for(let oe=0;oe<_.channels;oe++){let ce=0;switch(_.type){case 1:re[0]=O,re[1]=re[0]+_.width,O=re[1]+_.width;for(let Ce=0;Ce<_.width;++Ce)ce+=E[re[0]++]<<8|E[re[1]++],G[j]=ce,j++;break;case 2:re[0]=O,re[1]=re[0]+_.width,re[2]=re[1]+_.width,O=re[2]+_.width;for(let Ce=0;Ce<_.width;++Ce)ce+=E[re[0]++]<<24|E[re[1]++]<<16|E[re[2]++]<<8,G[j]=ce,j++;break}}return new DataView(G.buffer)}function He(_){const w=_.viewer,E={value:_.offset.value},L=new Uint8Array(_.width*_.lines*(_.channels*_.type*2)),G={version:D(w,E),unknownUncompressedSize:D(w,E),unknownCompressedSize:D(w,E),acCompressedSize:D(w,E),dcCompressedSize:D(w,E),rleCompressedSize:D(w,E),rleUncompressedSize:D(w,E),rleRawSize:D(w,E),totalAcUncompressedCount:D(w,E),totalDcUncompressedCount:D(w,E),acCompression:D(w,E)};if(G.version<2)throw new Error("EXRLoader.parse: "+H.compression+" version "+G.version+" is unsupported");const O=new Array;let j=ge(w,E)-2;for(;j>0;){const Me=Se(w.buffer,E),Ie=et(w,E),Ge=Ie>>2&3,pt=(Ie>>4)-1,Ye=new Int8Array([pt])[0],Rt=et(w,E);O.push({name:Me,index:Ye,type:Rt,compression:Ge}),j-=Me.length+3}const re=H.channels,fe=new Array(_.channels);for(let Me=0;Me<_.channels;++Me){const Ie=fe[Me]={},Ge=re[Me];Ie.name=Ge.name,Ie.compression=0,Ie.decoded=!1,Ie.type=Ge.pixelType,Ie.pLinear=Ge.pLinear,Ie.width=_.width,Ie.height=_.lines}const oe={idx:new Array(3)};for(let Me=0;Me<_.channels;++Me){const Ie=fe[Me];for(let Ge=0;Ge<O.length;++Ge){const pt=O[Ge];Ie.name==pt.name&&(Ie.compression=pt.compression,pt.index>=0&&(oe.idx[pt.index]=Me),Ie.offset=Me)}}let ce,Ce,he;if(G.acCompressedSize>0)switch(G.acCompression){case 0:ce=new Uint16Array(G.totalAcUncompressedCount),le(_.array,w,E,G.acCompressedSize,ce,G.totalAcUncompressedCount);break;case 1:{const Me=_.array.slice(E.value,E.value+G.totalAcUncompressedCount),Ie=fflate.unzlibSync(Me);ce=new Uint16Array(Ie.buffer),E.value+=G.totalAcUncompressedCount;break}}if(G.dcCompressedSize>0){const Me={array:_.array,offset:E,size:G.dcCompressedSize};Ce=new Uint16Array(ue(Me).buffer),E.value+=G.dcCompressedSize}if(G.rleRawSize>0){const Me=_.array.slice(E.value,E.value+G.rleCompressedSize),Ie=fflate.unzlibSync(Me);he=Ct(Ie.buffer),E.value+=G.rleCompressedSize}let Ne=0;const Le=new Array(fe.length);for(let Me=0;Me<Le.length;++Me)Le[Me]=new Array;for(let Me=0;Me<_.lines;++Me)for(let Ie=0;Ie<fe.length;++Ie)Le[Ie].push(Ne),Ne+=fe[Ie].width*_.type*2;lt(oe,Le,fe,ce,Ce,L);for(let Me=0;Me<fe.length;++Me){const Ie=fe[Me];if(!Ie.decoded)switch(Ie.compression){case 2:{let Ge=0,pt=0;for(let Ye=0;Ye<_.lines;++Ye){let Rt=Le[Me][Ge];for(let st=0;st<Ie.width;++st){for(let ze=0;ze<2*Ie.type;++ze)L[Rt++]=he[pt+ze*Ie.width*Ie.height];pt++}Ge++}break}case 1:break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(L.buffer)}function Se(_,w){const E=new Uint8Array(_);let L=0;for(;E[w.value+L]!=0;)L+=1;const G=new TextDecoder().decode(E.slice(w.value,w.value+L));return w.value=w.value+L+1,G}function ie(_,w,E){const L=new TextDecoder().decode(new Uint8Array(_).slice(w.value,w.value+E));return w.value=w.value+E,L}function Oe(_,w){const E=Re(_,w),L=Pe(_,w);return[E,L]}function We(_,w){const E=Pe(_,w),L=Pe(_,w);return[E,L]}function Re(_,w){const E=_.getInt32(w.value,!0);return w.value=w.value+4,E}function Pe(_,w){const E=_.getUint32(w.value,!0);return w.value=w.value+4,E}function qe(_,w){const E=_[w.value];return w.value=w.value+1,E}function et(_,w){const E=_.getUint8(w.value);return w.value=w.value+1,E}const D=function(_,w){const E=Number(_.getBigInt64(w.value,!0));return w.value+=8,E};function xe(_,w){const E=_.getFloat32(w.value,!0);return w.value+=4,E}function _e(_,w){return hf.toHalfFloat(xe(_,w))}function N(_){const w=(_&31744)>>10,E=_&1023;return(_>>15?-1:1)*(w?w===31?E?NaN:1/0:Math.pow(2,w-15)*(1+E/1024):6103515625e-14*(E/1024))}function ge(_,w){const E=_.getUint16(w.value,!0);return w.value+=2,E}function Ue(_,w){return N(ge(_,w))}function ct(_,w,E,L){const G=E.value,O=[];for(;E.value<G+L-1;){const j=Se(w,E),re=Re(_,E),fe=et(_,E);E.value+=3;const oe=Re(_,E),ce=Re(_,E);O.push({name:j,pixelType:re,pLinear:fe,xSampling:oe,ySampling:ce})}return E.value+=1,O}function Mt(_,w){const E=xe(_,w),L=xe(_,w),G=xe(_,w),O=xe(_,w),j=xe(_,w),re=xe(_,w),fe=xe(_,w),oe=xe(_,w);return{redX:E,redY:L,greenX:G,greenY:O,blueX:j,blueY:re,whiteX:fe,whiteY:oe}}function On(_,w){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],L=et(_,w);return E[L]}function xt(_,w){const E=Pe(_,w),L=Pe(_,w),G=Pe(_,w),O=Pe(_,w);return{xMin:E,yMin:L,xMax:G,yMax:O}}function En(_,w){const E=["INCREASING_Y"],L=et(_,w);return E[L]}function on(_,w){const E=xe(_,w),L=xe(_,w);return[E,L]}function kl(_,w){const E=xe(_,w),L=xe(_,w),G=xe(_,w);return[E,L,G]}function Sr(_,w,E,L,G){if(L==="string"||L==="stringvector"||L==="iccProfile")return ie(w,E,G);if(L==="chlist")return ct(_,w,E,G);if(L==="chromaticities")return Mt(_,E);if(L==="compression")return On(_,E);if(L==="box2i")return xt(_,E);if(L==="lineOrder")return En(_,E);if(L==="float")return xe(_,E);if(L==="v2f")return on(_,E);if(L==="v3f")return kl(_,E);if(L==="int")return Re(_,E);if(L==="rational")return Oe(_,E);if(L==="timecode")return We(_,E);if(L==="preview")return E.value+=G,"skipped";E.value+=G}function Fo(_,w,E){const L={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.");L.version=_.getUint8(4);const G=_.getUint8(5);L.spec={singleTile:!!(G&2),longName:!!(G&4),deepFormat:!!(G&8),multiPart:!!(G&16)},E.value=8;let O=!0;for(;O;){const j=Se(w,E);if(j==0)O=!1;else{const re=Se(w,E),fe=Pe(_,E),oe=Sr(_,w,E,re,fe);oe===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${re}'.`):L[j]=oe}}if((G&-5)!=0)throw console.error("EXRHeader:",L),new Error("THREE.EXRLoader: provided file is currently unsupported.");return L}function Ol(_,w,E,L,G){const O={size:0,viewer:w,array:E,offset:L,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,channels:_.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:_.channels[0].pixelType,uncompress:null,getter:null,format:null,encoding:null};switch(_.compression){case"NO_COMPRESSION":O.lines=1,O.uncompress=S;break;case"RLE_COMPRESSION":O.lines=1,O.uncompress=Y;break;case"ZIPS_COMPRESSION":O.lines=1,O.uncompress=ue;break;case"ZIP_COMPRESSION":O.lines=16,O.uncompress=ue;break;case"PIZ_COMPRESSION":O.lines=32,O.uncompress=we;break;case"PXR24_COMPRESSION":O.lines=16,O.uncompress=Ee;break;case"DWAA_COMPRESSION":O.lines=32,O.uncompress=He;break;case"DWAB_COMPRESSION":O.lines=256,O.uncompress=He;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}if(O.scanlineBlockSize=O.lines,O.type==1)switch(G){case zn:O.getter=Ue,O.inputSize=2;break;case ri:O.getter=ge,O.inputSize=2;break}else if(O.type==2)switch(G){case zn:O.getter=xe,O.inputSize=4;break;case ri:O.getter=_e,O.inputSize=4}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+_.compression+".");O.blockCount=(_.dataWindow.yMax+1)/O.scanlineBlockSize;for(let re=0;re<O.blockCount;re++)D(w,L);O.outputChannels=O.channels==3?4:O.channels;const j=O.width*O.height*O.outputChannels;switch(G){case zn:O.byteArray=new Float32Array(j),O.channels<O.outputChannels&&O.byteArray.fill(1,0,j);break;case ri:O.byteArray=new Uint16Array(j),O.channels<O.outputChannels&&O.byteArray.fill(15360,0,j);break;default:console.error("THREE.EXRLoader: unsupported type: ",G);break}return O.bytesPerLine=O.width*O.inputSize*O.channels,O.outputChannels==4?(O.format=Ln,O.encoding=ui):(O.format=Wp,O.encoding=ui),O}const Cr=new DataView(e),Fl=new Uint8Array(e),C={value:0},H=Fo(Cr,e,C),z=Ol(H,Cr,Fl,C,this.type),B={value:0},Z={R:0,G:1,B:2,A:3,Y:0};for(let _=0;_<z.height/z.scanlineBlockSize;_++){const w=Pe(Cr,C);z.size=Pe(Cr,C),z.lines=w+z.scanlineBlockSize>z.height?z.height-w:z.scanlineBlockSize;const L=z.size<z.lines*z.bytesPerLine?z.uncompress(z):S(z);C.value+=z.size;for(let G=0;G<z.scanlineBlockSize;G++){const O=G+_*z.scanlineBlockSize;if(O>=z.height)break;for(let j=0;j<z.channels;j++){const re=Z[H.channels[j].name];for(let fe=0;fe<z.width;fe++){B.value=(G*(z.channels*z.width)+j*z.width+fe)*z.inputSize;const oe=(z.height-1-O)*(z.width*z.outputChannels)+fe*z.outputChannels+re;z.byteArray[oe]=z.getter(L,B)}}}}return{header:H,width:z.width,height:z.height,data:z.byteArray,format:z.format,encoding:z.encoding,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(o,a){o.encoding=a.encoding,o.minFilter=Wt,o.magFilter=Wt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,i,r)}}const LI=Object.freeze(Object.defineProperty({__proto__:null,EXRLoader:PI},Symbol.toStringTag,{value:"Module"}));class DI extends $n{constructor({majorRadius:e=1,minorRadius:t=.15,numCoils:i=7,stretch:r=0,scale:s=1}){super(),this.majorRadius=e,this.minorRadius=t,this.numCoils=i,this.stretch=r,this.scale=s,this.yMax=this.numCoils*this.minorRadius*2+this.stretch}getPoint(e,t=new P){const i=e*this.numCoils*2*Math.PI,r=Math.cos(i)*this.majorRadius,s=e*this.yMax,o=Math.sin(i)*this.majorRadius;return t.set(r,s,o).multiplyScalar(this.scale)}}const Bs=()=>new Qr;function NI({gradientSteps:n=64}){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,n,0);return i.addColorStop(0,"black"),i.addColorStop(1,"white"),t.fillStyle=i,t.fillRect(0,0,n,n),e}function kI(){const n=document.createElement("canvas");n.width=64,n.height=64;const e=n.getContext("2d");return e.beginPath(),e.arc(32,32,29,0,2*Math.PI),e.lineWidth=5,e.stroke(),e.fillStyle="white",e.fill(),n}class yn{static spring({majorRadius:e=1,minorRadius:t=.15,numCoils:i=7,stretch:r=0,scale:s=1,tubularSegments:o,radiusSegments:a,closed:c,material:l},h){const u=new DI({majorRadius:e,minorRadius:t,numCoils:i,stretch:r,scale:s}),d=new Dh(u,o,t,a,c);if(h)h.geometry.dispose(),h.geometry=d;else return l||(l=Bs()),new at(d,l)}static torus({majorRadius:e,minorRadius:t,radialSegments:i,tubularSegments:r,arc:s,material:o},a){const c=new Lh(e,t,i,r,s);if(a)a.geometry.dispose(),a.geometry=c;else return o||(o=Bs()),new at(c,o)}static cylinder({radius:e,radiusTop:t,radiusBottom:i,height:r,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:l,material:h}){const u=new Rh(t||e,i||e,r,s,o,a,c,l);return h||(h=Bs()),new at(u,h)}static sphere({radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a,material:c}){const l=new Ph(e,t,i,r,s,o,a);return c||(c=Bs()),new at(l,c)}static cube({width:e,height:t,depth:i,material:r}){const s=new zi(e,t,i);return r||(r=Bs()),new at(s,r)}static xrPointerSimple({length:e=.5}){const t=new sn;t.setAttribute("position",new It([0,0,0,0,0,-e],3)),t.setAttribute("color",new It([.5,.5,.5,0,0,0],3));const i=new hm({vertexColors:!0,blending:Hc});return new x1(t,i)}static xrPointer({gradientSteps:e=64}){const t=new rl({color:16777215,alphaMap:new Zc(NI({gradientSteps:e})),transparent:!0}),i=new zi(.004,.004,.35);i.translate(0,0,-.15);const r=i.attributes.uv;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o);[a,c]=(()=>{switch(o){case 0:return[1,1];case 1:return[0,0];case 2:return[1,1];case 3:return[0,0];case 4:return[0,0];case 5:return[1,1];case 6:return[0,0];case 7:return[1,1];case 8:return[0,0];case 9:return[0,0];case 10:return[1,1];case 11:return[1,1];case 12:return[1,1];case 13:return[1,1];case 14:return[0,0];case 15:return[0,0];default:return[0,0]}})(),r.setXY(o,a,c)}const s=new at(i,t);return s.renderOrder=1/0,s}static xrPointerDot(){const e=new lm({map:new Zc(kI()),sizeAttenuation:!1,depthTest:!1}),t=new w1(e);return t.scale.set(.015,.015,1),t.renderOrder=1/0,t}}class OI{constructor(){this.loader=new pm,this.textures={}}clear(e){if(this.textures[e])for(let[,t]of Object.entries(this.textures[e]))t instanceof rn&&t.dispose();this.textures[e]={}}load(e,t){this.clear(t);for(const i of e){let r;i.includes("Color")?r="map":i.includes("Displacement")?r="displacementMap":i.includes("NormalGL")?r="normalMap":i.includes("Roughness")?r="roughnessMap":i.includes("Opacity")?r="alphaMap":i.includes("Metalness")&&(r="metalnessMap"),this.textures[t][r]={val:this.loader.load(i)},this.textures[t][r].wrapS=ro,this.textures[t][r].wrapT=ro}}setPBRMaps(e,t,i=1,r=1){for(let[s,o]of Object.entries(this.textures[e]))t[s]=o.val;t.transparent=!0,t.opacity=1,t.roughness=1,t.metalness=this.textures[e].metalnessMap?1:0,t.displacementScale=i,t.displacementBias=t.displacementScale/2,t.normalScale.set(r,r)}applyNewTexture(e,t,i,r=1,s=1){Object.keys(this.textures).includes(t)||this.load(i,t);for(let o of e)!o||(this.setPBRMaps(t,o.material,0,1),o.material.map.repeat.set(o.scale.x*r,o.scale.y*s))}}class FI extends Jc{constructor(e){super();const t=new zi;t.deleteAttribute("uv");const i=new Qr({side:mn}),r=new Qr,s=new $1(16777215,5,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new at(t,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const a=new at(t,r);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const c=new at(t,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const l=new at(t,r);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const h=new at(t,r);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);const u=new at(t,r);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new at(t,r);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new at(t,qr(50*e));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const g=new at(t,qr(50*e));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const m=new at(t,qr(17*e));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new at(t,qr(43*e));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const v=new at(t,qr(20*e));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const b=new at(t,qr(100*e));b.position.set(0,20,0),b.scale.set(1,.1,1),this.add(b)}}function qr(n){const e=new rl;return e.color.setScalar(n),e}const UI=Object.freeze(Object.defineProperty({__proto__:null,RoomEnvironment:FI},Symbol.toStringTag,{value:"Module"}));var or,qs;class xh{constructor(){Bo(this,or);this.reset()}reset(){this.mark=this.pauseMark=Xi(this,or,qs).call(this),this.paused=!1}pause(){this.paused||(this.pauseMark=Xi(this,or,qs).call(this),this.paused=!0)}resume(){if(this.paused){let e=Xi(this,or,qs).call(this)-this.pauseMark;this.mark=this.mark+e,this.pauseMark=this.mark,this.paused=!1}}elapsed(){var e=Xi(this,or,qs).call(this)-this.mark;return e}elapsedMSec(){return this.elapsed()*1e3}expired(e){return this.elapsed()>=e}expiredMSec(e){return this.expired(e/1e3)}}or=new WeakSet,qs=function(){return performance.now()/1e3};class BI{constructor(e=gn("stateList"),t=()=>{}){this.names=e,this.count=e.length,this.current=0,this.last=0,this.stack=[],this.onceExecuted=!1;for(var i=0;i<this.count;i++)this[e[i]]=i;this.timer=new xh,this.stateChangeFunc=t,console.log(`State: ${this.names[this.current]}`)}once(e){if(!this.onceExecuted)return this.onceExecuted=!0,e()}next(e){this.current!==e&&(console.log(`State: ${this.names[this.current]} > ${this.names[e]} /
      (${Math.round(this.timer.elapsedMSec())} ms)`),this.timer.reset(),this.last=this.current,this.current=e,this.onceExecuted=!1,this.stateChangeFunc())}push(e){this.current!==e&&(this.stack.push(this.current),this.next(e))}pop(){var e;this.stack.length>0&&(e=this.stack.pop(),this.next(e))}elapsed(){return this.timer.elapsed()}elapsedMSec(){return this.timer.elapsedMSec()}expired(e){return this.timer.expired(e)}expiredMSec(e){return this.timer.expiredMSec(e)}}class zI extends nt{constructor(e){let t=e||`<div id="survey-content" class="weblab-component-div">
        <h4 style="margin-block: 0;">
          Nice work, you're almost done! Just a few demographic questions:
        </h4>
        <form id="survey-form">
          <p class="survey-q" id="age">How old are you?</p>
          <input
            class="survey-input"
            type="number"
            name="age"
            min="18"
            max="120"
            placeholder="18+"
            required />

          <p class="survey-q" id="gender">What is your gender?</p>
          <select name="gender" class="survey-input" required>
            <option value="" disabled selected>Select your response</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="N">Nonbinary</option>
            <option value="X">Prefer not to say</option>
          </select>

          <p class="survey-q" id="inputdevice">
            Are you using a mouse or a trackpad?
          </p>
          <select name="inputdevice" class="survey-input" required>
            <option value="" disabled selected>Select your response</option>
            <option value="M">Mouse</option>
            <option value="T">Trackpad</option>
          </select>

          <p class="survey-q" id="hand">
            Which hand to do you use to control the mouse/trackpad?
          </p>
          <select name="hand" class="survey-input" required>
            <option value="" disabled selected>Select your response</option>
            <option value="R">Right</option>
            <option value="L">Left</option>
          </select>

          <div>
            <button class="button" id="survey-button" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>`;super({element:t,hide:!0,parent:document.getElementById("screen")}),document.getElementById("survey-form").addEventListener("submit",this.handleSubmit.bind(this))}handleSubmit(e){e.preventDefault();const t=new FormData(e.target),i=Object.fromEntries(t.entries());document.getElementById("survey-button").disabled=!0;const r=new CustomEvent("surveysubmitted",{bubbles:!0,cancelable:!0,detail:{survey:i}});this.dom.dispatchEvent(r)}}var $t={};$t.d=(n,e)=>{for(var t in e)$t.o(e,t)&&!$t.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})};$t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);$t.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var vn={};$t.d(vn,{g1:()=>El,gO:()=>no,km:()=>Ml,zV:()=>wo,ol:()=>Wu,uM:()=>Tl,N1:()=>a0,xv:()=>Hu,PH:()=>Il,UH:()=>Al,ZP:()=>mR,Vx:()=>l0});var Ml={};$t.r(Ml);$t.d(Ml,{COLUMN:()=>Rl,COLUMN_REVERSE:()=>z_,ROW:()=>to,ROW_REVERSE:()=>B_,contentDirection:()=>H_});var El={};$t.r(El);$t.d(El,{CENTER:()=>Au,END:()=>Iu,START:()=>Tu,STRETCH:()=>W_,alignItems:()=>V_,warnAboutDeprecatedAlignItems:()=>G_});var Tl={};$t.r(Tl);$t.d(Tl,{CENTER:()=>Pu,END:()=>Lu,SPACE_AROUND:()=>Du,SPACE_BETWEEN:()=>Nu,SPACE_EVENLY:()=>ku,START:()=>Ru,justifyContent:()=>q_});var Al={};$t.r(Al);$t.d(Al,{NORMAL:()=>Pl,NOWRAP:()=>Oo,PRE:()=>Ll,PRE_LINE:()=>Es,PRE_WRAP:()=>Dl,WHITE_CHARS:()=>bh,collapseWhitespaceOnInlines:()=>Y_,collapseWhitespaceOnString:()=>$_,newlineBreakability:()=>j_,shouldBreak:()=>X_});var Il={};$t.r(Il);$t.d(Il,{CENTER:()=>Fu,JUSTIFY:()=>Uu,JUSTIFY_CENTER:()=>e0,JUSTIFY_LEFT:()=>Q_,JUSTIFY_RIGHT:()=>Qa,LEFT:()=>J_,RIGHT:()=>Z_,textAlign:()=>t0});var HI=n=>{var e={};return $t.d(e,n),e};const Ze=HI({BufferAttribute:()=>Sn,BufferGeometry:()=>sn,CanvasTexture:()=>Zc,Color:()=>Qe,FileLoader:()=>fm,LinearFilter:()=>Wt,Mesh:()=>at,Object3D:()=>Gt,Plane:()=>Ei,PlaneGeometry:()=>sl,ShaderMaterial:()=>Hi,TextureLoader:()=>pm,Vector2:()=>De,Vector3:()=>P}),to="row",B_="row-reverse",Rl="column",z_="column-reverse";function H_(n,e,t,i){let r=t,s="getWidth",o="x",a="y";e.indexOf(Rl)===0&&(s="getHeight",o="y",a="x");for(let c=0;c<n.childrenBoxes.length;c++){const l=n.childrenBoxes[c],h=l.id,u=l[s](),d=l.margin||0;r+=d*i,n.childrenPos[h]={[o]:r+u/2*i,[a]:0},r+=i*(u+d)}}const Tu="start",Au="center",Iu="end",W_="stretch";function V_(n,e){const t=n.getAlignItems();WI.indexOf(t)===-1&&console.warn(`alignItems === '${t}' is not supported`);let i="getWidth",r="x";e.indexOf(to)===0&&(i="getHeight",r="y");const s=n[i]()/2-(n.padding||0);n.childrenBoxes.forEach(o=>{let a;switch(t){case Iu:case"right":case"bottom":e.indexOf(to)===0?a=-s+o[i]()/2+(o.margin||0):a=s-o[i]()/2-(o.margin||0);break;case Tu:case"left":case"top":e.indexOf(to)===0?a=s-o[i]()/2-(o.margin||0):a=-s+o[i]()/2+(o.margin||0);break}n.childrenPos[o.id][r]=a||0})}function G_(n){VI.indexOf(n)!==-1&&console.warn(`alignItems === '${n}' is deprecated and will be remove in 7.x.x. Fallback are 'start'|'end'`)}const WI=[Tu,Au,Iu,W_,"top","right","bottom","left"],VI=["top","right","bottom","left"],Ru="start",Pu="center",Lu="end",Du="space-around",Nu="space-between",ku="space-evenly";function q_(n,e,t,i){const r=n.getJustifyContent();GI.indexOf(r)===-1&&console.warn(`justifyContent === '${r}' is not supported`);const s=e.indexOf("row")===0?"width":"height",o=n.getChildrenSideSum(s),c=(s==="width"?n.getInnerWidth():n.getInnerHeight())-o,l=t*2-o*Math.sign(t),h=qI(r,l),u=$I(n.childrenBoxes,c,r,i),d=e.indexOf("row")===0?"x":"y";n.childrenBoxes.forEach((f,g)=>{n.childrenPos[f.id][d]-=h-u[g]})}const GI=[Ru,Pu,Lu,Du,Nu,ku];function qI(n,e){switch(n){case Lu:return e;case Pu:return e/2}return 0}function $I(n,e,t,i){const r=Array(n.length).fill(0);if(e>0)switch(t){case Nu:if(n.length>1){const s=e/(n.length-1)*i;r[0]=0;for(let o=1;o<n.length;o++)r[o]=s*o}break;case ku:if(n.length>1){const s=e/(n.length+1)*i;for(let o=0;o<n.length;o++)r[o]=s*(o+1)}break;case Du:if(n.length>1){const s=e/n.length*i,o=s/2;r[0]=o;for(let a=1;a<n.length;a++)r[a]=o+s*a}break}return r}function Ou(n){return class extends n{constructor(t){super(t),this.isBoxComponent=!0,this.childrenPos={}}getInnerWidth(){const t=this.getContentDirection();switch(t){case"row":case"row-reverse":return this.width-(this.padding*2||0)||this.getChildrenSideSum("width");case"column":case"column-reverse":return this.getHighestChildSizeOn("width");default:console.error(`Invalid contentDirection : ${t}`);break}}getInnerHeight(){const t=this.getContentDirection();switch(t){case"row":case"row-reverse":return this.getHighestChildSizeOn("height");case"column":case"column-reverse":return this.height-(this.padding*2||0)||this.getChildrenSideSum("height");default:console.error(`Invalid contentDirection : ${t}`);break}}getChildrenSideSum(t){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin*2||0,o=t==="width"?r.getWidth()+s:r.getHeight()+s;return i+o},0)}setPosFromParentRecords(){this.parentUI&&this.parentUI.childrenPos[this.id]&&(this.position.x=this.parentUI.childrenPos[this.id].x,this.position.y=this.parentUI.childrenPos[this.id].y)}computeChildrenPosition(){if(this.children.length>0){const t=this.getContentDirection();let i;switch(t){case to:i=-this.getInnerWidth()/2;break;case B_:i=this.getInnerWidth()/2;break;case Rl:i=this.getInnerHeight()/2;break;case z_:i=-this.getInnerHeight()/2;break}const r=-Math.sign(i);H_(this,t,i,r),q_(this,t,i,r),V_(this,t)}}getHighestChildSizeOn(t){return this.childrenBoxes.reduce((i,r)=>{const s=r.margin||0,o=t==="width"?r.getWidth()+s*2:r.getHeight()+s*2;return Math.max(i,o)},0)}getWidth(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("column")!==-1?this.parentUI.getWidth()-(this.parentUI.padding*2||0):this.width||this.getInnerWidth()+(this.padding*2||0)}getHeight(){return this.parentUI&&this.parentUI.getAlignItems()==="stretch"&&this.parentUI.getContentDirection().indexOf("row")!==-1?this.parentUI.getHeight()-(this.parentUI.padding*2||0):this.height||this.getInnerHeight()+(this.padding*2||0)}}}const bh={"	":"	","\n":`
`,"\r":"\r"," ":" "},Pl="normal",Oo="nowrap",Ll="pre",Es="pre-line",Dl="pre-wrap",$_=function(n,e){switch(e){case Oo:case Pl:n=n.replace(/\n/g," ");case Es:n=n.replace(/[ ]{2,}/g," ");break}return n},j_=function(n){switch(n){case Ll:case Dl:case Es:return"mandatory"}},X_=function(n,e,t,i){const r=n[e];switch(i.WHITESPACE){case Pl:case Es:case Dl:if(r.lineBreak==="mandatory")return!0;const s=r.kerning?r.kerning:0,o=r.xoffset?r.xoffset:0,a=r.xadvance?r.xadvance:r.width;if(t+a+o+s>i.INNER_WIDTH)return!0;const c=K_(n,e,i);return jI(n[e-1],t,c,i);case Ll:return r.lineBreak==="mandatory";case Oo:default:return!1}},Y_=function(n,e){const t=n[0],i=n[n.length-1];switch(e){case Dl:t.glyph&&t.glyph===`
`&&n.length>1&&Dp([t],n[1]),i.glyph&&i.glyph===`
`&&n.length>1&&Lp([i],n[n.length-2]);break;case Es:case Oo:case Pl:let r=[],s;for(let o=0;o<n.length;o++){const a=n[o];if(a.glyph&&bh[a.glyph]&&n.length>o){r.push(a),s=n[o+1];continue}break}Dp(r,s),r=[],s=null;for(let o=n.length-1;o>0;o--){const a=n[o];if(a.glyph&&bh[a.glyph]&&o>0){r.push(a),s=n[o-1];continue}break}Lp(r,s);break;case Ll:break;default:return console.warn(`whiteSpace: '${e}' is not valid`),0}return t.offsetX};function Lp(n,e){if(!!e)for(let t=0;t<n.length;t++){const i=n[t];i.width=0,i.height=0,i.offsetX=e.offsetX+e.width}}function Dp(n,e){if(!!e)for(let t=0;t<n.length;t++){const i=n[t];i.width=0,i.height=0,i.offsetX=e.offsetX}}function K_(n,e,t,i){if(i=i||0,!n[e])return i;const r=n[e],s=r.kerning?r.kerning:0,o=r.xoffset?r.xoffset:0,a=r.xadvance?r.xadvance:r.width;return r.lineBreak?i+a:K_(n,e+1,t,i+a+t.LETTERSPACING+o+s)}function jI(n,e,t,i){return!n||!n.glyph||e+t<i.INNER_WIDTH?!1:i.BREAKON.indexOf(n.glyph)>-1}const J_="left",Z_="right",Fu="center",Uu="justify",Q_="justify-left",Qa="justify-right",e0="justify-center";function t0(n,e,t){for(let i=0;i<n.length;i++){const r=n[i],s=XI(r,e,t,i===n.length-1);for(let o=0;o<r.length;o++)r[o].offsetX+=s}if(e.indexOf(Uu)===0)for(let i=0;i<n.length;i++){const r=n[i];if(e.indexOf("-")!==-1&&i===n.length-1)return;const s=t-r.width;if(s<=0)return;let o=0;for(let h=1;h<r.length-1;h++)o+=r[h].glyph===" "?1:0;const a=s/o;let c=1;e===Qa&&(r.reverse(),c=-1);let l=0;for(let h=1;h<=r.length-1;h++){const u=r[h];u.offsetX+=l*c,l+=u.glyph===" "?a:0}e===Qa&&r.reverse()}}const XI=(n,e,t,i)=>{switch(e){case Q_:case Uu:case J_:return-t/2;case Qa:case Z_:return-n.width+t/2;case Fu:return-n.width/2;case e0:return i?-n.width/2:-t/2;default:console.warn(`textAlign: '${e}' is not valid`)}};function n0(n){return class extends n{computeInlinesPosition(){const t=this.getWidth()-(this.padding*2||0),i=this.getHeight()-(this.padding*2||0),r=this.getJustifyContent(),s=this.getTextAlign(),o=this.getInterLine(),a=this.computeLines();let c=a.reduce((h,u,d,f)=>{const g=u.lineHeight-u.lineBase;return u.forEach(m=>{m.offsetY=h-u.lineHeight+g+f[0].lineHeight}),h-u.lineHeight-o},0)+o;c=Math.abs(c);const l=(()=>{switch(r){case"start":return i/2-a[0].lineHeight;case"end":return c-a[0].lineHeight-i/2+(a[a.length-1].lineHeight-a[a.length-1].lineHeight);case"center":return c/2-a[0].lineHeight;default:console.warn(`justifyContent: '${r}' is not valid`)}})();a.forEach(h=>{h.forEach(u=>{u.offsetY+=l})}),t0(a,s,t),this.lines=a}calculateBestFit(t){if(this.childrenInlines.length!==0)switch(t){case"grow":this.calculateGrowFit();break;case"shrink":this.calculateShrinkFit();break;case"auto":this.calculateAutoFit();break}}calculateGrowFit(){const t=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(h=>h.isText);let o=1,a=2,c=s._fitFontSize?s._fitFontSize/s.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t){if(c<=o){this.childrenInlines.forEach(h=>{h.isInlineBlock||(h._fitFontSize=h.getFontSize())});break}a=c,c-=(a-o)/2}else{if(Math.abs(t-l)<r)break;Math.abs(c-a)<5e-10&&(a*=2),o=c,c+=(a-o)/2}while(++i<=10)}calculateShrinkFit(){const t=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(h=>h.isText);let o=0,a=1,c=s._fitFontSize?s._fitFontSize/s.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t)a=c,c-=(a-o)/2;else{if(c>=a){this.childrenInlines.forEach(h=>{h.isInlineBlock||(h._fitFontSize=h.getFontSize())});break}if(Math.abs(t-l)<r)break;o=c,c+=(a-o)/2}while(++i<=10)}calculateAutoFit(){const t=this.getHeight()-(this.padding*2||0);let i=1;const r=.075,s=this.childrenInlines.find(h=>h.isText);let o=0,a=2,c=s._fitFontSize?s._fitFontSize/s.getFontSize():1,l;do if(l=this.calculateHeight(c),l>t)a=c,c-=(a-o)/2;else{if(Math.abs(t-l)<r)break;Math.abs(c-a)<5e-10&&(a*=2),o=c,c+=(a-o)/2}while(++i<=10)}computeLines(){const t=this.getWidth()-(this.padding*2||0),i=[[]];return this.childrenInlines.reduce((r,s)=>{if(!s.inlines)return;const o=s._fitFontSize||s.getFontSize(),a=s.isText?s.getLetterSpacing()*o:0,c=s.getWhiteSpace(),l=s.getBreakOn(),h={WHITESPACE:c,LETTERSPACING:a,BREAKON:l,INNER_WIDTH:t};return s.inlines.reduce((d,f,g,m)=>{const p=f.kerning?f.kerning:0,v=f.xoffset?f.xoffset:0,b=f.xadvance?f.xadvance:f.width;return X_(m,g,d,h)?(i.push([f]),f.offsetX=v,f.width===0?0:b+a):(i[i.length-1].push(f),f.offsetX=d+v+p,d+b+p+a)},r)},0),i.forEach(r=>{if(r.lineHeight=r.reduce((o,a)=>{const c=a.lineHeight!==void 0?a.lineHeight:a.height;return Math.max(o,c)},0),r.lineBase=r.reduce((o,a)=>{const c=a.lineBase!==void 0?a.lineBase:a.height;return Math.max(o,c)},0),r.width=0,r[0]){const o=this.getWhiteSpace(),a=Y_(r,o);r.forEach(c=>{c.offsetX-=a}),r.width=this.computeLineWidth(r)}}),i}calculateHeight(t){this.childrenInlines.forEach(o=>{o.isInlineBlock||(o._fitFontSize=o.getFontSize()*t,o.calculateInlines(o._fitFontSize))});const i=this.computeLines(),r=this.getInterLine(),s=i.reduce((o,a)=>o-a.lineHeight-r,0)+r;return Math.abs(s)}computeLineWidth(t){const i=t[0],r=t[t.length-1];return r.offsetX+r.width+i.offsetX}}}const YI=new Ze.FileLoader,Sh=[],Ca={},KI=new Ze.TextureLoader,Ch=[],Ma={},Zt={};function JI(n,e){typeof e=="string"?QI(n,e):(Zt[n.id]||(Zt[n.id]={component:n}),Bu(e),Zt[n.id].json=e,n._updateFontFamily(e))}function ZI(n,e){Ch.indexOf(e)===-1&&(Ch.push(e),KI.load(e,t=>{t.generateMipmaps=!1,t.minFilter=Ze.LinearFilter,t.magFilter=Ze.LinearFilter,Ma[e]=t;for(const i of Object.keys(Zt))e===Zt[i].textureURL&&Zt[i].component._updateFontTexture(t)})),Zt[n.id]||(Zt[n.id]={component:n}),Zt[n.id].textureURL=e,Ma[e]&&n._updateFontTexture(Ma[e])}function i0(n){const e=Zt[n.id];return!e&&n.parentUI?i0(n.parentUI):e}function QI(n,e){Sh.indexOf(e)===-1&&(Sh.push(e),YI.load(e,t=>{const i=JSON.parse(t);Bu(i),Ca[e]=i;for(const r of Object.keys(Zt))e===Zt[r].jsonURL&&Zt[r].component._updateFontFamily(i)})),Zt[n.id]||(Zt[n.id]={component:n}),Zt[n.id].jsonURL=e,Ca[e]&&n._updateFontFamily(Ca[e])}function Bu(n){if(n._kernings)return;const e={};for(let t=0;t<n.kernings.length;t++){const i=n.kernings[t];if(i.amount===0)continue;const r=String.fromCharCode(i.first,i.second);e[r]=i.amount}n._kernings=e}function eR(n,e,t){t.generateMipmaps=!1,t.minFilter=Ze.LinearFilter,t.magFilter=Ze.LinearFilter,Sh.push(n),Ca[n]=e,Bu(e),t&&(Ch.push(n),Ma[n]=t)}const tR={setFontFamily:JI,setFontTexture:ZI,getFontOf:i0,addFont:eR},wo=tR;class dr{static requestUpdate(e,t,i,r){e.traverse(s=>{!s.isUI||(this.requestedUpdates[s.id]?(t&&(this.requestedUpdates[s.id].updateParsing=!0),i&&(this.requestedUpdates[s.id].updateLayout=!0),r&&(this.requestedUpdates[s.id].updateInner=!0)):this.requestedUpdates[s.id]={updateParsing:t,updateLayout:i,updateInner:r,needCallback:t||i||r})})}static register(e){this.components.includes(e)||this.components.push(e)}static disposeOf(e){const t=this.components.indexOf(e);t>-1&&this.components.splice(t,1)}static update(){if(Object.keys(this.requestedUpdates).length>0){const e=this.components.filter(t=>!t.parentUI);e.forEach(t=>this.traverseParsing(t)),e.forEach(t=>this.traverseUpdates(t))}}static traverseParsing(e){const t=this.requestedUpdates[e.id];t&&t.updateParsing&&(e.parseParams(),t.updateParsing=!1),e.childrenUIs.forEach(i=>this.traverseParsing(i))}static traverseUpdates(e){const t=this.requestedUpdates[e.id];delete this.requestedUpdates[e.id],t&&t.updateLayout&&(t.updateLayout=!1,e.updateLayout()),t&&t.updateInner&&(t.updateInner=!1,e.updateInner()),e.childrenUIs.forEach(i=>{this.traverseUpdates(i)}),t&&t.needCallback&&e.onAfterUpdate()}}dr.components=[];dr.requestedUpdates={};const qt={container:null,fontFamily:null,fontSize:.05,fontKerning:"normal",bestFit:"none",offset:.01,interLine:.01,breakOn:`- ,.:?!
`,whiteSpace:Es,contentDirection:Rl,alignItems:Au,justifyContent:Ru,textAlign:Fu,textType:"MSDF",fontColor:new Ze.Color(16777215),fontOpacity:1,fontPXRange:4,fontSupersampling:!0,borderRadius:.01,borderWidth:0,borderColor:new Ze.Color("black"),borderOpacity:1,backgroundSize:"cover",backgroundColor:new Ze.Color(2236962),backgroundWhiteColor:new Ze.Color(16777215),backgroundOpacity:.8,backgroundOpaqueOpacity:1,getDefaultTexture:nR,hiddenOverflow:!1,letterSpacing:0};let _a;function nR(){if(!_a){const n=document.createElement("canvas").getContext("2d");n.canvas.width=1,n.canvas.height=1,n.fillStyle="#ffffff",n.fillRect(0,0,1,1),_a=new Ze.CanvasTexture(n.canvas),_a.isDefault=!0}return _a}function Nl(n){return class extends n{constructor(i){super(i);bt(this,"_rebuildParentUI",()=>{this.parent&&this.parent.isUI?this.parentUI=this.parent:this.parentUI=null});this.states={},this.currentState=void 0,this.isUI=!0,this.autoLayout=!0,this.childrenUIs=[],this.childrenBoxes=[],this.childrenTexts=[],this.childrenInlines=[],this.parentUI=null,this.addEventListener("added",this._rebuildParentUI),this.addEventListener("removed",this._rebuildParentUI)}getClippingPlanes(){const i=[];if(this.parentUI){if(this.isBlock&&this.parentUI.getHiddenOverflow()){const r=this.parentUI.getHeight()/2-(this.parentUI.padding||0),s=this.parentUI.getWidth()/2-(this.parentUI.padding||0),o=[new Ze.Plane(new Ze.Vector3(0,1,0),r),new Ze.Plane(new Ze.Vector3(0,-1,0),r),new Ze.Plane(new Ze.Vector3(1,0,0),s),new Ze.Plane(new Ze.Vector3(-1,0,0),s)];o.forEach(a=>{a.applyMatrix4(this.parent.matrixWorld)}),i.push(...o)}this.parentUI.parentUI&&i.push(...this.parentUI.getClippingPlanes())}return i}getHighestParent(){return this.parentUI?this.parent.getHighestParent():this}_getProperty(i){return this[i]===void 0&&this.parentUI?this.parent._getProperty(i):this[i]!==void 0?this[i]:qt[i]}getFontSize(){return this._getProperty("fontSize")}getFontKerning(){return this._getProperty("fontKerning")}getLetterSpacing(){return this._getProperty("letterSpacing")}getFontTexture(){return this.fontTexture===void 0&&this.parentUI?this.parent._getProperty("fontTexture"):this.fontTexture!==void 0?this.fontTexture:qt.getDefaultTexture()}getFontFamily(){return this._getProperty("fontFamily")}getBreakOn(){return this._getProperty("breakOn")}getWhiteSpace(){return this._getProperty("whiteSpace")}getTextAlign(){return this._getProperty("textAlign")}getTextType(){return this._getProperty("textType")}getFontColor(){return this._getProperty("fontColor")}getFontSupersampling(){return this._getProperty("fontSupersampling")}getFontOpacity(){return this._getProperty("fontOpacity")}getFontPXRange(){return this._getProperty("fontPXRange")}getBorderRadius(){return this._getProperty("borderRadius")}getBorderWidth(){return this._getProperty("borderWidth")}getBorderColor(){return this._getProperty("borderColor")}getBorderOpacity(){return this._getProperty("borderOpacity")}getContainer(){return!this.threeOBJ&&this.parent?this.parent.getContainer():this.threeOBJ?this:qt.container}getParentsNumber(i){return i=i||0,this.parentUI?this.parentUI.getParentsNumber(i+1):i}getBackgroundOpacity(){return!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpacity:this.backgroundOpacity}getBackgroundColor(){return this.backgroundColor||qt.backgroundColor}getBackgroundTexture(){return this.backgroundTexture||qt.getDefaultTexture()}getAlignContent(){return this.alignContent||qt.alignContent}getAlignItems(){return this.alignItems||qt.alignItems}getContentDirection(){return this.contentDirection||qt.contentDirection}getJustifyContent(){return this.justifyContent||qt.justifyContent}getInterLine(){return this.interLine===void 0?qt.interLine:this.interLine}getOffset(){return this.offset===void 0?qt.offset:this.offset}getBackgroundSize(){return this.backgroundSize===void 0?qt.backgroundSize:this.backgroundSize}getHiddenOverflow(){return this.hiddenOverflow===void 0?qt.hiddenOverflow:this.hiddenOverflow}getBestFit(){return this.bestFit===void 0?qt.bestFit:this.bestFit}_rebuildChildrenLists(){this.childrenUIs=this.children.filter(i=>i.isUI),this.childrenBoxes=this.children.filter(i=>i.isBoxComponent),this.childrenInlines=this.children.filter(i=>i.isInline),this.childrenTexts=this.children.filter(i=>i.isText)}add(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.add(...arguments);return this._rebuildChildrenLists(),i}remove(){for(const r of Object.keys(arguments))arguments[r].isInline&&this.update(null,!0);const i=super.remove(...arguments);return this._rebuildChildrenLists(),i}update(i,r,s){dr.requestUpdate(this,i,r,s)}onAfterUpdate(){}_updateFontFamily(i){this.fontFamily=i,this.traverse(r=>{r.isUI&&r.update(!0,!0,!1)}),this.getHighestParent().update(!1,!0,!1)}_updateFontTexture(i){this.fontTexture=i,this.getHighestParent().update(!1,!0,!1)}set(i){let r,s,o;if(dr.register(this),!(!i||JSON.stringify(i)===JSON.stringify({}))){i.alignContent&&(i.alignItems=i.alignContent,i.textAlign||(i.textAlign=i.alignContent),console.warn("`alignContent` property has been deprecated, please rely on `alignItems` and `textAlign` instead."),delete i.alignContent),i.alignItems&&G_(i.alignItems);for(const a of Object.keys(i))if(this[a]!=i[a])switch(a){case"content":case"fontSize":case"fontKerning":case"breakOn":case"whiteSpace":this.isText&&(r=!0),s=!0,this[a]=i[a];break;case"bestFit":this.isBlock&&(r=!0,s=!0),this[a]=i[a];break;case"width":case"height":case"padding":(this.isInlineBlock||this.isBlock&&this.getBestFit()!="none")&&(r=!0),s=!0,this[a]=i[a];break;case"letterSpacing":case"interLine":this.isBlock&&this.getBestFit()!="none"&&(r=!0),s=!0,this[a]=i[a];break;case"margin":case"contentDirection":case"justifyContent":case"alignContent":case"alignItems":case"textAlign":case"textType":s=!0,this[a]=i[a];break;case"fontColor":case"fontOpacity":case"fontSupersampling":case"offset":case"backgroundColor":case"backgroundOpacity":case"backgroundTexture":case"backgroundSize":case"borderRadius":case"borderWidth":case"borderColor":case"borderOpacity":o=!0,this[a]=i[a];break;case"hiddenOverflow":this[a]=i[a];break}i.fontFamily&&wo.setFontFamily(this,i.fontFamily),i.fontTexture&&wo.setFontTexture(this,i.fontTexture),this.parentUI&&this.parentUI.getBestFit()!="none"&&this.parentUI.update(!0,!0,!1),this.update(r,s,o),s&&this.getHighestParent().update(!1,!0,!1)}}setupState(i){this.states[i.state]={attributes:i.attributes,onSet:i.onSet}}setState(i){const r=this.states[i];if(!r){console.warn(`state "${i}" does not exist within this component:`,this.name);return}i!==this.currentState&&(this.currentState=i,r.onSet&&r.onSet(),r.attributes&&this.set(r.attributes))}clear(){this.traverse(i=>{dr.disposeOf(i),i.material&&i.material.dispose(),i.geometry&&i.geometry.dispose()})}}}function zu(n){return class extends n{constructor(t){super(t),this.textUniforms={u_texture:{value:this.getFontTexture()},u_color:{value:this.getFontColor()},u_opacity:{value:this.getFontOpacity()},u_pxRange:{value:this.getFontPXRange()},u_useRGSS:{value:this.getFontSupersampling()}},this.backgroundUniforms={u_texture:{value:this.getBackgroundTexture()},u_color:{value:this.getBackgroundColor()},u_opacity:{value:this.getBackgroundOpacity()},u_backgroundMapping:{value:this.getBackgroundSize()},u_borderWidth:{value:this.getBorderWidth()},u_borderColor:{value:this.getBorderColor()},u_borderRadiusTopLeft:{value:this.getBorderRadius()},u_borderRadiusTopRight:{value:this.getBorderRadius()},u_borderRadiusBottomRight:{value:this.getBorderRadius()},u_borderRadiusBottomLeft:{value:this.getBorderRadius()},u_borderOpacity:{value:this.getBorderOpacity()},u_size:{value:new Ze.Vector2(1,1)},u_tSize:{value:new Ze.Vector2(1,1)}}}updateBackgroundMaterial(){this.backgroundUniforms.u_texture.value=this.getBackgroundTexture(),this.backgroundUniforms.u_tSize.value.set(this.backgroundUniforms.u_texture.value.image.width,this.backgroundUniforms.u_texture.value.image.height),this.size&&this.backgroundUniforms.u_size.value.copy(this.size),this.backgroundUniforms.u_texture.value.isDefault?(this.backgroundUniforms.u_color.value=this.getBackgroundColor(),this.backgroundUniforms.u_opacity.value=this.getBackgroundOpacity()):(this.backgroundUniforms.u_color.value=this.backgroundColor||qt.backgroundWhiteColor,this.backgroundUniforms.u_opacity.value=!this.backgroundOpacity&&this.backgroundOpacity!==0?qt.backgroundOpaqueOpacity:this.backgroundOpacity),this.backgroundUniforms.u_backgroundMapping.value=(()=>{switch(this.getBackgroundSize()){case"stretch":return 0;case"contain":return 1;case"cover":return 2}})();const t=this.getBorderRadius();this.backgroundUniforms.u_borderWidth.value=this.getBorderWidth(),this.backgroundUniforms.u_borderColor.value=this.getBorderColor(),this.backgroundUniforms.u_borderOpacity.value=this.getBorderOpacity(),Array.isArray(t)?(this.backgroundUniforms.u_borderRadiusTopLeft.value=t[0],this.backgroundUniforms.u_borderRadiusTopRight.value=t[1],this.backgroundUniforms.u_borderRadiusBottomRight.value=t[2],this.backgroundUniforms.u_borderRadiusBottomLeft.value=t[3]):(this.backgroundUniforms.u_borderRadiusTopLeft.value=t,this.backgroundUniforms.u_borderRadiusTopRight.value=t,this.backgroundUniforms.u_borderRadiusBottomRight.value=t,this.backgroundUniforms.u_borderRadiusBottomLeft.value=t)}updateTextMaterial(){this.textUniforms.u_texture.value=this.getFontTexture(),this.textUniforms.u_color.value=this.getFontColor(),this.textUniforms.u_opacity.value=this.getFontOpacity(),this.textUniforms.u_pxRange.value=this.getFontPXRange(),this.textUniforms.u_useRGSS.value=this.getFontSupersampling()}getBackgroundMaterial(){return(!this.backgroundMaterial||!this.backgroundUniforms)&&(this.backgroundMaterial=this._makeBackgroundMaterial()),this.backgroundMaterial}getFontMaterial(){return(!this.fontMaterial||!this.textUniforms)&&(this.fontMaterial=this._makeTextMaterial()),this.fontMaterial}_makeTextMaterial(){return new Ze.ShaderMaterial({uniforms:this.textUniforms,transparent:!0,clipping:!0,vertexShader:iR,fragmentShader:rR,extensions:{derivatives:!0}})}_makeBackgroundMaterial(){return new Ze.ShaderMaterial({uniforms:this.backgroundUniforms,transparent:!0,clipping:!0,vertexShader:sR,fragmentShader:oR,extensions:{derivatives:!0}})}updateClippingPlanes(t){const i=t!==void 0?t:this.getClippingPlanes();JSON.stringify(i)!==JSON.stringify(this.clippingPlanes)&&(this.clippingPlanes=i,this.fontMaterial&&(this.fontMaterial.clippingPlanes=this.clippingPlanes),this.backgroundMaterial&&(this.backgroundMaterial.clippingPlanes=this.clippingPlanes))}}}const iR=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;
	gl_Position.z -= 0.00001;

	#include <clipping_planes_vertex>

}
`,rR=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;
uniform float u_pxRange;
uniform bool u_useRGSS;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

// functions from the original msdf repo:
// https://github.com/Chlumsky/msdfgen#using-a-multi-channel-distance-field

float median(float r, float g, float b) {
	return max(min(r, g), min(max(r, g), b));
}

float screenPxRange() {
	vec2 unitRange = vec2(u_pxRange)/vec2(textureSize(u_texture, 0));
	vec2 screenTexSize = vec2(1.0)/fwidth(vUv);
	return max(0.5*dot(unitRange, screenTexSize), 1.0);
}

float tap(vec2 offsetUV) {
	vec3 msd = texture( u_texture, offsetUV ).rgb;
	float sd = median(msd.r, msd.g, msd.b);
	float screenPxDistance = screenPxRange() * (sd - 0.5);
	float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
	return alpha;
}

void main() {

	float alpha;

	if ( u_useRGSS ) {

		// shader-based supersampling based on https://bgolus.medium.com/sharper-mipmapping-using-shader-based-supersampling-ed7aadb47bec
		// per pixel partial derivatives
		vec2 dx = dFdx(vUv);
		vec2 dy = dFdy(vUv);

		// rotated grid uv offsets
		vec2 uvOffsets = vec2(0.125, 0.375);
		vec2 offsetUV = vec2(0.0, 0.0);

		// supersampled using 2x2 rotated grid
		alpha = 0.0;
		offsetUV.xy = vUv + uvOffsets.x * dx + uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.x * dx - uvOffsets.y * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv + uvOffsets.y * dx - uvOffsets.x * dy;
		alpha += tap(offsetUV);
		offsetUV.xy = vUv - uvOffsets.y * dx + uvOffsets.x * dy;
		alpha += tap(offsetUV);
		alpha *= 0.25;

	} else {

		alpha = tap( vUv );

	}


	// apply the opacity
	alpha *= u_opacity;

	// this is useful to avoid z-fighting when quads overlap because of kerning
	if ( alpha < 0.02) discard;


	gl_FragColor = vec4( u_color, alpha );

	#include <clipping_planes_fragment>

}
`,sR=`
varying vec2 vUv;

#include <clipping_planes_pars_vertex>

void main() {

	vUv = uv;
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	gl_Position = projectionMatrix * mvPosition;

	#include <clipping_planes_vertex>

}
`,oR=`

uniform sampler2D u_texture;
uniform vec3 u_color;
uniform float u_opacity;

uniform float u_borderRadiusTopLeft;
uniform float u_borderRadiusTopRight;
uniform float u_borderRadiusBottomLeft;
uniform float u_borderRadiusBottomRight;
uniform float u_borderWidth;
uniform vec3 u_borderColor;
uniform float u_borderOpacity;
uniform vec2 u_size;
uniform vec2 u_tSize;
uniform int u_backgroundMapping;

varying vec2 vUv;

#include <clipping_planes_pars_fragment>

float getEdgeDist() {
	vec2 ndc = vec2( vUv.x * 2.0 - 1.0, vUv.y * 2.0 - 1.0 );
	vec2 planeSpaceCoord = vec2( u_size.x * 0.5 * ndc.x, u_size.y * 0.5 * ndc.y );
	vec2 corner = u_size * 0.5;
	vec2 offsetCorner = corner - abs( planeSpaceCoord );
	float innerRadDist = min( offsetCorner.x, offsetCorner.y ) * -1.0;
	if (vUv.x < 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopLeft, 0.0 ) ) - u_borderRadiusTopLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopLeft );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y >= 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusTopRight, 0.0 ) ) - u_borderRadiusTopRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusTopRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x >= 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomRight, 0.0 ) ) - u_borderRadiusBottomRight;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomRight );
		return mix( innerRadDist, roundedDist, s );
	}
	if (vUv.x < 0.5 && vUv.y < 0.5) {
		float roundedDist = length( max( abs( planeSpaceCoord ) - u_size * 0.5 + u_borderRadiusBottomLeft, 0.0 ) ) - u_borderRadiusBottomLeft;
		float s = step( innerRadDist * -1.0, u_borderRadiusBottomLeft );
		return mix( innerRadDist, roundedDist, s );
	}
}

vec4 sampleTexture() {
	float textureRatio = u_tSize.x / u_tSize.y;
	float panelRatio = u_size.x / u_size.y;
	vec2 uv = vUv;
	if ( u_backgroundMapping == 1 ) { // contain
		if ( textureRatio < panelRatio ) { // repeat on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		} else { // repeat on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		}
	} else if ( u_backgroundMapping == 2 ) { // cover
		if ( textureRatio < panelRatio ) { // stretch on Y
			float newY = uv.y * ( textureRatio / panelRatio );
			newY += 0.5 - 0.5 * ( textureRatio / panelRatio );
			uv.y = newY;
		} else { // stretch on X
			float newX = uv.x * ( panelRatio / textureRatio );
			newX += 0.5 - 0.5 * ( panelRatio / textureRatio );
			uv.x = newX;
		}
	}
	return texture2D( u_texture, uv ).rgba;
}

void main() {

	float edgeDist = getEdgeDist();
	float change = fwidth( edgeDist );

	vec4 textureSample = sampleTexture();
	vec3 blendedColor = textureSample.rgb * u_color;

	float alpha = smoothstep( change, 0.0, edgeDist );
	float blendedOpacity = u_opacity * textureSample.a * alpha;

	vec4 frameColor = vec4( blendedColor, blendedOpacity );

	if ( u_borderWidth <= 0.0 ) {
		gl_FragColor = frameColor;
	} else {
		vec4 borderColor = vec4( u_borderColor, u_borderOpacity * alpha );
		float stp = smoothstep( edgeDist + change, edgeDist, u_borderWidth * -1.0 );
		gl_FragColor = mix( frameColor, borderColor, stp );
	}

	#include <clipping_planes_fragment>
}
`;class r0 extends Ze.Mesh{constructor(e){const t=new Ze.PlaneGeometry;super(t,e),this.castShadow=!0,this.receiveShadow=!0,this.name="MeshUI-Frame"}}let Ea=null;function vs(...n){if(!Ea)throw new Error("Cannot use mixins with Base null");let e=Ea;Ea=null;let t=n.length,i;for(;--t>=0;)i=n[t],e=i(e);return e}vs.withBase=n=>(Ea=n,vs);class no extends vs.withBase(Ze.Object3D)(Ou,n0,zu,Nl){constructor(e){super(e),this.isBlock=!0,this.size=new Ze.Vector2(1,1),this.frame=new r0(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){const e=this.getBestFit();e!="none"&&this.childrenTexts.length?this.calculateBestFit(e):this.childrenTexts.forEach(t=>{t._fitFontSize=void 0})}updateLayout(){const e=this.getWidth(),t=this.getHeight();if(!e||!t){console.warn("Block got no dimension from its parameters or from children parameters");return}this.size.set(e,t),this.frame.scale.set(e,t,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.autoLayout&&this.setPosFromParentRecords(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.parentUI&&(this.position.z=this.getOffset())}updateInner(){this.parentUI&&(this.position.z=this.getOffset()),this.frame&&this.updateBackgroundMaterial()}}function s0(n){return class extends n{constructor(t){super(t),this.isInline=!0}}}function aR(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,c=new Ze.BufferGeometry;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(c.userData.mergedUserData=c.userData.mergedUserData||[],c.userData.mergedUserData.push(u.userData),e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(const h in s){const u=Np(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let m=0;m<o[h].length;++m)f.push(o[h][m][d]);const g=Np(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Np(n){let e,t,i,r=0;for(let a=0;a<n.length;++a){const c=n[a];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;r+=c.array.length}const s=new e(r);let o=0;for(let a=0;a<n.length;++a)s.set(n[a].array,o),o+=n[a].array.length;return new Ze.BufferAttribute(s,t,i)}class lR extends Ze.PlaneGeometry{constructor(e,t){const i=e.glyph,r=e.fontSize;super(r,r),i.match(/\s/g)===null?(t.info.charset.indexOf(i)===-1&&console.error(`The character '${i}' is not included in the font characters set.`),this.mapUVs(t,i),this.transformGeometry(t,r,i,e)):(this.nullifyUVs(),this.scale(0,0,1),this.translate(0,r/2,0))}mapUVs(e,t){const i=e.chars.find(h=>h.char===t),r=e.common,s=i.x/r.scaleW,o=(i.x+i.width)/r.scaleW,a=1-(i.y+i.height)/r.scaleH,c=1-i.y/r.scaleH,l=this.attributes.uv;for(let h=0;h<l.count;h++){let u=l.getX(h),d=l.getY(h);[u,d]=(()=>{switch(h){case 0:return[s,c];case 1:return[o,c];case 2:return[s,a];case 3:return[o,a]}})(),l.setXY(h,u,d)}}nullifyUVs(){const e=this.attributes.uv;for(let t=0;t<e.count;t++)e.setXY(t,0,0)}transformGeometry(e,t,i,r){const s=e.chars.find(l=>l.char===i),o=e.common,a=s.height/o.lineHeight,c=s.width*a/s.height;this.scale(c,a,1),this.translate(r.width/2,r.height/2-r.anchor,0)}}function cR(n){const e=n.font,t=n.fontSize,i=n.glyph,r=t/e.info.size,s=e.chars.find(u=>u.char===i);let o=s?s.width*r:t/3,a=s?s.height*r:0;o===0&&(o=s?s.xadvance*r:t),a===0&&(a=t*.7),i===`
`&&(o=0);const c=s?s.xadvance*r:o,l=s?s.xoffset*r:0,h=s?(s.yoffset+s.height-e.common.base)*t/e.common.lineHeight:0;return{width:o,height:a,anchor:h,xadvance:c,xoffset:l}}function hR(n,e){const t=n._kernings;return t[e]?t[e]:0}function uR(){const n=[];this.inlines.forEach((i,r)=>{n[r]=new lR(i,this.getFontFamily()),n[r].translate(i.offsetX,i.offsetY,0)});const e=aR(n);return new Ze.Mesh(e,this.getFontMaterial())}const Bc={getGlyphDimensions:cR,getGlyphPairKerning:hR,buildText:uR};function dR(n){return class extends n{createText(){const t=this,i=(()=>{switch(this.getTextType()){case"MSDF":return Bc.buildText.call(this);default:console.warn(`'${this.getTextType()}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}})();return i.renderOrder=1/0,i.onBeforeRender=function(){t.updateClippingPlanes&&t.updateClippingPlanes()},i}getGlyphDimensions(t){switch(t.textType){case"MSDF":return Bc.getGlyphDimensions(t);default:console.warn(`'${t.textType}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}getGlyphPairKerning(t,i,r){switch(t){case"MSDF":return Bc.getGlyphPairKerning(i,r);default:console.warn(`'${t}' is not a supported text type.
See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);break}}}}function o0(n){n.children.forEach(e=>{e.children.length>0&&o0(e),n.remove(e),dr.disposeOf(e),e.material&&e.material.dispose(),e.geometry&&e.geometry.dispose()}),n.children=[]}const fR=o0;class Hu extends vs.withBase(Ze.Object3D)(s0,dR,zu,Nl){constructor(e){super(e),this.isText=!0,this.set(e)}parseParams(){this.calculateInlines(this._fitFontSize||this.getFontSize())}updateLayout(){fR(this),this.inlines&&(this.textContent=this.createText(),this.updateTextMaterial(),this.add(this.textContent)),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.textContent&&this.updateTextMaterial()}calculateInlines(e){const t=this.content,i=this.getFontFamily(),r=this.getBreakOn(),s=this.getTextType(),o=this.getWhiteSpace();if(!i||typeof i=="string"){wo.getFontOf(this)||console.warn("no font was found");return}if(!this.content){this.inlines=null;return}if(!s){console.error(`You must provide a 'textType' attribute so three-mesh-ui knows how to render your text.
 See https://github.com/felixmariotto/three-mesh-ui/wiki/Using-a-custom-text-type`);return}const a=$_(t,o),c=Array.from?Array.from(a):String(a).split(""),l=e/i.info.size,h=i.common.lineHeight*l,u=i.common.base*l,d=c.map(f=>{const g=this.getGlyphDimensions({textType:s,glyph:f,font:i,fontSize:e});let m=null;return o!==Oo&&(r.includes(f)||f.match(/\s/g))&&(m="possible"),f.match(/\n/g)&&(m=j_(o)),{height:g.height,width:g.width,anchor:g.anchor,xadvance:g.xadvance,xoffset:g.xoffset,lineBreak:m,glyph:f,fontSize:e,lineHeight:h,lineBase:u}});if(this.getFontKerning()!=="none")for(let f=1;f<d.length;f++){const g=d[f],m=d[f-1].glyph+d[f].glyph,p=this.getGlyphPairKerning(s,i,m);g.kerning=p*(e/i.info.size)}this.inlines=d}}class Wu extends vs.withBase(Ze.Object3D)(s0,Ou,n0,zu,Nl){constructor(e){super(e),this.isInlineBlock=!0,this.size=new Ze.Vector2(1,1),this.frame=new r0(this.getBackgroundMaterial()),this.frame.onBeforeRender=()=>{this.updateClippingPlanes&&this.updateClippingPlanes()},this.add(this.frame),this.set(e)}parseParams(){this.width||console.warn("inlineBlock has no width. Set to 0.3 by default"),this.height||console.warn("inlineBlock has no height. Set to 0.3 by default"),this.inlines=[{height:this.height||.3,width:this.width||.3,anchor:0,lineBreak:"possible"}]}updateLayout(){const e=this.getWidth(),t=this.getHeight();if(this.inlines){const i=this.inlines[0];this.position.set(i.width/2,i.height/2,0),this.position.x+=i.offsetX,this.position.y+=i.offsetY}this.size.set(e,t),this.frame.scale.set(e,t,1),this.frame&&this.updateBackgroundMaterial(),this.frame.renderOrder=this.getParentsNumber(),this.childrenInlines.length&&this.computeInlinesPosition(),this.computeChildrenPosition(),this.position.z=this.getOffset()}updateInner(){this.position.z=this.getOffset(),this.frame&&this.updateBackgroundMaterial()}}const Ci={fr:[[[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]}],[{width:.2,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],eng:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],ru:[[[{width:1/12,chars:[{lowerCase:"\u0439",upperCase:"\u0419"},{lowerCase:"q",upperCase:"Q"}]},{width:1/12,chars:[{lowerCase:"\u0446",upperCase:"\u0426"},{lowerCase:"w",upperCase:"W"}]},{width:1/12,chars:[{lowerCase:"\u0443",upperCase:"\u0423"},{lowerCase:"e",upperCase:"E"}]},{width:1/12,chars:[{lowerCase:"\u043A",upperCase:"\u041A"},{lowerCase:"r",upperCase:"R"}]},{width:1/12,chars:[{lowerCase:"\u0435",upperCase:"\u0415"},{lowerCase:"t",upperCase:"T"}]},{width:1/12,chars:[{lowerCase:"\u043D",upperCase:"\u041D"},{lowerCase:"y",upperCase:"Y"}]},{width:1/12,chars:[{lowerCase:"\u0433",upperCase:"\u0413"},{lowerCase:"u",upperCase:"U"}]},{width:1/12,chars:[{lowerCase:"\u0448",upperCase:"\u0428"},{lowerCase:"i",upperCase:"I"}]},{width:1/12,chars:[{lowerCase:"\u0449",upperCase:"\u0429"},{lowerCase:"o",upperCase:"O"}]},{width:1/12,chars:[{lowerCase:"\u0437",upperCase:"\u0417"},{lowerCase:"p",upperCase:"P"}]},{width:1/12,chars:[{lowerCase:"\u0445",upperCase:"\u0425"},{lowerCase:"{",upperCase:"["}]},{width:1/12,chars:[{lowerCase:"\u044A",upperCase:"\u042A"},{lowerCase:"}",upperCase:"]"}]}],[{width:1/12,chars:[{lowerCase:"\u0444",upperCase:"\u0424"},{lowerCase:"a",upperCase:"A"}]},{width:1/12,chars:[{lowerCase:"\u044B",upperCase:"\u042B"},{lowerCase:"s",upperCase:"S"}]},{width:1/12,chars:[{lowerCase:"\u0432",upperCase:"\u0412"},{lowerCase:"d",upperCase:"D"}]},{width:1/12,chars:[{lowerCase:"\u0430",upperCase:"\u0410"},{lowerCase:"f",upperCase:"F"}]},{width:1/12,chars:[{lowerCase:"\u043F",upperCase:"\u041F"},{lowerCase:"g",upperCase:"G"}]},{width:1/12,chars:[{lowerCase:"\u0440",upperCase:"\u0420"},{lowerCase:"h",upperCase:"H"}]},{width:1/12,chars:[{lowerCase:"\u043E",upperCase:"\u041E"},{lowerCase:"j",upperCase:"J"}]},{width:1/12,chars:[{lowerCase:"\u043B",upperCase:"\u041B"},{lowerCase:"k",upperCase:"K"}]},{width:1/12,chars:[{lowerCase:"\u0434",upperCase:"\u0414"},{lowerCase:"l",upperCase:"L"}]},{width:1/12,chars:[{lowerCase:"\u0436",upperCase:"\u0416"},{lowerCase:":",upperCase:";"}]},{width:1/12,chars:[{lowerCase:"\u044D",upperCase:"\u042D"},{lowerCase:'"',upperCase:"'"}]},{width:1/12,chars:[{lowerCase:"\u0451",upperCase:"\u0401"},{lowerCase:"|",upperCase:"\\"}]}],[{width:1.5/12,command:"shift",chars:[{icon:"shift"}]},{width:1/12,chars:[{lowerCase:"\u044F",upperCase:"\u042F"},{lowerCase:"z",upperCase:"Z"}]},{width:1/12,chars:[{lowerCase:"\u0447",upperCase:"\u0427"},{lowerCase:"x",upperCase:"X"}]},{width:1/12,chars:[{lowerCase:"\u0441",upperCase:"\u0421"},{lowerCase:"c",upperCase:"C"}]},{width:1/12,chars:[{lowerCase:"\u043C",upperCase:"\u041C"},{lowerCase:"v",upperCase:"V"}]},{width:1/12,chars:[{lowerCase:"\u0438",upperCase:"\u0418"},{lowerCase:"b",upperCase:"B"}]},{width:1/12,chars:[{lowerCase:"\u0442",upperCase:"\u0422"},{lowerCase:"n",upperCase:"N"}]},{width:1/12,chars:[{lowerCase:"\u044C",upperCase:"\u042C"},{lowerCase:"m",upperCase:"M"}]},{width:1/12,chars:[{lowerCase:"\u0431",upperCase:"\u0411"},{lowerCase:",",upperCase:""}]},{width:1/12,chars:[{lowerCase:"\u044E",upperCase:"\u042E"},{lowerCase:".",upperCase:""}]},{width:1.5/12,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.3,command:"switch",chars:[{lowerCase:"\u0410\u0411\u0412"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],de:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"\xFC",upperCase:"\xDC"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"\xF6",upperCase:"\xD6"}]},{width:1/11,chars:[{lowerCase:"\xE4",upperCase:"\xC4"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],es:[[[{width:.1,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"l",upperCase:"L"}]},{width:.1,chars:[{lowerCase:"\xF1",upperCase:"\xD1"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],el:[[[{width:.1,chars:[{lowerCase:";",upperCase:":"},{lowerCase:"q",upperCase:"Q"}]},{width:.1,chars:[{lowerCase:"\u03C2",upperCase:"\u03C2"},{lowerCase:"w",upperCase:"W"}]},{width:.1,chars:[{lowerCase:"\u03B5",upperCase:"\u0395"},{lowerCase:"e",upperCase:"E"}]},{width:.1,chars:[{lowerCase:"\u03C1",upperCase:"\u03A1"},{lowerCase:"r",upperCase:"R"}]},{width:.1,chars:[{lowerCase:"\u03C4",upperCase:"\u03A4"},{lowerCase:"t",upperCase:"T"}]},{width:.1,chars:[{lowerCase:"\u03C5",upperCase:"\u03A5"},{lowerCase:"y",upperCase:"Y"}]},{width:.1,chars:[{lowerCase:"\u03B8",upperCase:"\u0398"},{lowerCase:"u",upperCase:"U"}]},{width:.1,chars:[{lowerCase:"\u03B9",upperCase:"\u0399"},{lowerCase:"i",upperCase:"I"}]},{width:.1,chars:[{lowerCase:"\u03BF",upperCase:"\u039F"},{lowerCase:"o",upperCase:"O"}]},{width:.1,chars:[{lowerCase:"\u03C0",upperCase:"\u03A0"},{lowerCase:"p",upperCase:"P"}]}],[{width:.1,chars:[{lowerCase:"\u03B1",upperCase:"\u0391"},{lowerCase:"a",upperCase:"A"}]},{width:.1,chars:[{lowerCase:"\u03C3",upperCase:"\u03A3"},{lowerCase:"s",upperCase:"S"}]},{width:.1,chars:[{lowerCase:"\u03B4",upperCase:"\u0394"},{lowerCase:"d",upperCase:"D"}]},{width:.1,chars:[{lowerCase:"\u03C6",upperCase:"\u03A6"},{lowerCase:"f",upperCase:"F"}]},{width:.1,chars:[{lowerCase:"\u03B3",upperCase:"\u0393"},{lowerCase:"g",upperCase:"G"}]},{width:.1,chars:[{lowerCase:"\u03B7",upperCase:"\u0397"},{lowerCase:"h",upperCase:"H"}]},{width:.1,chars:[{lowerCase:"\u03BE",upperCase:"\u039E"},{lowerCase:"j",upperCase:"J"}]},{width:.1,chars:[{lowerCase:"\u03BA",upperCase:"\u039A"},{lowerCase:"k",upperCase:"K"}]},{width:.1,chars:[{lowerCase:"\u03BB",upperCase:"\u039B"},{lowerCase:"l",upperCase:"L"}]}],[{width:.15,command:"shift",chars:[{icon:"shift"}]},{width:.1,chars:[{lowerCase:"\u03B6",upperCase:"\u0396"},{lowerCase:"z",upperCase:"Z"}]},{width:.1,chars:[{lowerCase:"\u03C7",upperCase:"\u03A7"},{lowerCase:"x",upperCase:"X"}]},{width:.1,chars:[{lowerCase:"\u03C8",upperCase:"\u03A8"},{lowerCase:"c",upperCase:"C"}]},{width:.1,chars:[{lowerCase:"\u03C9",upperCase:"\u03A9"},{lowerCase:"v",upperCase:"V"}]},{width:.1,chars:[{lowerCase:"\u03B2",upperCase:"\u0392"},{lowerCase:"b",upperCase:"B"}]},{width:.1,chars:[{lowerCase:"\u03BD",upperCase:"\u039D"},{lowerCase:"n",upperCase:"N"}]},{width:.1,chars:[{lowerCase:"\u03BC",upperCase:"\u039C"},{lowerCase:"m",upperCase:"M"}]},{width:.15,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.15,command:"switch-set",chars:[{lowerCase:"eng"}]},{width:.15,command:"switch",chars:[{lowerCase:".?12"}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]],nord:[[[{width:1/11,chars:[{lowerCase:"q",upperCase:"Q"}]},{width:1/11,chars:[{lowerCase:"w",upperCase:"W"}]},{width:1/11,chars:[{lowerCase:"e",upperCase:"E"}]},{width:1/11,chars:[{lowerCase:"r",upperCase:"R"}]},{width:1/11,chars:[{lowerCase:"t",upperCase:"T"}]},{width:1/11,chars:[{lowerCase:"y",upperCase:"Y"}]},{width:1/11,chars:[{lowerCase:"u",upperCase:"U"}]},{width:1/11,chars:[{lowerCase:"i",upperCase:"I"}]},{width:1/11,chars:[{lowerCase:"o",upperCase:"O"}]},{width:1/11,chars:[{lowerCase:"p",upperCase:"P"}]},{width:1/11,chars:[{lowerCase:"\xE5",upperCase:"\xC5"}]}],[{width:1/11,chars:[{lowerCase:"a",upperCase:"A"}]},{width:1/11,chars:[{lowerCase:"s",upperCase:"S"}]},{width:1/11,chars:[{lowerCase:"d",upperCase:"D"}]},{width:1/11,chars:[{lowerCase:"f",upperCase:"F"}]},{width:1/11,chars:[{lowerCase:"g",upperCase:"G"}]},{width:1/11,chars:[{lowerCase:"h",upperCase:"H"}]},{width:1/11,chars:[{lowerCase:"j",upperCase:"J"}]},{width:1/11,chars:[{lowerCase:"k",upperCase:"K"}]},{width:1/11,chars:[{lowerCase:"l",upperCase:"L"}]},{width:1/11,chars:[{lowerCase:"\xE6",upperCase:"\xC6"}]},{width:1/11,chars:[{lowerCase:"\xF8",upperCase:"\xD8"}]}],[{width:2/11,command:"shift",chars:[{icon:"shift"}]},{width:1/11,chars:[{lowerCase:"z",upperCase:"Z"}]},{width:1/11,chars:[{lowerCase:"x",upperCase:"X"}]},{width:1/11,chars:[{lowerCase:"c",upperCase:"C"}]},{width:1/11,chars:[{lowerCase:"v",upperCase:"V"}]},{width:1/11,chars:[{lowerCase:"b",upperCase:"B"}]},{width:1/11,chars:[{lowerCase:"n",upperCase:"N"}]},{width:1/11,chars:[{lowerCase:"m",upperCase:"M"}]},{width:2/11,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]],[[{width:.1,chars:[{lowerCase:"1"}]},{width:.1,chars:[{lowerCase:"2"}]},{width:.1,chars:[{lowerCase:"3"}]},{width:.1,chars:[{lowerCase:"4"}]},{width:.1,chars:[{lowerCase:"5"}]},{width:.1,chars:[{lowerCase:"6"}]},{width:.1,chars:[{lowerCase:"7"}]},{width:.1,chars:[{lowerCase:"8"}]},{width:.1,chars:[{lowerCase:"9"}]},{width:.1,chars:[{lowerCase:"0"}]}],[{width:.1,chars:[{lowerCase:"@"}]},{width:.1,chars:[{lowerCase:"#"}]},{width:.1,chars:[{lowerCase:"|"}]},{width:.1,chars:[{lowerCase:"_"}]},{width:.1,chars:[{lowerCase:"&"}]},{width:.1,chars:[{lowerCase:"-"}]},{width:.1,chars:[{lowerCase:"+"}]},{width:.1,chars:[{lowerCase:"("}]},{width:.1,chars:[{lowerCase:")"}]},{width:.1,chars:[{lowerCase:"/"}]}],[{width:.1,chars:[{lowerCase:"="}]},{width:.1,chars:[{lowerCase:"*"}]},{width:.1,chars:[{lowerCase:'"'}]},{width:.1,chars:[{lowerCase:"'"}]},{width:.1,chars:[{lowerCase:":"}]},{width:.1,chars:[{lowerCase:";"}]},{width:.1,chars:[{lowerCase:"!"}]},{width:.1,chars:[{lowerCase:"?"}]},{width:.2,command:"backspace",chars:[{icon:"backspace"}]}],[{width:.2,command:"switch",chars:[{lowerCase:".?12"}]},{width:.1,chars:[{lowerCase:","}]},{width:.4,command:"space",chars:[{icon:"space"}]},{width:.1,chars:[{lowerCase:"."}]},{width:.2,command:"enter",chars:[{icon:"enter"}]}]]]},pR=new Ze.TextureLoader;class a0 extends vs.withBase(Ze.Object3D)(Ou,Nl){constructor(e){e||(e={}),e.width||(e.width=1),e.height||(e.height=.4),e.margin||(e.margin=.003),e.padding||(e.padding=.01),super(e),this.currentPanel=0,this.isLowerCase=!0,this.charsetCount=1;let t;if(e.language||navigator.language)switch(e.language||navigator.language){case"fr":case"fr-CH":case"fr-CA":t=Ci.fr;break;case"ru":this.charsetCount=2,t=Ci.ru;break;case"de":case"de-DE":case"de-AT":case"de-LI":case"de-CH":t=Ci.de;break;case"es":case"es-419":case"es-AR":case"es-CL":case"es-CO":case"es-ES":case"es-CR":case"es-US":case"es-HN":case"es-MX":case"es-PE":case"es-UY":case"es-VE":t=Ci.es;break;case"el":this.charsetCount=2,t=Ci.el;break;case"nord":t=Ci.nord;break;default:t=Ci.eng;break}else t=Ci.eng;this.keys=[],this.panels=t.map(i=>{const r=e.height/i.length-e.margin*2,s=new no({width:e.width+e.padding*2,height:e.height+e.padding*2,offset:0,padding:e.padding,fontFamily:e.fontFamily,fontTexture:e.fontTexture,backgroundColor:e.backgroundColor,backgroundOpacity:e.backgroundOpacity});return s.charset=0,s.add(...i.map(o=>{const a=new no({width:e.width,height:r,margin:e.margin,contentDirection:"row",justifyContent:"center"});a.frame.visible=!1;const c=[];return o.forEach(l=>{const h=new no({width:e.width*l.width-e.margin*2,height:r,margin:e.margin,justifyContent:"center",offset:0}),u=l.chars[s.charset].lowerCase||l.chars[s.charset].icon||"undif";if(u==="enter"&&e.enterTexture||u==="shift"&&e.shiftTexture||u==="backspace"&&e.backspaceTexture){const d=(()=>{switch(u){case"backspace":return e.backspaceTexture;case"enter":return e.enterTexture;case"shift":return e.shiftTexture;default:console.warn("There is no icon image for this key")}})();pR.load(d,f=>{h.add(new Wu({width:h.width*.65,height:h.height*.65,backgroundSize:"contain",backgroundTexture:f}))})}else h.add(new Hu({content:u,offset:0}));h.type="Key",h.info=l,h.info.input=u,h.panel=s,c.push(h),this.keys.push(h)}),a.add(...c),a})),s}),this.add(this.panels[0]),this.set(e)}setNextPanel(){this.panels.forEach(e=>{this.remove(e)}),this.currentPanel=(this.currentPanel+1)%this.panels.length,this.add(this.panels[this.currentPanel]),this.update(!0,!0,!0)}setNextCharset(){this.panels[this.currentPanel].charset=(this.panels[this.currentPanel].charset+1)%this.charsetCount,this.keys.forEach(e=>{if(!this.panels[this.currentPanel].getObjectById(e.id))return;const i=e.info.chars[e.panel.charset]||e.info.chars[0],r=this.isLowerCase||!i.upperCase?i.lowerCase:i.upperCase;if(!e.childrenTexts.length)return;const s=e.childrenTexts[0];e.info.input=r,s.set({content:r}),s.update(!0,!0,!0)})}toggleCase(){this.isLowerCase=!this.isLowerCase,this.keys.forEach(e=>{const t=e.info.chars[e.panel.charset]||e.info.chars[0],i=this.isLowerCase||!t.upperCase?t.lowerCase:t.upperCase;if(!e.childrenTexts.length)return;const r=e.childrenTexts[0];e.info.input=i,r.set({content:i}),r.update(!0,!0,!0)})}parseParams(){}updateLayout(){}updateInner(){}}const l0=()=>dr.update(),c0={Block:no,Text:Hu,InlineBlock:Wu,Keyboard:a0,FontLibrary:wo,update:l0,TextAlign:Il,Whitespace:Al,JustifyContent:Tl,AlignItems:El,ContentDirection:Ml};typeof global<"u"&&(global.ThreeMeshUI=c0);const mR=c0;vn.g1;vn.gO;vn.km;vn.zV;vn.ol;vn.uM;vn.N1;vn.xv;vn.PH;vn.UH;vn.ZP;vn.Vx;const gR="/CFW2022/assets/consent.874ea98a.pdf",kp="/CFW2022/assets/IndoorHDRI003_1K-HDR.eb5a7553.exr",_R="/CFW2022/assets/Leather025_1K_Color.9977ded7.jpg",vR="/CFW2022/assets/Leather025_1K_Displacement.62dc5532.jpg",wR="/CFW2022/assets/Leather025_1K_NormalGL.07d566e1.jpg",yR="/CFW2022/assets/Leather025_1K_Roughness.6c6f1dd6.jpg";async function xR(){const n=new RI({name:"example",demo:!0,consentPath:gR,prolificLink:"https://app.prolific.co/submissions/complete?cc=COOMA7DK",requireDesktop:!0,requireChrome:!0,vrAllowed:!1,cssBackground:"dimgray",gravity:9.81,springConstant:100,springDamping:3,springStretchSpeed:5e-4,maxStretch:.1,targetWidth:.035,carouselRotationSpeed:2*Math.PI/2e3,ITI:1e3,pointsWaitTime:.1,minDropWaitTime:1,errorForZeroPoints:.025,maxTrialPoints:100,errorForMaxTimePenalty:.06,maxTimePenalty:5,environmentLighting:kp,textureName:"leather",timeLimitExceededWaitDuration:6,screenshots:!1,fixedAspect:!1});n.cfg.stateNames=["BROWSER","CONSENT","SIGNIN","SETUP","START","CAROUSEL","PULL","DROP","FINISH","ADVANCE","SURVEY","CODE","FULLSCREEN","POINTERLOCK","DBCONNECT","ATTENTION","BLOCKED"];const e=new BI(n.cfg.stateNames,Ae);n.fullscreenStates=n.pointerlockStates=["POINTERLOCK","SETUP","START","CAROUSEL","PULL","DROP","FINISH","ADVANCE"].map(X=>e[X]);const t=new zI,i=new nt({element:`
    <div id="instruction-detail" class="panel-detail collapsible">
      1. Click and drag up to stretch the spring on the current object.<br />
      2. Press Space (or Shift) to release the object from the ring.<br />
      Stretch the spring the right amount to support each object's weight.<br />
      The object should not move up or down when it is released!<br />
    </div>`,hide:!1,display:"block",parent:document.getElementById("instruction-panel")});i.dom.style.height=0,document.getElementById("instruction-show-hide").innerText="show",i.collapsed=!0;const r=new eh("");r.object.element.style.fontSize="14pt";const s=new eh("");let o=new nt({element:'<svg style="transform: rotateY(-180deg) rotateZ(-90deg);"><circle id="timeLimitIcon" r="18" style="stroke-dasharray: 113px; stroke-dashoffset: 0px; stroke-linecap: round; stroke-width: 4px; fill: none; stroke: black; transform: translate(50%, 50%)"></circle></svg>',hide:!1,display:"block",parent:s.object.element});n.blocker.addChild(new nt({element:`
        <div id="time-limit-attention-content" class="weblab-component-div" style="line-height:1.5em">
          <h3 style="margin-block: 0">
            Attention: Now there is a time limit!
          </h3>
          A circular icon will display the countdown.<br />
          Stretch the spring and release the object before time runs out.<br />
          If you run out of time, you lose 100 points and get stuck in a brief timeout.<br />
          <div id="time-limit-attention-press-enter" style="display: none">Press Enter to proceed.</div>
        </div>`,hide:!0,parent:n.blocker.dom}),"timeLimit"),n.blocker.addChild(new nt({element:`
        <div id="time-limit-warning-content" class="weblab-component-div" style="line-height:1.5em">
          <h3 style="margin-block: 0">
            Warning: Respond within the time limit!
          </h3>
          Do not let the timer run out without attempting a response.<br />
          <div id='time-limit-warning-please-wait'>You must wait&nbsp;<a id='time-limit-warning-time-remaining'>5</a>&nbsp;more seconds...</div>
          <div id='time-limit-warning-press-enter'>Press Enter to proceed.</div>
        </div>`,hide:!0,parent:n.blocker.dom}),"timeLimitWarning"),Xe();let a=new M0({width:150,title:"Debug",container:document.getElementById("panel-container")});a.hide(),location.hostname==="localhost"||(a.hide(),console.log=function(){});const c=new m0;c.showPanel(0),document.body.appendChild(c.dom);let l={};const h={saveSuccessful:!1,tFrame:[],stateFrame:[],stretchFrame:[],dx:[],dy:[],btn:[],t:[],state:[],posn_RH:[],stateChange:[],stateChangeTime:[]};l=structuredClone(h),n.history={x:[],y:[],cycle:[],p:-1,slope:-1},a.add(n.history,"p").listen(),a.add(n.history,"slope").listen(),n.cfg.targetIds=[0,1,2,3,4],n.cfg.targetWeights=[.3,.4,.8,.6,.7],n.cfg.targetHeights=[.05,.06,.07,.08,.09],n.cfg.noisyWeights=!1;let u=gf({colormap:"viridis",nshades:9,format:"hex",alpha:1});n.materials=[];for(let X of n.cfg.targetIds){let J=new Qe(u[4]),le=J.getHSL({});le.l=.2,J.setHSL(le.h,le.s,le.l),n.materials[X]=new Qr({color:J})}if(n.cfg.condition=6,n.cfg.condition===2||n.cfg.condition===4||n.cfg.condition===5||n.cfg.condition===6||n.cfg.condition===8||n.cfg.condition===9)for(let X of n.cfg.targetIds){let J=new Qe(u[X*2]),le=J.getHSL({});le.l=.3,J.setHSL(le.h,le.s,le.l),n.materials[X]=new Qr({color:J})}if(n.cfg.condition===2.5){let X=gf({colormap:"viridis",nshades:13,format:"hex",alpha:1});for(let J of n.cfg.targetIds){let le=new Qe(X[7-J]),Te=le.getHSL({});Te.l=.3,le.setHSL(Te.h,Te.s,Te.l),n.materials[J]=new Qr({color:le})}}n.cfg.condition===3&&(n.cfg.targetIds=[1,2,3]),n.cfg.condition===4&&(n.cfg.noisyWeights=!0),a.add(n.cfg,"noisyWeights").disable,n.cfg.condition===5&&(n.cfg.targetWeights=[.3,.32,.8,.68,.7]),n.cfg.condition,n.cfg.condition===7&&(n.cfg.targetIds=[0,1,2,2,2,3,4]),n.cfg.condition===8&&(n.cfg.timeLimit=2250,n.cfg.timeLimitStartTrial=12),n.cfg.condition===9&&(n.cfg.oneByOne=!0),n.cfg.condition===10&&(n.cfg.targetWeights=[.3,.32,.8,.68,.7]);let d=[{targetId:n.cfg.condition===3?[1,3]:[0,1,3,4],options:new Cf("train",!0,n.cfg.condition===6||n.cfg.condition===0?0:n.cfg.condition===3?20:10,["targetId"])},{targetId:[...n.cfg.targetIds],options:new Cf("test",!0,n.cfg.condition===0||n.cfg.condition===3||n.cfg.condition===6?20:n.cfg.condition===7?9:12,["targetId"])}];n.createTrialSequence(d);const f=new xh,g=new xh;let[m,p,v,b,M]=await ke(kp);b.add(n.points.css2d.object),b.add(r.object),b.add(s.object);const x=new OI;n.cfg.numObjects=new Set(n.cfg.targetIds).size,n.cfg.targetOrder=uS(n.cfg.numObjects);const T={majorRadius:.2,minorRadius:.003,tubularSegments:200,radialSegments:12};let R=yn.torus(T);R.position.z=-1,R.position.y=1.5,R.rotation.x=Math.PI/2,n.cfg.carouselGap=1.5*2*Math.tan(n.cfg.targetWidth/T.majorRadius),R.rotation.z=n.cfg.carouselGap/2,R.material.color=new Qe("black"),R.material.side=ii,R.visible=!n.cfg.screenshots,p.add(R);const F={majorRadius:.01,minorRadius:.01/7,numCoils:7,tubularSegments:120},y=yn.torus({majorRadius:.01,minorRadius:.01/7,tubularSegments:24});y.rotation.x=-Math.PI/2;const I=yn.torus({majorRadius:.2,minorRadius:T.minorRadius*1.2,tubularSegments:40,radialSegments:12,arc:n.cfg.oneByOne?Math.PI*(1+(n.cfg.numObjects-1)/n.cfg.numObjects):Math.PI/n.cfg.numObjects});I.material.color=new Qe("gray"),I.rotation.x=Math.PI/2,I.rotation.z=.5*Math.PI/n.cfg.numObjects,I.position.y-=T.minorRadius*2,I.name="carouselOuter";const k=new Ws;k.position.copy(R.position),k.position.y+=T.minorRadius*2,p.add(k),r.object.position.copy(R.position),r.object.position.y+=.2;const ee=[],ne=[];for(let[X,J]of Array.from(new Set(n.cfg.targetIds)).entries()){let le=yn.cylinder({radialSegments:64});le.material=n.materials[J],k.add(le);let Te;n.cfg.oneByOne&&X>0||(Te=I.clone(),n.cfg.oneByOne?(R.visible=!1,Te.position.copy(R.position),p.add(Te)):k.add(Te));let be=yn.spring(F),tt=y.clone();le.add(tt),le.add(be),ne[J]=be,ee[J]=le;let Ct=2*Math.PI/n.cfg.numObjects*n.cfg.targetOrder[X],lt=T.majorRadius*Math.cos(Ct),vt=T.majorRadius*Math.sin(Ct);if(le.yInit=-n.cfg.targetHeights[J]/2,le.carouselAngle=Ct,le.position.x=lt,le.position.y=le.yInit,le.position.z=vt,Te&&(Te.rotation.z+=Ct),le.scale.x=n.cfg.targetWidth,le.scale.y=n.cfg.targetHeights[J],le.scale.z=n.cfg.targetWidth,tt.position.y=.5,be.position.y=.5,tt.scale.set(1/le.scale.x,1/le.scale.z,1/le.scale.y),be.scale.set(1/le.scale.x,1/le.scale.y,1/le.scale.z),be.material.color=new Qe("slategray"),be.material.roughness=.3,be.material.metalness=1,tt.material.copy(be.material),n.cfg.oneByOne&&le.traverse(ft=>ft.visible=!1),n.cfg.screenshots){Te.visible=!1,le.position.x=T.majorRadius,le.yInit=n.cfg.targetHeights[J]/2,le.position.y=le.yInit,le.position.z=4.4*n.cfg.targetWidth-2.2*J*n.cfg.targetWidth,le.sp=Sf(n.cfg.targetWeights[J],n.cfg.springConstant,n.cfg.springDamping);let ft=bf(10,0,le.sp.gamma,le.sp.Gamma,le.sp.Omega,le.sp.regime,le.yInit);le.position.y=ft,yn.spring({...F,stretch:n.cfg.targetWeights[J]*n.cfg.gravity/n.cfg.springConstant},be),tt.visible=!1,be.visible=!1}}x.applyNewTexture(ee,"leather",[_R,vR,wR,yR],1/n.cfg.targetWidth,.2/Math.min(...n.cfg.targetHeights.slice(n.cfg.targetIds[0])));let $;$=new P(T.majorRadius,0,0);let U=new P().copy(R.position).add($);m.position.set(...new P(.4,.12,0).multiplyScalar(n.cfg.screenshots?1.5:1).add(U)),m.lookAt(...new P(0,0,0).add(U)),K();function K(X){n.vrAllowed&&n.vrSupported?v.setAnimationLoop(K):requestAnimationFrame(K),c.begin(),ae(),de(X),c.end()}function ae(){switch(n.firebase.databaseConnected?!n.fullscreen.engaged&&n.fullscreenStates.includes(e.current)?(f.pause(),e.push(e.FULLSCREEN)):!n.pointerlock.engaged&&n.pointerlockStates.includes(e.current)&&(f.pause(),e.push(e.POINTERLOCK)):(f.pause(),e.push(e.DBCONNECT)),e.current){case e.BLOCKED:break;case e.BROWSER:{const X=hS.parse(window.navigator.userAgent);n.cfg.requireDesktop&&X.platform.type=="mobile"?(n.blocker.show(n.blocker.desktop),e.next(e.BLOCKED)):n.cfg.requireChrome&&X.browser.name!=="Chrome"?(n.blocker.show(n.blocker.chrome),e.next(e.BLOCKED)):(n.cfg.browser=X.browser,n.cfg.os=X.os,e.next(e.CONSENT));break}case e.CONSENT:{n.consented&&(n.cfg.date=new Date().toISOString(),n.cfg.timeOrigin=performance.timeOrigin,n.firebase.signInAnonymously(),e.next(e.SIGNIN)),n.consent.hidden&&n.consent.show();break}case e.SIGNIN:{n.firebase.uid&&(n.consent.hide(),nt.show(v.domElement),nt.show(M.domElement),nt.show(document.getElementById("panel-container")),e.next(e.SETUP));break}case e.SETUP:{let X=l.timeLimitExceeded;if(l=structuredClone(n.trials[n.trialNumber]),l.trialNumber=n.trialNumber,l.startTime=performance.now(),l={...l,...structuredClone(h)},l.demoTrial=n.trialNumber===0||n.repeatDemoTrial,l.timeLimitExceeded=!1,l.timeLimit=l.trialNumber>=n.cfg.timeLimitStartTrial?n.cfg.timeLimit:!1,l.clamped=!0,l.carouselRotated=!1,l.stretch=0,l.massNoise=n.cfg.noisyWeights*(.3*Math.random()-.15),l.mass=n.cfg.targetWeights[l.targetId]+l.massNoise,l.correct=l.mass*n.cfg.gravity/n.cfg.springConstant,l.correctWithoutNoise=n.cfg.targetWeights[l.targetId]*n.cfg.gravity/n.cfg.springConstant,l.sp=Sf(l.mass,n.cfg.springConstant,n.cfg.springDamping),!n.cfg.demo&&l.trialNumber>0&&l.trialNumber%Math.ceil(n.numTrials/4)===0&&(n.cfg.condition!==3&&n.history.p>.01||n.history.slope<.5))n.blocker.show("attention"),n.proceedKey="Enter",document.body.addEventListener("keydown",q),n.awaitingPressEnter=!0,e.next(e.ATTENTION);else if(n.cfg.timeLimit&&l.trialNumber===n.cfg.timeLimitStartTrial){n.blocker.show("timeLimit"),n.proceedKey="Enter",n.awaitingPressEnter=!0;let J=document.getElementById("time-limit-attention-press-enter");setTimeout(()=>{nt.show(J),document.body.addEventListener("keydown",q)},1e4),e.next(e.ATTENTION)}else if(X){n.blocker.show("timeLimitWarning"),n.proceedKey="Enter",n.awaitingPressEnter=!0;let J=document.getElementById("time-limit-warning-time-remaining");J.innerText=n.cfg.timeLimitExceededWaitDuration;let le=document.getElementById("time-limit-warning-please-wait"),Te=document.getElementById("time-limit-warning-press-enter");nt.show(le),nt.hide(Te),n.timeLimitCountdown=setInterval(()=>{let be=Math.floor(J.innerText);J.innerText=Math.max(0,be-1)},1e3),setTimeout(()=>{clearInterval(n.timeLimitCountdown),nt.hide(le),nt.show(Te),document.body.addEventListener("keydown",q),n.cfg.timeLimitExceededWaitDuration+=2},n.cfg.timeLimitExceededWaitDuration*1e3),e.next(e.ATTENTION)}else e.next(e.START);break}case e.START:{if(n.cfg.screenshots)break;const X=k.rotation.y;let J=ee[l.targetId].carouselAngle,le=0,Te;[J,Te]=US(X,J,le);let be=Te/n.cfg.carouselRotationSpeed,tt=Math.max(0,n.cfg.ITI-be);new Ia(k.rotation).easing(Ys.Sinusoidal.InOut).to({y:J},be).delay(tt).onComplete(()=>{l.carouselRotated=!0}).start(),e.next(e.CAROUSEL);break}case e.CAROUSEL:{l.carouselRotated&&(document.body.addEventListener("mousemove",se),document.body.addEventListener("mousemove",Q),document.body.addEventListener("mouseup",W),document.body.addEventListener("keydown",V),l.timeLimit&&(R.getWorldPosition(s.object.position),s.object.position.y-=.12,s.object.position.z-=.12,o.dom.children[0].style.stroke="black",o.dom.children[0].style.strokeDashoffset=0,n.timeLimitTween=new Ia(o.dom.children[0].style).to({strokeDashoffset:113},n.cfg.timeLimit-250).delay(250).onComplete(()=>{l.demoTrial||(r.object.element.innerText="Too slow!",r.object.element.color="darkred"),o.dom.children[0].style.strokeDashoffset=0,o.dom.children[0].style.stroke="darkred",l.timeLimitExceeded=!0,l.clamped=!1}).start()),n.cfg.oneByOne&&(ee[l.targetId].traverse(X=>X.visible=!0),R.visible=!0),n.cfg.screenshots&&ee[l.targetId].traverse(X=>X.visible=!0),e.next(e.PULL));break}case e.PULL:{if(l.demoTrial&&(l.stretch===0?n.cfg.oneByOne?r.object.element.innerText=`You will see objects that weigh different amounts.
              The spring on top is used to support the weight of each object.
              Click and drag upward to stretch the spring.
            `:r.object.element.innerText=`Each of these objects weighs a different amount.
              The spring on top is used to support the weight of the object.
              Click and drag upward to stretch the spring.
            `:r.object.element.innerText=`The more you stretch the spring, the harder it pulls on the object.
              Right now the object is clamped in place by the ring, so it can't move.
              When you are ready, press Space (or Shift) to release the object from the ring.
              You can let go of the mouse button after you release the object.
            `),!l.clamped){n.timeLimitTween&&!l.timeLimitExceeded&&(o.dom.children[0].style.stroke="darkgreen",n.timeLimitTween.stop()),document.body.removeEventListener("mousemove",se),document.body.removeEventListener("mousemove",Q),document.body.removeEventListener("mouseup",W),document.body.removeEventListener("keydown",V);let X=2*Math.PI-n.cfg.carouselGap;if(yn.torus({...T,arc:X},R),l.error=l.stretch-l.correct,l.targetId!==2&&l.trialNumber>0&&(n.history.x.push([1,l.correctWithoutNoise]),n.history.y.push(l.stretch),n.history.cycle.push(l.cycle),l.cycle>0)){let J=n.history.y.filter((Te,be)=>n.history.cycle[be]>l.cycle-10),le=n.history.x.filter((Te,be)=>n.history.cycle[be]>l.cycle-10);n.history.model=OS.ols(J,le),n.history.p=n.history.model.t.p[1],n.history.slope=n.history.model.coef[1]}l.timePenalty=n.cfg.maxTimePenalty*xf(l.error/n.cfg.errorForMaxTimePenalty),f.reset(),r.object.element.innerText="",e.next(e.DROP)}break}case e.DROP:{if(l.earned===void 0&&e.expired(n.cfg.pointsWaitTime)){l.earned=Math.round(n.cfg.maxTrialPoints*(1-xf(l.error/n.cfg.errorForZeroPoints))),l.timeLimitExceeded&&(l.earned=-100);let X=new P;ee[l.targetId].getWorldPosition(X);let J=X.clone(),le="red";l.earned>0&&(le="white",J.y+=.1),n.points.add(l.earned,!0,{color:le,startPosn:X,endPosn:J}),l.demoTrial&&(l.error>.015?r.object.element.innerText=`You applied too much force so the object was pulled up.
              Next time you see this object, stretch the spring less.
              Try to make each object stay perfectly still.
              
            `:l.error<-.015?r.object.element.innerText=`You applied too little force so the object fell down.
              Next time you see this object, stretch the spring more.
              Try to make each object stay perfectly still.
              
            `:r.object.element.innerText=`
              Good job!
              Try to make each object stay perfectly still.
              
            `,setTimeout(()=>{r.object.element.innerText=r.object.element.innerText.slice(0,-1),r.object.element.innerText+="Press Enter to continue (or press D to repeat the demo).",n.proceedKey="Enter",document.body.addEventListener("keydown",q)},2e3),n.awaitingPressEnter=!0)}if(e.expired(n.cfg.minDropWaitTime+l.timePenalty))n.awaitingPressEnter||(r.object.element.innerText="",e.next(e.FINISH));else{let X=100*e.elapsed()/(n.cfg.minDropWaitTime+l.timePenalty);document.getElementById("loadingbar").style.width=X+"%"}break}case e.FINISH:{l.size=[window.innerWidth,window.innerHeight],l.points=n.points.total,n.firebase.saveTrial(l),e.next(e.ADVANCE);break}case e.ADVANCE:{if(!n.firebase.saveSuccessful)break;yn.torus(T,R),yn.spring(F,ne[l.targetId]),ee[l.targetId].position.y=ee[l.targetId].yInit,n.cfg.oneByOne&&(ee[l.targetId].traverse(X=>X.visible=!1),R.visible=!1),n.cfg.screenshots&&ee[l.targetId].traverse(X=>X.visible=!1),n.nextTrial(),n.trialNumber<n.numTrials?e.next(e.SETUP):(n.firebase.recordCompletion(),n.goodbye.updateGoodbye(n.firebase.uid),nt.hide(v.domElement),nt.hide(M.domElement),n.fullscreen.exitFullscreen(),e.next(e.SURVEY));break}case e.SURVEY:{t.hidden&&t.show(),n.surveysubmitted&&(n.firebase.saveTrial(n.cfg,"survey"),t.hide(),e.next(e.CODE));break}case e.CODE:{if(!n.firebase.saveSuccessful)break;n.goodbye.hidden&&n.goodbye.show();break}case e.FULLSCREEN:{n.blocker.fullscreen.hidden&&n.blocker.show("fullscreen"),n.fullscreen.engaged&&(n.blocker.hide(),e.pop());break}case e.POINTERLOCK:{n.blocker.pointerlock.hidden&&n.blocker.show("pointerlock"),n.pointerlock.engaged&&(n.blocker.hide(),e.pop());break}case e.DBCONNECT:{n.blocker.connection.hidden&&n.blocker.show("connection"),n.firebase.databaseConnected&&(n.blocker.hide(),e.pop());break}case e.ATTENTION:{n.awaitingPressEnter||(n.blocker.hide(),e.next(e.START));break}}}function de(X){if(e.current===e.DROP||e.current===e.FINISH){let J=ee[l.targetId].position.y,le=bf(f.elapsed(),l.error,l.sp.gamma,l.sp.Gamma,l.sp.Omega,l.sp.regime,ee[l.targetId].yInit);ee[l.targetId].position.y=le,l.stretch+=J-le,yn.spring({...F,stretch:l.stretch},ne[l.targetId])}fS(),v.render(p,m),M.render(b,m),n.idle=g.elapsed()>=.5,e.current==e.PULL&&!n.idle&&me(X)}function Q(X){X.buttons&&l.clamped&&e.current===e.PULL&&(l.stretch-=n.cfg.springStretchSpeed*X.movementY,l.stretch=FS(l.stretch,0,n.cfg.maxStretch),yn.spring({...F,stretch:l.stretch},ne[l.targetId]))}function W(){l.clamped&&(l.stretch=0,yn.spring({...F,stretch:l.stretch},ne[l.targetId]))}function V(X){e.current===e.PULL&&l.clamped&&l.stretch!==0&&(X.key==="Shift"||X.key===" ")&&(l.clamped=!1)}function me(X){l.tFrame.push(X),n.exitIdling&&(l.exitIdleFrame.push(l.tFrame.length),n.exitIdling=!1),l.stateFrame.push(e.current),l.stretchFrame.push(l.stretch)}function se(X){X.target===document.body&&(g.reset(),n.exitIdle=n.idle,l.t.push(X.timeStamp),l.btn.push(X.buttons),l.dx.push(X.movementX),l.dy.push(-X.movementY),l.state.push(e.current))}function ve(){if(n.cfg.screenshots){let X=n.cfg.fixedAspect||window.innerWidth/window.innerHeight,J=.42*2*Math.atan(70*(Math.PI/180)/2),le=J*X;m.left=le/-2,m.right=le/2,m.top=J/2,m.bottom=J/-2}m.aspect=n.cfg.fixedAspect||window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),M.setSize(window.innerWidth,window.innerHeight)}function Ae(){l.stateChange&&(l.stateChange.push(e.current),l.stateChangeTime.push(performance.now()))}function Be(){let X=document.getElementById("instruction-show-hide");i.transitioning||(i.collapsed?(i.expand(),X.textContent="hide"):(i.collapse(),X.textContent="show"))}function q(X){X.key===n.proceedKey&&(document.body.removeEventListener("keydown",q),n.awaitingPressEnter=!1,n.repeatDemoTrial=!1,n.proceedKey=void 0),X.key.toLowerCase()==="d"&&(document.body.removeEventListener("keydown",q),n.awaitingPressEnter=!1,n.repeatDemoTrial=!0,n.proceedKey=void 0)}function Xe(){document.body.addEventListener("keydown",X=>{X.key==="i"&&!X.repeat&&Be()}),location.hostname==="localhost"&&document.body.addEventListener("keydown",X=>{X.key==="S"&&n.firebase.localSave()}),document.body.addEventListener("consent",()=>{console.log("document.body received consent event, signing in..."),n.consented=!0}),document.body.addEventListener("surveysubmitted",X=>{console.log("document.body received surveysubmitted event, saving data...");for(let[J,le]of Object.entries(X.detail.survey))n.cfg[J]=le;n.surveysubmitted=!0}),document.body.addEventListener("savesuccessful",X=>{console.log("document.body received savesuccessful event, trial saved"),X.detail==="survey"?t.saveSuccessful=!0:l.saveSuccessful=!0}),document.body.addEventListener("dbconnect",()=>{console.log("document.body received dbconnect event")}),document.body.addEventListener("dbdisconnect",()=>{console.log("document.body received dbdisconnect event")}),document.body.addEventListener("enterfullscreen",()=>{console.log("document.body received enterfullscreen event")}),document.body.addEventListener("exitfullscreen",()=>{console.log("document.body received exitfullscreen event")}),document.body.addEventListener("enterpointerlock",()=>{console.log("document.body received enterpointerlock event")}),document.body.addEventListener("exitpointerlock",()=>{console.log("document.body received exitpointerlock event")})}async function ke(X=""){let J=new am({antialias:!0});J.setPixelRatio(window.devicePixelRatio),J.setSize(window.innerWidth,window.innerHeight),J.outputEncoding=Tt,J.toneMapping=4,a.add(J,"toneMapping",[0,3,4]);let le=new Jc;le.background=new Qe(n.cfg.cssBackground);const Te=new Yc(J);if(X.endsWith(".js")){const lt=Ul(()=>Promise.resolve().then(()=>UI),void 0);le.environment=Te.fromScene(new lt.RoomEnvironment(.5),.04).texture,Te.dispose()}else if(X.endsWith(".exr")||X.endsWith(".hdr")){let lt;if(X.endsWith(".exr")){const vt=await Ul(()=>Promise.resolve().then(()=>LI),void 0);lt=new vt.EXRLoader}else{const vt=await Ul(()=>import("./RGBELoader.61bc851c.js"),[]);lt=new vt.RGBELoader}lt.load(X,vt=>{le.environment=Te.fromEquirectangular(vt).texture,Te.dispose(),vt.dispose()})}let be=new fn(70,n.cfg.fixedAspect||window.innerWidth/window.innerHeight,.01,10);if(n.cfg.screenshots){let lt=n.cfg.fixedAspect||window.innerWidth/window.innerHeight,vt=.42*2*Math.atan(70*(Math.PI/180)/2),ft=vt*lt;be=new nm(ft/-2,ft/2,vt/2,vt/-2,.01,10)}le.add(be),document.getElementById("screen").appendChild(J.domElement),nt.hide(J.domElement);let tt=new J1;tt.setSize(window.innerWidth,window.innerHeight),tt.domElement.style.position="absolute",document.getElementById("screen").appendChild(tt.domElement),nt.hide(tt.domElement);let Ct=new Jc;return window.addEventListener("resize",ve),[be,le,J,Ct,tt]}}window.addEventListener("DOMContentLoaded",xR);export{W1 as D,zn as F,ri as H,ui as L,hf as a,Wt as b};
