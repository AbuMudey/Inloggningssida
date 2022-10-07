
const h1 = document.querySelector("#h1");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const login = document.querySelector("#login");
const fel = document.querySelector("#fel");
const logout = document.querySelector("#logout");



// Three username and passwords
let objPeople = [

    {
        username: "fredrik",
        password: "12345",
    },

    {
        username:"abukar",
        password: "abc123",
    },
    {
        username:"anna",
        password:"anna1",
    },
]

 function getInfo() {
   let username = document.getElementById("username").value
   let password = document.getElementById("password").value
   document.getElementById("h1").innerText ="Välkommen"
   document.getElementById("form").style.display = "none"
   logout.style.display ="block"

// loop
    for(i = 0; i < objPeople.length; i++) {
          if(username == objPeople[i].username && password == objPeople[i].
        password){
            console.log(username + " is logged in !!!")
        } else {
            renderFalse();

        }
    };    
 };

 // felmeddelande om användar eller lösen är felaktigt
 function renderFalse(){
    h1.innerText="fel användarnamn eller lösenord"
 }


