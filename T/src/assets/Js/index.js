

$(function(){

  // $("select.selectCurrency").change(function(){
  //   var selectedCountry = $(this).children("option:selected").val();
  //   if(selectedCountry == 'egp') {
  //     var price = $('.priceForCurrency').text();
  //     var convertprice =parseInt(price);
  //      var newPrice = convertprice * 18;
  //       $('.priceForCurrency').text(newPrice);
  //    } else {
  //     var price2 = $('.priceForCurrency').text();
  //    var convertprice2 =parseInt(price2);
  //    var newPrice2 = convertprice2 / 18;
  //    $('.priceForCurrency').text(newPrice2);
  //   }
// });



/* ==================== Start Change Direction Function ====================*/

  $("#changeLanguages").click(function(){
    var toggle =  document.getElementsByTagName('Body')[0].style.direction;
    if(toggle == "ltr") {
      $("html").children().css("direction","rtl");
      $('#changeLanguages').text('En');
    } else {
      $("html").children().css("direction","ltr");
      $('#changeLanguages').text('العربية');
    }
  });
/* ===================== End Change Direction Function ====================*/



/* ===================== Start add to favourite Function ====================*/

  var white = false
 var color;
  $("#heart").click(function () {
    if (white = !white) {
      color = $(this).css('color');
      $(this).css("color", "red");
    } else {
      $(this).css("color", "gainsboro");
    }
  });


/* ======================= End add to favourite Function ====================*/


/* ======================= Start toggle filter  Function ====================*/

  $(".buttonsFilter button").click(function()
  {
    $("button.btn").removeClass("filterButtons");
    $(this).addClass("filterButtons");
  });
/* ======================= End toggle filter  Function ====================*/



});




