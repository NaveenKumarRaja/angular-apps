import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'
import { RouterModule, Routes } from '@angular/router';
import { CFComponent } from './cf/cf.component';
import { WsComponent } from './ws/ws.component';
import { LoansComponent } from './loans/loans.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';



const routes: Routes = [
  {path:'customer form',component:CFComponent},
  {path:'ws',component:WsComponent},
  {path:'loans',component:LoansComponent},
  {path:'customer details',component:CustomerDetailComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    CFComponent,
    WsComponent,
    LoansComponent,
    CustomerDetailComponent,



  ],
  imports: [
    BrowserModule,MatFormFieldModule,MatTreeModule,
    FormsModule, ReactiveFormsModule,MatDatepickerModule,
    AppRoutingModule,MatListModule,MatInputModule,
    BrowserAnimationsModule, MatCardModule, MatToolbarModule, MatIconModule,
    MatButtonToggleModule,MatNativeDateModule,MatPaginatorModule,
    MatSelectModule,CdkTableModule,MatTableModule,CdkTreeModule,
    MatButtonModule,MatSidenavModule, RouterModule.forRoot(routes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
