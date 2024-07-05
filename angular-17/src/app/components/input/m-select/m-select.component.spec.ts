import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSelectComponent } from './m-select.component';

describe('MSelectComponent', () => {
  let component: MSelectComponent;
  let fixture: ComponentFixture<MSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
