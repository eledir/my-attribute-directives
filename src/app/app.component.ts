import {Component} from '@angular/core';
import {HighlightDirective} from './highlight.directive';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HighlightDirective],
})
export class AppComponent {
  color = '';
}
