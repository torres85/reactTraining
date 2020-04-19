import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, setWeather} from '../actions';
import {getWeatherCites} from '../reducers';
import LocationList from '../components/LocationList';
//container | smart component
//basicament hem encapsulat el component locationList per tal de que tingui access a l'estat amb redux en compte de fer-ho directament al app.js com haviem fet previament.
class LocationListContainer extends Component{

    componentDidMount(){
      //inicialment anem a buscar les dades de les ciutats
      this.props.dispatchSetWeather(this.props.cities);
    }

    handleSelectionLocation = city => {
        console.log(`handleSelectionLocation ${city}` );
        this.props.dispatchSetCity(city);
      }

    render(){
        return (
            <LocationList cities={this.props.citiesWeather} 
            onSelectedLocation={this.handleSelectionLocation}/>
        )
    }
}

//ja que dispatchSetCity es un parametre del component el validem amb proptypes
LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  cities:PropTypes.array.isRequired,
  citiesWeather :PropTypes.array.isRequired,
  //dispatchSetWeather : PropTypes.func.isRequired,
};
//funcio que ens permet jugar amb l'estat, com a parametre rep el dispatch de l'store de redux
//aixo el que fa es: la funcio mapDispatchToPropsActions rep per parametre la funció dispatch de l'store de redux  i retorna un objecte amb la funció setCity que invocara al dispatch amb el setcity i ho injecta a les propietas del component
const mapDispatchToPropsActions = dispatch =>({
  dispatchSetCity : value => dispatch(setSelectedCity(value)),
  dispatchSetWeather: cities => dispatch(setWeather(cities)), 
});

//aquest funcio es posara l'state un map de cities amb el seu weather
const mapStateToProps = (state) =>({citiesWeather:getWeatherCites(state)});

//la funcio connect espera dos funcions i retorna una funció que espera el nostre component per parametre (video 117 explicació de funcions que retornen funcions)
export default connect(mapStateToProps,mapDispatchToPropsActions)(LocationListContainer);
//exportem el componet vitaminat amb la connecció a l'store


