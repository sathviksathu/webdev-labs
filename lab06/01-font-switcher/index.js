const makeBigger = () => {
   
   var el = document.querySelector('h1');
   var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style);
   document.querySelector("h1").style.fontSize = (fontSize + 1) + 'px';
   


   var el2 = document.querySelector('.content');
   var style2 = window.getComputedStyle(el2, null).getPropertyValue('font-size');
   var fontSize2 = parseFloat(style2);
   document.querySelector(".content").style.fontSize = (fontSize2 + 1) + 'px';
   
};

const makeSmaller = () => {


   var el = document.querySelector('h1');
   var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
   var fontSize = parseFloat(style);
   document.querySelector("h1").style.fontSize = (fontSize - 1) + 'px';
   


   var el2 = document.querySelector('.content');
   var style2 = window.getComputedStyle(el2, null).getPropertyValue('font-size');
   var fontSize2 = parseFloat(style2);
   document.querySelector(".content").style.fontSize = (fontSize2 - 1) + 'px';

};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

