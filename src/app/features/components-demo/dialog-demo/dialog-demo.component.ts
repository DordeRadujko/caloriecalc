import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'cc-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent {

  @Output() cancel = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
