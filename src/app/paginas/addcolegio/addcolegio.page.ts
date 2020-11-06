import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcolegio',
  templateUrl: './addcolegio.page.html',
  styleUrls: ['./addcolegio.page.scss'],
})
export class AddcolegioPage implements OnInit {

  codigo: string;

  constructor() { }

  ngOnInit() {
  }

  generar(){
    this.codigo = "XF95G";
  }
}
