import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webinar-front',
  templateUrl: './webinar-front.component.html',
  styleUrls: ['./webinar-front.component.css']

})

export class WebinarFrontComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
 
  ngOnInit(): void {
    
  }
  
}
