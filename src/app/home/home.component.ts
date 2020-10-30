import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';

import { parse as parseUrl } from 'query-string';

/**
 * Create a caption interface object
 */
interface Caption {
  baseUrl: string; // the URL to the caption
  query: string;
  lang: string; // the language code for the track
  kind: 'asr' | 'standard'; // whether or not the track is autogenerated
  name: string; // the English readable name of the caption track
}

/**
 * An interface for the possible translation languages.
 */
interface TLangs {
  lang: string; // the language code
  name: string; // the Simple English language name
}

/**
 * Create a response object for the CaptionsList
 */
interface CaptionsList {
  videoTitle: string;
  captions: Caption[];
  translation_langs: TLangs[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  // Create the variable for the URL Form
  urlForm: FormGroup;

  // Get the two svgs for the validation indicator
  validSvg: HTMLElement;
  invalidSvg: HTMLElement;
  loadingRing: HTMLElement;

  // The text input for URLS
  urlInput: HTMLElement;

  // The captions selector
  captionSelect: HTMLElement;

  // The submit button
  submitButton: HTMLElement;

  // The Video ID
  videoId: string;

  // Create a variable for the error message
  @Input()
  errorMessage: string;

  // Create and initialise variable for the captions options
  @Input() captions: CaptionsList = {
    videoTitle: '',
    captions: [],
    translation_langs: [],
  };

  // Constructor method
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private router: Router,
    private functions: AngularFireFunctions
  ) {
    this.urlForm = this.formBuilder.group({
      captions: '',
      language: '',
    });
  }

  ngOnInit(): void {
    // Get the validation SVGs and the url input
    this.validSvg = document.getElementById('url-valid');
    this.invalidSvg = document.getElementById('url-invalid');
    this.loadingRing = document.getElementById('url-loading-ring');

    // Get the URL input field
    this.urlInput = document.getElementById('url-input');

    // Get the caption reel selector
    this.captionSelect = document.getElementById('url-caption-box');

    // Get the submit button
    this.submitButton = document.getElementById('url-submit');
  }

  /**
   * Begin the process of downloading the transcript when the form is submitted
   * @param data The data from the submitted form
   */
  onSubmit(data) {
    // Get the captions query string
    const query = this.urlForm.controls['captions'].value;

    // Get the title of the video
    const title = this.captions.videoTitle;

    // Create a base64url encoded data string for the query
    const dataQuery = btoa(query);

    // Get the translation language
    const tlang = this.urlForm.controls['language'].value;

    // Check if tlang was defined
    if (tlang) {
      // Route to the transcript page with all of the variables
      this.router.navigate([`/transcript`], {
        queryParams: {
          data: dataQuery,
          tlang,
          title,
        },
      });
    } else {
      // Route to the transcript page with all of the variables
      this.router.navigate([`/transcript`], {
        queryParams: {
          data: dataQuery,
          title,
        },
      });
    }
  }

  /**
   * Detect when the URL is changed so that the input can be validated
   * @param event The event from the change of text in the input.
   */
  urlChanged(event) {
    // Check if there is anything in the input
    // Get the value of the target from the event
    var value: string = event.target.value;

    // Check if there is anything
    if (value.length) {
      // We can give the input a different background color when unfocused
      this.renderer.addClass(event.target, 'not-empty');

      // We can begin validating the content of the input
      this.validateUrl(value);
    } else {
      // We can remove the 'not-empty' class since it is empty now
      this.renderer.removeClass(event.target, 'not-empty');

      // We can clear the other validation styles
      this.clearValidationStyles();
    }
  }

  /**
   * Fired with a caption track has been selected
   * @param event The event of the caption selection
   */
  captionSelected(event) {
    // Get the value of the caption
    var value = event.target.value;

    // Create a show boolean depending on there is a valid selection
    const show = value.length ? true : false;

    // Show the translate box and the submit button
    this.showTranslateBox(show);
    this.showSubmitButton(show);
  }

  /**
   * Shows the translation box.
   * @param show true for show, false for hide
   */
  showTranslateBox(show: boolean) {
    // Get the box div
    const translateBox = document.getElementsByClassName(
      'url-translate-box'
    )[0];

    // Check if we are showing or hiding the box
    const display = show ? 'flex' : 'none';

    // Trigger the display flex property
    this.renderer.setStyle(translateBox, 'display', display);
  }

  /**
   * Shows the language selection box
   * @param show true for show, false for hide
   */
  showLanguageSelect(show: boolean) {
    // Get the language selector's div
    const languageBox = document.getElementsByClassName(
      'translate-select-box'
    )[0];

    // Create an element to show an hide it
    const display = show ? 'flex' : 'none';

    // Trigger the display flex property
    this.renderer.setStyle(languageBox, 'display', display);

    // Reset the form control language
    this.urlForm.controls['language'].setValue(null);

    // Set the selected object to the first one (the placeholder)
    const select = document.getElementsByClassName('translate-select')[0][0];
    select.selected = true;
  }

  /**
   * Show or hide the submit button
   * @param show a boolean, true for show, false for hide
   */
  showSubmitButton(show: boolean) {
    // Check if we are showing or hiding
    if (show) {
      // Remove the disabled attribute from the button to show it
      this.submitButton.removeAttribute('disabled');
    } else {
      // Add the disabled attribute to the button to hide it
      this.submitButton.setAttribute('disabled', 'true');
    }
  }

  /**
   * Fires when the translate toggle radio buttons are fired
   * @param event
   */
  translateToggle(event) {
    // Check the value of the target
    const value = event.target.value;

    // Get the boolean value
    const bool = value === 'true' ? true : false;

    // Toggle the translation language selector
    this.showLanguageSelect(bool);
  }

