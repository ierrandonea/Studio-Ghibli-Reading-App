import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../static/logo/Studio_Ghibli_logo.svg';
const classNames = require("classnames");

const Navbar = props => {
    const [tabs, setTabs] = useState({
        activeTab: null,
        showRedToGreen: false,
        showRedToBlue: false,
        showGreenToRed: false,
        showGreentoBlue: false,
        showBlueToGreen: false,
        showBlueToRed: false
    });

    let history = useHistory();

    const handleMenu = e => {
        e.preventDefault();
        console.log(e.target.value)
        if (e.target.value === "toFilms") {
            setTabs({
                activeTab: "films"
            })
        } else if (e.target.value === "toPeople") {
            setTabs({
                activeTab: "people"
            })
            if (!!tabs.activeTab || tabs.activeTab === "films") {
                setTabs({
                    showRedToGreen: true,
                    showRedToBlue: false,
                    showGreenToRed: false,
                    showGreentoBlue: false,
                    showBlueToGreen: false,
                    showBlueToRed: false
                })
            }
        } else if (e.target.value === "toLocations") {
            setTabs({
                activeTab: "locations"
            })
        }

        if (tabs.activeTab === "films") {
            history.push(`/films`)
        } else if (tabs.activeTab === "people") {
            history.push(`/people`)
        } else {
            history.push(`/locations`)
        }
    }

    return (
        <nav className="navbar navbar-light bg-blue">
            <Link className="navbar-brand" to="/" onClick={() => setTabs({ activeTab: null })}><img src={Logo} className="logoWhole" /></Link>
            <span className="dial"></span>
            <button className={classNames(
                'navbar-toggler',
                'border-0',
                'm-0',
                {
                    'redToGreen': tabs.showRedToGreen,
                    'redToBlue': tabs.showRedToBlue,
                    'greenToRed': tabs.showGreenToRed,
                    'greentoBlue': tabs.showGreentoBlue,
                    'blueToGreen': tabs.showBlueToGreen,
                    'blueToRed': tabs.showBlueToRed
                })}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-right" id="navbarNav">
                <select size="3" className="navbar-nav">
                    <option className="nav-option" value="toFilms" onClick={e => handleMenu(e)} >
                        Films
                    </option >
                    <option className="nav-option" value="toPeople" onClick={e => handleMenu(e)} >
                        People
                    </option >
                    <option tion className="nav-option" value="toLocations" onClick={e => handleMenu(e)} >
                        Locations
                    </option >
                </select>
            </div>
        </nav>
    );
}

export default Navbar;