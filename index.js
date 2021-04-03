	var colour = 205;
	var timer = 0
	document.body.style.backgroundColor = `hsl(${colour}, 62%, 61%)`;

	function nextColour() {
		colour = colour + 25
		document.body.style.backgroundColor = `hsl(${colour}, 62%, 61%)`;
	}

	setInterval( ()=>{
		timer = timer + 1
		var seconds = timer % 60
		var minutes = Math.floor(timer/60)
		if(timer < 60){
			document.getElementById("count").innerHTML = `${seconds} seconds`
		} else{
			document.getElementById("count").innerHTML = `${minutes} minutes and ${seconds} seconds`
		}
	}, 1000)