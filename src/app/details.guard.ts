import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const detailsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(Number(route.paramMap.get('id'))<0||Number(route.paramMap.get('id'))>10){
    router.navigate(['./product-list']);
    return false;
  }
  else{
    return true;
    

  }


};
