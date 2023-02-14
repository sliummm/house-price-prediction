import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseCrudService {
  private url = "http://localhost:4242/houses";

  constructor(private http: HttpClient) {}

  fetchAll(){
    return this.http.get<any>(this.url, {responseType: "json"})
  }

  fetchById(id:number){
    return this.http.get<any>(`${this.url}/${id}`, {responseType:"json"})
  }

  
}
