import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//const Location = (props) => {
    const Location = ({city}) => (
    //console.log(props);
    //Destructuring --> propietat amb un nom que volem assignar a una variable amb el mateix nom, la podem utilizar de forma
    //const city = props.city; // abans
    //const {city} = props; // amb destructuring.
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
);

Location.propTypes = {
    city:PropTypes.string.isRequired,
}
export default Location;