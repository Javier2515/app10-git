$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
          });

$('#beep').tap(function(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicaion7","Beep,Vibrar,Cancelar");
	
});




function lol(){
	navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(2);
			break;
			
			case 2:
			navigator.notification.vibrate(1000);
			break;
		}
	},"Aplicaion7","Beep,Vibrar,Cancelar");
	
};


	},false);
});