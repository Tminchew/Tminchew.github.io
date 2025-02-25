import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLayoutComponent } from './screen-layout.component';

describe('ScreenLayoutComponent', () => {
  let component: ScreenLayoutComponent;
  let fixture: ComponentFixture<ScreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
