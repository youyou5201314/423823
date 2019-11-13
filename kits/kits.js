
// 随机整数
function randomInt(n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
  }
  // 随机颜色
  function randomColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
    // 十六进制方法1
  function randomColor(){
    var  arr =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f',]
  var color =['#'];
  for(var i=0; i<6;i++){
    var r = Math.floor(Math.random()*arr.length);
    color.push(arr[r]);
  }
  return color.join('');
  }
  console.log(randomColor());
  document.body.style.backgroundColor=randomColor();
  // 十六进制第二种方法
  function randomColor1(){
    var color=['#'];
    for(var i=0; i<6;i++){
      var r =Math.floor(Math.random()*16).toString(16);
    }
    return color.join('');
  }
  console.log(randomColor1());
  document.body.style.backgroundColor=randomColor1();
  }

// ** //