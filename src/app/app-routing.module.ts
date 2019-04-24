import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilecomComponent } from './mobilecom/mobilecom.component';

const routes: Routes = [
 { path:'mobilecom',component:MobilecomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
