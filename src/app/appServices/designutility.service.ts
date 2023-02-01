import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }
  messageAlert() {
    alert("Thanks for subscribe");
  }

  // product:Object[]=[
  //   {name:'laptop',id:'001'},
  //   {name:'mobile',id:'002'},
  //   {name:'TV',id:'003'},
  //   {name:'Washing Machine',id:'004'}

  // ]


  product(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


  exchangeRates(filters: { have: string, want: string, amount: number }): Observable<any> {
    const params = filters;
    const headers = {
      'X-RapidAPI-Key': '6f96c53c8emsh18e5a2dbdec9cb5p10f6a3jsn7f0315c1f7e3',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }

    return this.http.get(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency`, { headers, params })
  }


}

