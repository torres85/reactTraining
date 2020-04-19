import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity,wind}) => (
    //template string {`${var} % - `} es la forma per evitar concatenar strings amb el + 
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % `}</span> 
        <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;