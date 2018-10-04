import React from 'react';
import PropTypes from 'prop-types';

const WheatherExtraInfo = ({ humidity, wind}) =>(
    <div className="WheatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity}`}</span>
        <span className="extraInfoText">{`Viento: ${wind}`}</span>
    </div>
);

WheatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WheatherExtraInfo;