import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cc-tabs',
  templateUrl: './cc-tabs.component.html',
  styleUrls: ['./cc-tabs.component.scss']
})
export class CcTabsComponent implements OnInit {

  @Input() tabs: {id: number, label: string}[] = [];
  @Output() activeTabChange = new EventEmitter<number>();

  activeTab: number = 0;

  ngOnInit(): void {}

  onActiveTabChange(id: number) {
    this.activeTab = id;
    this.activeTabChange.emit(this.activeTab);
  }

}
