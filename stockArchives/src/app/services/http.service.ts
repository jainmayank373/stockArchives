import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HttpService {
private message =  new BehaviorSubject<string>("");
currentMessage = this.message.asObservable();
  constructor(private http:HttpClient) { }

  changeMessage(message:any){
    this.message.next(message);

  }
  
}
