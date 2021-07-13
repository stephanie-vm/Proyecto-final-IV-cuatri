const arrayArtist = await fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
.then((response) => response.json())
.then((data) => {

    return data;
}) ()
console.log(arrayArtist)



export {arrayArtist}