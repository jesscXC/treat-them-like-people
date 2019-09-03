import React from 'react';

const Card = (props) => {
    return (
        // Using tachyons library for fast CSS styling.
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?size=200x200`} alt="robot friend" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
};

export default Card;
