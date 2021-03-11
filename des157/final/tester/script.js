(function(){
    "use strict";
    console.log("reading js");

    // alert("hello! Some tasks: navigate bottom bar, check out the tea places, think about what catches your eye/doesn't. ");

    // const places = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const fant = document.getElementById('one');
    const teaEra = document.getElementById('two');
    const rareT = document.getElementById('three');
    const happyl = document.getElementById('four');
    const gongCha = document.getElementById('five');
    const ume = document.getElementById('six');
    const teaspoon = document.getElementById('seven');
    const mrSun = document.getElementById('eight');
    const t4 = document.getElementById('nine');
    const chicknTea = document.getElementById('ten');

    const teas = [fant, teaEra, rareT, happyl, gongCha, ume, teaspoon, mrSun, t4, chicknTea];

    const tPics = [
        'fTea.png',     // fantasia 1
        'teTea.png',    // tea era 2
        'rtTea.png',    // raretea 3
        'hlTea.png',    // happyl 4
        'gcTea.png',    // gongcha 5
        'uTea.png',     // ume 6
        'tspTea.png',   // tsp 7
        'msTea.png',    // mrsun 8
        't4Tea.png',     // t4 9
        'ctTea.png'
    ];

    const logos = [
        'fantasia.png',     //1
        'teaera.png', 
        'rareTea.png', 
        'happyl.png', 
        'gongcha.png',      // 5
        'ume.png', 
        'teaspoon.png', 
        'mrsun.png',
        't4.png',
        'chick.png'         // 10
    ];

    const txt = [
        "<p>Fantasia's been around a pretty long time lol. It's in a plaza w/ a few other spots</p> <p>Alas, only oolong milk tea, so I get green instead</p>",  // fantasia, 1
        "<p>Tea Era's pretty close to my house, 2nd closest?</p> <p>It and RareTea are actually like right next to each other lol</p>", // tea era 2
        "<p>Back in Davis, this was my regular place to go!</p> <p>There's one near my house here as well (but they don't get my order right sometimes xd)</p>", // raretea 3
        "<p>There's 3 Happy Lemon locations around here, one in the same plaza as Fantasia/Ume</p> <p>They're known for their 'salted cheese foam'~</p>", // happylemon 4
        "<p>Gong Cha is the closest tea place to my house, so we frequent it often</p> <p>You can order online for extra convenience!</p>", // gongcha 5
        "<p>Ume is a slightly more recent one, in the same plaza as Fantasia/Happy Lemon</p> <p>They also have some good fried tofu</p>", // ume 6
        "<p>Teaspoon started in 2015 in Los Altos, and now there's one in Davis and Cupertino</p> <p>Their tea is pretty quality, and they were one of the firsts to have those tall cups lol</p>", // tsp 7
        "<p>Mr. Sun opened up near me very recently, so it's usually quite crowded</p> <p>They make their own boba in house, and have a special drink of green tea + non-alcoholic beer- it's actually pretty good!</p>",  // mr sun 8
        "<p>T4 is another place that's surrounded by other tea places</p> <p>It's a little further, but makes for a good bike ride, and they have tofu as well</p>",  // t4 9
        "<p>Chick & Tea is a Taiwanese soul food place with good tea as well</p> <p>Sometimes my dad/youngest brother will pick it up after biking</p>"   // chickntea 10
    ];
    ///////////////////
    // button functs //
    ///////////////////


    let pics = document.getElementById('pics');

    let counter = 0;

    const leftButton = document.getElementById('left');
    leftButton.addEventListener('click', function(){
    
        if(counter == 0){
            counter = 6;
        }
        pics.style.transform = `translateX(${counter * -210 + 210}px)`;
        
        counter--;
    });


    const rightButton = document.getElementById('right');
    rightButton.addEventListener('click', function(){
        // if at the end, go to beginning
        if(counter >= 5){
            counter = -1;
        }
        // move 210 px over
        pics.style.transform = `translateX(${counter * -210 - 210}px)`;
        
        counter++;
    });

    /////////////////////////////
    // bottom button pressings //
    /////////////////////////////

    for(let i = 0; i < teas.length; i++){

        teas[i].addEventListener('click', function(){
            console.log('clicked');
            // change bg
            let bg = document.getElementById('bgLogo');
            bg.innerHTML = `<img src = 'images/${logos[i]}'>`
            // change face
            let face = document.getElementById('face');
            face.setAttribute('src', `images/face${i}.png`);
    
            // add tea img
            let tea = document.getElementById('tea');
            tea.innerHTML = `<img src = 'images/${tPics[i]}'>`;
    
            // change txt
            let txt1 = document.querySelector('section');
            txt1.innerHTML = txt[i];
    
        });
    }


}());