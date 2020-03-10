
        // listen for the submission of the form
        document.getElementById("myform").addEventListener("submit", function(event){
            // prevent the default behavior
            event.preventDefault();

            // get all the text fields from the form
            var formData = document.querySelectorAll("input[type=text]");
            // create an array to hold values from the form
            var words = [];

            //loop through the fields and add the words to the array, one at a time.
            for( var i=0; i<formData.length; i++){
                words.push(formData[i].value);    
            }
            //You can see the array in the console, if you want...
            console.log(words);

            //run a function to put the words into the madlib... Function below...
            //Pass the array of words the user typed into the function
            makeMadLib(words);
        });

        //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){
            var madlib = `My ${theWords[0]} has a birthday coming up. I know their favorite flavor is ${theWords[1]} with ${theWords[2]} on top. The frosting has to be ${theWords[3]}. Remember you have to ${theWords[4]} the batter so it stays fluffy!    `;

            //Get the madlib container
            var mlContainer = document.getElementById('madlib');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");
            document.getElementById("myform").setAttribute("class", "invisible");
            document.getElementById("caake").setAttribute("class", "cake");

        }

        let image = new Image();
        image.src = "images/chefs.png";
        let counter = 0,
          frame_width = 370,
          frame_height = 500;
        image.onload = function() {
          let canvas = document.getElementById("myCanvas");
          let context = canvas.getContext("2d");
          window.requestAnimationFrame(animate);
         
          function animate() {
            let frame = Math.floor(counter % 8);
            context.drawImage(image, frame * frame_width, 0, frame_width, frame_height, 0, 0, frame_width, frame_height);
            counter = counter + .05;
            
            window.requestAnimationFrame(animate);
          }
        }