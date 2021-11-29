package igti.desafio.controller;

import java.util.List;

import igti.desafio.modelo.Produto;

public class PedidoDto {
	private List<ItemPedidoDto> itens;

	public List<ItemPedidoDto> getItens() {
		return itens;
	}

	public void setItens(List<ItemPedidoDto> itens) {
		this.itens = itens;
	}

	public static class ItemPedidoDto {
		private Produto produto;
		private Integer quantidade;

		public Produto getProduto() {
			return produto;
		}

		public void setProduto(Produto produto) {
			this.produto = produto;
		}

		public Integer getQuantidade() {
			return quantidade;
		}

		public void setQuantidade(Integer quantidade) {
			this.quantidade = quantidade;
		}
	}
}