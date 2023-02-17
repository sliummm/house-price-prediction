//Http service that call the node back end to fetch or modify the data
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HouseCrudService {
  private url = "http://localhost:4242/houses";

  //Set Http service call header to define the request type as json
  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {}

  //Fetch all the data entry from database
  fetchAll(){
    return this.http.get<any>(this.url, {responseType: "json"})
  }

  //Fetch data by id column
  fetchById(id:number){
    return this.http.get<any>(`${this.url}/${id}`, {responseType:"json"})
  }

  //Create a data entry in the database
  post(house: any){
    return this.http.post(this.url, house, {'headers': this.httpOptions.headers})
  }

  //Update a data entry in the databse
  put(house: any){
    return this.http.put(this.url, house, {'headers': this.httpOptions.headers})
  }

  //Delete a data entry from the database
  delete(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
