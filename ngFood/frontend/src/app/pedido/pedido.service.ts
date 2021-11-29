import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto, IItemPedido } from '../produto';


export interface IPedidoRealizado {
  id: number;
  dataHora: string;
  situacao: string;
  itens: IItemPedido[];
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  itens: { produto: IProduto, quantidade: number }[] = [];

  adicionaProduto(produto: IProduto) {
    let item = this.itens.find(item => item.produto.id === produto.id);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  limpaPedido() {
    this.itens = [];
  }

  get valorTotal() {
    let valor = 0;
    for (const item of this.itens) {
      valor += item.produto.preco * item.quantidade;
    }
    return valor;
  }

  get quantidadeTotal() {
    let quantidade = 0;
    for (const item of this.itens) {
      quantidade += item.quantidade;
    }
    return quantidade;
  }

  realizaPedido() {
    return this.httpClient.post<IPedidoRealizado>('http://localhost:8080/pedidos', { itens: this.itens });
  }

  obtemCardapio() {
    return this.httpClient.get<IProduto[]>('http://localhost:8080/cardapio');
  }

  obtemPedido(idPedido: number) {
    return this.httpClient.get<IPedidoRealizado>('http://localhost:8080/pedidos/' + idPedido);
  }

  obtemPedidos() {
    return this.httpClient.get<IPedidoRealizado[]>('http://localhost:8080/pedidos/');
  }

  atualizaSituacaoPedido(pedido: IPedidoRealizado) {
    return this.httpClient.put<IPedidoRealizado>(`http://localhost:8080/pedidos/${pedido.id}`, pedido);
  }
}
