import React from 'react';


export default function ResultItem(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: image
    } = props.item;

    return (
        <li className="result-item">
            <div className="info">
                {/* <img className="image" src={image} alt={`Poster of ${title}`} /> */}
                <span className="title">{title}</span>
                <span className="year">({year})</span>
            </div>
            <button className="nominate">Nominate</button>
        </li>
    )
}

ResultItem.defaultProps = {
    item: {}
}