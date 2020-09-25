import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * A YouTube API Search result
 */
interface CaptionsList {
  captionsCount: number;
  captions: CaptionId[];
}

interface CaptionId {
  etag: string;
  id: string;
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

  @Input() errorMessage: string;

  // Constructor method
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private http: HttpClient
  ) {
    this.urlForm = this.formBuilder.group({
      url: '',
    });
  }

  ngOnInit(): void {
    // Get the validation SVGs and the url input
    this.validSvg = document.getElementById('url-valid');
    this.invalidSvg = document.getElementById('url-invalid');
    this.loadingRing = document.getElementById('url-loading-ring');

    this.urlInput = document.getElementById('url-input');
  }

  /**
   * Begin the process of downloading the transcript when the form is submitted
   * @param data The data from the submitted form
   */
  onSubmit(data) {
    // Get the URL from the form
    const url = data.url;

    // Get the captions track index
    const captions = data.captions;
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

  async validateUrl(url: string) {
    // Create an example of a valid URL and get its length
    const validUrl = 'https://www.youtube.com/watch?v=';
    const lenValidUrl = validUrl.length;

    // Check if the first part of the url string matches the valid URL
    if (url.slice(0, lenValidUrl) === validUrl) {
      // We have a valid URL so far, now we need to check that the video requested exists
      // Get the YouTube video id from the URL Search Params
      var id = url.slice(lenValidUrl);

      // Check if there are any other parameters in the URL
      if (id.includes('&')) {
        id = id.slice(0, id.indexOf('&'));
      }

      // Check the length of the id
      if (!id.length) {
        // The id doesn't exist, therefore it is invalid
        this.invalidUrl();
      } else {
        // Clear the invalid styling
        this.clearValidationStyles();
      }

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
  async apiListCaptions(id: string): Promise<CaptionsList> {
    try {
      // Get a response from the API
      var response = await this.http
        .get('https://www.googleapis.com/youtube/v3/captions', {
          params: {
            part: 'id',
            videoId: id,
            key: 'AIzaSyDD-tPF3CNoekbd9AEpq_BZjE66AtcsW0o',
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

    // Create an array of captions IDs
    var captions: CaptionId[] = [];

    body.items.forEach((caption) => {
      const captionId: CaptionId = {
        id: caption.id,
        etag: caption.etag,
      };
      captions.push(captionId);
    });

    // Create an output object
    const output: CaptionsList = {
      captionsCount: body.items.length,
      captions,
    };
    return output;
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
