/* Copyright (C) 2023 by WorkerBot.AI */
$.fn.pagination&&($.fn.pagination.defaults.beforePageText="Сторінка",$.fn.pagination.defaults.afterPageText="з {pages}",$.fn.pagination.defaults.displayMsg="Перегляд {from} до {to} з {total} записів"),$.fn.datagrid&&($.fn.datagrid.defaults.loadMsg="Обробляється, зачекайте будь даска ..."),$.fn.treegrid&&$.fn.datagrid&&($.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg),$.messager&&($.messager.defaults.ok="Ок",$.messager.defaults.cancel="Закрити"),$.map(["validatebox","textbox","passwordbox","filebox","searchbox","combo","combobox","combogrid","combotree","datebox","datetimebox","numberbox","spinner","numberspinner","timespinner","datetimespinner"],(function(e){$.fn[e]&&($.fn[e].defaults.missingMessage="Це поле необхідно.")})),$.fn.validatebox&&($.fn.validatebox.defaults.rules.email.message="Будь ласка, введіть коректну e-mail адресу.",$.fn.validatebox.defaults.rules.url.message="Будь ласка, введіть коректний URL.",$.fn.validatebox.defaults.rules.length.message="Будь ласка введіть значення між {0} і {1}.",$.fn.validatebox.defaults.rules.remote.message="Будь ласка виправте це поле."),$.fn.calendar&&($.fn.calendar.defaults.firstDay=1,$.fn.calendar.defaults.weeks=["В","П","В","С","Ч","П","С"],$.fn.calendar.defaults.months=["Січ","Лют","Бер","Квіт","Трав","Черв","Лип","Серп","Вер","Жовт","Лист","Груд"]),$.fn.datebox&&($.fn.datebox.defaults.currentText="Сьогодні",$.fn.datebox.defaults.closeText="Закрити",$.fn.datebox.defaults.okText="Ок"),$.fn.datetimebox&&$.fn.datebox&&$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText});