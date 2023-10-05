import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselingComponent } from './counseling.component';

describe('CounselingComponent', () => {
  let component: CounselingComponent;
  let fixture: ComponentFixture<CounselingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounselingComponent]
    });
    fixture = TestBed.createComponent(CounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
