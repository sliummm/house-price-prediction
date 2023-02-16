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

  @Input('dbUpdate') dbUpdate:any
  
  @Output()
  houseGotById = new EventEmitter<any>();
  @Output()
  formState = new EventEmitter<any>();

  houses:House[]=[]
  obj=Object
  update:any
  isInitialized = false

  constructor(
    private housecurd: HouseCrudService,
    private mlModel:  MlModelService
  ){}

  ngOnChanges(changes: SimpleChanges): void {

    this.ngOnInit()
}

  ngOnInit(): void {
    this.housecurd.fetchAll()
    .subscribe(data=>{
      this.houses = data;
      console.log("Raw data",data)
      console.log("show all house-(house-table): ",this.houses);
    });
    this.update = false
    this.isInitialized = true;
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
