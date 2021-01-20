const orm = require('../config/orm.js');

// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
}});

document.getElementById("enter").addEventListener("click", function(){
  window.location.replace("/signup")
});
