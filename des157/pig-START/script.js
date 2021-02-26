(function (){
    'use strict';

    //////////////////
    // for dom elem //
    //////////////////
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');

    var p1Score = document.getElementById('p1');
    var p2Score = document.getElementById('p2');

    var actionArea = document.getElementById('actions');

    ///////////////////
    // game data obj //
    ///////////////////
    var gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        colors: ['#ffc0cb',  '#b0e0e6'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }

    // sounds
    const popSound = new Audio('media/pop.wav');
    const tadaSound = new Audio('media/tada.flac');


    ////////////////////////////////
    // Start game: click to start //
    ////////////////////////////////
    startGame.addEventListener('click', function(){
        // pop start
        popSound.play();
        // set game indx rand:
        gameData.index = Math.round(Math.random());

        // game is now start, add quit button
        gameControl.innerHTML = '<h2>The Game Has Started!</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        // set up turn
        setUpTurn();
    });

    /////////////////
    // Set up turn //
    /////////////////
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the dice</button>';

        rollDice();
    }

    //////////////////
    // rolling dice //
    //////////////////
    function rollDice(){
        actionArea.innerHTML = "";
        game.style.backgroundColor = gameData.colors[gameData.index];

        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}">
        <img src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if snake eyes
        if(gameData.rollSum === 2){
            game.innerHTML += '<p>Oh no, snake eyes</p>';
            gameData.score[gameData.index] = 0;     // score to 0
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // switch
            // show score
            showScore();
            
            setTimeout(setUpTurn, 2000);

        }
        // if one 1
        else if(gameData.roll1 ===1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1); // switch
            game.innerHTML += `<p>One of the rolls was a 1; <br>switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000);
        }
        // if no 1's
        else{
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>'; // roll again or pass

            // roll again? set up another turn
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            // pass?
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1); // switch
                setUpTurn(); // another turn
            })

            checkWin();
        }
        console.log(gameData.rollSum);
    }

    ///////////////////
    // check for win //
    ///////////////////
    function checkWin(){
        // if win?
        if(gameData.score[gameData.index] > gameData.gameEnd){
            // tadaa
            tadaSound.play();
            showScore();
            // who wins?
            game.innerHTML = `<h2><br><br><br>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points~</h2>`;

            // start new game?
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        }
        else{
            // show curr score
            showScore();
        }
    }

    ////////////////
    // show score //
    ////////////////
    function showScore(){
        // show curr score
        // score.innerHTML = `<p>The score is: <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;

        // seperate scores
        // p1:
        p1Score.innerHTML = `<h2>P1</h2><p>score: ${gameData.score[0]}</p>`;
        // p2:
        p2Score.innerHTML = `<h2>P2</h2><p>score: ${gameData.score[1]}</p>`;
    }


}());