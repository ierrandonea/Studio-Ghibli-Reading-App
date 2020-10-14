import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ModalChars = id => {
    const { store } = useContext(Context);

    return (
        !!store.peopleDetails &&
        <div className="modal fade" id="characterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0 my-0">
                        <button type="button" className="close my-n4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-6 text-center">
                                    <img src={`/static/people/${store.peopleDetails.id}.jpg`} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-12 col-md-6 d-flex flex-column justify-content-between justify-content-md-around mt-4 mt-md-0">
                                    <h6>Name: {store.peopleDetails.name}</h6>
                                    <h6>Gender: {store.peopleDetails.gender}</h6>
                                    <h6>Age: {store.peopleDetails.age}</h6>
                                    <h6>Eye Colour: {store.peopleDetails.eye_color}</h6>
                                    <h6>Hair Colour: {store.peopleDetails.hair_color}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-top-0 my-0">
                        <button type="button" className="btn btn-sm btn-secondary my-n1" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChars;