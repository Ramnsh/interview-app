import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {AddResourceComponent} from './add.resource.component';

@NgModule({
  declarations: [
    AddResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        { path: 'user', component: AddResourceComponent}
    ])

  ]
})
export class UserModule { }
