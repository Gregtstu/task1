import {Component, OnInit} from '@angular/core';
import {ICard} from "./interfaces/icard";
import {AllCardsService} from "./services/all-cards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public allCards!:ICard[];
  public manyTames!:any;

  constructor(private cards:AllCardsService) {}

  ngOnInit() {
    this.allCards = this.cards.getAllCards();
    this.allCards.forEach(item => {
      this.manyTames = item.times;
    });
  }

  showAllTimes(id:number):void {
    this.allCards.map(item => {
      if(item.id == id && item.timesFlag){
        item.timesFlag = false;
      }
    });
  }
}
