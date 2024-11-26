//Sample of template-driven form, there are 2 types of form: template-driven and reactive
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  styles: ``
})
export class RegisterComponent {
  favoriteFramework = '';
  username = 'Default Name';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
