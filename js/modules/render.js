class ArtistsHome {
  constructor(data) {
    this.data = data;
  }

  addArtitstHome() {
    for (let i = 0; i < this.data.length; i++) {
      const listArtist = document.querySelector('.home-content-1__ul');
      const anchorArtist = document.createElement('a');
      anchorArtist.setAttribute('href', `view-artist.html?artistId=${this.data[i].id}`);
      const liArtist = document.createElement('li');
      liArtist.setAttribute('class', 'home-content-1__li');
      liArtist.setAttribute('id', `${this.data[i].id}`);
      listArtist.appendChild(anchorArtist);
      anchorArtist.appendChild(liArtist);

      const imageArtist = document.createElement('img');
      imageArtist.setAttribute('src', `${this.data[i].image}`);
      imageArtist.setAttribute('class', 'home-content-1__img');
      liArtist.appendChild(imageArtist);

      const nameArtist = document.createElement('h3');
      nameArtist.setAttribute('class', 'home-content-1__h3');
      liArtist.appendChild(nameArtist);
      nameArtist.innerHTML = `${this.data[i].name}`;
    }
  }
}
export default ArtistsHome;