  /**
   * Validate that the inputted URL links to an actual YouTube video
   * @param url The inputted URL to be validated
   */
  async validateUrl(url: string) {
    // Create an array of valid YouTube urls and protocols
    const protocols = ['http', 'https'];
    const validUrls = ['www.youtube.com/watch', 'youtu.be/'];

    // Split the URL and get its protocol
    try {
      var urlSplit = url.split('://');
    } catch (err) {
      // The URL is invalid since the '://' isn't included
      return this.invalidUrl();
    }

    // Get the URL protocol
    const protocol = urlSplit[0];
    if (!protocols.includes(protocol)) {
      // The URL is invalid
      return this.invalidUrl();
    }

    // Get the remaining part of the URL
    const remains = urlSplit[1];

    // Create a variable for videoId
    var videoId: any = '';

    // Check which URL is used
    if (remains.includes(validUrls[0])) {
      const query = remains.split('?')[1];

      // This is the standard URL. Decode the URL and get the 'v' parameter for the videoId
      const decodedUrl = parseUrl(query);
      videoId = decodedUrl.v;
    } else if (remains.includes(validUrls[1])) {
      // This is the mobile/shortened URL, the videoId is what is after the last slash
      videoId = remains.split('/')[1];
    } else {
      // The URL is invalid
      return this.invalidUrl();
    }

    // Check the length of the VideoId to make sure it is valid
    if (videoId.length !== 11) {
      // The videoId is invalid
      return this.invalidUrl();
    }

    // Clear all the validation styling
    this.clearValidationStyles();

    // Start the loading animation
    this.startLoadingAnimation();

    // Access the YouTube Video search API to check if the video exists
    try {
      var captionsList = await this.listCaptions(videoId);

      // Stop the loading animation
      this.stopLoadingAnimation();

      // Set the url as valid
      this.validUrl();

      // Display the caption tracks to be chosen from
      this.captions = captionsList;
      this.showCaptionsSelect(true);
    } catch (err) {
      // Stop the loading animation
      this.stopLoadingAnimation();

      // Call the invalid URL method
      this.invalidUrl();

      // Display the mesage to the user
      return this.displayError(err.message);
    }
  }

  /**
   * The inputted URL is invalid, therefore we need to show the cross next to the input
   */
  invalidUrl() {
    // Clear the validation styligns
    this.clearValidationStyles();

    // Add the show class to the invalid svg
    this.renderer.addClass(this.invalidSvg, 'show');
    this.renderer.addClass(this.urlInput, 'input-invalid');
  }

  /**
   * The inputted URL is valid, therefore we need to display the check mark.
   */
  validUrl() {
    // Clear the validation stylings
    this.clearValidationStyles();

    // Add the show class to the valid svg and set the box to green
    this.renderer.addClass(this.validSvg, 'show');
    this.renderer.addClass(this.urlInput, 'input-valid');
  }

  /**
   * Clears the elements of the validation-related classes
   */
  clearValidationStyles() {
    // Remove the show class from the icons
    this.renderer.removeClass(this.validSvg, 'show');
    this.renderer.removeClass(this.invalidSvg, 'show');

    // Remove the borders from the input
    this.renderer.removeClass(this.urlInput, 'input-invalid');
    this.renderer.removeClass(this.urlInput, 'input-valid');

    // Reset the captions object
    this.captions = {
      videoTitle: '',
      captions: [],
      translation_langs: [],
    };

    // Hide the error
    this.hideError();

    // Hide the translate box
    this.showTranslateBox(false);

    // Hide the captions reel
    this.showCaptionsSelect(false);

    // Hide the submit button
    this.showSubmitButton(false);
  }

  startLoadingAnimation() {
    // Remove the hidden class from the loading ring
    this.renderer.removeClass(this.loadingRing, 'hidden');
  }

  stopLoadingAnimation() {
    // Add the hidden class to the loading ring
    this.renderer.addClass(this.loadingRing, 'hidden');
  }

  /**
   * Use the YouTube Data API to fetch a list of the available captions tracks for the video
   * @param id The YouTube Video ID to be searched for
   * @returns a promise to a Search Result object
   */
  async listCaptions(id: string): Promise<CaptionsList> {
    // Set the videoId variable
    this.videoId = id;

    // Define the firebase cloud function for getting the list of captions
    var getCaptionsList = this.functions.httpsCallable('getCaptionsList');

    // Get the list of captions and translations
    try {
      var list: CaptionsList = await getCaptionsList({
        videoId: id,
      }).toPromise();
    } catch (error) {
      // Get the error message
      var message = error.message;

      // Return the message
      throw { message };
    }

    // Return the list
    return list;
  }

  /**
   * Display a selectable list of captions to convert to transcripts to the user.
   * @param show true for show, false for hide
   */
  showCaptionsSelect(show: boolean) {
    // Determine whether to show or hide with a display property
    const display = show ? 'block' : 'none';

    // Add the show class to the select object
    this.renderer.setStyle(this.captionSelect, 'display', display);
  }

  /**
   * Display an error to the user
   * @param message the error message to display
   */
  displayError(message: string) {
    // Set the error message variable to the error
    this.errorMessage = message;

    // Get the error message box
    const messageBox = document.getElementsByClassName('url-error')[0];

    // Make it visible
    this.renderer.addClass(messageBox, 'url-error-show');
  }

  /**
   * Hide the error message
   */
  hideError() {
    // Get the error message box
    const messageBox = document.getElementsByClassName('url-error')[0];

    // Make it visible
    this.renderer.removeClass(messageBox, 'url-error-show');
  }
}
