$(document).ready(function () {
    'use strict';
    
    //function randomize value between 3 and 18
    function randomize() {
        var randomNumber = Math.floor(Math.random() * 15 + 3);
        return randomNumber;
    }
    
    //function set random value for each abilities
    function setRandom() {
        $('.number-place').each(function () {
            $(this).text(randomize());
        });
    }
    
    //Subtraction choose stats 
    //&& Adding to main pool
    $('.minus').click(function () {
        var poolPoints = $('#point-pool').text(),
            poolPointstoNumber = Number(poolPoints),
            getID = $(this).parent().attr('id'),
            getRightNumberPlace = $('#'+ getID).find('.number-place'),
            getText = $(getRightNumberPlace).text(),
            setNumber = Number(getText);
        setNumber--;
        poolPointstoNumber++;
        
        if (setNumber < 3 || poolPointstoNumber === -1) {
            return false;
        } else {
            $(getRightNumberPlace).text(setNumber);
            $('#point-pool').text(poolPointstoNumber);
        } 
    });
    
    //Adding choose stats 
    //&& Subtractioning from main pool
    $('.plus').click(function() {
        var poolPoints = $('#point-pool').text(),
            poolPointstoNumber = Number(poolPoints),
            getID = $(this).parent().attr('id'),
            getRightNumberPlace = $('#' + getID).find('.number-place'),
            getText = $(getRightNumberPlace).text(),
            setNumber = Number(getText);
        setNumber++;
        poolPointstoNumber--;
        
        if (setNumber > 18 || poolPointstoNumber < 0) {
            return false;
        } else {
            $(getRightNumberPlace).text(setNumber);
            $('#point-pool').text(poolPointstoNumber);
        } 
    });
    
    //Randomize start abilities value web webpage is loaded
    setRandom();
    
    //Click on Reroll button set new randomize value fo each stats
    //&& reset main abilities point
    $('#randomize').click(function () {
        $('#point-pool').text('0');
        setRandom();
    });    
});