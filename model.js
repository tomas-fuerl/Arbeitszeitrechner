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

function float_ueberstunden() {
  var gesamtsaldo = 0;
  gesamtsaldo += float_get_jahresueberstunden();
  gesamtsaldo += float_get_ueberstunden();
  return parseFloat(gesamtsaldo);
}

/* gibt die Reguläre Arbeitszeit in Dezimalstunden aus */
function float_Arbeitszeit_decH() {
  /* 8 Stunden Arbeit und 6 Minuten Wegezeit (0.10 Stunden)*/
  var arbeitszeit = parseFloat(float_get_regelarbeitszeit());
  arbeitszeit += parseFloat(float_get_standardabzuege()) / 60;
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
    float_pausenzeit += float_get_pausenlaenge1() / 60;
  }
  /* Wenn Mittagspausenauswahlfeld angehakt ist += 30 min */
  if (document.getElementById("mittagspause").checked) {
    float_pausenzeit += float_get_pausenlaenge2() / 60;
  }
  return float_pausenzeit;
}

/* gibt Zeitraum seit Arbeitsbeginn in Dezimalstunden aus; berücksichtigt Pausenseit */
function float_bis_jetzt_decH() {
  var bis_jetzt = datetime_Arbeitsbeginn().getElapsed();
  /* Wandle in decH um */
  bis_jetzt = bis_jetzt / (1000 * 60 * 60);
  bis_jetzt -= float_pausen_decH();
  return bis_jetzt;
}

/* gibt Regulären Endzeitpunkt aus (Arbeitsbeginn + Pausen + Arbeitszeit) */
function datetime_regulaeres_Ende() {
  return datetime_Arbeitsbeginn()
    .add(float_pausen_decH() + float_Arbeitszeit_decH())
    .hours();
}

/* gibt den Frühesten Endzeitpunkt aus (Regulärer Endzeitpunkt - Überstunden) */
function int_fruehestes_Ende() {
  return datetime_regulaeres_Ende().add(-float_ueberstunden()).hours();
}

function float_get_jahresueberstunden() {
  var jahresueberstunden = localStorage.getItem("jahresueberstunden");
  if (jahresueberstunden === null || jahresueberstunden == "NaN") {
    jahresueberstunden = 0;
  }
  return parseFloat(jahresueberstunden);
}

function float_get_ueberstunden() {
  var ueberstunden = document.getElementById("ueberstunden").value;
  if (ueberstunden === null || ueberstunden == "") {
    ueberstunden = 0;
  }
  return parseFloat(ueberstunden);
}

function float_get_pausenlaenge1() {
  var pausenlaenge1 = localStorage.getItem("pausenlaenge1");
  if (pausenlaenge1 === null || pausenlaenge1 == "NaN") {
    pausenlaenge1 = 0;
  }
  return parseFloat(pausenlaenge1);
}

function float_get_pausenlaenge2() {
  var pausenlaenge2 = localStorage.getItem("pausenlaenge2");
  if (pausenlaenge2 === null || pausenlaenge2 == "NaN") {
    pausenlaenge2 = 0;
  }
  return parseFloat(pausenlaenge2);
}

function float_get_standardabzuege() {
  var standardabzuege = localStorage.getItem("standardabzuege");
  if (standardabzuege === null || standardabzuege == "NaN") {
    standardabzuege = 0;
  }
  return parseFloat(standardabzuege);
}

function float_get_regelarbeitszeit() {
  var regelarbeitszeit = localStorage.getItem("regelarbeitszeit");
  if (regelarbeitszeit === null || regelarbeitszeit == "NaN") {
    regelarbeitszeit = 8;
  }
  return regelarbeitszeit;
}

function bool_set_einstellungen() {
  if (document.getElementById("jahresueberstunden").value != "") {
    var jahresueberstunden = document.getElementById("jahresueberstunden")
      .value;
  }
  if (document.getElementById("pausenlaenge1").value != "") {
    var pausenlaenge1 = document.getElementById("pausenlaenge1").value;
  }
  if (document.getElementById("pausenlaenge2").value != "") {
    var pausenlaenge2 = document.getElementById("pausenlaenge2").value;
  }
  if (document.getElementById("standardabzuege").value != "") {
    var standardabzuege = document.getElementById("standardabzuege").value;
  }
  if (document.getElementById("regelarbeitszeit").value != "") {
    var regelarbeitszeit = document.getElementById("regelarbeitszeit").value;
  }
  localStorage.setItem("jahresueberstunden", parseFloat(jahresueberstunden));
  localStorage.setItem("pausenlaenge1", parseFloat(pausenlaenge1));
  localStorage.setItem("pausenlaenge2", parseFloat(pausenlaenge2));
  localStorage.setItem("standardabzuege", parseFloat(standardabzuege));
  localStorage.setItem("regelarbeitszeit", parseFloat(regelarbeitszeit));
  einstellungen_setzen();
  return true;
}
