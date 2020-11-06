import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.page.html',
  styleUrls: ['./colegio.page.scss'],
})
export class ColegioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add()
  {
    this.router.navigate(["/addcolegio"]);
  }

  join(){

  }

  my(){

  }

}
