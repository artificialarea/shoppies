import React from 'react';
import Nominee from './Nominee';


export default function NomineeList(props) {
    const { 
        nominations,
        handleDeleteNominee
    } = props;

    return (
        <section className="nominee-list">
            {nominations.map((item, index) => (
                <Nominee 
                    key={item.imdbID + index}
                    item={item}
                    handleDeleteNominee={handleDeleteNominee}
                />
            ))}
        </section>
    )
}

NomineeList.defaultProps = {
    nominations: []
}