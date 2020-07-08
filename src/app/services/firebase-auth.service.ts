import { Injectable } from '@angular/core';

import {Router} from '@angular/router';

//Authorisation
import {auth} from 'firebase/app';
import{AngularFireAuth, AngularFireAuthModule} from  '@angular/fire/auth';

//FIrestore
import{AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';


//Observables
import {Observable,of} from 'rxjs';
import{switchMap} from 'rxjs/operators';
import {User} from './user.model';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {


  //data
  user$: Observable<User>;

  constructor(private afAuth:AngularFireAuth, private afs: AngularFirestore, private router:Router) {

              this.user$ = this.afAuth.authState.pipe(
                                                                                switchMap(user =>
                                                                                                        {
                                                                                                              if(user){
                                                                                                                    return this.afs.doc<User>( `users/${user.uid}`).valueChanges();      
                                                                                                              }
                                                                                                              else{
                                                                                                                    return of(null);
                                                                                                              }
                                                                                                        }  
                                                                                                  )
                                                                              );
   }

   SignUp(email, password) {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          window.alert("You have been successfully registered!");
          console.log(result.user)
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  
    // Sign in with email/password
    SignIn(email, password) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
           this.router.navigate(['/']);
        }).catch((error) => {
          window.alert(error.message)
        })
    }

    async googleSignIn(){
            const provider= new auth.GoogleAuthProvider();
            const credential= await this.afAuth.signInWithPopup(provider);
            return this.updateUserData(credential.user);
    }

    async signOut(){
            await this.afAuth.signOut();
            return this.router.navigate(['/']);
    }

    private updateUserData(user){

            const userRef : AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

            const data ={
                    uid                 :user.uid,
                    email             :user.email,
                    displayName :user.displayName,
                    photoURL      :user.photoURL 
            };
          
            return userRef.set(data,{merge:true});
          }


}
