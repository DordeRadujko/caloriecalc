import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-divider',
  templateUrl: './cc-divider.component.html',
  styleUrls: ['./cc-divider.component.scss']
})
export class CcDividerComponent {
  @Input() vertical: boolean = false;
}
