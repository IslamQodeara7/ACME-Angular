import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { StarsComponent } from '../stars/stars.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    StarsComponent,
    FormsModule
  ]
})
export class SharedModule { }
