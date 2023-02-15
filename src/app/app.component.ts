import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'house-price-prediction';
  house:any
  formState:any

  OnLoadForm(house:any){
    this.house = house
    console.log("First House in table:" , this.house)
  }

  OnGetHouseById(house:any){
    this.house = house
    console.log("show this house-(app-component)",this.house)
  }

  OnFormStateChange(state:any){
    this.formState = state;
  }
}
