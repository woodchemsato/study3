$(function() {

  $("#fadeInTest").click(function() {
    // 効果を確認するために、一度消してからfadeInしている
    $("#fadeInTest").hide().fadeIn(3000);
  });
 
  $("#fadeOutTest").click(function() {
    // 効果を確認するために、一度消してからfadeInしている
    $("#fadeOutTest").fadeOut(3000);
  });
  
});