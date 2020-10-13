import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

import bcp47 from 'bcp47';
import iso6391 from 'iso-639-1';
import { AngularFireFunctions } from '@angular/fire/functions';

/**
 * An information object for a caption track.
 */
interface CaptionInfo {
  id: string;
  language: string;
  name: string;
  kind: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Create the variable for the URL Form
  urlForm;

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

  // Create a variable for the error message
  @Input()
  errorMessage: string;

  // Create a variable for the captions options
  @Input()
  captions: CaptionInfo[] = [];

  // Constructor method
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private http: HttpClient,
    private router: Router,
    private functions: AngularFireFunctions
  ) {
    this.urlForm = this.formBuilder.group({
      captions: '',
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
    // Get the captions track id
    const captionId = this.urlForm.controls['captions'].value;

    // Route to a different page
    this.router.navigate(['/transcript'], {
      queryParams: { captionId },
    });
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

    // Check if there is a value or if it is empty
    if (value.length) {
      // We can enable the submit button
      this.displaySubmit();
    } else {
      // We should hide the submit button
      this.hideSubmit();
    }
  }

  /**
   * Validate that the inputted URL links to an actual YouTube video
   * @param url The inputted URL to be validated
   */
  async validateUrl(url: string) {
    // Create an example of a valid URL and get its length
    const validUrl = 'https://www.youtube.com/watch?v=';
    const lenValidUrl = validUrl.length;

    // Check if the first part of the url string matches the valid URL
    if (url.slice(0, lenValidUrl) === validUrl) {
      // We have a valid URL so far, now we need to check that the video requested exists
      // Check that there is lenValidUrl + 11 characters in the URL
      if (url.length < lenValidUrl + 11) {
        // There isn't a valid video ID
        this.invalidUrl();

        // Stop the validation
        return;
      } else {
        // The URL is valid so far
        this.clearValidationStyles();
      }
      // Get the YouTube video id from the URL Search Params
      var id = url.slice(lenValidUrl, lenValidUrl + 11);

      // Begin the loading animation
      this.startLoadingAnimation();

      // Access the YouTube Video search API to check if the video exists
      try {
        var captionsList = await this.apiListCaptions(id);
      } catch (err) {
        // Stop the loading animation
        this.stopLoadingAnimation();

        // Call the invalid URL method
        this.invalidUrl();

        // Display the mesage to the user
        this.displayError(err.message);

        return;
      }

      // Stop the loading animation
      this.stopLoadingAnimation();

      // Set the url as valid
      this.validUrl();

      // Display the caption tracks to be chosen from
      this.captions = captionsList;
      this.displayCaptions();
    } else {
      // The URL is invalid, call the invalid URL function
      this.invalidUrl();
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

    // Hide the error
    this.hideError();

    // Hide the captions reel
    this.hideCaptions();

    // Hide the submit button
    this.hideSubmit();
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
  async apiListCaptions(id: string): Promise<CaptionInfo[]> {
    // Get an access token from the cloud function
    var getAccessToken = this.functions.httpsCallable('getAccessToken');
    try {
      var token = getAccessToken({}).toPromise();
    } catch (err) {}

    try {
      // Get a response from the API
      var response = await this.http
        .get('https://www.googleapis.com/youtube/v3/captions', {
          params: {
            part: 'snippet',
            videoId: id,
            key: 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o',
          },

          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: 'text',
        })
        .toPromise();
    } catch (error) {
      // Check for an error code
      const code = error.status;

      // If the error is 404, that means the video doesn't exist
      if (code === 404) {
        const err = {
          error: 'invalid_video',
          message: 'The requested YouTube video URL is invalid.',
        };
        throw err;
      } else {
        const err = {
          error: 'server_error',
          message:
            'There was a problem accessing YouTube to verify the video. Please try again later.',
        };
        throw err;
      }

      // Return that Youtube couldn't be accessed
    }
    // Get the body of the response
    const body = JSON.parse(response);

    // Check if there are any captions
    if (!body.items.length) {
      // Throw an error that there aren't any captions associated with this video
      const err = {
        error: 'no_captions',
        message:
          'A transcript cannot be created as the requested video has no captions.',
      };
      throw err;
    }

    // Create an array of captions infos
    var captions: CaptionInfo[] = [];

    // Loop through the body items to fetch the caption information
    body.items.forEach((item) => {
      // Get the snippet
      const snippet = item.snippet;

      // Check if there is a name provided for the caption
      if (snippet.name !== undefined && snippet.name !== '') {
        // We can use the provided name
        var name = `${snippet.name}`;
      } else {
        // The name isn't provided, so we must create one
        // We can use the language of the track and whether or not it has been
        // auto-generated to form the name

        // Check if it has been autogenerated
        if (snippet.trackKind === 'standard') {
          // The additional generated string can be left empty
          var autoGen = '';
        } else if (snippet.trackKind === 'asr') {
          // We can add the auto generated disclaimer
          var autoGen = ' (Auto-generated)';
        }

        // Parse the BCP language code
        const lang = bcp47.parse(snippet.language).langtag.language.language;

        // Get the name of the language
        const language = iso6391.getName(lang);

        // The name of the track can now be created
        var name = `${language}${autoGen}`;
      }

      // Create the info object
      const captionInfo: CaptionInfo = {
        id: item.id,
        language: snippet.language,
        name,
        kind: snippet.trackKind,
      };

      // Add the caption info object to the array
      captions.push(captionInfo);
    });

    // Sort the array alphabetically
    captions = captions.sort((a, b) => {
      // Return the sorting function
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    // Return the array of caption infos
    return captions;
  }

  /**
   * Display a selectable list of captions to convert to transcripts to the user
   */
  displayCaptions() {
    // Add the show class to the select object
    this.renderer.addClass(this.captionSelect, 'show-select');
  }

  /**
   * Hide the captions selector since the valid URL has been removed.
   */
  hideCaptions() {
    // Remove the show class from the select object
    this.renderer.removeClass(this.captionSelect, 'show-select');
  }

  /**
   * Display the submit button since the input data is now all valid.
   */
  displaySubmit() {
    // Remove the disabled attribute from the button
    this.submitButton.removeAttribute('disabled');
  }

  /**
   * Hide the submit button since the URL was removed
   */
  hideSubmit() {
    // Add the disabled attribute from the button
    this.submitButton.setAttribute('disabled', 'true');
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