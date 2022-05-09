import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() imagen: string = "";
  url : string = "";

  constructor() { }

  ngOnInit(): void {
    this.url = `../../../assets/img/${this.imagen}`;
  }

}
