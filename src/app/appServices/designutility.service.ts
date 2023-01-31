import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }
  messageAlert(){
    alert("Thanks for subscribe");
  }

  // product:Object[]=[
  //   {name:'laptop',id:'001'},
  //   {name:'mobile',id:'002'},
  //   {name:'TV',id:'003'},
  //   {name:'Washing Machine',id:'004'}

  // ]


  product():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


  }

