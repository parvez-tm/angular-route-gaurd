import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './gaurds/auth.gaurd';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
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
          <a class="nav-link" aria-current="page" routerLink='/home'>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink='/admin'>Admin</a>
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
        path: 'home',
        component: HomeComponent,
        // canActivate: [authGuard,noQueryGuard,permissionGuard ]
    },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [authGuard ]
  },
    ])
  ]
});
