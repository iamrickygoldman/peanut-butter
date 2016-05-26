(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

jQuery(function($){
	$(window).load(function(){
		equalHeights();
	});

	$(window).smartresize(function(){
		equalHeights();
	});

	function equalHeights() {
		var equalHeights = $("[data-pb-height]");

		var height1, height2;
		for(var i = 0; i < equalHeights.length; i++) {
			var current_i = equalHeights.eq(i);
			for(var j = 0; j < equalHeights.length; j++) {
				var current_j = equalHeights.eq(j);
				if (i === j) {
					continue;
				}
				if (current_i.data('pb-height') === current_j.data('pb-height')) {
					height1 = current_i.css('height','auto').outerHeight();
					height2 = current_j.css('height','auto').outerHeight();
					if (height1 > height2) {
						current_i.css('height', height1);
						current_j.css('height', height1);
					} else {
						current_i.css('height', height2);
						current_j.css('height', height2);
					}
				}
			}
		}
	}
});