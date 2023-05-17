import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'remove-item-dialog',
  templateUrl: './remove-item-dialog.component.html',
  styleUrls: ['./remove-item-dialog.component.scss']
})
export class RemoveItemDialogComponent {

  @Output() cancel = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
