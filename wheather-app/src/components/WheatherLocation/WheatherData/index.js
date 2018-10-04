import React from 'react';
import PropTypes from 'prop-types'; 
import WheatherExtraInfo from '../WheatherExtraInfo/index';
import WheatherTemperature from '../WheatherTemperature/index';
import './style.css';

const WheatherData = ( { data } ) =>{
    const { temperature, weatherState, humidity, wind} = data;
    return (
    <div className='wheatherData'>
        <WheatherTemperature temperature={temperature} weatherState={weatherState}></WheatherTemperature>
        <WheatherExtraInfo humidity={humidity} wind={wind}></WheatherExtraInfo>
    </div>);
};

WheatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WheatherData;