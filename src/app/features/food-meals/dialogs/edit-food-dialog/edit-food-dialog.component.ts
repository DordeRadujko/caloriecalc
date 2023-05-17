import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'edit-food-dialog',
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.scss']
})
export class EditFoodDialogComponent {

  @Output() cancel = new EventEmitter<void>();

  selectedUnit: string = '';
  units = [{id: 'g', name: 'g'}, {id: 'ml', name: 'ml'}];

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
