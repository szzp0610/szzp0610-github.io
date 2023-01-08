$("#selectAll").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#selectAll").prop("checked")) {
    $(".checkbox-choose input").prop("checked", true);
  }
});
/*宜蘭*/
$("#yAll").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#yAll").prop("checked")) {
    $(".public-yilan .checkbox-area input").prop("checked", true);
  }
});
$("#yAll-2").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#yAll-2").prop("checked")) {
    $(".private-yilan .checkbox-area input").prop("checked", true);
  }
});
/*北北基*/
$("#taipei-public-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#taipei-public-all").prop("checked")) {
    $(".public-school .checkbox-area input").prop("checked", true);
  }
});
$("#taipei-private-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#taipei-private-all").prop("checked")) {
    $(".private-school .checkbox-area input").prop("checked", true);
  }
});
/*桃竹苗*/
$("#taoyuan-public-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#taoyuan-public-all").prop("checked")) {
    $(".taoyuan-public-school .checkbox-area input").prop("checked", true);
  }
});
$("#taoyuan-private-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#taoyuan-private-all").prop("checked")) {
    $(".private-school-taoyuan .checkbox-area input").prop("checked", true);
  }
});
/*中彰投*/
$("#changhua-public-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#changhua-public-all").prop("checked")) {
    $(".changhua-public-school .checkbox-area input").prop("checked", true);
  }
});
$("#changhua-private-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#changhua-private-all").prop("checked")) {
    $(".private-school-changha .checkbox-area input").prop("checked", true);
  }
});
/*雲嘉南*/
$("#chiayi-public-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#chiayi-public-all").prop("checked")) {
    $(".chiayi-public-school .checkbox-area input").prop("checked", true);
  }
});
$("#chiayi-private-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#chiayi-private-all").prop("checked")) {
    $(".private-school-chiayi .checkbox-area input").prop("checked", true);
  }
});
/*高屏金門*/
$("#kg-public-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#kg-public-all").prop("checked")) {
    $(".kg-public-school .checkbox-area input").prop("checked", true);
  }
});
$("#kg-private-all").click(function () {
  //假設全選是有被勾起來的（true)，其他checkbox也要勾起來
  if ($("#kg-private-all").prop("checked")) {
    $(".private-school-kg .checkbox-area input").prop("checked", true);
  }
});
