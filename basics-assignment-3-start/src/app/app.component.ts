import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true;
  clickValue = 0;
  clickArray = [];
  clickIndex = 0;

  setToggle = () => {
    this.toggle = this.toggle === true ? false : true;
    this.clickArray.push(++this.clickValue);
    this.clickIndex++;
  }

  getBgColor = (i) => {
    if (i > 3)
      return 'blue';
    return 'white';
  }
}
