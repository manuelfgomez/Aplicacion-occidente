import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() cliente:Cliente;
  constructor() { 
    this.cliente = <Cliente>{};
  }

  ngOnInit(): void {
    
  }

  

}
