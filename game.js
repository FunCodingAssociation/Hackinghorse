 var count = 1;
 
	var z=setInterval(function () {
		var img = document.querySelector('img');
		count++;
		if (count == 6)
			count = 1;
		img.src = count + ".png";	
		
	}, 100);

	function jump(event) {
		if (event.keyCode != 38 && event.keyCode != 32)
			return; 
		document.querySelector('div.dude').style.animation = 'dudeAnim 1s infinite ease-out';
		clearInterval(z);
		var img = document.querySelector('img');
		img.src = "6.png";
		setTimeout(function() {
			z=setInterval(function () {
				count++;
				if (count == 6)
					count = 1;
				img.src = count + ".png";	
			}, 100);
		    count = 1;
			document.querySelector('div.dude').style.animation = '';
		}, 1000);
	}