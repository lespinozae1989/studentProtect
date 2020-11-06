import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-micolegio',
  templateUrl: './micolegio.page.html',
  styleUrls: ['./micolegio.page.scss'],
})
export class MicolegioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  actividades(){
    this.router.navigate(["/home"]);
  }

  chat(){
    this.router.navigate(["/chat"]);
  }
}
