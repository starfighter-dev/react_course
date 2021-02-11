import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

// we want to import a NAMED export...
// if it's a named export, need braces!
//mport { selectSong } from '../actions'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App