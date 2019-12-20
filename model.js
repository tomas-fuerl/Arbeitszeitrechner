/* Hier werden alle Funktionen hinterlegt, die sich Daten holen aus der Umgebung */

/* gibt den Arbeitsbeginn in date.js-Format aus anhand vom Input-Feld "start"*/
function datetime_Arbeitsbeginn_ausgeben() {
    var uhrzeit = document.getElementById("start").value;
    return Date.today().at(uhrzeit);
}

/* nimmt den Wert aus dem Feld "ueberstunden" als float und rechnet diesen mit dem darinstehenden Array zusammen (Ausgabe als Dezimalstunde)*/
function float_ueberstunden() {

    /*  Hier kann man alle Ueberstunden eintragen, die von einzelnen Monaten sind
        Dabei gilt der Syntax "Zahl, Zahl, Zahl, Zahl, ...". Diese Liste ist unendlich lang erweiterbar. 
        Achtung! Das amerikanisches Zahlenformat gilt (Punkt statt Komma). */
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

    /* Zusammenrechnen des Arrays */
    var gesamtsaldo = 0;
    for (var i = 0; i < ueberstunden.length; i++) {
        gesamtsaldo += ueberstunden[i];
    }
    gesamtsaldo += document.getElementById("ueberstunden").value;
    return gesamtsaldo;
}
/* gibt die Reguläre Arbeitszeit in Dezimalstunden aus */
function float_Arbeitszeit_decH() {
    /* 8 Stunden Arbeit und 6 Minuten Wegezeit (0.10 Stunden)*/
    var arbeitszeit = 8.10;
    return arbeitszeit;
}

/* gibt aktuellen Zeitpunkt aus */
function datetime_timestamp() {
    return Date();
}

/* gibt Pausenzeiten anhand von checkboxen in Dezimalstunden zurück*/
function float_pausen_decH() {
    var float_pausenzeit = 0;
    /* Wenn Frühstückspausenauswahlfeld angehakt ist += 15 min */
    if (document.getElementById("fruehstueckspause").checked) {
        float_pausenzeit += 0.25;
    }
    /* Wenn Mittagspausenauswahlfeld angehakt ist += 30 min */
    if (document.getElementById("mittagspause").checked) {
        float_pausenzeit += 0.5;
    }
    return float_pausenzeit;
}

/* gibt Zeitraum seit Arbeitsbeginn in Dezimalstunden aus; berücksichtigt Pausenseit */
function float_bis_jetzt_decH() {
    var bis_jetzt = datetime_Arbeitsbeginn_ausgeben().getElapsed();
    /* Wandle in decH um */
    bis_jetzt = bis_jetzt/ (1000*60*60);
    bis_jetzt -= float_pausen_decH();
    return bis_jetzt;
}

/* gibt einen Zeitpunkt in Texas-Zeit aus (-7 Stunden) */
function datetime_texastime(datetime_deutschlandtime) {
    return datetime_deutschlandtime.add(-7).hours();
}

/* gibt Regulären Endzeitpunkt aus (Arbeitsbeginn + Pausen + Arbeitszeit) */
function datetime_regulaeres_Ende() {
    return datetime_Arbeitsbeginn_ausgeben().add(float_pausen_decH()+float_Arbeitszeit_decH()).hours();;
}

/* gibt den Frühesten Endzeitpunkt aus (Regulärer Endzeitpunkt - Überstunden) */
function int_fruehestes_Ende() {
    return  datetime_regulaeres_Ende().add(-float_ueberstunden()).hours();
}