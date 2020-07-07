import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.css']
})
export class CompetitionPageComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
