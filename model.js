/* Hier werden alle Funktionen hinterlegt, die sich Daten holt aus der Umgebung */

/* Diese Funktion nimmt einen dezimalen Zeitraum in Stunden als float und rechnet diesen mit dem darinstehenden Array zusammen zu einer Dezimalstunden-Zahl*/
function ueberstunden(float_ueberstunden_oberflaeche) {

    /*  Hier kann man alle Ueberstunden eintragen, die von einzelnen Monaten sind
        Dabei gilt der Syntax "Zahl, Zahl, Zahl, Zahl, ...". Diese Liste ist unendlich lang erweiterbar. 
        Achtung! Das amerikanisches Zahlenformat gilt.  */

    var ueberstunden = [
        /*Jan*/	0,
        /*Feb*/	0,
        /*Mär*/	0,
        /*Apr*/	0,
        /*Mai*/	0,
        /*Jun*/	0,
        /*Jul*/	0,
        /*Aug*/	0,
        /*Sep*/	0,
        /*Okt*/	0,
        /*Nov*/	0,
        /*Dez*/	0
    ];

    var gesamtsaldo = 0;
    /* Zusammenrechnen des Arrays */
    for (var i = 0; i < ueberstunden.length; i++) {
        gesamtsaldo += ueberstunden[i];
    }
    gesamtsaldo += float_ueberstunden_oberflaeche;
    return gesamtsaldo;
}

/* normalisiert den Uhrzeit-Input-String in Form von HH:MM von HTML zu Millisekunden seit 1.1.1970 */
function arbeitsbeginn(str_arbeitsbeginn_Oberflaeche) {
    stunden = str_arbeitsbeginn_Oberflaeche.substring(0, 2);
    minuten = str_arbeitsbeginn_Oberflaeche.substring(3);

    /* Wandle in Minuten um und dann in Sekunden und Millisekunden */
    int_arbeitsbeginn_in_MS = (stunden * 60 + minuten) * 60 * 1000;

    /* Wandle aktuelles Datum in Millisekunden um */
    date_today = Date.parse(date_heute_ddmmjjjj());

    /* rechne heutiges Datum mit Uhrzeit zusammen */
    int_arbeitsbeginn_in_MS += date_today;

    return int_arbeitsbeginn_in_MS;
}

/* gibt die Reguläre Arbeitszeit in ms aus */
function int_arbeitszeit_in_MS() {
    /* 8 Stunden Arbeit und 6 Minuten Wegezeit (0.10 Stunden)*/
    var arbeitszeit = 8.10;
    return decH_zu_intMS(arbeitszeit);
}