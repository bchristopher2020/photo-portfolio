const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger")
const links = nav.querySelectorAll("a")

function darkFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open")
    burger.classList.toggle("toggle")

})


links.forEach(link => {
    link.addEventListener("click" ,() => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");


    })

})

var modal = document.getElementById('myModal');
var i;
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){

    modal.style.display = "block";
       modalImg.src = this.src;

 }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}