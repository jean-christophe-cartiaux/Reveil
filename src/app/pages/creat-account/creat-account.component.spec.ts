import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAccountComponent } from './creat-account.component';

describe('CreatAccountComponent', () => {
  let component: CreatAccountComponent;
  let fixture: ComponentFixture<CreatAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
