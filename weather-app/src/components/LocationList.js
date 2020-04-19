import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';



const LocationList = ({cities,onSelectedLocation}) => {
    const handleWeatherLocationClick = (city) =>{ 
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }
    console.log(cities);
    //basicament la funció map pots passarli una funcio per parametre que sexecuta per a cada element de la llista, en aquest cas la funcio te un parametre i retorna el component.
    const strToComponents = (cities) => (cities.map((city) =>  (<WeatherLocation  key={city.key} 
                                                                                        city={city.name} 
                                                                                        weatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                                                                                        data={city.data}/>)) //es recomenable posar key el component si esta en un llistat per tal de poder renderizar-lo més eficientment, en aquest cas utizen la ciutat com a key pq no es repetira.
    );
    return (  
        <div className='locationList'>
            {strToComponents(cities)}
        </div>
    );

};

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,
};

export default LocationList;