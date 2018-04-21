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
var uf11 = 0; //Broń krótka
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
var blokada;
var wzrost;
var rodzaj;
var num;
var y = 0;
var dor = 0; //Określanie dorosłości. Tylko dla zabójcy.

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
uf1 = 0;
uf2 = 0;
uf3 = 0;
uf4 = 0;
uf5 = 0;
uf6 = 0;
uf7 = 0;
uf8 = 0;
uf9 = 0;
uf10 = 0;
uf11 = 0;
uf12 = 0;
uf13 = 0;
uf14 = 0;
zm = 0;
y = 1;
dc = 0;
dor = 0;
document.getElementById("sb1").innerHTML = '';
document.getElementById("sb2").innerHTML = '';
document.getElementById("sb3").innerHTML = '';
document.getElementById("sb4").innerHTML = '';
document.getElementById("sb5").innerHTML = '';
document.getElementById("sb6").innerHTML = '';
document.getElementById("sb7").innerHTML = '';
document.getElementById("sb8").innerHTML = '';
document.getElementById("sb9").innerHTML = '';
document.getElementById("sb10").innerHTML = '';
document.getElementById("sb11").innerHTML = '';
document.getElementById("sb12").innerHTML = '';
document.getElementById("sb13").innerHTML = '';
document.getElementById("sb14").innerHTML = '';
document.getElementById("sb15").innerHTML = '';
document.getElementById("sb16").innerHTML = '';
document.getElementById("sb17").innerHTML = '';
document.getElementById("sb18").innerHTML = '';
document.getElementById("sb19").innerHTML = '';
document.getElementById("sb20").innerHTML = '';
document.getElementById("sb21").innerHTML = '';
document.getElementById("sb22").innerHTML = '';
document.getElementById("sb23").innerHTML = '';
document.getElementById("sb24").innerHTML = '';
document.getElementById("sb25").innerHTML = '';
document.getElementById("sb26").innerHTML = '';
document.getElementById("sb27").innerHTML = '';
document.getElementById("sb28").innerHTML = '';
document.getElementById("sb29").innerHTML = '';

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
	ranP();
	ranS(1);
} else if(dc == 2){
	ranP();
	ranP();
	ranS(-1);
} else if(dc == 3){
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 70){
		ranP();
		ranS(1);
	} else if (x <= 90 && x > 70){
		ranP();
		ranS(1);
		sb6 = true;
	} else {
		ranP();
		ranP();
		ranS(+1);
		dc = 4; //Jeśli zabrany przez grupę
	}
}
	
//MŁODZIEŃCZOŚĆ-------------------------------------------------------------------------------
if(dc == 2 || dc == 4){ //losowanie dla złej młodzieńczości
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 60){
		ranP();
		ranSB('poz0neut');
		ranSB('poz0neut');
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 75){
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 95 && y > 75){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
		ranUf(0, 'c0l', 1);
		ranUf(0, 'c0l', 1);
	} else if(x <= 95 && x > 60){
		ranP();
		ranSB('neut0neg');
		ranSB('neut0neg');
		ranS(1);
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 60){
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 90 && y > 60){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
		ranUf(0, 'w', 1);
		ranUf(0, 'c0l', 1);
	} else {
		ranP();
		ranSB('poz0neut');
		ranSB('poz0neut');
		ranS(1);
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 85){
			ranUp(0, 4);
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 95 && y > 75){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
	}

