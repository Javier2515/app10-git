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
  
  
  
  
    function bio1(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('https://es.wikipedia.org/wiki/Biodiversidad', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };

  
  
    function bio2(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('http://www.un.org/es/events/biodiversityday/', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };

  
  
  
    function bio3(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('http://www.ine.gob.ve/index.php?option=com_content&view=article&id=114:22-de-mayo-dia-internacional-de-la-biodiversidad&catid=107:efemerides-&Itemid=48', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };

  
  
      function eco1(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('https://prezi.com/bodi8oac-tvk/conciencia-ecologica/?webgl=0', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };


    function eco2(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('https://www.ecologiaverde.com/conciencia-ecologica/', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };


    function eco3(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			var ref = cordova.InAppBrowser.open('http://www.ine.gob.ve/index.php?option=com_content&view=article&id=114:22-de-mayo-dia-internacional-de-la-biodiversidad&catid=107:efemerides-&Itemid=48', '_system', 'location=yes');
			break;
		}
	},"Advertencia","Continuar,Cancelar");
  };


  