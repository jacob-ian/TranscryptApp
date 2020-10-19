import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFireFunctions } from '@angular/fire/functions';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {
  // Create the form
  transcriptDownload: FormGroup;

  // The data and language from the URL query
  private data: string;
  private tlang: string;

  // The transcript holder div
  private transcriptContainer: HTMLElement;

  // The downloaded captions
  private downloadedCaptions: any;

  // The transcript input variable
  @Input() transcript: string;

  // Create the form boolean
  @Input() enableForm = false;

  // Create the loading boolean
  @Input() loading = true;

  constructor(
    private router: Router,
    private functions: AngularFireFunctions,
    private formBuilder: FormBuilder
  ) {
    // Construct the form
    this.transcriptDownload = this.formBuilder.group({
      timestamps: [{value: false, disabled: !this.enableForm}],
    })
  }

  async ngOnInit(): Promise<void> {
    // Get the current route so we can get the caption ID
    const url = this.router.parseUrl(this.router.url);

    // Get the URL encoded data
    this.data = url.queryParams.data;
    this.tlang = url.queryParams.tlang;

    // Get the transcript container
    this.transcriptContainer = document.getElementById('transcript-content');

    // Send it to the caption track downloader service
    try {
      this.downloadedCaptions = await this.downloadTrack(
        this.data,
        this.tlang
      );

      // Show the transcript
      this.showTranscript(false);
    } catch (err) {
      this.loading = false;
      this.transcript = err;
    }
  }

  /**
   * Download a caption track from the YouTube API
   * @param data The base64url encoded query string.
   * @param tlang the translation language
   */
  async downloadTrack(data: string, tlang: string) {
    // Use the cloud function to download the caption track
    // Define the cloud function
    const getCaptionTrack = this.functions.httpsCallable('getCaptionTrack');

    // Get the caption track
    try {
      var track = await getCaptionTrack({ data, tlang }).toPromise();
      return track;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Load the transcript into the view
   * @param timestamps boolean whether timestamps should be shown
   */
  showTranscript(timestamps: boolean) {
    // Create an empty html var
    var html = '';
    if (timestamps) {
      // Iterate over the transcript array items
      this.downloadedCaptions.text.forEach((line: string) => {
        // Convert the time to something useful
        const time = line['$'].start;

        if (time > 60) {
          // Find what the minute is
          const minute = `${Math.round(time / 60)}`;

          // Get the seconds for the hour
          var seconds = `${Math.round(time % 60)}`;

          if (seconds.length === 1) {
            seconds = `0${seconds}`;
          }

          // Create a timestamp
          var stamp = `${minute}:${seconds}`;
        } else {
          // Find the number of seconds
          var seconds = `${Math.round(time)}`;

          // Check if we need to add a leading 0
          if (seconds.length === 1) {
            seconds = `0${seconds}`;
          }

          var stamp = `0:${seconds}`;
        }

        // Get the line
        html = `${html}<p><b>${stamp}: </b>${line['_']}</p>`;
      });
    } else {
      // Iterate over the transcript array items
      this.downloadedCaptions.text.forEach((line: string) => {
        // Get the line
        html = `${html}<p>${line['_']}</p>`;
      });
    }

    // Stop the loading animation
    this.loading = false;

    // Set the transcript box to the track
    this.transcriptContainer.innerHTML = html;
    
    // Enable the form
    this.enableForm = true;
    this.transcriptDownload.controls['timestamps'].enable();
  }

  /**
   * Toggle the timestamps in the transcript
   * @param event the event of touching the checkbox
   */
  toggleTimestamp(event) {
    // Get the value of the target to determine whether it is checked or not
    const checked = event.target.checked;

    // Trigger the timestamps on the transcript
    this.showTranscript(checked);
  }

  /**
   * Submit the form to download the transcript as a file
   * @param event The submit event
   */
  onSubmit(event) {
    // Get the form control values
    const timestamps = this.transcriptDownload.value.timestamps;

    // Use the event to get the value of the button
    const format = event.submitter.value;

    // Call the transcript download function
    this.downloadTranscript(format, timestamps)
  }

  /**
   * Download the transcript as file.
   * @param format The format to download the transcript in
   */
  downloadTranscript(format: 'pdf' | 'word' | 'txt' | 'srt', timestamps: boolean){
  }


}
