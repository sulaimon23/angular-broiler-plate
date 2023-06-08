import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { PagenavService } from './pagenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements AfterViewInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  sidebarSubscription = false;
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private pagenavService: PagenavService
  ) {
    this.isHandset$.subscribe((ele) => {
      this.sidebarSubscription = ele;
      this.pagenavService.setScreenStatus(ele);
    });
  }

  ngAfterViewInit(): void {
    this.pagenavService.setSidenav(this.sidenav);
  }
}
