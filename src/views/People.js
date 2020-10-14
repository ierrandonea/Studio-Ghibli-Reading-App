import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ModalChars from '../components/modalCharacters';
import CharacterCard from '../components/characterCard';

const People = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <ModalChars />
            <div className="container-fluid bg-white pb-4 d-flex flex-wrap">
                {
                    !!store.people &&
                    store.people.map((person, index) => {
                        return (
                            <CharacterCard character={person} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default People;





