import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-progress-bar',
  templateUrl: './cc-progress-bar.component.html',
  styleUrls: ['./cc-progress-bar.component.scss']
})
export class CcProgressBarComponent {

  @Input() color: 'green' | 'yellow' | 'red' = 'green';
  @Input() value: number = 0;

}
