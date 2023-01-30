import { Component } from '@angular/core';
import jsonSample from './db.json';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}


interface json{
  id:number,
  Product:String,
  Value:number
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[]
  // standalone: true,
  providers: [NgbModalConfig, NgbModal]
})


export class AppComponent {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}
  open(content:any) {
		this.modalService.open(content);
	}
  sampleData:json[]=jsonSample;
  title = 'Change_Currency';
  countries = COUNTRIES;



}
