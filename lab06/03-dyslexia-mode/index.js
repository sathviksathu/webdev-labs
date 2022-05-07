/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggleDyslexia = () => {
  if (document.body.className === "") {
    document.body.className = "dyslexia-mode";
  } else {
    document.body.className = "";
  }
};
 


document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDyslexia);