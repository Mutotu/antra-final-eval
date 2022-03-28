const search = document.querySelector(".searchArtist");
const searchButton = document.querySelector(".search-button");
const sectionList = document.querySelector(".section-list");
async function searchArtist(artist) {
  const response = fetch(`https://itunes.apple.com/search?term=${artist}`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      renderCardList(json);
    });
}

searchButton.addEventListener("click", () => {
  searchArtist(search.value);
});

function generateCard(artist) {
  return `<div class='artist-card' id='${artist.artistId}'>
  <img src='${artist.artworkUrl100}' />
    <p>Name:'${artist.artistName}' </p>
    <p>Track name:'${artist.trackName}'</p>
    <audio controls>
  <source src="${artist.previewUrl}" >
 
  Your browser does not support the audio element.
</audio>
  </div>`;
}

function renderCardList(artists) {
  return artists.results.map((artist) => {
    let generatedCard = generateCard(artist);
    insertIntoHtml(generatedCard);
  });
}

function insertIntoHtml(data) {
  sectionList.insertAdjacentHTML("afterbegin", data);
}
