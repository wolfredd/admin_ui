import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Pages from '../utilities/pages';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem("token");

  if (isLoggedIn) {
    return true;
  }

  router.navigate([Pages.auth]);
  return false;
};
