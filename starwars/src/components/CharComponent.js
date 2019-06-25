import React from 'react';
import './StarWars.css';




function CharComponent(props) {
    return (
        <div className="character-card">
            <div className="character-info">
                <h3>{props.charData.name}</h3> 
                <ul>
                    <li>Gender: {props.charData.gender}</li>
                    <li>Height: {props.charData.height}</li>
                    <li>Mass: {props.charData.mass}</li>
                    <li>Birth Year: {props.charData.birth_year}</li>
                </ul>


            </div>

        </div>
    )
}

export default CharComponent;