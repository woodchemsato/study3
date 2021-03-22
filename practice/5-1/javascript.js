$(function() {

  // h1をクリックすると、文字をはまぐちと書き換える
  // ここに記述することにより、処理ロジックをdocument.ready時に
  // h1に仕込んでおく、というイメージ
  $('h1').on('click', function() {
    $('h1').text('はまぐち');
  });

  // 前に出てきたソースコードでは、ready時に実行させた
  // 今回はボタンクリックで実行させる

  // append 最後に要素を追加
  $('#addlibtn').on('click',function() {
    $('ul').append('<li>appendで要素を追加しました的な</li>');
  });

  // prepend 最初に要素を指定
  $('#prependlibtn').on('click',function() {
    $('ul').prepend('<li>pretendで要素を追加しました的な</li>');
  });

  // 課題5-1(1)：削除するボタンを作って、一番最後の要素を消してみよう！
  // $('ul').children().last().remove();  // lastはなくても大丈夫

  // 課題5-1(2)：削除するボタンを作って、一番最初の要素を消してみよう！
  // $('ul').children().first().remove();  // lastはなくても大丈夫

});