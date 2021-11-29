# ngFood

Bootcamp Desenvolvedor(a) Tech PAN 

Desafio Final

Aplicação com
Front End em 🅰️ Angular integrado a um Back End feito com ☕Java +
🍃SpringBoot e integrado ao MySQL.

##Descrição

Aplicação completa (full stack) para pedido de refeições, utilizando Angular
no frontend e Spring Boot no backend. Tal aplicação é composta por cinco telas.

# Cardápio

A tela inicial, Cardápio, exibe a lista de produtos e seus
respectivos preços. Ao clicar em um produto, ele é adicionado ao pedido atual. Um produto pode ser 
adicionado repetidas vezes ao pedido, aumentando a
quantidade do mesmo. Esta tela também contêm:
● A quantidade de itens adicionados e o
valor total do pedido atual.
● Link para a tela Pedido.

# Pedido

A tela Pedido exibe cada produto adicionado ao pedido atual e a respectiva quantidade, bem como o valor total do pedido.
Esta tela possibilita:
●	Voltar para a tela Cardápio.
●	Limpar o pedido (excluir todos os produtos).
●	Concluir o pedido (realiza o pedido e navega para a tela Acompanhe seu pedido)

# Acompanhe seu pedido

A tela Acompanhe seu pedido mostra o número do pedido (gerado pelo backend), a data/hora na qual ele foi realizado e sua situação.
A tela atualiza os dados automaticamente de 5 em 5 segundos, para refletir qualquer mudança na situação do pedido

# Gerenciar pedidos

A tela Gerenciar pedidos exibe a lista de todos os pedidos realizados (para que o restaurante possa atendê-los).
Ao clicar em um pedido, a aplicação navega para a tela Atualizar Pedido.

# Atualizar pedido

A tela Atualizar Pedido permite alterar a situação do mesmo. As possíveis situações são: Aguardando, Em preparação, Saiu para entrega e Entregue.
Após Salvar, a aplicação navega para a tela Gerenciar pedidos.





