document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var statsField = document.querySelectorAll('.number-place'),
        minusBtn = document.querySelectorAll('.minus'),
        plusBtn = document.querySelectorAll('.plus'),
        randomizeBtn = document.querySelector('#randomize'),
        pointPoolField = document.querySelector('#point-pool');

    //function randomize value between 3 and 18
    function randomize() {
        var randomNumber = Math.floor(Math.random() * 15 + 3);
        return randomNumber;
    }
    
    //function set random value for each abilities   
    function setRandom() {     
        for (let i = 0; i < statsField.length; i++) {
            let statsVal = document.createTextNode(randomize());
    
            statsField[i].innerHTML = '';
            statsField[i].appendChild(statsVal);
        }
    }
    
    //Subtraction choose stats 
    //&& Adding to main pool
    Array.from(minusBtn).forEach(function(element) {
        element.addEventListener('click', function() {
            var poolPoints = document.querySelector('#point-pool').innerHTML,
                poolPointstoNumber = Number(poolPoints),
                getID = this.parentNode.getAttribute('id'),
                getRightNumberPlace = document.querySelector(`#${getID} .number-place`),
                getText = getRightNumberPlace.innerHTML,
                setNumber = Number(getText);
            
             setNumber--;
             poolPointstoNumber++;
        
            if (setNumber < 3 || poolPointstoNumber === -1) {
                return false;
            } else {
                getRightNumberPlace.innerHTML = setNumber;
                document.querySelector('#point-pool').innerHTML = poolPointstoNumber;
            } 
        });                         
    });
  
    //Adding choose stats 
    //&& Subtractioning from main pool
    Array.from(plusBtn).forEach(function(element) {
        element.addEventListener('click', function() {
            var poolPoints = document.querySelector('#point-pool').innerHTML,
                poolPointstoNumber = Number(poolPoints),
                getID = this.parentNode.getAttribute('id'),
                getRightNumberPlace = document.querySelector(`#${getID} .number-place`),
                getText = getRightNumberPlace.innerHTML,
                setNumber = Number(getText);
            
             setNumber++;
             poolPointstoNumber--;
            
            if (setNumber > 18 || poolPointstoNumber < 0) {
                return false;
            } else {
                getRightNumberPlace.innerHTML = setNumber;
                document.querySelector('#point-pool').innerHTML = poolPointstoNumber;
            } 
        });
    });
       
    //Randomize start abilities value web webpage is loaded
    setRandom();
    
    //Click on Reroll button set new randomize value fo each stats
    //&& reset main abilities point   
    randomizeBtn.addEventListener('click', function() {
        pointPoolField.innerHTML = 0;
        setRandom();
    });
});