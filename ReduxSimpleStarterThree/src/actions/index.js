import axios from 'axios';

const API_KEY = '92dd442dde0a0237327421147104b793';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	console.log('Request:', request);

	// Request is successful.  For whatever reason, it doesn't know what to return 
	// for type, even when I make it a string literal.

	return {
		type: 'FETCH_WEATHER',
		payload: request
	};
}