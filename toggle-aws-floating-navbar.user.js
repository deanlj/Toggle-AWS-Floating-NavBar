// ==UserScript==
// @name         Toggle AWS Floating Nav Bar
// @namespace    https://github.com/deanlj
// @version      1.1
// @match        https://aws.amazon.com/*
// @grant        none
// @author       Dean Layton-James
// @description  Toggle the AWS floating nav bar with Ctrl+H, turns it off by default
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const nav = document.getElementById('m-subnav');
    if (!nav) return;

    nav.style.display = 'none';

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'h') {
            nav.style.display = nav.style.display === 'none' ? '' : 'none';
        }
    });
})();
