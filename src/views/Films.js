import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Modal from '../components/modal';
import FilmCard from '../components/filmCard';

const Films = () => {
    const { store } = useContext(Context);

    return (
        <>
            <Modal />
            <div className="container-fluid d-flex flex-wrap bg-white pb-4">
                {/* <div className="card-deck d-flex my-0"> */}
                {
                    !!store.films &&
                    store.films.map((movie, index) => {
                        return (
                            <FilmCard film={movie} key={index} />
                        )
                    })
                }
            </div>
            {/* </div> */}
        </>
    )
}

export default Films;





