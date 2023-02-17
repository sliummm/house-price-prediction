//Parent component that hold other child components
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
  dbUpdate:any

  //Take house from get by id event in table component and pass to the form component
  OnGetHouseById(house:any){
    this.house = house
  }

  //Take form state from table and pass to the form componet
  OnFormStateChange(state:any){
    this.formState = state;
  }

  //Take dbUpdate from form component and pass to table to trigger a rerender
  OnDbUpdate(dbUpdate:any){
    this.dbUpdate = dbUpdate
    console.log(this.dbUpdate)
  }
}
