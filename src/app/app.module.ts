import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ResourceDataComponent } from './resource.data';
import { ResourceDetailComponent } from './resource.detail';
// import {AddResourceComponent} from './add.resource.component';
import { ResourceService } from './resource.service';
import {InputTextModule, DataTableModule, SharedModule,
  PanelModule, MessageModule, MessagesModule} from 'primeng/primeng';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ModalModule} from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    ResourceDataComponent,
    ResourceDetailComponent
    // AddResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    InputTextModule,
    DataTableModule,
    PanelModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/resource',
        pathMatch: 'full'
      },
      {
        path: 'resource',
        component: ResourceDataComponent
      },
      {
        path: 'resource/add',
        loadChildren: 'app/user/user.module#UserModule'
      }
    ])

  ],
  providers: [ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
