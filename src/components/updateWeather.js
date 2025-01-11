const updateWeather = async (data, dom) => {
    const weatherIcon = dom.querySelector('.weather-icon');
    const tempElement = dom.querySelector('.temp');
    const cityElement = dom.querySelector('.city');
    const humidityElement = dom.querySelector('.humidity');
    const windElement = dom.querySelector('.wind');
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    tempElement.innerText = parseInt(data.main.temp) + '°C';
    cityElement.innerText = data.name;
    humidityElement.innerText = data.main.humidity + '%';
    windElement.innerText = data.wind.speed + 'Km/s';
};
export default updateWeather;
