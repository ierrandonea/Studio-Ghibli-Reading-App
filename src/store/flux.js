const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            films: null,
            filmDetails: null,
            people: null,
            peopleDetails: null,
            locations: null,
            locationDetails: null,
            currentTab: " 1"
        },
        actions: {
            getFilms: () => {
                fetch("https://ghibliapi.herokuapp.com/films", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        })
                    });
            },
            getFilmDetails: async id => {
                const resp = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await resp.json();
                setStore({
                    filmDetails: data
                })
            },
            getPeople: () => {
                fetch("https://ghibliapi.herokuapp.com/people", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            people: data
                        })
                    });
            },
            getPeopleDetails: async id => {
                const resp = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await resp.json();
                setStore({
                    peopleDetails: data
                })
            },
            getLocations: () => {
                fetch("https://ghibliapi.herokuapp.com/locations", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            locations: data
                        })
                    });
            },
            getLocationDetails: async id => {
                const resp = await fetch(`https://ghibliapi.herokuapp.com/locations/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await resp.json();
                setStore({
                    locationDetails: data
                })
            },
            setCurrentTab: (tab) => {
                setStore({
                    currentTab: tab
                })
            }
        }
    }
}

export default getState;