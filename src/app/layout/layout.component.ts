import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  imagenes: string[] = [
    'assets/roomies.jpg',
    'assets/roomies2.jpg',
    'assets/roomies3.jpg'
  ];

  imagenActualIndex = 0;
  intervalo!: any;

  ngOnInit(): void {
    this.iniciarCarrusel();
  }

  iniciarCarrusel(): void {
    this.intervalo = setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length;
    }, 3000); // cambia cada 3 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
