import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { IProduto } from '../produto';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  produtos: IProduto[] = [];
  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.obtemCardapio().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

}
