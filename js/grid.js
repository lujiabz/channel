define(function(require,exports,module){

	var grid = function(){ this.init.call(this,arguments)};

	grid.prototype = {
		init:function(data){
			var w = this;

			data = data[0];

			w.el = data.el;
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.buildGrid();
			
		},
		initEvent:function(){
			var w = this;

			$(window).on("resize",function(){
				w.buildGrid();
			})
		},
		showGrid:function(){
			var w = this;
			w.el.show();
		},
		toggleGrid:function(){
			var w = this;

			w.el.toggle();
		},
		buildGrid:function(){
			var w = this;

			w.el.empty();

			var position = w.getElPosition();

			for (var i = 0; i < 12; i++) {
				var div = $("<div class='pull-left u-grid'></div>");

				div.css({
					"width":position.width/12,
					"height":"100%",
				})

				w.el.append(div)
			};
		},
		getElPosition:function(){
			var w = this;

			return {
				width:w.el.width(),
				height:w.el.height(),
				left:w.el.offset().left,
				top:w.el.offset().top
			}
			
		}
	}

	return grid;
})