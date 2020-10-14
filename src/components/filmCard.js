import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';

const FilmCard = film => {
    const { actions } = useContext(Context);
    const [state, setState] = useState(" d-none");
    return (
        <div className="card mt-2 card-thumbnail" onMouseOver={() => setState(" d-flex animate__fadeIn")} onMouseLeave={() => setState(" animate__fadeOut d-flex")}>
            <img src={`/static/films/${film.film.id}.jpg`} className="card-img img-fluid" alt="..." />
            <div className={"card-img-overlay text-white flex-column justify-content-between animate__animated" + state}>
                <div>
                    <h6 className="card-title">{film.film.title}</h6>
                    <p className="card-text">{film.film.release_date}</p>
                </div>
                <button type="button" className="btn btn-sm btn-outline-light" data-toggle="modal" data-target="#filmsModal" onClick={() => actions.getFilmDetails(film.film.id)}>
                    See more
                </button>
            </div>
        </div>
    )
}

export default FilmCard;