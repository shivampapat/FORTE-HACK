import { Component, OnInit } from '@angular/core';
import { AllService } from "../shared/all.service";
import {FormControl} from '@angular/forms';
interface Gender {
  value: string;
  type: string;
}

interface Occupation {
  value: string;
  viewValue: string;
}

interface looking {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public allService:AllService) {}

  ngOnInit(): void {
  }

  look: looking[] = [
    {value: 'Exploring', viewValue: 'Exploring'},
    {value: 'Free-lancing', viewValue: 'Free lancing'},
    {value: 'Part-time', viewValue: 'Part time job'}
  ];
  
  occupation: Occupation[] = [
    {value: 'Student', viewValue: 'Student'},
    {value: 'Professional', viewValue: 'Professional'}
  ];
  
  gender: Gender[] = [
    {value: 'Male', type: 'Male'},
    {value: 'Female', type: 'Female'}
    
  ];
  
  onSubmit()
  {
    let data = this.allService.form.value;
    // console.log(data);
    this.allService .profile_submit(data);
      //  .then(res => {
      //      console.log('yayy!!!!!!!!')
      //  });
  }
  
  

}
