import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegreactComponent } from './regreact.component';

describe('RegreactComponent', () => {
  let component: RegreactComponent;
  let fixture: ComponentFixture<RegreactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegreactComponent]
    });
    fixture = TestBed.createComponent(RegreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
