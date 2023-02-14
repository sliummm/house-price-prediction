import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent implements OnChanges{

  qualities = [
    {key:'level 1', value:1},
    {key:'level 2', value:2},
    {key:'level 3', value:3},
    {key:'level 4', value:4},
    {key:'level 5', value:5},
    {key:'level 6', value:6},
    {key:'level 7', value:7},
    {key:'level 8', value:8},
    {key:'level 9', value:9},
    {key:'level 10', value:10}
  ]
  state:any

  @Input('houseDetail') houseDetail:any
  @Input('formState') formState:any

  

  ngOnInit():void{
    this.state=false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.state = this.formState
    if(this.state){

    }
  }
  
  OnCreateNewPrediction():void{
    this.state = false;

  }

  onPrediction(formdata:any){
    console.log("show form data-(house-form): ",formdata)
  }
}
