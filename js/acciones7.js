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
			var ref = cordova.InAppBrowser.open('http://html-color-codes.info', '_system', 'location=yes');
			break;
			
		
			
			case 2:
			var ref = cordova.InAppBrowser.open('http://html-color-codes.info', '_blank', 'location=yes');
			break;
		}
	},"Aplicaion7","System,Blank,Cancelar");
  };

