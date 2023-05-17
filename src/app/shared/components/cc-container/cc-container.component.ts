import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'cc-container',
  templateUrl: './cc-container.component.html',
  styleUrls: ['./cc-container.component.scss']
})
export class CcContainerComponent implements OnInit {

  screenWidth: any;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}
