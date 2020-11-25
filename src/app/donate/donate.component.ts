import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  AnimationEvent,
} from '@angular/animations';

import { TranscryptService } from '../transcrypt.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

interface ConfirmedDonation {
  id: string; // The paymentIntent ID
  amountReceived: number; // the amount received
  cardDetails: string; // the card brand and last 4 numbers
}

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'out',
        style({
          opacity: 0,
          transform: 'translateY(25%)',
          display: 'none',
          'flex-grow': 0,
        })
      ),
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          display: '*',
          'flex-grow': 1,
        })
      ),
      transition('in <=> out', [
        style({ display: '*', 'flex-grow': 0.001 }),
        animate('0.3s ease-in-out'),
      ]),
    ]),
    trigger('fadeInOut', [
      state(
        'out',
        style({
          opacity: 0,
          display: 'none',
          'flex-grow': 0,
        })
      ),
      state(
        'in',
        style({
          opacity: 1,
          display: '*',
          'flex-grow': 1,
        })
      ),
      transition('in <=> out', [
        style({ display: '*', 'flex-grow': 0.001 }),
        animate('0.3s ease-in-out'),
      ]),
    ]),
    trigger('specialFadeInOut', [
      transition(':enter', [
        style({ opacity: 0, 'flex-grow': 0.001 }),
        animate('0.2s ease-in-out', style({ opacity: 1, 'flex-grow': 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1, 'flex-grow': 1 }),
        animate(
          '0.2s ease-in-out',
          style({
            opacity: 0,
            'flex-grow': 0.001,
          })
        ),
      ]),
    ]),
  ],
})
export class DonateComponent implements OnInit {
  // The show/hide output boolean to ngModel
  @Input('show') show: boolean;
  @Output('showChange') showChanged = new EventEmitter<boolean>();

  // Get the card view
  @ViewChild('cardView', { static: true }) cardViewRef: ElementRef;
  cardView: HTMLElement;

  // Create an error message string
  @Input() error: string;

  // Create a card validation boolean
  @Input() validCard: boolean = false;

  // Create the staging, request complete boolean
  @Input() requestComplete: boolean = false;

  // Create a payment success thank you/confirmation message
  @Input() donationComplete: boolean;

  // Create a variable to control the opacity of all of the content
  @Input() contentOpacity: number = 1;

  // Create an input for the customer's email address
  @Input() customerEmail: string;

  // Create an input for the confirmed donation details
  @Input()
  donation: ConfirmedDonation = {
    id: null,
    amountReceived: null,
    cardDetails: null,
  };

  // Define stripe and its elements
  @Input('stripe') stripe: any;
  cardElement;

  // Define the payment amounts
  paymentOptions = [
    { amount: 250, name: 'Standard Donation', amountPretty: '$2.50' },
    { amount: 500, name: 'Medium Donation', amountPretty: '$5.00' },
    { amount: 1000, name: 'Large Donation', amountPretty: '$10.00' },
  ];

  // Define the payment amount and currency
  paymentAmount: number;
  paymentCurrency: string = 'aud';

  // The payment button visibility boolean
  @Input() showButton: boolean = false;

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
    // Define the card view
    this.cardView = this.cardViewRef.nativeElement;

    // Create the Stripe card element
    this.createCardElement();
  }

  /**
   * Mount the card element to the card-element div
   */
  createCardElement(): void {
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
        color: '#e62117',
        iconColor: '#e62117',
      },
    };

    // Create the card element
    this.cardElement = elements.create('card', { style: style });

    // Mount the card element to the DOM
    this.cardElement.mount('#card-element');

    // Regirster an on input change listener for the card element
    this.cardElement.on('change', (event) => {
      // Remove the error
      this.error = null;

      // Hide the button
      this.showButton = false;

      // Check if the validation is complete
      if (event.complete) {
        // Set the card to valid
        this.validCard = true;

        // Show the donate button
        this.showButton = true;
      } else if (event.error) {
        // The card didn't validate correctly, show the error and hide the button
        this.validCard = false;
        this.showButton = false;
        this.error = event.error.message;
      }
    });
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
      setTimeout(() => {
        this.requestComplete = false;
        this.error = err.message;
      }, 100);
    }
  }

  /**
   * Attempt to pay with the provided card
   */
  async payWithCard(): Promise<void> {
    // Start loading and hide the form by setting the request to complete
    this.requestComplete = true;
    setTimeout(async () => {
      this.loading = true;

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
            billing_details: {
              email: this.customerEmail,
            },
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
        // Stop the loading and pass the request staging boolean
        this.loading = false;

        // Wait for the loading to disappear
        setTimeout(() => {
          // Set done on the payment
          this.donationComplete = true;

          // Save the payment ID and the received amount
          this.donation.id = paymentResult.paymentIntent.id;
          this.donation.amountReceived = paymentResult.paymentIntent
            .amount_received
            ? paymentResult.paymentIntent.amount_received
            : this.paymentAmount;

          // Check if the charges object is available
          const charges = paymentResult.paymentIntent.charges;
          if (charges) {
            // Get the card details from the payment intent
            const cardDetails =
              paymentResult.paymentIntent.charges.data[0].payment_method_details
                .card;

            const cardBrand: string = cardDetails.brand;
            const cardLastFour: string = cardDetails.last4;

            // Create a string for the card used
            this.donation.cardDetails = `${cardBrand.toUpperCase()} x-${cardLastFour}`;
          }
        }, 200);
      }
    }, 200);
  }

  /**
   * Returns the more readable version of the payment amount
   * @param amount the payment amount in cents
   * @returns a string with the pretty amount
   */
  getPrettyAmount(amount: number): string {
    // Convert to string
    const amountStr = `${amount / 100}`;

    // Split at the decimal place
    if (amountStr.includes('.')) {
      const split = amountStr.split('.')[1];

      // Check how many decimal places we have
      if (split.length < 2) {
        // Add a zero to the end
        return `${amountStr}0`;
      } else {
        return amountStr;
      }
    } else {
      // Add a decimal place and two 0s
      return `${amountStr}.00`;
    }
  }

  /**
   * Sets the show attribute for the donation box
   * @param value true for show, false for hide
   */
  setShow(value: boolean): void {
    // Prevent the dialog from closing if the payment is processing
    if (!this.loading) {
      // Set all of the content opacity to 0
      this.contentOpacity = 0;

      // Let the opacity fade before emitting the show value
      setTimeout(() => {
        // Change the value
        this.show = value;

        // Emit the value to the parent component
        this.showChanged.emit(value);
      }, 200);
    }
  }
}
