//Http service call the machine learning api and get a response of predicted price
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../util/house';

@Injectable({
  providedIn: 'root'
})

export class MlModelService {
  private url = "http://127.0.0.1:8000";

  constructor(private http:HttpClient){}

  //default method to test connection
  default(){
    return this.http.get<any>(this.url, {responseType: "json"})
  }

  //send request to the api and get the predicted sale price
  post(item:House){
    const body={
      "OverallQual": Number(item.overallqual),
      "GrLivArea": Number(item.grlivarea),
      "GarageCars": Number(item.garagecars),
      "TotalBsmtSF": Number(item.totalbsmsf),
      "FullBath": Number(item.fullbath),
      "TotRmsAbvGrd": Number(item.totrmsabvgrd),
      "YearBuilt": Number(item.yearbuilt),
      "YearRemodAdd": Number(item.yearremodadd),
      "Fireplaces": Number(item.fireplaces)
    }

    console.log(body)
    return this.http.post<any>(this.url, body, {responseType: "json"})
  }

}
