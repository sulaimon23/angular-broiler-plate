import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

//
@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [MatIconModule, MatMenuModule, MatToolbarModule, CommonModule],
})
export class ToolbarModule {}
