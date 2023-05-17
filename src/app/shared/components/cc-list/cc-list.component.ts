import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'cc-list',
  templateUrl: './cc-list.component.html',
  styleUrls: ['./cc-list.component.scss']
})
export class CcListComponent implements OnInit {

  @Input() listData: any[] = [];
  @Input() height: string = '';
  @Input() selectable: boolean = false;
  @Input() editable: boolean = false;
  @Input() removable: boolean = false;

  @Output() onSelect = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<number>();
  @Output() onRemove = new EventEmitter<number>();

  @ContentChild('itemTemplate', {static: false}) itemTemplateRef: TemplateRef<any> | null = null;

  selected: number = -1;

  ngOnInit(): void {}

  select(idx: number) {
    if(this.selected === idx) {
      this.selected = -1;
    } else {
      this.selected = idx;
    }
    this.onSelect.emit(this.selected);
  }
}
