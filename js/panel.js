define(function(require,exports,module){

	var drag = require('drag');

	var panel = function(){ this.init.call(this,arguments)};

	panel.prototype = {
		init:function(data){
			var w = this;

			data = data[0];

			w.el = data.el;
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.buildWrap();

			w.Drag = new drag({
				el:w.el,
				div:w.div.parent()
			});
		},
		initEvent:function(){
			var w = this;

		},
		buildWrap:function(){
			var w = this;
		
			var div = $("<div class='m-panel'></div>");
			w.div = $("<div class='inner'></div>");

			div.append(w.div);
			w.el.append(div);
			w.buildTitle();
			w.buildInner();
			w.buildCorner();
		},
		buildTitle:function(){
			var w = this;
		

			w.title = $("<div class='tit'>title</div>")
			w.div.append(w.title);
		},
		buildInner:function(){
			var w = this;
		
			w.inner = $("<div class='mn'>mn</div>");
			w.div.append(w.inner);
		},
		buildCorner:function(){
			var w = this;
		
			w.corner = $("<div class='corner J_panel_resize'></div>");
			w.div.append(w.corner)
		},
		
	}


	return panel
})