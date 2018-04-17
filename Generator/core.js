//Statystyki
var stat1 = 0; 	//Witalność
﻿var stat2 = 0; 	//Siła
﻿var stat3 = 0; 	//Zręczność
﻿var stat4 = 0; 	//Wygląd
﻿var stat5 = 0; 	//Wiedza
﻿var stat6 = 0; 	//Inteligencja
﻿var stat7 = 0; 	//Perswazja
﻿var stat8 = 0; 	//Hart ducha

//Cechy
var c1 = 0;		//Dyplomacja
var c2 = 0;		//Zarządzanie
var c3 = 0;		//Dowodzenie
var c4 = 0;		//Tajemniczość

//Umiejętności (socjalne)
var u1 = 0;		//Walka [NIEUŻYWANY, ZASTĄPIONY PRZEZ UMIEJĘTNOŚCI FIZYCZNE]
var u2 = 0;		//Znoszenie ciężkich sytuacji
var u3 = 0;		//Gra aktorska
var u4 = 0;		//Znanie swojej wartości
var u5 = 0;		//Mikrozarządzanie
var u6 = 0;		//Manipulacja
var u7 = 0;		//Adaptacja
var u8 = 0;		//Samozaparcie
var u9 = 0;		//Gry wojenne
var u10 = 0;	//Znanie cudzej wartości

//Style bycia
//Pozytywne
var sb1 = false; //Optymizm
var sb2 = false; //Wolność wyboru
var sb3 = false; //Utopijny
var sb4 = false; //Sprawiedliwość
var sb5 = false; //Prawo sprawiedliwości
var sb6 = false; //Ksenofilia
var sb7 = false; //Pacyfizm
var sb8 = false; //Ascetyzm
var sb9 = false; //Ekologia

//Neutralne
var sb10 = false; //Realizm
var sb11 = false; //Agnostycyzm
var sb12 = false; //Realistyczny
var sb13 = false; //Polityczność
var sb14 = false; //Wyrównanie
var sb15 = false; //Prawo logiki
var sb16 = false; //Brak podejścia
var sb17 = false; //Neutralność
var sb18 = false; //Umiarkowanie

//Negatywne
var sb19 = false; //Pesymizm
var sb20 = false; //Fanatycyzm
var sb21 = false; //Dystopijny
var sb22 = false; //Niesprawiedliwość
var sb23 = false; //Prawo siły
var sb24 = false; //Ksenofobia
var sb25 = false; //Militaryzm
var sb26 = false; //Konformizm
var sb27 = false; //Antykonformizm
var sb28 = false; //Chciwość
var sb29 = false; //Industrializm

//Podejścia
var p1 = 0; //Lojalny			Wolny
var p2 = 0; //Próżny			Pracowity
var p3 = 0; //Stanowczy			Wybaczający
var p4 = 0; //Poważny			Wesoły
var p5 = 0; //Porywczy			Ostrożny
var p6 = 0; //Improwizujący		Planujący
var p7 = 0; //Pomocny			Czekający na zysk
var p8 = 0; //Introwertyk		Ekstrawertyk
var p9 = 0; //Opanowany			Nerwowy
var p10 = 0; //Kreatywny		Schematyczny
var p11 = 0; //Współczujący		Bez emocji
var p12 = 0; //Szybki			Dokładny
var p13 = 0; //Taktowny			Naturalny

//Blokada podejścia (aby nie dodało czy odjęło kilka razy tego samego)
var p1u = false;
var p2u = false;
var p3u = false;
var p4u = false;
var p5u = false;
var p6u = false;
var p7u = false;
var p8u = false;
var p9u = false;
var p10u = false;
var p11u = false;
var p12u = false;
var p13u = false;

//Umiejętności fizyczne
//Praca ciężka
var uf1 = 0; //Kowalstwo, stolarstwo
var uf2 = 0; //Budownictwo
var uf3 = 0; //Farmerstwo
var uf4 = 0; //Praca ogólna (np. tragarz)
var uf5 = 0; //Łowiectwo

