import { Component, Input,OnChanges,OnInit, SimpleChanges} from '@angular/core';
import { HouseCrudService } from '../services/house-crud.service';
import { MlModelService } from '../services/ml-model.service';
import { House } from '../util/house';

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
  @Input('houseDetail') houseDetail!:House
  @Input('formState') formState:any

  house!:House
  state:any
  initialized = false
  obj= Object

  constructor(
    private housecrud: HouseCrudService,
    private mlModel: MlModelService
  ){}

  ngOnInit():void{
    this.house = {
      Id: null, 
      overallqual: null,
      grlivarea: null,
      garagecars: null,
      totalbsmsf: null,
      fullbath: null,
      totrmsabvgrd: null,
      yearbuilt: null,
      yearremodadd: null,
      fireplaces: null,
      saleprice: null
    }
    this.state=false;
    this.initialized = true;
    console.log("House", this.house)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.initialized){
      console.log('initialized')
      this.state = this.formState;
      this.house = <any>Object.values(this.houseDetail)[0];
      console.log("This House",this.houseDetail)
      console.log("This House",this.house)
      console.log("Entry: ", <any>Object.values(this.houseDetail)[0].fullbath)
      console.log("Entry: ", <any>Object.values(this.houseDetail)[0].fullbath)
    }
  }
  
  OnCreateNewPrediction():void{
    this.state = false;
  }

  onPrediction(formdata:any){
    console.log("show form data-(house-form): ",formdata)
    this.housecrud.post(this.house)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
