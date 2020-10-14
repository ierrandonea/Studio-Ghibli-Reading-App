import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../static/logo/Studio_Ghibli_logo.svg';
import Wheel from '../static/logo/castle_door.svg'
import { Context } from '../store/appContext';

const Navbar = props => {
    const { store, actions } = useContext(Context)

    return (
        <nav className="navbar navbar-light bg-blue">
            <Link className="navbar-brand" to="/" onClick={() => actions.setCurrentTab(" 1")}><img src={Logo} className="logoWhole" /></Link>
            <span className="dial"></span>
            <button className="navbar-toggler border-0 m-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img src={Wheel} className={"navbar-toggler-icon" + (!!store.currentTab ? store.currentTab : " void")}></img>
            </button>
            <div className="collapse navbar-collapse text-right" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-option" to="/films" onClick={() => actions.setCurrentTab(" 1")} >
                        Films
                    </Link >
                    <Link className="nav-option" to="/people" onClick={() => actions.setCurrentTab(" 2")} >
                        People
                    </Link >
                    <Link className="nav-option" to="/locations" onClick={() => actions.setCurrentTab(" 3")} >
                        Locations
                    </Link >
                </div>
            </div>
        </nav>
    );
}

export default Navbar;