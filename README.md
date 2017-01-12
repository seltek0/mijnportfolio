# Simpele bewegende animaties library
Door deze library toe te voegen aan je website, wordt er een object op je pagina weergegeven die overal handig is in gebruik. Zoals: wanneer je fancy animatie wilt toevoegen op je website.

## Wat doet library_1
Hieronder een opsomming van de functionaliteiten van deze library

    De afbeelding/object gaat van links naar rechts
    De afbeelding heeft een standaard snelheid of je kan het zelf aanpassen via de parameter in de html pagina
    Je kan ook een ander afbeelding gebruiken uit de img map of een eigen afbeelding gebruiken dmv het in de img map te zetten en te linken

## wat doet library_2
Hieronder een opsomming van de functionaliteiten van deze library

    Deze library is een stuk uitgebreider dan de library_1, het is een geupdate versie van de library_1
    De huidige tijd wordt gegenereerd en hierdoor veranderd de achtergrond kleur en de teksten
    Je kan meerdere objecten gebruiken om bijvoorbeeld een race te maken
    De snelheid van object1 kan je aanpassen in de html pagina, de snelheid van object2 blijft stabiel

## Demo
URL om de demo te bekijken.

De library kan als volgt geinstalleerd worden in je website:

#### Mogelijkheid 1: GitHub clone

 $ git clone https://github.com/seltek0/mijnportfolio

#### Mogelijkheid 2: Handmatig

Download de library (zip) en pak het zip bestand uit. Plaats img en js map in je root. Voeg de onderstaande HTML code toe aan je body tag in je HTML file voor library_1 :

	var hallo = new selime();
	// vul hieronder in de haakjes () uw snelheid in:
	hallo.speed(); // hierin vul je een cijfer in (int)

Voeg de volgende regel toe aan je header tag library_1:

	<script src="js/library.js"></script>

#### Voorbeeld library_1

http://i326486.venus.fhict.nl/library_selime/library_1/


Voor library_2 body tag: 

	var hallo = new selime();
	hallo.speed1();
	// vul hieronder in de haakjes () uw snelheid in:
	hallo.speed();


Voeg de volgende regel toe aan je header tag library_2:

	<script src="js/javascript.js"></script>

#### Voorbeeld library_2

http://i326486.venus.fhict.nl/library_selime/library_2/


## Updates

De volgende functionaliteiten staan op de planning om in een volgende versie van de library toe te voegen:

-	Dynamische icon afbeeldingen.
-	Inspirerende/motiverende tekst die animeren.
-	Je eigen achtergrondkleur aanpassen via de html pagina
