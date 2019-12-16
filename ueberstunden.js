// Hier kann man alle ueberstunden eintragen, die von einzelnen Monaten sind
// Dabei gilt der Syntax "Zahl, Zahl, Zahl, Zahl, ...". Diese Liste ist unendlich lang erweiterbar. 
// Die Nachkommastellen sind mit einem Punkt zu kennzeichnen, da das amerikanisch Zahlenformat gilt. 
var ueberstunden = [
/*Jan*/	0,
/*Feb*/	0,
/*Mär*/	0,
/*Apr*/	0,
/*Mai*/	0,
/*Jun*/	0,
/*Jul*/	0,
/*Aug*/	0,
/*Sep*/	2,
/*Okt*/	0,
/*Nov*/	0,
/*Dez*/	0
];

var gesamtsaldo = 0;
var i;
for (i=0; i < ueberstunden.length; i++) {
	gesamtsaldo += ueberstunden[i];
}