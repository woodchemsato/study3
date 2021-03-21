$(function() {

  // ulで全部取得
  // console.log($('ul')); // これだとulそのものしか取れません
  // console.log($('ul').children('li'));

  // 復習　２番目を取得
  // console.log($('ul').children('li').eq(1));

  // 要素の追加系 バリエーション

  // append 追加する要素を指定
  // $('ul').append('<li id="id4-10000000">id は id4-10000000 です</li>');

  // appendTo 指定したモノを追加  
  // $('<li id="id4-10000001">id は id4-10000001 です</li>').appendTo('ul');

  // prepend 追加する要素を指定（指定した前に追加）
  // $('ul').prepend('<li id="id4-10000002">id は id4-10000002 です</li>');

  // appendTo 指定したモノを追加（指定した前に追加）
  // $('<li id="id4-10000003">id は id4-10000003 です</li>').prependTo('ul');

});