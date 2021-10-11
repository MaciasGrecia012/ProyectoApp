import { Injectable } from '@angular/core';
import { Tienda } from '../interface/tienda.module';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  tienda: Tienda []= [
   {imgUrl:"https://kiqsug.by.files.1drv.com/y4pwqpQ2KxmiM3QW0Vjf4Z9jYqzTv0OgDUEfmjzUOTG6G8zsyoXYkwb7isDcivYHrIMJeXb-gdYhXbMzkpwWXd58uhMBDe_ynIJA03N4peh5O_GZ4kJRRiUfaujmyY5wPfPZKP2mHU1vZ1rPR8pImGywTM_CAEw1_3eiL2EK1ij_Dyeq3VSYHk1FaJyoymZ1MU-kM04QEabq5bfnQj9Ahvz24H9HWBRnUAtmW1x8u0eiYQ/Sudadera.png?psid=10", precio: "1,500"},
   {imgUrl:"https://by3302files.storage.live.com/y4pbKhe_e8X7TXW8FJvgxxm7o_tAnPStm6XyHBmRaPFS-CdVwEMx_NgClOF2juyqb8o08JsXK9fsDncUsdhGdRgZx9QqHEtCskwburxXd-sSKeFEIsLgxOhw02C4WXtJrJ_cv0Pk2erZ_UgjlrJLgUWmT0XVx9bHKChF78DGLY-rhq9-GXs2xGFiVl9N6b92uwno2Gp13ocszRA13dJEU5UQFZ1r5UPm2hrjILefgHJU_w/camiseta.png?psid=1&width=177&height=177&cropMode=center", precio: "500"},
   {imgUrl:"https://by3302files.storage.live.com/y4p9ZwPp5I4pEA2-A9I2xDC2UNhq402vBYNqW8rbJOS2hXqEvthi93u0_nRm9_CAyo-9HZZi31NILuvuG4D4Y2jdWavMjHPoY0qUhGuXhNcz36EutqiDwISP_t2HmhSkPmrCLWCkyUkoPVQxTthKrS6MQLCnDkBTT0xrc0mhCXDe02LcRdr4m3DCxT1vPHMYqobF60pLdgoI30aSAru1Ewiq0alxtFBB-0oBlgClcx4Beo/Taza.png?psid=1&width=170&height=170&cropMode=center", precio: "200"},
  
  ];


  constructor() { }
  getAllTienda(){
    return [...this.tienda];
  }
}



