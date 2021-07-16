import ArtistsHome from "./render.js";

function fetchArtist() {
    fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {
        const profileArtist = new ArtistsHome(data);
        profileArtist.addArtitstHome();
})
}
export {fetchArtist}