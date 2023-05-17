import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'edit-meal-dialog',
  templateUrl: './edit-meal-dialog.component.html',
  styleUrls: ['./edit-meal-dialog.component.scss']
})
export class EditMealDialogComponent {

  @Output() cancel = new EventEmitter<void>();

  selectedIngredient: string = '';
  ingredients = [{id: 1, name: 'Spaghetti bolognese'}, {id: 2, name: 'Spaghetti bolognese'}, {id: 3, name: 'Spaghetti bolognese'}, {id: 4, name: 'Spaghetti bolognese'}];

  constructor(public dialog: MatDialog) {}

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
