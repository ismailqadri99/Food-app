import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreFooditemsComponent } from './bangalore-fooditems.component';

describe('BangaloreFooditemsComponent', () => {
  let component: BangaloreFooditemsComponent;
  let fixture: ComponentFixture<BangaloreFooditemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BangaloreFooditemsComponent]
    });
    fixture = TestBed.createComponent(BangaloreFooditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
