import { Component } from '@angular/core';
import {ServeService} from '../serve.service';
import {Idata} from '../Idata';
import{Observable}from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    public response:Observable<Idata[]>;
    constructor(public service:ServeService)
    {
      this.response=this.service.getPosts();
      console.log(this.response)
    }
    ngOnInit(){}
  
  }


