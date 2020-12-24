// ==UserScript==
// @name         Github News Unfold
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       LovelyWei
// @match        https://github.com/
// @grant        none
// ==/UserScript==
 
const unfold = () =>{
    const detailsContainerSelector = 'div.Details.js-details-container.js-news-feed-event-group';
    const detailsContainer = Array.from(document.querySelectorAll(detailsContainerSelector));
 
    if (detailsContainer.length !== 0) {
        for (let i = 0; i < detailsContainer.length; i += 1) {
            const element = detailsContainer[i];
            element.classList.add('Details--on');
        }
    }
}
 
const init = () => {
    const target = document.getElementsByClassName('news')[0];
 
    const observer = new MutationObserver(() => {
        unfold();
    });
 
    observer.observe(target, {
        attributes: true,
        childList: true,
        characterData: true,
    });
};
 
(function() {
    'use strict';
    init();
})();
