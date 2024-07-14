import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainmenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projektDT208G';
}
