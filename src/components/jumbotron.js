import React from 'react';
import { Link } from 'react-router-dom';
import films from '../static/logo/films.svg';
import people from '../static/logo/people.svg';
import locations from '../static/logo/locations.svg';

const Jumbotron = () => {
    return (
        <div className="container-fluid no-gutters mx-0 px-0 bg-white">
            <div class="jumbotron jumbotron-fluid card rounded-0 bg-dark">
                <img src="/static/all_people.jpg" alt="" className="card-img rounded-0 d-none d-md-block" />
                <img src="/static/all_people_m.jpg" alt="" className="card-img rounded-0 d-block d-md-none" />
                <div className="card-img-overlay overlay-override my-5 rounded-0 d-flex flex-column justify-content-between justify-content-md-around">
                    <div className="row text-white my-5">
                        <div className="col-12">
                            <h1 class="display-4 d-sm-none">Studio Ghibli Visual Guide</h1>
                            <h1 class="display-3 d-none d-sm-flex d-md-none">Studio Ghibli Visual Guide</h1>
                            <h1 class="display-2 d-none d-md-flex">Studio Ghibli Visual Guide</h1>
                            <p class="lead">A simple page with info on the Ghibli universe</p>
                        </div>

                    </div>
                    <div className="row my-auto my-sm-5">
                        <div className="col-8 col-md-5 col-lg-4">
                        <Link class="btn btn-light btn-lg d-flex flex-row align-items-center justify-content-around" to="/films"><h2>Movies</h2><img src={films} className="w-25" /></Link>
                        <Link class="btn btn-light btn-lg d-flex flex-row align-items-center justify-content-around my-2" to="/people" role="button"><h2>People</h2><img src={people} className="w-25" /></Link>
                        <Link class="btn btn-light btn-lg d-flex flex-row align-items-center justify-content-around" to="/locations" role="button"><h2>Locations</h2><img src={locations} className="w-25" /></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;