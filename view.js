/* Hier werden alle Funktionen zur Anzeige hinterlegt */

/* gibt Reguläre Arbeitszeit im Feld mit id "regulaere_Arbeitszeit" im Format "HH:mm h" aus und dahinter in Dezimalstunden */
function set_regulaere_Arbeitszeit() {
	var float_regulaere_Arbeitszeit = float_Arbeitszeit_decH() + float_pausen_decH()
	var string_regulaere_Arbeitszeit = Date.today().add(float_regulaere_Arbeitszeit).hours().toString("HH:mm") + " h (" + float_regulaere_Arbeitszeit + ")";
	document.getElementById("regulaere_Arbeitszeit").innerHTML = string_regulaere_Arbeitszeit;
	return 0;
}

/* gibt Regulären Endzeitpunkt im Feld mit der ID "regulaeres_Ende" im Format "HH:mm Uhr" aus */
function set_regulaeres_Ende() {
	document.getElementById("regulaeres_Ende").innerHTML = datetime_regulaeres_Ende().toString("HH:mm") + " Uhr";
	return 0;
}
