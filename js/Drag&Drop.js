define(function(require,exports,module){

	var drag = function(){ this.init.call(this,arguments)};

	drag.prototype = {
		init:function(data){
			var w = this;

			data = data[0]
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;


		},
		initEvent:function(){
			var w = this;

		}
	}

	return drag;
})