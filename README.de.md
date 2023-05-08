# Polymetro - der polyrhythmischer PWA Metronom

<div align="center">
<img src="/assets/overview.png" width="720">
<p><em>Screenshots der mobilen Benutzeroberfläche von Polymetro im Dunkel- und Hell-Modus</em></p>
</div>

Polymetro ist ein polyrhythmischer
Metronom, der als PWA mit Vue für das Frontend und Web Audio als Klangengine
entwickelt wurde. Wert auf eine optimale Nutzung auf Mobilgeräten wurde gelegt.
[Hier klicken](https://polymetro.netlify.app), um die App live zu sehen.

## Hintergrund

Ich habe Polymetro im März 2020 entworfen und entwickelt, als ich dabei war,
Magnus Lindbergs Twine zu lernen. Das Stück ist voller Polyrhythmen, von denen
viele mir zuvor unbekannt waren.

<div align="center">
<img src="/assets/twine.png" width="720">
<p><em>Ausschnitt aus Magnus Lindbergs Twine</em></p>
</div>

Um diese Rhythmen zu erlernen, musste ich den Polyrhythmus in einen einzigen
zusammengesetzten Rhythmus "abflachen" und ihn als Ganzes erlernen. Dies war
nicht immer einfach, wenn man einem dichten Rhythmus wie 9 gegen 8
gegenüberstand. Um mir diesen Prozess zu erleichtern, habe ich Polymetro
entwickelt.

## Entwicklung

Die Idee war, einen digitalen Metronom zu haben, der sowohl einzelne Rhythmen
als auch Polyrhythmen spielen konnte. Durch das Einstellen des gewünschten
Metrums würde sich das Pulsraster automatisch anpassen, um die Anzahl der
Schläge pro Zyklus visuell anzuzeigen.

<div align="center">
<img src="/assets/pulsegrid.png" width="720">
<p><em>Screenshot des Pulsrasters, das in Polymetro verwendet wird.</em></p>
</div>

Jedes Glyph in dem Pulsraster konnte durch Antippen umgeschaltet werden, indem
es zwischen drei Zuständen wechselte: stark, schwach und stumm.

Das Metronom ist auch dreisprachig. Durch Klicken auf die Einstellungen wird
ein Modal angezeigt, das die Option bietet, zwischen Englisch, Deutsch und
Chinesisch zu wählen.
