var monety = 30;
var dzien = 1;
var odrdzewiacz = 0;
var ran1 = 0;
var ran2 = 0;
var ran3 = 0;
var ran4 = 0;
var blokada = false;
var odrdzewianie = false;
var max_cena = 10;
var rage = 0;
var popyt = 0;
var start_sklep = false;
var cena = 1;
var cenaDod = 0;
var wys = 0;
var nic = 0;
var plecak = false;
    var stanSklepu = document.getElementById("stanSklepu");  
    stanSklepu.textContent = "zamknięty";  
    var text = stanSklepu.textContent;  

//Deklaracje przedmiotów
var smieci1 = 0;
var smieci2 = 0;
var smieci3 = 0;
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
	if(plecak == true){
		var lol;
		for(lol = 0; lol < 3; lol++){
	if(czas == 0){
	ran1 = Math.floor((Math.random() * 3) + 1);
			
		x = Math.floor((Math.random() * 21) + 1);
		
		if(x <= 10){
			smieci1 = smieci1 + 1;
			document.getElementById("smieci1").innerHTML = smieci1;
		} else if(x <= 16 && x > 10){
			smieci2 = smieci2 + 1;
			document.getElementById("smieci2").innerHTML = smieci2;
		} else if(x <= 19 && x > 16){
			miecz1Z = miecz1Z + 1;
			document.getElementById("miecz1Z").innerHTML = miecz1Z;
		} else if(x <= 21){
			miecz2Z = miecz2Z + 1;
			document.getElementById("miecz2Z").innerHTML = miecz2Z;
		};
		blokada = false;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
	}
		}
	} else
		
	if(czas == 0){
	ran1 = Math.floor((Math.random() * 3) + 1);
			
		x = Math.floor((Math.random() * 21) + 1);
		
		if(x <= 10){
			smieci1 = smieci1 + 1;
			document.getElementById("smieci1").innerHTML = smieci1;
		} else if(x <= 16 && x > 10){
			smieci2 = smieci2 + 1;
			document.getElementById("smieci2").innerHTML = smieci2;
		} else if(x <= 19 && x > 16){
			miecz1Z = miecz1Z + 1;
			document.getElementById("miecz1Z").innerHTML = miecz1Z;
		} else if(x <= 21){
			miecz2Z = miecz2Z + 1;
			document.getElementById("miecz2Z").innerHTML = miecz2Z;
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
		document.getElementById("miecz3Z").innerHTML = miecz3Z;
		document.getElementById("miecz3").innerHTML = miecz3;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
		}, 10000);
	} else if(miecz2Z >= 1 && odrdzewiacz >= 1){
		move();
		setTimeout(function(){
		odrdzewiacz = odrdzewiacz - 1;
		miecz2Z = miecz2Z - 1;
		miecz2 = miecz2 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz2Z").innerHTML = miecz2Z;
		document.getElementById("miecz2").innerHTML = miecz2;
		document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;
		}, 10000);
	} else if(miecz1Z >= 1 && odrdzewiacz >= 1){
		move();
		setTimeout(function(){
		odrdzewiacz = odrdzewiacz - 1;
		miecz1Z = miecz1Z - 1;
		miecz1 = miecz1 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz1Z").innerHTML = miecz1Z;
		document.getElementById("miecz1").innerHTML = miecz1;
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

function move2() {
    var elem2 = document.getElementById("bar2"); 
    var width2 = 1;
    var id2 = setInterval(frame, 100);
    function frame() {
        if (width2 >= 100) {
            clearInterval(id2);
			width2 = 0;
			elem2.style.width = 0;
        } else {
            width2++; 
            elem2.style.width = width2 + '%'; 
        }
    }
}

function KupOdrdzewiacz(){
    
	if(monety >= 3){
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

function KupPlecak(){
    
	if(monety >= 20 && plecak == false){
    monety = monety - 20;
	plecak = true;
	document.getElementById("monety").innerHTML = monety;
		$("#plecak").slideToggle();
		$("#plecak").fadeIn('slow').delay(1000).hide(0);
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

function Sprzedaz(bron){
	if(bron >= 1){
	if(bron == miecz1Z){
		max_cena = 3;
		popyt = 50;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz1Z;
	}
	if(bron == miecz2Z){
		max_cena = 6;
		popyt = 50;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz2Z;
	}
	if(bron == miecz3Z){
		max_cena = 10;
		popyt = 50;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz3Z;
	}
	if(bron == miecz1){
		max_cena = 7;
		popyt = 100;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz1;
	}
	if(bron == miecz2){
		max_cena = 11;
		popyt = 100;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz2;
	}
	if(bron == miecz3){
		max_cena = 17;
		popyt = 100;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz3;
	}
	}
	bron == nic;

}

function Sprzedaz2(){
	if(start_sklep == true){
		move2();
		setTimeout(function(){
	popyt = popyt - ((cena / max_cena) * 50);
	ran1 = Math.floor((Math.random() * popyt) + ((popyt / 1.5)));
	if(ran1 >= popyt && ran1 > 0){
		monety = monety + cena;
		document.getElementById("monety").innerHTML = monety;
		start_sklep = false;
		stanSklepu.textContent = "zamknięty";
			Zabranie();
	}
	if(ran1 < popyt || ran1 <= 0){
	Sprzedaz(wys);
	}
	}, 10000);
	}
}

function Zabranie(){
	if(wys == miecz1Z){
	miecz1Z = miecz1Z - 1;
	document.getElementById("miecz1Z").innerHTML = miecz1Z;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
	if(wys == miecz2Z){
	miecz2Z = miecz2Z - 1;
	document.getElementById("miecz2Z").innerHTML = miecz2Z;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
	if(wys == miecz3Z){
	miecz3Z = miecz3Z - 1;
	document.getElementById("miecz3Z").innerHTML = miecz3Z;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
	if(wys == miecz1){
	miecz1 = miecz1 - 1;
	document.getElementById("miecz1").innerHTML = miecz1;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
	if(wys == miecz2){
	miecz2 = miecz2 - 1;
	document.getElementById("miecz2").innerHTML = miecz2;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
	if(wys == miecz3){
	miecz3 = miecz3 - 1;
	document.getElementById("miecz3").innerHTML = miecz3;
	document.getElementById("przedmioty").innerHTML = miecz1Z + miecz2Z + miecz3Z + miecz1 + miecz2 + miecz3 + odrdzewiacz;}
}

function ZwiekszCene(CenaDod){
	cena = cena + CenaDod;
	document.getElementById("cena").innerHTML = cena;
}

function ZmniejszCene(CenaDod){
	if(cena >= 1){
	cena = cena - CenaDod;
	document.getElementById("cena").innerHTML = cena;
	}
}

window.setInterval(function(){
	
	Odliczanie(1);
	
	if(blokada == true){
		Losowanie();
	}
	
}, 1000);