import React from 'react';


export default function Nominee(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Poster: image
    } = props.item;

    const {
        handleDeleteNominee,
    } = props;

    return (
        <div className="nominee-item">
            <div className="info">
                {(image !== 'N/A')
                    ? <img className="image" src={image} alt={`Poster of ${title}`} />
                    : <div className="no-image" />
                }
            </div>
            <div>
                <span className="title">{title}</span>
                <span className="year">({year})</span>
            </div>
            <button 
                className="delete"
                id={id}
                onClick={(event) => handleDeleteNominee(event)}
            >
                Remove
            </button>
        </div>
    )
}

Nominee.defaultProps = {
    item: {}
}