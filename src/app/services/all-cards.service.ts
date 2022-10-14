import {Injectable} from '@angular/core';
import {ICard} from "../interfaces/icard";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllCardsService {
  public cards: ICard[];

  constructor(private http: HttpClient) {
    this.cards = [
      {
        title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img: '../assets/img/img1.png',
        duration: '2 часа',
        times: ['12-00', '12-00', '12-00', '12-00'],
        price: 900,
        additionallyPrice: 1200,
      },
      {
        title:'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img:'../assets/img/img2.png',
        duration:'2 часа',
        times:['12-00', '12-00', '12-00'],
        price:900,
      },
      {
        title:'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img:'../assets/img/img3.png',
        duration:'2 часа',
        times:['12-00', '12-00', '12-00', '12-00'],
        price:900,
        additionallyPrice:1200,
      }
    ];
  }

  getAllCards() {
    return this.cards
  }
}
