import React from 'react';

const Card = () => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/temp_robot?size=200x200" alt="robot friend" />
            <div>
                <h2>Alex Friend</h2>
                <p>alexfriend@email.com</p>
            </div>
        </div>
    );
};

export default Card;
