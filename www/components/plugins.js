// This is a JavaScript file

$(document).on("click","#alerta",function(){
navigator.notification.alert("minha mensagem",null,"Aviso","Aceito");
});


$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
     navigator.notification.alert("Escolheu a opção A");
    }else{
     navigator.notification.alert("Escolheu a opção B");
    }
    
  }
navigator.notification.confirm("escolha A ou B",confirma,"Escolha:",['A','B']);
});

$(document).on("click","#beep",function(){
   navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
   navigator.vibrate(40000);
});

function mostramapa(lat, long){
     L.mapquest.key = 'D4O8BTFd9abcGfDhG8AnewduZ8E7kaSH';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
    var onSuccess = function(position) {
      mostramapa(position.coords.latitude, position.coords.longitude)
    };

    
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});