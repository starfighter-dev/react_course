import React, { useState } from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [ term, setTerm ] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input onChange={(event) => setTerm(event.target.value)} value={term} type="text" />
                </div>
            </form>
        </div>
    )

}

export default SearchBar;