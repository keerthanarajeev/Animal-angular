import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SingleviewComponent } from './singleview/singleview.component';

const routes: Routes = [
  {path:'',component: LandingpageComponent},
  {path:'single/:id',component: SingleviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
