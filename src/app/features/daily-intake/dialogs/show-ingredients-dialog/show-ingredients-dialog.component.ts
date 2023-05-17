import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'show-ingredients-dialog',
  templateUrl: './show-ingredients-dialog.component.html',
  styleUrls: ['./show-ingredients-dialog.component.scss']
})
export class ShowIngredientsDialogComponent {

  @Output() cancel = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
