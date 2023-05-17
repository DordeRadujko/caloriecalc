import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransService } from 'src/app/shared/services/trans.service';

@Component({
  selector: 'add-meal-dialog',
  templateUrl: './add-meal-dialog.component.html',
  styleUrls: ['./add-meal-dialog.component.scss']
})
export class AddMealDialogComponent {

  @Output() cancel = new EventEmitter<void>();
  activeTab = 0;
  tabs: {id: number, label: string}[] = [{id: 0, label: this.transService.translate('app.food')}, {id: 1, label: this.transService.translate('app.meals')}];

  constructor(public dialog: MatDialog,
              private transService: TransService) {}

  onTabChange(tabId: number) {
    this.activeTab = tabId;
  }

  onAccept() {
    this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
