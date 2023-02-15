import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from '../util/house';

@Injectable({
  providedIn: 'root'
})
export class HouseCrudService {
  private url = "http://localhost:4242/houses";
  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {}

  fetchAll(){
    return this.http.get<any>(this.url, {responseType: "json"})
  }

  fetchFirstRow(){
     return this.http.get<any>(`${this.url}/first`)
  }

  fetchById(id:number){
    return this.http.get<any>(`${this.url}/${id}`, {responseType:"json"})
  }

  post(house: House){
    const body = JSON.stringify(house)
    console.log(body)
    return this.http.post(this.url, body, {'headers': this.httpOptions.headers})
  }
}
