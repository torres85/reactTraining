import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css';

//dades inicials
/*const data = {
    temperature: 5,
    weatherState: SUN,
    humidity:10,
    wind: '10 m/s',
}*/


//aixi es un class component, s'utiliza quan necessit usar les instancies del cicle de vida del component sino amb functional component es suficient, basicament tenen estat.
const WeatherLocation = (weatherLocationClick, city, data) => ( //abans era un class component ara l'hem simplificat
    //primer metode que sexecuta quan es crea el component,
   /* constructor(props){
        super(props); //es necessari cridar al super constructor pq tot funcioni correctament
        const {city} = props;
        this.state={ // definim l'estat inicial del component
            city,
            data: null,
        };

        console.log("constructor");
    }*/

    // s'utiliza per fer peticions al servidor es millor utilizar aquest que el willmount pq conceptualment s'executa despres del render i no porta lloc a confució.
  /*  componentDidMount() {
        console.log("componentDidMount");
        this.handelGetCityWeatherData();
    }*/
    // s'executa nomes quan fem update del component, no quan es crea.
   /* componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }*/

    /** deprecated s'executa abans del render, pero al fer el fetch com que es asincron es fan dos renderizats ja que de bones a primeres no tenim les dades. **/
  /*  componentWillMount() {
        console.log("deprecated componentWillMount");
    }*/
    /** deprecated **/
   /* componentWillUpdate(nextProps, nextState) {
        console.log("deprecated componentWillUpdate");
    }*/
    
    //per cridar el metode necessitem utilizar el this.
/*handelGetCityWeatherData = () => {
    console.log("updating....");
    const api_weather = getUrlWeatherByCity(this.state.city);
    //crita la api REST
    fetch(api_weather).then(resolve =>{
        console.log(resolve);
        //aixo retorna una nova promise
        return resolve.json();
    
    }).then(data =>{
        console.log(data);
        const newWeather = transformWeather(data);
        console.log(newWeather);
        //state nomes es pot inicializar al constructor, si el volem modificar sha d'utilizar el setState i nomes cal passarli des dades que volem canviar.
        this.setState({ // definim l'estat del component
                data: newWeather,
        });

    });

    
};*/

       
    //el render nomes llança JSX
    <div className="WeatherLocation" onClick={weatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
    </div>
    

);
/*
 definit aixi es un functional component, un component funcional no te estat 
const WeatherLocation = () =>  (//arrow function
    <div className="WeatherLocation">
        <Location city={"Almoster"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);
*/

WeatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    weatherLocationClick: PropTypes.func,
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),    
}
export default WeatherLocation;