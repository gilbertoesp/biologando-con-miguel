const URL = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDIbNehBL5ReuW9mxBmWdiQ&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'f68e1eca44msh61ca44de82bdf84p1db25cjsn635a57ada27d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = response.json();
    return data; 
}

    // IIFE
(async () => {
    try {
        const videos = await fetchData(URL)
        // template
        let view = `
        ${videos.items.map(video => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
              </h3>
            </div>
          </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
      console.log(error);
      alert("YouTube doesn't connect")
    }
})();
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }