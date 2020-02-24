(function(){
    "use strict";

        var imageOne = document.getElementById('phone');
		var imageTwo = document.getElementById('case');
		var imageThree = document.getElementById('ear');

		imageOne.addEventListener('click',function(event){
			event.preventDefault;

			document.getElementById("myself").src = "images/phone.png";

			document.getElementById("intro").innerHTML = "My phone! I always take this with me. I like texting my friends and family throughout the day and when I'm bored I watch videos, play games, and surf the web. The background image on my phone is one of my cats that lives back home.";

		}
		
		)

		imageTwo.addEventListener('click',function(event){
			event.preventDefault;
			

			document.getElementById("myself").src = "images/pencilcase.png";

			document.getElementById("intro").innerHTML = "My pencil case! I bought it because it looks like my other cat. I keep a few pencils, pens, erasers, and lead refill in it.";

        }
		)
		
		imageThree.addEventListener('click',function(event){
			event.preventDefault;

			document.getElementById("myself").src = "images/earbuds.png";

			document.getElementById("intro").innerHTML = "My earbuds! My dad got them for me during the winter, I think it was really cheap. Still, it works!";



		}
		
		)

}());