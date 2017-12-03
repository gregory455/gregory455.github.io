﻿var monety = 10;
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
var odrdzewianie_blokada = false;
var plecak = false;
    var stanSklepu = document.getElementById("stanSklepu");  
    //stanSklepu.textContent = "zamknięty";  
    //var text = stanSklepu.textContent;  

//Deklaracje przedmiotów
// 1 - miedziane
// 2 - cynowe
// 3 - żelazne
// 4 - z brązu
// 5 - srebrne
// 6 - stalowe
// 7 - złote
// 8 - durastalowe
// 9 - tytanowe
// 10 - obsydianowe
// 11 - szafirowe
// 12 - szmaragdowe
// 13 - rubinowe
// 14 - diamentowe
// 15 - ebonitowe
// 16 - z uridium

var smieci1 = 0;
var smieci2 = 0;
var smieci3 = 0;
var smieci4 = 0;
var smieci5 = 0;
var smieci6 = 0;
var smieci7 = 0;
var smieci8 = 0;
var smieci9 = 0;
var smieci10 = 0;
var smieci11 = 0;
var smieci12 = 0;
var smieci13 = 0;
var smieci14 = 0;
var smieci15 = 0;
var smieci16 = 0;
var sztylet1 = 0;
var sztylet2 = 0;
var sztylet3 = 0;
var sztylet4 = 0;
var sztylet5 = 0;
var sztylet6 = 0;
var sztylet7 = 0;
var sztylet8 = 0;
var sztylet9 = 0;
var sztylet10 = 0;
var sztylet11 = 0;
var sztylet12 = 0;
var sztylet13 = 0;
var sztylet14 = 0;
var sztylet15 = 0;
var sztylet16 = 0;
var sztylet1z = 0;
var sztylet2z = 0;
var sztylet3z = 0;
var sztylet4z = 0;
var sztylet5z = 0;
var sztylet6z = 0;
var sztylet7z = 0;
var sztylet8z = 0;
var sztylet9z = 0;
var sztylet10z = 0;
var sztylet11z = 0;
var sztylet12z = 0;
var sztylet13z = 0;
var sztylet14z = 0;
var sztylet15z = 0;
var sztylet16z = 0;
var sztylet1w = 0;
var sztylet2w = 0;
var sztylet3w = 0;
var sztylet4w = 0;
var sztylet5w = 0;
var sztylet6w = 0;
var sztylet7w = 0;
var sztylet8w = 0;
var sztylet9w = 0;
var sztylet10w = 0;
var sztylet11w = 0;
var sztylet12w = 0;
var sztylet13w = 0;
var sztylet14w = 0;
var sztylet15w = 0;
var sztylet16w = 0;
var miecz1Z = 0;
var miecz2Z = 0;
var miecz3Z = 0;
var miecz4Z = 0;
var miecz5Z = 0;
var miecz6Z = 0;
var miecz7Z = 0;
var miecz8Z = 0;
var miecz9Z = 0;
var miecz10Z = 0;
var miecz11Z = 0;
var miecz12Z = 0;
var miecz13Z = 0;
var miecz14Z = 0;
var miecz15Z = 0;
var miecz16Z = 0;
var miecz1 = 0;
var miecz2 = 0;
var miecz3 = 0;
var miecz4 = 0;
var miecz5 = 0;
var miecz6 = 0;
var miecz7 = 0;
var miecz8 = 0;
var miecz9 = 0;
var miecz10 = 0;
var miecz11 = 0;
var miecz12 = 0;
var miecz13 = 0;
var miecz14 = 0;
var miecz15 = 0;
var miecz16 = 0;
var miecz1w = 0;
var miecz2w = 0;
var miecz3w = 0;
var miecz4w = 0;
var miecz5w = 0;
var miecz6w = 0;
var miecz7w = 0;
var miecz8w = 0;
var miecz9w = 0;
var miecz10w = 0;
var miecz11w = 0;
var miecz12w = 0;
var miecz13w = 0;
var miecz14w = 0;
var miecz15w = 0;
var miecz16w = 0;
var kmiecz1 = 0;
var kmiecz2 = 0;
var kmiecz3 = 0;
var kmiecz4 = 0;
var kmiecz5 = 0;
var kmiecz6 = 0;
var kmiecz7 = 0;
var kmiecz8 = 0;
var kmiecz9 = 0;
var kmiecz10 = 0;
var kmiecz11 = 0;
var kmiecz12 = 0;
var kmiecz13 = 0;
var kmiecz14 = 0;
var kmiecz15 = 0;
var kmiecz16 = 0;
var kmiecz1z = 0;
var kmiecz2z = 0;
var kmiecz3z = 0;
var kmiecz4z = 0;
var kmiecz5z = 0;
var kmiecz6z = 0;
var kmiecz7z = 0;
var kmiecz8z = 0;
var kmiecz9z = 0;
var kmiecz10z = 0;
var kmiecz11z = 0;
var kmiecz12z = 0;
var kmiecz13z = 0;
var kmiecz14z = 0;
var kmiecz15z = 0;
var kmiecz16z = 0;
var kmiecz1w = 0;
var kmiecz2w = 0;
var kmiecz3w = 0;
var kmiecz4w = 0;
var kmiecz5w = 0;
var kmiecz6w = 0;
var kmiecz7w = 0;
var kmiecz8w = 0;
var kmiecz9w = 0;
var kmiecz10w = 0;
var kmiecz11w = 0;
var kmiecz12w = 0;
var kmiecz13w = 0;
var kmiecz14w = 0;
var kmiecz15w = 0;
var kmiecz16w = 0;
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
	}
};

