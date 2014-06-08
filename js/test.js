define(function(require,exports,module){
	
	var drag = require('drag');

	var m = {
		init:function(){
			var w = this;

			
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.drag = new drag({
				el:$("li")
			})
		},
		initEvent:function(){
			var w = this;

			


		}

	}

	m.init();
})