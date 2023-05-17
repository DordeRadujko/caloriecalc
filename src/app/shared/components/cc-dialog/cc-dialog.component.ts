import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cc-dialog',
  templateUrl: './cc-dialog.component.html',
  styleUrls: ['./cc-dialog.component.scss']
})
export class CcDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CcDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
