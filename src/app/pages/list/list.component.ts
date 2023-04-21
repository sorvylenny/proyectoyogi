import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from '../../interfaces/cardinterfaces';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  offset= 0;

  cardText = new FormControl('');

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardText.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe((res) => {
      this.cards = [];
      this.cardSearch(res);
    });
   this.cardSearch();
  }

  onScroll(){
    this.offset += 100;
    this.cardSearch();
  }

  cardSearch(cardName: string | null = null) {
    this.cardService.getCards(cardName, this.offset)
        .subscribe((res)=> {
           this.cards = [...this.cards, ...res];  
    });
  }
}
