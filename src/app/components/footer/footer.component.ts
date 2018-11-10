import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  anio: any;

  fecha() {
   this.anio = new Date;
   this.anio = this.anio.getFullYear();
  //  console.log(this.anio);

  }


  ngOnInit() {
    this.fecha();
  }

}
