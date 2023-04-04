import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  id!: number;
  studentName!: string;
  studentAddress!: string;
  studentClass!: string;
  constructor(private http: HttpClient){}
  onSubmit()
  {
    const forData={
      studentName: this.studentName,
      studentAddress:this.studentAddress,
      studentClass:this.studentClass
    };
    this.http.post('http://localhost:5114/api/Students', forData).subscribe(
      response=>{
        console.log('Data saved successfully:', response);
      },
      error=>{
        console.error('Error saving Data:',error)
      }
    )
  }
}
    



/*import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });
constructor() { }
ngOnInit() {
  }
}*/
