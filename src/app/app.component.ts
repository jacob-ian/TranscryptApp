import { Component, OnInit } from '@angular/core';
import { clear, time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TranscriptApp';

  ngOnInit(): void {
    /*
    // Set the viewport wrapper to the window height
    const wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.setAttribute('style', `min-height:${window.innerHeight}px`);

    // Create a timeout for the resize window delay
    var timeoutId;
    var delay = 300; // 200ms

    // Make sure to update the height of the viewport on resizing
    window.addEventListener('resize', () => {
      // Clear the timeout
      clearTimeout(timeoutId);

      // Delay the resize function
      timeoutId = setTimeout(() => {
        // Set the new height
        wrapper.setAttribute('style', `min-height:${window.innerHeight}px`);
      }, delay);
    });
    */
  }
}
