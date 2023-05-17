import { Component, Input } from "@angular/core";

@Component({
  template: ''
})
export abstract class ButtonBase {
  @Input() textColor: string = '';
  @Input() backgroundColor: string = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge'  = 'md';
  @Input() disabled: boolean = false;
}
