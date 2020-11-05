import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  /**
   * Create a method to go to the previous page
   */
  goBack() {
    // Use location to go back one page
    this.location.back();
  }
}
