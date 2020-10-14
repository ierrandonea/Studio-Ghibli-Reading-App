import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const LocationCard = place => {
    const { actions } = useContext(Context);
    const [state, setState] = useState(" d-none");
    return (
        <div className="card mt-2 card-thumbnail-lg" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <img src={`/static/locations/${place.place.id}.jpg`} className="card-img img-fluid" alt="..." />
            <div className={"card-img-overlay text-white flex-column justify-content-between animate__animated" + state}>
                <div>
                    <h6 className="card-title">{place.place.name}</h6>
                    <p className="card-text">{place.place.terrain}</p>
                </div>
                <button type="button" className="btn btn-sm btn-outline-light" data-toggle="modal" data-target="#locationModal" onClick={() => actions.getLocationDetails(place.place.id)}>
                    See more
                </button>
            </div>
        </div>
    )
}

export default LocationCard;