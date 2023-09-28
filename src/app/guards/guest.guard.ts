import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import Pages from '../utilities/pages';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("token");

  if (isLoggedIn) {
    router.navigate([Pages.client]);
    return false;

  }

  return true;
};
