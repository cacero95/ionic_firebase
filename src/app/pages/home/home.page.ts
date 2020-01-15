import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UploadComponent } from '../../components/upload/upload.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modal:ModalController,
    private router:Router) { }

  ngOnInit() {
  }
  async add(){
    let modal = await this.modal.create({
      component:UploadComponent
    })
    modal.present();
  }
  navegar(url){
    this.router.navigate([`/${url}`]);
    console.log('funciona')
  } 
}
