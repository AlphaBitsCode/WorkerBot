/* Copyright (C) 2023 by WorkerBot.AI */
function iWindow(){var self=this;self.win={},self.dragwID=null,self.dragObj=-1,self.dragSTop=null,self.dragSleft=null,self.dragStartX=null,self.dragStartY=null,self.offsetTop=0,self.offsetLeft=0,self.offsetRight=0,self.offsetBottom=0,self.resizeWidth=null,self.resizeHeight=null,self.zwin=[],self.zindex=999999,self.scroll_length=0,self.contentMinAutoWidth=10,self.contentMinAutoHeight=10,self.contentMaxAutoWidth=810,self.contentMaxAutoHeight=610,self.init=function(e){self.onSetTitle="function"!=typeof e.onSetTitle?function(e,n,t){n.innerText=t}:e.onSetTitle;var n=document.createElement("div");n.style.cssText="position:aboslute;top:-99px;left:-99px;width:70px;height:70px;overflow:scroll;border:0;margin:0;padding:0",document.body.appendChild(n),self.scroll_length=n.offsetWidth-n.clientWidth,document.body.removeChild(n),self.passiveEvents=!1;try{var t=Object.defineProperty({},"passive",{get:function(){self.passiveEvents=!0}});window.addEventListener("test",null,t)}catch(e){}},self.create=function(e,n){return void 0===self.win[n]&&("string"!=typeof e.type&&(e.type="window"),"string"==typeof e.class?e.class=" "+e.class:e.class="",self.win[n]={},self.win[n].type=e.type,self.win[n].tabs={},self.win[n].wID=n,self.win[n].obj=document.createElement("div"),self.win[n].obj.className="winb iwin_"+e.type+e.class,self.win[n].obj.style.cssText="display:none;top:50px;left:20px;",self.win[n].obj.innerHTML='<div class="winbt" style="white-space:nowrap;overflow:hidden;"> </div><div class="winbb" style="display:none"> </div><div class="winbc"> </div><div class="winr tl"> </div><div class="winr tt"> </div><div class="winr tr"> </div><div class="winr ll"> </div><div class="winr rr"> </div><div class="winr bl"> </div><div class="winr bb"> </div><div class="winr br"> </div>',document.body.appendChild(self.win[n].obj),self.win[n].onShow="function"==typeof e.onShow?e.onShow:function(){},self.win[n].onHide="function"==typeof e.onHide?e.onHide:function(){},self.win[n].onClose="function"==typeof e.onClose?e.onClose:function(){},self.win[n].onDestroy="function"==typeof e.onDestroy?e.onDestroy:function(){},self.addEvent(self.win[n].obj,"press",(function(){self.toFront(n)}),!0),self.addEvent(self.win[n].obj.children[0],"start",(function(e){self.resize(n,{moveT:1,moveL:1},e)}),!1),self.addEvent(self.win[n].obj.children[3],"start",(function(e){self.resize(n,{moveT:1,moveB:1,invertB:1,moveL:1,moveR:1,invertR:1},e)}),!0),self.addEvent(self.win[n].obj.children[4],"start",(function(e){self.resize(n,{moveT:1,moveB:1,invertB:1},e)}),!0),self.addEvent(self.win[n].obj.children[5],"start",(function(e){self.resize(n,{moveT:1,moveB:1,invertB:1,moveR:1},e)}),!0),self.addEvent(self.win[n].obj.children[6],"start",(function(e){self.resize(n,{moveL:1,moveR:1,invertR:1},e)}),!0),self.addEvent(self.win[n].obj.children[7],"start",(function(e){self.resize(n,{moveR:1},e)}),!0),self.addEvent(self.win[n].obj.children[8],"start",(function(e){self.resize(n,{moveB:1,moveL:1,moveR:1,invertR:1},e)}),!0),self.addEvent(self.win[n].obj.children[9],"start",(function(e){self.resize(n,{moveB:1},e)}),!0),self.addEvent(self.win[n].obj.children[10],"start",(function(e){self.resize(n,{moveB:1,moveR:1},e)}),!0),self.win[n].contentWidth=0,self.win[n].contentHeight=0,self.win[n].contentScrollHorizontal=!1,self.win[n].contentScrollVertical=!1,self.setTitle(e.title,n),!0)},self.createPlane=function(e,n){return void 0===self.win[n]&&(self.win[n]={},self.win[n].type="plane",self.win[n].wID=n,self.win[n].obj=document.createElement("div"),self.win[n].obj.className="winp",self.win[n].obj.style.cssText="display:none;position:absolute;top:0;left:0;width:100%;height:100%",document.body.appendChild(self.win[n].obj),self.win[n].onShow="function"==typeof e.onShow?e.onShow:function(){},self.win[n].onDestroy="function"==typeof e.onDestroy?e.onDestroy:function(){},self.win[n].onHide="function"==typeof e.onHide?e.onHide:function(){},self.win[n].onClose="function"==typeof e.onClose?e.onClose:function(){},self.win[n].onPress="function"==typeof e.onPress?e.onPress:function(){},self.addEvent(self.win[n].obj,"press",(function(e){self.win[n].onPress(n,e)}),!0),!0)},self.addEvent=function(e,n,t,s,l){if(l=void 0!==l&&l,self.passiveEvents)var i={passive:l,capture:s};else i=s;switch(n){case"start":case"press":e.addEventListener("touchstart",t,i),e.addEventListener("mousedown",t,i);break;case"move":e.addEventListener("touchmove",t,i),e.addEventListener("mousemove",t,i);break;case"end":e.addEventListener("touchend",t,i),e.addEventListener("mouseup",t,i)}},self.removeEvent=function(e,n,t,s,l){if(l=void 0!==l&&l,self.passiveEvents)var i={passive:l,capture:s};else i=s;switch(n){case"start":case"press":e.removeEventListener("touchstart",t,i),e.removeEventListener("mousedown",t,i);break;case"move":e.removeEventListener("touchmove",t,i),e.removeEventListener("mousemove",t,i);break;case"end":e.removeEventListener("touchend",t,i),e.removeEventListener("mouseup",t,i)}},self.destroy=function(e,n){if(void 0===self.win[e])return!1;self.win[e].onDestroy(e);var t=n||window.event;return self.zRemove(e),document.body.removeChild(self.win[e].obj),delete self.win[e],t&&(t.stopPropagation?t.stopPropagation():t.cancelBubble=!0),!0},self.show=function(e){return"block"!=self.win[e].obj.style.display&&(self.win[e].onShow(e),self.win[e].obj.style.display="block",self.zAdd(e),!0)},self.hide=function(e){return"none"!=self.win[e].obj.style.display&&(self.win[e].onHide(e),self.win[e].obj.style.display="none",self.zRemove(e),!0)},self.setTitle=function(e,n){return void 0!==e&&e.length?(self.win[n].titlebar=!0,self.win[n].obj.children[0].style.display="block",self.onSetTitle(n,self.win[n].obj.children[0],e)):(self.win[n].titlebar=!1,self.win[n].obj.children[0].style.display="none"),!0},self.setContent=function(e,n){return self.win[n].obj.children[2].innerHTML=e,!0},self.setContentDimensions=function(e,n){e||(e={}),void 0===e.width&&(e.width="auto"),void 0===e.height&&(e.height="auto");var t=self.win[n].obj.offsetTop,s=self.win[n].obj.offsetLeft;self.win[n].obj.style.top="-9999px",self.win[n].obj.style.left="-9999px";var l=self.show(n),i=null;if("auto"==e.width||"auto"==e.height)for(var o in self.win[n].obj.children[2].style.width="auto",self.win[n].obj.children[2].style.height="auto",self.win[n].obj.children[2].style.overflow="hidden",self.win[n].tabs)"block"==self.win[n].tabs[o].contentObj.style.display?i=o:self.win[n].tabs[o].contentObj.style.display="block";var f=self.win[n].obj.children[2].getBoundingClientRect();if("auto"==e.width?self.win[n].contentWidth=f.width:self.win[n].contentWidth=parseInt(e.width,10),"auto"==e.height?self.win[n].contentHeight=f.height:self.win[n].contentHeight=parseInt(e.height,10),self.win[n].contentWidth<self.contentMinAutoWidth?self.win[n].contentWidth=self.contentMinAutoWidth:self.win[n].contentWidth>self.contentMaxAutoWidth&&(self.win[n].contentWidth=self.contentMaxAutoWidth),self.win[n].obj.children[2].style.width=self.win[n].contentWidth+"px",self.win[n].contentHeight>self.contentMaxAutoHeight?(self.win[n].contentHeight=self.contentMaxAutoHeight,self.win[n].contentScroll=!0):self.win[n].contentHeight<self.contentMinAutoHeight&&(self.win[n].contentHeight=self.contentMinAutoHeight),self.win[n].obj.children[2].style.height=self.win[n].contentHeight+"px",i)for(var o in self.win[n].tabs)self.win[n].tabs[o].contentObj.style.display=o==i?"block":"none";return self.setWindowOption({contentScrollHorizontal:self.win[n].contentScrollHorizontal,contentScrollVertical:self.win[n].contentScrollVertical},n),self.win[n].obj.style.top=t+"px",self.win[n].obj.style.left=s+"px",l&&self.hide(n),!0},self.setContentScroll=function(e,n,t){return self.win[t].contentScrollHorizontal=!!e,self.win[t].contentScrollVertical=!!n,self.win[t].contentScrollVertical?(self.win[t].obj.children[2].style.overflowY="scroll",self.win[t].obj.children[2].style.width=self.win[t].contentWidth+self.scroll_length+"px"):(self.win[t].obj.children[2].style.overflowY="hidden",self.win[t].obj.children[2].style.width=self.win[t].contentWidth+"px"),self.win[t].contentScrollHorizontal?(self.win[t].obj.children[2].style.overflowX="scroll",self.win[t].obj.children[2].style.height=self.win[t].contentHeight+self.scroll_length+"px"):(self.win[t].obj.children[2].style.overflowX="hidden",self.win[t].obj.children[2].style.height=self.win[t].contentHeight+"px"),!0},self.setPosition=function(e,n){var t,s,l=e.confined?self.offsetTop:0,i=e.confined?self.offsetLeft:0;if(void 0===e.top||void 0===e.left)return!1;(t=parseInt(e.top,10))<l&&(t=l),(s=parseInt(e.left,10))<i&&(s=i),self.win[n].obj.style.top=t+"px",self.win[n].obj.style.left=s+"px"},self.showTab=function(e,n){for(var t in self.win[n].tabs)e==t?(self.win[n].tabs[t].contentObj.style.display="block",self.win[n].tabs[t].tabObj.classList.add("open")):(self.win[n].tabs[t].contentObj.style.display="none",self.win[n].tabs[t].tabObj.classList.remove("open"));return!0},self.setTabs=function(e,n){self.win[n].tabs={};var t=null;for(var s in self.win[n].obj.children[1].innerHTML="",e){var l=self.win[n].obj.children[2].querySelectorAll('[data-iwin-tabid="'+s+'"]')[0];if(void 0!==l){var i=document.createElement("div");i.className="winbbt",function(e,n){i.onclick=function(t){self.showTab(e,n)}}(s,n),i.innerHTML=e[s],self.win[n].tabs[s]={text:e[s],tabObj:i,contentObj:l},null==t&&(t=s),self.win[n].obj.children[1].appendChild(i)}}return null!=t?(self.win[n].obj.children[1].style.display="table",self.showTab(t,n)):self.win[n].obj.children[1].style.display="none",!0},self.zAdd=function(e){return-1==self.zwin.indexOf(e)&&(self.zindex++,self.win[e].obj.style.zIndex=self.zindex,self.zwin[self.zindex]=e,!0)},self.zRemove=function(e){var n=self.zwin.indexOf(e);if(-1==n)return!1;for(var t=n+1,s=self.zindex+1;t<s;t++){var l=self.zwin[t];self.zwin[t-1]=l,self.win[l].obj.style.zIndex=t-1}return delete self.zwin[self.zindex],self.zindex--,!0},self.toFront=function(e){var n=self.zwin.indexOf(e);if(-1==n)return!1;if(n!=self.zindex){for(var t=n+1,s=self.zindex+1;t<s;t++){var l=self.zwin[t];self.zwin[t-1]=l,self.win[l].obj.style.zIndex=t-1}self.zwin[self.zindex]=e,self.win[e].obj.style.zIndex=self.zindex}return!0},self.resize=function(e,n,t){var s=t||window.event;return s.preventDefault(),-1!=self.dragObj&&self.MoveStop(),self.dragwID=e,self.dragObj=self.win[e].obj,s.touches?(self.dragStartX=parseInt(s.touches[0].clientX,10),self.dragStartY=parseInt(s.touches[0].clientY,10)):(self.dragStartX=s.clientX,self.dragStartY=s.clientY),self.dragSTop=self.dragObj.offsetTop,self.dragSLeft=self.dragObj.offsetLeft,self.windowMoveT=!!n.moveT,self.windowMoveR=!!n.moveR,self.windowMoveB=!!n.moveB,self.windowMoveL=!!n.moveL,self.windowMoveInvertB=!!n.invertB,self.windowMoveInvertR=!!n.invertR,self.resizeWidth=self.win[e].contentWidth+(self.win[e].contentScrollVertical?self.scroll_length:0),self.resizeHeight=self.win[e].contentHeight+(self.win[e].contentScrollHorizontal?self.scroll_length:0),document.body.classList.add("nse"),self.addEvent(document,"move",self._windowMove,!0),self.addEvent(document,"end",self.MoveStop,!0),!0},self._windowMove=function(e){var n=e||window.event;n.preventDefault();var t,s,l=self.dragwID;if(n.touches?(s=parseInt(n.touches[0].clientX,10),t=parseInt(n.touches[0].clientY,10)):(s=n.clientX,t=n.clientY),self.windowMoveB&&(self.windowMoveInvertB&&self.resizeHeight-t+self.dragStartY<self.contentMinHeight?t=-self.contentMinHeight+self.dragStartY+self.resizeHeight:!self.windowMoveInvertB&&self.resizeHeight+t-self.dragStartY<self.contentMinHeight&&(t=self.contentMinHeight+self.dragStartY-self.resizeHeight)),self.windowMoveT&&self.dragSTop+t-self.dragStartY<self.offsetTop&&(t=self.offsetTop+self.dragStartY-self.dragSTop),self.windowMoveR&&(self.windowMoveInvertR&&self.resizeWidth-s+self.dragStartX<self.contentMinWidth?s=-self.contentMinWidth+self.dragStartX+self.resizeWidth:!self.windowMoveInvertR&&self.resizeWidth+s-self.dragStartX<self.contentMinWidth&&(s=self.contentMinWidth+self.dragStartX-self.resizeWidth)),self.windowMoveL&&self.dragSLeft+s-self.dragStartX<self.offsetLeft&&(s=self.offsetLeft+self.dragStartX-self.dragSLeft),self.windowMoveT){var i=self.dragSTop+t-self.dragStartY;i>window.innerHeight-10&&(i=window.innerHeight-10),self.dragObj.style.top=i+"px"}if(self.windowMoveB&&(self.windowMoveInvertB?self.win[l].contentHeight=self.resizeHeight-t+self.dragStartY:self.win[l].contentHeight=self.resizeHeight+t-self.dragStartY,self.win[l].obj.children[2].style.height=self.win[l].contentHeight+"px"),self.windowMoveL){var o=self.dragSLeft+s-self.dragStartX;o>window.innerWidth-10&&(o=window.innerWidth-10),self.dragObj.style.left=o+"px"}self.windowMoveR&&(self.windowMoveInvertR?self.win[l].contentWidth=self.resizeWidth-s+self.dragStartX:self.win[l].contentWidth=self.resizeWidth+s-self.dragStartX,self.win[l].obj.children[0].style.width=self.win[l].contentWidth+"px",self.win[l].obj.children[2].style.width=self.win[l].contentWidth+"px")},self.MoveStop=function(e){(e||window.event).preventDefault(),document.body.classList.remove("nse"),self.removeEvent(document,"move",self._windowMove,!0),self.removeEvent(document,"end",self.MoveStop,!0),self.dragObj=-1,document.selection&&document.selection.empty?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()},self.setWindowOption=function(e,n){if(void 0===self.win[n]||"object"!=typeof e)return!1;for(var t in e){var s=e[t];switch(t){case"contentScrollHorizontal":self.win[n].contentScrollHorizontal=!!s,self.win[n].contentScrollHorizontal?self.win[n].obj.children[2].style.overflowX="scroll":self.win[n].obj.children[2].style.overflowX="hidden";break;case"contentScrollVertical":self.win[n].contentcontentScrollVertical=!!s,self.win[n].contentcontentScrollVertical?self.win[n].obj.children[2].style.overflowY="scroll":self.win[n].obj.children[2].style.overflowY="hidden"}}return!0},self.messageBox=function(msg,params,_wID){var wID="iAlert"+(new Date).getTime().toString(36)+parseInt(72*Math.random()).toString(36);return self.create({title:params.title,onClose:self.destroy,type:"message"},wID),self.setContent(`<div style="padding: 12px; width: 400px; text-wrap: wrap; text-align: center;">${msg}</div>`,wID),self.setContentDimensions(null,wID),self.setPosition({top:100,left:eval(window.innerWidth/2-100)},wID),self.show(wID),self.toFront(wID),void 0!==params.timeout&&setTimeout((function(e){self.destroy(wID,e)}),parseInt(params.timeout,10)),wID},self.createSelect=function(e,n){if(void 0===n&&(n="selfSelectBox_"+(new Date).getTime().toString(36)+parseInt(72*Math.random()).toString(36)),!self.create({onClose:function(e){self.hide(e),self.hide(e+"p")},onShow:function(e){self.show(e+"p")},onDestroy:function(e){self.destroy(e+"p")},onHide:function(e){self.hide(e+"p")},class:e.class,type:"select"},n))return!1;if(self.createPlane({onPress:function(e,n){var t=n||window.event;self.hide(e.slice(0,-1)),self.hide(e),t.preventDefault()}},n+"p"),self.win[n].callback="function"==typeof e.callback?e.callback:function(){},void 0!==e.options){var t="";for(option in e.options)t+='<div class="option option_'+option+'"onclick="self.onSelectOption('+option+",'"+n+"')\">"+e.options[option]+"</div>";self.setContent(t,n)}return self.setWindowOption({resizable:!1},n),n},self.onSelectOption=function(e,n){self.hide(n),self.hide(n+"p"),self.win[n].callback(e,n)}}var iWin=new iWindow;