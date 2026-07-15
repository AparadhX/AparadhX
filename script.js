// AparadhX Welcome Animation

window.onload = function(){

    console.log("Welcome to AparadhX");

};


// Button Click Effect

const button = document.querySelector("button");

button.addEventListener("click", function(){

    alert("Latest Crime Episodes Coming Soon!");

});


// Smooth Scroll Effect

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

    });

});const search = document.getElementById("searchBox");

search.addEventListener("keyup", function(){

console.log("Searching:", search.value);

});window.addEventListener("load",()=>{

document.querySelector(".loader").style.display="none";

});