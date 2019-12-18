/* Nimmt Dezimalen Wert in Stunde und wandelt ihn in Integer in Millisekunden um */
function decH_zu_intMS(decimal) {
    // decimal Hours x 60/minutes x 60/seconds x 1000/milliseconds = milliseconds
    integerMS = decimal * 60 * 60 * 1000;
    integerMS = parseInt(integerMS);
    return integerMS;
}

function uhrzeit() {
	var jetzt = new Date();
	h1 = jetzt.getHours();
	h2 = h1 - 7;
	m = jetzt.getMinutes();
	s = jetzt.getSeconds();
	h1 = fuehrendeNull(h1);
	h2 = fuehrendeNull(h2);
	m = fuehrendeNull(m);
	s = fuehrendeNull(s);
	document.getElementById('uhr1').innerHTML = 'Uhrzeit Deutschland: ' + h1 + ':' + m + ':' + s;
	document.getElementById('uhr2').innerHTML = 'Uhrzeit Texas: ' + h2 + ':' + m + ':' + s;
	berechnung();
	setTimeout(uhrzeit, 50);
}

function fuehrendeNull(zahl) {
	zahl = (zahl < 10 ? '0' : '') + zahl;
	return zahl;
}

function minutesToHHMM(zahl) {
	var minus = false;
	if (zahl < 0) {
		minus = true;
		zahl = 0 - Number(zahl);
	}
	zahl = fuehrendeNull(Math.floor(zahl / 60)) + ":" + fuehrendeNull(Math.floor(zahl - (Math.floor(zahl / 60) * 60)));
	if (minus == true) {
		zahl = "-" + zahl;
	}
	return zahl;
}

function berechnung() {
	start = document.getElementById('start').value;
	start = start.split(":");
	startMinuten = Number(start[1]) + Number(start[0] * 60)
	ueberstunden = (Number(document.getElementById('ueberstunden').value) * 60) + (gesamtsaldo * 60);
	fruehstueckspause = document.getElementById('fruehstueckspause').checked;
	mittagspause = document.getElementById('mittagspause').checked;
	zusatzzeit = 0;
	var jetzt = new Date();
	jetztMinuten = Number(jetzt.getMinutes()) + Number(jetzt.getHours()) * 60;


	if (fruehstueckspause === true) {
		zusatzzeit = zusatzzeit + 15;
	}
	if (mittagspause === true) {
		zusatzzeit = zusatzzeit + 30;
	}
	zusatzzeit = zusatzzeit + 6;
	ende1 = startMinuten + zusatzzeit + (8 * 60);
	ende1diff = ende1 - jetztMinuten;
	ende2 = startMinuten + zusatzzeit + (8 * 60) - ueberstunden;
	ende2diff = ende2 - jetztMinuten;
	bisJetzt = jetztMinuten - startMinuten - zusatzzeit;
	arbeitszeit = zusatzzeit + (8 * 60);

	document.getElementById('ausgabe1').innerHTML = minutesToHHMM(ende1);
	document.getElementById('ausgabe2').innerHTML = "&nbsp;(noch " + minutesToHHMM(ende1diff) + " h)";
	document.getElementById('ausgabe3').innerHTML = minutesToHHMM(ende2)
	document.getElementById('ausgabe4').innerHTML = "&nbsp;(noch " + minutesToHHMM(ende2diff) + " h)";
	document.getElementById('ausgabe5').innerHTML = minutesToHHMM(bisJetzt);
	document.getElementById('ausgabe6').innerHTML = minutesToHHMM(arbeitszeit);
	document.getElementById('ausgabe7').innerHTML = minutesToHHMM(ueberstunden) + " (" + (ueberstunden / 60).toFixed(2) + ")";
}

function loadbegin() {
	if (document.getElementById('start').value == "") {
		var jetzt = new Date();
		jetztMinuten = Number(jetzt.getMinutes()) + Number(jetzt.getHours()) * 60;
		document.getElementById('start').value = minutesToHHMM(jetztMinuten);
	}
}