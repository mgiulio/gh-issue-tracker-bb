var scrollWatcher = (function() {

	var
		threshold,
		cb
	;
	
	init();
	
	var o = {
		enable: enable,
		disable: disable,
		setThreshold: setThreshold,
		on: on
	};
	
	return o;
	
	function init() {
		//enable();
		
		//updateGeo();
	}
	
	/* function updateGeo(e) {
		maxPageYOffset = document.documentElement.offsetHeight - threshold - window.innerHeight;
	} */
	
	function checkBottom(e) {
		if (
			document.documentElement.offsetHeight - (window.pageYOffset + window.innerHeight) <= threshold
			//window.pageYOffset >= maxPageYOffset
		) {
			disable();
			cb();
		}
	}
	
	function enable() {
		window.addEventListener('scroll', checkBottom, false);
		//window.addEventListener('resize', updateGeo, false);
		
		return o;
	}
	
	function disable() {
		window.removeEventListener('scroll', checkBottom, false);
		//window.removeEventListener('resize', updateGeo, false);
	}
	
	function setThreshold(t) {
		threshold = t;
		
		//updateGeo();
		
		return o;
	}
	
	function on(_cb) {
		cb = _cb;
	}

})();