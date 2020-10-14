import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const CharacterCard = character => {
    const { actions } = useContext(Context);
    const [state, setState] = useState(" d-none");
    return (
        <div className="card mt-2 card-thumbnail" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <img src={`/static/people/${character.character.id}.jpg`} className="card-img img-fluid" alt="..." />
            <div className={"card-img-overlay text-white flex-column justify-content-between animate__animated" + state}>
                <div>
                    <h6 className="card-title">{character.character.name}</h6>
                    <p className="card-text">{character.character.age}</p>
                    <p className="card-text">{character.character.gender}</p>
                </div>
                <button type="button" className="btn btn-sm btn-outline-light" data-toggle="modal" data-target="#characterModal" onClick={() => actions.getPeopleDetails(character.character.id)}>
                    See more
                </button>
            </div>
        </div>
    )
}

export default CharacterCard;