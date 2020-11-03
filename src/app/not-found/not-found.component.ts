import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() page: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Get the page requested
    this.page = this.router.url;
  }
}
