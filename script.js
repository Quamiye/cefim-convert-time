let hours = 0;
let minutes = 0;
let seconds = 0;

function rightFormatF(time){
	if (time < 10){
		char = "0"+time;
		return char;
	}
	else{
		return time;
	}
}

function convert(){

	event.preventDefault();
	userValue = document.getElementById("userValue").value;
	userValue = Number(userValue);
	let toWriteInConversion = "";
	let toWriteInrightFormat = "";


	if(Number.isNaN(userValue) || userValue<0){
		toWriteInConversion = "Vous devez entrer un nombre positif.";
		toWriteInrightFormat = "";
	}
	else{
		hours = Math.floor(userValue/3600);
		minutes = Math.floor((userValue-hours*3600)/60);
		seconds = Math.floor(userValue-hours*3600-minutes*60); /*le floor au cas où l'utilisateur entre un nombre à virgule*/

		/* pour afficher le format heures : minutes : secondes*/

		hoursRF = rightFormatF(hours);
		minutesRF = rightFormatF(minutes);
		secondsRF = rightFormatF(seconds);

		toWriteInConversion = userValue + " secondes correspondent à " + hours + " heures, " + minutes + " minutes et " + seconds + " secondes.";
		toWriteInrightFormat = hoursRF + " : " + minutesRF + " : " + secondsRF;
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("warpResults").style.padding = "4px";
	document.getElementById("conversion").innerHTML = toWriteInConversion;
	document.getElementById("rightFormat").innerHTML = toWriteInrightFormat;

}



document.getElementById("myForm").reset(); /*vide le form au refresh de la page*/
document.getElementById("userValue").focus(); /*autofocus sur le champs de texte au chargement de la page*/
document.getElementById("buttonSubmit").addEventListener("click", convert);