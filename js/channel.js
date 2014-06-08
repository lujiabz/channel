define(function(require,exports,module){
	var panel = require('panel');

	var channel = function(){ this.init.call(this,arguments)};

	channel.prototype = {
		init:function(data){
			var w = this;

			data = data[0];

			w.el = data.el;
			w.panel = {};
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.getPanelData();
			
		},
		initEvent:function(){
			var w = this;

		},
		getPanelData:function(){
			var w = this;

			//TODO ajax
			w.buildPanel();
		},
		buildPanel:function(list){
			var w = this,
				list = list || [{"id":1}];

			for (var i = 0; i < list.length; i++) {
				var obj = list[i];

				w.panel[obj.id] = new panel({
					el:w.el
				})
			};


		}
	}

	return channel;
})