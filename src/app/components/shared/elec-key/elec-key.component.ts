import { Component, OnInit } from '@angular/core';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-elec-key',
  templateUrl: './elec-key.component.html',
  styleUrls: ['./elec-key.component.scss']
})
export class ElecKeyComponent implements OnInit {

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
  this.btn = 'Показать'
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
