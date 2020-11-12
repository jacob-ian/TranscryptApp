import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TranscryptService, CaptionsList } from '../transcrypt.service';

import { parse as parseUrl } from 'query-string';

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
export class StylishUrlComponent implements ControlValueAccessor, OnInit {
  // The disabled paramter for the URL box
  @Input('disabled') disabled: boolean;

  // The input name attribute
  @Input('inputName') name: string;

  // The label attribute from the parent
  @Input('label') label: string;

  // Get the input child element
  @ViewChild('urlInput', { static: true }) urlInputRef: ElementRef;
  urlInput: HTMLInputElement;

  // Variables for the material progress spinner
  @Input() spinnerColor: ThemePalette = 'accent';
  @Input() spinnerMode: ProgressSpinnerMode = 'indeterminate';
  @Input() spinnerDiameter: number = 24;

  // Variables for the URL validation
  @Input() urlValid: boolean;
  @Input() error: string;
  @Input() loading: boolean = false;

  // Input and output variables for the captionsList binding
  @Input('captionsList') captionsList: CaptionsList;
  @Output('captionsListChange') captionsListChange = new EventEmitter<
    CaptionsList
  >();

  // Input and output variables for the url binding
  @Input('url') url: string;
  @Output('urlChange') urlChange = new EventEmitter<string>();

  constructor(private service: TranscryptService) {}

  ngOnInit(): void {
    // Define the url input
    this.urlInput = this.urlInputRef.nativeElement;
  }

  /**
   * Set the url variable and emit it to the binding
   * @param url the url string
   * @returns void
   */
  setUrl(url: string): void {
    this.url = url;
    this.urlChange.emit(url);
  }

  /**
   * Set the captionsList variable and emit it to the binding
   * @param list the captionsList
   * @returns void
   */
  setCaptionsList(list: CaptionsList): void {
    this.captionsList = list;
    this.captionsListChange.emit(list);
  }

  /**
   * Handle the input changes event from the url input
   * @param event the event from the object
   */
  async inputChanged(event: any): Promise<void> {
    // Remove the error
    this.error = null;

    // Remove the valid tick
    this.urlValid = false;

    // Set the url and captionsList to null
    this.setUrl(null);
    this.setCaptionsList(null);

    // Get the target of the event
    const target = event.target;

    // Get the value of the target
    const value = target.value;

    // Get the parent of the target
    const parent = target.parentNode;

    // Check the value
    if (!value || value === '') {
      // Remove the not-empty class from the parent
      parent.classList.remove('not-empty');
    } else {
      // There is content in the input, add the not-empty class
      parent.classList.add('not-empty');
    }

    try {
      // Call the URL validation method
      return await this.validateUrl(value);
    } catch (err) {
      // Stop the loading animation
      this.loading = false;

      // Set the captionsList and url variable to null
      this.setCaptionsList(null);
      this.setUrl(null);

      // Get the error message
      const message = err.message;

      // Set the error message
      this.error = message;

      // Return the function
      return;
    }
  }

  /**
   * Validate the inputted URL against the known URL types
   * @param url the URL as a string
   * @returns void
   * @throws an error with an error message
   */
  async validateUrl(url: string): Promise<void> {
    // Start the loading animation
    this.loading = true;

    // Test the URL against known YouTube URL schemas
    // Create an array of valid YouTube urls and protocols
    const protocols = ['http', 'https'];
    const validUrls = ['www.youtube.com/watch', 'youtu.be/'];

    // Split the URL and get its protocol
    try {
      var urlSplit = url.split('://');
    } catch {
      // The URL is invalid since the '://' isn't included
      throw { message: 'The YouTube Video URL is invalid.' };
    }

    // Test the URL protocol
    const protocol = urlSplit[0];
    if (!protocols.includes(protocol)) {
      // The URL is invalid
      throw { message: 'The YouTube Video URL is invalid.' };
    }

    // Get the remaining part of the URL
    const remains = urlSplit[1];

    // Create a variable for videoId
    var videoId: any = '';

    // Check which URL is used
    if (remains.includes(validUrls[0])) {
      // Get the search query from the standard URL
      const query = remains.split('?')[1];

      // Decode the URL query and get the 'v' parameter for the videoId
      const decodedUrl = parseUrl(query);
      videoId = decodedUrl.v;
    } else if (remains.includes(validUrls[1])) {
      // This is the mobile/shortened URL, the videoId is the content after the slash
      videoId = remains.split('/')[1];
    } else {
      // The URL is invalid
      throw { message: 'The YouTube Video URL is invalid.' };
    }

    // Check the length of the VideoId to make sure it is valid
    if (videoId.length !== 11) {
      // The videoId is invalid
      throw { message: 'The YouTube Video URL is invalid.' };
    }

    // Use the videoId to fetch the captions list object
    try {
      // Fetch the captionsList object
      var captionsList = await this.service.getCaptionsList(videoId);

      // Set the url as valid
      this.urlValid = true;

      // Emit the url and the captionsList through the bindings
      this.setUrl(url);
      this.setCaptionsList(captionsList);
    } catch (err) {
      // Rethrow the error message
      throw err;
    }
  }

  /**
   * The value getter for the underlying input
   */
  get value(): string {
    // Get the value of the input
    return this.urlInput.value;
  }

  /**
   * The value setter
   */
  set value(value: string) {
    // Set the input's value
    this.urlInput.value = value;
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
}
