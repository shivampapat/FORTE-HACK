import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from "../shared/all.service";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-competition-page-host',
  templateUrl: './competition-page-host.component.html',
  styleUrls: ['./competition-page-host.component.css']
})
export class CompetitionPageHostComponent implements OnInit {

  constructor(public allService:AllService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    let data = this.allService.form1.value;
    // console.log(data);
    this.allService .host_commpetition(data);
      //  .then(res => {
      //      console.log('yayy!!!!!!!!')
      //  });
  }
}
