import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionPageHostComponent } from './competition-page-host.component';

describe('CompetitionPageHostComponent', () => {
  let component: CompetitionPageHostComponent;
  let fixture: ComponentFixture<CompetitionPageHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionPageHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionPageHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
