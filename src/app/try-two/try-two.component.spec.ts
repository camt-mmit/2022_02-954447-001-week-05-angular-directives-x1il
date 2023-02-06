import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryTwoComponent } from './try-two.component';

describe('TryTwoComponent', () => {
  let component: TryTwoComponent;
  let fixture: ComponentFixture<TryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TryTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
