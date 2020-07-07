import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-page-host',
  templateUrl: './competition-page-host.component.html',
  styleUrls: ['./competition-page-host.component.css']
})
export class CompetitionPageHostComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
