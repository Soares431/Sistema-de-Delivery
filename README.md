# Sistema de Delivery

Sistema de delivery desenvolvido em Node.js para gerenciamento de pedidos, produtos e clientes através de interface de linha de comando (CLI). Projeto desenvolvido como trabalho acadêmico.

## 🚀 Tecnologias

- **Node.js** (v0.8.0+)
- **readline-sync** (v1.4.10) - Para interação via CLI

## 📁 Estrutura do Projeto
```
├── Main.js              # Arquivo principal do sistema
├── package.json         # Dependências do projeto
├── LICENSE             # Licença MIT
└── README.md           # Documentação básica
```

## ✨ Funcionalidades

### 1. Sistema de Autenticação

#### Login Administrativo
- Usuários pré-cadastrados: Guilherme, Rhodrigo, Adricero, Lucas, Waldeck, Valeria
- Senha única: `123456`
- Acesso a funcionalidades administrativas

#### Login de Cliente
- Autenticação com usuário e senha cadastrados
- Validação de credenciais
- Senha oculta durante digitação

#### Cadastro de Clientes
- Criação de nova conta com login e senha
- Validação para evitar usuários duplicados

### 2. Área Administrativa

#### Gerenciamento de Produtos
- ✅ Adicionar produto (nome, tipo, valor, categoria)
- ✅ Editar produto
- ✅ Remover produto
- ✅ Visualizar produto

#### Gerenciamento de Clientes
- ✅ Adicionar cliente (nome, CEP, CPF, número)
- ✅ Editar cliente
- ✅ Remover cliente
- ✅ Visualizar cliente

#### Dashboard de Estatísticas
- Faturamento do dia: R$ 5.000,00
- Total de pedidos: 500
- Funcionários que bateram meta: 10

> ⚠️ **Nota:** Os dados do dashboard são mockados para demonstração.

### 3. Área do Cliente

#### Catálogo de Produtos

| ID | Produto | Preço |
|----|---------|-------|
| 1 | Camisa Polo Preta | R$ 54,99 |
| 2 | Camisa Regata Marrom | R$ 25,00 |
| 3 | Camisa Social Amarela | R$ 49,99 |
| 4 | Calça Cargo Bege | R$ 89,99 |
| 5 | Camisa Polo Vermelha | R$ 54,99 |
| 6 | Calça Jeans Azul | R$ 55,00 |
| 7 | Jaqueta de Couro Marrom | R$ 119,99 |

#### Carrinho de Compras
- Adicionar produtos por ID
- Visualizar itens no carrinho
- Cálculo automático do valor total
- **Frete fixo:** R$ 5,00

#### Formas de Pagamento

**💳 Débito**
- Pagamento à vista
- Solicitação de dados do cartão

**💳 Crédito (Parcelado)**
- 2x com juros de 0,6%
- 3x com juros de 0,9%
- 4x com juros de 1,2%
- 5x com juros de 1,5%

**📱 PIX**
- Geração de código aleatório (12 caracteres)
- Pagamento instantâneo

**💵 Dinheiro**
- Pagamento em espécie na entrega

**🧾 Boleto**
- Geração de código de barras (47 caracteres)
- Dados do beneficiário e pagador
- Data de vencimento: 30/05/2024

#### Histórico de Pedidos
- Visualização de todos os pedidos realizados
- Informações detalhadas: código, status, valor, forma de pagamento, itens

**Status do Pedido:**
1. ✅ Pedido Confirmado
2. 📦 Preparando o Pedido
3. 🚚 Pedido Enviado
4. 🎉 Entregue

#### Cancelamento de Pedidos
- ✅ Cancelar pedidos não entregues
- ❌ Impossível cancelar pedidos já entregues

### 4. Recursos Adicionais

#### Navegação no Sistema
- `cd` - Mudar diretório
- `pwd` - Exibir diretório atual

