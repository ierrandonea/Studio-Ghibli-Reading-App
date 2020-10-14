import React from 'react';
import { Link } from 'react-router-dom';
import films from '../static/logo/films.svg';
import people from '../static/logo/people.svg';
import locations from '../static/logo/locations.svg';

const Jumbotron = () => {
    return (
        <div class="jumbotron all-people jumbotron-fluid px-3 overlay">
            <h1 class="display-4">Studio Ghibli Visual Guide</h1>
            <p class="lead">A simple page with info on the Ghibli universe</p>
            <hr class="my-4" />
            <div className="d-flex flex-column w-25">
                <Link class="btn btn-outline-dark btn-lg d-flex flex-row align-items-center justify-content-around w-75" to="/films"><h4>Movies</h4><img src={films} className="filmsBtn ml-3"/></Link>
                <Link class="btn btn-outline-dark btn-lg d-flex flex-row align-items-center justify-content-around w-75 my-2" to="/people" role="button"><h4>People</h4><img src={people} className="filmsBtn ml-3"/></Link>
                <Link class="btn btn-outline-dark btn-lg d-flex flex-row align-items-center justify-content-around w-75" to="/locations" role="button"><h4>Locations</h4><img src={locations} className="filmsBtn ml-3"/></Link>
            </div>
        </div>
    )
}

export default Jumbotron;