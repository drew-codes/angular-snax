import { Component } from '@angular/core';

@Component({
  selector: 'app-deferred-card',
  standalone: true,
  imports: [],
  templateUrl: './deferred-card.component.html',
  styleUrl: './deferred-card.component.css',
})
export class DeferredCardComponent {
  public randomListOfText: string[] = [];

  constructor() {
    this.randomListOfText = this.generateRandomListOfText(100000);
  }

  private generateRandomListOfText(length: number): string[] {
    const randomListOfText: string[] = [];
    for (let i = 0; i < length; i++) {
      randomListOfText.push(this.getRandomText());
    }
    return randomListOfText;
  }

  private getRandomText(): string {
    return 'Random text ' + Math.floor(Math.random() * 60000);
  }
}
