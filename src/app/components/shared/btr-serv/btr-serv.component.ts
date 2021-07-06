import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-btr-serv',
  templateUrl: './btr-serv.component.html',
  styleUrls: ['./btr-serv.component.scss']
})
export class BtrServComponent implements OnInit {

  public config: SwiperConfigInterface  = {
    direction: 'horizontal',
    observer: true,
    spaceBetween: 30,
}
hidden: boolean = true;
btn = 'Скрыть'

toggle() {
if(this.btn === 'Скрыть') {
  this.hidden = !this.hidden
  this.btn = 'Смотреть все'
}
else {
  this.hidden = !this.hidden
  this.btn = 'Скрыть'
}
}

  constructor() { }

  ngOnInit(): void {
  }

}