if(dc == 2){
	u2 += 2;
	x = Math.floor((Math.random() * 1000) + 1);
	
	if(x <= 166){
		if(bg == 1){ //biedna rodzina
			y = Math.floor((Math.random() * 100) + 1);
			if(y <= 50){
				stat8 -= 1;
			} else {
				stat8 += 1;
			}
			stat4 -= 1;
			stat1 -= 1;
			y = Math.floor((Math.random() * 100) + 1);
			if(y <= 10 && sb5 == false && sb15 == false){
				sb23 = true;
			}
			p9 += 2;
		} else if(bg == 3){
			stat6 += 1;
			stat5 += 1;
			p3 -= 1;
		}
	}
	
	if(x <= 332 && x > 166){
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 50){
			stat8 -= 1;
		} else {
			stat8 += 1;
		}
		stat1 -= 1;
		stat7 += 1;
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 10){
			ranSB('negatywny');
		}
		p9 += 1;
	}

	if(x <= 498 && x > 332){
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 50){
			stat8 -= 1;
		} else {
			stat8 += 1;
		}
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 30 && sb4 == false && sb14 == false){
			sb22 = true;
		}
		p8 -= 1;
	}
	
	if(x <= 664 && x > 498){
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 50){
			stat8 -= 2;
		} else {
			stat8 += 2;
		}
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 25 && sb26){
			sb27 = true;
		} else if(y <= 50 && y > 25 && sb4 == false && sb14 == false){
			sb22 = true;
		}
		p1 += 1;
		p9 += 1;
		y = Math.floor((Math.random() * 99) + 1);
		if(y <= 33){
			c4 += 3;
			u3 += 1;
			dor = 1;
			p5 += 1;
			p11 += 1;
		} else if(y <= 66 && y > 33){
			stat1 -= 2;
			stat4 -= 1;
			p11 += 1;
			p9 += 1;
		} else {
			u3 += 1;
			stat3 += 2;
			stat5 += 1;
		}
	}
	
	if(x <= 830 && x > 664){
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 50){
			stat8 -= 2;
		} else {
			stat8 += 2;
		}
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 30 && sb4 == false && sb14 == false){
			sb22 = true;
		}
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 50){
			u7 += 2;
		}
	}
	
	if(x > 830){
		stat7 -= 2;
		if(bg == 3){
			stat5 += 1;
			stat6 += 1;
		}
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 75 && sb27 == false){
			sb26 = true;
		} else if(sb26 == false){
			sb27 = true;
		}
		p1 += 2;
	}
			
}
	
} else {
	x = Math.floor((Math.random() * 100) + 1);
	if(x <= 60){
		ranP();
		ranSB('neut0neg');
		ranSB('neut0neg');
		ranS(1);
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 20){
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 90 && y > 60){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
		ranUf(0, 'w', 1);
		ranUf(0, 'c0l', 1);
	} else if(x <= 90 && x > 20){
		ranP();
		ranSB('poz0neut');
		ranSB('poz0neut');
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 75){
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 95 && y > 75){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
		ranUf(0, 'c0l', 1);
		ranUf(0, 'c0l', 1);
	} else {
		ranP();
		ranSB('poz0neut');
		ranSB('poz0neut');
		ranS(1);
		ranS(1);
		y = Math.floor((Math.random() * 100) + 1);
		if(y <= 85){
			ranUp(0, 4);
			ranUp(0, 3);
			ranUp(0, 2);
			ranUp(0, 2);
		} else if(y <= 95 && y > 75){
			ranUp(0, 3);
			ranUp(0, 2);
		} else {
			ranUp(0, 3);
		}
	}
}
	
//Dorosłość-----------------------------------------------------------------------------

x = Math.floor((Math.random() * 100) + 1);
if(x <= 30){
	ranS(1);
	ranS(1);
	ranS(1);
} else if(x <= 80 && x > 30){
	ranS(1);
	ranS(1);
} else {
	ranS(1);
}

x = Math.floor((Math.random() * 100) + 1);
if(x <= 75){
	ranP();
	ranP();
} else {
	ranP();
}

x = Math.floor((Math.random() * 100) + 1);
if(x <= 75){
	ranSB('all');
}

ranUp(0, 1);
ranUp(0, 1);

x = Math.floor((Math.random() * 100) + 1);
if(x <= 30){
	ranUp(0, 1);
	ranUp(0, 1);
} else if(x <= 80 && x > 30){
	ranUp(0, 1);
}

ranUf(0, 'c0l0w', 1);

//ustalanie historii dorosłości (ostatni etap!)
x = Math.floor((Math.random() * 100) + 1);

