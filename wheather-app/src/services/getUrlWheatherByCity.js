import {url_base_weather, api_key} from './../constants/api_wheather'

const getUrlWheatherByCity = city => {
    
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default getUrlWheatherByCity;