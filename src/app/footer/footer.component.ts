import { Component, OnInit, Input, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';
import { trigger, style, animate, transition } from '@angular/animations';

// Declare stripe
declare var Stripe: any;

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
    ]),
  ],
})
export class FooterComponent implements OnInit {
  @Input() year: number;

  @Input() version: string;

  @Input() showDonate: boolean = false;

  // Create the Stripe instance
  stripe;

  constructor() {}

  ngOnInit(): void {
    // Set the year in the copyright
    this.year = new Date(Date.now()).getFullYear();

    // Get and set the version
    this.version = environment.appVersion;

    // Load Stripe
    this.stripe = Stripe(environment.stripe.publishableKey);
  }

  /**
   * Close the donation prompt on back button
   */
  @HostListener('window:popstate')
  onPopState() {
    this.showDonate = false;
  }
}
