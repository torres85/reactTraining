import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>

);

//equivalent
/*const WeatherData = ({data}) => {
    const {temperature, weatherState, humidity, wind} = data;
 return (   <div className="weatherDataCont" >
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>);

};*/
WeatherData.propTypes =  {
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),    
}
export default WeatherData;