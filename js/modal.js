const openModal = document.getElementById('btn-modal--open');
openModal.addEventListener('click', function(){
    const overlay = document.getElementsByClassName("modal__overlay");
    overlay[0].style.display = 'block';
    return false
})
const closeModal = document.getElementsByClassName('btn-modal--close');
closeModal[0].addEventListener('click', function(){
    const overlay = document.getElementsByClassName("modal__overlay");
    overlay[0].style.display = 'none' ;
    return false
})

