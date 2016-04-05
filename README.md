# jQuery.longclickDetector
[jQuery] LongClick Listener for hybrid app


1. 먼저 적용할 오브젝트를 찾아서 초기화 시켜준다.
```
/**
  $("#obj").enableLongClick(callback, duration);
  
  -callback param
  @param id - target id
  @param x - x position of touch point
  @param y - y position of touch point
*/
$("#obj").enableLongClick(function(id, x, y){
  /* Code here  */
},1200);

```


2. 끝
