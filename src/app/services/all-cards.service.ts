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
        id:1,
        title: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img: '../assets/img/img1.png',
        duration: '2 часа',
        times: [{time:'12-00'},{time:'12-00'},{time:'12-00'},{time:'12-00'}],
        price: 900,
        additionallyPrice: 1200,
        timesFlag:true,
      },
      {
        id:2,
        title:'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img:'../assets/img/img2.png',
        duration:'2 часа',
        times:[{time:'12-00'},{time:'12-00'},{time:'12-00'}],
        price:900,
        timesFlag:true,
      },
      {
        id:3,
        title:'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img:'../assets/img/img3.png',
        duration:'2 часа',
        times:[
          {
            time:'13-00'
          },
          {
            time:'14-00'
          },
          {
            time:'15-00'
          },
          {
            time:'16-00'
          },
          {
            time:'17-00'
          },
          {
            time:'18-00'
          },
          {
            time:'19-00'
          },
          {
            time:'19-00'
          },
          {
            time:'19-00'
          },

          {
            time:'19-00'
          },
        ],
        price:900,
        additionallyPrice:1200,
        timesFlag:true,
      },
      {
        id:3,
        title:'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img:'../assets/img/img3.png',
        duration:'2 часа',
        times:[
          {
            time:'13-00'
          },
          {
            time:'14-00'
          },
          {
            time:'15-00'
          },
          {
            time:'16-00'
          },
          {
            time:'17-00'
          },
          {
            time:'18-00'
          },
          {
            time:'19-00'
          },
          {
            time:'19-00'
          },
          {
            time:'19-00'
          },

          {
            time:'19-00'
          },
        ],
        price:900,
        additionallyPrice:1200,
        timesFlag:true,
      }
    ];
  }

  getAllCards() {
    return this.cards
  }
}
