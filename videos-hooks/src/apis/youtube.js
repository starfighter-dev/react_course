import axios from 'axios'

const KEY = 'AIzaSyBp-kFVzE6AS_279W1W-Ga3tB5h-2V0Ads'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})
