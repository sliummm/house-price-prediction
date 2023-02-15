import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HouseCrudService } from '../services/house-crud.service';
import { MlModelService } from '../services/ml-model.service';
import { House } from '../util/house';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.css']
})
export class HouseTableComponent implements OnInit{

  houses:House[]=[]
  obj=Object

  @Output()
  houseGotById = new EventEmitter<any>();
  @Output()
  formState = new EventEmitter<any>();

  constructor(
    private housecurd: HouseCrudService,
    private mlModel:  MlModelService
  ){}

  ngOnInit(): void {
    this.housecurd.fetchAll()
    .subscribe(data=>{
      this.houses = data;
      console.log("show all house-(house-table): ",this.houses);
    });
  };

  onClickItem(id:any){
    this.housecurd.fetchById(id)
    .subscribe(data=>{
      this.houseGotById.emit(data);
    });
    this.formState.emit(true);
    console.log("show form state-(house-table)",this.formState)

    this.mlModel.default().subscribe(data=>console.log(data));
  };



}
