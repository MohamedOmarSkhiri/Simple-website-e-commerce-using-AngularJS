import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavmenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavmenuComponent]
})
export class SharedModule { }
