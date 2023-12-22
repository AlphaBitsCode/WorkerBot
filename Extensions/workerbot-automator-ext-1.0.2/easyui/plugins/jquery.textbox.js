/* Copyright (C) 2023 by WorkerBot.AI */
!function(t){var e=0;function o(e){t(e).addClass("textbox-f").hide();var o=t('<span class="textbox"><input class="textbox-text" autocomplete="off"><input type="hidden" class="textbox-value"></span>').insertAfter(e),n=t(e).attr("name");return n&&(o.find("input.textbox-value").attr("name",n),t(e).removeAttr("name").attr("textboxName",n)),o}function n(e,o){var n=t.data(e,"textbox"),i=n.options,a=n.textbox,l=a.parent();if(o&&("object"==typeof o?t.extend(i,o):i.width=o),isNaN(parseInt(i.width))){var x=t(e).clone();x.css("visibility","hidden"),x.insertAfter(e),i.width=x.outerWidth(),x.remove()}i.autoSize&&(t(e).textbox("autoSize"),i.width=a.css("width","").outerWidth(),"top"!=i.labelPosition&&(i.width+=t(n.label).outerWidth()));var s=a.is(":visible");s||a.appendTo("body");var r=a.find(".textbox-text"),b=a.find(".textbox-button"),d=a.find(".textbox-addon"),u=d.find(".textbox-icon");"auto"==i.height&&r.css({margin:"",paddingTop:"",paddingBottom:"",height:"",lineHeight:""}),a._size(i,l),i.label&&i.labelPosition&&("top"==i.labelPosition?(n.label._size({width:"auto"==i.labelWidth?a.outerWidth():i.labelWidth},a),"auto"!=i.height&&a._size("height",a.outerHeight()-n.label.outerHeight())):(n.label._size({width:i.labelWidth,height:a.outerHeight()},a),i.multiline||n.label.css("lineHeight",n.label.height()+"px"),a._size("width",a.outerWidth()-n.label.outerWidth()))),"left"==i.buttonAlign||"right"==i.buttonAlign?b.linkbutton("resize",{height:a.height()}):b.linkbutton("resize",{width:"100%"});var c=a.width()-u.length*i.iconWidth-p("left")-p("right"),h="auto"==i.height?r.outerHeight():a.height()-p("top")-p("bottom");function f(t){return(i.iconAlign==t?d._outerWidth():0)+p(t)}function p(e){var o=0;return b.filter(".textbox-button-"+e).each((function(){o+="left"==e||"right"==e?t(this).outerWidth():t(this).outerHeight()})),o}d.css(i.iconAlign,p(i.iconAlign)+"px"),d.css("top",p("top")+"px"),u.css({width:i.iconWidth+"px",height:h+"px"}),r.css({paddingLeft:e.style.paddingLeft||"",paddingRight:e.style.paddingRight||"",marginLeft:f("left"),marginRight:f("right"),marginTop:p("top"),marginBottom:p("bottom")}),i.multiline?(r.css({paddingTop:e.style.paddingTop||"",paddingBottom:e.style.paddingBottom||""}),r._outerHeight(h)):r.css({paddingTop:0,paddingBottom:0,height:h+"px",lineHeight:h+"px"}),r._outerWidth(c),i.onResizing.call(e,i.width,i.height),s||a.insertAfter(e),i.onResize.call(e,i.width,i.height)}function i(e){var o=t(e).textbox("options");t(e).textbox("textbox").validatebox(t.extend({},o,{deltaX:function(o){return t(e).textbox("getTipX",o)},deltaY:function(o){return t(e).textbox("getTipY",o)},onBeforeValidate:function(){o.onBeforeValidate.call(e);var n=t(this);n.is(":focus")||n.val()!==o.value&&(o.oldInputValue=n.val(),n.val(o.value))},onValidate:function(n){var i=t(this);null!=o.oldInputValue&&(i.val(o.oldInputValue),o.oldInputValue=void 0);var a=i.parent();n?a.removeClass("textbox-invalid"):a.addClass("textbox-invalid"),o.onValidate.call(e,n)}}))}function a(e){var o=t.data(e,"textbox"),i=o.options,a=o.textbox,l=a.find(".textbox-text");if(l.attr("placeholder",i.prompt),l._unbind(".textbox"),t(o.label)._unbind(".textbox"),!i.disabled&&!i.readonly)for(var x in o.label&&t(o.label)._bind("click.textbox",(function(o){i.hasFocusMe||(l.focus(),t(e).textbox("setSelectionRange",{start:0,end:l.val().length}))})),l._bind("blur.textbox",(function(e){a.hasClass("textbox-focused")&&(i.value=t(this).val(),""==i.value?t(this).val(i.prompt).addClass("textbox-prompt"):t(this).removeClass("textbox-prompt"),a.removeClass("textbox-focused"),a.closest(".form-field").removeClass("form-field-focused"))}))._bind("focus.textbox",(function(e){i.hasFocusMe=!0,a.hasClass("textbox-focused")||(t(this).val()!=i.value&&t(this).val(i.value),t(this).removeClass("textbox-prompt"),a.addClass("textbox-focused"),a.closest(".form-field").addClass("form-field-focused"))})),i.inputEvents)l._bind(x+".textbox",{target:e},i.inputEvents[x]);var s=a.find(".textbox-addon");s._unbind()._bind("click",{target:e},(function(o){var n=t(o.target).closest("a.textbox-icon:not(.textbox-icon-disabled)");if(n.length){var a=parseInt(n.attr("icon-index")),l=i.icons[a];l&&l.handler&&l.handler.call(n[0],o),i.onClickIcon.call(e,a)}})),s.find(".textbox-icon").each((function(e){var o=i.icons[e],n=t(this);!o||o.disabled||i.disabled||i.readonly?n.addClass("textbox-icon-disabled"):n.removeClass("textbox-icon-disabled")})),a.find(".textbox-button").linkbutton(i.disabled||i.readonly?"disable":"enable"),a._unbind(".textbox")._bind("_resize.textbox",(function(o,i){return(t(this).hasClass("easyui-fluid")||i)&&n(e),!1}))}function l(e,o){var n=t.data(e,"textbox"),i=n.options,a=n.textbox,l=a.find(".textbox-text"),x=t(e).add(a.find(".textbox-value"));i.disabled=o,i.disabled?(l.blur(),l.validatebox("disable"),a.addClass("textbox-disabled"),x._propAttr("disabled",!0),t(n.label).addClass("textbox-label-disabled")):(l.validatebox("enable"),a.removeClass("textbox-disabled"),x._propAttr("disabled",!1),t(n.label).removeClass("textbox-label-disabled"))}function x(e,o){var n=t.data(e,"textbox"),i=n.options,a=n.textbox,l=a.find(".textbox-text");i.readonly=null==o||o,i.readonly&&l.triggerHandler("blur.textbox"),l.validatebox("readonly",i.readonly),i.readonly?(a.addClass("textbox-readonly"),t(n.label).addClass("textbox-label-readonly")):(a.removeClass("textbox-readonly"),t(n.label).removeClass("textbox-label-readonly"))}t.fn.textbox=function(s,r){if("string"==typeof s){var b=t.fn.textbox.methods[s];return b?b(this,r):this.each((function(){t(this).textbox("textbox").validatebox(s,r)}))}return s=s||{},this.each((function(){var r=t.data(this,"textbox");r?(t.extend(r.options,s),null!=s.value&&(r.options.originalValue=s.value)):(r=t.data(this,"textbox",{options:t.extend({},t.fn.textbox.defaults,t.fn.textbox.parseOptions(this),s),textbox:o(this)})).options.originalValue=r.options.value,function(o){var n=t.data(o,"textbox"),a=n.options,s=n.textbox,r="_easyui_textbox_input"+ ++e;s.addClass(a.cls),s.find(".textbox-text").remove(),a.multiline?t('<textarea id="'+r+'" class="textbox-text" autocomplete="off"></textarea>').prependTo(s):t('<input id="'+r+'" type="'+a.type+'" class="textbox-text" autocomplete="off">').prependTo(s),t("#"+r).attr("tabindex",t(o).attr("tabindex")||"").css("text-align",o.style.textAlign||""),s.find(".textbox-addon").remove();var b=a.icons?t.extend(!0,[],a.icons):[];if(a.iconCls&&b.push({iconCls:a.iconCls,disabled:!0}),b.length){var d=t('<span class="textbox-addon"></span>').prependTo(s);d.addClass("textbox-addon-"+a.iconAlign);for(var u=0;u<b.length;u++)d.append('<a href="javascript:;" class="textbox-icon '+b[u].iconCls+'" icon-index="'+u+'" tabindex="-1"></a>')}s.find(".textbox-button").remove(),(a.buttonText||a.buttonIcon)&&t('<a href="javascript:;" class="textbox-button"></a>').prependTo(s).addClass("textbox-button-"+a.buttonAlign).linkbutton({text:a.buttonText,iconCls:a.buttonIcon,onClick:function(){var e=t(this).parent().prev();e.textbox("options").onClickButton.call(e[0])}}),a.label?"object"==typeof a.label?(n.label=t(a.label),n.label.attr("for",r)):(t(n.label).remove(),n.label=t('<label class="textbox-label"></label>').html(a.label),n.label.css("textAlign",a.labelAlign).attr("for",r),"after"==a.labelPosition?n.label.insertAfter(s):n.label.insertBefore(o),n.label.removeClass("textbox-label-left textbox-label-right textbox-label-top"),n.label.addClass("textbox-label-"+a.labelPosition)):t(n.label).remove(),i(o),l(o,a.disabled),x(o,a.readonly)}(this),a(this),r.options.doSize&&n(this);var b=r.options.value;r.options.value="",t(this).textbox("initValue",b)}))},t.fn.textbox.methods={options:function(e){return t.data(e[0],"textbox").options},cloneFrom:function(o,n){return o.each((function(){var o=t(this);if(!o.data("textbox")){t(n).data("textbox")||t(n).textbox();var l=t.extend(!0,{},t(n).textbox("options")),x=o.attr("name")||"";o.addClass("textbox-f").hide(),o.removeAttr("name").attr("textboxName",x);var s=t(n).next().clone().insertAfter(o),r="_easyui_textbox_input"+ ++e;s.find(".textbox-value").attr("name",x),s.find(".textbox-text").attr("id",r);var b=t(t(n).textbox("label")).clone();b.length&&(b.attr("for",r),"after"==l.labelPosition?b.insertAfter(o.next()):b.insertBefore(o)),t.data(this,"textbox",{options:l,textbox:s,label:b.length?b:void 0});var d=t(n).textbox("button");d.length&&o.textbox("button").linkbutton(t.extend(!0,{},d.linkbutton("options"))),a(this),i(this)}}))},textbox:function(e){return t.data(e[0],"textbox").textbox.find(".textbox-text")},button:function(e){return t.data(e[0],"textbox").textbox.find(".textbox-button")},label:function(e){return t.data(e[0],"textbox").label},destroy:function(e){return e.each((function(){var e,o,n;e=this,o=t.data(e,"textbox"),(n=o.textbox).find(".textbox-text").validatebox("destroy"),n.remove(),t(o.label).remove(),t(e).remove()}))},resize:function(t,e){return t.each((function(){n(this,e)}))},autoSize:function(e){return e.each((function(){!function(e){var o=t(e).textbox("options"),n=t(e).textbox("textbox"),i=t(e).next(),a=t("<span></span>").appendTo("body");a.attr("style",n.attr("style")),a.css({position:"absolute",top:-9999,left:-9999,width:"auto",fontFamily:n.css("fontFamily"),fontSize:n.css("fontSize"),fontWeight:n.css("fontWeight"),padding:n.css("padding"),whiteSpace:"nowrap"});var l=r(n.val()),x=r(o.prompt||"");a.remove();var s=Math.min(Math.max(l,x)+20,i.width());function r(t){var e=t.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");return a.html(e),a.outerWidth()}s=Math.max(l,x),n._outerWidth(s)}(this)}))},disable:function(t){return t.each((function(){l(this,!0),a(this)}))},enable:function(t){return t.each((function(){l(this,!1),a(this)}))},readonly:function(t,e){return t.each((function(){x(this,e),a(this)}))},setEditable:function(e,o){return e.each((function(){var e,n,i,l,s;e=this,n=o,i=t.data(e,"textbox"),l=i.options,s=i.textbox.find(".textbox-text"),l.editable=null==n||n,s.validatebox("setEditable",l.editable),x(e,l.readonly),a(this)}))},isValid:function(t){return t.textbox("textbox").validatebox("isValid")},clear:function(e){return e.each((function(){t(this).textbox("setValue","")}))},setText:function(e,o){return e.each((function(){var e=t(this).textbox("options"),n=t(this).textbox("textbox");o=null==o?"":String(o),t(this).textbox("getText")!=o&&n.val(o),e.value=o,n.is(":focus")||(o?n.removeClass("textbox-prompt"):n.val(e.prompt).addClass("textbox-prompt")),e.value?t(this).closest(".form-field").removeClass("form-field-empty"):t(this).closest(".form-field").addClass("form-field-empty"),t(this).textbox("validate"),e.autoSize&&t(this).textbox("resize")}))},initValue:function(e,o){return e.each((function(){var e=t.data(this,"textbox");t(this).textbox("setText",o),e.textbox.find(".textbox-value").val(o),t(this).val(o)}))},setValue:function(e,o){return e.each((function(){var e=t.data(this,"textbox").options,n=t(this).textbox("getValue");t(this).textbox("initValue",o),n!=o&&(e.onChange.call(this,o,n),t(this).closest("form").trigger("_change",[this]))}))},getText:function(t){var e=t.textbox("textbox");return e.is(":focus")?e.val():t.textbox("options").value},getValue:function(t){return t.data("textbox").textbox.find(".textbox-value").val()},reset:function(e){return e.each((function(){var e=t(this).textbox("options");t(this).textbox("textbox").val(e.originalValue),t(this).textbox("setValue",e.originalValue)}))},getIcon:function(t,e){return t.data("textbox").textbox.find(".textbox-icon:eq("+e+")")},getTipX:function(t,e){var o=t.data("textbox"),n=o.options,i=o.textbox,a=i.find(".textbox-text"),l=(e=e||n.tipPosition,i.offset()),x=a.offset(),s=i.outerWidth(),r=a.outerWidth();return"right"==e?s-r-x.left+l.left:"left"==e?l.left-x.left:(s-r-x.left+l.left)/2-(x.left-l.left)/2},getTipY:function(t,e){var o=t.data("textbox"),n=o.options,i=o.textbox,a=i.find(".textbox-text"),l=(e=e||n.tipPosition,i.offset()),x=a.offset(),s=i.outerHeight(),r=a.outerHeight();return"left"==e||"right"==e?(s-r-x.top+l.top)/2-(x.top-l.top)/2:"bottom"==e?s-r-x.top+l.top:l.top-x.top},getSelectionStart:function(t){return t.textbox("getSelectionRange").start},getSelectionRange:function(t){var e=t.textbox("textbox")[0],o=0,n=0;if("number"==typeof e.selectionStart)o=e.selectionStart,n=e.selectionEnd;else if(e.createTextRange){var i=document.selection.createRange(),a=e.createTextRange();a.setEndPoint("EndToStart",i),n=(o=a.text.length)+i.text.length}return{start:o,end:n}},setSelectionRange:function(e,o){return e.each((function(){var e=t(this).textbox("textbox")[0],n=o.start,i=o.end;if(e.setSelectionRange)e.setSelectionRange(n,i);else if(e.createTextRange){var a=e.createTextRange();a.collapse(),a.moveEnd("character",i),a.moveStart("character",n),a.select()}}))},show:function(e){return e.each((function(){t(this).next().show(),t(t(this).textbox("label")).show()}))},hide:function(e){return e.each((function(){t(this).next().hide(),t(t(this).textbox("label")).hide()}))}},t.fn.textbox.parseOptions=function(e){var o=t(e);return t.extend({},t.fn.validatebox.parseOptions(e),t.parser.parseOptions(e,["prompt","iconCls","iconAlign","buttonText","buttonIcon","buttonAlign","label","labelPosition","labelAlign","width","height",{multiline:"boolean",iconWidth:"number",labelWidth:"number",autoSize:"boolean"}]),{value:o.val()||void 0,type:o.attr("type")?o.attr("type"):void 0})},t.fn.textbox.defaults=t.extend({},t.fn.validatebox.defaults,{doSize:!0,autoSize:!1,width:"auto",height:"auto",cls:null,prompt:"",value:"",type:"text",multiline:!1,icons:[],iconCls:null,iconAlign:"right",iconWidth:26,buttonText:"",buttonIcon:null,buttonAlign:"right",label:null,labelWidth:"auto",labelPosition:"before",labelAlign:"left",inputEvents:{blur:function(e){var o=t(e.data.target),n=o.textbox("options");o.textbox("getValue")!=n.value&&o.textbox("setValue",n.value)},keydown:function(e){if(13==e.keyCode){var o=t(e.data.target);o.textbox("setValue",o.textbox("getText"))}t(e.data.target).textbox("options").autoSize&&setTimeout((function(){t(e.data.target).textbox("resize")}),0)}},onChange:function(t,e){},onResizing:function(t,e){},onResize:function(t,e){},onClickButton:function(){},onClickIcon:function(t){}})}(jQuery);