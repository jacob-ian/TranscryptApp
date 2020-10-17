import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {
  // The videoId and language from the URL query
  private videoId: string;
  private lang: string;

  // The transcript holder div
  private transcriptContainer: HTMLElement;

  // The downloaded captions
  private downloadedCaptions: any;

  // The transcript input variable
  @Input() transcript: string;

  constructor(
    private router: Router,
    private functions: AngularFireFunctions,
    private renderer: Renderer2
  ) {}

  async ngOnInit(): Promise<void> {
    // Get the current route so we can get the caption ID
    const url = this.router.parseUrl(this.router.url);

    // Get the caption ID
    this.videoId = url.queryParams.videoId;
    this.lang = url.queryParams.lang;

    // Get the transcript container
    this.transcriptContainer = document.getElementById('transcript-content');

    // Send it to the caption track downloader service
    try {
      this.downloadedCaptions = await this.downloadTrack(
        this.videoId,
        this.lang
      );

      // Show the transcript
      this.showTranscript(false);
    } catch (err) {
      this.transcript = err;
    }
  }

  /**
   * Download a caption track from the YouTube API
   * @param videoId The captionId of the requested caption track.
   * @param lang the selected language
   */
  async downloadTrack(videoId: string, lang: string) {
    // Use the cloud function to download the caption track
    // Define the cloud function
    const getCaptionTrack = this.functions.httpsCallable('getCaptionTrack');

    // Get the caption track
    try {
      var track = await getCaptionTrack({ videoId, lang }).toPromise();
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

    // Set the transcript box to the track
    this.transcriptContainer.innerHTML = html;
  }

  /**
   * Toggle the timestamps in the transcript
   * @param event the event of touching the checkbox
   */
  toggleTimestamp(event) {
    // Get the value of the target to determine whether it is checked or not
    const checked = event.target.checked;

    if (checked) {
      // We must get the track if it exists and enable timestamps
      this.showTranscript(true);
    } else {
      // We can remove the timestamps
      this.showTranscript(false);
    }
  }
}
