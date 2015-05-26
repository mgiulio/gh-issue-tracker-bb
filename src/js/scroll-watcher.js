var scrollWatcher = (function() {

	init();
	
	return {
		enable: enable,
		disable: disable,
		setDistance: setDistance,
		on: on
	};
	
	function init() {
		window.addEventListener('scroll', chekBottom, false);
			
	}
	
	function checkBottom(e) {
		var vpBottomDocY = ...;
		
		if (document.sizeY - vpBottomDocY < threshold)
			// fire event
	}
	
	function enable() {
	}
	
	function disable() {
	}
	
	function setDistance() {
	}
	
	function on() {
	}

})();