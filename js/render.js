import { fetchArtist } from "./services.js";
fetchArtist()
class ArtistsHome {
    constructor(data){
        this.data = data;
    }
    addArtitstHome(){
        for (let i = 0; i < this.data.length; i++) {
            const listArtist = document.querySelector('.home-content-1__ul');
            const liArtist = document.createElement('li');
            liArtist.setAttribute('class', 'home-content-1__li');
            listArtist.appendChild(liArtist);

            const imageArtist = document.createElement('img');
            imageArtist.setAttribute('src', `${this.data[i].image}`);
            imageArtist.setAttribute('class', 'home-content-1__img');
            listArtist.appendChild(imageArtist);
            
            
            const nameArtist = document.createElement('h3');
            nameArtist.setAttribute('class', 'home-content-1__h3');
            listArtist.appendChild(nameArtist)
            nameArtist.innerHTML = `${this.data[i].name}`

        }
    }
}
export default ArtistsHome