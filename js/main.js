// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line

  // image swap
  $("#cookies_img").mouseover(function () {
    $("#cookies_img").attr("src", "images/cookies2.JPG");
  })

  $("#cookies_img").mouseout(function () {
    $("#cookies_img").attr("src", "images/cookies.JPG");
  })

  // content change
  $("input#dont_preheat_button").click(function () {
    $("p#warning").text("Recipe below!");
    $("#dont_preheat_button").fadeOut();
  })

  // animation
  $("input#celebrate_button").click(function () {
    $("#celebrate_img").animate(
      {
        height: "+20px"
      }, "slow"
    );
    $("#celebrate_img").animate(
      {
        width: "+20px"
      }, "slow"
    );
    $("#celebrate_img").animate(
      {
        height: "70%"
      }, "slow"
    );
    $("#celebrate_img").animate(
      {
        width: "70%"
      }, "slow"
    );
  });

  // add any custom Javascript code above this line.
});
