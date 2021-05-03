import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = process.env.BASE_URL;

	return {
		store: {
			favorites: [],
			people: [],
			planets: [],
			starships: [],
			aString: "Hello Vanessa"
		},
		actions: {
			// Use getActions to call a function within a function
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadInitialData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`${baseURL}/people/`)
					.then(response => response.json())
					.then(data => setStore({ people: data.results }));

				fetch(`${baseURL}/planets/`)
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }));

				fetch(`${baseURL}/starships/`)
					.then(response => response.json())
					.then(data => setStore({ starships: data.results }));
			},
			addFavorite: data => {
				//get the store
				const store = getStore();

				!store.favorites.includes(data.name) && store.favorites.push(data.name);

				//reset the global store
				setStore(store);
			},
			deleteFavorite: data => {
				//get the store
				const store = getStore();

				let newFavorites = store.favorites.filter((item, i) => i != data);

				setStore({ favorites: newFavorites });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
