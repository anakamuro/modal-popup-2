const modalBtn = document.querySelector('.modal-btn');
const modalBody = document.querySelector('.modal-body');
const modalBackdrop = document.querySelector('.modalBackdrop');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const body = document.querySelector('body');


modalBtn.addEventListener("click", function(){
   modal.classList.remove('hide')
   modalBackdrop.style.display = "block"
   modalBody.style.backgroundColor = "white"
//    body.style.backdropFilter = "blur(10px)"
})

close.addEventListener("click", function(){
    modal.classList.add('hide')
    modalBackdrop.style.display = "none"
 })