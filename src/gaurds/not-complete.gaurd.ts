import { CanDeactivateFn } from '@angular/router';

export const notCompleteGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    let response = confirm('Are you sure you want to leave')
    if(response == true){
        return true
    }
  return false;
};
