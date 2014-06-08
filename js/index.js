define(function(require,exports,module){
	var channel = require('channel');
	var grid = require('grid');

	var m = {
		init:function(){
			var w = this;

			w.edit = $(".J_channel_edit")
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.Grid = new grid({
				el:$('.J_channel_grid')
			});

			w.Channel = new channel({
				el:$('.J_channel_wrap')
			});
		},
		initEvent:function(){
			var w = this;

			w.edit.on("click",function(){
				w.Grid.toggleGrid();
			});
		}

	}

	m.init();
})