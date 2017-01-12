var selime = function(){ // mijn library

		var speed = function(snelheid){ // functie snelheid genereren, de 'snelheid' komt door de ingevulde int in html pagina
				self={}; // naam van library om aan te roepen, hier zit mijn object in
				self.oImg = document.createElement("img");
				self.oImg.setAttribute('src', 'img/icon.png');
				self.oImg.setAttribute('alt', 'icon');
				self.oImg.setAttribute('style', 'left:10px; top:50px; position:absolute;');
				document.body.appendChild(self.oImg);

				var defaultspeed= 5; // standaard snelheid als er niets is ingevuld in html pagina
				var pos =0;	// position			
				var id = setInterval(frame, defaultspeed = snelheid || defaultspeed); //wanneer het vakje snelheid is ingevuld wordt deze gepakt, wanneer het vakje leeg is wordt er altijd standaard defaultspeed gebruikt.
	
				console.log('snelheid' , snelheid);
				console.log('Def', defaultspeed);
	
					function frame() {
					if (pos == 350) {
						clearInterval(id); // wanneer de positie 350px is reset interval
						} else {
						pos++;
						self.oImg.style.top = pos + 'px'; //positie wordt opgeteld om te animeren/bewegen
						}
					}				

			}
		return{
			speed:speed 
		}
		
	}