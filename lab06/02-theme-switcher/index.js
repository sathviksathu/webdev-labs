/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultColor = () => {
   document.body.className = "";
   
};

const oceanColor = () => {
   document.body.className = "ocean";
   
};

const desertColor = () => {
   document.body.className = "desert";
};

const hicontrastColor = () => {
   document.body.className = "high-contrast";
};


document.querySelector("#default").addEventListener('click', defaultColor);
document.querySelector("#ocean").addEventListener('click', oceanColor);
document.querySelector("#desert").addEventListener('click', desertColor);
document.querySelector("#high-contrast").addEventListener('click', hicontrastColor);