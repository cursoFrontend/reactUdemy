import convert from 'convert-units';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
}
const getWheatherState = weather =>{
    const { id } = weather;

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 500) {
        return RAIN;
    } else if (id < 600) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD;
    }
};

const transformWeather = datos =>{
    const { humidity, temp } = datos.main;
    const { speed } = datos.wind;
    const weatherState = getWheatherState(datos.weather[0]);
    const temperature = getTemp(temp);
    const data = {
        temperature,
        weatherState,
        humidity,
        wind: `${speed} m/s`,
    }
    return data;
};

export default transformWeather;