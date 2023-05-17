import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddMealDialogComponent } from './dialogs/add-meal-dialog/add-meal-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RemoveMealDialogComponent } from './dialogs/remove-meal-dialog/remove-meal-dialog.component';
import { ShowIngredientsDialogComponent } from './dialogs/show-ingredients-dialog/show-ingredients-dialog.component';

type DialogNames = 'add-meal-dialog' | 'remove-meal-dialog' | 'show-ingredients-dialog';

@Component({
  selector: 'app-daily-intake',
  templateUrl: './daily-intake.component.html',
  styleUrls: ['./daily-intake.component.scss']
})
export class DailyIntakeComponent implements OnInit {

  @ViewChild('addMealDialog') addMealDialog: ElementRef | null = null;
  @ViewChild('removeMealDialog') removeMealDialog: ElementRef | null = null;
  @ViewChild('showIngredientsDialog') showIngredientsDialog: ElementRef | null = null;

  dialogRef: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  removeMeal() {
    this.openDialog('remove-meal-dialog');
  }

  openDialog(dialogName: DialogNames): void {
    let dialogComponent;
    let dialogTemplate;

    switch(dialogName) {
      case 'add-meal-dialog':
        dialogComponent = AddMealDialogComponent;
        dialogTemplate = this.addMealDialog;
        break;
      case 'remove-meal-dialog':
        dialogComponent = RemoveMealDialogComponent;
        dialogTemplate = this.removeMealDialog;
        break;
      case 'show-ingredients-dialog':
        dialogComponent = ShowIngredientsDialogComponent;
        dialogTemplate = this.showIngredientsDialog;
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
