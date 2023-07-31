import {inject} from '@angular/core'
import { CanActivateFn, Router } from '@angular/router';
import {UserService} from "src/app/providers/services/user.service"

export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const _data:UserService = inject(UserService)
  _data.me2((r:any)=>{ if(r) router.navigateByUrl("/") })
  return true;
};
