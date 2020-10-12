import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Modal from '../components/modal';

const Films = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="card-deck d-flex my-0">
                {
                    !!store.films &&
                    store.films.map((movie, index) => {
                        return (
                            <>
                                <Modal />
                                <div className="card-thumbnail mt-2 view overlay" key={index}>
                                    <div className="card">
                                        <img src={`/static/films/${movie.id}.jpg`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body border-top border-2 border-dark py-2 px-3 mask" >
                                            <h6 className="card-title">{movie.title}</h6>
                                            <p className="card-text mt-n2">{movie.release_date}</p>
                                            <button type="button" className="btn btn-sm btn-secondary" data-toggle="modal" data-target="#exampleModal" onClick={() => actions.getFilmDetails(movie.id)}>
                                                See more
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Films;





