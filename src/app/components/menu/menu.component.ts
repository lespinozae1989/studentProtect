import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  colegio(){
    this.router.navigate(["/colegio"]);
  }

  inicio(){
    this.router.navigate(["/panico"]);
  }

  salir(){
    this.router.navigate(["/login"]);
  }
}
