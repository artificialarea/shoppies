import React, { useState, useEffect } from 'react';

import Search from './Search';
import ResultList from './ResultList';
import mockSearchResults from '../mock/mockSearchResults';


import './App.scss';
import NomineeList from './NomineeList';

export default function App() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [nominations, setNominations] = useState([]);

    const handleQueryChange = (event) => {
        event.preventDefault();
        const { value } = event.target;
        setQuery(value);
    }

    const handleAddNominee = (event) => {
        event.preventDefault();
        const { id } = event.target;
        setQuery('');
        setSearchResults([]);
        fetchMovieDetails(id);
    }

    const handleDeleteNominee = (event) => {
        event.preventDefault();
        const { id } = event.target;
        setNominations(nominations.filter(nominee => nominee.imdbID !== id));
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

    const fetchMovieDetails = (id) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const img_endpoint = process.env.REACT_APP_API_IMG_ENDPOINT;
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `${endpoint}?apikey=${apikey}&i=${id}`;
        const img_url = `${img_endpoint}?apikey=${apikey}&i=${id}`;

        // TODO: 
        // Set up Promise to get img_url, too
        // and replace old "Poster" with better Poster image
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(data => {
                console.log('fetch details res:', data);
                setNominations([...nominations, data])
            })
            .catch(err => {
                console.log('Error:', err);
            })
    }

    // useEffects to retrieve and store localStorage data
    // so nominations remain in a peristant state.
    useEffect(() => {
        const data = localStorage.getItem('data')
        if (data) {
            setNominations(JSON.parse(data))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(nominations))
    });

    // Delay fetch call until there is a pause in user typing
    useEffect(() => {
        const timeoutID = setTimeout(() => fetchSearchResults(query), 700);
        return () => clearTimeout(timeoutID);
    }, [query]);

    return (
        <div className="App">
            <header>
                <h1>The Shoppies!</h1>
            </header>

            <Search
                query={query}
                handleQueryChange={handleQueryChange}
            />

            <ResultList
                results={searchResults}
                handleAddNominee={handleAddNominee}
                nominations={nominations}
            />

            <NomineeList
                nominations={nominations}
                handleDeleteNominee={handleDeleteNominee}
            />
        </div>
    );
}
