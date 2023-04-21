import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/cardinterfaces';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  api_Url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor( private http : HttpClient) {}
  
  getCards( name: string | null, offset = 0){
    const params: any = {
      num: 100,
      offset,
    };
    if (name) params.fname = name;
   return this.http.get<Card[]>(this.api_Url, {params})
              .pipe(
                map( (res: any) => res.data));
  }

  getById( id:string ){
    const params = {id}
    return this.http.get<Card>(this.api_Url, {params})
               .pipe( map(( res: any)=> res.data[0]));
  }
}
