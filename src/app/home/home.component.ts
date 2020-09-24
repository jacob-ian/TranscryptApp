import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  urlForm;
  constructor(private formBuilder: FormBuilder) {
    this.urlForm = this.formBuilder.group({
      url: "",
    });
  }

  ngOnInit(): void {
  }

  /**
   * Begin the process of downloading the transcript when the form is submitted
   * @param data The data from the submitted form
   */
  onSubmit(data) {}

  /**
   * Detect when the URL is changed so that the input can be validated
   * @param event The event from the change of text in the input.
   */
  urlChanged(event) {
  }
}
