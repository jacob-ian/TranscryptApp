import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stylish-url',
  templateUrl: './stylish-url.component.html',
  styleUrls: ['./stylish-url.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StylishUrlComponent),
      multi: true,
    },
  ],
})
export class StylishUrlComponent implements ControlValueAccessor {
  // The disabled paramter for the URL box
  @Input('disabled') disabled: boolean;

  // The label attribute from the parent
  @Input('label') label: string;

  // Get the input element
  @ViewChild('urlInput') urlInputRef: ElementRef;
  urlInput: HTMLInputElement;

  constructor() {}

  /**
   * Handle the input changes event
   * @param event the event from the object
   */
  inputChanged(event: any): void {}

  get value(): string {
    // Get the value of the input
    return this.urlInput.value;
  }

  // The methods for change and touched
  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(obj: any): void {
    // Write the value to the URL input
    this.urlInput.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Change the disabled state
    this.disabled = isDisabled;
  }

  ngAfterViewInit(): void {
    // Get the input element
    this.urlInput = this.urlInputRef.nativeElement;
  }
}
