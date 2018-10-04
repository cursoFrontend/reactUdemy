import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';

const icons = {
    [CLOUD] : "cloud",
    [RAIN] : "rain",
    [SUN] : "day-sunny",
    [SNOW] : "snow",
    [THUNDER] : "day-thunderstorm",
    [DRIZZLE] : "day-showers",
}
const getWheatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if (icon) {
        return (<WeatherIcons className="wicon" name={icon} size={sizeIcon} />);
    } else {
        return (<WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />);
    }
    
};
const WheatherTemperature = ({ temperature, weatherState }) =>(
    <div className="wheatherTemparatureCont">
        {getWheatherIcon(weatherState)}
        <span className="temperature">{temperature}</span>
        <span className="temperatureType"> C</span>
    </div>
);
WheatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string,
};
export default WheatherTemperature;