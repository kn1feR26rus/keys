import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-doors-key',
  templateUrl: './doors-key.component.html',
  styleUrls: ['./doors-key.component.scss']
})
export class DoorsKeyComponent implements OnInit {

  public config: SwiperConfigInterface  = {
    direction: 'horizontal',
    observer: true,
    spaceBetween: 55,
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
