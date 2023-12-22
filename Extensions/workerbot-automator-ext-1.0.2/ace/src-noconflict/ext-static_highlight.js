/* Copyright (C) 2023 by WorkerBot.AI */
ace.define("ace/ext/static_highlight",["require","exports","module","ace/edit_session","ace/layer/text","ace/config","ace/lib/dom","ace/lib/lang"],(function(e,t,n){"use strict";var i=e("../edit_session").EditSession,o=e("../layer/text").Text,r=e("../config"),s=e("../lib/dom"),a=e("../lib/lang").escapeHTML;function c(e){this.type=e,this.style={},this.textContent=""}c.prototype.cloneNode=function(){return this},c.prototype.appendChild=function(e){this.textContent+=e.toString()},c.prototype.toString=function(){var e=[];if("fragment"!=this.type){e.push("<",this.type),this.className&&e.push(" class='",this.className,"'");var t=[];for(var n in this.style)t.push(n,":",this.style[n]);t.length&&e.push(" style='",t.join(""),"'"),e.push(">")}return this.textContent&&e.push(this.textContent),"fragment"!=this.type&&e.push("</",this.type,">"),e.join("")};var l={createTextNode:function(e,t){return a(e)},createElement:function(e){return new c(e)},createFragment:function(){return new c("fragment")}},h=function(){this.config={},this.dom=l};h.prototype=o.prototype;var g=function(e,t,n){var i=e.className.match(/lang-(\w+)/),o=t.mode||i&&"ace/mode/"+i[1];if(!o)return!1;var r=t.theme||"ace/theme/textmate",a="",c=[];if(e.firstElementChild)for(var l=0,h=0;h<e.childNodes.length;h++){var u=e.childNodes[h];3==u.nodeType?(l+=u.data.length,a+=u.data):c.push(l,u)}else a=e.textContent,t.trim&&(a=a.trim());g.render(a,o,r,t.firstLineNumber,!t.showGutter,(function(t){s.importCssString(t.css,"ace_highlight"),e.innerHTML=t.html;for(var i=e.firstChild.firstChild,o=0;o<c.length;o+=2){var r=t.session.doc.indexToPosition(c[o]),a=c[o+1],l=i.children[r.row];l&&l.appendChild(a)}n&&n()}))};g.render=function(e,t,n,o,s,a){var c,l=1,h=i.prototype.$modes;function u(){var i=g.renderSync(e,t,n,o,s);return a?a(i):i}return"string"==typeof n&&(l++,r.loadModule(["theme",n],(function(e){n=e,--l||u()}))),t&&"object"==typeof t&&!t.getTokenizer&&(t=(c=t).path),"string"==typeof t&&(l++,r.loadModule(["mode",t],(function(e){h[t]&&!c||(h[t]=new e.Mode(c)),t=h[t],--l||u()}))),--l||u()},g.renderSync=function(e,t,n,o,r){o=parseInt(o||1,10);var s=new i("");s.setUseWorker(!1),s.setMode(t);var a=new h;a.setSession(s),Object.keys(a.$tabStrings).forEach((function(e){if("string"==typeof a.$tabStrings[e]){var t=l.createFragment();t.textContent=a.$tabStrings[e],a.$tabStrings[e]=t}})),s.setValue(e);var c=s.getLength(),g=l.createElement("div");g.className=n.cssClass;var u=l.createElement("div");u.className="ace_static_highlight"+(r?"":" ace_show_gutter"),u.style["counter-reset"]="ace_line "+(o-1);for(var p=0;p<c;p++){var d=l.createElement("div");if(d.className="ace_line",!r){var f=l.createElement("span");f.className="ace_gutter ace_gutter-cell",f.textContent="",d.appendChild(f)}a.$renderLine(d,p,!1),d.textContent+="\n",u.appendChild(d)}return g.appendChild(u),{css:".ace_static_highlight {font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', 'Droid Sans Mono', monospace;font-size: 12px;white-space: pre-wrap}.ace_static_highlight .ace_gutter {width: 2em;text-align: right;padding: 0 3px 0 0;margin-right: 3px;contain: none;}.ace_static_highlight.ace_show_gutter .ace_line {padding-left: 2.6em;}.ace_static_highlight .ace_line { position: relative; }.ace_static_highlight .ace_gutter-cell {-moz-user-select: -moz-none;-khtml-user-select: none;-webkit-user-select: none;user-select: none;top: 0;bottom: 0;left: 0;position: absolute;}.ace_static_highlight .ace_gutter-cell:before {content: counter(ace_line, decimal);counter-increment: ace_line;}.ace_static_highlight {counter-reset: ace_line;}"+n.cssText,html:g.toString(),session:s}},n.exports=g,n.exports.highlight=g})),ace.require(["ace/ext/static_highlight"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));