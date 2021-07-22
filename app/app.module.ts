import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './site/home/home.module';
import { AboutModule } from './site/about/about.module';
import { ContactModule } from './site/contact/contact.module';
import { NewsModule } from './site/news/news.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './site/shared/shared.module';
import { AuthComponent } from './site/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HomeService } from './site/service/home.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    

  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactModule,
    NewsModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot([])

  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
