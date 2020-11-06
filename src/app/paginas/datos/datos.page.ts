import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  registro = {
    telefono: '',
    edad: '',
    correo: '',
    pass1: '',
    pass2: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  home()
  {
    this.router.navigate(["/panico"]);
  }
}
