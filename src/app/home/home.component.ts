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

  onSubmit(data) {}
}
