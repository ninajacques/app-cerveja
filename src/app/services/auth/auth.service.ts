import { Injectable } from '@angular/core';
import {	Observable	}	from	'rxjs';
import {	AngularFireAuth	}	from	'@angular/fire/auth';
import	*	as	firebase	from	'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private	user:	Observable<firebase.User>;

  constructor(private	afAuth:	AngularFireAuth) {
    this.user	=	afAuth.authState;
  }

  // login(email:	string,	password:	string):	Promise<firebase.auth.UserCredential>	{
  //   return this.afAuth.auth.signInWithEmailAndPassword(email,	password);
	// }
}
