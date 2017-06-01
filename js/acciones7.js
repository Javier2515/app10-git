// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
$('#beep').tap(function(){
navigator.notification.confirm("¿Que quieres hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			break;
		}
	},"Aplicaion7","Aceptar,Cancelar");
});//tap beep



},false); //deviceready
}); //ready