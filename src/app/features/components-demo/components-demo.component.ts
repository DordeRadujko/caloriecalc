import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CcDialogComponent } from 'src/app/shared/components/cc-dialog/cc-dialog.component';

@Component({
  selector: 'cc-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent implements OnInit {

  active: string | null = null;

  @ViewChild('dialogTemplate') dialogTemplate: ElementRef | null = null;
  dialogRef: any;

  testForm: FormGroup;
  name: string = 'Text';

  selectedOption: string = '';
  filteredOptions = [{id: 1, name: 'Option 1'}, {id: 2, name: 'Option 2'}, {id: 3, name: 'Option 3'}, {id: 4, name: 'Option 4'},];

  darkMode = false;

  constructor(public dialog: MatDialog) {
     this.testForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {  }

  toggleTheme(e: boolean) {
    this.darkMode = e;
  }

  show(c: string) {
    this.active = c;
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(CcDialogComponent, {
      data: {template: this.dialogTemplate},
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onTabChange(activeTab: number) {
    console.log(activeTab);
  }

  onSubmit() {
    console.log(this.testForm.value);
    console.log(this.name)
  }

}
