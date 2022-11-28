import {Component, OnInit} from '@angular/core';
import {WeatherServices} from "./services/weather.services";
import {WeatherDate} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  // @ts-ignore
  weatherData: WeatherDate
  date: Date = new Date()
  // @ts-ignore
  indexOf: number = this.date.getDay() - 1
  cityName: string = 'Khotyn'

  constructor(private weatherService: WeatherServices) {
  }

  ngOnInit(): void {
  }

  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response
        console.log(this.weatherData)
      }
    })
  }

  onSubmit() {
 this.getWeatherData(this.cityName)
    this.cityName= ''
  }
}
