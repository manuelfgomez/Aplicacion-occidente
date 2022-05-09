import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cards = [{ titulo: "Cartera Ordinaria", imagen: "cartera.PNG"}, { titulo: "Leasing", imagen: "leasing.PNG"}];
  }

}
