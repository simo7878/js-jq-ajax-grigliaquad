$(document).ready(function () {
  var numeroFisso = 10;

  $('.square').click(function () {
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          console.log(data.response);
        },
        error: function (richiesta, stato, errori) {
          alert("Number error" + errore);
        }
      }
    );
    $(this).text(numeroFisso);
    if (numeroFisso <= 10) {
      $(this).addClass('yellow');
    }
    else {
      $(this).addClass('red');
    }
  });

});
