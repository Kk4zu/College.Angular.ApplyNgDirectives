import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  isVisible: boolean = true;
  firstNumber = 1;
  list: number[] = [];
  onClickBtn() {
    this.isVisible = this.isVisible ? false : true;
    this.list.push(this.firstNumber);
    this.firstNumber += 1;
  }
}