if(x <= 2 && sb7 == false || dor == 1){
	u3 += 1;
	stat3 += 2;
	stat6 += 1;
	stat8 += 1;
	stat4 -= 1;
	p11 += 3;
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 70){
		uf10 += 2;
		uf14 += 2;
	} else if(y <= 90 && y > 70){
		uf10 += 3;
		uf14 += 3;
	} else {
		uf10 += 1;
		uf14 += 1;
	}
}

if(x <= 7 && x > 2){
	stat8 += 2;
	stat6 -= 1;
	stat1 += 1;
	stat2 += 1;
	ranUf(0, 'w', 2);
	y = Math.floor((Math.random() * 100) + 1);
	if(x <= 30 && sb7 == false && sb17 == false){
		sb25 = true;
	}
	p3 -= 2;
	p9 = 1;
}

if(x <= 17 && x > 7){ //Handlarz
	stat7 += 2;
	stat8 += 1;
	y = Math.floor((Math.random() * 100) + 1);
	if(x <= 20 && sb8 == false && sb18 == false){
		sb28 = true;
	}
	p7 += 2;
	p6 -= 1;
}

if(x <= 42 && x > 17){
	stat1 += 1;
	stat2 -= 1;
	ranUf(0, 'l', 2);
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 50){
		ranUf(0, 'l', 2);
	}
}

if(x <= 72 && x > 42){
	stat1 -= 1;
	stat2 += 1;
	ranUf(0, 'c', 2);
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 50){
		ranUf(0, 'c', 2);
	}
}

if(x <= 74 && x > 72){
	stat8 += 1;
	stat1 -= 1;
	stat7 -= 1;
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 25 && sb17 == false && sb25 == false){
		sb7 = true;
	} else if(y <= 50 && y > 25 && sb27 == false){
		sb26 = true;
	}
	p4 += 1;
	p11 -= 1;
}

if(x <= 78 && x > 74){
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 50){
		stat8 += 1;
	} else {
		stat8 -= 1;
	}
	stat7 -= 1;
	stat4 -= 1;
	p8 -= 2;
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 50){
		p1 += 3;
	} else {
		p1 -= 3;
	}
}

if(x <= 80 && x > 78){
	stat7 += 1;
	stat4 += 1;
	stat8 -= 1;
	y = Math.floor((Math.random() * 100) + 1);
	if(y <= 20 && sb8 == false && sb18 == false){
		sb28 = true;
	}
	p13 -= 1;
}

if(x <= 85 && x > 80){
	stat1 -= 3;
	stat4 -= 3;
	stat8 -= 1;
	stat5 -= 1;
	stat6 -= 1;
	stat7 -= 1;
}

if(x <= 95 && x > 90){
	stat5 += 2;
	stat6 += 1;
	stat2 -= 2;
	stat7 += 1;
	stat1 -= 1;
	p6 += 2;
}

if(x <= 100 && x > 95){
	stat5 += 1;
	stat7 += 2;
	stat2 -= 1;
	stat1 -= 1;
	p13 -= 1;
}


