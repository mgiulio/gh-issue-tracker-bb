var tmpl = (function() {
		
	var tmpl = {
			item: m => `
				<h2 class="title">${m.title}</h2>
			`
		}
	;
	
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
		
		return `${day} ${month} ${year}`;
	}
		
	function classIf(cond, className) {
		return cond ? className : '';
	}
	
	function mainLanguageClass(lang) {
		return !lang ? '' : ' ' + toLowerCase(lang);
	}
	
})();
		