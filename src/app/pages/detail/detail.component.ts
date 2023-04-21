import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/cardinterfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  id!: string;
  card$!: Observable<Card>;

  constructor(private route: ActivatedRoute, private cardService: CardService, private router:Router) { }

  ngOnInit(): void {
    this.id    = this.route.snapshot.paramMap.get('id') || '';
    this.card$ = this.cardService.getById(this.id);

  }
  regresar(){
    this.router.navigate([''])
  }

}
