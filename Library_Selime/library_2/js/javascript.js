var selime = function(){ // mijn library
	
		_this={};

			var now = new Date(); //de tijd/datum van nu
			var hours = now.getHours(); // pak de uren van nu
			document.write('Hoelaat het nu is in uren: ', hours, ' '); //Laat de tijd in uren zien
			document.bgColor="#CC9900";
			
			//wanneer de werkelijke tijd tussen de if/else statement is ingevuld wordt de achtergrond kleur veranderd met de tekst die wordt weergegeven
			//tussen 12-18 uur
			if (hours > 11 && hours < 19){
				document.write ('<body style="background-color: orange"> Goedemiddag');
			}
			else if (hours > 21 && hours < 5){
				document.write ('<body style="background-color: skyblue"> Snachts');}
			//tussen 5-12 uur
			else if (hours > 4 && hours < 13){
				document.write ('<body style="background-color: steelblue"> Goedemorgen');
			}
			else {
				document.write ('<body style="background-color: orangered"> Goedeavond');
			}

		
		var speed = function(snelheid){ // functie snelheid genereren van de eerste object
				self={}; // naam van library om aan te roepen, hier zit mijn object 1
				self.oImg = document.createElement("img");
				self.oImg.setAttribute('src', 'img/icon.png');
				self.oImg.setAttribute('alt', 'icon');
				self.oImg.setAttribute('style', 'left:10px; top:50px; position:absolute;');
				document.body.appendChild(self.oImg);
 
				var defaultspeed= 5; // standaard snelheid wanneer er niets is ingevuld in de html pagina
				var pos =0;	// positie			
				var id = setInterval(frame, defaultspeed = snelheid || defaultspeed); // de tijd in de frame // wanneer er geen snelheid is ingevuld in html pagina pak dan de snelheid van de standaard defaultspeed, wanneer wel een snelheid is ingevuld wordt deze uitgevoerd
	
				console.log('snelheid' , snelheid);
				console.log('Def', defaultspeed);
	
					function frame() { // het vakje om te animeren
					if (pos == 350) {
						clearInterval(id); // wanneer er 350px is gereikt stop de tijd
						} else {
						pos++; // +1
						self.oImg.style.top = pos + 'px'; //de positie wordt opgeteld en zorg dat de animatie object naar beneden gaat

						}
					}				
			return {speed:speed }; // geef speed terug
			}
			
			
		_this.speed = speed;
		
		
			var speed1 = function(snelheid1){ // functie snelheid genereren van de 2de object
				self1={}; // naam van library om aan te roepen icon 2 (object 2)
				self1.oImg = document.createElement("img");
				self1.oImg.setAttribute('src', 'img/icon1.png');
				self1.oImg.setAttribute('alt', 'icon');
				self1.oImg.setAttribute('style', 'left:50px; top:50px; position:absolute;');
				document.body.appendChild(self1.oImg);

				var pos =0;				
				var id = setInterval(frame1, 50); // standaard snelheid (defaultspeed) is 50
	
					function frame1() { //het vakje 
					if (pos == 350) {
						clearInterval(id); // stop tijd wanneer de positie 350 is bereikt
						} else {
						pos++; // +1
						self1.oImg.style.left = pos + 'px'; // de px wordt bij de positie opgeteld
						}
					}				
			return{	speed1:speed1 } //return speed van funtie1 (in dit geval functie 2)
			}	
			_this.speed1 = speed1;
			return _this; // return beide functies
	}