import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>)
};

const renderProgress = ()  => {
    return <h3>Cargando pronóstico extendido..."</h3>;
};

//class ForecastExtended extends Component{
  const ForecastExtended = ({city,forecastData}) => {
   
  /*  componentDidMount(){
         //aqui farem el fecth amb el servidor aixo s'excuta la primera vegada quan es crea el component
        this.updateCity(this.props.city);
    };*/
   
   /* componentDidUpdate(prevProps, prevState, snapshot) {
         //aixo s'excuta quan el component ja esta creat
        if (this.props.city !== prevProps.city) {
            this.setState({forecastData:null});
            this.updateCity(this.props.city);
        }
     
    }*/

    /*static getDerivedStateFromProps(nextProps, prevState){
        //s'executa cada vegada que hi ha alguna actualizació de les propietats, rebem per parametre les proximes propietats que s'establiran 
        //fem el fecth aqui perque aixi controlem que carreguem les dades nomes si canviem de ciutat.
        debugger;
        if (nextProps.city!==prevState.city || !prevState.city){
            this.setState({forecastData:null}) // posant aixo a null torna a sortir el cargando datos, ja que el render veu que l'state es null, mirar la funcio de render.
            this.updateCity(nextProps.city);    
        }
    };*/
    //opcio deprecada
  /* componentWillReceiveProps(nextProps){
         //s'executa cada vegada que hi ha alguna actualizació de les propietats, rebem per parametre les proximes propietats que s'establiran 
        //fem el fecth aqui perque aixi controlem que carreguem les dades nomes si canviem de ciutat.
        if (nextProps.city!==this.props.city){
            this.setState({forecastData:null}) // posant aixo a null torna a sortir el cargando datos, ja que el render veu que l'state es null, mirar la funcio de render.
            this.updateCity(nextProps.city);    
        }
    };*/

    /*updateCity = city =>{
        const url_forecast = `${url_base_weather}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then( weather_data =>{
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({forecastData})
        })
    };*/
  
    return (<div> 
                <h2 className='forecastTitle'>Pronóstico extendido para {city}</h2>
                {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
            </div>)
 };


ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData : PropTypes.array,
};

export default ForecastExtended;