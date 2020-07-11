import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor( private firestore: AngularFirestore ) { }

  form = new FormGroup({        
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''), 
    gender: new FormControl(''),
    occupation: new FormControl(''),
    looking: new FormControl(''),
    institution: new FormControl(''),
    hobbies: new FormControl('')
})

form1 = new FormGroup({
  competition_name: new FormControl(''),
  competition_date: new FormControl(''),
  competition_time: new FormControl(''),
  competition_description: new FormControl(''),
  skills: new FormControl(''),
})


profile_submit(data) {
  console.log(data);
  return new Promise<any>((resolve, reject) =>{
   
      this.firestore
          .collection("profile")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}

host_commpetition(data) {
  console.log(data);
  return new Promise<any>((resolve, reject) =>{
   
      this.firestore
          .collection("host_competition")
          .add(data)
          .then(res => {}, err => reject(err));
  });
}

}
