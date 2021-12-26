// Credentials
const API_KEY = "AIzaSyAG2d9eQ7DQwhSSzJwy7zNPSz1H8vmhq78"
const CHANNEL_ID = "UC3iCUuSl4NWxAcVgsS7PIlQ"
const MAX_RESULT = 16
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULT}`


// DOM Elements
const videoShowcase = document.getElementById("videos")
const year = document.getElementById('year')

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await fetch(URL)
        const data = await res.json()
        videoShowcase.innerHTML = ""
        console.log(data)

        data.items.forEach((video) => {
            videoShowcase.innerHTML += `
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <div class="video" style="background-image: url(${video.snippet.thumbnails.high.url})"></div>
            </a>
        `
        })
    } catch(error) {
        console.log(error)
        console.log(error.response)
    }

})


window.addEventListener('load', () => {
    const now = new Date()
    year.innerHTML = now.getFullYear()
})