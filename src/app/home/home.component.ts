import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaptionsList } from '../transcrypt.service';
import { trigger, style, animate, transition } from '@angular/animations';

/**
 * The form interface
 */
interface TranscryptForm {
  url: string; // The YouTube video ID
  videoId: string; // The YouTube video ID
  videoTitle: string; // the YouTube video title
  captionsList: CaptionsList; // the captionsList object
  captions: string; // the baseURL for the selected caption track
  translation: {
    enabled: boolean; // whether to auto-translate is needed
    language: string; // the translation language code
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
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
export class HomeComponent implements OnInit {
  /**
   * The model for the form
   */
  transcrypt: TranscryptForm = {
    url: null,
    videoId: null,
    videoTitle: null,
    captionsList: null,
    captions: null,
    translation: {
      enabled: false,
      language: null,
    },
  };

  // Constructor method
  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * Function called when the URL input changes to reset the form
   * @returns void
   */
  resetForm(): void {
    this.transcrypt = {
      url: null,
      videoId: null,
      videoTitle: null,
      captionsList: null,
      captions: null,
      translation: {
        enabled: false,
        language: null,
      },
    };
  }

  /**
   * Get the data from the form and send it to the /transcript page.
   * @param data The data from the submitted form
   */
  submit(data: TranscryptForm): void {
    // Create a base64url encoded data string for the baseURL of the captions track
    const dataQuery = btoa(data.captions);

    // Check if translation was enabled
    if (data.translation.enabled) {
      // Route to the transcript page with all of the variables
      this.router.navigate([`/transcript`], {
        queryParams: {
          data: dataQuery,
          tlang: data.translation.language,
          title: data.videoTitle,
        },
      });
    } else {
      // Route to the transcript page with all of the variables
      this.router.navigate([`/transcript`], {
        queryParams: {
          data: dataQuery,
          title: data.videoTitle,
        },
      });
    }
  }
}
