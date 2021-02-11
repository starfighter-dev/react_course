import { combineReducers } from 'redux'

const songsReduced = () => {
    return [
        {
            title: 'Welcome to the Jungle',
            duration: '4:05'
        },
        {
            title: 'It\'s so Easy',
            duration: '2:30'
        },
        {
            title: 'Mr Brownstone',
            duration: '3:30'
        },
        {
            title: 'My Michelle',
            duration: '9:99'
        }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
   if ( action.type === 'SONG_SELECTED' ) {
       return action.payload
   }
   return selectedSong
}

export default combineReducers({
    songs: songsReduced,
    selectedSong: selectedSongReducer
})