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

    let toTop = document.getElementById('toTop');
    let topP = document.getElementById('yeehaw');
    toTop.addEventListener('click', function(){
        topP.scrollIntoView();
    });



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
        var myText = `You get on your horse and make your way to ${words[0]} ranch. On your way over, you run into a ${words[1]}. ${words[2]}! You might get there a bit late. However, after giving your hourse ${words[3]}, its favorite food, you're all good to go again.`;
        
        
        myArticle.innerHTML = myText;  


    }

 
}());