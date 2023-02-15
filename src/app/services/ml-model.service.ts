import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlModelService {
  private url = "http://127.0.0.1:8000";

  constructor(private http:HttpClient){}

  default(){
    return this.http.get<any>(this.url, {responseType: "json"})
  }

  post(){
    const body = JSON.stringify
  }

}
