import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './site/about/about.component';
import { AuthComponent } from './site/auth/auth.component';
import { HomeComponent } from './site/home/Home.component';
import { NewsComponent } from './site/news/news.component';
import { GuardAuthGuard } from './site/service/guard-auth.guard';


const routes: Routes = [{ path: '', component:AuthComponent ,
},
{ path: 'Home', component: HomeComponent,
canActivate: [GuardAuthGuard] },
{ path: 'News', component: NewsComponent,
canActivate: [GuardAuthGuard] },
{ path: 'about', component: AboutComponent ,
canActivate: [GuardAuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
