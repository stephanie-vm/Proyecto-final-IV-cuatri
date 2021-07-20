const items = document.querySelectorAll('.tabs-list-item');
const contenido = document.querySelectorAll('.tab-content-info');

for( let i = 0; i< contenido.length; i++){
    contenido[i].classList.add('js-oculto');
}

contenido[0].classList.remove('js-oculto');
items[0].classList.add('js-activo');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event)=>{
        event.preventDefault();
        const id=event.currentTarget.getAttribute('href').substring(1);
        for (let i = 0; i < contenido.length; i++) {
            contenido[i].classList.add('js-oculto');
            if(contenido[i].getAttribute('id') == id ){
            contenido[i].classList.remove('js-oculto');
            }
        }
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('js-activo');
            
        }
        event.currentTarget.classList.add('js-activo');
    });
    
}