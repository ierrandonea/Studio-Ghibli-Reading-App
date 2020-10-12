import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ModalChars from '../components/modalCharacters';

const People = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid">
            <div className="card-deck d-flex my-0">
                {
                    !!store.people &&
                    store.people.map((character, index) => {
                        return (
                            <>
                                <ModalChars />
                                <div className="card-thumbnail mt-2" key={index}>
                                    <div className="card">
                                        <img src={`/static/people/${character.id}.jpg`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body border-top border-2 border-dark py-2 px-3" >
                                            <h6 className="card-title">{character.name}</h6>
                                            <p className="card-text mt-n2">{character.age}</p>
                                            <p className="card-text text-muted mt-n2">{character.gender}</p>
                                            <button type="button" className="btn btn-sm btn-secondary" data-toggle="modal" data-target="#exampleModal2" onClick={() => actions.getPeopleDetails(character.id)}>
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

export default People;





