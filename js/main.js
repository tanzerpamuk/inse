'use strict';

window.addEventListener('load', init);

function init() {
  window.logon.addEventListener('click', loginClicked);
}


// test function to ensure the QUnit tests are working properly
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};

async function loginClicked() {
  const logmein = '/api/login';
  const response = await fetch(logmein);

  // CODE TO BE ADDED HERE

  let username = document.getElementById("usernamein").value;
  let password = document.getElementById("passwordin").value;
  console.log("username: " + username)
  console.log("password: " + password)
}
