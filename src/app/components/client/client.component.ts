import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  cliente:Cliente;
  constructor(private clientService: ClientService) { 
    this.cliente = <Cliente>{};
  }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void{
    this.clientService.getClient().subscribe({
      next: (response: any) => {
        this.cliente = response;
      },
      error: (err) => console.log(err),
    })
  }

}
