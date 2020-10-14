import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {
  // The videoId and language from the URL query
  private videoId: string;
  private lang: string;

  @Input() transcript: string;

  constructor(private router: Router, private functions: AngularFireFunctions) {
    this.functions.useFunctionsEmulator('http://localhost:5000');
  }

  async ngOnInit(): Promise<void> {
    // Get the current route so we can get the caption ID
    const url = this.router.parseUrl(this.router.url);

    // Get the caption ID
    this.videoId = url.queryParams.videoId;
    this.lang = url.queryParams.lang;

    // Send it to the caption track downloader service
    try {
      var downloadedCaptions = await this.downloadTrack(
        this.videoId,
        this.lang
      );

      // Set the transcript box to the track
      this.transcript = downloadedCaptions;
    } catch (err) {
      console.log(err);
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
}
