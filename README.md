# Arbeitszeitrechner
Berechnet anhand von Einstechzeitpunkt und Überstunden diverse Endzeitpunkte und Zeiträume des Arbeitstages.

# Installationsanleitung
1.  lade das Programm herunter oder hole dir die Daten per git remote -> git fetch
2.  öffne die Datei "index.html"

# Benutzeranleitung
## Allgemein
Die Software wird grundsätzlich so genutzt, dass man seinen Arbeitsbeginn und seine Überstunden aus diesem Monat laut Stechuhr einträgt.

## Einzelne Werte und was Sie bedeuten

### Arbeitsbeginn
Hier wird der Anfangszeitpunkt eingetragen, von dem die Berechnungen ausgehen.

### Überstunden
Hier werden im Dezimalformat (also mit Kommas) die Überstunden aus dem aktuellen Monat eingetragen. Hierbei kann man es im amerikanischen oder deutschen Format schreiben, also mit Punkt oder Komma. Auch negative Werte funktionieren.

### Frühstückspause
Wenn es angehakt ist, werden 15 min berechnet.

### Mittagspause
Wenn es angehakt ist, werden 30 min berechnet.

### Reguläre Arbeitszeit
Der Wert setzt sich aus 8 h Arbeitszeit, 6 min Wegezeit und den Pausenzeiten zusammen.

### Regulärer Endzeitpunkt
Nimmt den Anfangszeitpunkt und recht ihm die Reguläre Arbeitszeit an.

### Frühester Endzeitpunkt
Nimmt den Regulären Endzeitpunkt und zieht diesem die Überstunden ab.

### Bis jetzt gearbeitet
Berechnet die Zeit seit Arbeitsbeginn bis jetzt abzüglich der Pausenzeiten.

### Überstunden aus diesem Jahr
Rechnet die Überstunden im Formular mit denen aus der Datei "ueberstunden.js" zusammen.

## Überstunden dauerhaft eintragen
Um beispielsweise die Überstunden aus dem Vormonat mitzuberechnen, trägt man diese Werte in die Datei "ueberstunden.js" ein.
Hierbei trägt man diese in das Array "ueberstunden" in der funktion "float_ueberstunden" ein. Dieses Array ist beliebig erweiterbar.
