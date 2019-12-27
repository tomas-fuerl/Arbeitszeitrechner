/* Hier werden alle Funktionen hinterlegt, die sich Daten holen aus der Umgebung */

/* gibt den Arbeitsbeginn in date.js-Format aus anhand vom Input-Feld "start"*/
function datetime_Arbeitsbeginn() {
    var uhrzeit = document.getElementById("start").value;
    /* Wenn Feld Leer ist, nehme 00:00 */
    if (uhrzeit === "") {
        return Date.today();
    } else {
        return Date.today().at(uhrzeit);
    }
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
    var bis_jetzt = datetime_Arbeitsbeginn().getElapsed();
    /* Wandle in decH um */
    bis_jetzt = bis_jetzt/ (1000*60*60);
    bis_jetzt -= float_pausen_decH();
    return bis_jetzt;
}

/* gibt Regulären Endzeitpunkt aus (Arbeitsbeginn + Pausen + Arbeitszeit) */
function datetime_regulaeres_Ende() {
    return datetime_Arbeitsbeginn().add(float_pausen_decH()+float_Arbeitszeit_decH()).hours();;
}

/* gibt den Frühesten Endzeitpunkt aus (Regulärer Endzeitpunkt - Überstunden) */
function int_fruehestes_Ende() {
    return  datetime_regulaeres_Ende().add(-float_ueberstunden()).hours();
}