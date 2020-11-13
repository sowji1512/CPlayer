import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistcontainerComponent } from './watchlistcontainer.component';

describe('WatchlistcontainerComponent', () => {
  let component: WatchlistcontainerComponent;
  let fixture: ComponentFixture<WatchlistcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchlistcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
