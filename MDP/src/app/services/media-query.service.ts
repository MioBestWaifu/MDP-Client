import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {
  public portrait!: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.QueryMedia();
  }

  QueryMedia(): void {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.WebPortrait
    ]).subscribe(result => {
      this.portrait = result.matches;
    });
  }
}