//Praca lekka
var uf6 = 0; //Skrybowanie
var uf7 = 0; //Handel
var uf8 = 0; //Usługiwanie
var uf9 = 0; //Bycie ważnym (bogaty)
var uf10 = 0; //Praca dorywcza

//Walka
var uf11 = 0; //Broń jednoręczna
var uf12 = 0; //Broń długa
var uf13 = 0; //Strzelnictwo
var uf14 = 0; //Skradanie się

//Różne
var bg = 0; //Bogatość rodziny (1 - biedna, 2 - średnio-zamożna, 3 - bogata)
var rs = 0; //Rasa (1 - Maldon, 2 - Hagin, 3 - Dim, 4 - Serran, 5 - Dakanczyk)
var rl = 0; //Religia (1 - Ateista/Agnostyk, 2 - Naetus, 3 - Jedyny, 4 - Garand, 5 - Harond, 6 - Azaran, 7 - Jokust, 8 - Borgi, 9 - Sefar)
var x = Math.floor((Math.random() * 10) + 1); //Do losowania
var zm = 0;
var y = 1;
var dc = 0; //Dzieciństwo (1 - dobre, 2 - złe, 3 - brak, 4 - zabrany przez grupę)
var wyb;
var wyb2;


function ustawienie1(){
	wyb = document.getElementById("myList").value; 
		if(wyb == "Maldon"){
			rs = 1;
		} else if(wyb == "Hagin"){
			rs = 2;
		} else if(wyb == "Dim"){
			rs = 3;
		} else if (wyb == "Serran"){
			rs = 4;
		} else if (wyb == "Dakanczyk"){
			rs = 5;
		}
	document.getElementById("rasa").innerHTML = wyb;
}

function start(){
//Reset poprzednich funkcji
u1 = 0;
u2 = 0;
u3 = 0;
u4 = 0;
u5 = 0;
u6 = 0;
u7 = 0;
u8 = 0;
u9 = 0;
u10 = 0;
sb1 = false;
sb2 = false;
sb3 = false;
sb4 = false;
sb5 = false;
sb6 = false;
sb7 = false;
sb8 = false;
sb9 = false;
sb10 = false;
sb11 = false;
sb12 = false;
sb13 = false;
sb14 = false;
sb15 = false;
sb16 = false;
sb17 = false;
sb18 = false;
sb19 = false;
sb20 = false;
sb21 = false;
sb22 = false;
sb23 = false;
sb24 = false;
sb25 = false;
sb26 = false;
sb27 = false;
sb28 = false;
sb29 = false;
p1 = 0;
p2 = 0;
p3 = 0;
p4 = 0;
p5 = 0;
p6 = 0;
p7 = 0;
p8 = 0;
p9 = 0;
p10 = 0;
p11 = 0;
p12 = 0;
p13 = 0;
p1u = false;
p2u = false;
p3u = false;
p4u = false;
p5u = false;
p6u = false;
p7u = false;
p8u = false;
p9u = false;
p10u = false;
p11u = false;
p12u = false;
p13u = false;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
uf = 0;
zm = 0;
y = 1;
dc = 0;

//Losowanie religii
x = Math.floor((Math.random() * 10) + 1);
if(x <= 2){
	rl = 1;
	document.getElementById("religia").innerHTML = "Ateizm/Agnostycyzm";
} else {
	x = Math.floor((Math.random() * 100) + 1);
	if(rs == 1 || rs == 5){ //Jeśli Maldon lub Dakanczyk
		if(x <= 90){ 		//90% na religię Naetus
			rl = 2;
			document.getElementById("religia").innerHTML = "Religia Naetus";
		} else {
			rl = 3; 		//10% na religię Jedynego
			document.getElementById("religia").innerHTML = "Religia Jedynego";
		}
	} else if(rs == 2){		//Jeśli Hagin
		if(x <= 75){ 		//75% na religię Garanda
			rl = 4; 
			document.getElementById("religia").innerHTML = "Religia Garanda";
		} else {			//25% na religię Haronda
			rl = 5; 		
			document.getElementById("religia").innerHTML = "Religia Haronda";
		}
	} else if(rs == 3){	 	//Jeśli Dim
		if(x <= 33){		//33% na religię Azrana
			rl = 6;
			document.getElementById("religia").innerHTML = "Religia Azrana";
		} else if(x <= 66 && x > 33){ //33% na religię Jokusta
			rl = 7;
			document.getElementById("religia").innerHTML = "Religia Jokusta";
		} else {			//33% na religię Borgiego
			rl = 8;
			document.getElementById("religia").innerHTML = "Religia Borgiego";
		}
	} else if(rs == 4){ 	//Jeśli Serran
		rl = 9;				//100% na religię Sefara
		document.getElementById("religia").innerHTML = "Religia Sefara";
	}
}

//Losowanie bogatości rodziny
x = Math.floor((Math.random() * 100) + 1);
if(x <= 20){
	bg = 3; //Bogata
	stat5 += 1;
	stat8 -= 1;
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 20){
		stat7 += 1;
	}
	document.getElementById("rodzina").innerHTML = "Bogata";
} else if(x <= 30 && x > 20){
	bg = 1; //Biedna
	stat1 -= 1;
	stat3 += 1;
	stat4 -= 1;
	stat5 -= 1;
	stat8 += 1;
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 10){
		stat2 += 1;
	}
	document.getElementById("rodzina").innerHTML = "Biedna";
} else {
	bg = 2; //Średnio zamożna
	document.getElementById("rodzina").innerHTML = "Średnio zamożna";
}

