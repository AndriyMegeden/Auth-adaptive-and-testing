import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SecurePage } from './secure.page';

describe('SecurePage', () => {
  let component: SecurePage;
  let fixture: ComponentFixture<SecurePage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(SecurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
