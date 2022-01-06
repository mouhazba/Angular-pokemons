import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";



@Injectable({providedIn: 'root'})
export class AuthService{
    isLoggedIn : boolean = false; // user est il connecté
    redirectUrl : string; //oû diriger user après authentification

    login(name:string, password:string):Observable<boolean>{
        this.isLoggedIn = (name === 'mouhaz' && password ==='khouly89');

        return of(true).pipe(
            delay(1000)
        )
    }

    logout():void{
        this.isLoggedIn = false;
    }
}