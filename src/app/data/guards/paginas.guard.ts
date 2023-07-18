import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';

import { map, take, tap,} from 'rxjs/operators';
import { AuthService } from '../fireservices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaginasGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router){

}

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return this.authService.status().pipe(
    tap(user => console.log(user)),
    map(user => user === null ? true: false),
    tap(hasUser =>{
      if(!hasUser){
        this.router.navigate(['/tabs/feed']);
      }
    })
  );

  }
  
}
