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
} from '@angular/compiler';

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

import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx';

import { saveAs } from 'file-saver';

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
        return this.downloadPdfTranscript();
      case 'word':
        // Call the DOCX downloader function
        return this.downloadWordTranscript();

      case 'txt':
        // Call the TXT function
        return this.downloadTxtTranscript();
    }
  }

  /**
   * Download the transcript in a PDF format.
   */
  downloadPdfTranscript() {
    // Create a PDF document definition with the a title
    var doc: TDocumentDefinitions = {
      content: [],
      defaultStyle: {
        fontSize: 11,
        color: '#000',
        alignment: 'justify',
      },
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
        },
        subtitle: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          color: '#333',
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
            text: [
              'transcr',
              { text: 'y', style: 'red' },
              'p',
              { text: 't', style: 'red' },
              '.app',
            ],
          },
        ],
        link: 'https://transcrypt.app',
        style: 'subtitle',
        margin: [0, 5, 0, 20],
      },
    ];

    const htmlNodes = this.parseHtmlTranscript(this.transcriptContent);

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
   */
  downloadWordTranscript() {
    // Create the DOCX document
    const doc = new Document({
      creator: 'transcrypt.app',
      description: `Transcript for the YouTube Video ${this.videoTitle}`,
      title: `${this.videoTitle}`,
      styles: {
        paragraphStyles: [
          {
            id: 'Normal',
            name: 'Normal',
            basedOn: 'Normal',
            run: {
              size: 22,
              font: 'Calibri',
            },
          },
          {
            id: 'Heading1',
            name: 'Heading 1',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
              size: 36,
              bold: true,
            },
            paragraph: {
              alignment: AlignmentType.CENTER,
            },
          },
          {
            id: 'Heading2',
            name: 'Heading 2',
            basedOn: 'Normal',
            next: 'Normal',
            quickFormat: true,
            run: {
              size: 24,
              bold: true,
            },
            paragraph: {
              alignment: AlignmentType.CENTER,
            },
          },
          {
            id: 'MainBody',
            name: 'Body',
            basedOn: 'Normal',
            quickFormat: true,
            run: {
              size: 22,
            },
            paragraph: {
              alignment: AlignmentType.LEFT,
            },
          },
        ],
      },
    });

    // Create the first subtitle
    const preTitle = new Paragraph({
      text: 'Transcript for:',
      spacing: {
        before: 5,
      },
      heading: HeadingLevel.HEADING_2,
    });

    // Create a title paragraph
    const title = new Paragraph({
      heading: HeadingLevel.HEADING_1,
      text: this.videoTitle,
    });

    // Create the subtitle
    const subTitle = new Paragraph({
      children: [
        new TextRun({
          text: 'Generated by transcr',
        }),
        new TextRun({
          text: 'y',
          color: '#e62117',
        }),
        new TextRun({
          text: 'p',
        }),
        new TextRun({
          text: 't',
          color: 'e62117',
        }),
        new TextRun({
          text: '.app',
        }),
      ],
      spacing: {
        after: 100,
      },
      style: 'Heading2',
    });

    // Create an array of paragraphs
    var paragraphs = [];

    // Add the heading paragraphs to the array
    paragraphs.push(preTitle);
    paragraphs.push(title);
    paragraphs.push(subTitle);

    // Parse the html transcript and loop through each of the lines
    const html = this.parseHtmlTranscript(this.transcriptContent);
    html.forEach((line) => {
      // Make sure that this is an element node
      if (line instanceof ElementNode) {
        // Create a new paragraph object
        const parg = new Paragraph({
          style: 'MainBody',
        });

        // Loop through the children of this element
        line.children.forEach((node) => {
          // Determine if this is a text node or an element node
          if (node instanceof TextNode) {
            // Add the Text Run to the children array
            parg.addChildElement(
              new TextRun({
                text: node.value,
              })
            );
          } else if (node instanceof ElementNode) {
            // Determine if this is bold or italic based on the tag name
            var bold = false;
            var italics = false;
            if (node.name === 'b' || node.name === 'strong') {
              // This is bold
              bold = true;
            } else if (node.name === 'i' || node.name === 'em') {
              // This is italic
              italics = true;
            }

            // Determine if this node has children (it should)
            const subchildren = node.children;
            subchildren.forEach((sub) => {
              // Determine the type of node
              if (sub instanceof TextNode) {
                // Add the Text Run to the children array
                parg.addChildElement(
                  new TextRun({
                    text: sub.value,
                    bold,
                    italics,
                  })
                );
              } else if (sub instanceof ElementNode) {
                // Determine if this is bold or italic
                if (sub.name === 'b' || sub.name === 'strong') {
                  bold = true;
                } else if (sub.name === 'i' || sub.name === 'em') {
                  italics = true;
                }

                // Get the children of this sub node and get the textnode
                sub.children.forEach((subsub) => {
                  if (subsub instanceof TextNode) {
                    // Add the Text Run to the children array
                    parg.addChildElement(
                      new TextRun({
                        text: subsub.value,
                        bold,
                        italics,
                      })
                    );
                  }
                });
              }
            });
          }
        });

        // Add the paragraph to the arrays
        paragraphs.push(parg);
      }
    });

    // Put the document together
    doc.addSection({
      children: paragraphs,
    });

    // Download the document
    Packer.toBlob(doc).then((blob) => {
      // Create a filename using the video title
      const title = this.videoTitle.replace(/\s/g, '-').slice(0, 15);
      const filename = `transcrypt-${title}.docx`;

      // Save to download it
      saveAs(blob, filename);
    });
  }

  /**
   * Download the transcript as a TXT file.
   * @param timestamps true for timestamps needed, false for no timestamps
   */
  downloadTxtTranscript() {
    // Create an output string with a title
    var outputString = `Transcript for:\n${this.videoTitle}\nGenerated by https://transcrypt.app\n\n`;

    // Loop through all of the <p> tags and remove all of the other HTML tags from the html
    const lines = this.transcriptContent.split('<p>');
    lines.forEach((line) => {
      // Remove the closing </p> tag
      line = line.slice(0, line.lastIndexOf('</p>'));

      // Remove all XML/HTML tags
      line = line.replace(/<.*>|<\/.*>/g, '');

      // Remove all of the line breaks
      line = line.replace(/\n|\n\r|\r/g, ' ');

      // Add to the output string with a line break
      outputString = `${outputString}${line}\n`;
    });

    // Convert the string to a blob and then save it with filesaver
    const blob = new Blob([outputString], { type: 'text/plain' });

    // Create a filename using the video title
    const title = this.videoTitle.replace(/\s/g, '-').slice(0, 15);
    const filename = `transcrypt-${title}.txt`;

    // Save to download it
    saveAs(blob, filename);
  }

  /**
   * Parses the HTML transcript to a DOM tree object
   * @param html the HTML string
   */
  parseHtmlTranscript(html: string): any[] {
    // Create an html entity decoder for special characters
    const htmlEntities = new Html5Entities();

    // We can decode the transcript content so that all the special characters are human-readable
    var html = htmlEntities.decode(this.transcriptContent);
    html = html.replace(/\n|\r|\r\n/gm, ' ');

    // We can now parse the html to get the DOM tree
    const htmlNodes = parseTemplate(html, '', { preserveWhitespaces: false })
      .nodes;

    // Return the dom tree
    return htmlNodes;
  }
}
