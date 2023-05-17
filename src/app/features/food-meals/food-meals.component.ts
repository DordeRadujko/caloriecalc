import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFoodDialogComponent } from './dialogs/edit-food-dialog/edit-food-dialog.component';
import { EditMealDialogComponent } from './dialogs/edit-meal-dialog/edit-meal-dialog.component';
import { RemoveItemDialogComponent } from './dialogs/remove-item-dialog/remove-item-dialog.component';

type DialogNames = 'edit-food-dialog' | 'edit-meal-dialog' | 'remove-item-dialog';

@Component({
  selector: 'app-food-meals',
  templateUrl: './food-meals.component.html',
  styleUrls: ['./food-meals.component.scss']
})
export class FoodMealsComponent implements OnInit {

  @ViewChild('editFoodDialog') editFoodDialog: ElementRef | null = null;
  @ViewChild('editMealDialog') editMealDialog: ElementRef | null = null;
  @ViewChild('removeItemDialog') removeItemDialog: ElementRef | null = null;

  dialogRef: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

    openDialog(dialogName: DialogNames): void {
    let dialogComponent;
    let dialogTemplate;

    switch(dialogName) {
      case 'edit-food-dialog':
        dialogComponent = EditFoodDialogComponent;
        dialogTemplate = this.editFoodDialog;
        break;
      case 'edit-meal-dialog':
        dialogComponent = EditMealDialogComponent;
        dialogTemplate = this.editMealDialog;
        break;
      case 'remove-item-dialog':
        dialogComponent = RemoveItemDialogComponent;
        dialogTemplate = this.removeItemDialog;
        break;
    }

    if(dialogComponent) {
      this.dialogRef = this.dialog.open(dialogComponent, {
        data: {template: dialogTemplate},
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