//1. Narodziny
//Losowanie statystyk
do {

//Reset statystyk po złym losowaniu
stat1 = 0;
stat2 = 0;
stat3 = 0;
stat4 = 0;
stat5 = 0;
stat6 = 0;
stat7 = 0;
stat8 = 0;

//Statystyki rasowe
if(rs == 2){
	stat1 += 2;
	stat2 += 2;
	stat3 -= 1;
	stat4 -= 1;
	stat5 -= 1;
	stat6 -= 1;
	stat7 -= 1;
	stat8 += 1;
} else if(rs == 3){
	stat1 -= 1;
	stat2 -= 2;
	stat3 += 2;
	stat6 += 1;
	stat7 -= 1;
} else if(rs == 4){
	stat3 += 2;
	stat4 -= 1;
	stat7 += 1;
	stat8 -= 1;
} else if(rs == 5){
	stat1 += 1;
	stat2 += 1;
	stat3 += 1;
	stat4 += 1;
	stat5 += 1;
	stat6 += 2;
	stat7 -= 2;
	stat8 -= 1;
}
if(rl == 9){stat8 += 1;}

//Losowanie
stat1 = stat1 + Math.floor((Math.random() * 4) + 1) + 3;
stat2 = stat2 + Math.floor((Math.random() * 4) + 1) + 3;
stat3 = stat3 + Math.floor((Math.random() * 4) + 1) + 3;
stat4 = stat4 + Math.floor((Math.random() * 4) + 1) + 3;
stat5 = stat5 + Math.floor((Math.random() * 7) + 1);
stat6 = stat6 + Math.floor((Math.random() * 7) + 1);
stat7 = stat7 + Math.floor((Math.random() * 7) + 1);
stat8 = stat8 + Math.floor((Math.random() * 7) + 1);
} while (stat1 < 1 || stat1 > 7 || stat2 < 1 || stat2 > 7 || stat3 < 1 || stat3 > 7 || stat4 < 1 || stat4 > 7 || stat5 < 1 || stat5 > 7 || stat6 < 1 || stat6 > 7 || stat7 < 1 || stat7 > 7 || stat8 < 1 || stat8 > 7);

document.getElementById("st1.1").innerHTML = stat1;
document.getElementById("st1.2").innerHTML = stat2;
document.getElementById("st1.3").innerHTML = stat3;
document.getElementById("st1.4").innerHTML = stat4;
document.getElementById("st1.5").innerHTML = stat5;
document.getElementById("st1.6").innerHTML = stat6;
document.getElementById("st1.7").innerHTML = stat7;
document.getElementById("st1.8").innerHTML = stat8;

