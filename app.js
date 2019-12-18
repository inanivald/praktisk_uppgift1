const searchInput = document.querySelector("#searchInput");
const resultBox = document.querySelector("#result-box");
const getSearch = async () => {
    const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "398fde3a05msh308a8e39370118dp1b26bdjsneb357ac3324a"
        }
    });
    if (!response.ok) {
        throw new Error(`Response was not OK. Status code: ${response.status}.`);
    }
    return await response.json();
}; 
const renderSearchResult = () => {
    getSearch().then(response => {
        // loop over result
        response.data.forEach(data => {
            const artist = `
                <div class="col mb-4 mt-4">
                    <div class="card bg-light text-dark">
                    <img src="${data.artist.picture}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${data.artist.name} 
                        </div>
                    </div>
                </div>
            `;
            resultBox.innerHTML = artist;
        });
    })
};
getSearch().then(renderSearchResult).catch(err => {
    console.log("Error getting search result!");
});