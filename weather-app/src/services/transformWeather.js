import convert from 'convert-units';
import {
    CLOUD,
    FOG,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';


const getTemp = kelvin =>{
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
};
//funcio per transformar el literal de si fal sol nuvol.... que retorna a el servidor a al nostre enumerat. 
const getWeatherState = weather =>{
    const {id} = weather;
    if (id<300){
        return THUNDER;
    }else if (id<400){
        return DRIZZLE;
    }else if (id<600){
        return RAIN;
    }else if (id<700){
        return SNOW;
    }else if (id === 741){
        return FOG;
    }else if (id ===800){
        return SUN;
    }else{
        return CLOUD;
    }
};

//transforma les dades que retorna el servidor a les dades que necessita el component.
const transformWeather = weather_data =>{
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind : `${speed} m/s`,
    }
    return data;
};

export default transformWeather;