//Function modal are you sure with your changes
const openModalChanges = document.getElementById('btn-modal-changes--open');
openModalChanges.addEventListener('click', function(){
    const overlayChanges = document.getElementsByClassName("modal__overlay-changes");
    overlayChanges[0].style.display = 'block';
    return false
})
const closeModalChanges = document.getElementsByClassName('btn-modal-changes--close');
closeModalChanges[0].addEventListener('click', function(){
    const overlayChanges = document.getElementsByClassName("modal__overlay-changes");
    overlayChanges[0].style.display = 'none' ;
    return false
})
