import { MemberListResolver } from './_resolver/member-list.resolver';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ServicesComponent } from './services/services.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
      {
        path: 'members/:id',
        component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      { path: 'messages', component: MessagesComponent }
    ]
  },
  { path: 'lists', component: ListsComponent },
  { path: 'furnitures', component: FurnituresComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
