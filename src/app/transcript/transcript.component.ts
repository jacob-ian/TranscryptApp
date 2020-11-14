import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import {
  parseTemplate,
  Text as CompilerText,
  Element as CompilerElement,
} from '@angular/compiler';
import { TranscryptService } from '../transcrypt.service';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { Html5Entities } from 'html-entities';

import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from 'docx';

import { saveAs } from 'file-saver';

// Lets create some classes to define instances of the HTML nodes
class TextNode extends CompilerText {
  static [Symbol.hasInstance](obj) {
    // State that if it has the value property, it is a textnode
    if (obj.value) {
      return true;
    }
  }
}
// An HTML element node type
class ElementNode extends CompilerElement {
  static [Symbol.hasInstance](obj) {
    // State that if it has the children property, it is an element
    if (obj.children) {
      return true;
    }
  }
}

/**
 * A transcript form/data object
 */
interface TranscriptForm {
  videoTitle: string; // the YouTube video title
  videoId: string; // The YouTube video ID
  timestamps: boolean; // Whether or not to show timestamps
  htmlWithTime: string; // the HTML transcript with timestamps
  htmlNoTime: string; // the HTML transcript without timestamps
  html: string; // the HTML string of the transcript for the container
}

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {
  // Create a transcrypt form object
  transcript: TranscriptForm = {
    videoId: null,
    videoTitle: null,
    timestamps: false,
    htmlWithTime: null,
    htmlNoTime: null,
    html: null,
  };

  // Create the button download options object
  downloadOptions = [
    { value: 'pdf', name: 'PDF' },
    { value: 'word', name: 'DOC' },
    { value: 'txt', name: 'TXT' },
  ];

  // Create a boolean to enable the form inputs
  @Input() ready: boolean = false;

  // Create a loading boolean for the spinner
  @Input() loading: boolean = true;

  // Create an error message variable
  @Input() error: string = null;

  // Create the variables for the material progress spinner
  @Input() spinnerMode: ProgressSpinnerMode = 'indeterminate';
  @Input() spinnerDiameter: number = 24;
  @Input() spinnerColor: ThemePalette = 'accent';

  constructor(private service: TranscryptService, private router: Router) {
    // Get the pdf fonts
    (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  async ngOnInit(): Promise<void> {
    // Start the loading
    this.loading = true;

    // Get the current route so we can get the transcript data
    const url = this.router.parseUrl(this.router.url);

    // Get the URL encoded data for the transcript request
    const encodedBaseUrl = url.queryParams.data;
    const tlang = url.queryParams.tlang;

    // Get the other URL encoded data
    this.transcript.videoTitle = url.queryParams.title;

    // Decode the data query to get the videoId
    const data = atob(encodedBaseUrl);
    this.transcript.videoId = data.slice(
      data.indexOf('v=') + 2,
      data.indexOf('&', data.indexOf('v='))
    );

    try {
      // Fetch the transcript from the Transcrypt service
      const {
        transcriptNoTime,
        transcriptWithTime,
      } = await this.service.getTranscript(encodedBaseUrl, tlang);

      // Set the transcript form data variables
      this.transcript.htmlWithTime = transcriptWithTime;
      this.transcript.htmlNoTime = transcriptNoTime;

      // Set the html transcript variable
      this.transcript.html = this.transcript.timestamps
        ? this.transcript.htmlWithTime
        : this.transcript.htmlNoTime;

      // Set the buttons to ready
      this.ready = true;

      // Stop loading
      this.loading = false;
    } catch (err) {
      // Stop the loading
      this.loading = false;

      // Get the error message
      const message = err.message;

      // Show the error
      this.error = message;
    }
  }

  /**
   * Called when the timestamps model changes, updates the html transcript.
   */
  updateTranscript(): void {
    // Set the html transcript variable
    this.transcript.html = this.transcript.timestamps
      ? this.transcript.htmlWithTime
      : this.transcript.htmlNoTime;
  }

  /**
   * Submit the form to download the transcript as a file
   * @param event The button (click) event
   */
  submit(event) {
    // Use the event to get the value of the button
    const format: 'pdf' | 'word' | 'txt' | 'srt' = event.target.value;

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
        text: this.transcript.videoTitle,
        style: 'header',
        link: `https://www.youtube.com/watch?v=${this.transcript.videoId}`,
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

    // Get the HTML nodes
    const htmlNodes = this.parseHtmlTranscript(this.transcript.html);

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
    const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
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
      description: `Transcript for the YouTube Video ${this.transcript.videoTitle}`,
      title: `${this.transcript.videoTitle}`,
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
      text: this.transcript.videoTitle,
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
    const html = this.parseHtmlTranscript(this.transcript.html);
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
      const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
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
    var outputString = `Transcript for:\n${this.transcript.videoTitle}\nGenerated by https://transcrypt.app\n\n`;

    // Create an HTML entities decoder
    const htmlEntities = new Html5Entities();

    // Loop through all of the <p> tags and remove all of the other HTML tags from the html.
    const lines = this.transcript.html.split('<p>');
    lines.forEach((line) => {
      // Remove the closing </p> tag
      line = line.slice(0, line.lastIndexOf('</p>'));

      // Decode the html entities
      line = htmlEntities.decode(line);

      // Remove all bold and italic tags
      line = line.replace(
        /<b>|<\/b>|<i>|<\/i>|<strong>|<\/strong>|<em>|<\/em>/g,
        ''
      );

      // Remove all of the line breaks
      line = line.replace(/\n|\n\r|\r/g, ' ');

      // Add to the output string with a line break
      outputString = `${outputString}${line}\n`;
    });

    // Convert the string to a blob and then save it with filesaver
    const blob = new Blob([outputString], { type: 'text/plain' });

    // Create a filename using the video title
    const title = this.transcript.videoTitle.replace(/\s/g, '-').slice(0, 15);
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
    var html = htmlEntities.decode(this.transcript.html);
    html = html.replace(/\n|\r|\r\n/gm, ' ');

    // We can now parse the html to get the DOM tree
    const htmlNodes = parseTemplate(html, '', { preserveWhitespaces: false })
      .nodes;

    // Return the dom tree
    return htmlNodes;
  }
}
