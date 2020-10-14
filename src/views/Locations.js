import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import LocationModal from '../components/modalLocations';
import LocationCard from '../components/locationCard';

const Locations = () => {
    const { store } = useContext(Context);

    return (
        <>
            <LocationModal />
            <div className="container-fluid d-flex flex-wrap bg-white pb-4">
                {
                    !!store.locations &&
                    store.locations.map((location, index) => {
                        return (
                            <LocationCard place={location} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Locations;