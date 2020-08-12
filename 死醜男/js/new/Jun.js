
;(function(win, name, undef){
    
    win[name] = {};
    
	var mix = function(a, b){
		for(var i in b){
			a[i] = b[i];
		}
		return a;
	};
	var log = function(msg, type){
		window.console && window.console[type || 'log'](msg);
	};
	
	var B = {
		isIE:false,
		isIE6:false
	};
	
    var pad = function(string, length, pad){
		var len = length - String(string).length
		if(len < 0){
			return string;
		}
		var arr = new Array( length - String(string).length || 0 )
		arr.push(string); 
		return arr.join(pad || '0');
	 };
     
     
	mix(win[name], {"mix":mix, 'log':log, 'B':B, 'pad':pad});
	
})(window, 'Jun', undefined)
