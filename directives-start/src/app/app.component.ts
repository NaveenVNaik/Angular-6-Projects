import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  btnname = "Only show odd numbers";

  btnToggle(){
    this.onlyOdd = !this.onlyOdd;
    if (this.onlyOdd === false)
      this.btnname = "Only show odd numbers";
    else
      this.btnname = "Only show even numbers";
  }
}
