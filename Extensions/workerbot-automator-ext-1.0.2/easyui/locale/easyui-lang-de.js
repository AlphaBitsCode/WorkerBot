/* Copyright (C) 2023 by WorkerBot.AI */
$.fn.pagination&&($.fn.pagination.defaults.beforePageText="Seite",$.fn.pagination.defaults.afterPageText="von {pages}",$.fn.pagination.defaults.displayMsg="{from} bis {to} von {total} Datensätzen"),$.fn.datagrid&&($.fn.datagrid.defaults.loadMsg="Verarbeitung läuft, bitte warten ..."),$.fn.treegrid&&$.fn.datagrid&&($.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg),$.messager&&($.messager.defaults.ok="OK",$.messager.defaults.cancel="Abbruch"),$.map(["validatebox","textbox","passwordbox","filebox","searchbox","combo","combobox","combogrid","combotree","datebox","datetimebox","numberbox","spinner","numberspinner","timespinner","datetimespinner"],(function(e){$.fn[e]&&($.fn[e].defaults.missingMessage="Dieses Feld wird benötigt.")})),$.fn.validatebox&&($.fn.validatebox.defaults.rules.email.message="Bitte geben Sie eine gültige E-Mail-Adresse ein.",$.fn.validatebox.defaults.rules.url.message="Bitte geben Sie eine gültige URL ein.",$.fn.validatebox.defaults.rules.length.message="Bitte geben Sie einen Wert zwischen {0} und {1} ein."),$.fn.calendar&&($.fn.calendar.defaults.firstDay=1,$.fn.calendar.defaults.weeks=["S","M","D","M","D","F","S"],$.fn.calendar.defaults.months=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]),$.fn.datebox&&($.fn.datebox.defaults.currentText="Heute",$.fn.datebox.defaults.closeText="Schließen",$.fn.datebox.defaults.okText="OK",$.fn.datebox.defaults.formatter=function(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return(n<10?"0"+n:n)+"."+(a<10?"0"+a:a)+"."+t},$.fn.datebox.defaults.parser=function(e){if(!e)return new Date;var t=e.split("."),a=parseInt(t[1],10),n=parseInt(t[0],10),s=parseInt(t[2],10);return isNaN(s)||isNaN(a)||isNaN(n)?new Date:new Date(s,a-1,n)}),$.fn.datetimebox&&$.fn.datebox&&$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText});