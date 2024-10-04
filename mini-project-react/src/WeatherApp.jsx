import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 43.69,
        humidity: 31,
        pressure: 997,
        tempMax: 40.5,
        tempMin: 40.5,
        temp: 40.5,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Weather APP</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
