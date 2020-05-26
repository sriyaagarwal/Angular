import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookUpdateComponent } from './passbook-update.component';

describe('PassbookUpdateComponent', () => {
  let component: PassbookUpdateComponent;
  let fixture: ComponentFixture<PassbookUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
