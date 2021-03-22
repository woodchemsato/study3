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

});