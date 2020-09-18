/* Hier wird die Kontroll-Logik hinterlegt */

function felder_aktualisieren() {
  /* lade alle set-Funktionen*/
  set_regulaere_Arbeitszeit();
  set_regulaeres_Ende();
  set_fruehestes_Ende();
  set_bis_jetzt();
  set_ueberstunden();
  set_uhren();
}

function einstellungen_setzen() {
  set_jahresueberstunden();
  set_pausenlaenge1();
  set_pausenlaenge2();
  set_standardabzuege();
  set_regelarbeitszeit();
  felder_aktualisieren();
}

/* Funktion wird geladen und kümmert sich um das Initiieren aller Funktionen */
function onloadfunction() {
  /* lade alle set-Funktionen*/
  einstellungen_setzen();

  /* Zyklische Aufrufe */
  window.setInterval(set_bis_jetzt, 1000);
  window.setInterval(set_uhren, 1000);
}
