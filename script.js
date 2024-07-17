(function(){
    "use strict";
    // console.log("hello");

    // nav bar
    var navigation = document.getElementById("nav");
    // set to menu this menu
    navigation.innerHTML = `<ul>
        <li><a href="index.html">work</a></li>
        <li><a href="about.html">about</a></li>
        <li><a href="contact.html">contact</a></li>
        <li><a href="resume.html">resume</a></li>
    </ul>`;


    // img transitions n such
    var projs = document.getElementsByClassName("proj");
    var imgs = document.getElementsByClassName("imgs");
    var titles = document.getElementsByClassName("imgTitle");
    


    for (let i = 0; i < projs.length; i++){
        // // when hover over img sq, title appears and img lower opacity
        // projs[i].addEventListener('mouseover', function(){
        //     imgs[i].style.opacity = '40%';
        //     titles[i].style.opacity = '100%';
        // });
        // // return when not hov
        // projs[i].addEventListener('mouseout', function(){
        //     imgs[i].style.opacity = '100%';
        //     titles[i].style.opacity = '50%';
        // });

        // when hover over img sq, title disappears and img inc opacity
        projs[i].addEventListener('mouseover', function(){
            imgs[i].style.opacity = '100%';
            titles[i].style.opacity = '0';
        });
        // return when not hov
        projs[i].addEventListener('mouseout', function(){
            imgs[i].style.opacity = '40%';
            titles[i].style.opacity = '100%';
        });

        // for mobile
        projs[i].addEventListener('mousedown', function(){
            imgs[i].style.opacity = '40%';
            titles[i].style.opacity = '100%';
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
        nav.style.top = '-315px';
        back.style.zIndex = '7';
        menu.style.zIndex = '8';

        back.style.opacity = '0';
        menu.style.opacity = '100%';
    });

    // footer
    var footerDate = document.getElementsByTagName("footer");
    // elements by tag name returns list, there should only be one footer
    // keeping the year up to date of last update :)
    footerDate[0].innerHTML = '<p>Emma Choi 2024</p>';


}());