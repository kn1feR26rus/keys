import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-anoth-serv',
  templateUrl: './anoth-serv.component.html',
  styleUrls: ['./anoth-serv.component.scss']
})
export class AnothServComponent implements OnInit {
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
