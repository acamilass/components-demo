import { Component, OnInit } from '@angular/core';
import { CarouselInfo } from 'src/app/components/simple-carousel/interfaces/carousel-info.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  carousel: CarouselInfo[] = [
    {
      icon: 'far fa-angry',
      stepTitle: 'Passo 1',
      cardTitle: 'Tenha um ecommerce para chamar de seu',
      cardText: 'Lorem ipsum conubia erat nibh dui, adipiscing convallis sed ornare.',
      cardImage: ''
    },
    {
      icon: 'far fa-angry',
      stepTitle: 'Passo 2',
      cardTitle: 'Deixe sua loja com a sua cara',
      cardText: 'Lorem ipsum per augue inceptos congue, duis ante lorem purus.',
      cardImage: ''
    },
    {
      icon: 'far fa-angry',
      stepTitle: 'Passo 3',
      cardTitle: 'Coloque sua loja na boca do povo',
      cardText: 'Lorem ipsum nunc varius phasellus quisque, et primis tortor sed. ',
      cardImage: ''
    }
  ];

}
