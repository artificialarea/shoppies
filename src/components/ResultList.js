import React from 'react';
import ResultItem from './ResultItem';


export default function ResultList(props) {
    const { 
        results,
        handleAddNominee,
        nominations
    } = props;

    return (
        <section className="result-list">
            <ul>
                {results.map((item, index) => (
                    <ResultItem 
                        key={item.imdbID + index}
                        item={item}
                        handleAddNominee={handleAddNominee}
                        nominations={nominations}
                    />
                ))}
            </ul>
        </section>
    )
}

ResultList.defaultProps = {
    results: []
}
