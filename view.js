/* Hier werden alle Funktionen zur Anzeige hinterlegt */

/* gibt Reguläre Arbeitszeit im Feld mit id "regulaere_Arbeitszeit" im Format "HH:mm h" aus und dahinter in Dezimalstunden */
function set_regulaere_Arbeitszeit() {
	var float_regulaere_Arbeitszeit = float_Arbeitszeit_decH() + float_pausen_decH();
	var string_regulaere_Arbeitszeit = Date.today().add(float_regulaere_Arbeitszeit).hours().toString("HH:mm") + " h (" + float_regulaere_Arbeitszeit.toFixed(2) + ")";
	document.getElementById("regulaere_Arbeitszeit").innerHTML = string_regulaere_Arbeitszeit;
	return 0;
}

/* gibt Regulären Endzeitpunkt im Feld mit der ID "regulaeres_Ende" im Format "HH:mm Uhr" aus */
function set_regulaeres_Ende() {
	document.getElementById("regulaeres_Ende").innerHTML = datetime_regulaeres_Ende().toString("HH:mm") + " Uhr";
	return 0;
}

/* gibt Frühesten Endzeitpunkt im Feld mit der ID "fuehestes_Ende" im Format "HH:mm" aus */
function set_fruehestes_Ende() {
	document.getElementById("fuehestes_Ende").innerHTML = int_fruehestes_Ende().toString("HH:mm") + " Uhr";
	return 0;
}

/* gibt den Zeitraum bis Jetzt seit Arbeitsbeginn aus im Feld mit der ID "bis_jetzt" im Format "HH:mm h" und dahinter in Dezimalstunden */
function set_bis_jetzt() {
	var float_bis_jetzt = float_bis_jetzt_decH();
	var string_bis_jetzt = Date.today().add(float_bis_jetzt).hours().toString("HH:mm") + " h (" + float_bis_jetzt.toFixed(2) + ")";
	document.getElementById("bis_jetzt").innerHTML = string_bis_jetzt;
	return 0;
}

/* gibt die gesamten Überstunden aus im Feld mit der ID "ueberstunden_gesamt" im Format "HH:mm h" und dahinter in Dezimalstunden */
function set_ueberstunden() {
	var float_ueberstunden_gesamt = float_ueberstunden();
	var string_ueberstunden_gesamt = Date.today().add(float_ueberstunden_gesamt).hours().toString("HH:mm") + " h (" + float_ueberstunden_gesamt.toFixed(2) + ")";
	document.getElementById("ueberstunden_gesamt").innerHTML = string_ueberstunden_gesamt;
	return 0;
}

/* gibt die Uhrzeiten für Deutschland und Texas in den Feldern "uhr1" und "uhr2" aus im Format "HH:mm" */
function set_uhren() {
	document.getElementById("uhr1").innerHTML = "Uhrzeit Deutschland: " + new Date().toLocaleTimeString();
	document.getElementById("uhr2").innerHTML = "Uhrzeit Texas: " + new Date().add(-7).hours().toLocaleTimeString();
	return 0;
}