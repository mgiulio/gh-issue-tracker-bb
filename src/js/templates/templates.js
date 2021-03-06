'use strict';

var tmpl = (function () {

	var tmpl = {
		item: function item(m) {
			return '\n\t\t\t\t<h2 class="title">\n\t\t\t\t\t<a target="_blank" href="' + m.html_url + '">' + m.title + '</a>\n\t\t\t\t\t<span class="number">' + m.number + '</span>\n\t\t\t\t</h2>\n\t\t\t\t<p class="meta">\n\t\t\t\t\t<span class="created-at">' + date(m.created_at) + '</span>\n\t\t\t\t</p>\n\t\t\t';
		}
	};

	return tmpl;

	function toLowerCase(str) {
		return str.toLowerCase();
	}

	function date(str) {
		var d = new Date(str);

		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();

		month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][month];
		year = String(year).substr(-2);

		return '' + day + ' ' + month + ' ' + year;
	}

	function classIf(cond, className) {
		return cond ? className : '';
	}

	function mainLanguageClass(lang) {
		return !lang ? '' : ' ' + toLowerCase(lang);
	}
})();