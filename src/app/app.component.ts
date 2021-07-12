import { Component, OnInit } from '@angular/core';
import { clear, time } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TranscriptApp';

  ngOnInit(): void {}
}
