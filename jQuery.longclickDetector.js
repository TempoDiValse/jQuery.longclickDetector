( function($){
	
	var touchStart = 'touchstart';
	var touchEnd = 'touchend';
	var touchMove = 'touchmove';
 
	var callback, duration;
	var timerID;
 
	var pX, pY;
	var BOUNDS = 10;
	
	$.fn.enableLongClick = function(_callback, _duration){
		callback = _callback;
		duration = _duration;
 
		$(this).bind('touchstart touchend touchmove', eventHandler);
	}
 
	var eventHandler = function(e){
		var type = e.type;
		
		if(type == touchStart){
			pX = e.pageX;
			pY = e.pageY;
 
			timerID = setTimeout(function(){
				// 현재 포커스가 들어간 객체의 ID 값을 알려준다. 
				// (밖에서 .attr('id')로 하면 마지막 foreach 객체 ID값만 불러옴)
				var targetID = e.target.id;
				targetID = targetID.substring(0, targetID.length - 2);
 
				//콜백으로 던져준다.
				return callback(targetID, e.pageX, e.pageY);
			}, duration);
 
			//Duration에 못미쳐 터치가 끝나면 fire
		}else if(type == touchEnd){
			clearTimeout(timerID);
		}else if(type == touchMove){
			//드래깅 할 때 이벤트 fire
 
			var cX = e.pageX;
			var cY = e.pageY;
			
			var bleft = pX - (BOUNDS / 2);
			var btop = pY - (BOUNDS / 2);
			var bright = pX + (BOUNDS / 2);
			var bbottom = pY + (BOUNDS / 2);
			
			if(!(cX >= bleft && cX <= bright && cY >= btop && cY < bbottom)){
				clearTimeout(timerID);
			}
		}
	}
})(jQuery);
