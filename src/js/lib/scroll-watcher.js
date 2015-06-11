var scrollWatcher = (function() {

	var
		htmlEl,
		threshold,
		cb,
		mutObs,
		obsCfg,
		observedEl
	;
	
	var api = {
		setThreshold: setThreshold,
		on: on,
		enable: enable,
		disable: disable
	};
	
	init();
	
	return api;
	
	function init() {
		htmlEl = document.documentElement;
		
		if (typeof MutationObserver === 'function')
			api.observe = observe;
	}
	
	function enable() {
		window.addEventListener('scroll', checkVp, false);
	}
	
	function disable() {
		window.removeEventListener('scroll', checkVp, false);
	}
	
	function checkVp(e) {
		if (htmlEl.offsetHeight - (window.pageYOffset + window.innerHeight) <= threshold) {
			disable();
			
			if (observedEl)
				mutObs.observe(observedEl, obsCfg);
			
			cb();
		}
	}
	
	function mutationListener(mutations) {
		mutObs.disconnect(); 
		enable();
	}
	
	function setThreshold(t) {
		threshold = t;
		return this;
	}
	
	function on(_cb) {
		cb = _cb;
		return this;
	}
	
	function observe(el) {
		mutObs = new MutationObserver(mutationListener);
		obsCfg = {childList: true};
		
		api.observe = function(el) {
			observedEl = el;
			return this;
		};

		return api.observe(el);
	};

})();