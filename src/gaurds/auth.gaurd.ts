import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let role = 'emp'
  let router = inject(Router)


  if(role != 'admin'){
    router.navigate(['access-denied'])
  }

  return true;
};
