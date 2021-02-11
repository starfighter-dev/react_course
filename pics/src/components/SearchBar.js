import React from 'react'

class SearchBar extends React.Component {
    // event is usual JS object
    state = {
        term: ''
    }

    // Arrow functions get bound automatically so that this
    onFormSubmit = (e) => {
        e.preventDefault(); // don't submit the form
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;