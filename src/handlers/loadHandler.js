import dom from '../dom.js';
import getWeatherByCity from '../../Apis/getWeatherByCity.js';
import createWeather from '../components/createWeather.js';
import updateWeather from '../components/updateWeather.js';

const loadHandler = async (cityName) => {
    const data = await getWeatherByCity(cityName);
    if (! data) {
        console.log('Could not fetch weather data.');
        return;
    } 

    // Check if weather card already exists
    const cardExist = document.querySelector('.card');
    if(cardExist){
        updateWeather(data, cardExist);
    }else {
        const cardDom = createWeather(data);
        dom.root.append(cardDom);
    }
};
export default loadHandler;
