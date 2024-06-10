import { Component } from '@angular/core';
import { HeroimageComponent } from '../heroimage/heroimage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroimageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
