/* Hier wird die Kontroll-Logik hinterlegt */

/* Funktion wird geladen und kümmert sich um das Initiieren aller Funktionen */
function onloadfunction() {
    /* lade alle set-Funktionen*/
    felder_aktualisieren();

    /* Zyklische Aufrufe */
    window.setInterval(set_bis_jetzt, 1000);
    window.setInterval(set_uhren, 1000);

    /* Wenn Felder geändert werden, aktualisiere sie */
    document.getElementById("start").addEventListener("oninput", felder_aktualisieren);
    document.getElementById("ueberstunden").addEventListener("oninput", felder_aktualisieren);
    document.getElementById("fruehstueckspause").addEventListener("oninput", felder_aktualisieren);
    document.getElementById("mittagspause").addEventListener("oninput", felder_aktualisieren);
}

function felder_aktualisieren() {
    /* lade alle set-Funktionen*/
    set_regulaere_Arbeitszeit();
    set_regulaeres_Ende();
    set_fruehestes_Ende();
    set_bis_jetzt();
    set_ueberstunden();
    set_uhren();
}