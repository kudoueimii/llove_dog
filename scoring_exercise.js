$(document).ready(function () {
  function score_indicate(){
    let subject_points = [
    Number($('#taste').val()),
    Number($('#hospitality').val()),
    Number($('#atmosphere').val()),
    Number($('#cleanness').val()),
    Number($('#access').val())
  ];
  let sum = subject_points[0];
  sum = sum + subject_points[1];
  sum = sum + subject_points[2];
  sum = sum + subject_points[3];
  sum = sum + subject_points[4];

  $("#sum_indicate").text(sum);
  let average = sum / subject_points.length
    $("#average_indicate").text(average);
  };

  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();
    console.log (averageIndicate)
    if (averageIndicate >= 90){
      return "星5★★★★★";
    }else if (averageIndicate >= 80) {
      return "星4★★★★";
    } else if (averageIndicate >= 60){
      return "星3★★★";
    } else if (averageIndicate >=40){
      return "星2★★";
    } else {
      return "星1★"
    }
  }

  $('#taste, #hospitality, #atmosphere, #cleanness, #access').change(function () {
    score_indicate();
  });
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });


});

