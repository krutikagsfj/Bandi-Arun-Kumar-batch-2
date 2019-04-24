import { Component, OnInit } from '@angular/core';
import { MobileservService } from '../mobileserv.service';

export class MobilePhn{
  "mobileid":number;
  "mobName":string;
  "mobPrice":number;
  constructor(mobileid:number,mobName:string,mobPrice:number)
  {
      this.mobileid=mobileid;
      this.mobName=mobName;
      this.mobPrice=mobPrice;
  }
}

@Component({
  selector: 'app-mobilecom',
  templateUrl: './mobilecom.component.html',
  styleUrls: ['./mobilecom.component.css']
})


export class MobilecomComponent implements OnInit {

  mobiles:Array<MobilePhn>=[];
  constructor(private serv:MobileservService) { }

  deleterow(row)
  {
   const index=this.mobiles.indexOf(row);
   this.mobiles.splice(index,1);
  }

  ngOnInit() {
    this.serv.getmobile().subscribe(data =>
      {
        this.mobiles=data;
        console.log(this.mobiles);
      });
      // err =>{
      //   console.log("sorry,problem");
      // }
  }
  column: string = "mobileid";
  order: boolean = true;
  sortrow(column: string) {
    if (this.column == column) {
      this.order = !this.order;
    } else {
      this.order = true;
      this.column = column;
    }
  }

}
