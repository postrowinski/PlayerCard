document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var statsFields = document.querySelectorAll('.number-place'),
        minusBtn = document.querySelectorAll('.minus'),
        plusBtn = document.querySelectorAll('.plus'),
        randomizeBtn = document.querySelector('#randomize'),
        pointPoolField = document.querySelector('#point-pool'),
        storeBtn = document.querySelector('#store-stats'),
        recallBtn = document.querySelector('#recall-stats'),
        oneStatsField = `.${statsFields[0].classList[1]}`, // .number-place
        getStats = document.querySelectorAll('.statiscits');
    
    class Stats {
        construct(str, dex, con, int, wis, cha, pool) {
            this.str = str;
            this.dex = dex;
            this.con = con;
            this.int = int;
            this.wis = wis;
            this.cha = cha;
            this.pool = pool;
        }
        
        store() {
            this.str = statsFields[0].innerHTML;
            this.dex = statsFields[1].innerHTML;        
            this.con = statsFields[2].innerHTML;
            this.int = statsFields[3].innerHTML;
            this.wis = statsFields[4].innerHTML;
            this.cha = statsFields[5].innerHTML;
            this.pool = pointPoolField.innerHTML;
        }
        
        recall() {
            statsFields[0].innerHTML = this.str;
            statsFields[1].innerHTML = this.dex;
            statsFields[2].innerHTML = this.con;
            statsFields[3].innerHTML = this.int;
            statsFields[4].innerHTML = this.wis;
            statsFields[5].innerHTML = this.cha;
            pointPoolField.innerHTML = this.pool;
        }    
    };
    
    var stats = new Stats();
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
                getRightNumberPlace = document.querySelector(`#${getID} ${oneStatsField}`), 
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
                getRightNumberPlace = document.querySelector(`#${getID} ${oneStatsField}`),
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
       
    //Randomize start abilities value when webpage is loaded
    setRandom();
      
    //Click on reroll button set new randomize value fo each stats
    //&& reset main abilities point   
    randomizeBtn.addEventListener('click', function () {
        pointPoolField.innerHTML = 0;
        setRandom();
    });
    
    //Store stats when store-stats button is click
    //&& after click on recall button this element will be enabled // prevent crash
    storeBtn.addEventListener('click', function () { 
        stats.store();
        recallBtn.removeAttribute('disabled');
    });
    
    //Recall stats when recall-button is click
    recallBtn.addEventListener('click', function () {
        stats.recall();
    });   
});