function Odliczanie(number){
    
	if(czas > 0){
	czas = czas - number;
    document.getElementById("czas").innerHTML = czas;
	};
};

function odr()	{
	if(odrdzewianie_blokada == false){
	if(miecz3Z >= 1 && odrdzewiacz >= 1){
		move();
		odrdzewianie_blokada = true;
		setTimeout(function(){
		odrdzewianie_blokada = false;
		odrdzewiacz = odrdzewiacz - 1;
		miecz3Z = miecz3Z - 1;
		miecz3 = miecz3 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz3Z").innerHTML = miecz3Z;
		document.getElementById("miecz3").innerHTML = miecz3;
		}, 10000);
	} else if(miecz2Z >= 1 && odrdzewiacz >= 1){
		move();
		odrdzewianie_blokada = true;
		setTimeout(function(){
		odrdzewianie_blokada = false;
		odrdzewiacz = odrdzewiacz - 1;
		miecz2Z = miecz2Z - 1;
		miecz2 = miecz2 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz2Z").innerHTML = miecz2Z;
		document.getElementById("miecz2").innerHTML = miecz2;
		}, 10000);
	} else if(miecz1Z >= 1 && odrdzewiacz >= 1){
		move();
		odrdzewianie_blokada = true;
		setTimeout(function(){
		odrdzewianie_blokada = false;
		odrdzewiacz = odrdzewiacz - 1;
		miecz1Z = miecz1Z - 1;
		miecz1 = miecz1 + 1;
		document.getElementById("odrdzewiacz").innerHTML = odrdzewiacz;
		document.getElementById("miecz1Z").innerHTML = miecz1Z;
		document.getElementById("miecz1").innerHTML = miecz1;
		}, 10000);
	}
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
	czas = 20;
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
	} else
	if(bron == miecz2Z){
		max_cena = 6;
		popyt = 50;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz2Z;
	} else
	if(bron == miecz3Z){
		max_cena = 10;
		popyt = 50;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz3Z;
	} else
	if(bron == miecz1){
		max_cena = 7;
		popyt = 100;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz1;
	} else
	if(bron == miecz2){
		max_cena = 11;
		popyt = 100;
		rage = 0;
		start_sklep = true;
		stanSklepu.textContent = "otwarty";
		wys = miecz2;
	} else
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
	} else
	if(wys == miecz2Z){
	miecz2Z = miecz2Z - 1;
	document.getElementById("miecz2Z").innerHTML = miecz2Z;
	} else
	if(wys == miecz3Z){
	miecz3Z = miecz3Z - 1;
	document.getElementById("miecz3Z").innerHTML = miecz3Z;
	} else
	if(wys == miecz1){
	miecz1 = miecz1 - 1;
	document.getElementById("miecz1").innerHTML = miecz1;
	} else
	if(wys == miecz2){
	miecz2 = miecz2 - 1;
	document.getElementById("miecz2").innerHTML = miecz2;
	} else
	if(wys == miecz3){
	miecz3 = miecz3 - 1;
	document.getElementById("miecz3").innerHTML = miecz3;
	}
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
