import { Routes } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CartComponent } from './component/cart/cart.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/main-page/main-page.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', component: ErrorPageComponent}
];
