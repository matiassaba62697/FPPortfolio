import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-tareas',
  templateUrl: './calendario-tareas.component.html',
  styleUrls: ['./calendario-tareas.component.css']
})
export class CalendarioTareasComponent {
  currentDate = new Date();
  month!: number;
  year!: number;
  monthName!: string;
  days: number[] = [];
  startDay!: number;
  dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  ngOnInit(): void {
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.generateCalendar(this.month, this.year);
  }

  generateCalendar(month: number, year: number): void {
    const date = new Date(year, month);
    this.monthName = date.toLocaleString('es-ES', { month: 'long' });

    const firstDay = new Date(year, month, 1).getDay(); // Domingo = 0
    this.startDay = firstDay === 0 ? 6 : firstDay - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  isToday(day: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      this.month === today.getMonth() &&
      this.year === today.getFullYear()
    );
  }

  // tabla

   title = 'Tareas de la semana';

  users = [
    { icon:'assets/baño.svg',tareas: 'limpiar el baño azul',nombre: 'Matias', color:'blue'},
    { icon:'assets/baño.svg',tareas: 'limpiar el baño gris',nombre: 'Santiago', color:'grey'},
    { icon:'assets/cocina.svg',tareas: 'Limpiar la cocina',nombre: 'Khaled', color:'white'},
    { icon:'assets/basura.svg',tareas: 'Sacar la basura durante la semana',nombre: 'Alejandra', color:'white'},
    { icon:'assets/livingroom.svg',tareas: 'limpiar el living',nombre: 'Jules', color:'white'},
    { icon:'assets/descansa.svg',tareas: 'descansa',nombre: 'Nathan', color:'white'}
  ];
}
