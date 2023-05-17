import { Component, Input } from '@angular/core';
import { ButtonBase } from '../cc-button-base';

@Component({
  selector: 'cc-button-solid',
  templateUrl: './cc-button-solid.component.html',
  styleUrls: ['./cc-button-solid.component.scss']
})
export class CcButtonSolidComponent extends ButtonBase {
  @Input() text: string = '';
}
