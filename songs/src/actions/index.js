// action creator, return an action
export const selectSong = (song) => {
    return {
        'type': 'SONG_SELECTED',
        payload: song
    }
}

// names export allows us to export a bunch of stuff