import { Injectable } from '@angular/core';
import { redessociales, RedesSocialesPageModule} from '../interface/redes-sociales.module';

@Injectable({
  providedIn: 'root'
})
export class REdesSocialesService {
  redesS: redessociales []= [
   {imageUrl:"" , link: "" },
   {imageUrl:"" , link: "" },
   {imageUrl:"" , link: "" },
   {imageUrl:"" , link: "" },
  ];


  constructor() { }
  getAllTienda(){
    return [...this.redesS];
  }
}