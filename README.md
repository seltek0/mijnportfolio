# Slider naar rechts

Door deze library toe te voegen aan je website, wordt er een slider op je pagina weergegeven die overal handig is in gebruik. Zoals: wanneer je fancy animatie wilt toevoegen in je website.

# Wat het doet
Hieronder een opsomming van de functionaliteiten van deze library

    De afbeelding gaat van links naar rechts
    De afbeelding heeft een standaard snelheid
    Je kan ook een ander afbeelding gebruiken uit de img map

# Demo
URL om de demo te bekijken

De library kan als volgt geinstalleerd worden in je website.
Mogelijkheid 1: GitHub clone

 $ git clone https://github.com/seltek0/mijnportfolio

Mogelijkheid 2: Handmatig

Download de library (zip) en pak het zip bestand uit. Plaats img en js map in je root. Voeg de onderstaande HTML code toe aan je body tag in je HTML file: >>>

    <div id="wrapper">
        <div id="name"></div>
        <div id="time"></div>
        <div id="date"></div>
    </div>
<script>Library.play();</script>
<script>Library.backgroundImage("img/bg3.jpg");</script>

<<

Voeg de volgende regel toe aan je header tag:

<script src="js/library.js"></script>

Icon afbeelding wijzigen

Wil je liever een andere icon afbeelding? Kies dan een foto uit de img map en verander het onderstaande pad naar de afbeelding:

<div>
<img onmouseover="moveRight(this, amountToMoveTotal, amountToMovePerStep, timeToWaitBeforeNextIncrement)" src="blij.png"/>
</div>

# Updates

De volgende functionaliteiten staan op de planning om in een volgende versie van de library toe te voegen:

    Dynamische icon afbeeldingen.
    Inspirerende/motiverende tekst die animeren.
