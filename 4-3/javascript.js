$(function() {

  // ulで全部取得
  // console.log($('ul').children('li'));

  // 復習　２番目を取得
  console.log($('ul').children('li').eq(1));

  // 要素の削除系 バリエーション

  // 子要素の最後を指定 remove()
  // $('li:last').remove();

  // 指定したidを削除
  // $('li#id4-3_3').remove(); // もちろん li はなくてもOK

  // 子要素全部を削除
  // $('ul').empty();
});