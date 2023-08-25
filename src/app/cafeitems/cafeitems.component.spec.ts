import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeitemsComponent } from './cafeitems.component';

describe('CafeitemsComponent', () => {
  let component: CafeitemsComponent;
  let fixture: ComponentFixture<CafeitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeitemsComponent]
    });
    fixture = TestBed.createComponent(CafeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
