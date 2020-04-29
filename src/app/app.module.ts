import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherComponent } from './weather/weather.component';
// import icon material of google
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule
} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ProjectComponent } from './project/project.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { ConfirmUserChangeComponent } from './component/confirm-user-change/confirm-user-change.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    WeatherComponent,
    ProjectComponent,
    UserDetailComponent,
    EditUserComponent,
    ConfirmUserChangeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatBadgeModule, MatChipsModule, MatProgressSpinnerModule,
        MatSelectModule, FormsModule
    ],
  providers: [
    HttpClientModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
