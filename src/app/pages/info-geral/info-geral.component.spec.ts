import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeralComponent } from './info-geral.component';

describe('InfoGeralComponent', () => {
  let component: InfoGeralComponent;
  let fixture: ComponentFixture<InfoGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
