import { Component, ɵɵtextInterpolate } from '@angular/core';
import jsonSample from './db.json';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DesignutilityService } from './appServices/designutility.service';
import { JsonPipe } from '@angular/common';



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


interface json {
  id: number,
  Product: String,
  Value: number
}


const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

// Currrencies:[];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[]
  // standalone: true,
})


export class AppComponent {



  dataForm: FormGroup<any> = new FormGroup({
    Currency: new FormControl('')
  });
  sampleData: json[] = jsonSample;
  title = 'Change_Currency';
  countries = COUNTRIES;
  Currencies: String[] = ['INR', 'PKR', 'USD', 'EUR', 'AUD', 'CAD', 'CNY', 'NZD', 'BZR', 'SEK', 'ZAR', 'HKD'];
  Curr: any;

  products!: any;

  constructor(private fb: FormBuilder, private _msgService: DesignutilityService) {
    // this.products = this._msgService.product;
    this._msgService.product().subscribe((data)=>{
      this.products=data;

    })

  }

  ngOninit() {
    this.setupForm();
  }

  private setupForm(): void {
    this.dataForm = this.fb.group({
      Currency: [""]
    })
  }

  submit() {
    this.Curr = this.dataForm.get('Currency')?.value;

    console.log(this.Curr);

    console.dir(Object.keys(this.products).length);
    console.log(this.products);

        // for(let i=0;i<Object.keys(this.products).length;i++)
        // {


        // }


        // (this.products)=>{
        //   for(let i=0;i){

        //   }
        }


        // function isVoid<T>(products: T | void): products is void {
        //   return products === null || obj === undefined;
        // }
    // console.log(this.products|json);


  }



  // item=this.fb.array;

