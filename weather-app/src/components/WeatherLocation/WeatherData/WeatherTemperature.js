import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    FOG,
    SUN,
    RAIN,
    SNOW,
    DRIZZLE,
    THUNDER,
} from '../../../constants/weathers';
import './styles.css';

const icons =  {
    [SUN] : "day-sunny",
    [FOG] : "day-fog",
    [CLOUD] : "cloud",
    [RAIN] : "rain",
    [SNOW] : "snow",
    [DRIZZLE] : "day-showers",
    [THUNDER] : "day-thunderstorm",
};

const getWeatherIcon = (weatherState) => {
    const icon  = icons[weatherState];
    const iconSize = "4x" 
    if (icon){
        return <WeatherIcons className="wicon" name={icon} size={iconSize}/>;
    }else{
        return <WeatherIcons className="wicon" name="day-sunny" size={iconSize}/>;
    }
    
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
         { // necessitem les claus per posar codi JS
             getWeatherIcon(weatherState)
         }
        <span className="temperature">{ `${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>
    </div>
);

//sistema de validacio dels tipus dels parametres, en aquest cas numero i string.
//mes info a la pagina de proptypes https://es.reactjs.org/docs/typechecking-with-proptypes.html
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;