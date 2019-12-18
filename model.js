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

function arbeitsbeginn(str_arbeitsbeginn_Oberflaeche) {
    str_arbeitsbeginn_Oberflaeche
}