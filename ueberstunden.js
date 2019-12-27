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
    return parseFloat(gesamtsaldo);
}