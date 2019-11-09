
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
  }