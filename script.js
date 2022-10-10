"use strict";   //  https://www.w3schools.com/js/js_strict.asp


// HTML-references
const h1 = document.querySelector("#h1");
const form = document.querySelector("#form");
const logout = document.querySelector("#logout");
const login = document.querySelector("#login");     
const username = document.querySelector("#username")
const password = document.querySelector("#password")
// const fel = document.querySelector("#fel");       


// Array - Three username and passwords
let objPeople =  [
    {
        usernameArray: "fredrik",  
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

if (localStorage.getItem("username")) {
renderSuccess()

}


// Function - search and match
function getInfo(e) {
    
    e.preventDefault();     //  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    const usernameEntry = document.getElementById("username").value;
    const passwordEntry = document.getElementById("password").value;
    document.getElementById("form").style.display = "none"
    
   
   

    //to loop array with multiple objects with props, use "find", not regular for-loop + if-stm (only recognized first obj for some reason)
    // Explanation: loop array with find > create parameter 'person' to represent each iteration > if entered username/pw matches a user's username/pw from array, run if-block, otherwise run else-block)
    let matchedPerson = objPeople.find(person => usernameEntry == person.usernameArray && passwordEntry == person.passwordArray);

    if(matchedPerson){
        
          localStorage.setItem("username", usernameEntry );

        // add "Welcome"-message/page here
        
        renderSuccess()
    } 
    else(
        renderFalse()
    )
};


function renderSuccess(){
    const user = localStorage.getItem("username")
    h1.innerText = `${user} is logged in - Welcome`
    logout.style.display ="block"
    document.getElementById("form").style.display="none"
}

//localStorage.setItem("username", JSON.stringify(usernameEntry) );

// Function - felmeddelande om användar eller lösen är felaktigt
function renderFalse(){
    h1.innerText="Fel användarnamn och/eller lösenord"
}

// Event listener - button-click
login.addEventListener('click', getInfo); 


function out(){
    document.getElementById("form").style.display ="block"
    logout.style.display ="none"
    h1.innerText="Välkommen - vänligen logga in ovan"
    localStorage.removeItem("username")
   
    // Erese the form when you have loged out. 
    //Var tvungen att ha med "use strict" längst upp. Annars fungerade inte denna koden
    username.value = "";
    password.value = "";
}

logout.addEventListener('click', out);
