/* Copyright (C) 2023 by WorkerBot.AI */
$.fn.pagination&&($.fn.pagination.defaults.beforePageText="صفحة",$.fn.pagination.defaults.afterPageText="من {pages}",$.fn.pagination.defaults.displayMsg="عرض {from} إلى {to} من {total} عنصر"),$.fn.datagrid&&($.fn.datagrid.defaults.loadMsg="معالجة, الرجاء الإنتظار ..."),$.fn.treegrid&&$.fn.datagrid&&($.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg),$.messager&&($.messager.defaults.ok="موافق",$.messager.defaults.cancel="إلغاء"),$.map(["validatebox","textbox","passwordbox","filebox","searchbox","combo","combobox","combogrid","combotree","datebox","datetimebox","numberbox","spinner","numberspinner","timespinner","datetimespinner"],(function(e){$.fn[e]&&($.fn[e].defaults.missingMessage="هذا الحقل مطلوب.")})),$.fn.validatebox&&($.fn.validatebox.defaults.rules.email.message="الرجاء إدخال بريد إلكتروني صحيح.",$.fn.validatebox.defaults.rules.url.message="الرجاء إدخال رابط صحيح.",$.fn.validatebox.defaults.rules.length.message="الرجاء إدخال قيمة بين {0} و {1}.",$.fn.validatebox.defaults.rules.remote.message="الرجاء التأكد من الحقل."),$.fn.calendar&&($.fn.calendar.defaults.weeks=["S","M","T","W","T","F","S"],$.fn.calendar.defaults.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),$.fn.datebox&&($.fn.datebox.defaults.currentText="اليوم",$.fn.datebox.defaults.closeText="إغلاق",$.fn.datebox.defaults.okText="موافق"),$.fn.datetimebox&&$.fn.datebox&&$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText});