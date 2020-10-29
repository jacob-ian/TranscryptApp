import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireFunctions } from '@angular/fire/functions';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { Html5Entities } from 'html-entities';

import {
  parseTemplate,
  Text as CompilerText,
  Element as CompilerElement,
  preserveWhitespacesDefault,
} from '@angular/compiler';

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

  // The videoId and title
  private videoId: string;
  private videoTitle: string;

  // The transcript holder div
  private transcriptContainer: HTMLElement;

  // The downloaded captions
  private downloadedCaptions: any;

  // The transcript content
  private transcriptContent: string;

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
      timestamps: [{ value: false, disabled: !this.enableForm }],
    });

    // Get the pdf fonts
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  async ngOnInit(): Promise<void> {
    // Get the current route so we can get the caption ID
    const url = this.router.parseUrl(this.router.url);

    // Get the URL encoded data
    this.data = url.queryParams.data;
    this.tlang = url.queryParams.tlang;
    this.videoTitle = url.queryParams.title;

    // Get the videoId from the data object
    const data = atob(this.data);
    this.videoId = data.slice(
      data.indexOf('v=') + 2,
      data.indexOf('&', data.indexOf('v='))
    );

    // Get the transcript container
    this.transcriptContainer = document.getElementById('transcript-content');

    // Send it to the caption track downloader service
    try {
      this.downloadedCaptions = await this.downloadTrack(this.data, this.tlang);
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
    // Initialize the transcript string
    this.transcriptContent = '';

    if (timestamps) {
      // Get the length of the array
      const length = this.downloadedCaptions.text.length;

      // Find the bigget value of time in the array to determine the timestamp format
      const maxTime = this.downloadedCaptions.text[length - 1]['$'].start;

      // Check if there are any hours
      const maxHours = Math.floor(maxTime / 3600);

      // Create the time format depending on the time range
      var timeFormat: 'hours' | 'minutes' = 'minutes';

      // Check if we are in the hours range
      if (maxHours !== 0) {
        timeFormat = 'hours';
      }

      // Iterate over the transcript array items
      this.downloadedCaptions.text.forEach((line: any) => {
        // Convert the time to something useful
        const time = line['$'].start;

        // Depending on the time format required, create a timestamp
        if (timeFormat === 'minutes') {
          // Calculate the number of minutes
          var hours = '';
          var minutes = `${Math.floor(time / 60)}:`;
          var seconds = `${Math.floor(time % 60)}`;

          if (minutes.length === 2) {
            minutes = `0${minutes}`;
          }

          if (seconds.length === 1) {
            seconds = `0${seconds}`;
          }
        } else {
          // Create a value to hold all the seconds
          var allTime = time;

          // Calculate the digits
          var hours = `${Math.floor(allTime / 3600)}:`;
          allTime %= 3600;
          var minutes = `${Math.floor(allTime / 60)}:`;
          var seconds = `${Math.floor(allTime % 60)}`;

          // Create the strings
          if (hours.length === 2) {
            hours = `0${hours}`;
          }

          if (minutes.length === 2) {
            minutes = `0${minutes}`;
          }

          if (seconds.length === 1) {
            seconds = `0${seconds}`;
          }
        }

        // Create the timestamp
        var stamp = `${hours}${minutes}${seconds}`;

        // Get the line
        this.transcriptContent = `${this.transcriptContent}<p><b>${stamp}: </b>${line['_']}</p>`;
      });
    } else {
      // Iterate over the transcript array items
      this.downloadedCaptions.text.forEach((line: string) => {
        // Get the line
        this.transcriptContent = `${this.transcriptContent}<p>${line['_']}</p>`;
      });
    }

    // Stop the loading animation
    this.loading = false;

    // Set the transcript box to the track
    this.transcriptContainer.innerHTML = this.transcriptContent;

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
    // Use the event to get the value of the button
    const format: 'pdf' | 'word' | 'txt' | 'srt' = event.submitter.value;

    // Get the timestamps boolean
    const timestamps = this.transcriptDownload.value.timestamps;

    // Determine which download function to use based on the format
    switch (format) {
      case 'pdf':
        // Call the PDF downloader function
        return this.downloadPdfTranscript(timestamps);
      case 'word':
        // Call the DOCX downloader function
        return this.downloadWordTranscript(timestamps);

      case 'txt':
        // Call the TXT function
        return this.downloadWordTranscript(timestamps);

      case 'srt':
        // Call the SRT function
        return this.downloadSrtTranscript(timestamps);
    }
  }

  /**
   * Download the transcript in a PDF format.
   * @param timestamps true for timestamps needed, false for no timestamps
   */
  downloadPdfTranscript(timestamps: boolean) {
    // Create a PDF document definition with the a title
    var doc: TDocumentDefinitions = {
      content: [],
      defaultStyle: {
        fontSize: 11,
        color: '#000',
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subtitle: {
          fontSize: 12,
          bold: true,
          alignment: 'center',
          color: '#555',
        },
        red: {
          color: '#e62117',
        },
      },
    };

    // Create a content array
    var content: any = [
      {
        text: 'Transcript for:',
        style: 'subtitle',
        margin: [0, 5, 0, 0],
      },
      {
        text: this.videoTitle,
        style: 'header',
        link: `https://www.youtube.com/watch?v=${this.videoId}`,
        margin: [0, 5, 0, 0],
      },
      {
        text: [
          'Generated by ',
          {
            text: 'transcrypt.app',
            style: 'red',
            link: 'https://transcrypt.app',
          },
        ],
        style: 'subtitle',
        margin: [0, 5, 0, 20],
      },
    ];

    // Create an html entity decoder for special characters
    const htmlEntities = new Html5Entities();

    // Lets create some classes to define instances of the HTML nodes
    class TextNode extends CompilerText {
      static [Symbol.hasInstance](obj) {
        // State that if it has the value property, it is a textnode
        if (obj.value) {
          return true;
        }
      }
    }

    class ElementNode extends CompilerElement {
      static [Symbol.hasInstance](obj) {
        // State that if it has the children property, it is an element
        if (obj.children) {
          return true;
        }
      }
    }

    // We can decode the transcript content so that all the special characters are human-readable
    var html = htmlEntities.decode(this.transcriptContent);
    html = html.replace(/\n|\r|\r\n/gm, ' ');

    // We can now parse the html to get the DOM tree
    const htmlNodes = parseTemplate(html, '', { preserveWhitespaces: false })
      .nodes;

    // We can now loop through all of the HTML <p> tags as lines
    htmlNodes.forEach((line) => {
      // Make sure that this line is an ElementNode
      if (line instanceof ElementNode) {
        // Create an output line object
        var out = { text: [] };

        // Get the children of the <p> tag line
        const nodes = line.children;

        // Loop through each of the nodes
        nodes.forEach((node) => {
          if (node instanceof TextNode) {
            // The node is just text, therefore we can add that to the array without styling
            out.text.push(node.value);
          } else if (node instanceof ElementNode) {
            // Determine the tag of the element
            const tag = node.name;

            // Create an bold and italics boolean
            var bold = false;
            var italics = false;
            if (tag === 'b' || tag === 'strong') {
              bold = true;
            } else if (tag === 'i' || tag === 'em') {
              italics = true;
            }

            // Create an output object for this tag
            var nodeOut = { text: [] };

            // Check for the children of this node
            const children = node.children;
            if (children.length) {
              // We need to loop through the children
              children.forEach((child) => {
                if (child instanceof TextNode) {
                  // We can add the value to the text array
                  nodeOut.text.push({
                    text: child.value,
                    bold,
                    italics,
                  });
                } else if (child instanceof ElementNode) {
                  // We have to determine the tag
                  const tag = child.name;

                  if (tag === 'b' || tag === 'strong') {
                    bold = true;
                  } else if (tag === 'i' || tag === 'em') {
                    italics = true;
                  }

                  // Create an output variable
                  var childOut = { text: [] };

                  // Get the next levels of children
                  var subchildren = child.children;
                  subchildren.forEach((sub) => {
                    // Check for a text node
                    if (sub instanceof TextNode) {
                      // Add the value to the text array
                      childOut.text.push({
                        text: sub.value,
                        bold,
                        italics,
                      });
                    }
                  });

                  // Add the child object to the node out object
                  nodeOut.text.push(childOut);
                }
              });
            }

            // Add the nodeOut varible to the doc
            out.text.push(nodeOut);
          }
        });
      }

      // Add the line to the document
      content.push(out);
    });

    // Put the content inside the document definitions
    doc.content = content;

    // Create a filename using the video title
    const title = this.videoTitle.replace(/\s/g, '-').slice(0, 15);
    const filename = `transcrypt-${title}.pdf`;

    // Save the pdf to download it
    return pdfMake.createPdf(doc).download(filename);
  }

  /**
   * Download the transcript as a DOCX file.
   * @param timestamps true for timestamps needed, false for no timestamps
   */
  downloadWordTranscript(timestamps: boolean) {}

  /**
   * Download the transcript as a TXT file.
   * @param timestamps true for timestamps needed, false for no timestamps
   */
  downloadTxtTranscript(timestamps: boolean) {}

  /**
   * Download the transcript as a SRT file.
   * @param timestamps true for timestamps needed, false for no timestamps
   */
  downloadSrtTranscript(timestamps: boolean) {}
}
