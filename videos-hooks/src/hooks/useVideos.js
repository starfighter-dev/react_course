import {useState,useEffect} from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {

    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        doBloomingSearch(defaultSearchTerm)
    },[defaultSearchTerm])

    const doBloomingSearch = async (term) => {
        const response = await youtube.get('/search', { params: { q: term }})
        setVideos(response.data.items)
    }

    return [ videos, doBloomingSearch ]
}

export default useVideos