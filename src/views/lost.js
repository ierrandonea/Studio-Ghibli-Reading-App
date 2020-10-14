import React from 'react';
import { useHistory } from 'react-router-dom';

const Lost = () => {
    let history = useHistory();
    return (
        <>
            <div className="container-fluid no-gutters mx-0 px-0">
                <div className="jumbotron jumbotron-fluid card rounded-0 bg-dark">
                    <img src="/static/lamp.gif" alt="" className="card-img rounded-0 mb-3" />
                    <div className="card-img-overlay overlay-override d-none d-md-flex flex-column justify-content-around rounded-0 text-white">
                        <h3 className="card-title">I think you may be lost</h3>
                        <div>
                            <h4>let's go back...</h4>
                            <span className="btn btn-light w-25 mt-2" onClick={() => { history.push("/") }}>Go back home</span>
                        </div>
                    </div>
                    <div className="d-flex d-md-none flex-column justify-content-around rounded-0 text-white">
                        <h4 className="card-title mb-3">I think you may be lost</h4>
                        <h4>let's go back...</h4>
                        <span className="btn btn-outline-light mt-2 w-75 mx-auto" onClick={() => { history.push("/") }}>Go back home</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lost;