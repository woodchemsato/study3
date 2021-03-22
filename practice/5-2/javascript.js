$(function() {

  // マウスが乗った時の処理
  $('#color1').hover(function() {
    $('#color1').css('color','blue');
  }, function() {
    // マウスが離れた時の処理
    $('#color1').css('color','');
  });

  $('#color2').hover(function() {
    $('#color2').css('color','red');
  }, function() {
    $('#color2').css('color','');
  });

  $('#color3').hover(function() {
    $('#color3').css('color','yellow');
  }, function() {
    $('#color3').css('color','');
  });

  $('#color4').hover(function() {
    $('#color4').css('color','green');
  }, function() {
    $('#color4').css('color','');
  });

  // 課題5-2(1)
  // HTMLに要素を追加（idをcolor5としてください）して、
  // マウスが乗ったら文字色を白、背景色を紫色に変えてください。
  // ただし、マウスが外れても色はそのままにしてください。

});