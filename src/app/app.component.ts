import { Component, OnInit } from '@angular/core';
import { AIService } from './ai.service';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-AI';

  searchFilter: any = { title: '' };

  set1;
  data;
  subscrition: Subscription;
  statusText: string;
  constructor(private ht: HttpClient, private a: AIService) {

  }
  ngOnInit() {
    this.subscrition = timer(0, 1000).pipe(
      switchMap(() => this.a.getMethod())
    ).subscribe(res => {
      console.log(res)
      this.set1 = res
      this.data = this.set1.hits
    });



  }
  Modal(id) {
    console.log(id)
    this.a.postMethod(id).subscribe(res => console.log(res));
  }

  public select: any;

  public changeColor(e) {
    this.select = e.title;
  }

}
