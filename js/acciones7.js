// JavaScript Document<script>
document.addEventListener("deviceready", loaded, false);
function loaded(){
alert("device is ready");
var ref = cordova.InAppBrowser.open('http://html-color-codes.info', '_system', 'location=yes');
};
  function MamWorkDone(){
	navigator.notification.confirm("Se abrira el navegador",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.vibrate(2000);
			break;
			
			case 2:
			navigator.app.loadUrl("http://html-color-codes.info",{openExternal:true});
			break;
		}
	},"Aplicaion7","Vibrar,Link,Cancelar");
  };

