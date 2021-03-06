import { UploadFileService } from './_services/upload-file.service';
import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { ServicesComponent } from './services/services.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { appRoutes } from './rootes';
import { AlertifyService } from './_services/alertify.service';
import { ErrorInteceptorProvider } from './_services/error.interceptor';
import { AuthService } from './_services/auth.service';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { ItemCardComponent } from './card/item-card/item-card.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    FurnituresComponent,
    ServicesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    FormUploadComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule // for database
  ],
  providers: [
    AuthService,
    ErrorInteceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    UploadFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
