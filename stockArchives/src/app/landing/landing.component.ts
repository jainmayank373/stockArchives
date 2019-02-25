import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  message:string;
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    
         
  }
  searchTicker(message:any){
      this.httpService.changeMessage(message);
    
  }
}
