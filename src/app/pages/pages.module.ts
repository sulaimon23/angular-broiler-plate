import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarModule } from './toolbar/toolbar.module';

//
@NgModule({
  declarations: [PagesComponent, SidebarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    ToolbarModule,
  ],
})
export class PagesModule {}
