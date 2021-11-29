package igti.desafio.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import igti.desafio.modelo.ItemPedido;
import igti.desafio.modelo.Pedido;
import igti.desafio.repository.PedidoRepository;

@RestController
@Transactional
public class PedidoController {

	@Autowired
	private PedidoRepository pedidoRepository;

	@GetMapping("/pedidos")
	public List<Pedido> listaPedidos() {
		return pedidoRepository.findAll(Sort.by("dataHora").descending());
	}

	@PostMapping("/pedidos")
	public Pedido realizaPedido(@RequestBody PedidoDto pedido) {
		var entidadePedido = new Pedido();
		entidadePedido.setDataHora(LocalDateTime.now());
		entidadePedido.setSituacao(Pedido.SITUACAO_AGUARDANDO);
		entidadePedido.setItens(pedido.getItens().stream()
				.map(item -> new ItemPedido(item.getProduto(), item.getQuantidade())).collect(Collectors.toList()));

		return pedidoRepository.save(entidadePedido);
	}

	@GetMapping("/pedidos/{idPedido}")
	public Pedido obtemPedido(@PathVariable Integer idPedido) {
		return pedidoRepository.findById(idPedido).get();
	}
	
	@PutMapping("/pedidos/{idPedido}/situacao")
	public Pedido atualizaSituacaoPedido(@PathVariable Integer idPedido, @RequestParam(required = true) String novaSituacao) {
		Pedido pedido = pedidoRepository.findById(idPedido).get();
		pedido.setSituacao(novaSituacao);
		pedidoRepository.save(pedido);
		return pedido;
	}
}