document.getElementById("st1.1").innerHTML = stat1;
document.getElementById("st1.2").innerHTML = stat2;
document.getElementById("st1.3").innerHTML = stat3;
document.getElementById("st1.4").innerHTML = stat4;
document.getElementById("st1.5").innerHTML = stat5;
document.getElementById("st1.6").innerHTML = stat6;
document.getElementById("st1.7").innerHTML = stat7;
document.getElementById("st1.8").innerHTML = stat8;
document.getElementById("u2").innerHTML = u2;
document.getElementById("u3").innerHTML = u3;
document.getElementById("u4").innerHTML = u4;
document.getElementById("u5").innerHTML = u5;
document.getElementById("u6").innerHTML = u6;
document.getElementById("u7").innerHTML = u7;
document.getElementById("u8").innerHTML = u8;
document.getElementById("u9").innerHTML = u9;
document.getElementById("u10").innerHTML = u10;
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
document.getElementById("uf1").innerHTML = uf1;
document.getElementById("uf2").innerHTML = uf2;
document.getElementById("uf3").innerHTML = uf3;
document.getElementById("uf4").innerHTML = uf4;
document.getElementById("uf5").innerHTML = uf5;
document.getElementById("uf6").innerHTML = uf6;
document.getElementById("uf7").innerHTML = uf7;
document.getElementById("uf8").innerHTML = uf8;
document.getElementById("uf9").innerHTML = uf9;
document.getElementById("uf10").innerHTML = uf10;
document.getElementById("uf11").innerHTML = uf11;
document.getElementById("uf12").innerHTML = uf12;
document.getElementById("uf13").innerHTML = uf13;
document.getElementById("uf14").innerHTML = uf14;
document.getElementById("c1").innerHTML = c1 + stat7 + stat4 - p9 - p13;
document.getElementById("c2").innerHTML = c2 + stat6 + stat1 + p2 + p12;
document.getElementById("c3").innerHTML = c3 + stat2 + stat8 + p5 + p10;
document.getElementById("c4").innerHTML = c4 + stat5 + stat3 - p8 + p11;

