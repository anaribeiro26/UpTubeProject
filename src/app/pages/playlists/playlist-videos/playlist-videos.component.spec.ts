import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistVideosComponent } from './playlist-videos.component';

describe('PlaylistVideosComponent', () => {
  let component: PlaylistVideosComponent;
  let fixture: ComponentFixture<PlaylistVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
