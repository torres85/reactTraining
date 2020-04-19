import transformForecast from '../services/transformForecastExtended';
import {api_key, url_base_forecast} from '../constants/api_url';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformWeather from  '../services/transformWeather';

//llistat d'accions
export const SET_CITY = 'SET_CITY' // per convenció les accions es posen en majuscules igual que el nom de la constant.
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

//actions creators interns
const setCity = payload => ({ type:SET_CITY , payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type:GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type:SET_WEATHER_CITY, payload});

//actionCreator, setSelectedCity, per convencio es denomina payload al valor de l'acció, seteja la city i va a buscar les dades.
export const setSelectedCity = payload => {
    //amb el thunk podem retornar una funcio q rep el dispatch
    return (dispatch =>{
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
        
        //action indicador de busqueda de dades
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then( weather_data =>{
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);

            //modificar l'estat amb el resultat de la promise
            dispatch(setForecastData({city:payload, forecastData}))
        });

    });
};


export const setWeather = payload =>{

    return dispatch => {
        payload.forEach(city=>{
            dispatch(getWeatherCity(city));
            const api_weather = getUrlWeatherByCity(city);
            //crita la api REST
            fetch(api_weather).then(resolve =>{
                console.log(resolve);
                //aixo retorna una nova promise
                return resolve.json();
                
            }).then(data =>{
                const newWeather = transformWeather(data);
                console.log(newWeather);
                dispatch(setWeatherCity({city,weather:newWeather}));        
            });
        });
    };
    
};