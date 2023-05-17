import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'remove-meal-dialog',
  templateUrl: './remove-meal-dialog.component.html',
  styleUrls: ['./remove-meal-dialog.component.scss']
})
export class RemoveMealDialogComponent {

  @Output() cancel = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
