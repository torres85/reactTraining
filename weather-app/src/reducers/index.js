import {combineReducers} from 'redux';
import {createSelector} from 'reselect';
import {cities, getForecastDataFromCities as _getForecastDataFromCities, getWeatherCites as _getWeatherCites} from './cities';
import {city} from './city';                 //definim un alias per tal de importar la funcio i sobre carregar-la

//aqui combinem els dos reducers
export default combineReducers({
     cities,
     city,
});

//selectors definits a ma
/*export const getCity = state => state.city;

export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities,getCity(state)));*/

//selectors amb Reselect
                              //el primer parametre es el selector i el segon es una funcio que retorna el resultat
export const getCity = createSelector (state => state.city, city => city);

//aqui li passem una funcio que retorna cities, la funcio que retorna city i la funcio de resultat que es la que tenim definita a cities.js
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCites = createSelector(state=>state.cities, _getWeatherCites);