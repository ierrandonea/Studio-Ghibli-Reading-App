import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ModalChars = () => {
    const { store } = useContext(Context);

    return (
        !!store.peopleDetails &&
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close my-n4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 text-center">
                                    <img src={`/static/people/${store.peopleDetails.id}.jpg`} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-around mt-4 mt-md-0">
                                    <h6>Title: {store.peopleDetails.title}</h6>
                                    <h6>Director: {store.peopleDetails.director}</h6>
                                    <h6>Producer: {store.peopleDetails.producer}</h6>
                                    <h6>Year: {store.peopleDetails.release_date}</h6>
                                    <h6>Ratings: {store.peopleDetails.rt_score}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mt-3">
                                    <p>{store.peopleDetails.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary my-n1" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChars;