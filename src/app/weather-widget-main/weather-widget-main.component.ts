import { Component, OnInit } from '@angular/core';
import { faSun, faCloud, faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {
faMoon=faMoon;
faSun=faSun;
faCloud=faCloud;
  WeatherData:any;
  constructor() { }

ngOnInit() {
this.WeatherData= {
main: {},
isDay:true
};
this.getWeatherData();
console.log (this.WeatherData);
}

getWeatherData(){
fetch('https://api.openweathermap.org/data/2.5/weather?zip=77406&appid=cafab08b41482e6535a2574a24e44ce3&units=imperial ')
.then (response=>response.json())
.then(data=>{this.setWeatherData(data);})
}

setWeatherData(data: any){
this.WeatherData=data;
let sunsetTime= new Date(this.WeatherData.sys.sunset * 1000);
console.log (sunsetTime);
this.WeatherData.sunset_time=sunsetTime.toLocaleTimeString();
let currentDate= new Date();
this.WeatherData.isDay= (currentDate.getTime()<sunsetTime.getTime());
this.WeatherData.temp=(this.WeatherData.main.temp).toFixed(0);
console.log(this.WeatherData.temp)
this.WeatherData.temp_min = this.WeatherData.main.temp_min.toFixed(0);
this.WeatherData.temp_max = this.WeatherData.main.temp_max.toFixed(0);
this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like).toFixed(0);
}
}
