$(".profiles img").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  var text = $(this).attr("data-image");
  $(".text p").removeClass("active");
  $("#" + text).addClass("active");
});

$(".star .fa").click(function () {
  $(this).addClass("active");
  $(this).prevAll().addClass("active");
  $(this).nextAll().removeClass("active");

  var rateNum = $(this).index() + 1;
  if (rateNum === 1) {
    $(".star p").html('<img src="images/star-lv1.png">' + "별로예요.");
  } else if (rateNum === 2) {
    $(".star p").html('<img src="images/star-lv2.png">' + "보통이예요.");
  } else if (rateNum === 3) {
    $(".star p").html('<img src="images/star-lv3.png">' + "그냥 그래요.");
  } else if (rateNum === 4) {
    $(".star p").html('<img src="images/star-lv4.png">' + "맘에 들어요.");
  } else {
    $(".star p").html('<img src="images/star-lv5.png">' + "아주 좋아요.");
  }
});
