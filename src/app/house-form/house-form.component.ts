import { Component, EventEmitter, Input,OnChanges, Output, SimpleChanges} from '@angular/core';
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
    {key:'level 1', value:1, default:true},
    {key:'level 2', value:2, default:false},
    {key:'level 3', value:3,default:false},
    {key:'level 4', value:4,default:false},
    {key:'level 5', value:5,default:false},
    {key:'level 6', value:6,default:false},
    {key:'level 7', value:7,default:false},
    {key:'level 8', value:8,default:false},
    {key:'level 9', value:9,default:false},
    {key:'level 10', value:10,default:false}
  ]
  @Input('houseDetail') houseDetail!:House
  @Input('formState') formState:any

  @Output()
  OnUpdate = new EventEmitter();

  house!:House
  state:any
  isInitialized = false
  dbUpdate = false
  housePrice:number = 0
  obj= Object

  constructor(
    private housecrud: HouseCrudService,
    private mlModel: MlModelService
  ){}
  
  ngOnChanges(changes: SimpleChanges): void {
      this.state = this.formState;
      console.log(this.state)
      this.house = <any>Object.values(this.houseDetail)[0];
  }

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
    // console.log("House", this.house)
  }
  
  OnCreateNewPrediction():void{
    this.state = false;
  }

  onPredictionOrUpdate(){
    if (!this.state) {
      console.log("Doing Predication")
      this.mlModel.post(this.house)
      .subscribe(data=>{
        this.housePrice = data.SalePrice
        console.log("The value of this house is Approx.: ", this.housePrice)
        this.house.saleprice = data.SalePrice
        console.log("value passed", this.house)
      })
    } else {
      const body = {
        "id":this.house.Id,
        "overallqual": this.house.overallqual,
        "grlivarea":this.house.grlivarea,
        "garagecars":this.house.garagecars,
        "totalbsmsf":this.house.totalbsmsf,
        "fullbath":this.house.fullbath,
        "totrmsabvgrd":this.house.totrmsabvgrd,
        "yearbuilt":this.house.yearbuilt,
        "yearremodadd":this.house.yearremodadd,
        "fireplaces":this.house.fireplaces,
        "saleprice":this.house.saleprice
      }
      console.log("Doing Update")
      this.housecrud.put(body)
      .subscribe(data=>{
        console.log(data)
      })
    }
  }

  onSaveResult(){
    const body = {
      "overallqual": this.house.overallqual,
      "grlivarea":this.house.grlivarea,
      "garagecars":this.house.garagecars,
      "totalbsmsf":this.house.totalbsmsf,
      "fullbath":this.house.fullbath,
      "totrmsabvgrd":this.house.totrmsabvgrd,
      "yearbuilt":this.house.yearbuilt,
      "yearremodadd":this.house.yearremodadd,
      "fireplaces":this.house.fireplaces,
      "saleprice":this.house.saleprice
    }
    console.log("Data to pass: ", body)
    this.housecrud.post(body)
    .subscribe(data=>{
      console.log(data)
      this.dbUpdate = !this.dbUpdate
      this.OnUpdate.emit(this.dbUpdate)
      console.log(this.dbUpdate)
    })
  }

  onDeleteRecord(){
    this.housecrud.delete(this.house.Id)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
