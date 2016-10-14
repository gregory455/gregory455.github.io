var lamy = 0;
var pastwiska = 0;
var schabowe = 0;
var kupno1 = 2;

function Lama(number){
    lamy = lamy + pastwiska + number;
    document.getElementById("lamy").innerHTML = lamy;
};

function sprzedanieLam(number){
    
	if(lamy >= number){
		
		schabowe = schabowe + (number/10);
		lamy = lamy - number;
	}
    document.getElementById("lamy").innerHTML = lamy;
	document.getElementById("schabowe").innerHTML = schabowe;
};

function kupnoPastwiska(number){
	
	if(schabowe >= kupno1){
		
    		schabowe = schabowe - kupno1;
		pastwiska = pastwiska + 1;
		kupno1 = kupno1 + 2;
    		document.getElementById("schabowe").innerHTML = schabowe;
		document.getElementById("pastwiska").innerHTML = pastwiska;
		document.getElementById("kupno1").innerHTML = kupno1;
	}
};

window.setInterval(function(){
	
	Lama(1);
	
}, 1000);
