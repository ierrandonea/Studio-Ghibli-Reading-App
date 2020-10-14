import React from 'react';
import { useHistory } from 'react-router-dom';

const Lost = () => {
    let history = useHistory();
    return (
        <>
            <div className="container-fluid no-gutters mx-0 px-0">
                <div className="jumbotron jumbotron-fluid card rounded-0 bg-dark">
                    <img src="/static/lamp.gif" alt="" className="card-img rounded-0 my-n5" />
                    <div className="card-img-overlay overlay-override d-flex flex-column justify-content-around rounded-0">
                        <h1 className="card-title text-white">Oops! I think you've lost your way, let's go back...</h1>
                        <span className="btn btn-dark w-25" onClick={()=>{history.push("/")}}>Go back home</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lost;