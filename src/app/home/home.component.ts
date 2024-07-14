import { Component } from '@angular/core';
import { HeroimageComponent } from '../heroimage/heroimage.component';
import { TextonimageComponent } from '../textonimage/textonimage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroimageComponent, TextonimageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
