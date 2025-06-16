import { Component } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  news= [
        {imagen:'assets/roomies.jpg', titulo:"Viernes de pizza",texto:"invitacion a viernes de pizza"},
        {imagen:'assets/roomies2.jpg', titulo:"Nuevos Roomies",texto:"Llegaron nuevos roomies"},
        {imagen:'assets/roomies3.jpg', titulo:"Se fueron los roomies",texto:"La semana que viene se van juels y nathan"},
        {imagen:'assets/roomies.jpg', titulo:"Baño azul roto",texto:"El hinodoro del baño azul dejo de funcionar"}
  ];


}
