define(function(require,exports,module){

	var drag = function(){ this.init.call(this,arguments)};

	drag.prototype = {
		init:function(data){
			var w = this;

			data = data[0];
			w.el = data.el;
			w.initHTML();
			w.initEvent();
		},
		initHTML:function(){
			var w = this;


		},
		initEvent:function(){
			var w = this;

			w.ele = null;

			w.el.each(function(){
				this.ondragstart = function(e){
					e.dataTransfer.effectAllowed = "move";
					e.dataTransfer.setData("text",e.target.outerHTML);
					w.ele = this;
					console.log(e)
				}

				this.ondragend = function(e){
					e.dataTransfer.clearData("text");
					w.ele = null;
					return false;
				}

				this.ondragover = function(e){
					e.preventDefault();
					return false;
				}

				this.ondragenter = function(e){


				}

				this.ondrop = function(e){
					
					$(this).before(w.ele);

				}
			});
		}
	}

	return drag;
})