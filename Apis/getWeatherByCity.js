const getWeatherByCity = async (city) => {
    const apiKey = '06d752c8c345216d281d9a3fd7c7cc12';
    const apiUrl =
        'https://api.openweathermap.org/data/2.5/weather?units=metric';
    if (typeof city !== 'string' || city.trim() === '') {
        console.error('Invalid city name provided:', city);
        return null;
    }

    try {
        const res = await fetch(
            `${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`,
        );

        if (!res.ok) {
            throw new Error(
                `An error has occurred: ${res.status} ${res.statusText}`,
            );
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(
            'There was an error fetching the weather data:',
            err.message,
        );
        return null;
    }
};

export default getWeatherByCity;
