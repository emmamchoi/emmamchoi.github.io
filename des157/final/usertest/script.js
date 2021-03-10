(function(){
    "use strict";
    console.log("reading js");

    alert("hello! Some tasks: navigate bottom bar, check out the tea places, . ");

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

    // const logos = [
    //     'fantasia.png',     //1
    //     'teaera.png', 
    //     'rareTea.png', 
    //     'happyl.png', 
    //     'gongcha.png',      // 5
    //     'ume.png', 
    //     'teaspoon.png', 
    //     'mrsun.png',
    //     't4.png',
    //     'chick.png'         // 10
    // ];

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

    //////////////
    // template?
    for(let i = 0; i < teas.length; i++){

        teas[i].addEventListener('click', function(){
            console.log('clicked');

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
//      fan.addEventListener('click', function(){
//          let face = document.getElementById('face');
//          face.setAttribute('src', 'images/facePurp.png');
 
//          // add tea img
//          let tea = document.getElementById('tea');
//          tea.innerHTML = "<img src = 'images/fTea.png'>";
 
//          // change txt
//          let txt1 = document.querySelector('section');
//          txt1.innerHTML = "<p>Fantasia's been around a pretty long time lol. It's in a plaza w/ a few other spots</p> <p>Alas, only oolong milk tea, so I get green instead<p> <p>Jasmine Green Tea: Large, 0 sugar, light ice<p>";
 
 
//      });

//      // when click FANTASIA 1
//      const fan = document.getElementById('one');

//      fan.addEventListener('click', function(){
//          let face = document.getElementById('face');
//          face.setAttribute('src', 'images/facePurp.png');
 
//          // add tea img
//          let tea = document.getElementById('tea');
//          tea.innerHTML = "<img src = 'images/fTea.png'>";
 
//          // change txt
//          let txt1 = document.querySelector('section');
//          txt1.innerHTML = "<p>Fantasia's been around a pretty long time lol. It's in a plaza w/ a few other spots</p> <p>Alas, only oolong milk tea, so I get green instead<p> <p>Jasmine Green Tea: Large, 0 sugar, light ice<p>";
 
 
//      });

//     // when click TEAERA 2
//     const te = document.getElementById('two');

//     te.addEventListener('click', function(){
//         let face = document.getElementById('face');
//         face.setAttribute('src', 'images/facePink.png');

//         // add tea img
//         let tea = document.getElementById('tea');
//         tea.innerHTML = "<img src = 'images/teTea.png'>";

//         // change txt
//         let txt1 = document.querySelector('section');
//         txt1.innerHTML = "<p>Tea Era's pretty close to my house, 2nd closest?</p> <p>It and RareTea are actually like right next to each other lol<p> <p>OT: Large | No Sugar | Less Ice<p>";


//     });


//     // when click RARETEA 3
//     const rt = document.getElementById('three');

//     rt.addEventListener('click', function(){
//         let face = document.getElementById('face');
//         face.setAttribute('src', 'images/faceRed.png');

//         // add tea img
//         let tea = document.getElementById('tea');
//         tea.innerHTML = "<img src = 'images/rtTea.png'>";

//         // change txt
//         let txt1 = document.querySelector('section');
//         txt1.innerHTML = "<p>Back in Davis, this was my regular place to go!</p> <p>There's one near my house here as well (but they don't get my order right sometimes xd)<p> <p>Oolong Tea: 0 sugar, less ice ((side note: no milk please!))<p>";


//     });

//     // when click on HAPPYLEMON 4
//     const hl = document.getElementById('four');

//    hl.addEventListener('click', function(){
//         let face = document.getElementById('face');
//         face.setAttribute('src', 'images/faceYell.png');

//         // add tea img
//         let tea = document.getElementById('tea');
//         tea.innerHTML = "<img src = 'images/hlTea.png'>";

//         // change txt
//         let txt1 = document.querySelector('section');
//         txt1.innerHTML = "<p>There's 3 Happy Lemon locations around here</p> <p>They're known for their 'salted cheese foam'~<p> <p><br>Light Oolong Tea: **No Sug **25 ice<p>";

//     });


//     // when click on GONGCHA 5
//     const gc = document.getElementById('five');

//     gc.addEventListener('click', function(){
//         let face = document.getElementById('face');
//         face.setAttribute('src', 'images/faceRed.png');

//         // add tea img
//         let tea = document.getElementById('tea');
//         tea.innerHTML = "<img src = 'images/gcTea.png'>";

//         // change txt
//         let txt1 = document.querySelector('section');
//         txt1.innerHTML = '<p>Gong Cha is the closest tea place to my house, so we frequent it often</p> <p>You can order online for extra convenience!<p> <p><br>Oolong Tea: 0 sugar, 25 ice<p>';

//     });



}());