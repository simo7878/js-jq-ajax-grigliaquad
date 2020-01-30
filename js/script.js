$(document).ready(function () {
  var numeroFisso = 4;

  $('.square').click(function ()
    
   {
     var square = $(this);
    $.ajax(
      {
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        method: "GET",
        success: function (data, stato) {
          numeroFisso = data.response;
          square.text(numeroFisso);
          if (numeroFisso <= 5) {
            square.addClass('yellow');
          }
          else {
            square.addClass('green');
          }

        //  console.log(data.response);

        },
        error: function (richiesta, stato, errori) {
          alert("Number error" + errore);
        }
      }
    );

  });

});
