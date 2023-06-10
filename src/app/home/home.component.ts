import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderItem } from '../models/OrderItem';
import { HomeService } from '../service/home.service';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public cacOrderItem : OrderItem[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getOderItem().subscribe((data)=>{
      this.cacOrderItem = data;
    })
  }


}
