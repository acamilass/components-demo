import { Component, Input, OnInit } from '@angular/core';
import { CarouselInfo } from './interfaces/carousel-info.interface';

@Component({
  selector: 'app-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss']
})
export class SimpleCarouselComponent implements OnInit {

  @Input() carouselInfo: CarouselInfo[] = [];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.carouselInfo)
  }

  public goToNext() {
    const next = ++this.currentSlide;
    this.currentSlide = next === this.carouselInfo.length ? 0 : next;
  }

  public goToPrevious() {
    const previous = --this.currentSlide;
    this.currentSlide = previous < 0 ? this.carouselInfo.length - 1 : previous;
  }

}
