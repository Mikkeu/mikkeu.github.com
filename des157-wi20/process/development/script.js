(function(){
    "use strict";

const btn = document.getElementById(`btn`);
const backBtn =  document.getElementById(`tabBtn`)

const box = document.getElementById('box');

btn.addEventListener("click", changeClass);
function changeClass(){
    alert("pp");
    document.getElementById("box").className = "container";
}

backBtn.addEventListener("click", changeClass);
function changeClass(){
    alert("aa");
    document.getElementById("box").className = "hidden";
}




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
}

}());