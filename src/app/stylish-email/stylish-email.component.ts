import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stylish-email',
  templateUrl: './stylish-email.component.html',
  styleUrls: ['./stylish-email.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StylishEmailComponent),
      multi: true,
    },
  ],
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
export class StylishEmailComponent implements OnInit, ControlValueAccessor {
  // Create the label input
  @Input('label') label: string;

  // Create the not-empty boolean
  @Input() notEmpty: boolean = false;

  // The disabled attribute
  @Input('disabled') disabled = false;

  // Create the reference to the email input
  @ViewChild('email', { static: true }) emailRef: ElementRef;
  emailInput: HTMLInputElement;

  // Create a valid email output emitter
  @Output('email') email: string;
  @Output('emailChange') emailChange = new EventEmitter<string>();

  // Create the validation booleans/string
  @Input() valid: boolean = false;
  @Input() error: string;

  // Create an input timeout
  timeoutId: any;

  constructor() {}

  // Create the value setter/getter
  get value(): string {
    return this.emailInput.value;
  }
  set value(value: string) {
    this.emailInput.value = value;
  }

  // The methods for change and touched
  onChange: any = () => {};

  onTouched: any = () => {};

  // The write value method
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Set the disabled attribute
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    // Define the email input
    this.emailInput = this.emailRef.nativeElement;
  }

  /**
   * Validate the email input
   * @param value the email string in the input
   */
  validateEmail(value: string) {
    // Check if there is any input
    if (value && value.length > 0) {
      // Add the not-empty class to the parent
      this.notEmpty = true;

      // Check for a timeout
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      // Create the timeout
      this.timeoutId = setTimeout(() => {
        // Check the input with regex
        const validInput = value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

        // Check if any valid emails were returned
        if (validInput) {
          // Remove the error
          this.error = null;

          // Set the email as valid
          this.valid = true;

          // Emit the email address
          this.setEmail(validInput[0]);
        } else {
          // Set the email to invalid
          this.error = 'Please enter a valid email address.';
        }
      }, 500);
    } else {
      // The input is empty, remove all validation
      this.valid = false;
      this.error = null;
      this.notEmpty = false;

      // Send out a null email
      this.setEmail(null);
    }
  }

  /**
   * Output a valid email
   * @param email the email string
   */
  setEmail(email: string) {
    // Set and emit the email
    this.email = email;
    this.emailChange.emit(email);
  }
}
