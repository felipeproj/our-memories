import { Component, OnInit } from '@angular/core';
import { MemoryInterface } from './shared/interfaces/memory.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  slides: MemoryInterface[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        source: './assets/memories/Bario.jpg',
        title: 'Casalzão',
        subtitle: 'Aqui se vê toda a beleza do mundo residida em um casal.'
      },
      {
        id: 1,
        source: './assets/memories/MaoCarro.jpg',
        title: 'Fela',
        subtitle: 'Estudos comprovam melhora de 100% da habilidade de direção quando está com namorada ao lado.'
      },
      {
        id: 0,
        source: './assets/memories/Bruxos.jpg',
        title: 'Bruxos',
        subtitle: 'A magia pegou a gente de jeito.'
      },
      {
        id: 0,
        source: './assets/memories/CTN-1.jpg',
        title: '',
        subtitle: ''
      },
      {
        id: 0,
        source: './assets/memories/McDonalds-1.jpg',
        title: '',
        subtitle: ''
      },
      {
        id: 0,
        source: './assets/memories/McDonalds-4-MeMatando.jpg',
        title: '',
        subtitle: ''
      },
      {
        id: 0,
        source: './assets/memories/Shopping-AllWhite-2.jpg',
        title: '',
        subtitle: ''
      },
      {
        id: 0,
        source: './assets/memories/CTN-2.jpg',
        title: '',
        subtitle: ''
      },
  ];
  }
}
