import { Component, OnInit } from '@angular/core';

import {FirebaseAuthService} from '../services/firebase-auth.service';

//Angular Form builder

import { FormBuilder, Validators, FormGroup } from '../../../node_modules/@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{Observable} from 'rxjs';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //data members
  nForm:FormGroup;
  post:any;
  username:string;
  password:string;
loginInfo :Observable<any[]>;


  constructor(private fb : FormBuilder ,public fauth:FirebaseAuthService) { }

  //Functions
  public Copy(post)
  {
    this.username = post.name;
    this.password = post.descriptor;
    this.display();
    this.fauth.SignUp(this.username, this.password);
  }

  public  display()
    {
      console.log(this.username);
      console.log(this.password);
    }

  ngOnInit(): void {

    this.nForm = this.fb.group({
      'name'       : [null, Validators.required],
      'descriptor': [null,Validators.compose([Validators.required,Validators.maxLength(20) ]) ],
      'validate'    : ''

    });
  }
}
