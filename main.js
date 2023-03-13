
//  || TO MANAGES NAVIGATION TOGGLE-BAR
const toggleBtn = document.querySelector('.toggle-btn');
const dropDownMenu = document.querySelector('.dropdown__list');
const toggleBtnIcon = document.querySelector('.toggle-btn i');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? `fa-solid fa-xmark` : `fa-solid fa-bars`;
}


// || TO MANAGE NAVLINKS IN DIFFERENET DEVICES
const searchBtn = document.querySelector('#search-btn');
const navLinks = document.querySelector('#hide');
const searchText = document.querySelector('#search-text');


searchBtn.addEventListener("mouseover", mouseOver);
searchBtn.addEventListener("mouseout", mouseOut);
searchText.addEventListener("mouseover", mouseOver);
searchText.addEventListener("mouseout", mouseOut);

function mouseOver () {
    navLinks.style.transform = "scale(0)";
}

function mouseOut () {
    navLinks.style.transitionDelay = '0.3s';
    navLinks.style.transform = "scale(1)";
}


//  || TO SHOW IMAGES SLIDE

const slides = document.querySelectorAll('.slide');
let counter = 0;

// This will set position of each image
slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
    // slide.style.bottom = `${index * 100}%`; 
})

// This will call for next image
const goNext = () =>{
    if(counter >= slides.length - 1){
        counter = 0;
        slideImage();
    }
    else{
        counter++;
        slideImage();
    }
}

// This will call for previous image
const goPrev = () =>{
    if(counter < 0){
        counter = slides.length-1;
        slideImage();
    }
    else{
        counter--;
        slideImage();
    }
}

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
        // slide.style.transform = `translateY(${counter * 100}%)`
    })
}

// For automatically image slide
setInterval(()=>{
    if(counter >= slides.length-1){
        counter = 0;
        slideImage();
    }
    else{
        counter++;
        slideImage();
    }
},5000); 

// || IMAGE TYPES SECTION
const moreImages = document.getElementById('more-images');
const moreBtn = document.querySelector('.more-btn');
function showMore (){
    moreImages.classList.toggle('more-image');
    let more = moreImages.classList.contains('more-image');
    moreBtn.innerHTML = more ? "SHOW LESS" : "SHOW MORE";
}
