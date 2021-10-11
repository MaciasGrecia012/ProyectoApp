import { Component, OnInit } from '@angular/core';
import { Tienda } from '../interface/tienda.module';
import { TiendaService } from '../service/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
 export class TiendaPage implements OnInit, TiendaService {
   tienda: Tienda[]=[];
  constructor(private TiendaService: TiendaService) { }
  getAllTienda(): Tienda[] {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.tienda=this.TiendaService.getAllTienda();

  }

}
