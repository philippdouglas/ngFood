export interface IProduto {
  id: number,
  categoria: string,
  descricao: string,
  preco: number
}

export interface IItemPedido {
  produto: IProduto,
  quantidade: number
}