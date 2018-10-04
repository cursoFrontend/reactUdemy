import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWheatherByCity from './../../services/getUrlWheatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WheatherData from './WheatherData/index';
import './style.css';

class WheatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props; 
        this.state = {
            city,
            data : null,
        };
        console.log('constructor');
    }

    componentDidMount(){//Es para cargar los datos de inmediato
        console.log('componentDidMount');
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }
    
    
    handleUpdateClick = () =>{
        const api_weather = getUrlWheatherByCity(this.state.city);
        
        fetch(api_weather)
            .then(response => {
                return response.json();
            })
            .then(datos => {
                //console.log(datos);
                const data = transformWeather(datos);
                //const city = this.state.city;//datos.name;
                this.setState({
                    data
                });
                /* this.setState({
                    city: datos.name,
                    data : {
                        temperature: datos.main.temp,
                        weatherState: CLOUDY,
                        humidity: datos.main.humidity,
                        wind: datos.wind.speed,
                    },
                }); */
            })
    };

    render = () => {
        //console.log('render');
        const { onWheatherLocationClick } = this.props;
        const { city, data} = this.state;
        return (
            <div className="wheatherLocationCont" onClick={onWheatherLocationClick}>
                <Location city={city}></Location>
                {data ?
                    <WheatherData data={data}></WheatherData> :
                    <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }

}
WheatherLocation.propTypes = {
    city : PropTypes.string.isRequired,
    onWheatherLocationClick: PropTypes.func,
}
export default WheatherLocation;