import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// BY ID OR TITLE
// http://www.omdbapi.com?apikey=${config.API-KEY}&t=2001
const mockMovie = {
    "Title": "2001: A Space Odyssey",
    "Year": "1968",
    // "Rated": "G",
    // "Released": "24 Jun 1970",
    // "Runtime": "149 min",
    "Genre": "Adventure, Sci-Fi",
    "Director": "Stanley Kubrick",
    // "Writer": "Stanley Kubrick (screenplay by), Arthur C. Clarke (screenplay by)",
    // "Actors": "Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter",
    "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    // "Language": "English, Russian",
    // "Country": "UK, USA",
    // "Awards": "Won 1 Oscar. Another 15 wins & 11 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.3/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "92%"
        },
        {
            "Source": "Metacritic",
            "Value": "84/100"
        }
    ],
    "Metascore": "84",
    // "imdbRating": "8.3",
    // "imdbVotes": "610,901",
    // "imdbID": "tt0062622",
    // "Type": "movie",
    // "DVD": "06 Feb 2014",
    // "BoxOffice": "$60,405,931",
    // "Production": "Metro Goldwyn Mayer",
    // "Website": "N/A",
    // "Response": "True"
}

// BY SEARCH
// http://www.omdbapi.com?apikey=${config.API-KEY}&s=west
// returns 10 out of 2031 total results
const mockSearch = {
    "Search": [
        {
            "Title": "Once Upon a Time in the West",
            "Year": "1968",
            "imdbID": "tt0064116",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "Title": "A Million Ways to Die in the West",
            "Year": "2014",
            "imdbID": "tt2557490",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SX300.jpg"
        },
        {
            "Title": "Wild Wild West",
            "Year": "1999",
            "imdbID": "tt0120891",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmYyMTc4YjItMGNhNC00OWQwLWJhMWUtNTdjZDgxMDI5MjE2L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "Title": "West Side Story",
            "Year": "1961",
            "imdbID": "tt0055614",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_SX300.jpg"
        },
        {
            "Title": "The West Wing",
            "Year": "1999–2006",
            "imdbID": "tt0200276",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjk3ZWE3ZDctN2Q1YS00NzNhLWFjNmYtZTkwYWQxZmQ3NzM3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "Title": "Slow West",
            "Year": "2015",
            "imdbID": "tt3205376",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTYxNDA5ODk5NF5BMl5BanBnXkFtZTgwNzMwMzIwNTE@._V1_SX300.jpg"
        },
        {
            "Title": "Ingrid Goes West",
            "Year": "2017",
            "imdbID": "tt5962210",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzE3Mzc5NTc4M15BMl5BanBnXkFtZTgwMDYwNzM3MjI@._V1_SX300.jpg"
        },
        {
            "Title": "An American Tail: Fievel Goes West",
            "Year": "1991",
            "imdbID": "tt0101329",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZmUyOTE4YmItN2E0Zi00M2ViLWIxMTctMmZhMDRhMDZhOWZlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        },
        {
            "Title": "Red Rock West",
            "Year": "1993",
            "imdbID": "tt0105226",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzhiMTQxYzMtOWI4NS00NWJiLWE5MDMtMmIzNjMxODNjZjBlXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg"
        },
        {
            "Title": "How the West Was Won",
            "Year": "1962",
            "imdbID": "tt0056085",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDk0Y2NmZWItNjdlMy00YzlmLThkMmUtZmVkOTE2OTBmZjVjXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg"
        }
    ],
    "totalResults": "2031",
    "Response": "True"
};

describe('App', () => {
    it('should render the component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App').exists()).toBe(true);
    });
});