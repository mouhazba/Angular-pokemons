import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router) { }

    //la methode du Guard determine si user peut se connecter ou non
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        //console.log("bien reçu")
        let url :string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url:string):boolean{
        if(this.authService.isLoggedIn){
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);

        return false;
    }
}