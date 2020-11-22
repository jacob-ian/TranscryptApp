import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { TranscryptService } from '../transcrypt.service';
import { environment } from 'src/environments/environment';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

// Define the stripe namespace
declare var Stripe;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50%)' }),
        animate(
          '0.3s ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '0.2s ease-in-out',
          style({ opacity: 0, transform: 'translateY(50%)' })
        ),
      ]),
    ]),
  ],
})
export class DonateComponent implements OnInit {
  // The show/hide output boolean to ngModel
  @Input('show') show: boolean;
  @Output('showChange') showChanged = new EventEmitter<boolean>();

  // Create an error message string
  @Input() error: string;

  // Create a payment success thank you/confirmation message
  @Input() thanks: string;

  // Create an input for the customer's email address
  @Input() customerEmail: string;

  // Define stripe and its elements
  stripe;
  cardElement;

  // Define the payment amounts
  paymentOptions = [
    { amount: 100, name: 'Small Donation' },
    { amount: 250, name: 'Standard Donation' },
    { amount: 500, name: 'Medium Donation' },
    { amount: 1000, name: 'Large Donation' },
  ];

  // Define the payment amount and currency
  paymentAmount: number;
  paymentCurrency: string = 'aud';

  // The show card details boolean
  @Input() showDetails: boolean = false;

  // The payment button visibility boolean
  @Input() showButton: boolean = false;

  // The form visibility boolean
  @Input() showForm: boolean = true;

  // Create a timer for mounting the card
  timer: any;

  // Create variabies for the payment loading spinner
  @Input() loading: boolean = false;
  @Input() loaderMode: ProgressSpinnerMode = 'indeterminate';
  @Input() loaderColor: ThemePalette = 'accent';
  @Input() loaderDiameter: number = 24;

  /**
   * Instantiate the component
   * @param service the injectible Transcrypt Service
   */
  constructor(private service: TranscryptService) {}

  ngOnInit(): void {
    // Load Stripe
    this.stripe = Stripe(environment.stripe.publishableKey);

    // Create the stripe element
    const elements = this.stripe.elements();

    // Style the card element
    const style = {
      base: {
        color: '#000',
        fontFamily: 'Archivo, Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: 'rgba(0,0,0,0.5)',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };

    // Create the card element
    this.cardElement = elements.create('card', { style: style });
  }

  /**
   * Mount the card element to the card-element div
   * @param mount boolean, true if mounting required
   */
  mountCardElement(mount: boolean): void {
    // Check if we are mounting or not
    if (mount) {
      // Set the show details boolean to true
      this.showDetails = true;

      // Check if the timeout is already made
      if (this.timer) {
        // Clear the timer and call again
        clearTimeout(this.timer);
      }

      // Create a timeout
      this.timer = setTimeout(() => {
        // Mount the card element
        this.cardElement.mount('#card-element');

        // Regirster an on input change listener for the card element
        this.cardElement.on('change', (event) => {
          // Remove the error
          this.error = null;

          // Hide the button
          this.showButton = false;

          // Check if the validation is complete
          if (event.complete) {
            // Show the donate button
            this.showButton = true;
          } else if (event.error) {
            // The card didn't validate correctly, show the error and hide the button
            this.showButton = false;
            this.error = event.error.message;
          }
        });
      }, 100);
    } else {
      // Hide the card details
      this.showDetails = false;
    }
  }

  /**
   * Submits the payment to the back-end handler.
   * @param event The form submission event
   */
  async submitPayment(event: any): Promise<void> {
    // Stop the default action from occurring
    event.preventDefault();

    // Call the method to pay with card
    try {
      return await this.payWithCard();
    } catch (err) {
      // Stop loading and show the error
      this.loading = false;
      this.error = err.message;
    }
  }

  /**
   * Attempt to pay with the provided card
   */
  async payWithCard(): Promise<void> {
    // Start loading and hide the form
    this.loading = true;

    // Hide the form
    this.showForm = false;

    // Create a payment intent and get the Stripe Client Secret
    try {
      var clientSecret = await this.service.getStripeClientSecret(
        this.paymentAmount,
        this.paymentCurrency
      );
    } catch (err) {
      // Rethrow the error
      throw err;
    }

    // Attempt to confirm the card payment
    try {
      var paymentResult = await this.stripe.confirmCardPayment(clientSecret, {
        receipt_email: this.customerEmail,
        payment_method: {
          card: this.cardElement,
        },
      });
    } catch (err) {
      // Rethrow the error
      throw err;
    }

    // Check if there was an error in the result
    if (paymentResult.error) {
      // Throw an error with the message
      throw { message: paymentResult.error.message };
    } else {
      // The payment was successful, display a success message
      // Stop the loading
      this.loading = false;

      // Display the success message
      this.thanks = `<h3>Donation Successful!</h3><p>Confirmation ID:</p><p class="donation-confirmation">${paymentResult.paymentIntent.id}</p><br><p>Thank you for your donation!</p>`;
    }
  }

  /**
   * Sets the show attribute for the donation box
   * @param value true for show, false for hide
   */
  setShow(value: boolean): void {
    // Prevent the dialog from closing if the payment is processing
    if (!this.loading) {
      // Change the value
      this.show = value;

      // Emit the value to the parent component
      this.showChanged.emit(value);
    }
  }
}
