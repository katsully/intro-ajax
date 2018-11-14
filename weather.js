$(document).ready(function(){       
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?APPID=8fe05ac6547cefa20b40af1273a89ef3&id=5128581&units=imperial",
    dataType: 'json',
    success: function(data) {
      // alert("Temperature is: " + data.main.temp );
      var newHeader = $("<h1>");
      newHeader.html("Temperature is: " + data.main.temp);
      $('body').append(newHeader);

      if(data.weather[0].description == "clear sky"){
        $("img").show();
      }
    },
    error: function() {
      alert("error");
    }
  });        
});