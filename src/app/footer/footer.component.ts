import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input()
  year: number;

  @Input() version: string;

  constructor() {}

  ngOnInit(): void {
    // Set the year in the copyright
    this.year = new Date(Date.now()).getFullYear();

    // Get and set the version
    this.version = environment.appVersion;
  }
}
