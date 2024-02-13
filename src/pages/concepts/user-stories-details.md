---
layout: ../../layouts/Layout.astro
title: 'Detailgrad der User Stories'
draft: false
group: {
  inGroup: true,
  groupName: 'Konzepte',
}
---
Bei der Konzeptionierung ist es variabel, wie viele User Stories geschrieben werden, bis das Konzept abgebildet ist. Es ist möglich, nur eine Story zu schreiben und zu sagen:

"als Administrator möchte ich Benutzer verwalten"

Oder man kann den Inhalt in mehreren Stories abbilden:

"als Administrator möchte ich Benutzer schnell erstellen können"

"als Administrator möchte ich Benutzer in einer sortierbaren, filterbaren Liste sehen"

"als Administrator möchte ich Benutzer löschen können"

"als Administrator möchte ich Benutzer editieren können"

Prinzipiell ist keiner der beiden Möglichkeiten falsch, doch die zweite Variante, die detaillierte, führt zu einer besseren Software, weil genau das umgesetzt wird, was der Auftraggeber benötigt. 
Beispielsweise könnte es sein, dass Administratoren Benutzer gar nicht löschen können sollen, sondern Benutzer nur ausgeblendet oder pseudonymisiert werden.
Wenn es eine eigene Story für diesen Vorgang gibt, kann diese Diskussion gar nicht stattfinden.

Doch auch in einer User-Story gibt es natürlich noch viele verschiedene Unterschiede:

Die oben genannte Story "als Administrator möchte ich Benutzer schnell erstellen können" könnte z.B. den folgenden Beschreibungstext haben,
um das sehr unspezifische Beiwort „schnell“ zu konkretisieren: "Benutzer sollen nur mit der E-Mail-Adresse angelegt werden. Alle anderen Details sollen die Benutzer später selbst ausfüllen".

Das kann in der Umsetzung einen großen Unterschied machen, da viele Firmen beispielsweise standardmäßig davon ausgehen würden, dass alle Informationen über einen Benutzer ausgefüllt werden müssen, z.B. mindestens Vorname und Nachname. 
Daher sind Abnahmekriterien für User Stories sehr wichtig: sie dienen als beschreibendes Element. Die oben genannte Story "Als Administrator möchte ich Benutzer in einer sortierbaren, filterbaren Liste sehen" könnte die Folge in den Abnahmekriterien beinhalten:

* Die folgenden Felder werden angezeigt:
    * Vorname
    * Nachname
    * E-Mail-Adresse
    * Telefonnummer
    * Registrierungsdatum
* Es ist möglich, nach allen Feldern aufsteigend und absteigend zu sortieren.
* Es ist nur möglich, nach einem Feld gleichzeitig zu sortieren
* Es ist möglich nach allen Feldern mit einer Textsuche zu filtern
* Das Datumsfeld kann nach einem Bereich gefiltert werden (von Tag bis Tag)
    * Dazu stehen zwei Datumseingabefelder zur Verfügung
* Wenn nach einem anderen Feld gefiltert wird, wird der vorige Filter aufgehoben
* Es ist möglich, die Detailansicht von einem Eintrag zu öffnen, in dem einen Pfeil auf der Seite angeklickt wird

Das sind relativ viele Abnahmekriterien, die ersichtlich machen sollten, wie verschieden eine Story verstanden werden kann.
Vielleicht ist für den Auftraggeber das Feld Registrierungsdatum sehr wichtig, und bei der Umsetzung ist es nicht inkludiert.
Das Filtern von einem Feld kann auf verschiedene Arten und Weisen passieren, und gerade bei einem Datum gibt es hier großes Diskussionspotential.
Möglicherweise kann man sonst nur einen Tag aussuchen? 
Vielleicht kann man nur auswählen, ab welchem Datum Einträge angezeigt werden sollen?
Oder bis zu welchem Datum?
Ist vielleicht gar die Uhrzeit wichtig?
Oder geht es um wiederkehrende Aktivitäten und man will unabhängig vom Jahr nur Einträge ab einem gewissen Monat anzeigen, beispielsweise nur Einträge für Mai, egal aus welchem Jahr?

Und dieses Beispiel zu vertiefen, sollen hier andere Abnahmekriterien aufgelistet werden:

* Die folgenden Felder werden angezeigt:
    * Nachname, Vorname
    * E-Mail-Adresse
    * Status
    * PLZ, Ort
    * Lizenz gültig bis
* In der rechten Spalte der Liste gibt es mehrere Optionen:
    * Detaileintrag öffnen
    * Benutzer sperren
    * Als Benutzer einloggen
* Über der Tabelle gibt es die Möglichkeit, die Tabelle zu filtern.
    * Ein Eingabefeld erstreckt sich über die gesamte Breite der Tabelle
    * Wörter, die in diesem Eingabefeld eingegeben werden, werden in allen angezeigten Feldern und in der Notiz zum Benutzer gesucht
    * Wörter, die durch Leerzeichen getrennt werden, werden jeweils in allen Feldern gesucht: die Suche nach den zwei Wörterteilen "Mar raz" findet also den Eintrag von Maria und Marco, die als Ort beide Graz angegeben haben, als auch den Eintrag von Markus, der in Grazbach lebt sowie den Eintrag von Herbert, bei dem im Notizfeld steht "Kontakt über Martin Kratzer"
* Die Ergebnisse der Suche müssen in 90 % der Fälle spätestens nach 200 Millisekunden gefiltert zur Verfügung stehen
* Ganz links in jeder Reihe gibt es die Möglichkeit, eine Reihe zu markieren. Markierungen bleiben über mehrere Seiten der Pagination erhalten.
* Es ist möglich, die gewählten Benutzer auf einmal anzuschreiben.

Das ist ein Extrembeispiel für die Abnahmekriterien einer User-Story, und auch nicht im völlig korrekten Format, da die Verweise auf die weiterführenden User Stories fehlen. User Stories sollten an Stellen, wo weiterführende Funktionalität beschrieben wird, mit einer eindeutigen Identifizierung auf eine weitere User-Story verweisen. Diese verbundene User-Story wird dann in einem anderen Teil des Angebotes noch detaillierter beschrieben. User Stories sollten dem Single responsibility Prinzip folgen: sie sollten eine einzige Sache beschreiben, und nicht mehrere auf einmal.
