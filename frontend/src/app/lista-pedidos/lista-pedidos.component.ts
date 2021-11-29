import { Component, OnInit } from '@angular/core';
import { IPedidoRealizado, PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styles: [':host { display: block; }']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: IPedidoRealizado[] = [];

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.obtemPedidos()
      .subscribe(pedidos => {
        this.pedidos = pedidos;
      });
  }

}
