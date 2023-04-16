import { Component, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  darkMode: boolean = false;
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const mobileMenuButton = this.elementRef.nativeElement.querySelector('.mobile-menu-button');
    const mobileMenu = this.elementRef.nativeElement.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}