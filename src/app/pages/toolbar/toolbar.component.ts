import { Component, ViewEncapsulation } from '@angular/core';
import { PagenavService } from '../pagenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {
  sidebarStatus = false;
  constructor(public pagenav: PagenavService) {}

  toggleRightSidenav() {
    this.pagenav.toggle();
  }
}
