// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo
 // stampare a schermo con Handlebars.
// Concentratevi sulla parte JS per la grafica potrete
// utilizzare il layout che troverete al seguente link
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout/downloads/
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


$(document).ready(function() {
  // AJAX BASE
  $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function (data, stato) {
        var response = data.response;
        console.log(response);
        analisiDati(response);
      },
      error: function (richiesta, stato, errori) {
      console.log(errori);
      }
    }
  );
  // /AJAX BASE

  // SELEZIONE GENERE
  $('#genre').on('click', function() {
    var value = $(this).val();
    selectionGenre(value);
  });
  // /SELEZIONE GENERE
});

// FUNCTION

function analisiDati(response, genere) {
  for (var i = 0; i < response.length; i++) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var infoCd = response[i];
    var html = template(infoCd);
    $(".cds-container").append(html);
  }
}

function selectionGenre(value) {
    $(".cd").addClass("invisible");
    if (value == "rock") {
      $("[data-genere*=Rock]").each(function() {
        $(this).removeClass("invisible");
    });
    } else if (value == "pop") {
      $("[data-genere*=Pop]").each(function() {
        $(this).removeClass("invisible");
    });
    } else if (value == "jazz") {
      $("[data-genere*=Jazz]").each(function() {
        $(this).removeClass("invisible");
    });
    } else if (value == "metal") {
      $("[data-genere*=Metal]").each(function() {
        $(this).removeClass("invisible");
    });
    } else if (value == "all") {
      $(".cd").each(function() {
        $(this).removeClass("invisible");
    });
    }
}
