import React from 'react';
import WheatherExtraInfo from '../WheatherExtraInfo/index';
import WheatherTemperature from '../WheatherTemperature/index';

const WheatherData = () =>(
    <div>
        <WheatherTemperature></WheatherTemperature>
        <WheatherExtraInfo></WheatherExtraInfo>
    </div>
);

export default WheatherData;