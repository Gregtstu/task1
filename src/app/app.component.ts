import {Component, OnInit} from '@angular/core';
import {ICard} from "./interfaces/icard";
import {AllCardsService} from "./services/all-cards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public AllCards!:ICard[];
  constructor(private cards:AllCardsService) {
  }
  ngOnInit() {
    this.AllCards= this.cards.getAllCards();
  }
}
