var myCarousel = document.getElementById('pages-carousel');
var carousel = new bootstrap.Carousel(myCarousel);


var home = document.getElementById("home");
var about = document.getElementById("about");
var skills = document.getElementById("skills");
var projects = document.getElementById("projects");

home.onclick      =  ()=> {carousel.to(0); console.log(carousel)};
about.onclick     =  ()=> {carousel.to(1)};
skills.onclick    =  ()=> {carousel.to(2)};
projects.onclick  =  ()=> {carousel.to(3)};