//Losowe podejścia
while(zm < 10){
	x = Math.floor((Math.random() * 13) + 1);
	if(y == 1){
		if(x == 1 && p1u == false){
			p1 += 1;
			p1u = true;
			zm = zm + 1;
		} else
		if(x == 2 && p2u == false){
			p2 += 1;
			p2u = true;
			zm = zm + 1;
		} else
		if(x == 3 && p3u == false){
			p3 += 1;
			p3u = true;
			zm = zm + 1;
		} else
		if(x == 4 && p4u == false){
			p4 += 1;
			p4u = true;
			zm = zm + 1;
		} else
		if(x == 5 && p5u == false){
			p5 += 1;
			p5u = true;
			zm = zm + 1;
		} else
		if(x == 6 && p6u == false){
			p6 += 1;
			p6u = true;
			zm = zm + 1;
		} else
		if(x == 7 && p7u == false){
			p7 += 1;
			p7u = true;
			zm = zm + 1;
		} else
		if(x == 8 && p8u == false){
			p8 += 1;
			p8u = true;
			zm = zm + 1;
		} else
		if(x == 9 && p9u == false){
			p9 += 1;
			p9u = true;
			zm = zm + 1;
		} else
		if(x == 10 && p10u == false){
			p10 += 1;
			p10u = true;
			zm = zm + 1;
		} else
		if(x == 11 && p11u == false){
			p11 += 1;
			p11u = true;
			zm = zm + 1;
		} else
		if(x == 12 && p12u == false){
			p12 += 1;
			p12u = true;
			zm = zm + 1;
		} else
		if(x == 13 && p13u == false){
			p13 += 1;
			p13u = true;
			zm = zm + 1;
		}
	} else if(y == 2){
		if(x == 1 && p1u == false){
			p1 -= 1;
			p1u = true;
			zm = zm + 1;
		} else
		if(x == 2 && p2u == false){
			p2 -= 1;
			p2u = true;
			zm = zm + 1;
		} else
		if(x == 3 && p3u == false){
			p3 -= 1;
			p3u = true;
			zm = zm + 1;
		} else
		if(x == 4 && p4u == false){
			p4 -= 1;
			p4u = true;
			zm = zm + 1;
		} else
		if(x == 5 && p5u == false){
			p5 -= 1;
			p5u = true;
			zm = zm + 1;
		} else
		if(x == 6 && p6u == false){
			p6 -= 1;
			p6u = true;
			zm = zm + 1;
		} else
		if(x == 7 && p7u == false){
			p7 -= 1;
			p7u = true;
			zm = zm + 1;
		} else
		if(x == 8 && p8u == false){
			p8 -= 1;
			p8u = true;
			zm = zm + 1;
		} else
		if(x == 9 && p9u == false){
			p9 -= 1;
			p9u = true;
			zm = zm + 1;
		} else
		if(x == 10 && p10u == false){
			p10 -= 1;
			p10u = true;
			zm = zm + 1;
		} else
		if(x == 11 && p11u == false){
			p11 -= 1;
			p11u = true;
			zm = zm + 1;
		} else
		if(x == 12 && p12u == false){
			p12 -= 1;
			p12u = true;
			zm = zm + 1;
		} else
		if(x == 13 && p13u == false){
			p13 -= 1;
			p13u = true;
			zm = zm + 1;
		}
	}
	if(zm == 5){
		y = 2;
	}
}

document.getElementById("p1").innerHTML = p1;
document.getElementById("p2").innerHTML = p2;
document.getElementById("p3").innerHTML = p3;
document.getElementById("p4").innerHTML = p4;
document.getElementById("p5").innerHTML = p5;
document.getElementById("p6").innerHTML = p6;
document.getElementById("p7").innerHTML = p7;
document.getElementById("p8").innerHTML = p8;
document.getElementById("p9").innerHTML = p9;
document.getElementById("p10").innerHTML = p10;
document.getElementById("p11").innerHTML = p11;
document.getElementById("p12").innerHTML = p12;
document.getElementById("p13").innerHTML = p13;
		
//DZIECIŃSTWO---------------------------------------------------------------------------------
x = Math.floor((Math.random() * 100) + 1); //losowanie dzieciństwa
if(x <= 80){
	dc = 1;
} else if(x <= 95 && x > 80){
	dc = 2;
} else {
	dc = 3;
}

