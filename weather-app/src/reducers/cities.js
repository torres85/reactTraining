import {SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY} from '../actions/index';
import toPairs from 'lodash/toPairs';
import {createSelector} from 'reselect';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:{
           const {city, forecastData} = action.payload;     
           //amb [] posem la pripietat city com a clau del mapa     
           return {...state, [city]: {forecastData}};
        } 
        case GET_WEATHER_CITY:{ // quan es solicita el weather es posa null pq surti el loading
            const city = action.payload;
            return {...state, [city]:{weather:null}};
        }
        case SET_WEATHER_CITY:{
            const {city,weather} = action.payload; // quan rebem la info del servidor la setegem l'estat
            return {...state, [city]:{weather}};
        }
        default:
            return state;
    };
};

//definim un selector per obenir el forecast data i aixi no haver de coneixe la estructura de l'state des dels components
//en aques reducer state nomes fa referencia a la variable cities que tenim al l'estat
// definicio del selector sense reselect
//export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;

//definicio amb reselect
                        //el primer parametre obte la info i el segon parametre retorna el resultat
export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData =>forecastData);

const fromObjectToArray = cities => (toPairs(cities).map(([key,value])=>({key, name:key, data:value.weather}))); //en aquesta funcio convertirem l'objecte cities que te una propietat per a cada ciutat en un array amb l'ajut de lodash.
                                                                                                          // un cop fet aixo transformarem la info en un objecte key, name, weather que es el que necessita el nostre component locationList
export const getWeatherCites = createSelector(state=>fromObjectToArray(state), cities=>cities);