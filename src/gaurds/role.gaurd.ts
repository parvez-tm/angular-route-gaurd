import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const roleGuard: CanActivateChildFn = (route, state) => {

  let role = 'user'
  let router = inject(Router)


  if(role != 'admin'){
    alert('You dont have permission')
    return false
  }

  return true;
};
