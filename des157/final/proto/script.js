(function(){
    "use strict";
    console.log("reading js");

    const places = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

    // button functs
    let pics = document.getElementById('pics');

    const leftButton = document.getElementById('left');
    leftButton.addEventListener('click', function(){

        // left: if init, --> flex-start
        if(pics.className == 'center'){
            pics.style.justifyContent = 'flex-start';
            pics.className = 'start';
        }
        // start --> flex-end
        else if(pics.className == 'start'){
            pics.style.justifyContent = 'flex-end';
            pics.className = 'end';
        }
        // end --> cen
        else{
            pics.style.justifyContent = 'center';
            pics.className = 'center';
        }
    });

    const rightButton = document.getElementById('right');
    rightButton.addEventListener('click', function(){

        // right: if init, --> flex-end
        if(pics.className == 'center'){
            pics.style.justifyContent = 'flex-end';
            pics.className = 'end';
        }
        // start --> cen
        else if(pics.className == 'start'){
            pics.style.justifyContent = 'center';
            pics.className = 'center';
        }
        // end --> start
        else{
            pics.style.justifyContent = 'flex-start';
            pics.className = 'start';
        }
    });

     // when click FANTASIA 1
     const fan = document.getElementById('one');

     fan.addEventListener('click', function(){
         let face = document.getElementById('face');
         face.setAttribute('src', 'images/facePurp.png');
 
         // add tea img
         let tea = document.getElementById('tea');
         tea.innerHTML = "<img src = 'images/fTea.png'>";
 
         // change txt
         let txt1 = document.querySelector('section');
         txt1.innerHTML = "<p>Fantasia's been around a pretty long time lol. It's in a plaza w/ a few other spots</p> <p>Alas, only oolong milk tea, so I get green instead<p> <p>Jasmine Green Tea: Large, 0 sugar, light ice<p>";
 
 
     });

    // when click TEAERA 2
    const te = document.getElementById('two');

    te.addEventListener('click', function(){
        let face = document.getElementById('face');
        face.setAttribute('src', 'images/facePink.png');

        // add tea img
        let tea = document.getElementById('tea');
        tea.innerHTML = "<img src = 'images/teTea.png'>";

        // change txt
        let txt1 = document.querySelector('section');
        txt1.innerHTML = "<p>Tea Era's pretty close to my house, 2nd closest?</p> <p>It and RareTea are actually like right next to each other lol<p> <p>OT: Large | No Sugar | Less Ice<p>";


    });


    // when click RARETEA 3
    const rt = document.getElementById('three');

    rt.addEventListener('click', function(){
        let face = document.getElementById('face');
        face.setAttribute('src', 'images/faceRed.png');

        // add tea img
        let tea = document.getElementById('tea');
        tea.innerHTML = "<img src = 'images/rtTea.png'>";

        // change txt
        let txt1 = document.querySelector('section');
        txt1.innerHTML = "<p>Back in Davis, this was my regular place to go!</p> <p>There's one near my house here as well (but they don't get my order right sometimes xd)<p> <p>Oolong Tea: 0 sugar, less ice ((side note: no milk please!))<p>";


    });

    // when click on HAPPYLEMON 4
    const hl = document.getElementById('four');

   hl.addEventListener('click', function(){
        let face = document.getElementById('face');
        face.setAttribute('src', 'images/faceYell.png');

        // add tea img
        let tea = document.getElementById('tea');
        tea.innerHTML = "<img src = 'images/hlTea.png'>";

        // change txt
        let txt1 = document.querySelector('section');
        txt1.innerHTML = "<p>There's 3 Happy Lemon locations around here</p> <p>They're known for their 'salted cheese foam'~<p> <p><br>Light Oolong Tea: **No Sug **25 ice<p>";

    });


    // when click on GONGCHA 5
    const gc = document.getElementById('five');

    gc.addEventListener('click', function(){
        let face = document.getElementById('face');
        face.setAttribute('src', 'images/faceRed.png');

        // add tea img
        let tea = document.getElementById('tea');
        tea.innerHTML = "<img src = 'images/gcTea.png'>";

        // change txt
        let txt1 = document.querySelector('section');
        txt1.innerHTML = '<p>Gong Cha is the closest tea place to my house, so we frequent it often</p> <p>You can order online for extra convenience!<p> <p><br>Oolong Tea: 0 sugar, 25 ice<p>';

    });



}());