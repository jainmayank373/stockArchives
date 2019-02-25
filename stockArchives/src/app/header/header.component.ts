import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhos;3000/').subscribe((data)=>{
      console.log(data);
    })
  }

}
