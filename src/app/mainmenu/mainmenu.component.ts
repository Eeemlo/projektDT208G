import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addMenuCloseListeners();
  }

  addMenuCloseListeners(): void {
    // Hitta alla länkar i menyn
    const menuLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('label ul a');

    // Hitta checkboxen som styr menyn
    const menuToggle = document.getElementById('menuToggle') as HTMLInputElement | null;

    if (menuToggle) {
      // Loop genom alla länkar och lägg till en klickhändelse
      menuLinks.forEach((link: HTMLAnchorElement) => {
        link.addEventListener('click', () => {
          // När en länk klickas och navigeringen är klar, stäng menyn
          this.router.navigateByUrl(link.getAttribute('routerLink')!).then(() => {
            menuToggle.checked = false;
          });
        });
      });
    }
  }
}
