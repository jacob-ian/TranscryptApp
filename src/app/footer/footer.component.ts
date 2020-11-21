import { Component, OnInit, Input, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('showDonation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FooterComponent implements OnInit {
  @Input() year: number;

  @Input() version: string;

  @Input() showDonate: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Set the year in the copyright
    this.year = new Date(Date.now()).getFullYear();

    // Get and set the version
    this.version = environment.appVersion;
  }

  /**
   * Close the donation prompt on back button
   */
  @HostListener('window:popstate')
  onPopState() {
    this.showDonate = false;
  }
}
