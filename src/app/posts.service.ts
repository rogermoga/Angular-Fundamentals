import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:Http) {
    console.log("PostsService Initialized");
   }

   getPosts(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts");

   }
}
