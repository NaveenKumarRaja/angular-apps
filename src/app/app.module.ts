import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { RouterModule, Routes } from '@angular/router';
import { CFComponent } from './cf/cf.component';
import { WsComponent } from './ws/ws.component';



const routes: Routes = [
  {path:'customer form',component:CFComponent},
  {path:'weekly form',component:WsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    CFComponent,
    WsComponent,
    
  
  ],
  imports: [
    BrowserModule,MatFormFieldModule,
    FormsModule, ReactiveFormsModule,MatDatepickerModule,
    AppRoutingModule,MatListModule,MatInputModule,
    BrowserAnimationsModule, MatCardModule, MatToolbarModule, MatIconModule,
    MatButtonModule,MatSidenavModule, RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
