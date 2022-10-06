const h1 = document.querySelector("#h1");
const form = document.querySelector("#form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector("#button");
const fel = document.querySelector("#fel");
const body = document.querySelector("#body");
//const logout = document.querySelector("#logout");

// Three username and passwords
let objPeople = [

    {
        username: "fredrik",
        password: "12345",
    },

    {
        username:"abukar",
        password: "12345",
    },
    {
        username:"anna",
        password:"12345",
    },
]

 function getInfo() {
   let username = document.getElementById("username").value
   let password = document.getElementById("password").value
   document.getElementById("button").innerText = "Logga ut";
   document.getElementById("form").style.display ="none"
   document.getElementById("h1").innerText = "Välkommen";
   
   
   

// loop

   for (i = 0; i < objPeople.length; i++) {

    if(username == password[i] .username && password == username[i].
        password){
            console.log(username + " is logged in !!!")

        }else {
            console.log("incorrect username or password")
            document.getElementById("fel"). innerText ="Fel användernamn eller lösenord"
        }

   }
console.log("incorrect username or password")


}; 

// jag vill visa fram min form när jag klickar på logout
function onclick (){
    button.addEventListener("click, function")
    document.getElementById("form")

}

localStorage.setItem("username", "fredrik");
document.getElementById("username");


