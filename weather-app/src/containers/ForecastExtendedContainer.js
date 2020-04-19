import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getForecastDataFromCities,getCity} from '../reducers'
import ForecastExtended from '../components/ForecastExtended';
//container | smart component

class ForecastExtendedContainer extends Component{
    
    render () {
        const {city, forecastData}  = this.props;
        return (
            city && <ForecastExtended city= {city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes =  {
    city:PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

//state fa referencia a this.props.city, aquesta funcio llegeix de l'estat, ens arriba per parametre i retorna un objecte amb les propietats que anem a utilizar i el connect les injecte al component com a this.props
//const mapStateToProps = state => ({city: state.city, forecastData:state.cities[state.city] && state.cities[state.city].forecastData});
                                                                    //com inicialment no teneim res a cities hem de validar que la variable existeixi

//simplificat utilitzant selectors, el selector esta definit al reducer cities
//const mapStateToProps = state => ({city:state.city, forecastData:getForecastDataFromCities(state)});

//mes simplicat per abtreure mes el component de l'structura de l'estat
const mapStateToProps = state => ({city:getCity(state), forecastData:getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);