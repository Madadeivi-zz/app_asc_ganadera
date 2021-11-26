const clientId = 'e_NvpQK74odWEObXu7r67lhXsjGOFSUF0eJtUunWu24';
const topic = 'piglets';
const endpoint = `https://api.unsplash.com/search/photos?query=${topic}&orientation=landscape&client_id=${clientId}`;

async function getImages() {
    try {
        let response = await fetch(endpoint);
        let jsonResponse = await response.json();
        let imagesList = await jsonResponse.results;
    } catch (err) {
    }

}

export function createImages(imagesList) {
    for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        document.body.appendChild(image);
    }
}