
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

// || SEARCHING FUNCTIONALITY OF IMAGES (for search btn1)
function searchImage(){
   let image = document.querySelector('#search-text').value;
   let type = image.toLowerCase();

   if(type == 'animal' || type == 'animals')
   {
       window.location.href = './Image_websites/animals.html';
   }
   if(type == 'children' || type == 'childrens')
   {   
       window.location.href = './Image_websites/childrens.html';
   }
   if(type == 'color' || type == 'colors')
   {   
       window.location.href = './Image_websites/colors.html';
   }
   if(type == 'conifer' || type == 'conifers')
   {   
       window.location.href = './Image_websites/conifer.html';
   }
   if(type == 'fastion' || type == 'fastions')
   {   
       window.location.href = './Image_websites/fastion.html';
   }
   if(type == 'flower' || type == 'flowers')
   {   
       window.location.href = './Image_websites/flower.html';
   }
   if(type == 'food' || type == 'foods')
   {   
       window.location.href = './Image_websites/food.html';
   }
   if(type == 'fastival' || type == 'fastivals')
   {   
       window.location.href = './Image_websites/fastivals.html';
   }
   if(type == 'house' || type == 'houses')
   {   
       window.location.href = './Image_websites/house.html';
   }
   if(type == 'model' || type == 'models')
   {   
       window.location.href = './Image_websites/model.html';
   }
   if(type == 'mountain' || type == 'mountains')
   {   
       window.location.href = './Image_websites/mountains.html';
   }
   if(type == 'nature' || type == 'natures')
   {   
       window.location.href = './Image_websites/nature.html';
   }
   if(type == 'people' || type == 'peoples')
   {   
       window.location.href = './Image_websites/people.html';
   }
   if(type == 'traveling' || type == 'travelings')
   {   
       window.location.href = './Image_websites/travelings.html';
   }
   if(type == 'tree' || type == 'trees')
   {   
       window.location.href = './Image_websites/trees.html';
   }
   if(type == 'vehicle' || type == 'vehicles')
   {   
       window.location.href = './Image_websites/vehicles.html';
   }
   if(type == 'vintage' || type == 'vintages')
   {   
       window.location.href = './Image_websites/vintage.html';
   }
   if(type == 'workspace' || type == 'workspaces')
   {   
       window.location.href = './Image_websites/workspace.html';
   }
   else{
    alert('not found...')
   }
}


// || SEARCHING FUNCTIONALITY OF IMAGES (for search btn2)
function searchImage2(){
    let image = document.querySelector('#search-text2').value;
    let type = image.toLowerCase();
 
    if(type == 'animal' || type == 'animals')
    {
        window.location.href = './Image_websites/animals.html';
    }
    if(type == 'children' || type == 'childrens')
    {   
        window.location.href = './Image_websites/childrens.html';
    }
    if(type == 'color' || type == 'colors')
    {   
        window.location.href = './Image_websites/colors.html';
    }
    if(type == 'conifer' || type == 'conifers')
    {   
        window.location.href = './Image_websites/conifer.html';
    }
    if(type == 'fastion' || type == 'fastions')
    {   
        window.location.href = './Image_websites/fastion.html';
    }
    if(type == 'flower' || type == 'flowers')
    {   
        window.location.href = './Image_websites/flower.html';
    }
    if(type == 'food' || type == 'foods')
    {   
        window.location.href = './Image_websites/food.html';
    }
    if(type == 'fastival' || type == 'fastivals')
    {   
        window.location.href = './Image_websites/fastivals.html';
    }
    if(type == 'house' || type == 'houses')
    {   
        window.location.href = './Image_websites/house.html';
    }
    if(type == 'model' || type == 'models')
    {   
        window.location.href = './Image_websites/model.html';
    }
    if(type == 'mountain' || type == 'mountains')
    {   
        window.location.href = './Image_websites/mountains.html';
    }
    if(type == 'nature' || type == 'natures')
    {   
        window.location.href = './Image_websites/nature.html';
    }
    if(type == 'people' || type == 'peoples')
    {   
        window.location.href = './Image_websites/people.html';
    }
    if(type == 'traveling' || type == 'travelings')
    {   
        window.location.href = './Image_websites/travelings.html';
    }
    if(type == 'tree' || type == 'trees')
    {   
        window.location.href = './Image_websites/trees.html';
    }
    if(type == 'vehicle' || type == 'vehicles')
    {   
        window.location.href = './Image_websites/vehicles.html';
    }
    if(type == 'vintage' || type == 'vintages')
    {   
        window.location.href = './Image_websites/vintage.html';
    }
    if(type == 'workspace' || type == 'workspaces')
    {   
        window.location.href = './Image_websites/workspace.html';
    }
    else{
        alert('not found...')
       }
}
