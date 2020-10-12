import React, { useContext } from 'react';
import Jumbotron from '../components/jumbotron';
import { Context } from '../store/appContext';

const Main = ({ history, location, match }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <Jumbotron />
    );
}

export default Main;