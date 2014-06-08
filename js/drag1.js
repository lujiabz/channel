define(function(require,exports,module){

	var drag = function(){ this.init.call(this,arguments)};

	drag.prototype = {
		init:function(data){
			var w = this;

			data = data[0];
			w.el = data.el;
			w.div = data.div;
			w.corner = w.div.find(".J_panel_resize");

			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;

			w.rightCorner = {
				x:w.div.offset().left + w.div.outerWidth(),
				y:w.div.offset().top + w.div.outerHeight()
			}
			
		},
		initEvent:function(){
			var w = this;

			w.div.on("mousedown",function(e){
				w.mouseDownHandle(e);				
			});

			// w.corner.on("mousedown",function(e){
			// 	var m = {
			// 		x:e.clientX,
			// 		y:e.clientY
			// 	}
			// 	w.corner.on("mousemove",function(e){
					
			// 		w.div.width(w.div.width() + e.clientX - m.x)
			// 		// w.div.height(e.clientY-w.div.offset().top)
			// 	});

			// 	w.corner.on("mouseup",function(){
			// 		w.corner.unbind("mousemove");
			// 	});
			// 	w.corner.on("mouseout",function(){				
			// 		w.corner.unbind("mousemove");
			// 	})

			// 	e.stoppropagation();
			// })

		},
		mouseDownHandle:function(e){
			var w = this;
		
			w.mouse = {
				x:e.clientX - w.div.offset().left,
				y:e.clientY - w.div.offset().top
			}
			
			// if(w.rightCorner.x - e.clientX < 2 && w.rightCorner.y - e.clientY < 2){
			// 	alert(1)
			// } 

			w.div.on("mousemove",function(e){
				w.mouseMoveHandle(e);
			});

			w.div.on("mouseup",function(){				
				w.div.unbind("mousemove");
			})

			w.div.on("mouseout",function(){				
				w.div.unbind("mousemove");
			})
		},
		mouseMoveHandle:function(e){
			var w = this;
					
			w.div.offset({
				"left":e.clientX-w.mouse.x,
				"top":e.clientY - w.mouse.y
			})

			// w.rightCorner = {
			// 	x:w.div.offset().left + w.div.outerWidth(),
			// 	y:w.div.offset().top + w.div.outerHeight()
			// }
		},
	}

	return drag;
})