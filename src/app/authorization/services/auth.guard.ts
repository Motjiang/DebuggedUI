import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    const isRefreshed = await authService.refreshingToken();
    if (!isRefreshed) {
      router.navigate(['/login']);
    }
    return isRefreshed;
  }
};
