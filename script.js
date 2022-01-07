(function(){
    "use strict";
    console.log("hello");

    // img transitions n such
    var projs = document.getElementsByClassName("proj");
    var imgs = document.getElementsByClassName("imgs");
    var titles = document.getElementsByClassName("imgTitle");
    
    for (let i = 0; i < projs.length; i++){
        // when hover over img sq, title appears and img lower opacity
        projs[i].addEventListener('mouseover', function(){
            imgs[i].style.opacity = '40%';
            titles[i].style.opacity = '100%';
        });
        // return when not hov
        projs[i].addEventListener('mouseout', function(){
            imgs[i].style.opacity = '100%';
            titles[i].style.opacity = '0';
        });
    }

    var menu = document.getElementById("menu");
    var back = document.getElementById("back");
    const nav = document.getElementById("nav");
    var isDown = false;

    menu.addEventListener('click', function(){
        nav.style.top = '0';
        menu.style.zIndex = '7';
        back.style.zIndex = '8';

        back.style.opacity = '100%';
        menu.style.opacity = '0';
    });

    back.addEventListener('click', function(){
        nav.style.top = '-255px';
        back.style.zIndex = '7';
        menu.style.zIndex = '8';

        back.style.opacity = '0';
        menu.style.opacity = '100%';
    });

    


}());