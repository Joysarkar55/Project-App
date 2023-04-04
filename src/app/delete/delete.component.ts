import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {ServeService} from '../serve.service';
import {Idata} from '../Idata';
//import{Observable}from 'rxjs';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id!: number;
  studentName!: string;
  studentAddress!: string;
  studentClass!: string;
  result!: string
  constructor(private http: HttpClient){}
  onSubmit()
  {
      this.http.delete<Idata>('http://localhost:5114/api/Students/2')
          .subscribe(() => this.result = 'Delete successful');
    }
    
  }
      
   