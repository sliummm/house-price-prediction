//Table component that render data fetched from database
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { HouseCrudService } from '../services/house-crud.service';
import { MlModelService } from '../services/ml-model.service';
import { House } from '../util/house';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.css']
})
export class HouseTableComponent implements OnChanges{
  //Take dbUpdate property from parent component
  @Input('dbUpdate') dbUpdate:any
  
  //Pass House by id and for state property to parent component
  @Output()
  houseGotById = new EventEmitter<any>();
  @Output()
  formState = new EventEmitter<any>();

  //Declaration
  houses:House[]=[]
  obj=Object
  update:any
  isInitialized = false

  constructor(
    private housecurd: HouseCrudService,
    private mlModel:  MlModelService
  ){}

  //Lifecycle hook to track property change
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.housecurd.fetchAll()
    .subscribe(data=>{
      this.houses = data;
    });
    this.update = false
    this.isInitialized = true;
  };

  //Change form state and pass the house data on table item clicked
  onClickItem(id:any){
    this.housecurd.fetchById(id)
    .subscribe(data=>{
      this.houseGotById.emit(data);
    });
    this.formState.emit(true);
  };
}
