//DOM Selectors
const openBtn = document.querySelector('#open-btn');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', revealModalContainer);
closeBtn.addEventListener('click', hideModalContainer);

function revealModalContainer(){
    modalContainer.classList.add('reveal');
    modalContainer.style.display = 'block';
}
function hideModalContainer(){
    modalContainer.classList.remove('reveal');
    modalContainer.style.display = 'none';
}
window.addEventListener('click',(e) => {
    if(e.target == modalContainer){
        modalContainer.style.display = 'none';
    }
});

