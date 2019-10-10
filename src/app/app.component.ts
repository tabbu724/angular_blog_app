import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location]
})
export class AppComponent {
  title = 'blog-frontend';

  constructor(private location: Location) { }

  public prevRoute() {
    this.location.back();
  }
}
