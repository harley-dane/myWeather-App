import loadHandler from '../handlers/loadHandler.js';

const createWeather = (data) => {
    // container
    const card = document.createElement('div');
    card.classList.add('card');
    // search input
    const search = document.createElement('div');
    search.classList.add('search');

    // input
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('search-input');
    input.placeholder = 'enter city name';
    input.spellcheck = false;

    // add event listener
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const city = input.value;
            loadHandler(city);
        }
    });
    // button and img
    const button = document.createElement('button');
    button.classList.add('search-button');

    // add event listener
    button.addEventListener('click', () => {
        const city = input.value;
        loadHandler(city);
    })

    const searchImg = document.createElement('img');
    searchImg.src = './assets/search.png';
    button.appendChild(searchImg);
    search.append(input,button);
    // weather
    const weather = document.createElement('div');
    weather.classList.add('weather');
    // weather img
    const weatherIcon = document.createElement('img');
    weatherIcon.src = './assets/rain.png';
    weatherIcon.classList.add('weather-icon');
    // temperature
    const temp = document.createElement('h1');
    temp.classList.add('temp');
    temp.innerText = parseInt(data.main.temp) + '°C';
    // city
    const city = document.createElement('h2');
    city.classList.add('city');
    city.innerText = data.name;
    // details
    const details = document.createElement('div');
    details.className = 'details';
    // humidity
    const col1 = document.createElement('div');
    col1.className = 'col';
    const humidityIcon = document.createElement('img');
    humidityIcon.src = './assets/humidity.png';
    const humidityDiv = document.createElement('div');
    const humidity = document.createElement('p');
    humidity.className = 'humidity';
    humidity.innerText = data.main.humidity + '%';
    const humidityText = document.createElement('p');
    humidityText.textContent = 'Humidity';
    humidityDiv.appendChild(humidity);
    humidityDiv.appendChild(humidityText);
    col1.appendChild(humidityIcon);
    col1.appendChild(humidityDiv);
    // wind
    const col2 = document.createElement('div');
    col2.className = 'col';
    const windIcon = document.createElement('img');
    windIcon.src = './assets/wind.png';
    const windDiv = document.createElement('div');
    const wind = document.createElement('p');
    wind.className = 'wind';
    wind.innerText = data.wind.speed + 'Km/s';
    const windText = document.createElement('p');
    windText.textContent = 'Wind Speed';
  
    windDiv.append(wind, windText);
    col2.append(windIcon, windDiv);
    details.append(col1, col2);
    weather.append(weatherIcon, temp, city, details);
    card.append(search, weather);
    
    return card;
};

export default createWeather;
