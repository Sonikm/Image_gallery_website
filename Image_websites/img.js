
 // || IMAGE TYPES SECTION
 const moreImages = document.getElementById('more-images');
 const moreBtn = document.querySelector('.more-btn');
 function showMore() {
     moreImages.classList.toggle('more-image');
     let more = moreImages.classList.contains('more-image');
     moreBtn.innerHTML = more ? "SHOW LESS" : "SHOW MORE";
 }

 // || LIKE IMAGE AND COLLECT

 const likeBtn = document.querySelectorAll('.fa-heart');
 likeBtn.forEach(like => {
     like.addEventListener('click', (event) => {
         event.target.classList.toggle('btn-color');
     })
 })

 const plusBtn = document.querySelectorAll('.fa-plus');
 plusBtn.forEach(collect => {
     collect.addEventListener('click', (event) => {
         event.target.classList.toggle('btn-color');
     })
 })


