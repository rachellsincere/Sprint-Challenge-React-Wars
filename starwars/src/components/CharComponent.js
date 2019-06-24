import React from 'react';




function CharComponent(props) {
    return (
        <div className="character-card">
            <div className="character-info">
                <h3>{props.charType.name}</h3> 


            </div>

        </div>
    )
}

export default CharComponent;