
    
    
    function PuzzlePlayVideo(id, puzzleVoid){
        this.puzzleVoid = puzzleVoid;
        
        this.id = id;
        this.ele = dom.$(id);
        this.url = puzzleVoid.url;
        this.size = puzzleVoid.size;
        this.width = puzzleVoid.width;
        this.height = puzzleVoid.height;
        this.isNunber = puzzleVoid.isNunber;
        this.order = puzzleVoid.order;
        this.process = puzzleVoid.process.slice();
        
        this.itemList = [];
		this.listOrder = [];
        
        this.init();
    };
    
    Jun.mix(PuzzlePlayVideo.prototype, Puzzle.prototype);
    Jun.mix(PuzzlePlayVideo.prototype, {
        play:function(){
            var i = 0;
            //this.timeCount = ;
            this.lastTime = 0;
            this.stopPlay();
            this.shuffle( this.order );
            this.playStep(i);
        },
        playStep:function(i){
            var _this = this;
            var order = this.order;
            var itemList = this.itemList;
            var step = this.process[i];
            
            var puzz = itemList[ step.index-1 ];
            this.regEvent(puzz.y, puzz.x);
            
            if(i+1 < this.process.length){
                this.playTimeer = setTimeout(function(){
                    _this.playStep(i+1);
                }, this.process[i+1].delay);
            }
        }
    });
