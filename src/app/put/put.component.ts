import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Idata} from '../Idata';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  id!: number;
  studentName!: string;
  studentAddress!: string;
  studentClass!: string;
  constructor(private http: HttpClient){}
  onSubmit()
  {
    const forData={
      id: this.id,
      studentName: this.studentName,
      studentAddress:this.studentAddress,
      studentClass:this.studentClass
    };
    this.http.put<Idata>('http://localhost:5114/api/Students/2', forData).subscribe({
      next : data => {
        this.id = data.id
      },
      error : error=>{
        console.error('Error saving Data:',error)
      }
  
  });
}
}