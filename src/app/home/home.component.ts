import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NestedDataService } from '../service/nested-data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent  implements OnInit{
  constructor(private http: HttpClient,public nestedData:NestedDataService) { }
  jsonData:any[]=[];
  nemployee!:any[];


  // fetchData() {
  //   this.http.get('src/assets/companyData.json').subscribe(data => {
      
  //     console.log(data);
  //     this.jsonData=data;

  //   });
  // }
 
  ngOnInit() {
    // this.fetchData();
    this.http.get<any[]>('assets/companyData.json').subscribe(data => {
      this.jsonData = data;
      // this.jsonDatainData=data.nemployee;
      console.log(this.jsonData);
      
    });
    // this.nestedData.getData().subscribe(data => {
    //   this.nemployee= data.nemployee; 
    //   console.log(this.nemployee);
    // });
  

  }
  showData(){

  }
  
  visible: boolean = false;
nestedEmpArray:any[]=[];

    showDialog(data:any) {
        this.visible = true;
        console.log(data.nemployee);
        this.nestedEmpArray=data.nemployee;

    }
}
