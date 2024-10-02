//side bar

let menubaricon = document.getElementById("menubar-icon")
let sidebar = document.getElementById("sidebar")


menubaricon.addEventListener("click", function(){
    event.preventDefault();
    sidebar.style.marginLeft = "0px"
})

let sideicon = document.getElementById("side-close__icon").addEventListener("click", () => {
    document.getElementById("sidebar").style.marginLeft = "-50%"
})

//Projects

document.getElementById('clickableImage1').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/Greenden-Tailwind/'; 
});

document.getElementById('clickableImage2').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/Udemy-Clone/'; 
});

document.getElementById('clickableImage3').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/Nostra-Website-clone/'; 
});

document.getElementById('clickableImage4').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/BookNook/'; 
});

document.getElementById('clickableImage5').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/Subscription-Page/'; 
});

document.getElementById('clickableImage6').addEventListener('click', function() {
    window.location.href = 'https://aasiacoder.github.io/Reester/';
});

//Footer Section
document.getElementById('linkedin').addEventListener('click', function(){
    window.location.href = 'https://www.linkedin.com/in/aasia-frontenddeveloper/';
})

document.getElementById('github').addEventListener('click', function(){
    window.location.href = 'https://github.com/Aasiacoder';
})