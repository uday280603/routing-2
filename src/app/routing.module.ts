import { Route, Router, RouterModule, Routes } from '@angular/router';
import { ProductDashboardComponent } from './shared/component/product/product-dashboard/product-dashboard.component';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HomeComponent } from './shared/component/home/home/home.component';
import { SingleProductComponent } from './shared/component/product/single-product/single-product.component';
import { ProductFormComponent } from './shared/component/product/product-form/product-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { UserDashboardComponent } from './shared/component/user/user-dashboard/user-dashboard.component';
import { SingleUserComponent } from './shared/component/user/single-user/single-user.component';
import { UserFormComponent } from './shared/component/user/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductDashboardComponent,
    children : [
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
  }
    ]
  },
  {
    path: 'products/addProduct',
    component: ProductFormComponent,
  },
  {
    path: 'products/:productId',
    component: SingleProductComponent,
  },

  {
    path: 'products/:productId/edit',
    component: ProductFormComponent,
  },
  {
    path: 'products/:productId/remove',
    component: GetConfirmComponent,
  },
  {
    path: 'users',
    component: UserDashboardComponent,
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
  {
    path: 'users/addUser',
    component: UserFormComponent,
  },
  {
    path: 'users/:userId',
    component: SingleUserComponent,
  },

  {
    path: 'users/:userId/edit',
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
