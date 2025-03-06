import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const moduleGuard: CanMatchFn = (route, segments) => {
    let role = 'emp'
    let router = inject(Router)
    if (role != 'admin') {
        router.navigate(['access-denied'])
    }
    return true;
};