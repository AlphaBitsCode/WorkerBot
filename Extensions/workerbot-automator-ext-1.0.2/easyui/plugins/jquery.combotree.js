/* Copyright (C) 2023 by WorkerBot.AI */
!function(e){function t(t){var n=e.data(t,"combotree"),r=n.options,i=n.tree,a=[];if(r.multiple)a=e.map(i.tree("getChecked"),(function(e){return e.id}));else{var c=i.tree("getSelected");c&&a.push(c.id)}o(t,a=a.concat(r.unselectedValues),n.remainText)}function o(t,o,n){var r=e.data(t,"combotree"),i=r.options,a=r.tree,c=a.tree("options"),s=c.onBeforeCheck,u=c.onCheck,l=c.onBeforeSelect,d=c.onSelect;c.onBeforeCheck=c.onCheck=c.onBeforeSelect=c.onSelect=function(){},e.isArray(o)||(o=o.split(i.separator)),i.multiple||(o=o.length?[o[0]]:[""]);var m=e.map(o,(function(e){return String(e)}));a.find("div.tree-node-selected").removeClass("tree-node-selected"),e.map(a.tree("getChecked"),(function(t){-1==e.inArray(String(t.id),m)&&a.tree("uncheck",t.target)}));var f=[];if(i.unselectedValues=[],e.map(m,(function(t){var o,n,r,c=a.tree("find",t);c?(a.tree("check",c.target).tree("select",c.target),f.push(p(c))):(f.push((o=t,n=i.mappingRows,((r=e.easyui.getArrayItem(n,"id",o))?p(r):void 0)||t)),i.unselectedValues.push(t))})),i.multiple&&e.map(a.tree("getChecked"),(function(t){var o=String(t.id);-1==e.inArray(o,m)&&(m.push(o),f.push(p(t)))})),c.onBeforeCheck=s,c.onCheck=u,c.onBeforeSelect=l,c.onSelect=d,!n){var h=f.join(i.separator);e(t).combo("getText")!=h&&e(t).combo("setText",h)}function p(e){return e[i.textField||""]||e.text}e(t).combo("setValues",m)}e.fn.combotree=function(n,r){if("string"==typeof n){var i=e.fn.combotree.methods[n];return i?i(this,r):this.combo(n,r)}return n=n||{},this.each((function(){var r=e.data(this,"combotree");r?e.extend(r.options,n):e.data(this,"combotree",{options:e.extend({},e.fn.combotree.defaults,e.fn.combotree.parseOptions(this),n)}),function(n){var r=e.data(n,"combotree"),i=r.options,a=r.tree;e(n).addClass("combotree-f"),e(n).combo(e.extend({},i,{onShowPanel:function(){i.editable&&a.tree("doFilter",""),i.onShowPanel.call(this)}}));var c=e(n).combo("panel");a||(a=e("<ul></ul>").appendTo(c),r.tree=a),a.tree(e.extend({},i,{checkbox:i.multiple,onLoadSuccess:function(t,c){var s=e(n).combotree("getValues");i.multiple&&e.map(a.tree("getChecked"),(function(t){e.easyui.addArrayItem(s,t.id)})),o(n,s,r.remainText),i.onLoadSuccess.call(this,t,c)},onClick:function(o){i.multiple?e(this).tree(o.checked?"uncheck":"check",o.target):e(n).combo("hidePanel"),r.remainText=!1,t(n),i.onClick.call(this,o)},onCheck:function(e,o){r.remainText=!1,t(n),i.onCheck.call(this,e,o)}}))}(this)}))},e.fn.combotree.methods={options:function(t){var o=t.combo("options");return e.extend(e.data(t[0],"combotree").options,{width:o.width,height:o.height,originalValue:o.originalValue,disabled:o.disabled,readonly:o.readonly,editable:o.editable})},clone:function(t,o){var n=t.combo("clone",o);return n.data("combotree",{options:e.extend(!0,{},t.combotree("options")),tree:t.combotree("tree")}),n},tree:function(t){return e.data(t[0],"combotree").tree},loadData:function(t,o){return t.each((function(){e.data(this,"combotree").options.data=o,e.data(this,"combotree").tree.tree("loadData",o)}))},reload:function(t,o){return t.each((function(){var t=e.data(this,"combotree").options,n=e.data(this,"combotree").tree;o&&(t.url=o),n.tree({url:t.url})}))},setValues:function(t,n){return t.each((function(){var t=e(this).combotree("options");e.isArray(n)&&(n=e.map(n,(function(o){return o&&"object"==typeof o?(e.easyui.addArrayItem(t.mappingRows,"id",o),o.id):o}))),o(this,n)}))},setValue:function(t,o){return t.each((function(){e(this).combotree("setValues",e.isArray(o)?o:[o])}))},clear:function(t){return t.each((function(){e(this).combotree("setValues",[])}))},reset:function(t){return t.each((function(){var t=e(this).combotree("options");t.multiple?e(this).combotree("setValues",t.originalValue):e(this).combotree("setValue",t.originalValue)}))}},e.fn.combotree.parseOptions=function(t){return e.extend({},e.fn.combo.parseOptions(t),e.fn.tree.parseOptions(t))},e.fn.combotree.defaults=e.extend({},e.fn.combo.defaults,e.fn.tree.defaults,{editable:!1,textField:null,unselectedValues:[],mappingRows:[],keyHandler:{up:function(e){},down:function(e){},left:function(e){},right:function(e){},enter:function(t){var o;o=this,e.data(o,"combotree").remainText=!1,e(o).combotree("setValues",e(o).combotree("getValues")),e(o).combotree("hidePanel")},query:function(t,o){!function(t,o){var n=e.data(t,"combotree"),r=n.options,i=n.tree;n.remainText=!0,i.tree("doFilter",r.multiple?o.split(r.separator):o)}(this,t)}}})}(jQuery);