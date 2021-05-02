import React from 'react';

export default function Search (props) {
    const { 
        query,
        handleQueryChange, 
    } = props;

    return (
        <section className="search">
            <form>
                <label htmlFor="query">Movie Title</label>
                <input 
                    type="text"
                    id="query"
                    className="input"
                    value={query}
                    onChange={(event) => handleQueryChange(event)}
                />
            </form>
        </section>
    )
}