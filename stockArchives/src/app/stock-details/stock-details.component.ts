import { Component, OnInit } from '@angular/core';
import {stocks } from '../../assets/data';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../services/http.service';
@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {
  data= [];
  skip =0;
  URL:any;
  date=[11,30,2016];
  stockDate = [11,30,2016];
  searchTickerName:string = null;
  minDate = new Date(2005,1,1);
  maxDate =new Date(2016,11,31);
  constructor(private http:HttpClient,private dataService:HttpService) { 
   
  }

  ngOnInit() {
        this.dataService.currentMessage.subscribe((message)=>{
          if(message != ""){

               this.searchTicker(message);

               this.searchTickerName =message;
          }
        });
        this.getData("http://localhost:3000/stocks",this.date);
        this.URL = "http://localhost:3000/stocks";
      
  }
      //Function to get data by date;
  getByDate(formValue:any){

          let  QueryDate = formValue.split('/')
          QueryDate[0] = parseInt(QueryDate[0]) -1;
          this.data = [];
          this.date = QueryDate.slice();
          this.stockDate =QueryDate.slice();
          this.skip =0;
          this.searchTickerName = null;
          this.getData("http://localhost:3000/stocks",QueryDate);
          this.URL ="http://localhost:3000/stocks";
       
  }
      //Function to Load more Data From Server;
  loadMore(){
          console.log(this.stockDate,this.date);
          this.getData(this.URL,this.date);
        
  }

      //Function To Search by Ticker/symbol
  searchTicker(tickerName:string){
          this.data = [];
          this.skip =0;
          this.searchTickerName = tickerName;
          this.http.post("http://localhost:3000/stocks/searchticker", {ticker:tickerName,skip:this.skip}).subscribe((data:any)=>{
         
               for(var i=0;i< data.length ;i++)
                 {
                  this.data.push(data[i]);
                 } 
                  this.skip =this.skip +10;
                  this.stockDate  = null;
                  this.date =null;
                });
     
         
          this.URL = "http://localhost:3000/stocks/searchticker";
  } 
      // Genral Function for reqesting data 
  getData(URL,dateObj){

        let Obj;
        if(this.searchTickerName == null){
              Obj = {year:dateObj[2],month:dateObj[0],day:dateObj[1],skip:this.skip};
        }

        else if(this.date == null){
              Obj = {ticker:this.searchTickerName,skip:this.skip}
            }

        this.http.post(URL,Obj).subscribe((data:any)=>{
                  for(var i=0;i< data.length ;i++)
                   {
                            this.data.push(data[i]);
                  } 

                  this.skip =this.skip +10;
                  
                  if(this.date == null){
                            this.stockDate = null;
                            this.date =null;
                  }
                else{
                            this.searchTickerName =null;
                 }
                });
      }

}
