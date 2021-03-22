// $(function() { ... は  document.ready() の省略系
// DOMができてから ... を実行してください、の意味で理解おK
$(function() {

  // h1全部取得
  // console.log($('h1').text());

  // h1全部取得して、n番目のものを取得（例：2個目）
  // console.log($('h1').eq(1).text());

  // idがh1aのみ取得
  // console.log($('#h1a').text());

  // idがh1aの内容を書き換え
  // console.log($('#h1a').text('はまぐち'));

  // h1全て内容を書き換え
  // console.log($('h1').text('はまぐち'));

  // 課題4-1(1)： 
  // 上記「h1全部取得」で取得した要素に対して
  // 先頭の要素を取得してください（eq(0)以外の方法で）
  // console.log($('h1').first().text());

  // 課題4-1(2)： 
  // 上記「h1全部取得」で取得した要素に対して
  // 最後の要素を取得してください（eq(2)以外の方法で）
  // console.log($('h1').last().text());

});