if(sb1 == true){
	document.getElementById("sb1").innerHTML = 'Jest optymistą; ';
} if(sb2 == true){
	document.getElementById("sb2").innerHTML = 'Twierdzi, że ludzie powinni mieć wybór czy chcą wierzyć czy nie; ';
} if(sb3 == true){
	document.getElementById("sb3").innerHTML = 'Ma nadzieję, że Utopia powstanie; ';
} if(sb4 == true){
	document.getElementById("sb4").innerHTML = 'Mówi, że sprawiedliwość istnieje; ';
} if(sb5 == true){
	document.getElementById("sb5").innerHTML = 'Wierzy, że moralność jest najważniejsza podczas osądzania kogoś; ';
} if(sb6 == true){
	document.getElementById("sb6").innerHTML = 'Jest ksenofilem; ';
} if(sb7 == true){
	document.getElementById("sb7").innerHTML = 'Jest pacyfistą; ';
} if(sb8 == true){
	document.getElementById("sb8").innerHTML = 'Uważa, że powinno żyć się skromnie; ';
} if(sb9 == true){
	document.getElementById("sb9").innerHTML = 'Troszczy się o ekologię; ';
} if(sb10 == true){
	document.getElementById("sb10").innerHTML = 'Jest realistą; ';
} if(sb11 == true){
	document.getElementById("sb11").innerHTML = 'Nie zaprzecza istnieniu bogów, ale też ich nie potwierdza; ';
} if(sb12 == true){
	document.getElementById("sb12").innerHTML = 'Nie wierzy ani w Utopię, ani w Dystopię; ';
} if(sb13 == true){
	document.getElementById("sb13").innerHTML = 'Jest polityczny; ';
} if(sb14 == true){
	document.getElementById("sb14").innerHTML = 'Wierzy, że sprawiedliwość i niesprawiedliwość są w równych ilościach; ';
} if(sb15 == true){
	document.getElementById("sb15").innerHTML = 'Jego zdaniem, logika jest ważniejsza od moralności przy osądzaniu kogoś; ';
} if(sb16 == true){
	document.getElementById("sb16").innerHTML = 'Nie jest ani ksenofobem, ani ksenofilem; ';
} if(sb17 == true){
	document.getElementById("sb17").innerHTML = 'Twierdzi, że kraj nie powinien rezygnować ze środków obrony, ani ich szczególnie zwiększać; ';
} if(sb18 == true){
	document.getElementById("sb18").innerHTML = 'Żyje umiarkowanie; ';
} if(sb19 == true){
	document.getElementById("sb19").innerHTML = 'Jest pesymistą; ';
} if(sb20 == true){
	document.getElementById("sb20").innerHTML = 'Jest fanatykiem religijnym; ';
} if(sb21 == true){
	document.getElementById("sb21").innerHTML = 'Uważa, że świat zmierza ku Dystopii; ';
} if(sb22 == true){
	document.getElementById("sb22").innerHTML = 'Nie wierzy w sprawiedliwość; ';
} if(sb23 == true){
	document.getElementById("sb23").innerHTML = 'Uważa, że ten kto ma siłę, ten ma władzę; ';
} if(sb24 == true){
	document.getElementById("sb24").innerHTML = 'Jest ksenofobem; ';
} if(sb25 == true){
	document.getElementById("sb25").innerHTML = 'Wierzy, że zbrojenie się jest najlepszym pomysłem; ';
} if(sb26 == true){
	document.getElementById("sb26").innerHTML = 'Posłusznie wykonuje wszelkie polecenia; ';
} if(sb27 == true){
	document.getElementById("sb27").innerHTML = 'Nie chce nikomu podlegać; ';
} if(sb28 == true){
	document.getElementById("sb28").innerHTML = 'Jest chciwy; ';
} if(sb29 == true){
	document.getElementById("sb29").innerHTML = 'Jego zdaniem, industrialność jest dobra; ';
}
}
	
	
function ranP(){
		x = Math.floor((Math.random() * 13) + 1);
		if(x == 1){
			p1 += 1;
			p1u = true;
			zm = zm + 1;
		} else if(x == 2){
			p2 += 1;
			p2u = true;
			zm = zm + 1;
		} else if(x == 3){
			p3 += 1;
			p3u = true;
			zm = zm + 1;
		} else if(x == 4){
			p4 += 1;
			p4u = true;
			zm = zm + 1;
		} else if(x == 5){
			p5 += 1;
			p5u = true;
			zm = zm + 1;
		} else if(x == 6){
			p6 += 1;
			p6u = true;
			zm = zm + 1;
		} else if(x == 7){
			p7 += 1;
			p7u = true;
			zm = zm + 1;
		} else if(x == 8){
			p8 += 1;
			p8u = true;
			zm = zm + 1;
		} else if(x == 9){
			p9 += 1;
			p9u = true;
			zm = zm + 1;
		} else if(x == 10){
			p10 += 1;
			p10u = true;
			zm = zm + 1;
		} else if(x == 11){
			p11 += 1;
			p11u = true;
			zm = zm + 1;
		} else if(x == 12){
			p12 += 1;
			p12u = true;
			zm = zm + 1;
		} else if(x == 13){
			p13 += 1;
			p13u = true;
			zm = zm + 1;
		} else if(x == 14){
			p1 -= 1;
			p1u = true;
			zm = zm + 1;
		} else if(x == 15){
			p2 -= 1;
			p2u = true;
			zm = zm + 1;
		} else if(x == 16){
			p3 -= 1;
			p3u = true;
			zm = zm + 1;
		} else if(x == 17){
			p4 -= 1;
			p4u = true;
			zm = zm + 1;
		} else if(x == 18){
			p5 -= 1;
			p5u = true;
			zm = zm + 1;
		} else if(x == 19){
			p6 -= 1;
			p6u = true;
			zm = zm + 1;
		} else if(x == 20){
			p7 -= 1;
			p7u = true;
			zm = zm + 1;
		} else if(x == 21){
			p8 -= 1;
			p8u = true;
			zm = zm + 1;
		} else if(x == 22){
			p9 -= 1;
			p9u = true;
			zm = zm + 1;
		} else if(x == 23){
			p10 -= 1;
			p10u = true;
			zm = zm + 1;
		} else if(x == 24){
			p11 -= 1;
			p11u = true;
			zm = zm + 1;
		} else if(x == 25){
			p12 -= 1;
			p12u = true;
			zm = zm + 1;
		} else if(x == 26){
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
} else if(x == 4){
	stat4 += num;
} else if(x == 5){
	stat5 += num;
} else if(x == 6){
	stat6 += num;
} else if(x == 7){
	stat7 += num;
} else if(x == 8){
	stat8 += num;
}
}

