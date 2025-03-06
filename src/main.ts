import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './gaurds/auth.gaurd';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { AboutComponent } from './about/about.component';
import { roleGuard } from './gaurds/role.gaurd';
import { FeaturesComponent } from './features/features.component';
import { notCompleteGuard } from './gaurds/not-complete.gaurd';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PTM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" routerLink='/home' routerLinkActive="active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/features">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="active">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink='/admin' routerLinkActive="active">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-outlet/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [authGuard,noQueryGuard,permissionGuard ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [authGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
        canActivateChild : [roleGuard],
        children: [
          {
            path: 'edit',
            component: EditAboutComponent
          }
        ]
      },
      {
        path: 'features',
        component: FeaturesComponent,
        canDeactivate: [notCompleteGuard]
      },
      {
        path: 'access-denied',
        component: AccessDeniedComponent,
      },
    ])
  ]
});
