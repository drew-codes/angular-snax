import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferredCardComponent } from '../../deferred-card/deferred-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeferredCardComponent],
  encapsulation: ViewEncapsulation.ShadowDom,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'deferrable-views-demo';
}
