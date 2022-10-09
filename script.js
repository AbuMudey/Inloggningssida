"use strict";   // info- https://www.w3schools.com/js/js_strict.asp


// HTML-references
const h1 = document.querySelector("#h1");
const form = document.querySelector("#form");
const logout = document.querySelector("#logout");
const login = document.querySelector("#login");     //  - coupled with events/event listeners, otherwise "login" not needed here
// const username = document.querySelector("#username")
// const password = document.querySelector("#password")
// const fel = document.querySelector("#fel");       



// Array - Three username and passwords
let objPeople = [
    {
        usernameArray: "fredrik",   // used declarative property-names ('username' occurred multiple times)
        passwordArray: "12345"  
    },
    {
        usernameArray: "abukar",
        passwordArray: "abukar1"
    },
    {
        usernameArray: "anna",
        passwordArray: "anna1"
    }
]



// Function - search and match
function getInfo(e) {
    
    e.preventDefault();     // info - https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    const usernameEntry = document.getElementById("username").value;
    const passwordEntry = document.getElementById("password").value;
    document.getElementById("form").style.display = "none"
    


    // Explanation: loop array with find > create parameter 'person' to represent each iteration > if entered username/pw matches a user's username/pw from array, run if-block, otherwise run else-block)
    let matchedPerson = objPeople.find(person => usernameEntry == person.usernameArray && passwordEntry == person.passwordArray);

    if(matchedPerson){
        // once logged in, write code to store user-data to localstorage - https://www.w3schools.com/jsrEF/prop_win_localstorage.asp
        // JSON.parse(localStorage.setItem()) .....
        // now, the user will stay logged in even if page is refreshed
        // when logging out (log-out button), add click-event to button and link a function to delete the localstorage-data

        // add "Welcome"-message/page here
        h1.innerText = `${usernameEntry} is logged in - welcome home`
        logout.style.display ="block"
    } 
    else(
        renderFalse()
    )
};



// Function - felmeddelande om användar eller lösen är felaktigt
function renderFalse(){
    h1.innerText="Fel användarnamn och/eller lösenord"
}



// Event listener - button-click
login.addEventListener('click', getInfo);   // - eventlistener for "login"-button

//function for logout
function out(){
    document.getElementById("form").style.display ="block"
    logout.style.display ="none"
    h1.innerText="Välkommen - vänligen logga in ovan"
}
// Event listener for - button-click
logout.addEventListener('click', out);  // Eventlistener för "logout"-button
