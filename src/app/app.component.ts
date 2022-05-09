import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'empresa';
  cliente:Cliente;
  
  constructor(private clientService: ClientService) { 
    this.cliente = <Cliente>{};
  }

  ngOnInit(): void {
    this.getClient("800220154");
  }

  getClient(nit: string): void{
    this.clientService.getClient(nit).subscribe({
      next: (response: any) => {
        this.cliente = response;
      },
      error: (err) => console.log(err),
    })
  }
}