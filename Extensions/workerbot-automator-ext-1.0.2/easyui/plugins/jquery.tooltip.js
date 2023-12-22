/* Copyright (C) 2023 by WorkerBot.AI */
!function(t){function o(o){var i=t.data(o,"tooltip");i.showTimer&&(clearTimeout(i.showTimer),i.showTimer=null),i.hideTimer&&(clearTimeout(i.hideTimer),i.hideTimer=null)}function i(o,i){var e=t.data(o,"tooltip"),n=e.options;if(i&&(n.content=i),e.tip){var r="function"==typeof n.content?n.content.call(o):n.content;e.tip.children(".tooltip-content").html(r),n.onUpdate.call(o,r)}}t.fn.tooltip=function(o,e){return"string"==typeof o?t.fn.tooltip.methods[o](this,e):(o=o||{},this.each((function(){var e,n,r=t.data(this,"tooltip");r?t.extend(r.options,o):(t.data(this,"tooltip",{options:t.extend({},t.fn.tooltip.defaults,t.fn.tooltip.parseOptions(this),o)}),t(this).addClass("tooltip-f")),e=this,n=t.data(e,"tooltip").options,t(e)._unbind(".tooltip")._bind(n.showEvent+".tooltip",(function(o){t(e).tooltip("show",o)}))._bind(n.hideEvent+".tooltip",(function(o){t(e).tooltip("hide",o)}))._bind("mousemove.tooltip",(function(o){n.trackMouse&&(n.trackMouseX=o.pageX,n.trackMouseY=o.pageY,t(e).tooltip("reposition"))})),i(this)})))},t.fn.tooltip.methods={options:function(o){return t.data(o[0],"tooltip").options},tip:function(o){return t.data(o[0],"tooltip").tip},arrow:function(t){return t.tooltip("tip").children(".tooltip-arrow-outer,.tooltip-arrow")},show:function(e,n){return e.each((function(){!function(e,n){var r=t.data(e,"tooltip"),l=r.options,s=r.tip;s||(s=t('<div tabindex="-1" class="tooltip"><div class="tooltip-content"></div><div class="tooltip-arrow-outer"></div><div class="tooltip-arrow"></div></div>').appendTo("body"),r.tip=s,i(e)),o(e),r.showTimer=setTimeout((function(){t(e).tooltip("reposition"),s.show(),l.onShow.call(e,n);var o=s.children(".tooltip-arrow-outer"),i=s.children(".tooltip-arrow"),r="border-"+l.position+"-color";o.add(i).css({borderTopColor:"",borderBottomColor:"",borderLeftColor:"",borderRightColor:""}),o.css(r,s.css(r)),i.css(r,s.css("backgroundColor"))}),l.showDelay)}(this,n)}))},hide:function(i,e){return i.each((function(){!function(i,e){var n=t.data(i,"tooltip");n&&n.tip&&(o(i),n.hideTimer=setTimeout((function(){n.tip.hide(),n.options.onHide.call(i,e)}),n.options.hideDelay))}(this,e)}))},update:function(t,o){return t.each((function(){i(this,o)}))},reposition:function(o){return o.each((function(){!function(o){var i=t.data(o,"tooltip");if(i&&i.tip){var e=i.options,n=i.tip,r={left:-1e5,top:-1e5};if(t(o).is(":visible"))if(r=s(e.position),"top"==e.position&&r.top<0?r=s("bottom"):"bottom"==e.position&&r.top+n._outerHeight()>t(window)._outerHeight()+t(document).scrollTop()&&(r=s("top")),r.left<0)"left"==e.position?r=s("right"):(t(o).tooltip("arrow").css("left",n._outerWidth()/2+r.left),r.left=0);else if(r.left+n._outerWidth()>t(window)._outerWidth()+t(document)._scrollLeft())if("right"==e.position)r=s("left");else{var l=r.left;r.left=t(window)._outerWidth()+t(document)._scrollLeft()-n._outerWidth(),t(o).tooltip("arrow").css("left",n._outerWidth()/2-(r.left-l))}n.css({left:r.left,top:r.top,zIndex:null!=e.zIndex?e.zIndex:t.fn.window?t.fn.window.defaults.zIndex++:""}),e.onPosition.call(o,r.left,r.top)}function s(i){var r,l;e.position=i||"bottom",n.removeClass("tooltip-top tooltip-bottom tooltip-left tooltip-right").addClass("tooltip-"+e.position);var s=t.isFunction(e.deltaX)?e.deltaX.call(o,e.position):e.deltaX,a=t.isFunction(e.deltaY)?e.deltaY.call(o,e.position):e.deltaY;if(e.trackMouse)p=t(),r=e.trackMouseX+s,l=e.trackMouseY+a;else{var p=t(o);r=p.offset().left+s,l=p.offset().top+a}switch(e.position){case"right":r+=p._outerWidth()+12+(e.trackMouse?12:0),"middle"==e.valign&&(l-=(n._outerHeight()-p._outerHeight())/2);break;case"left":r-=n._outerWidth()+12+(e.trackMouse?12:0),"middle"==e.valign&&(l-=(n._outerHeight()-p._outerHeight())/2);break;case"top":r-=(n._outerWidth()-p._outerWidth())/2,l-=n._outerHeight()+12+(e.trackMouse?12:0);break;case"bottom":r-=(n._outerWidth()-p._outerWidth())/2,l+=p._outerHeight()+12+(e.trackMouse?12:0)}return{left:r,top:l}}}(this)}))},destroy:function(i){return i.each((function(){!function(i){var e=t.data(i,"tooltip");if(e){o(i);var n=e.options;e.tip&&e.tip.remove(),n._title&&t(i).attr("title",n._title),t.removeData(i,"tooltip"),t(i)._unbind(".tooltip").removeClass("tooltip-f"),n.onDestroy.call(i)}}(this)}))}},t.fn.tooltip.parseOptions=function(o){var i=t(o),e=t.extend({},t.parser.parseOptions(o,["position","showEvent","hideEvent","content",{trackMouse:"boolean",deltaX:"number",deltaY:"number",showDelay:"number",hideDelay:"number"}]),{_title:i.attr("title")});return i.attr("title",""),e.content||(e.content=e._title),e},t.fn.tooltip.defaults={position:"bottom",valign:"middle",content:null,trackMouse:!1,deltaX:0,deltaY:0,showEvent:"mouseenter",hideEvent:"mouseleave",showDelay:200,hideDelay:100,onShow:function(t){},onHide:function(t){},onUpdate:function(t){},onPosition:function(t,o){},onDestroy:function(){}}}(jQuery);