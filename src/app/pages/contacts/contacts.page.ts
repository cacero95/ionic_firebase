import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NotificacionesComponent } from '../../components/notificaciones/notificaciones.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private router:Router, private modal:ModalController) { }

  ngOnInit() {
  }
  async create_modal(){
    let modal = await this.modal.create({
      component:NotificacionesComponent
    })
    modal.present();
  }
}
