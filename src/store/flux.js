const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            films: null,
            filmDetails: null,
            people: null,
            peopleDetails: null,
            locations: null,
            locationDetails: null
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
            getFilmDetails: id => {
                fetch(`https://ghibliapi.herokuapp.com/films/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            filmDetails: data
                        })
                    });
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
            getPeopleDetails: id => {
                fetch(`https://ghibliapi.herokuapp.com/people/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            peopleDetails: data
                        })
                    });
            }
        }
    }
}

export default getState;