import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, switchMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private http:HttpClient) { }

  searchByProductName(name:string){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(switchMap((x)=>from(x)),
    filter((x)=>x.title.includes(name)),
    toArray());
  }
}
