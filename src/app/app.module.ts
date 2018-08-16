import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashComponent } from './dash/dash.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './service/AuthGuard.service';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
const routes: Routes = [
  {path: 'dash', component: DashComponent},
  { path: '', component: MainComponent, canActivate: [AuthGuardService]},
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAngularModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AmplifyService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
