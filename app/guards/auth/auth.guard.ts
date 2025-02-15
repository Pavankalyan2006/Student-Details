import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let admin = false

  if(admin) {

    return true;
  }
  return false
};