function ranUp(blokada, wzrost) {
while(wzrost > 0){	//ustalanie umiejętności psychicznych. blokada aby uniemożliwić uzyskiwanie nowych umiejętności
x = Math.floor((Math.random() * 9) + 1);
if(x == 1 && u2 >= blokada){
	u2 += 1;
	wzrost =- 1;
} else if(x == 2 && u3 >= blokada){
	u3 += 1;
	wzrost =- 1;
} else if(x == 3 && u4 >= blokada){
	u4 += 1;
	wzrost =- 1;
} else if(x == 4 && u5 >= blokada && stat6 > 6){
	u5 += 1;
	wzrost =- 1;
} else if(x == 5 && u6 >= blokada && stat6 > 6){
	u6 += 1;
	wzrost =- 1;
} else if(x == 6 && u7 >= blokada){
	u7 += 1;
	wzrost =- 1;
} else if(x == 7 && u8 >= blokada && stat8 > 6){
	u8 += 1;
	wzrost =- 1;
} else if(x == 8 && u9 >= blokada && stat6 > 5){
	u9 += 1;
	wzrost =- 1;
} else if(x == 9 && u10 >= blokada){
	u10 += 1;
	wzrost =- 1;
}
}
}

function ranUf(blokada, rodzaj, wzrost) { //ustalanie umiejętności fizycznych.
while(wzrost > 0){
if(rodzaj == 'c'){
	x = Math.floor((Math.random() * 5) + 1);
} else if(rodzaj == 'l'){
	x = Math.floor((Math.random() * 5) + 6);
} else if(rodzaj == 'w'){
	x = Math.floor((Math.random() * 4) + 11);
} else if(rodzaj == 'c0l'){
	x = Math.floor((Math.random() * 10) + 1);
} else if(rodzaj == 'c0l0w'){
	x = Math.floor((Math.random() * 14) + 1);
}
if(x == 1 && uf1 > blokada){
	uf1 += 1;
	wzrost =- 1;
} else if(x == 2 && uf2 >= blokada){
	uf2 += 1;
	wzrost =- 1;
} else if(x == 3 && uf3 >= blokada){
	uf3 += 1;
	wzrost =- 1;
} else if(x == 4 && uf4 >= blokada){
	uf4 += 1;
	wzrost =- 1;
} else if(x == 5 && uf5 >= blokada){
	uf5 += 1;
	wzrost =- 1;
} else if(x == 6 && uf6 >= blokada){
	uf6 += 1;
	wzrost =- 1;
} else if(x == 7 && uf7 >= blokada){
	uf7 += 1;
	wzrost =- 1;
} else if(x == 8 && uf8 >= blokada){
	uf8 += 1;
	wzrost =- 1;
} else if(x == 9 && uf9 >= blokada){
	uf9 += 1;
	wzrost =- 1;
} else if(x == 10 && uf10 >= blokada){
	uf10 += 1;
	wzrost =- 1;
} else if(x == 11 && uf11 >= blokada){
	uf11 += 1;
	wzrost =- 1;
} else if(x == 12 && uf12 >= blokada){
	uf12 += 1;
	wzrost =- 1;
} else if(x == 13 && uf13 >= blokada){
	uf13 += 1;
	wzrost =- 1;
} else if(x == 14 && uf14 >= blokada){
	uf14 += 1;
	wzrost =- 1;
}
}
}

function ranSB(rodzaj){ //Losowanie sposobu bycia
	if(rodzaj == 'pozytywny'){
		x = Math.floor((Math.random() * 9) + 1);
	} else if(rodzaj == 'neutralny'){
		x = Math.floor((Math.random() * 9) + 10);
	} else if(rodzaj == 'negatywny'){
		x = Math.floor((Math.random() * 10) + 19);
	} else if(rodzaj == 'poz0neut'){
		x = Math.floor((Math.random() * 18) + 1);
	} else if(rodzaj == 'poz0neg'){
		while(x >= 10 || x <= 18){
			x = Math.floor((Math.random() * 29) + 1);
		}
	} else if(rodzaj == 'neut0neg'){
		x = Math.floor((Math.random() * 19) + 10);
	} else if(rodzaj == 'all'){
		x = Math.floor((Math.random() * 29) + 1);
	} else {
		x = 50;
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