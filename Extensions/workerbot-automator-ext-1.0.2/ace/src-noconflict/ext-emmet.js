/* Copyright (C) 2023 by WorkerBot.AI */
ace.define("ace/snippets",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/event_emitter","ace/lib/lang","ace/range","ace/range_list","ace/keyboard/hash_handler","ace/tokenizer","ace/clipboard","ace/editor"],(function(e,t,n){"use strict";var i=e("./lib/dom"),r=e("./lib/oop"),s=e("./lib/event_emitter").EventEmitter,a=e("./lib/lang"),o=e("./range").Range,c=e("./range_list").RangeList,h=e("./keyboard/hash_handler").HashHandler,l=e("./tokenizer").Tokenizer,u=e("./clipboard"),p={CURRENT_WORD:function(e){return e.session.getTextRange(e.session.getWordRange())},SELECTION:function(e,t,n){var i=e.session.getTextRange();return n?i.replace(/\n\r?([ \t]*\S)/g,"\n"+n+"$1"):i},CURRENT_LINE:function(e){return e.session.getLine(e.getCursorPosition().row)},PREV_LINE:function(e){return e.session.getLine(e.getCursorPosition().row-1)},LINE_INDEX:function(e){return e.getCursorPosition().row},LINE_NUMBER:function(e){return e.getCursorPosition().row+1},SOFT_TABS:function(e){return e.session.getUseSoftTabs()?"YES":"NO"},TAB_SIZE:function(e){return e.session.getTabSize()},CLIPBOARD:function(e){return u.getText&&u.getText()},FILENAME:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0]},FILENAME_BASE:function(e){return/[^/\\]*$/.exec(this.FILEPATH(e))[0].replace(/\.[^.]*$/,"")},DIRECTORY:function(e){return this.FILEPATH(e).replace(/[^/\\]*$/,"")},FILEPATH:function(e){return"/not implemented.txt"},WORKSPACE_NAME:function(){return"Unknown"},FULLNAME:function(){return"Unknown"},BLOCK_COMMENT_START:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.start||""},BLOCK_COMMENT_END:function(e){var t=e.session.$mode||{};return t.blockComment&&t.blockComment.end||""},LINE_COMMENT:function(e){return(e.session.$mode||{}).lineCommentStart||""},CURRENT_YEAR:d.bind(null,{year:"numeric"}),CURRENT_YEAR_SHORT:d.bind(null,{year:"2-digit"}),CURRENT_MONTH:d.bind(null,{month:"numeric"}),CURRENT_MONTH_NAME:d.bind(null,{month:"long"}),CURRENT_MONTH_NAME_SHORT:d.bind(null,{month:"short"}),CURRENT_DATE:d.bind(null,{day:"2-digit"}),CURRENT_DAY_NAME:d.bind(null,{weekday:"long"}),CURRENT_DAY_NAME_SHORT:d.bind(null,{weekday:"short"}),CURRENT_HOUR:d.bind(null,{hour:"2-digit",hour12:!1}),CURRENT_MINUTE:d.bind(null,{minute:"2-digit"}),CURRENT_SECOND:d.bind(null,{second:"2-digit"})};function d(e){var t=(new Date).toLocaleString("en-us",e);return 1==t.length?"0"+t:t}p.SELECTED_TEXT=p.SELECTION;var g=function(){this.snippetMap={},this.snippetNameMap={}};(function(){r.implement(this,s),this.getTokenizer=function(){return g.$tokenizer||this.createTokenizer()},this.createTokenizer=function(){function e(e){return e=e.substr(1),/^\d+$/.test(e)?[{tabstopId:parseInt(e,10)}]:[{text:e}]}function t(e){return"(?:[^\\\\"+e+"]|\\\\.)"}var n={regex:"/("+t("/")+"+)/",onMatch:function(e,t,n){var i=n[0];return i.fmtString=!0,i.guard=e.slice(1,-1),i.flag="",""},next:"formatString"};return g.$tokenizer=new l({start:[{regex:/\\./,onMatch:function(e,t,n){var i=e[1];return("}"==i&&n.length||-1!="`$\\".indexOf(i))&&(e=i),[e]}},{regex:/}/,onMatch:function(e,t,n){return[n.length?n.shift():e]}},{regex:/\$(?:\d+|\w+)/,onMatch:e},{regex:/\$\{[\dA-Z_a-z]+/,onMatch:function(t,n,i){var r=e(t.substr(1));return i.unshift(r[0]),r},next:"snippetVar"},{regex:/\n/,token:"newline",merge:!1}],snippetVar:[{regex:"\\|"+t("\\|")+"*\\|",onMatch:function(e,t,n){var i=e.slice(1,-1).replace(/\\[,|\\]|,/g,(function(e){return 2==e.length?e[1]:"\0"})).split("\0").map((function(e){return{value:e}}));return n[0].choices=i,[i[0]]},next:"start"},n,{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"start"}],formatString:[{regex:/:/,onMatch:function(e,t,n){return n.length&&n[0].expectElse?(n[0].expectElse=!1,n[0].ifEnd={elseEnd:n[0]},[n[0].ifEnd]):":"}},{regex:/\\./,onMatch:function(e,t,n){var i=e[1];return"}"==i&&n.length||-1!="`$\\".indexOf(i)?e=i:"n"==i?e="\n":"t"==i?e="\t":-1!="ulULE".indexOf(i)&&(e={changeCase:i,local:i>"a"}),[e]}},{regex:"/\\w*}",onMatch:function(e,t,n){var i=n.shift();return i&&(i.flag=e.slice(1,-1)),this.next=i&&i.tabstopId?"start":"",[i||e]},next:"start"},{regex:/\$(?:\d+|\w+)/,onMatch:function(e,t,n){return[{text:e.slice(1)}]}},{regex:/\${\w+/,onMatch:function(e,t,n){var i={text:e.slice(2)};return n.unshift(i),[i]},next:"formatStringVar"},{regex:/\n/,token:"newline",merge:!1},{regex:/}/,onMatch:function(e,t,n){var i=n.shift();return this.next=i&&i.tabstopId?"start":"",[i||e]},next:"start"}],formatStringVar:[{regex:/:\/\w+}/,onMatch:function(e,t,n){return n[0].formatFunction=e.slice(2,-1),[n.shift()]},next:"formatString"},n,{regex:/:[\?\-+]?/,onMatch:function(e,t,n){"+"==e[1]&&(n[0].ifEnd=n[0]),"?"==e[1]&&(n[0].expectElse=!0)},next:"formatString"},{regex:"([^:}\\\\]|\\\\.)*:?",token:"",next:"formatString"}]})},this.tokenizeTmSnippet=function(e,t){return this.getTokenizer().getLineTokens(e,t).tokens.map((function(e){return e.value||e}))},this.getVariableValue=function(e,t,n){if(/^\d+$/.test(t))return(this.variables.__||{})[t]||"";if(/^[A-Z]\d+$/.test(t))return(this.variables[t[0]+"__"]||{})[t.substr(1)]||"";if(t=t.replace(/^TM_/,""),!this.variables.hasOwnProperty(t))return"";var i=this.variables[t];return"function"==typeof i&&(i=this.variables[t](e,t,n)),null==i?"":i},this.variables=p,this.tmStrFormat=function(e,t,n){if(!t.fmt)return e;var i=t.flag||"",r=t.guard;r=new RegExp(r,i.replace(/[^gim]/g,""));var s="string"==typeof t.fmt?this.tokenizeTmSnippet(t.fmt,"formatString"):t.fmt,a=this,o=e.replace(r,(function(){var e=a.variables.__;a.variables.__=[].slice.call(arguments);for(var t=a.resolveVariables(s,n),i="E",r=0;r<t.length;r++){var o=t[r];if("object"==typeof o)if(t[r]="",o.changeCase&&o.local){var c=t[r+1];c&&"string"==typeof c&&("u"==o.changeCase?t[r]=c[0].toUpperCase():t[r]=c[0].toLowerCase(),t[r+1]=c.substr(1))}else o.changeCase&&(i=o.changeCase);else"U"==i?t[r]=o.toUpperCase():"L"==i&&(t[r]=o.toLowerCase())}return a.variables.__=e,t.join("")}));return o},this.tmFormatFunction=function(e,t,n){return"upcase"==t.formatFunction?e.toUpperCase():"downcase"==t.formatFunction?e.toLowerCase():e},this.resolveVariables=function(e,t){for(var n=[],i="",r=!0,s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){if(a){if(r=!1,a.fmtString){var o=e.indexOf(a,s+1);-1==o&&(o=e.length),a.fmt=e.slice(s+1,o),s=o}if(a.text){var c=this.getVariableValue(t,a.text,i)+"";a.fmtString&&(c=this.tmStrFormat(c,a,t)),a.formatFunction&&(c=this.tmFormatFunction(c,a,t)),c&&!a.ifEnd?(n.push(c),h(a)):!c&&a.ifEnd&&h(a.ifEnd)}else a.elseEnd?h(a.elseEnd):(null!=a.tabstopId||null!=a.changeCase)&&n.push(a)}}else n.push(a),"\n"==a?(r=!0,i=""):r&&(i=/^\t*/.exec(a)[0],r=/\S/.test(a))}function h(t){var n=e.indexOf(t,s+1);-1!=n&&(s=n)}return n},this.insertSnippetForSelection=function(e,t){var n=e.getCursorPosition(),i=e.session.getLine(n.row),r=e.session.getTabString(),s=i.match(/^\s*/)[0];n.column<s.length&&(s=s.slice(0,n.column)),t=t.replace(/\r/g,"");var a=this.tokenizeTmSnippet(t);a=(a=this.resolveVariables(a,e)).map((function(e){return"\n"==e?e+s:"string"==typeof e?e.replace(/\t/g,r):e}));var o=[];a.forEach((function(e,t){if("object"==typeof e){var n=e.tabstopId,i=o[n];if(i||((i=o[n]=[]).index=n,i.value="",i.parents={}),-1===i.indexOf(e)){e.choices&&!i.choices&&(i.choices=e.choices),i.push(e);var r=a.indexOf(e,t+1);if(-1!==r){var s=a.slice(t+1,r);s.some((function(e){return"object"==typeof e}))&&!i.value?i.value=s:!s.length||i.value&&"string"==typeof i.value||(i.value=s.join(""))}}}})),o.forEach((function(e){e.length=0}));var c={};function h(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];if("object"==typeof i){if(c[i.tabstopId])continue;i=t[e.lastIndexOf(i,n-1)]||{tabstopId:i.tabstopId}}t[n]=i}return t}for(var l=0;l<a.length;l++){var u=a[l];if("object"==typeof u){var p=u.tabstopId,d=o[p],g=a.indexOf(u,l+1);if(c[p])c[p]===u&&(delete c[p],Object.keys(c).forEach((function(e){d.parents[e]=!0})));else{c[p]=u;var m=d.value;"string"!=typeof m?m=h(m):u.fmt&&(m=this.tmStrFormat(m,u,e)),a.splice.apply(a,[l+1,Math.max(0,g-l)].concat(m,u)),-1===d.indexOf(u)&&d.push(u)}}}var b=0,v=0,x="";a.forEach((function(e){if("string"==typeof e){var t=e.split("\n");t.length>1?(v=t[t.length-1].length,b+=t.length-1):v+=e.length,x+=e}else e&&(e.start?e.end={row:b,column:v}:e.start={row:b,column:v})}));var _=e.getSelectionRange(),T=e.session.replace(_,x),S=new f(e),E=e.inVirtualSelectionMode&&e.selection.index;S.addTabstops(o,_.start,T,E)},this.insertSnippet=function(e,t){var n=this;if(e.inVirtualSelectionMode)return n.insertSnippetForSelection(e,t);e.forEachSelection((function(){n.insertSnippetForSelection(e,t)}),null,{keepOrder:!0}),e.tabstopManager&&e.tabstopManager.tabNext()},this.$getScope=function(e){var t=e.session.$mode.$id||"";if("html"===(t=t.split("/").pop())||"php"===t){"php"!==t||e.session.$mode.inlinePhp||(t="html");var n=e.getCursorPosition(),i=e.session.getState(n.row);"object"==typeof i&&(i=i[0]),i.substring&&("js-"==i.substring(0,3)?t="javascript":"css-"==i.substring(0,4)?t="css":"php-"==i.substring(0,4)&&(t="php"))}return t},this.getActiveScopes=function(e){var t=this.$getScope(e),n=[t],i=this.snippetMap;return i[t]&&i[t].includeScopes&&n.push.apply(n,i[t].includeScopes),n.push("_"),n},this.expandWithTab=function(e,t){var n=this,i=e.forEachSelection((function(){return n.expandSnippetForSelection(e,t)}),null,{keepOrder:!0});return i&&e.tabstopManager&&e.tabstopManager.tabNext(),i},this.expandSnippetForSelection=function(e,t){var n,i=e.getCursorPosition(),r=e.session.getLine(i.row),s=r.substring(0,i.column),a=r.substr(i.column),o=this.snippetMap;return this.getActiveScopes(e).some((function(e){var t=o[e];return t&&(n=this.findMatchingSnippet(t,s,a)),!!n}),this),!!n&&(t&&t.dryRun||(e.session.doc.removeInLine(i.row,i.column-n.replaceBefore.length,i.column+n.replaceAfter.length),this.variables.M__=n.matchBefore,this.variables.T__=n.matchAfter,this.insertSnippetForSelection(e,n.content),this.variables.M__=this.variables.T__=null),!0)},this.findMatchingSnippet=function(e,t,n){for(var i=e.length;i--;){var r=e[i];if((!r.startRe||r.startRe.test(t))&&((!r.endRe||r.endRe.test(n))&&(r.startRe||r.endRe)))return r.matchBefore=r.startRe?r.startRe.exec(t):[""],r.matchAfter=r.endRe?r.endRe.exec(n):[""],r.replaceBefore=r.triggerRe?r.triggerRe.exec(t)[0]:"",r.replaceAfter=r.endTriggerRe?r.endTriggerRe.exec(n)[0]:"",r}},this.snippetMap={},this.snippetNameMap={},this.register=function(e,t){var n=this.snippetMap,i=this.snippetNameMap,r=this;function s(e){return e&&!/^\^?\(.*\)\$?$|^\\b$/.test(e)&&(e="(?:"+e+")"),e||""}function o(e,t,n){return e=s(e),t=s(t),n?(e=t+e)&&"$"!=e[e.length-1]&&(e+="$"):(e+=t)&&"^"!=e[0]&&(e="^"+e),new RegExp(e)}function c(e){e.scope||(e.scope=t||"_"),t=e.scope,n[t]||(n[t]=[],i[t]={});var s=i[t];if(e.name){var c=s[e.name];c&&r.unregister(c),s[e.name]=e}n[t].push(e),e.prefix&&(e.tabTrigger=e.prefix),!e.content&&e.body&&(e.content=Array.isArray(e.body)?e.body.join("\n"):e.body),e.tabTrigger&&!e.trigger&&(!e.guard&&/^\w/.test(e.tabTrigger)&&(e.guard="\\b"),e.trigger=a.escapeRegExp(e.tabTrigger)),(e.trigger||e.guard||e.endTrigger||e.endGuard)&&(e.startRe=o(e.trigger,e.guard,!0),e.triggerRe=new RegExp(e.trigger),e.endRe=o(e.endTrigger,e.endGuard,!0),e.endTriggerRe=new RegExp(e.endTrigger))}e||(e=[]),Array.isArray(e)?e.forEach(c):Object.keys(e).forEach((function(t){c(e[t])})),this._signal("registerSnippets",{scope:t})},this.unregister=function(e,t){var n=this.snippetMap,i=this.snippetNameMap;function r(e){var r=i[e.scope||t];if(r&&r[e.name]){delete r[e.name];var s=n[e.scope||t],a=s&&s.indexOf(e);a>=0&&s.splice(a,1)}}e.content?r(e):Array.isArray(e)&&e.forEach(r)},this.parseSnippetFile=function(e){e=e.replace(/\r/g,"");for(var t,n=[],i={},r=/^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm;t=r.exec(e);){if(t[1])try{i=JSON.parse(t[1]),n.push(i)}catch(e){}if(t[4])i.content=t[4].replace(/^\t/gm,""),n.push(i),i={};else{var s=t[2],a=t[3];if("regex"==s){var o=/\/((?:[^\/\\]|\\.)*)|$/g;i.guard=o.exec(a)[1],i.trigger=o.exec(a)[1],i.endTrigger=o.exec(a)[1],i.endGuard=o.exec(a)[1]}else"snippet"==s?(i.tabTrigger=a.match(/^\S*/)[0],i.name||(i.name=a)):s&&(i[s]=a)}}return n},this.getSnippetByName=function(e,t){var n,i=this.snippetNameMap;return this.getActiveScopes(t).some((function(t){var r=i[t];return r&&(n=r[e]),!!n}),this),n}}).call(g.prototype);var f=function(e){if(e.tabstopManager)return e.tabstopManager;e.tabstopManager=this,this.$onChange=this.onChange.bind(this),this.$onChangeSelection=a.delayedCall(this.onChangeSelection.bind(this)).schedule,this.$onChangeSession=this.onChangeSession.bind(this),this.$onAfterExec=this.onAfterExec.bind(this),this.attach(e)};(function(){this.attach=function(e){this.index=0,this.ranges=[],this.tabstops=[],this.$openTabstops=null,this.selectedTabstop=null,this.editor=e,this.editor.on("change",this.$onChange),this.editor.on("changeSelection",this.$onChangeSelection),this.editor.on("changeSession",this.$onChangeSession),this.editor.commands.on("afterExec",this.$onAfterExec),this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler)},this.detach=function(){this.tabstops.forEach(this.removeTabstopMarkers,this),this.ranges=null,this.tabstops=null,this.selectedTabstop=null,this.editor.removeListener("change",this.$onChange),this.editor.removeListener("changeSelection",this.$onChangeSelection),this.editor.removeListener("changeSession",this.$onChangeSession),this.editor.commands.removeListener("afterExec",this.$onAfterExec),this.editor.keyBinding.removeKeyboardHandler(this.keyboardHandler),this.editor.tabstopManager=null,this.editor=null},this.onChange=function(e){for(var t="r"==e.action[0],n=this.selectedTabstop||{},i=n.parents||{},r=(this.tabstops||[]).slice(),s=0;s<r.length;s++){var a=r[s],o=a==n||i[a.index];if(a.rangeList.$bias=o?0:1,"remove"==e.action&&a!==n){var c=a.parents&&a.parents[n.index],h=a.rangeList.pointIndex(e.start,c);h=h<0?-h-1:h+1;var l=a.rangeList.pointIndex(e.end,c);l=l<0?-l-1:l-1;for(var u=a.rangeList.ranges.slice(h,l),p=0;p<u.length;p++)this.removeRange(u[p])}a.rangeList.$onChange(e)}var d=this.editor.session;this.$inChange||!t||1!=d.getLength()||d.getValue()||this.detach()},this.updateLinkedFields=function(){var e=this.selectedTabstop;if(e&&e.hasLinkedRanges&&e.firstNonLinked){this.$inChange=!0;for(var n=this.editor.session,i=n.getTextRange(e.firstNonLinked),r=0;r<e.length;r++){var s=e[r];if(s.linked){var a=s.original,o=t.snippetManager.tmStrFormat(i,a,this.editor);n.replace(s,o)}}this.$inChange=!1}},this.onAfterExec=function(e){e.command&&!e.command.readOnly&&this.updateLinkedFields()},this.onChangeSelection=function(){if(this.editor){for(var e=this.editor.selection.lead,t=this.editor.selection.anchor,n=this.editor.selection.isEmpty(),i=0;i<this.ranges.length;i++)if(!this.ranges[i].linked){var r=this.ranges[i].contains(e.row,e.column),s=n||this.ranges[i].contains(t.row,t.column);if(r&&s)return}this.detach()}},this.onChangeSession=function(){this.detach()},this.tabNext=function(e){var t=this.tabstops.length,n=this.index+(e||1);(n=Math.min(Math.max(n,1),t))==t&&(n=0),this.selectTabstop(n),0===n&&this.detach()},this.selectTabstop=function(e){this.$openTabstops=null;var t=this.tabstops[this.index];if(t&&this.addTabstopMarkers(t),this.index=e,(t=this.tabstops[this.index])&&t.length){this.selectedTabstop=t;var n=t.firstNonLinked||t;if(t.choices&&(n.cursor=n.start),this.editor.inVirtualSelectionMode)this.editor.selection.fromOrientedRange(n);else{var i=this.editor.multiSelect;i.toSingleRange(n);for(var r=0;r<t.length;r++)t.hasLinkedRanges&&t[r].linked||i.addRange(t[r].clone(),!0)}this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler),this.selectedTabstop&&this.selectedTabstop.choices&&this.editor.execCommand("startAutocomplete",{matches:this.selectedTabstop.choices})}},this.addTabstops=function(e,t,n){var i=this.useLink||!this.editor.getOption("enableMultiselect");if(this.$openTabstops||(this.$openTabstops=[]),!e[0]){var r=o.fromPoints(n,n);b(r.start,t),b(r.end,t),e[0]=[r],e[0].index=0}var s=[this.index+1,0],a=this.ranges;e.forEach((function(e,n){for(var r=this.$openTabstops[n]||e,h=0;h<e.length;h++){var l=e[h],u=o.fromPoints(l.start,l.end||l.start);m(u.start,t),m(u.end,t),u.original=l,u.tabstop=r,a.push(u),r!=e?r.unshift(u):r[h]=u,l.fmtString||r.firstNonLinked&&i?(u.linked=!0,r.hasLinkedRanges=!0):r.firstNonLinked||(r.firstNonLinked=u)}r.firstNonLinked||(r.hasLinkedRanges=!1),r===e&&(s.push(r),this.$openTabstops[n]=r),this.addTabstopMarkers(r),r.rangeList=r.rangeList||new c,r.rangeList.$bias=0,r.rangeList.addList(r)}),this),s.length>2&&(this.tabstops.length&&s.push(s.splice(2,1)[0]),this.tabstops.splice.apply(this.tabstops,s))},this.addTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){e.markerId||(e.markerId=t.addMarker(e,"ace_snippet-marker","text"))}))},this.removeTabstopMarkers=function(e){var t=this.editor.session;e.forEach((function(e){t.removeMarker(e.markerId),e.markerId=null}))},this.removeRange=function(e){var t=e.tabstop.indexOf(e);-1!=t&&e.tabstop.splice(t,1),-1!=(t=this.ranges.indexOf(e))&&this.ranges.splice(t,1),-1!=(t=e.tabstop.rangeList.ranges.indexOf(e))&&e.tabstop.splice(t,1),this.editor.session.removeMarker(e.markerId),e.tabstop.length||(-1!=(t=this.tabstops.indexOf(e.tabstop))&&this.tabstops.splice(t,1),this.tabstops.length||this.detach())},this.keyboardHandler=new h,this.keyboardHandler.bindKeys({Tab:function(e){t.snippetManager&&t.snippetManager.expandWithTab(e)||(e.tabstopManager.tabNext(1),e.renderer.scrollCursorIntoView())},"Shift-Tab":function(e){e.tabstopManager.tabNext(-1),e.renderer.scrollCursorIntoView()},Esc:function(e){e.tabstopManager.detach()}})}).call(f.prototype);var m=function(e,t){0==e.row&&(e.column+=t.column),e.row+=t.row},b=function(e,t){e.row==t.row&&(e.column-=t.column),e.row-=t.row};i.importCssString(".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}","snippets.css",!1),t.snippetManager=new g;var v=e("./editor").Editor;(function(){this.insertSnippet=function(e,n){return t.snippetManager.insertSnippet(this,e,n)},this.expandSnippet=function(e){return t.snippetManager.expandWithTab(this,e)}}).call(v.prototype)})),ace.define("ace/ext/emmet",["require","exports","module","ace/keyboard/hash_handler","ace/editor","ace/snippets","ace/range","ace/config","resources","resources","tabStops","resources","utils","actions"],(function(e,t,n){"use strict";var i,r,s=e("../keyboard/hash_handler").HashHandler,a=e("../editor").Editor,o=e("../snippets").snippetManager,c=e("../range").Range,h=e("../config");function l(){}l.prototype={setupContext:function(e){this.ace=e,this.indentation=e.session.getTabString(),i||(i=window.emmet),(i.resources||i.require("resources")).setVariable("indentation",this.indentation),this.$syntax=null,this.$syntax=this.getSyntax()},getSelectionRange:function(){var e=this.ace.getSelectionRange(),t=this.ace.session.doc;return{start:t.positionToIndex(e.start),end:t.positionToIndex(e.end)}},createSelection:function(e,t){var n=this.ace.session.doc;this.ace.selection.setRange({start:n.indexToPosition(e),end:n.indexToPosition(t)})},getCurrentLineRange:function(){var e=this.ace,t=e.getCursorPosition().row,n=e.session.getLine(t).length,i=e.session.doc.positionToIndex({row:t,column:0});return{start:i,end:i+n}},getCaretPos:function(){var e=this.ace.getCursorPosition();return this.ace.session.doc.positionToIndex(e)},setCaretPos:function(e){var t=this.ace.session.doc.indexToPosition(e);this.ace.selection.moveToPosition(t)},getCurrentLine:function(){var e=this.ace.getCursorPosition().row;return this.ace.session.getLine(e)},replaceContent:function(e,t,n,i){null==n&&(n=null==t?this.getContent().length:t),null==t&&(t=0);var r=this.ace,s=r.session.doc,a=c.fromPoints(s.indexToPosition(t),s.indexToPosition(n));r.session.remove(a),a.end=a.start,e=this.$updateTabstops(e),o.insertSnippet(r,e)},getContent:function(){return this.ace.getValue()},getSyntax:function(){if(this.$syntax)return this.$syntax;var e=this.ace.session.$modeId.split("/").pop();if("html"==e||"php"==e){var t=this.ace.getCursorPosition(),n=this.ace.session.getState(t.row);"string"!=typeof n&&(n=n[0]),n&&((n=n.split("-")).length>1?e=n[0]:"php"==e&&(e="html"))}return e},getProfileName:function(){var e=i.resources||i.require("resources");switch(this.getSyntax()){case"css":return"css";case"xml":case"xsl":return"xml";case"html":var t=e.getVariable("profile");return t||(t=-1!=this.ace.session.getLines(0,2).join("").search(/<!DOCTYPE[^>]+XHTML/i)?"xhtml":"html"),t;default:var n=this.ace.session.$mode;return n.emmetConfig&&n.emmetConfig.profile||"xhtml"}},prompt:function(e){return prompt(e)},getSelection:function(){return this.ace.session.getTextRange()},getFilePath:function(){return""},$updateTabstops:function(e){var t=0,n=null,r=i.tabStops||i.require("tabStops"),s=(i.resources||i.require("resources")).getVocabulary("user"),a={tabstop:function(e){var i=parseInt(e.group,10),s=0===i;s?i=++t:i+=1e3;var o=e.placeholder;o&&(o=r.processText(o,a));var c="${"+i+(o?":"+o:"")+"}";return s&&(n=[e.start,c]),c},escape:function(e){return"$"==e?"\\$":"\\"==e?"\\\\":e}};if(e=r.processText(e,a),s.variables.insert_final_tabstop&&!/\$\{0\}$/.test(e))e+="${0}";else if(n){e=(i.utils?i.utils.common:i.require("utils")).replaceSubstring(e,"${0}",n[0],n[1])}return e}};var u={expand_abbreviation:{mac:"ctrl+alt+e",win:"alt+e"},match_pair_outward:{mac:"ctrl+d",win:"ctrl+,"},match_pair_inward:{mac:"ctrl+j",win:"ctrl+shift+0"},matching_pair:{mac:"ctrl+alt+j",win:"alt+j"},next_edit_point:"alt+right",prev_edit_point:"alt+left",toggle_comment:{mac:"command+/",win:"ctrl+/"},split_join_tag:{mac:"shift+command+'",win:"shift+ctrl+`"},remove_tag:{mac:"command+'",win:"shift+ctrl+;"},evaluate_math_expression:{mac:"shift+command+y",win:"shift+ctrl+y"},increment_number_by_1:"ctrl+up",decrement_number_by_1:"ctrl+down",increment_number_by_01:"alt+up",decrement_number_by_01:"alt+down",increment_number_by_10:{mac:"alt+command+up",win:"shift+alt+up"},decrement_number_by_10:{mac:"alt+command+down",win:"shift+alt+down"},select_next_item:{mac:"shift+command+.",win:"shift+ctrl+."},select_previous_item:{mac:"shift+command+,",win:"shift+ctrl+,"},reflect_css_value:{mac:"shift+command+r",win:"shift+ctrl+r"},encode_decode_data_url:{mac:"shift+ctrl+d",win:"ctrl+'"},expand_abbreviation_with_tab:"Tab",wrap_with_abbreviation:{mac:"shift+ctrl+a",win:"shift+ctrl+a"}},p=new l;for(var d in t.commands=new s,t.runEmmetCommand=function e(n){if("expand_abbreviation_with_tab"==this.action){if(!n.selection.isEmpty())return!1;var r=n.selection.lead,s=n.session.getTokenAt(r.row,r.column);if(s&&/\btag\b/.test(s.type))return!1}try{p.setupContext(n);var a=i.actions||i.require("actions");if("wrap_with_abbreviation"==this.action)return setTimeout((function(){a.run("wrap_with_abbreviation",p)}),0);var o=a.run(this.action,p)}catch(r){if(!i){var c=t.load(e.bind(this,n));return"expand_abbreviation_with_tab"!=this.action&&c}n._signal("changeStatus","string"==typeof r?r:r.message),h.warn(r),o=!1}return o},u)t.commands.addCommand({name:"emmet:"+d,action:d,bindKey:u[d],exec:t.runEmmetCommand,multiSelectAction:"forEach"});t.updateCommands=function(e,n){n?e.keyBinding.addKeyboardHandler(t.commands):e.keyBinding.removeKeyboardHandler(t.commands)},t.isSupportedMode=function(e){if(!e)return!1;if(e.emmetConfig)return!0;var t=e.$id||e;return/css|less|scss|sass|stylus|html|php|twig|ejs|handlebars/.test(t)},t.isAvailable=function(e,n){if(/(evaluate_math_expression|expand_abbreviation)$/.test(n))return!0;var i=e.session.$mode,r=t.isSupportedMode(i);if(r&&i.$modes)try{p.setupContext(e),/js|php/.test(p.getSyntax())&&(r=!1)}catch(e){}return r};var g=function(e,n){var i=n;if(i){var r=t.isSupportedMode(i.session.$mode);!1===e.enableEmmet&&(r=!1),r&&t.load(),t.updateCommands(i,r)}};t.load=function(e){return"string"!=typeof r?(h.warn("script for emmet-core is not loaded"),!1):(h.loadModule(r,(function(){r=null,e&&e()})),!0)},t.AceEmmetEditor=l,h.defineOptions(a.prototype,"editor",{enableEmmet:{set:function(e){this[e?"on":"removeListener"]("changeMode",g),g({enableEmmet:!!e},this)},value:!0}}),t.setCore=function(e){"string"==typeof e?r=e:i=e}})),ace.require(["ace/ext/emmet"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));