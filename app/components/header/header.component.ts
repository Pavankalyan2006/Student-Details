import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, ReversePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  constructor(private router:Router) {}


  haa() {
    this.router.navigateByUrl('about')
  }
  

  //  data types number, string, boolean, null, any, undefned

  // data binding
  /*
      one way data binding - ts to html
      interpolation, property binding

      two way 
       both sides from ts to html and html to ts
       import formsModle - [(mgModel)]


       directives

       ngif 
       ngfor

       attribute directives

         [ngStyle]="{'font-size': '20px'}"
       [ngClass]="{'fail' : student.marks < 50, 'pass': student.marks >= 50 }"

       pipes 
       modify the data 

       


  */ 
   



  

}
