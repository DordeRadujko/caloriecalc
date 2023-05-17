import { Component, Input } from '@angular/core';
import { ButtonBase } from '../cc-button-base';

@Component({
  selector: 'cc-button-icon',
  templateUrl: './cc-button-icon.component.html',
  styleUrls: ['./cc-button-icon.component.scss']
})
export class CcButtonIconComponent extends ButtonBase {
  @Input() icon: string = '';
}
