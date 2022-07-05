# https://einund20.herokuapp.com/

## Beschreibung

Wenn man die Seite öffnet, gelangt man direkt zur Spielregelnbeschreibung(die ich verpeilt hatte zu schreiben) -keine großen Besonderheiten
Ein Klick auf "Spiel" öffnet die eigentliche Anwendung. "Einundzwanzig" eine Abwandlung von "Black Jack".
Man erhält direkt 2 Karten, die man bildlich sehen kann (alle 52 Karten als image vorhanden + 1 Rückseite). Darüber sind die Karten vom Bankier.
Unten sind 2 Buttons "Hit" und "Stand". Durch anklicken von "Hit" erhält man eine weitere Karte, wenn dies gewünscht ist. Sollte der Zahlenwert 21 übersteigen, ist das anklicken von "Hit" nicht mehr möglich, dann bleibt nur noch "Stand". Durch anklicken von "Stand" werden die Karten vom Bankier offenbart und man sieht ob man gewonnen, verloren oder unentschieden gespielt hat. Im Hintergrund wird gespeichert, was eintraf, bei Falle von einem "Win" erhielt man darüberhinaus 50 "coins" oder verliert sie  durch ein "loss". Desweiteren verschwinden die 2 Buttons und es erscheinen 2 neue, "Play again" und "Save stats". Mit einem Klick auf "Play again" kann man erneut spielen, ab hier wird es leider etwas fehlerhaft. Erst durch erneutes klicken von "Play again" nach anklicken von "Stand" sieht man ob man die Runde davor gewonnen oder verloren hatte. Wenn man auf "Safe stats" klickt wird in der Rangliste gespeichert ob man gewonnen, verloren oder unentschieden gespielt hatte, leider ist dies auch etwas fehlerhaft, da es nicht alle gespielten Runden speichert, sondern nur die letzte. Man erhält hier einen ZufallsUsername.
Wenn man dann auf "Rangliste" klickt sieht man alle User in der Datenbank in einer Tabelle aufgelistet, unsortiert. Ein Klick auf die Spaltennamen "username", "coins", "wins", "losses" oder "draws" sortiert es der Größe nach. Da die richtige Speicherung noch etwas fehlerhaft ist, habe ich zur besseren Visualisierung paar BeispielUser erstellt.

#### Quellen:
<sub>
https://youtu.be/bMYCWccL-3U
Inspiration Aufbau, Code teilweise angepasst und verändert
</sub>
