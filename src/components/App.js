import React, { useState, useEffect } from 'react';

import Search from './Search';
import ResultList from './ResultList';
import mockSearchResults from '../mock/mockSearchResults';

import './App.scss';

export default function App() {
    const [query, setQuery] = useState('');
    const [delayedQuery, setDelayedQuery] = useState(''); // temp test: useEffect.setTimeout
    const [searchResults, setSearchResults] = useState([]);
    const [nominations, setNominations] = useState([]);

    const handleQueryChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setQuery(value);
    }

    const fetchSearchResults = (query) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `${endpoint}?apikey=${apikey}&type=movie&s=${query}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(data => {
                console.log('fetch res:', data);
                if (data.Search) {
                    setSearchResults(data.Search);
                } else {
                    setSearchResults([]);
                }
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }

    useEffect(() => {
        // Delay fetch call until pause in user typing
        // const timeoutID = setTimeout(() => setDelayedQuery(query), 700); // temp test in lieu of fetch
        const timeoutID = setTimeout(() => fetchSearchResults(query), 700);
        return () => clearTimeout(timeoutID);
    }, [query]);

    return (
        <div className="App">
            <header>
                <h1>The Shoppies! {delayedQuery}</h1>
            </header>
            
            <Search 
                query={query}
                handleQueryChange={handleQueryChange}
            />

            <ResultList 
                results={searchResults}
                // results={mockSearchResults.Search} // mock in lieu of fetch
            />
        </div>
    );
}
