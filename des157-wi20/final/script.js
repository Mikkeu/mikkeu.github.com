(function(){
  "use strict";

  window.onload=function(){
    var social = document.getElementById('social');
    var health = document.getElementById('health');
    var job = document.getElementById('job');
    health.addEventListener("click", healthfun );
    job.addEventListener("click",jobfun);
    social.addEventListener("click",socialfun);


      event.preventDefault;

      function socialfun() {
      document.getElementById("helper").innerHTML = "Volunteering helps make a difference in your community! The social benefits are...";

    }
    
    

    function healthfun() {
      document.getElementById("helper").innerHTML = "Volunteering is not only good for others, it's also good for your own health! The health benefits are...";

        }
        function jobfun() {      
      document.getElementById("helper").innerHTML = "Volunteering can offer many skills..";

    }

    };



//same as forEach }

const tabs = document.querySelectorAll(`#tabs > ul > li > a`);

tabs.forEach( (eachTab) => {
  
  eachTab.addEventListener("click", selectTab);
} );



function selectTab(event){
  event.preventDefault();

  // for (let i = 0; i < tabs.length; i++) {
  //     tabs [i].removeAttribute('class');
  // }
// arrow functions to repllace functions, similar purpose
  tabs.forEach( (tab) => {
      tab.removeAttribute('class');
  });

  event.target.className = 'active';

  const thisTab = event.target.getAttribute('href');
  const thisContent = document.querySelector(thisTab);

  const oldTabContent = document.querySelector('.visible');
  oldTabContent.className = 'visuallyhidden';

  oldTabContent.addEventListener('transitionend', function() {
      oldTabContent.className = 'hidden';

      thisContent.className = 'visible visuallyhidden';
      setTimeout(function(){
          thisContent.classList.remove('visuallyhidden');
      }, 20);
      
  }, { capture: false, once: true, passive: false });
};

let image = new Image();
        image.src = "images/chef.png";
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
        };

          
          
      

}());