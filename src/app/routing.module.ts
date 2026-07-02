import { Route, Router, RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './shared/component/product/product-dashboard/product-dashboard.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './shared/component/home/home/home.component';
import { SingleProductComponent } from './shared/component/product/single-product/single-product.component';
import { ProductFormComponent } from './shared/component/product/product-form/product-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { UserDashboardComponent } from './shared/component/user/user-dashboard/user-dashboard.component';
import { SingleUserComponent } from './shared/component/user/single-user/single-user.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AuthGuard } from './shared/service/auth.guar';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductDashboardComponent,
    canActivateChild : [AuthGuard],
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent,
      },
      {
        path: ':productId',
        component: SingleProductComponent,
      },

      {
        path: ':productId/edit',
        component: ProductFormComponent,
      },
      {
        path: ':productId/remove',
        component: GetConfirmComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'addUser',
        component: UserFormComponent,
      },
      {
        path: ':userId',
        component: SingleUserComponent,
      },

      {
        path: ':userId/edit',
        component: UserFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
