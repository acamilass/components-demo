import { Component, Input, OnInit } from '@angular/core';
import { CarouselInfo } from './interfaces/carousel-info.interface';

@Component({
  selector: 'app-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss']
})
export class SimpleCarouselComponent implements OnInit {

  @Input() carouselInfo: CarouselInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
