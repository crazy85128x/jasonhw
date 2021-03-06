

    var Puzz = function(index, width, height, size, wrap, url, end, puzzle){
		this.ele = null;
		this.left = 0;
		this.top = 0;
		this.defaultBackground = "#fff";
		this.width = width;
		this.height = height;
		this.size = size;
		this.wrap = wrap;
		this.url = url;
		this.end = end;
		this.index = index + 1;
		this.x = 0;
		this.y = 0;
        this.puzzle = puzzle;
	};
	Jun.mix(Puzz.prototype, {
		init:function(){
			this.create();
		},
		setLeft:function(value){
			this.left = value+'px';
		},
		setTop:function(value){
			this.top = value+'px';
		},
		setDefaultBackground:function(color){
			this.defaultBackground = color;
		},
		getProperty:function(key){
			return this[key];
		},
		move:function(x, y){
			this.setLeft( x * this.width );
			this.setTop( y * this.height );
			this.update();
			this.x = x;
			this.y = y;
		},
		create:function(){
			var div = Jun.dom.create('div');
			div.className = "puzz-item";
			div.style.width = this.width+"px";
			div.style.height = this.height+"px";
			this.ele = div;
			
			var lie = parseInt((this.index-1)/this.size);
			var row = parseInt((this.index-1)%this.size);
			
			if(this.url && this.end == false){
				this.setShowBackground("url("+ this.url +") no-repeat -"+(row*this.width)+"px -"+(lie*this.height)+"px");	
			}else{
				this.setShowBackground(this.defaultBackground);
			}

			this.move(row, lie);

		},
		setShowInt:function(){
			var p = Jun.dom.create('p');
				p.innerText = this.index;
			Jun.dom.append(this.ele, p);
		},
		setShowBackground:function(background){
			this.ele.style.background = background;
		},
		update:function(){
			this.ele.style.left = this.left;
			this.ele.style.top = this.top;
		},
		isOkay:function(){
			return parseInt((this.index - 1) / this.size) == this.y  && parseInt((this.index-1)%this.size) == this.x;
		},
		drawing:function(x, y){
			Jun.dom.append(this.wrap, this.ele);
            var _this = this;
            this.ele.onclick = function(){
                _this.puzzle.regEvent(_this.y, _this.x, _this.index);
            };
		},
        hide:function(){
            this.ele.className = "puzz-item hide";
        },
        show:function(){
            this.ele.className = "puzz-item";
        }
	});
    