// ==UserScript==
// @name         Twitch Auto Points Claimer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Get Simple floating chest
// @author       Bash62
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var numPoints = 0;
    var compteurAsLoaded = false;
    var label = document.createElement("p");



    function checkPage(){
        if(document.body.contains(document.getElementsByClassName('community-points-summary')[0])){
            if(document.body.contains(document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0])){
                              var boutton = document.getElementsByClassName('tw-button tw-button--success tw-interactive')[0];
                              boutton.click();
                              numPoints+=50;
                              updateCompteur();

                                      }

        }
    }

    function updateCompteur(){
        label.innerHTML = "+" + numPoints.toString();

    }


    function setCompteur(){
        compteurAsLoaded = true;
        var base = document.getElementsByClassName("tw-align-items-center tw-flex tw-flex-wrap tw-full-width tw-justify-content-end tw-mg-l-1 tw-mg-t-05")[0];

        label.innerHTML = "+" + numPoints.toString();
        base.appendChild(label);

    }



    function main() {
        setTimeout(function() {

            if(!compteurAsLoaded){
             setCompteur();
            }

            checkPage();
            main();



        }, 10000);
    }

    main();

})();