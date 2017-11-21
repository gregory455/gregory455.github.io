var monety = 10;
var dzien = 1;
var odrdzewiacz = 0;
var ran1 = 0;
var ran2 = 0;
var ran3 = 0;
var ran4 = 0;
var blokada = false;
var odrdzewianie = false;

//Deklaracje przedmiotów
var miecz1Z = 0;
var miecz1ZO = "Zardzewiały miedziany miecz";
var miecz2Z = 0;
var miecz2ZO = "Zardzewiały żelazny miecz";
var miecz3Z = 0;
var miecz3ZO = "Zardzewiały stalowy miecz";
var miecz1 = 0;
var miecz1O = "Miedziany miecz";
var miecz2 = 0;
var miecz2O = "Żelazny miecz";
var miecz3 = 0;
var miecz3O = "Stalowy miecz";
var przedmioty = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
//Koniec deklaracji

var czas = 0;
var x = 0;

function Losowanie() {
	
	if(czas == 0){
	ran1 = Math.floor((Math.random() * 3) + 1);
			
		x = Math.floor((Math.random() * 10) + 1);
		
		if(x < 8){
			miecz1Z = miecz1Z + 1;
			document.getElementById("miecz1Z").innerHTML = miecz1Z;
		} else if(x < 10 && x > 7){
			miecz2Z = miecz2Z + 1;
			document.getElementById("miecz2Z").innerHTML = miecz2Z;
		} else if(x > 9){
			miecz3Z = miecz3Z + 1;
			document.getElementById("miecz3Z").innerHTML = miecz3Z;
		};
		blokada = false;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
	}
};

function Odliczanie(number){
    
	if(czas > 0){
	czas = czas - number;
    document.getElementById("czas").innerHTML = czas;
	};
};

function odr()	{
	if(miecz3Z >= 1 && odrdzewiacz >= 1){
		move();
		setTimeout(function(){
		odrdzewiacz = odrdzewiacz - 1;
		miecz3Z = miecz3Z - 1;
		miecz3 = miecz3 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz3Z").innerHTML = miecz1Z;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
		}, 10000);
	} else if(miecz2Z >= 1 && odrdzewiacz >= 1){
		move()
		setTimeout(function(){
		odrdzewiacz = odrdzewiacz - 1;
		miecz2Z = miecz2Z - 1;
		miecz2 = miecz2 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz2Z").innerHTML = miecz1Z;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
		}, 10000);
	} else if(miecz1Z >= 1 && odrdzewiacz >= 1){
		move()
		setTimeout(function(){
		odrdzewiacz = odrdzewiacz - 1;
		miecz1Z = miecz1Z - 1;
		miecz1 = miecz1 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz1Z").innerHTML = miecz1Z;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
		}, 10000);
	}
}
		

function move() {
    var elem = document.getElementById("bar"); 
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
			width = 0;
			elem.style.width = 0;
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function KupOdrdzewiacz(){
    
	if(monety > 3){
    monety = monety - 3;
	odrdzewiacz = odrdzewiacz + 1;
	document.getElementById("monety").innerHTML = monety;
	document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
	
	if(odrdzewianie == false){
		 $("#div2a").toggle();
		 odrdzewianie = true;
	}
	};
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

function Wyprawa1(){
	if(blokada == false){
	czas = 30;
	blokada = true;
	document.getElementById("czas").innerHTML = czas;
	}
};

window.setInterval(function(){
	
	Odliczanie(1);
	
	if(blokada == true){
		Losowanie();
	}
	
}, 1000);