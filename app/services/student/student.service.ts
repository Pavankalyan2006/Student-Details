import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 // https://zenquotes.io/api/random

  constructor(private http: HttpClient) {}



  getQuote() {
    return this.http.get('/api/api/random')
  }

  
}
