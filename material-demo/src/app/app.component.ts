import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = true;
  title = 'material-demo';

  onChange($event) {
    console.log($event);
  }
}
