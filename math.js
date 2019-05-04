document.write('<div class="gray">Math in JS</div>');
document.write(0.1 * 5); document.write("<br/>");
document.write(0.15 * 3); document.write("<br/>");
document.write(0.1 + 0.2); document.write("<br/>");
// funkcje matematyczne w JS: Math, pow = power/potęga/potęgowanie; podstawa,wykładnik
document.write('<div class="gray">Maximum supported int</div>');
document.write(Math.pow(2,53)); document.write("<br/>"); // maksymalny int obslugiwany poprawnie w JS
document.write(Math.pow(2,53)+1); document.write("<br/>");
document.write(Math.pow(2,53)+2); document.write("<br/>");
document.write(Math.pow(2,53)*2); document.write("<br/>");

document.write('<div class="gray">Simple if 0.1 + 0.2 == 0.3</div>');
if (0.1 + 0.2 == 0.3) document.write("true<br/>");
else document.write("false<br/>");

// zaokraglanie liczb - funkcja round [zaokraglanie do liczb calkowitych]
document.write('<div class="gray">Math.round() function</div>');
var x;
x = Math.round((0.1 + 0.2) * 10) / 10;
document.write(x+"<br/>");

x = Math.round((0.15 * 3) * 100) / 100;
document.write(x+"<br/>");

// zaokraglanie liczb - funkcja toFixed [zaokraglanie do zadanej ilosci miejsc po przecinku, rezultat = ciag znaków (nie liczba) ]
document.write('<div class="gray">.toFixed() function</div>');
x = 0.15 * 3;
x = x.toFixed(2);
document.write(x+"<br/>");

// test porównawczy zaokrągleń
document.write('<div class="gray">Rounding test - Math.round()</div>');
x = 1.005; // prawidłowo: 1.01
x = Math.round(x*100) / 100;
document.write(x+"<br/>");

document.write('<div class="gray">Rounding test - .toFixed()</div>');
x = 1.005; // prawidłowo: 1.01
x = x.toFixed(2);
document.write(x+"<br/>");

// zmieniamy funkcję round()!
Number.prototype.round = function(miejsc)
{
    // + na początku to konwersja ze string na liczbę
    // this - wskazuje obiekt na rzecz ktorego wywolano metodę: x.round(2) - this = x
    // e - exponent = wykladnik; e+ zwiekszenie (przesuniecie przecinka w prawo); e- zmniejszenie (przesuwanie przecinka w lewo)
    return +( Math.round ( this + "e+" + miejsc ) + "e-" + miejsc );
}

document.write('<div class="gray">Rounding test - .round() prototype</div>');
x = 1.005; // prawidłowo: 1.01
x = x.round(2);
document.write(x+"<br/>");

document.write('<div class="gray">Rounding test - Math.round() x = 1.5</div>');
x = 1.5; // prawidłowo: 1.01
x = Math.round(x);
document.write(x+"<br/>");

document.write('<div class="gray">Different types of rounding</div>');
var pln = 1000;
document.write("Wpłata: "+pln+" PLN <br/>");
// przewalutowanie
var usd = pln / 4.00835701;
document.write("Saldo: "+usd+" USD <br/>");
// Math.floor()
document.write('<div class="gray">Math.floor() function</div>');
usd = Math.floor(usd * 100) / 100;
document.write("Saldo floor(): "+usd+" USD <br/>");
// Zakupy
var zakupy = 23.99;
document.write("Zakup: "+zakupy+" USD <br/>");
var prowizja = 0.02 * zakupy;
document.write("Prowizja: "+prowizja+" USD <br/>");
// Math.ceil()
document.write('<div class="gray">Math.ceil() function</div>');
prowizja = Math.ceil(prowizja * 100) / 100;
document.write("Prowizja ceil(): "+prowizja+" USD <br/>");
// po zakupach
usd = usd - zakupy - prowizja;
document.write("Saldo po zakupach: "+usd+" USD <br/>");
// Math.trunc()
document.write('<div class="gray">Math.trunc() function</div>');
usd = 225.99;
document.write("Saldo: "+usd+" USD <br/>");
usd = Math.trunc(usd);
document.write("Saldo trunc(): "+usd+" USD <br/>");