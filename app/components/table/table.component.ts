import { CommonModule } from '@angular/common';
import { Component , EventEmitter, Input, Output} from '@angular/core';

export interface IStudent {
  id:  number,
      
      student: string,
      email:  string,
      gender:  string,
      subject:  string,
      marks:  number,
      remark: string,
      img: string
}

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  // all data and logic goes here
  
  @Input() studentData! : any

  @Output() deleteStudentEvent = new EventEmitter()

  onDeleteStudent(studentId:number) {
      this.deleteStudentEvent.emit(studentId)
  }

  isDeleteOpen:boolean = false


}

