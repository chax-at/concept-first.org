---
layout: ../../layouts/Layout.astro
title: 'Beispielkonzept: Schaftracker'
draft: false
group: {
    inGroup: true,
    groupName: 'Beispielkonzept',
}
---
`An dieser Stelle soll ein plakatives Beispiel Konzept entstehen, das eine Idee gibt, wie so ein Konzept aussehen könnte.`

`Zu Beginn vom Konzept sollte eine Einleitung stehen, worum es in dem folgenden Projekt geht - natürlich muss dieser Teile in Browser sein, 
soll aber nur einen groben Überblick über das geplante verschaffen.`

Das Projekt soll jeden Menschen, der zu Hause ein oder mehrere Schafe hat, ermöglichen diese zu Zählen und deren Position herauszufinden.
Es soll möglich sein, zu erkennen wann Schafe über einen Zaun springen und sie dabei zu zählen.

An dieser Stelle stehen die Haare von jemandem, der requirements engineering ernst nimmt, schon in alle Richtungen und zu Berge: 
Aus dieser Beschreibung ergeben sich sehr sehr viele Fragen. Daher soll mit den Mitteln von Concept first ein Überblick geschaffen werden._

User Journeys

Der Benutzer öffnet die App, die App erkennt automatisch jeden Schafsprung und die Ergebnisse abspeichert. (UJ01).
Benutzer können Schafe beim springen zählen (UJ02). 
Benutzer können Fotos und Notizen zu Schafen anlegen (UJ03).

`Was ist das für eine Form? Das ist das Prinzip des One Sentence, wo eine User journey oder Story, 
die normalerweise zum Verständnis aus mehreren Teilen besteht und aussieht wie: 
"Als Benutzer möchte ich mich registrieren können um der Plattform beizutreten" in einer zweiten Form abgespeichert wird, 
damit das Konzept leichter lesbar wird. Unter der Auflistung der User journeys sollen diese nun detailliert dargestellt werden:`

**Benutzer können sich selbst registrieren (UJ01)**

Benutzer können sich registrieren ([US001](/concept-example/us001)). 
Benutzer können Ihre Daten ändern ([US002](/concept-example/us002)). 
Benutzer können Ihren Account aktivieren ([US003](/concept-example/us003)).

Die folgenden Epics ergeben sich:

Schafzähler: Diese Funktion ermöglicht es dem Benutzer, die Anzahl der Schafe zu zählen, die über einen Zaun springen. Die App erkennt automatisch jedes Schaf, das den Zaun überquert, und erhöht den Zähler entsprechend.

Zaunerkennung: Die App verwendet Bilderkennungstechnologie, um Zäune in der Umgebung zu erkennen. Sie ermöglicht dem Benutzer, einen virtuellen Zaun zu definieren oder vorhandene Zäune zu markieren, damit die App die Schafzählung durchführen kann.

Echtzeit-Anzeige: Die App stellt dem Benutzer eine Echtzeit-Anzeige der Schafzählung zur Verfügung. Der Zähler wird aktualisiert, sobald ein Schaf den Zaun überquert, und der Benutzer kann die Anzahl der gezählten Schafe in Echtzeit verfolgen.

Statistiken und Berichte: Die App sammelt Daten über die Schafzählung und stellt dem Benutzer Statistiken und Berichte zur Verfügung. Dies könnte beispielsweise die Gesamtzahl der gezählten Schafe, den Durchschnitt pro Tag oder die Top-10-Zäune mit den meisten Schafen umfassen.

Benutzerprofile und personalisierte Einstellungen: Die App ermöglicht es Benutzern, individuelle Profile anzulegen und ihre persönlichen Einstellungen festzulegen. Dies könnte die Auswahl der Sprache, das Anpassen der Benutzeroberfläche oder das Speichern von Zählungen für spätere Analysen umfassen.

Benachrichtigungen und Alarme: Die App kann dem Benutzer Benachrichtigungen oder Alarme senden, wenn bestimmte Schafzählergebnisse erreicht werden. Dies könnte dazu dienen, den Benutzer über einen Meilenstein in der Schafzählung zu informieren oder auf ungewöhnliche Ereignisse hinzuweisen.