#### Histórico de Comandos
- `!!` ou `!-1` - Repetir último comando
- `!!:p` ou `!-1:p` - Visualizar sem executar

## ⚠️ Limitações

### Dados e Persistência
- ❌ **Produtos não persistentes** - Produtos adicionados pelos admins não são salvos
- ❌ **Catálogo fixo** - Clientes só podem comprar os 7 produtos pré-definidos
- ❌ **Sem banco de dados** - Dados armazenados apenas em memória
- ❌ **Perda de dados** - Todos os dados são perdidos ao fechar o programa

### Funcionalidades
- ❌ **Usuários admin fixos** - Não é possível cadastrar novos administradores
- ❌ **Senha única para admins** - Todos compartilham a senha `123456`
- ❌ **Estatísticas mockadas** - Dashboard não reflete dados reais
- ❌ **Sem edição de carrinho** - Impossível remover itens após adicionar
- ❌ **Frete fixo** - Não há cálculo de frete por localização
- ❌ **Validações limitadas** - CPF, CEP e e-mail não são validados

### Interface
- ❌ **Somente CLI** - Não há interface gráfica
- ❌ **Sem cores** - Interface monocromática
- ⚠️ **Compatibilidade** - `console.clear()` pode não funcionar em todos os terminais
- ⚠️ **Formatação** - Menus podem desalinhar em terminais menores

### Segurança
- 🔓 **Senhas em texto plano** - Armazenamento inseguro
- 🔓 **Sem criptografia** - Dados não são protegidos
- 🔓 **Senha admin exposta** - Senha visível no código-fonte
- 🔓 **Sem timeout de sessão** - Sessões não expiram

### Técnicas
- ⚠️ **Código monolítico** - Todo código em um único arquivo
- ⚠️ **Sem tratamento de erros** - Inputs inválidos podem quebrar o sistema
- ⚠️ **Sem testes** - Ausência de testes automatizados
- ⚠️ **Dependência TTY** - Funciona apenas em ambientes com TTY
- ⚠️ **Operações bloqueantes** - Pode travar o sistema

## 🎯 Como Usar

### Fluxo para Administradores
```
1. Escolher opção 1 (Login administrativo)
2. Login: [Guilherme/Rhodrigo/Adricero/Lucas/Waldeck/Valeria]
3. Senha: 123456
4. Acessar menu administrativo:
   ├── Produtos (adicionar/editar/remover)
   ├── Clientes (adicionar/editar/remover)
   └── Estatísticas (dashboard)
```

### Fluxo para Clientes
```
1. Primeira vez: Escolher opção 3 (Cadastrar conta)
2. Login: Escolher opção 2 (Login como cliente)
3. Inserir credenciais
4. Menu do cliente:
   ├── Ver catálogo de produtos
   ├── Adicionar produtos ao carrinho
   ├── Comprar diretamente
   ├── Visualizar histórico de pedidos
   └── Cancelar pedidos
5. Finalizar pagamento
6. Acompanhar status do pedido
```

## 📊 Estrutura de Dados

### Usuário
```javascript
{
  username: string,
  password: string
}
```

### Produto
```javascript
{
  id: number,
  nome: string,
  tipo: string,
  valor: number,
  categoria: string
}
```

### Pedido
```javascript
{
  codPedido: number,
  valorMaisFrete: number,
  tipoPagamento: string,
  carrinho: Array<Produto>,
  status: AtualizacaoPedido
}
```

### Status do Pedido
```javascript
{
  num: number,                    // Contador de atualizações
  current_status: string,         // Status atual
  updateStatus(): string,         // Atualiza para próximo status
  returnStatus(): string          // Retorna status atual
}
```

## 📄 Licença

MIT License - Copyright (c) 2024 Lucas Soares

---

**Nota:** Este é um projeto acadêmico desenvolvido para fins educacionais. Não é recomendado para uso em produção sem as devidas melhorias de segurança e funcionalidade.
