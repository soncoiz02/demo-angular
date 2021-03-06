import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableDameComponent } from './table-dame/table-dame.component';
import { TableAvatarComponent } from './table-avatar/table-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableDameComponent,
    TableAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
