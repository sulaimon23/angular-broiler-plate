import { ElementRef, Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagenavService {
  private targetSource = new BehaviorSubject<unknown>(null);
  target$ = this.targetSource.asObservable();

  sidenav!: MatSidenav;
  screenStatus = false;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public getScreenStatus(): boolean {
    return this.screenStatus;
  }

  public setScreenStatus(status: boolean) {
    this.screenStatus = status;
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }

  setScrollTarget(target: ElementRef<unknown>) {
    this.targetSource.next(target);
  }
}
