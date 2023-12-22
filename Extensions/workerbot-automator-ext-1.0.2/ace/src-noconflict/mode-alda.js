/* Copyright (C) 2023 by WorkerBot.AI */
ace.define("ace/mode/alda_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={pitch:[{token:"variable.parameter.operator.pitch.alda",regex:/(?:[+\-]+|\=)/},{token:"",regex:"",next:"timing"}],timing:[{token:"string.quoted.operator.timing.alda",regex:/\d+(?:s|ms)?/},{token:"",regex:"",next:"start"}],start:[{token:["constant.language.instrument.alda","constant.language.instrument.alda","meta.part.call.alda","storage.type.nickname.alda","meta.part.call.alda"],regex:/^([a-zA-Z]{2}[\w\-+\'()]*)((?:\s*\/\s*[a-zA-Z]{2}[\w\-+\'()]*)*)(?:(\s*)(\"[a-zA-Z]{2}[\w\-+\'()]*\"))?(\s*:)/},{token:["text","entity.other.inherited-class.voice.alda","text"],regex:/^(\s*)(V\d+)(:)/},{token:"comment.line.number-sign.alda",regex:/#.*$/},{token:"entity.name.function.pipe.measure.alda",regex:/\|/},{token:"comment.block.inline.alda",regex:/\(comment\b/,push:[{token:"comment.block.inline.alda",regex:/\)/,next:"pop"},{defaultToken:"comment.block.inline.alda"}]},{token:"entity.name.function.marker.alda",regex:/%[a-zA-Z]{2}[\w\-+\'()]*/},{token:"entity.name.function.at-marker.alda",regex:/@[a-zA-Z]{2}[\w\-+\'()]*/},{token:"keyword.operator.octave-change.alda",regex:/\bo\d+\b/},{token:"keyword.operator.octave-shift.alda",regex:/[><]/},{token:"keyword.operator.repeat.alda",regex:/\*\s*\d+/},{token:"string.quoted.operator.timing.alda",regex:/[.]|r\d*(?:s|ms)?/},{token:"text",regex:/([cdefgab])/,next:"pitch"},{token:"string.quoted.operator.timing.alda",regex:/~/,next:"timing"},{token:"punctuation.section.embedded.cram.alda",regex:/\}/,next:"timing"},{token:"constant.numeric.subchord.alda",regex:/\//},{todo:{token:"punctuation.section.embedded.cram.alda",regex:/\{/,push:[{token:"punctuation.section.embedded.cram.alda",regex:/\}/,next:"pop"},{include:"$self"}]}},{todo:{token:"keyword.control.sequence.alda",regex:/\[/,push:[{token:"keyword.control.sequence.alda",regex:/\]/,next:"pop"},{include:"$self"}]}},{token:"meta.inline.clojure.alda",regex:/\(/,push:[{token:"meta.inline.clojure.alda",regex:/\)/,next:"pop"},{include:"source.clojure"},{defaultToken:"meta.inline.clojure.alda"}]}]},this.normalizeRules()};i.metaData={scopeName:"source.alda",fileTypes:["alda"],name:"Alda"},o.inherits(i,a),t.AldaHighlightRules=i})),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){"use strict";var o=e("../../lib/oop"),a=e("../../range").Range,i=e("./fold_mode").FoldMode,r=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(r,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var a=this._getFoldWidgetBase(e,t,n);return!a&&this.startRegionRe.test(o)?"start":a},this.getFoldWidgetRange=function(e,t,n,o){var a,i=e.getLine(n);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,n);if(a=i.match(this.foldingStartMarker)){var r=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,r);var l=e.getCommentFoldRange(n,r+a[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t&&(a=i.match(this.foldingStopMarker))){r=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],n,r):e.getCommentFoldRange(n,r,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,r=n.length,l=t+=1,s=e.getLength();++t<s;){var d=(n=e.getLine(t)).search(/\S/);if(-1!==d){if(o>d)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=i)break;if(g.isMultiLine())t=g.end.row;else if(o==d)break}l=t}}return new a(i,r,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),r=n,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<i;){t=e.getLine(n);var d=l.exec(t);if(d&&(d[1]?s--:s++,!s))break}if(n>r)return new a(r,o,n,t.length)}}.call(r.prototype)})),ace.define("ace/mode/alda",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/alda_highlight_rules","ace/mode/folding/cstyle"],(function(e,t,n){"use strict";var o=e("../lib/oop"),a=e("./text").Mode,i=e("./alda_highlight_rules").AldaHighlightRules,r=e("./folding/cstyle").FoldMode,l=function(){this.HighlightRules=i,this.foldingRules=new r};o.inherits(l,a),function(){this.$id="ace/mode/alda"}.call(l.prototype),t.Mode=l})),ace.require(["ace/mode/alda"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));