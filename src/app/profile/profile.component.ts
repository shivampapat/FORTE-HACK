import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //variables to hold form values
  email_id: String;
  mobile_no: Number;
  gender: String;
  name: String;
  looking_for: String;
  occupation: String;
  institute_name: String;

  information : Observable<any[]>;

  constructor(public data_from_firebase:AngularFireDatabase) {
      this.information = data_from_firebase.list('/information').valueChanges();
   }

  ngOnInit(): void {
  }

  onSubmit(){
      this.data_from_firebase.list('/information').push([{ name: this.name, 
                                                                                    email_id: this.email_id, 
                                                                                    mobile_no: this.mobile_no,
                                                                                    gender: this.gender, 
                                                                                    occupation:this.occupation, 
                                                                                    looking_for: this.looking_for, 
                                                                                    institute_name:this.institute_name
                                                                                  }]);
      console.log(this.email_id);                                                                            
  }

}
