import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projectapp';
  result:any;
  constructor(private http:HttpClient)
  {
  }
  ngOnInit(): void{
    {
      this.http.get("http://localhost:5114/api/Students").subscribe(data=>{console.log(data)});

    }
  }
}
