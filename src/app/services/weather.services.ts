import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {WeatherDate} from "../models/weather.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherServices{

  constructor(private http: HttpClient) {
  }

  getWeatherData(cityName: string) : Observable<WeatherDate>{
    return this.http.get<WeatherDate>(environment.WeatherApiBaseUrl,
    {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('location', cityName)
    })

  }
}
