import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-service',
  imports: [],
  templateUrl: './todo-service.component.html',
  styleUrl: './todo-service.component.css'
})
export class TodoServiceComponent implements OnInit {

  // https://zenquotes.io/api/random

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      
  }

  getQuote() {
    return this.http.get(' https://zenquotes.io/api/random')
  }

}
