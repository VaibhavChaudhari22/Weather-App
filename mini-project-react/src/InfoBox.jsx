import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'

export default function InfoBox({info}){
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1666726721652-a15e685e48a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1623200459352-ffcc6eb35fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMGRyb3B8ZW58MHx8MHx8fDA%3D"
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    return(
        <div className="InfoBox">
           
            <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 120 ? RAIN_URL : info.temp > 23 ? HOT_URL :COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {
            info.humidity > 120 ? <ThunderstormIcon/> : info.temp > 23 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Tempreature : {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}&deg;C</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <b><i> {info.weather}</i></b> and feelsLike {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    )
}