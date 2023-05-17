import { Component, Input } from '@angular/core';
import { ButtonBase } from '../cc-button-base';

@Component({
  selector: 'cc-button-outline',
  templateUrl: './cc-button-outline.component.html',
  styleUrls: ['./cc-button-outline.component.scss']
})
export class CcButtonOutlineComponent extends ButtonBase {
  @Input() text: string = '';
}
