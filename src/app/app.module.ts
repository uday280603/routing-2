import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/component/product/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './shared/component/product/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { NavbarComponent } from './shared/component/navbar/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SingleProductComponent } from './shared/component/product/single-product/single-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { UserDashboardComponent } from './shared/component/user/user-dashboard/user-dashboard.component';
import { SingleUserComponent } from './shared/component/user/single-user/single-user.component';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    NavbarComponent,
    HomeComponent,
    SingleProductComponent,
    GetConfirmComponent,
    UserDashboardComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
