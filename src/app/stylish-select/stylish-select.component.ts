import {
  Component,
  Input,
  forwardRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-stylish-select',
  templateUrl: './stylish-select.component.html',
  styleUrls: ['./stylish-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StylishSelectComponent),
      multi: true,
    },
  ],
})
export class StylishSelectComponent implements ControlValueAccessor, OnInit {
  // The underlying select element
  @ViewChild('selectElement', { static: true }) selectRef: ElementRef;
  select: HTMLInputElement;

  // The data-label attribute
  @Input('label') label: string;

  // The form control name attribute
  @Input('formControlName') formControlName: string;

  // The name attribute
  @Input('name') name: string;

  // The ID attribute
  @Input('id') id: string;

  // The disabled attribute
  @Input('disabled') disabled = false;

  constructor() {}
  ngOnInit(): void {
    // Get the underlying select element
    this.select = this.selectRef.nativeElement;
  }

  // The select's value
  get value(): any {
    return this.select.value;
  }

  // The methods for change and touched
  onChange: any = () => {};

  onTouched: any = () => {};

  writeValue(value: any): void {
    // Change the value
    this.select.value = value;
  }
  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    // Set the disabled variable
    this.disabled = isDisabled;
  }

  /**
   * The (input) called event
   * @param event the select element's called event
   */
  inputChange(event: any) {
    // Get the event target
    const target = event.target;

    // Get the value
    const value = target.value;

    // Get the parent container (the sylish-select-wrapper)
    const wrapper = target.parentNode;

    // Check if the value is non-null
    if (value !== '') {
      // Add the class 'notempty' to the select wrapper
      wrapper.classList.add('not-empty');
    } else {
      // Remove the 'notempty' class from the select wrapper
      wrapper.classList.remove('not-empty');
    }
  }
}
