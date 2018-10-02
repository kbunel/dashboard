import { Component, ViewEncapsulation } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
}
