import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TksComponent } from './tks.component';

describe('TksComponent', () => {
  let component: TksComponent;
  let fixture: ComponentFixture<TksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
