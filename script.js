document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var statsFields = document.querySelectorAll('.number-place'),
        minusBtn = document.querySelectorAll('.minus'),
        plusBtn = document.querySelectorAll('.plus'),
        randomizeBtn = document.querySelector('#randomize'),
        pointPoolField = document.querySelector('#point-pool'),
        storeBtn = document.querySelector('#store-stats'),
        recallBtn = document.querySelector('#recall-stats'),
        oneStatsField = `${statsFields[0].classList[1]}`,
        getStats = document.querySelectorAll('.statiscits');
    
    //Declare variables whos will be updated after button store will be clicked
    var getStrStats,
        getDexStats,
        getConStats,
        getIntStats,
        getWisStats,
        getChaStats,
        getPoolStats;
    
    //function randomize value between 3 and 18
    function randomize() {
        let randomNumber = Math.floor(Math.random() * 15 + 3);
        return randomNumber;
    }
    
    //function set random value for each abilities   
    function setRandom() {     
        for (let i = 0; i < statsFields.length; i++) {
            let statsVal = document.createTextNode(randomize());
    
            statsFields[i].innerHTML = '';
            statsFields[i].appendChild(statsVal);
        }
    }
    
    //Subtraction choose stats 
    //&& Adding to main pool
    Array.from(minusBtn).forEach(function (element) {
        element.addEventListener('click', function () {
            var poolPoints = pointPoolField.innerHTML,
                poolPointstoNumber = Number(poolPoints),
                getID = this.parentNode.id,
                getRightNumberPlace = document.querySelector(`#${getID} .${oneStatsField}`), 
                getText = getRightNumberPlace.innerHTML,
                setNumber = Number(getText);
            
             setNumber--;
             poolPointstoNumber++;
        
            if (setNumber < 3) {
                return false;
            } else {
                getRightNumberPlace.innerHTML = setNumber;
                pointPoolField.innerHTML = poolPointstoNumber;
            } 
        });                         
    });
    
    //Adding choose stats 
    //&& Subtractioning from main pool
    Array.from(plusBtn).forEach(function (element) {
        element.addEventListener('click', function() {
            var poolPoints = pointPoolField.innerHTML,
                poolPointstoNumber = Number(poolPoints),
                getID = this.parentNode.id,
                getRightNumberPlace = document.querySelector(`#${getID} .${oneStatsField}`),
                getText = getRightNumberPlace.innerHTML,
                setNumber = Number(getText);
            
             setNumber++;
             poolPointstoNumber--;
            
            if (setNumber > 18 || poolPointstoNumber < 0) {
                return false;
            } else {
                getRightNumberPlace.innerHTML = setNumber;
                pointPoolField.innerHTML = poolPointstoNumber;
            } 
        });
    });
       
    //Randomize start abilities value web webpage is loaded
    setRandom();
      
    //Click on Reroll button set new randomize value fo each stats
    //&& reset main abilities point   
    randomizeBtn.addEventListener('click', function () {
        pointPoolField.innerHTML = 0;
        setRandom();
    });
    
    //Store stats when store-stats button is clicked
    //&& after click on this button recall button is enabled // prevent crash
    storeBtn.addEventListener('click', function () { 
         
        getStrStats = getStats[0].children[0].innerHTML;
        getDexStats = getStats[1].children[0].innerHTML;        
        getConStats = getStats[2].children[0].innerHTML;
        getIntStats = getStats[3].children[0].innerHTML;
        getWisStats = getStats[4].children[0].innerHTML;
        getChaStats = getStats[5].children[0].innerHTML;
        getPoolStats = pointPoolField.innerHTML;
        recallBtn.removeAttribute('disabled');
    });
    
    //Recall stats when recall-button is clicked
    recallBtn.addEventListener('click', function () {
        var setStats = [getStrStats, getDexStats, getConStats, getIntStats, getWisStats, getChaStats];
        
        setStats.forEach(function(element, i) {
            statsFields[i].innerHTML = setStats[i];
        });
    
        pointPoolField.innerHTML = getPoolStats;
    });
    
});