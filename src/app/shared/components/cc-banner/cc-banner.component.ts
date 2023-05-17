import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-banner',
  templateUrl: './cc-banner.component.html',
  styleUrls: ['./cc-banner.component.scss']
})
export class CcBannerComponent {

  @Input() text: string = '';
  @Input() color: 'green' | 'yellow' | 'red' = 'yellow';
  @Input() size: 'md' | 'lg'  = 'md';

  constructor() {}

}
