import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-prueba',
  templateUrl: './home-prueba.component.html',
  styleUrls: ['./home-prueba.component.css']
})
export class HomePruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleMenu();

  }

  toggleMenu(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const burger = document.querySelector('.burger') as HTMLElement;

    burger.addEventListener('click', () => {
      navbar.classList.toggle('show-nav');
    });

    const navbarLinks = document.querySelectorAll('.navbar__link > a') as NodeListOf<HTMLElement>;
    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.toggle('show-nav');
      });
    });
  }
}