if(dc == 1){
	ranP;
	ranS(1);
} else if(dc == 2){
	ranP;
	ranP;
	ranS(-1);
} else if(dc == 3){
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 70){
		ranP;
		ranS(1);
	} else if (x <= 90 && x > 70){
		ranP;
		ranS(1);
		sb6 = true;
	} else {
		ranP;
		ranP;
		ranS(+1);
		dc == 4; //Jeśli zabrany przez grupę
	}
}
	
//MŁODZIEŃCZOŚĆ-------------------------------------------------------------------------------
if(dc == 2 || dc == 4){ //losowanie dla złej młodzieńczości
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 60){
		ranP();
		ranS(1);
		ranS(1);
	}
}
	
};

function ranP(){
		x = Math.floor((Math.random() * 13) + 1);
		if(x == 1){
			p1 += 1;
			p1u = true;
			zm = zm + 1;
		} else
		if(x == 2){
			p2 += 1;
			p2u = true;
			zm = zm + 1;
		} else
		if(x == 3){
			p3 += 1;
			p3u = true;
			zm = zm + 1;
		} else
		if(x == 4){
			p4 += 1;
			p4u = true;
			zm = zm + 1;
		} else
		if(x == 5){
			p5 += 1;
			p5u = true;
			zm = zm + 1;
		} else
		if(x == 6){
			p6 += 1;
			p6u = true;
			zm = zm + 1;
		} else
		if(x == 7){
			p7 += 1;
			p7u = true;
			zm = zm + 1;
		} else
		if(x == 8){
			p8 += 1;
			p8u = true;
			zm = zm + 1;
		} else
		if(x == 9){
			p9 += 1;
			p9u = true;
			zm = zm + 1;
		} else
		if(x == 10){
			p10 += 1;
			p10u = true;
			zm = zm + 1;
		} else
		if(x == 11){
			p11 += 1;
			p11u = true;
			zm = zm + 1;
		} else
		if(x == 12){
			p12 += 1;
			p12u = true;
			zm = zm + 1;
		} else
		if(x == 13){
			p13 += 1;
			p13u = true;
			zm = zm + 1;
		} else
		if(x == 14){
			p1 -= 1;
			p1u = true;
			zm = zm + 1;
		} else
		if(x == 15){
			p2 -= 1;
			p2u = true;
			zm = zm + 1;
		} else
		if(x == 16){
			p3 -= 1;
			p3u = true;
			zm = zm + 1;
		} else
		if(x == 17){
			p4 -= 1;
			p4u = true;
			zm = zm + 1;
		} else
		if(x == 18){
			p5 -= 1;
			p5u = true;
			zm = zm + 1;
		} else
		if(x == 19){
			p6 -= 1;
			p6u = true;
			zm = zm + 1;
		} else
		if(x == 20){
			p7 -= 1;
			p7u = true;
			zm = zm + 1;
		} else
		if(x == 21){
			p8 -= 1;
			p8u = true;
			zm = zm + 1;
		} else
		if(x == 22){
			p9 -= 1;
			p9u = true;
			zm = zm + 1;
		} else
		if(x == 23){
			p10 -= 1;
			p10u = true;
			zm = zm + 1;
		} else
		if(x == 24){
			p11 -= 1;
			p11u = true;
			zm = zm + 1;
		} else
		if(x == 25){
			p12 -= 1;
			p12u = true;
			zm = zm + 1;
		} else
		if(x == 26){
			p13 -= 1;
			p13u = true;
			zm = zm + 1;
		}
}

function ranS(num){
x = Math.floor((Math.random() * 8) + 1);
if(x == 1){
	stat1 += num;
} else if(x == 2){
	stat2 += num;
} else if(x == 3){
	stat3 += num;
} else id(x == 4){
	stat4 += num;
} else if(x == 5){
	stat5 += num;
} else if(x == 6){
	stat6 += num;
} else id(x == 7){
	stat7 += num;
} else id(x == 8){
	stat8 += num;
}
}

