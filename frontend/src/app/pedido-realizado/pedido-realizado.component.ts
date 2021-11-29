import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPedidoRealizado, PedidoService } from '../pedido/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-realizado',
  templateUrl: './pedido-realizado.component.html'
})
export class PedidoRealizadoComponent implements OnInit, OnDestroy {

  idPedido?: number;
  pedido?: IPedidoRealizado;
  interval?: number;
  constructor(private route: ActivatedRoute, public pedidoService: PedidoService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.idPedido = parseInt(paramMap.get('idPedido') || '0');
      this.carregaPedido();
    });
    this.interval = setInterval(() => {
      this.carregaPedido();
    }, 5000);
  }

  carregaPedido() {
    if (this.idPedido) {
      this.pedidoService.obtemPedido(this.idPedido)
        .subscribe(pedido => {
          this.pedido = pedido;
        });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
