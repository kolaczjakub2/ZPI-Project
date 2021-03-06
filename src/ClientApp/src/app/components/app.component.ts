import { Component, ViewEncapsulation, OnInit, OnDestroy, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate(['login']);
  }
}
