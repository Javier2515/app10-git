// JavaScript Document<script>
document.addEventListener("deviceready", loaded, false);
function loaded(){
alert("device is ready");
};
  function tierra1(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('https://es.wikipedia.org/wiki/Día_de_la_Tierra', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };
  

  function tierra2(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('http://www.un.org/es/events/motherearthday/', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };
  
  
  
  function tierra3(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('http://www.nationalgeographic.es/medio-ambiente/datos-del-dia-de-la-tierra-cuando-es-como-empezo', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };