// JavaScript Document<script>
document.addEventListener("deviceready", loaded, false);
function loaded(){
alert("device is ready");
};
  function MamWorkDone(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.vibrate(2000);
			break;
			
			case 2:
			
			function abrirEnPestana(url) {
		var a = document.createElement("a");
		a.target = "_self";
		a.href = url;
		a.click();
	}
 
	var url="http://html-color-codes.info";
 
	window.onload=function(){
		abrirEnPestana(url);
	}
			break;
		}
	},"Aplicaion7","Vibrar,Link,Cancelar");
  };

