(function(){

    "use strict";
    let myForm = document.querySelector('form');
    let myArticle = document.getElementById('article1');

    myForm.addEventListener('submit', function(event){
        
        event.preventDefault();

        let formData = document.querySelectorAll('input[type = text');
        processData(formData);

        myArticle.scrollIntoView();
        
    });


    // let myDiv = document.querySelector('div');

    // myDiv.addEventListener('submit', function(){
    //     myForm.scrollIntoView();
        
    // });



    // process data funct
    function processData(formData){
        let emptyVals = 0;
        var words = [];
        for(let word of formData){
            if(word.value){
                words.push(word.value);
                word.value = '';
            }else{
                emptyVals++;
            }
        }
        if(emptyVals > 0){
            myArticle.innerHTML = "Please enter words";
        }else{
            makeMadLib(words);
        }
    }

    // put words in madlib    
    function makeMadLib(words){
        var myText = `You get on your ${words[0]} horse and make your way to ${words[1]} ranch. On your way over, you run into a ${words[2]}. ${words[3]}! (might wanna add more)`;
        
        
        myArticle.innerHTML = myText;  


    }

 
}());