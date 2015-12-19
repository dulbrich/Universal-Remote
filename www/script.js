
function sendIRCommand( irsendParam, model, code ){

	var request = new XMLHttpRequest();
	request.open( "GET" , "http://10.0.1.10/controller.php?irsendParam=" + irsendParam + "&model=" + model + "&code=" + code);
	request.send(null);

	request.onreadystatechange = function () {

		if (request.readyState == 4 && request.status == 500) {
			alert ("server error");
			return ("fail");
		} else if (request.readyState == 4 && request.status != 200 && request.status != 500 ) { 
			// alert ("Something went wrong!");
			alert(request.status);
			return ("fail"); 
		}

	}

	return 0;

}

function firstMacro() {
	sendIRCommand("SEND_ONCE", "Vizio", "KEY_POWER");
	sendIRCommand("SEND_ONCE", "Sherwood", "KEY_POWER");
}



function toggle_TV_REMOTE(){
	document.getElementById('SURROUND_SOUND').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "none";
	document.getElementById('TV_REMOTE').style.display = "inline";
}

function toggle_SURROUND_SOUND(){
	document.getElementById('TV_REMOTE').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "none";
	document.getElementById('APPLETV_REMOTE').style.display = "none";
	document.getElementById('SURROUND_SOUND').style.display = "inline";
}

function toggle_VCR_REMOTE(){
	document.getElementById('TV_REMOTE').style.display = "none";
	document.getElementById('SURROUND_SOUND').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "none";
	document.getElementById('APPLETV_REMOTE').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "inline";
}

function toggle_UNI_REMOTE(){
	document.getElementById('TV_REMOTE').style.display = "none";
	document.getElementById('SURROUND_SOUND').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "none";
	document.getElementById('APPLETV_REMOTE').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "inline";
}

function toggle_BLURAY_REMOTE(){
	document.getElementById('TV_REMOTE').style.display = "none";
	document.getElementById('SURROUND_SOUND').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "none";
	document.getElementById('APPLETV_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "inline";
}

function toggle_APPLETV_REMOTE(){
	document.getElementById('TV_REMOTE').style.display = "none";
	document.getElementById('SURROUND_SOUND').style.display = "none";
	document.getElementById('VCR_REMOTE').style.display = "none";
	document.getElementById('UNI_REMOTE').style.display = "none";
	document.getElementById('BLURAY_REMOTE').style.display = "none";
	document.getElementById('APPLETV_REMOTE').style.display = "inline";
}

var bool = 1;

function toggleShelf() {
	if(bool == 1){
		bool = 0;
		// animate shelf
		document.getElementById('bottom').style.WebkitAnimationName = "shelfUp";
		document.getElementById('bottom').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('bottom').style.top = "450px";
		// animate tv button
		document.getElementById('tv').style.WebkitAnimationName = "tvUp";
		document.getElementById('tv').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('tv').style.top = "460px";
		// animate sound button
		document.getElementById('sound').style.WebkitAnimationName = "soundUp";
		document.getElementById('sound').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('sound').style.top = "460px";
		// animate dvd button
		document.getElementById('dvd').style.WebkitAnimationName = "dvdUp";
		document.getElementById('dvd').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('dvd').style.top = "460px";
		// animate vcr button
		document.getElementById('vcr').style.WebkitAnimationName = "vcrUp";
		document.getElementById('vcr').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('vcr').style.top = "460px";
		// animate shelf button
		document.getElementById('shelfButton').style.WebkitAnimationName = "shelfButtonUp";
		document.getElementById('shelfButton').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('shelfButton').style.top = "450px";
		// animate universal button
		document.getElementById('universal').style.WebkitAnimationName = "universalUp";
		document.getElementById('universal').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('universal').style.top = "560px";
		// animate bluray button
		document.getElementById('bluray').style.WebkitAnimationName = "blurayUp";
		document.getElementById('bluray').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('bluray').style.top = "560px";
		// animate apple tv button
		document.getElementById('appleTV').style.WebkitAnimationName = "appleTVUp";
		document.getElementById('appleTV').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('appleTV').style.top = "560px";
		// do neccisary resets
		setTimeout(resetShelfToggleOne, 1000);
	} else {
		bool = 1;
		// animate shelf
		document.getElementById('bottom').style.WebkitAnimationName = "shelfDown";
		document.getElementById('bottom').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('bottom').style.top = "550px";
		// animate tv button
		document.getElementById('tv').style.WebkitAnimationName = "tvDown";
		document.getElementById('tv').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('tv').style.top = "560px";
		// animate sound button
		document.getElementById('sound').style.WebkitAnimationName = "soundDown";
		document.getElementById('sound').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('sound').style.top = "560px";
		// animate dvd button
		document.getElementById('dvd').style.WebkitAnimationName = "dvdDown";
		document.getElementById('dvd').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('dvd').style.top = "560px";
		// animate vcr button
		document.getElementById('vcr').style.WebkitAnimationName = "vcrDown";
		document.getElementById('vcr').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('vcr').style.top = "560px";
		// animate shelf button
		document.getElementById('shelfButton').style.WebkitAnimationName = "shelfButtonDown";
		document.getElementById('shelfButton').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('shelfButton').style.top = "550px";
		// animate universal button
		document.getElementById('universal').style.WebkitAnimationName = "universalDown";
		document.getElementById('universal').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('universal').style.top = "660px";
		// animate bluray button
		document.getElementById('bluray').style.WebkitAnimationName = "blurayDown";
		document.getElementById('bluray').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('bluray').style.top = "660px";
		// animate apple tv button
		document.getElementById('appleTV').style.WebkitAnimationName = "appleTVDown";
		document.getElementById('appleTV').style.WebkitAnimationDuration = "0.5s";
		document.getElementById('appleTV').style.top = "660px";
		// do neccisary resets
		setTimeout(resetShelfToggleOne, 1000);
	}
}

function resetShelfToggle() {
	// resent shelf animation
	document.getElementById('bottom').style.WebkitAnimationName = "";
	document.getElementById('bottom').style.WebkitAnimationDuration = "";
	// reset tv button animation
	document.getElementById('tv').style.WebkitAnimationName = "";
	document.getElementById('tv').style.WebkitAnimationDuration = "";
	// reset sound button animation
	document.getElementById('sound').style.WebkitAnimationName = "";
	document.getElementById('sound').style.WebkitAnimationDuration = "";
	// reset dvd button animation
	document.getElementById('dvd').style.WebkitAnimationName = "";
	document.getElementById('dvd').style.WebkitAnimationDuration = "";
	// reset vcr button animation
	document.getElementById('vcr').style.WebkitAnimationName = "";
	document.getElementById('vcr').style.WebkitAnimationDuration = "";
	// reset shelf button animation
	document.getElementById('shelfButton').style.WebkitAnimationName = "";
	document.getElementById('shelfButton').style.WebkitAnimationDuration = "";
	// reset universal button animation
	document.getElementById('universal').style.WebkitAnimationName = "";
	document.getElementById('universal').style.WebkitAnimationDuration = "";
	// reset bluray button animation
	document.getElementById('bluray').style.WebkitAnimationName = "";
	document.getElementById('bluray').style.WebkitAnimationDuration = "";
}

function nothing() {}