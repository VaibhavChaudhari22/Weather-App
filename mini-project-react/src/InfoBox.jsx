import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css';
import { useEffect } from 'react';

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1623200459352-ffcc6eb35fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGRyb3B8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    useEffect(() => {
        const body = document.body;
        const backgroundImage = info.humidity > 120 ? RAIN_URL : info.temp > 23 ? HOT_URL : COLD_URL;
        body.style.backgroundImage = `url(${backgroundImage})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundPosition = 'center';

        return () => {
            // Clean up background when component unmounts or updates
            body.style.backgroundImage = null;
        };
    }, [info]);

    return (
        <div className="container">
           

            <div className="info-box">
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                        info.humidity > 120 ? <ThunderstormIcon /> : info.temp > 23 ? <WbSunnyIcon /> : <AcUnitIcon />
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}%</p>
                    <p>Min Temp: {info.tempMin}&deg;C</p>
                    <p>Max Temp: {info.tempMax}&deg;C</p>
                    <p>The weather is described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}&deg;C.</p>
                </Typography>
            </div>
        </div>
    );
}
