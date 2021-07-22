import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  connect = false;
  seconnecter(l,m)
  {
    if ( l=="admin" && m=="admin" )
    {
    this.connect=true;
    this.router.navigate(['/about'])
    alert("You are welecome") ;}
    else alert("Sorry try another password or change your username")
  }
}
