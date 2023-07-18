import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { AuthService } from '../auth.service';
import { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private authService: AuthService,
              private router: Router){
  }

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  return this.authService.status().pipe(
    //tap(user => console.log(user)),
    map(user => user === null ? false: true),
    tap(hasUser =>{
      if(!hasUser){
        this.router.navigate(['/login']);
      }
    })
    
  );

  }
  
}
