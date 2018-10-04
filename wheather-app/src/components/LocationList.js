import React from 'react';
import PropTypes from 'prop-types';
import WheatherLocation from './WheatherLocation/index';
import './styles.css';

const LocationList = ({ cities, onSeletedLocation }) => {
    const handleWeatherLocationClick = city => {
        //console.log("handleWeatherLocationClick");
        onSeletedLocation(city);
    };
    const strToComponents = cities => (
        cities.map((city, index) => 
                <WheatherLocation 
                    key={city} 
                    city={city}
                    onWheatherLocationClick ={() => handleWeatherLocationClick(city)}>
                </WheatherLocation>)
    );

    return (
        <div className="locationList">
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSeletedLocation: PropTypes.func,
};
export default LocationList;