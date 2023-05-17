import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cc-progress-circle',
  templateUrl: './cc-progress-circle.component.html',
  styleUrls: ['./cc-progress-circle.component.scss']
})
export class CcProgressCircleComponent implements OnInit {

  @Input() done: number = 0;
  @Input() goal: number = 0;

  degreesDone = 0;

  background = 'conic-gradient(#206B53 ' + 0 + 'deg, #1BA87B ' + 0 + 'deg)';

  ngOnInit(): void {
    this.degreesDone = this.goal === 0 ? 0 : 360 * this.done/this.goal;
    this.background = 'conic-gradient(#206B53 ' + this.degreesDone + 'deg, #1BA87B ' + this.degreesDone + 'deg)';
  }

}
