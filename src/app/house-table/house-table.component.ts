import { Component } from '@angular/core';

@Component({
  selector: 'app-house-table',
  templateUrl: './house-table.component.html',
  styleUrls: ['./house-table.component.css']
})
export class HouseTableComponent {

  table_cols=[
    "Id",
    "OverallQual", 
    "GrLivArea", 
    "GarageCars", 
    "TotalBsmtSF", 
    "FullBath", 
    "TotRmsAbvGrd", 
    "YearBuilt", 
    "YearRemodAdd",
    "Fireplaces",
    "SalePrice"
  ] 

  
}
