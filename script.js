$(document).ready(function () {
    'use strict';
    function randomize() {
        var randomNumber = Math.floor(Math.random() * 15 + 3);
        return randomNumber;
    }
    
    function setRandom() {
        $('.number-place').each(function () {
            $(this).text(randomize());
        });
    }
    
    setRandom();
    
    //Subtraction choose stats and adding to main pool
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
    
    $('#randomize').click(function () {
        $('#point-pool').text('0');
        setRandom();
    });    
});