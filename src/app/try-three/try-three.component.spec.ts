import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryThreeComponent } from './try-three.component';

describe('TryThreeComponent', () => {
  let component: TryThreeComponent;
  let fixture: ComponentFixture<TryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TryThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
