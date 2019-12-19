/* Hier werden alle Funktionen zur Anzeige hinterlegt */

/* Wandelt einen Zeitpunkt von ms seit 1970 in eine Uhrzeit vom Format HH:MM (negative Zeiträume werden auch gehandelt)*/
function millisecondsToHHMM(int_milliseconds) {
	var minus = false;
    var ms_pro_tag = 24 /* Stunden */ * 60 /* Minuten */ * 60 /* Sekunden */ * 1000 /* Millisekunden */;
    
    /* Kürzt Tage ein */
	int_milliseconds %= ms_pro_tag; 

    /* merkt sich, Zahl negativ war und macht sie Positiv */
	if (int_milliseconds < 0) {
		minus = true;
		int_milliseconds = 0 - Number(int_milliseconds);
    }
    /* Wandeelt in Format HH:MM um */
	int_milliseconds = fuehrendeNull(Math.floor(int_milliseconds / (60 * 60 * 1000)) + ":" + fuehrendeNull(Math.floor(int_milliseconds - (Math.floor(int_milliseconds / (60 * 1000))))));
    /* fügt bei Bedarf ein Minus vorne an */
    if (minus == true) {
		int_milliseconds = "-" + int_milliseconds;
	}
	return int_milliseconds;
}

