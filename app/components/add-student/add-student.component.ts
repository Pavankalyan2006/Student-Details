import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-student',
  imports: [FormsModule, CommonModule, ReactiveFormsModule,],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {

  @Input() parentData?: string 

  collegeObj!: FormGroup

  studentObj = {
    id:  0,
    
      student: '',
      email:  '',
      gender:  '',
      subject:  '',
      marks:  0,
      remark: '',
      img: 'default-person.png'
  }

  
  isExpanded = false;


  studentmessage = 'form data'

  

  constructor(private formBuilder: FormBuilder ) {

  }

  ngOnInit(): void {
    this.collegeObj = this.formBuilder.group({
      id: [0, Validators.required],
      collegeName: [''],
      location: ['']
    })
  }

  

  toggleDiv() {
    this.isExpanded = !this.isExpanded;
  }

  // create event
  @Output() addStudentEvent = new EventEmitter()

  @Output() createStudentEvent = new EventEmitter()


  onAddStudentSave() {
      // this.addStudentEvent.emit(this.studentmessage)
      // console.log('student form data', this.studentObj);
      this.createStudentEvent.emit(this.studentObj)

      this.studentObj = {
        id:  0,
        
          student: '',
          email:  '',
          gender:  '',
          subject:  '',
          marks:  0,
          remark: '',
          img: 'default-person.png'
      }
      
  }

  saveCollege() {
    
    console.log('college form', this.collegeObj.value);
    
  }




}