function ranUp(blokada, wzrost) { //ustalanie umiejętności fizycznych. blokada aby uniemożliwić uzyskiwanie nowych umiejętności, lub wzrost tylko tych "lepszych"
x = Math.floor((Math.random() * 9) + 1);
if(x == 1 && u2 > blokada){
	u2 += 1;
} else if(x == 2 && u3 > blokada){
	u3 += 1;
} else if(x == 3 && u4 > blokada){
	u4 += 1;
} else if(x == 4 && u5 > blokada && stat6 > 6){
	u5 += 1;
} else if(x == 5 && u6 > blokada && stat6 > 6){
	u6 += 1;
} else if(x == 6 && u7 > blokada){
	u7 += 1;
} else if(x == 7 && u8 > blokada && stat8 > 6){
	u8 += 1;
} else if(x == 8 && u9 > blokada && stat6 > 5){
	u9 += 1;
} else if(x == 9 && u19 > blokada){
	u10 += 1;
}
}

function ranSB(rodzaj){ //Losowanie sposobu bycia
	if(rodzaj == pozytywny){
		x = Math.floor((Math.random() * 9) + 1);
	} else if(rodzaj == neutralny){
		x = Math.floor((Math.random() * 9) + 9);
	} else if(rodzaj == negatywny){
		x = Math.floor((Math.random() * 10) + 19);
	} else if(rodzaj == poz-neut){
		x = Math.floor((Math.random() * 18) + 1);
	} else if(rodzaj == poz-neg){
		while(x >= 10 || x <= 18){
			x = Math.floor((Math.random() * 29) + 1);
		}
	} else if(rodzaj == neut-neg){
		x = Math.floor((Math.random() * 19) + 10);
	}
	
	if(x == 1 && sb10 == false && sb19 == false){
		sb1 = true;
	} else if(x == 2 && sb11 == false && sb20 == false){
		sb2 = true;
	} else if(x == 3 && sb12 == false && sb21 == false){
		sb3 = true;
	} else if(x == 4 && sb14 == false && sb22 == false){
		sb4 = true;
	} else if(x == 5 && sb15 == false && sb23 == false){
		sb5 = true;
	} else if(x == 6 && sb16 == false && sb24 == false){
		sb6 = true;
	} else if(x == 7 && sb17 == false && sb25 == false){
		sb7 = true;
	} else if(x == 8 && sb18 == false && sb28 == false){
		sb8 = true;
	} else if(x == 9 && sb29 == false){
		sb9 = true;
	} else if(x == 10 && sb1 == false && sb19 == false){
		sb10 = true;
	} else if(x == 11 && sb2 == false && sb20 == false){
		sb11 = true;
	} else if(x == 12 && sb3 == false && sb21 == false){
		sb12 = true;
	} else if(x == 13){
		sb13 = true;
	} else if(x == 14 && sb4 == false && sb22 == false){
		sb14 = true;
	} else if(x == 15 && sb5 == false && sb23 == false){
		sb15 = true;
	} else if(x == 16 && sb6 == false && sb24 == false){
		sb16 = true;
	} else if(x == 17 && sb7 == false && sb25 == false){
		sb17 = true;
	} else if(x == 18 && sb8 == false && sb28 == false){
		sb18 = true;
	} else if(x == 19 && sb1 == false && sb10 == false){
		sb19 = true;
	} else if(x == 20 && sb2 == false && sb11 == false){
		sb20 = true;
	} else if(x == 21 && sb3 == false && sb12 == false){
		sb21 = true;
	} else if(x == 22 && sb4 == false && sb14 == false){
		sb22 = true;
	} else if(x == 23 && sb5 == false && sb15 == false){
		sb23 = true;
	} else if(x == 24 && sb6 == false && sb16 == false){
		sb24 = true;
	} else if(x == 25 && sb7 == false && sb17 == false){
		sb25 = true;
	} else if(x == 26 && sb27 == false){
		sb26 = true;
	} else if(x == 27 && sb26 == false){
		sb27 = true;
	} else if(x == 28 && sb8 == false && sb18 == false){
		sb28 = true;
	} else if(x == 29 && sb9 == false){
		sb29 = true;
	}
}