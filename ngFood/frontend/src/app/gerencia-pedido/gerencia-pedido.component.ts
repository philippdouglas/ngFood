import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPedidoRealizado, PedidoService } from '../pedido/pedido.service';

@Component({
  selector: 'app-gerencia-pedido',
  templateUrl: './gerencia-pedido.component.html',
  styles: [
  ]
})
export class GerenciaPedidoComponent implements OnInit {

  pedido?: IPedidoRealizado;
  constructor(private route: ActivatedRoute, private router: Router, public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const idPedido = parseInt(paramMap.get('idPedido') || '0');
      this.pedidoService.obtemPedido(idPedido)
        .subscribe(pedido => {
          this.pedido = pedido;
        });
    });
  }

  atualiza() {
    if (this.pedido) {
      this.pedidoService.atualizaSituacaoPedido(this.pedido)
        .subscribe(pedido => {
          this.pedido = pedido;
          this.router.navigate(["/pedidos"]);
        });
    }
  }
}
