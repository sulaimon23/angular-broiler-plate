import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarItems = [
    {
      to: '',
      label: 'Pages',
      icon: 'analytics.svg',
    },
    {
      to: '',
      label: 'Pages',
      icon: 'analytics.svg',
    },
    {
      to: '',
      label: 'Pages',
      icon: 'analytics.svg',
    },
    {
      to: '',
      label: 'Pages',
      icon: 'analytics.svg',
    },
  ];

  constructor(private router: Router) {}

  isRouteActive(route: string) {
    return this.router.isActive(route, false);
  }

  logOut() {
    //
  }
}
