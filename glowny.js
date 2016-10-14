var lamy = 0;
var pastwiska = 0;
var schabowe = 0;

function Lama(number){
    lamy = lamy + number;
    document.getElementById("lamy").innerHTML = lamy;
};

function sprzedanieLam(number){
    
	if(lamy >= 10){
		
		schabowe = schabowe + 1;
		lamy = lamy - 10;
	}
    document.getElementById("lamy").innerHTML = lamy;
	document.getElementById("schabowe").innerHTML = schabowe;
};

window.setInterval(function(){
	
	Lama(1);
	
}, 1000);