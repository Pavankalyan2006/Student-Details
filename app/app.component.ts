import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

import { IStudent, TableComponent } from './components/table/table.component';
import { AddStudentComponent } from "./components/add-student/add-student.component";
import { StudentService } from './services/student/student.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, TableComponent, AddStudentComponent, AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'todoApp';



  quoteData:any

  studentData: any = [
    // {  id:  1,
    //   img: 'virat.webp',
    //   student: 'Kumar Anil',
    //   email:  'kumargmail.com',
    //   gender:  'male',
    //   subject:  'maths',
    //   marks:  44,
    //   remark: ''}
  ]

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
      this.getQuoteData()

      setInterval(() => {
        this.getQuoteData()
      }, 4000);
  }

  getQuoteData() {
    this.studentService.getQuote().subscribe({
      next: (res) => {
          console.log('quote data', res);
          this.quoteData = res
      },
      error:(err) => {

      }
    })
  }

  handleAddStudent(event:any) {
    // console.log('data from parent', event);
    console.log('student data in parent', event);

    if(event) {
      this.studentData.push(event)
    }
    
    
  }

  handleDeleteStudent(event: any) {
      console.log('delete student id', event);
      // this.studentData = [...this.studentData.filter((item: any) => {
      //       if(item.id !== Number(event)) {
      //         console.log('matched stu data', item);
              
      //         return item
      //       }
      // })]

      // this.studentData = [...this.studentData.filter((item: any) => item.id !== Number(event))];

      // console.log('student list after delete', this.studentData);

      const index = this.studentData.findIndex((item: any) => item.id === event);
      if (index !== -1) {
        this.studentData.splice(index, 1); // Remove the matched item
        this.studentData = [...this.studentData]; // Ensure change detection
      }
      
      
  }

}
