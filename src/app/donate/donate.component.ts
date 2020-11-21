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

  // The container for the request payment button
  @ViewChild('paymentContainer', { static: true }) paymentContainer: ElementRef;

  // Create an error message string
  @Input() error: string;

  // Create a boolean for whether or not a payment request can be made
  @Input() canMakePayment: boolean = false;

  // Create a payment success thank you boolean;
  @Input() thanks: boolean = false;

  // Define stripe and its elements
  stripe;
  payButton;

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

  /**
   * Instantiate the component
   * @param service the injectible Transcrypt Service
   */
  constructor(private service: TranscryptService) {}

  async ngOnInit(): Promise<void> {
    // Load Stripe
    this.stripe = Stripe(environment.stripe.publishableKey);
  }

  /**
   * On change of value of the donation amount, the stripe element will be created.
   * @value the cents value of the donation
   * @returns a Promise of a void
   */
  async createPaymentRequest() {
    // Check to make sure that the amount is non-null
    if (this.paymentAmount) {
      // Get the Stripe Elements
      const elements = this.stripe.elements();

      // Create the payment request
      const paymentRequest = this.stripe.paymentRequest({
        country: 'AU',
        currency: this.paymentCurrency,
        total: { label: 'Donation', amount: parseInt(`${this.paymentAmount}`) },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Get the multi option payment request element
      this.payButton = elements.create('paymentRequestButton', {
        paymentRequest,
        style: {
          paymentRequestButton: {
            theme: 'light',
          },
        },
      });

      // Check if we can make a payment
      this.canMakePayment = await paymentRequest.canMakePayment();

      // Check if it can make a payment
      if (this.canMakePayment) {
        // Mount the button
        this.payButton.mount(this.paymentContainer.nativeElement);

        // Add on on change listener to display errors
        this.payButton.addEventListener('change', ({ error }) => {
          // Set the error message
          this.error = error && error.message;
        });

        // Create a listener for the paymentRequest
        paymentRequest.on('paymentmethod', async (ev) => {
          // Get the client secret from the service
          try {
            var clientSecret = this.service.getStripeClientSecret(
              this.paymentAmount,
              this.paymentCurrency
            );
          } catch (err) {
            // Return the function and set the error message
            return (this.error = err.message);
          }

          // Confirm the paymentIntent
          const {
            paymentIntent,
            error: confirmError,
          } = await this.stripe.confirmCardPayment(
            clientSecret,
            { payment_method: ev.paymentMethod.id },
            { handleActions: false }
          );

          // Check if the payment failed
          if (confirmError) {
            // Show an error
            this.error = 'The donation payment failed.';
            ev.complete('fail');
          } else {
            // The payment confirmation was successful, we can process the payment
            ev.complete('success');

            // Check the payment intent
            if (paymentIntent.status === 'requires_action') {
              // Let Stripe handle the rest
              const { error } = await this.stripe.confirmCardPayment(
                clientSecret
              );

              // Check for an error
              if (error) {
                // The payment failed, return an error
                this.error =
                  'The donation payment failed, please try another payment method.';
              } else {
                // The payment was successful
                this.thanks = true;
              }
            } else {
              // The payment was successful
              this.thanks = true;
            }
          }
        });
      } else {
        // Return an error
        this.error = "Sorry, we couldn't create a Stripe payment request.";
      }
    } else {
      // Get rid of the payButton element
      this.payButton = null;
    }
  }

  /**
   * Sets the show attribute for the donation box
   * @param value true for show, false for hide
   */
  setShow(value: boolean): void {
    // Change the value
    this.show = value;

    // Emit the value to the parent component
    this.showChanged.emit(value);
  }
}
