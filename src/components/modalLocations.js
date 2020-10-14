import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const LocationModal = id => {
    const { store } = useContext(Context);

    return (
        !!store.locationDetails &&
        <div className="modal fade" id="locationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <div className="col-12 col-md-10 text-center">
                                    <img src={`/static/locations/${store.locationDetails.id}.jpg`} className="img-fluid" alt="..." />
                                </div>
                                <div className="col-12 col-md-2 d-flex flex-column justify-content-between justify-content-md-around mt-4 mt-md-0 pl-auto pl-md-0">
                                    <h6>Name: {store.locationDetails.name}</h6>
                                    <h6>Climate: {store.locationDetails.climate}</h6>
                                    <h6>Terrain: {store.locationDetails.terrain}</h6>
                                    <h6>Surface Water: {store.locationDetails.surface_water}</h6>
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

export default LocationModal;