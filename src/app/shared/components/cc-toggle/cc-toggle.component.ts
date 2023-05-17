import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'cc-toggle',
  templateUrl: './cc-toggle.component.html',
  styleUrls: ['./cc-toggle.component.scss']
})
export class CcToggleComponent implements OnInit {

  @Input() checked: boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onToggle(e: MatSlideToggleChange) {
    this.change.emit(e.checked);
  }

}
