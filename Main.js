// CODIGO ATUALIZADO 

const readlineSync = require('readline-sync');

let users = [];
let repet = true;
let frete = 5
let valorMaisFrete = 0
let valorCarrinho = 0;
let carrinho = [];
let codPedido = 0
let tipoPagamento = " "
let pedido = {} // Objeto
let pedidosFeitos = []
let status = " " // status do pedido
function atualizacaoPedido() {
   this.num = 0;
   this.current_status = " "
   this.updateStatus = function(){
       this.num += 1
       if( this.num  === 1){
           this.current_status = "Pedido Confirmado"
           return this.current_status
       }
       if( this.num  === 2){
           this.current_status = "Preparando o Pedido"
           return this.current_status
       }   
       else if( this.num  === 3){
           this.current_status = "Pedido Enviado"
           return this.current_status
       }
       else if( this.num >= 4){
           this.current_status = "Entregue!"
           return this.current_status
       }   
   };
   this.returnStatus = function(){
       return this.current_status
   }
}

while (true) {
   console.clear()
   console.log("===============================================");
   console.log("|             Sistema de Delivery             |");
   console.log("===============================================");
   console.log("|                                             |");
   console.log("|         1- Login administrativo             |");
   console.log("|         2- Login como cliente               |");
   console.log("|         3- Cadastrar sua conta              |");
   console.log("|         0- Sair do sistema                  |");
   console.log("|                                             |");
   console.log("===============================================\n");

   let option = readlineSync.questionInt("Escolha: ");
   console.clear();
   switch (option) {
      case 1:
         console.log("===============================================");
         console.log("|     Sistema de adminstração do Delivery      |");
         console.log("===============================================");
         console.log("|                                             |");

         const loginAdm = readlineSync.question("|     Login: ");
         const senhaAdm = readlineSync.questionInt("|     Senha: ", { hideEchoBack: true });

         console.log("|                                             |");
         console.log("===============================================\n");

         readlineSync.question("Pressione ENTER para continuar...");
         console.clear();

         if (
            (loginAdm === "Guilherme" || loginAdm === "Rhodrigo" || loginAdm === "Adricero" || loginAdm === "Lucas" || loginAdm === "Waldeck" || loginAdm === "Valeria") &&
            senhaAdm === 123456
         ) {
            console.log("===============================================");
            console.log("|          Seja bem-vindo " + loginAdm + "           |");
            console.log("===============================================");

            while (true) {
               console.log("|      Sistema de administração Delivery      |");
               console.log("===============================================");
               console.log("|                                             |");
               console.log("|      1- Produtos                            |");
               console.log("|      2- Clientes                            |");
               console.log("|      3- Ver estatisticas                    |");
               console.log("|      0- Sair da conta                       |");
               console.log("|                                             |")
               console.log("===============================================\n");

               let escolha = readlineSync.questionInt("Escolha: ");
               console.log("");

               console.clear();

               switch (escolha) {
                  case 1:
                     while (true) {
                        console.log("===============================================");
                        console.log("|      Página administrativa de produtos      |");
                        console.log("===============================================");
                        console.log("|                                             |");
                        console.log("|      1- Adicionar produto                   |");
                        console.log("|      2- Remover produto                     |");
                        console.log("|      3- Editar produto                      |");
                        console.log("|      0- Voltar para o menu principal        |");
                        console.log("|                                             |");
                        console.log("===============================================\n");

                        let escolhaProdutoAdm = readlineSync.questionInt("Escolha: ");
                        console.log("");

                        console.clear();

                        switch (escolhaProdutoAdm) {
                           case 1:
                              console.log("===============================================");
                              console.log("|             ADICIONAR PRODUTO               |");
                              console.log("===============================================");
                              console.log("|                                             |");
                              const nomeProduto = readlineSync.question("|      Nome do produto: ");
                              const tipoProduto = readlineSync.question("|      Tipo do produto: ");
                              const valorProduto = readlineSync.questionFloat("|      Valor do produto: ");
                              const categoriaProduto = readlineSync.question("|      Categoria do produto: ");
                              console.log("|                                             |");
                              console.log("===============================================\n");

                              console.clear();

                              console.log("===============================================");
                              console.log("|             PRODUTO ADICIONADO              |");
                              console.log("===============================================");
                              console.log("|                                             |");
                              console.log("|      1- Ver produto adicionado              |");
                              console.log("|      2- Editar produto adicionado           |");
                              console.log("|      3- Excluir produto adicionado          |");
                              console.log("|      0- Voltar para o menu principal        |");
                              console.log("|                                             |");
                              console.log("===============================================\n");

                              let escolhaProduto = readlineSync.questionInt("Escolha: ");
                              console.log("");

                              console.clear();

                              switch (escolhaProduto) {
                                 case 1:
                                    console.log("===============================================");
                                    console.log("|              " + nomeProduto + "            |");
                                    console.log("===============================================");
                                    console.log("|                                             |");
                                    console.log("|      Tipo: " + tipoProduto);
                                    console.log("|      Valor: " + valorProduto);
                                    console.log("|      Categoria: " + categoriaProduto);
                                    console.log("|                                             |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");

                                    console.clear();

                                    break;
                                 case 2:
                                    console.log("===============================================");
                                    console.log("|                EDITAR PRODUTO               |");
                                    console.log("===============================================");
                                    console.log("|                                             |");
                                    const novoNomeProduto = readlineSync.question("|      Nome do produto: ");
                                    const novoTipoProduto = readlineSync.question("|      Tipo do produto: ");
                                    const novoValorProduto = readlineSync.questionFloat("|      Valor do produto: ");
                                    const novaCategoriaProduto = readlineSync.question("|      Categoria do produto: ");
                                    console.log("|                                             |");
                                    console.log("===============================================\n");

                                    console.clear();

                                    console.log("===============================================");
                                    console.log("|               PRODUTO EDITADO!              |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");
                                    console.clear();
                                    break;
                                 case 3:
                                    console.log("===============================================");
                                    console.log("|                PRODUTO EXCLUIDO!            |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");
                                    console.clear();
                                    break;
                                 case 0:
                                    console.log("===============================================");
                                    console.log("|             SAINDO DO SISTEMA...            |");
                                    console.log("===============================================");

                                    readlineSync.question("Pressione ENTER para continuar...");
                                    console.clear();
                                    process.exit();
                                    break;
                                 default:
                                    console.log("===============================================");
                                    console.log("|     ESCOLHA ERRADA, SAINDO DO SISTEMA...    |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");
                                    console.clear();
                                    break;
                              }
                              break;
                           case 2:
                              console.log("===============================================");
                              console.log("|     NÃO EXISTE PRODUTO PARA SER REMOVIDO     |");
                              console.log("===============================================\n");

                              readlineSync.question("Pressione ENTER para continuar...");
                              console.clear();
                              break;
                           case 3:
                              console.log("===============================================");
                              console.log("|     NÃO EXISTE PRODUTO PARA SER EDITADO     |");
                              console.log("===============================================\n");

                              readlineSync.question("Pressione ENTER para continuar...");
                              console.clear();
                              break;
                           case 0:
                              console.log("===============================================");
                              console.log("|             SAINDO DO SISTEMA...            |");
                              console.log("===============================================");

                              readlineSync.question("Pressione ENTER para continuar...");
                              console.clear();
                              process.exit();
                              break;
                           default:
                              break;
                        }

                        if (escolhaProdutoAdm === 0) {
                           break;
                        }
                     }
                     break;
                  case 2:
                     while (true) {
                        console.log("===============================================");
                        console.log("|      Página administrativa de clientes      |");
                        console.log("===============================================");
                        console.log("|                                             |");
                        console.log("|      1- Adicionar cliente                   |");
                        console.log("|      2- Remover cliente                     |");
                        console.log("|      3- Editar cliente                      |");
                        console.log("|      0- Voltar para o menu principal        |");
                        console.log("|                                             |");
                        console.log("===============================================\n");

                        let escolhaPesquisa = readlineSync.questionInt("Escolha: ");
                        console.log("");

                        console.clear();

                        switch (escolhaPesquisa) {
                           case 1:
                              console.log("===============================================");
                              console.log("|             ADICIONAR CLIENTE               |");
                              console.log("===============================================");
                              console.log("|                                             |");
                              const nomeCliente = readlineSync.question("|      Nome do cliente: ");
                              const localCliente = readlineSync.questionInt("|      CEP do cliente: ");
                              const cpfCliente = readlineSync.questionFloat("|      CPF do cliente: ");
                              const numeroCliente = readlineSync.questionInt("|      Numero do cliente: ");
                              console.log("|                                             |");
                              console.log("===============================================\n");

                              readlineSync.question("Pressione ENTER para continuar...");
                              console.clear();

                              console.log("===============================================");
                              console.log("|             CLIENTE ADICIONADO              |");
                              console.log("===============================================");
                              console.log("|                                             |");
                              console.log("|      1- Ver cliente adicionado              |");
                              console.log("|      2- Editar cliente adicionado           |");
                              console.log("|      3- Excluir cliente adicionado          |");
                              console.log("|      0- Voltar para o menu principal        |");
                              console.log("|                                             |");
                              console.log("===============================================\n");

                              let escolhaCliente = readlineSync.questionInt("Escolha: ");
                              console.log("");

                              console.clear();

                              switch (escolhaCliente) {
                                 case 1:
                                    console.log("===============================================");
                                    console.log("|              " + nomeCliente + "            |");
                                    console.log("===============================================");
                                    console.log("|                                             |");
                                    console.log("|      CEP: " + localCliente);
                                    console.log("|      CPF: " + cpfCliente);
                                    console.log("|      Numero: " + numeroCliente);
                                    console.log("|                                             |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");
                                    console.clear();
                                    break;
                                 case 2:
                                    console.log("===============================================");
                                    console.log("|                EDITAR CLIENTE               |");
                                    console.log("===============================================");
                                    console.log("|                                             |");
                                    const novoNomeCliente = readlineSync.question("|      Nome do cliente: ");
                                    const novoCEPCliente = readlineSync.questionInt("|      CEP do cliente: ");
                                    const novoCpfCliente = readlineSync.questionFloat("|      CPF do cliente: ");
                                    const novaNumeroCliente = readlineSync.questionInt("|      Numero do cliente: ");
                                    console.log("|                                             |");
                                    console.log("===============================================\n");

                                    console.clear();
                                    break;
                                 case 3:
                                    console.log("===============================================");
                                    console.log("|                CLIENTE EXCLUIDO!            |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");

                                    console.clear();
                                    break;
                                 default:
                                    console.log("===============================================");
                                    console.log("|     ESCOLHA ERRADA, SAINDO DO SISTEMA...    |");
                                    console.log("===============================================\n");

                                    readlineSync.question("Pressione ENTER para continuar...");

                                    console.clear();
                                    break;
                              }
                              break;
                           case 2:
                              console.log("===============================================");
                              console.log("|     NÃO EXISTE CLIENTE PARA SER REMOVIDO    |");
                              console.log("===============================================\n");

                              readlineSync.question("Pressione ENTER para continuar...");

                              console.clear();
                              break
                           case 3:
                              console.log("===============================================");
                              console.log("|     NÃO EXISTE CLIENTE PARA SER EDITADO     |");
                              console.log("===============================================\n");

                              readlineSync.question("Pressione ENTER para continuar...");

                              console.clear();
                              break;
                           case 0:
                              break;
                           default:
                              break;
                        }
                        break;
                        if (escolhaPesquisa === 0) {
                           break;
                        }
                     }
                  case 3:
                     console.log("===============================================");
                     console.log("|    DASHBOARD DE ESTATISTICAS DO DELIVERY    |");
                     console.log("===============================================");
                     console.log("|                                             |");
                     console.log("| ███████████████ = R$ 5,000.00 faturado hoje |");
                     console.log("| ████████ = 500 pedidos feitos hoje          |");
                     console.log("| ████ = 10 funcionarios bateram a meta hoje  |");
                     console.log("|                                             |");
                     console.log("===============================================\n");

                     readlineSync.question("Pressione ENTER para continuar...");

                     console.clear();
                     break;
                  case 0:
                     console.log("===============================================");
                     console.log("|              SAINDO DA CONTA ...            |");
                     console.log("===============================================\n");

                     readlineSync.question("Pressione ENTER para continuar...");

                     console.clear();
                     break;
                  default:
                     console.log("===============================================");
                     console.log("|     ESCOLHA ERRADA, SAINDO DO SISTEMA...    |");
                     console.log("===============================================\n");

                     readlineSync.question("Pressione ENTER para continuar...");

                     console.clear();
                     break;
               }
               if (escolha === 0) {
                  break;
               }
            }
         } else {
            console.log("Login e senha incorretos!\n");
            console.log("Saindo do sistema...\n");

            readlineSync.question("Pressione ENTER para continuar...");
            console.clear();
         }
         break;
      case 2:
         console.log("===============================================");
         console.log("|       Sistema de Delivery - Cadastro        |");
         console.log("===============================================");
         console.log("|                                             |");

         username = readlineSync.question("|     Login: ");
         password = readlineSync.question("|     Senha: ", { hideEchoBack: true });

         console.log("|                                             |");
         console.log("===============================================\n");

         let clienteCadastrado = users.find(cliente => cliente.username === username && cliente.password === password);

         if (clienteCadastrado) {
            console.log("==============================================");
            console.log("|        Login realizado com sucesso!        |");
            console.log("==============================================\n");

            readlineSync.question("Pressione ENTER para continuar...");
            console.clear();

            console.log("===============================================");
            console.log("|          Seja bem-vindo " + username + "           |");
            console.log("===============================================");

            while (true) {
               console.log("|     Sistema de Delivery - Faça seu pedido   |");
               console.log("===============================================");
               console.log("|                                             |");
               console.log("|      1- Produtos                            |");
               console.log("|      2- Clientes                            |");
               console.log("|      3- Ver estatisticas                    |");
               console.log("|      0- Sair da conta                       |");
               console.log("|                                             |")
               console.log("===============================================");
               let escolhaPedido = readlineSync.questionInt("|      Escolha: ")
               console.log("===============================================\n");

               console.clear();
               switch (escolhaPedido) {
                  case 1:
                     const produtos = [
                        { id: 1, nome: "Camisa Polo Preta", tipo: "Camisa Polo", valor: 54.99, categoria: "Roupas" },
                        { id: 2, nome: "Camisa Regata Marrom", tipo: "Camisa Regata", valor: 25.00, categoria: "Roupas" },
                        { id: 3, nome: "Camisa Social Amarela", tipo: "Camisa Social", valor: 49.99, categoria: "Roupas" },
                        { id: 4, nome: "Calça Cargo Bege", tipo: "Calça Cargo", valor: 89.99, categoria: "Roupas" },
                        { id: 5, nome: "Camisa Polo Vermelha", tipo: "Camisa Polo", valor: 54.99, categoria: "Roupas" },
                        { id: 6, nome: "Calça Jeans Azul", tipo: "Calça Jeans", valor: 55.00, categoria: "Roupas" },
                        { id: 7, nome: "Jaqueta de Couro Marrom", tipo: "Jaqueta de Couro Marrom", valor: 119.99, categoria: "Roupas" }
                     ];


                     function addCarrinho(idProduto) {
                        const produto = produtos.find(p => p.id === idProduto);
                        if (produto) {
                           carrinho.push(produto);
                           console.log(`${produto.id} - ${produto.nome}        R$ ${produto.valor} `);
                           console.log("===============================================");
                           console.log("|              PRODUTO ADICIONADO             |");
                           console.log("===============================================");
                           valorCarrinho += produto.valor;
                        } else {
                           console.log("Produto não encontrado");
                        }
                     }

                     function mostrarProdutos() {
                        produtos.forEach(produto => {
                           console.log(`${produto.id} - ${produto.nome}\nR$ ${produto.valor}`

                           );
                           console.log("===============================================");
                        });
                     }

                     function mostrarCarrinho() {
                        if (carrinho.length === 0) {
                           console.log("Carrinho Vazio");
                        } else {
                           carrinho.forEach((produto, index) => {
                              console.log((index + 1) + " - " + produto.nome + " R$ " + produto.valor);
                           });
                        }
                     }

                     function ProgramaEncerrado() {
                        console.clear();
                        console.log("===============================================");
                        console.log("|              Programa Encerrado!            |");
                        console.log("|                 Volte Sempre                |");
                        console.log("===============================================");
                     }

                     function AdicionaCartao() {
                        let nomeCartao = " "
                        let numerodoCartao = 0
                        let datadeExpedicao = ""
                        let codVerificacao = 0

                        console.log("|---------------------------------------------|")
                        console.log("|             Adicionar um Cartao             |");
                        console.log("|---------------------------------------------|")

                        numerodoCartao = checarNumero("| Numero do Cartao:", 16)
                        nomeCartao = readlineSync.question("| Nome do Cartao: ").toUpperCase()
                        datadeExpedicao = readlineSync.question("| Data de Expiracao (Mes/Ano): ")
                        codVerificacao = checarNumero("| Codigo de Seguranca (CVV): ", 3, true)
                        console.log("|---------------------------------------------|")
                        console.log("\n|=== Cartão Adicionado! ===|\n");
                     }

                     function checarNumero(pergunta = "", QtdCaractere = 0, mostraSenha = false) {
                        let num
                        do {
                           num = readlineSync.question(pergunta, { hideEchoBack: mostraSenha })

                           if (isNaN(num))
                              console.log("\n|=== Valor inserido invalido! ===|\n");
                           else if (num.length !== QtdCaractere)
                              console.log("\n|=== Quantidade de Caracteres invalido! ===|\n");

                        } while ((num.length !== QtdCaractere) || isNaN(num))
                        return num
                     }

                     function pagamento(frete, valorTotal) {
                        console.log("|---------------------------------------------|")
                        console.log("\tFRETE: R$" + frete.toFixed(2));
                        console.log("\tVALOR TOTAL: R$" + valorTotal.toFixed(2));
                        console.log("|---------------------------------------------|")
                        console.log("===============================================\n");
                        var space = readlineSync.question("Pressione ENTER para continuar...")
                        console.clear();
                        console.log("===============================================");
                        console.log("|         PAGAMENTO REALIZADO COM SUCESSO!    |");
                        console.log("===============================================");
                        var space = readlineSync.question("Pressione ENTER para continuar...")
                        console.clear();
                     }

                     function pagamentoPacelado(frete, valorTotal, taxajuro, parcela) {
                        let montante = (valorTotal * (1 + taxajuro))
                        let montanteComJuros = montante / parcela
                        valorMaisFrete = montante
                        console.log("===============================================");
                        console.log("|                PARCELADO " + parcela + "X                 |");
                        console.log("===============================================");
                        console.log("|---------------------------------------------|")
                        console.log("\tFRETE: R$" + frete.toFixed(2));
                        console.log("\tVALOR TOTAL: R$" + montante.toFixed(2));
                        console.log("|---------------------------------------------|")
                        console.log("\tVALOR PARCELADO: R$" + montanteComJuros.toFixed(2));
                        console.log("|---------------------------------------------|")
                        console.log("===============================================\n");
                        var space = readlineSync.question("Pressione ENTER para continuar... ")
                        console.clear();
                        tipoPagamento = "CARTAO - " + parcela + "x de " + montanteComJuros.toFixed(2)
                        console.log("===============================================");
                        console.log("|         PAGAMENTO REALIZADO COM SUCESSO!    |");
                        console.log("===============================================");
                        var space = readlineSync.question("Pressione ENTER para continuar... ")
                        console.clear();
                     }

                     function FormaPagamento() {
                        valorMaisFrete = valorCarrinho + frete; // valor do carrinho com o frete
                        var cont1 = true; // variavel que faz continuar a a função "FormaPagamento"
                        var cont2 = true; // variavel que faz continuar o switch da forma de pagamento "credito"
                        while (cont1) {
                           console.clear();
                           console.log("===============================================");
                           console.log("|                 PAGAMENTO                   |");
                           console.log("===============================================");
                           console.log("|                                             |");
                           console.log("|      1 - DEBITO                             |");
                           console.log("|      2 - CREDITO                            |");
                           console.log("|      3 - PIX                                |");
                           console.log("|      4 - À VISTA                            |");
                           console.log("|      5 - BOLETO                             |");
                           console.log("|      0 - MENU PRINCIPAL                     |");
                           console.log("|                                             |");
                           console.log("===============================================\n");
                           let escolha = readlineSync.questionInt("Escolha: ");
                           console.clear();
                           switch (escolha) {
                              case 1:
                                 console.log("===============================================");
                                 console.log("|                   DEBITO                    |");
                                 console.log("===============================================");
                                 AdicionaCartao();
                                 pagamento(frete, valorMaisFrete);
                                 cont1 = false;
                                 tipoPagamento = "CARTAO - DEBITO"
                                 break;
                              case 2:
                                 cont2 = true;
                                 while (cont2) {
                                    console.log("===============================================");
                                    console.log("|                   CREDITO                   |");
                                    console.log("===============================================");
                                    AdicionaCartao();
                                    console.log("|---------------------------------------------|");
                                    console.log("|                                             |");
                                    console.log("|      1 - parcelado 2x com 0.6% de juros     |");
                                    console.log("|      2 - parcelado 3x com 0.9% de juros     |");
                                    console.log("|      3 - parcelado 4x com 1.2% de juros     |");
                                    console.log("|      4 - parcelado 5x com 1.5% de juros     |");
                                    console.log("|      0 - Voltar para o menu principal       |");
                                    console.log("|                                             |");
                                    console.log("===============================================\n");
                                    let escolha = readlineSync.questionInt("Escolha: ");
                                    console.clear();
                                    switch (escolha) {
                                       case 1:
                                          // Juros de 0.6%
                                          pagamentoPacelado(frete, valorMaisFrete, 0.006, 2);
                                          cont1 = false;
                                          cont2 = false;
                                          break;
                                       case 2:
                                          //juros de 0.9% 
                                          pagamentoPacelado(frete, valorMaisFrete, 0.009, 3);
                                          cont1 = false;
                                          cont2 = false;
                                          break;
                                       case 3:
                                          // Juros de 1.2%
                                          pagamentoPacelado(frete, valorMaisFrete, 0.012, 4);
                                          cont1 = false;
                                          cont2 = false;
                                          break;
                                       case 4:
                                          // Juros de 1.5%
                                          pagamentoPacelado(frete, valorMaisFrete, 0.015, 5);
                                          cont1 = false;
                                          cont2 = false;
                                          break;
                                       case 0:
                                          console.log("===============================================");
                                          console.log("|                 VOLTANDO                    |");
                                          console.log("===============================================");
                                          readlineSync.question("Pressione ENTER para continuar...");
                                          console.clear();
                                          cont1 = false;
                                          cont2 = false;
                                          break;
                                       default:
                                          console.log("===============================================");
                                          console.log("|       VALOR INVALIDO! TENTE NOVAMENTE       |");
                                          console.log("===============================================");
                                          readlineSync.question("Pressione ENTER para continuar...");
                                          console.clear();
                                          break;
                                    }
                                 }
                                 break;
                              case 3:
                                 let codigoPix = geradorDeCodigo(12);
                                 console.log("===============================================");
                                 console.log("|                    PIX                      |");
                                 console.log("===============================================");
                                 console.log("|---------------------------------------------|");
                                 console.log("\tFRETE: R$" + frete.toFixed(2));
                                 console.log("\tVALOR TOTAL: R$" + valorMaisFrete.toFixed(2));
                                 console.log("|---------------------------------------------|");
                                 console.log("===============================================");
                                 readlineSync.question("pressione Enter para continuar...");
                                 console.clear();
                                 console.log("===============================================");
                                 console.log("|                 " + codigoPix + "                |");
                                 console.log("|          Copie e Cole o Código Pix          |");
                                 console.log("===============================================\n");
                                 readlineSync.question("pressione Enter para continuar...");
                                 console.clear();
                                 console.log("===============================================");
                                 console.log("|         PAGAMENTO REALIZADO COM SUCESSO!    |");
                                 console.log("===============================================");
                                 readlineSync.question("pressione Enter para continuar...");
                                 console.clear();
                                 cont1 = false;
                                 tipoPagamento = "PIX"
                                 break;
                              case 4:
                                 console.log("===============================================");
                                 console.log("|                   DINHEIRO                  |");
                                 console.log("===============================================");
                                 pagamento(frete, valorMaisFrete);
                                 cont1 = false;
                                 tipoPagamento = "DINHEIRO"
                                 break;
                              case 5:
                                 let codigo = geradorDeCodigoBarra(47);
                                 console.log("===============================================");
                                 console.log("|                  BOLETO                     |");
                                 console.log("===============================================");
                                 console.log("| Beneficiário: Delivery                      |");
                                 console.log("| CPF/CNPJ: 400.289.224-00                    |");
                                 console.log("| Endereço: Rua do Beneficiário, 123          |");
                                 console.log("| Cidade/Estado: PE                           |");
                                 console.log("| CEP: 12345-678                              |");
                                 console.log("|---------------------------------------------|");
                                 console.log("| Pagador: Seu Zé                             |");
                                 console.log("| CPF/CNPJ: 987.654.321-00                    |");
                                 console.log("| Endereço: Rua do Pagador, 456               |");
                                 console.log("| Cidade/Estado: PE                           |");
                                 console.log("| CEP: 98765-432                              |");
                                 console.log("|---------------------------------------------|");
                                 console.log("| Data de Vencimento: 30/05/2024              |");
                                 console.log("|---------------------------------------------|");
                                 console.log("\tFRETE: R$" + frete.toFixed(2));
                                 console.log("\tVALOR TOTAL: R$" + valorMaisFrete.toFixed(2));
                                 console.log("|---------------------------------------------|\n");
                                 console.log("Código de Barras: \n" + codigo + "\n");
                                 console.log("===============================================");
                                 readlineSync.question("pressione Enter para emitir boleto...");
                                 console.clear();
                                 console.log("===============================================");
                                 console.log("|      PROCEDIMENTO REALIZADO COM SUCESSO!    |");
                                 console.log("===============================================");
                                 readlineSync.question("pressione Enter para continuar...");
                                 console.clear();
                                 cont1 = false;
                                 tipoPagamento = "BOLETO"
                                 break;
                              case 0:
                                 console.log("===============================================");
                                 console.log("|            VOLTANDO PARA O MENU             |");
                                 console.log("===============================================");
                                 readlineSync.question("pressione ENTER para continuar...");
                                 console.clear();
                                 cont1 = false;
                                 break;
                              default:
                                 console.log("===============================================");
                                 console.log("|       VALOR INVALIDO! TENTE NOVAMENTE       |");
                                 console.log("===============================================");
                                 readlineSync.question("Pressione ENTER para continuar...");
                                 console.clear();
                                 break;
                           }
                        }
                        // cria um novo objeto "pedido" e o coloca no array 'pedidosFeitos'
                        codPedido++
                        status = new atualizacaoPedido()
                        pedido = { codPedido, valorMaisFrete, tipoPagamento, carrinho, status }
                        pedidosFeitos.push(pedido)
                        valorCarrinho = 0
                        valorMaisFrete = 0
                        carrinho = []
                        console.log("===============================================");
                        console.log("|            FINALIZANDO PAGAMENTO            |");
                        console.log("===============================================");
                        var space = readlineSync.question("pressione qualquer tecla para continuar ")
                        console.clear();
                        do {
                           var repet = true
                           var op = readlineSync.question("Ver Historico de Pedidos ? [S/N]: ")
                           switch (op.toUpperCase()) {
                              case "S":
                                 PedidosFeitos()
                                 repet = false
                                 break
                              case "N":
                                 repet = false
                                 break
                              default:
                                 console.log("\n --- Resposta Invalida! ---\n")
                                 break
                           }
                        } while (repet)
                     }

                     // Geradores de código
                     function geradorDeCodigo(tamanho) {
                        let caracter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                        let codigo = "";
                        for (let i = 0; i < tamanho; i++) {
                           codigo += caracter.charAt(Math.floor(Math.random() * caracter.length));
                        }
                        return codigo;
                     }

                     function geradorDeCodigoBarra(tamanho) {
                        let codigo = "";
                        for (let i = 0; i < tamanho; i++) {
                           codigo += "|";
                        }
                        return codigo;
                     }
                     function PedidosFeitos() {
                        if (pedidosFeitos.length === 0) {
                           console.log("\n --- Nao foi realizado nenhuma compra! ---\n ");
                        } else {
                           console.clear()
                           console.log("===============================================");
                           console.log("|                  PEDIDOS                    |");
                           console.log("===============================================");
                           pedidosFeitos.forEach((pedidos) => {
                              console.log("|---------------------------------------------|")
                              console.log(`|                CODIGO: ${pedidos.codPedido}                    |`);
                              console.log(`|\tSTATUS: ${pedidos.status.updateStatus().toUpperCase()}`);
                              console.log("|---------------------------------------------|")
                              console.log(`| FRETE: $5,00 \n| VALOR TOTAL: R$ ${pedidos.valorMaisFrete.toFixed(2)} - ${pedidos.tipoPagamento}`);
                              console.log("|---------------------------------------------|")
                              console.log("|                    ITENS                    |");
                              console.log("|                                             |")
                              pedidos.carrinho.forEach((itens) => {
                                 console.log(`| ${itens.nome}  valor:  R$ ${itens.valor} `);
                              });
                              console.log("|---------------------------------------------|")
                              console.log("==============================================\n");
                           })
                           do {
                              var repet = true
                              var op = readlineSync.question("Cancelar Transacao? [S/N]: ")
                              switch (op.toUpperCase()) {
                                 case "S":
                                    ExcluirPedido()
                                    repet = false
                                    break
                                 case "N":
                                    repet = false
                                    break
                                 default:
                                    console.log("\n --- Resposta Invalida! ---\n")
                                    break
                              }
                           } while (repet)
                        }
                        console.log()
                        var space = readlineSync.question("pressione Enter para voltar ao Menu... ")
                        console.clear();
                     }

                     function ExcluirPedido() {
                        while (true) {
                           let cod = readlineSync.questionInt("Codigo do Pedido: [0 para cancelar]: ")
                           console.log();

                           if (cod === 0) {
                              return
                           }
                           else {
                              const pedido = pedidosFeitos.find(p => p.codPedido === cod)
                              if (pedido) {
                                 if (pedido.status.returnStatus() == "Entregue!") {
                                    console.clear()
                                    console.log("------------------------------------------------");
                                    console.log("             SOLICITACAO NEGADA!                ")
                                    console.log("      PEDIDO JA ENTREGUE AO DESTINATARIO        ")
                                    console.log("------------------------------------------------");
                                    return
                                 }
                                 else {
                                    cod--
                                    console.clear()
                                    // pedidosFeitos.splice(cod, 1)
                                    pedidosFeitos = pedidosFeitos.filter(p => p.codPedido === cod);
                                    console.log("------------------------------------------------");
                                    console.log("|             TRANSAÇÃO CANCELADA              |");
                                    console.log("------------------------------------------------");
                                    return
                                 }
                              } else {

                                 console.log("Pedido não encontrado... Tente Novamente!");
                              }
                           }
                        }
                     }

                     // Loop principal
                     do {
                        //Mostrar os produtos 
                        console.clear()
                        console.log("===============================================");
                        console.log("|                  PRODUTOS                   |");
                        console.log("===============================================");
                        mostrarProdutos()

                        //Adicionar produtos no carrinho
                        const opc = readlineSync.questionInt("|      1 - Adicionar Produtos ao carrinho     |\n|      2 - Comprar Agora                      |\n|      3 - Historico de Pedidos               |\n|      0 - Sair do Sistema                    |\n|      Selecionar: ")
                        switch (opc) {
                           case 1:
                              console.clear()
                              console.log("===============================================");
                              console.log("|      ADICIONANDO PRODUTOS AO CARRINHO       |");
                              console.log("===============================================");
                              mostrarProdutos()
                              console.log("===============================================");
                              const selectProduto = readlineSync.questionInt("Insira o ID do produto: ")
                              addCarrinho(selectProduto)
                              const pressTecla3 = readlineSync.question("Pressione ENTER  para continuar...")
                              console.clear()
                              const select = readlineSync.questionInt(" 1 - Continuar Comprando\n 2 - Ver Carrinho\n 0 - Sair do Sistema\n Escolha: ")
                              switch (select) {
                                 case 1:
                                    break;
                                 case 2:
                                    //Mostrar os produtos que estão no carrinho 
                                    console.log("===============================================");
                                    console.log("|                   CARRINHO                  |");
                                    console.log("===============================================");
                                    mostrarCarrinho()
                                    console.log("===============================================");
                                    const opc2 = readlineSync.questionInt("| 1 - Continuar Comprando                     |\n| 2 - Comprar Agora                           |\n| 0 - Sair do Sistema                         |\n| Escolha: ")
                                    switch (opc2) {
                                       case 1:
                                          break
                                       case 2:
                                          console.clear()
                                          console.log("===============================================");
                                          console.log("|                   CARRINHO                  |");
                                          console.log("===============================================");
                                          mostrarCarrinho()
                                          console.log("===============================================");
                                          const opc5 = readlineSync.question("| Finalizar comprar? (S/N)\n").toUpperCase()
                                          switch (opc5) {
                                             case "S":
                                                FormaPagamento()
                                                break
                                             case "N":
                                                break
                                          }
                                          break
                                       case 0:
                                          ProgramaEncerrado()
                                          return
                                    }
                                    break;
                                 case 0:
                                    ProgramaEncerrado()
                                    return
                                 default:
                                    console.clear()
                                    console.log("===============================================");
                                    console.log("|            Opção não reconhecida            |");
                                    console.log("===============================================");
                              }
                              break
                           case 2:
                              //Realizar compra do produto
                              console.clear()
                              console.log("===============================================");
                              console.log("|             COMPRANDO O PRODUTO             |");
                              console.log("===============================================");
                              mostrarProdutos()
                              console.log("===============================================");
                              const opc3 = readlineSync.questionInt("Insira o ID do produto: ")
                              addCarrinho(opc3)
                              console.clear()
                              FormaPagamento()
                              break
                           case 3:
                              if (pedidosFeitos.length == 0) {
                                 console.clear()
                                 console.log("===============================================");
                                 console.log("|         NAO FOI FEITO NENHUM PEDIDO...      |");
                                 console.log("|               COMPRE AGORA                  |");
                                 console.log("===============================================\n");
                                 var space = readlineSync.question("Pressione ENTER para continuar... ")
                                 console.clear();
                              }
                              else
                                 PedidosFeitos()
                              break
                           case 0:
                              ProgramaEncerrado()
                              return
                        }
                     } while (repet);

                     break;
                  case 2:

                     break;
                  case 3:

                     break;
                  case 0:
                     console.log("===============================================");
                     console.log("|             SAINDO DO SISTEMA...            |");
                     console.log("===============================================");

                     readlineSync.question("Pressione ENTER para continuar...");
                     console.clear();
                     process.exit();
                     break;
                  default:
                     break;
               }
            }
         } else {
            console.log("===============================================");
            console.log("|         Login ou senha incorretos!         |");
            console.log("===============================================\n");

            readlineSync.question("Pressione ENTER para continuar...");
            console.clear();
         }

         //Verificar dados cadastrados e inseridos

         // console.log("Dados inseridos pelo usuário:");
         // console.log("Login:", username);
         // console.log("Senha:", password);
         // console.log("Clientes cadastrados:", users);

         break;
      case 3:
         console.log("===============================================");
         console.log("|         Sistema de Delivery - Login         |");
         console.log("===============================================");
         console.log("|                                             |");

         username = readlineSync.question("|     Login: ");
         password = readlineSync.question("|     Senha: ", { hideEchoBack: true });

         console.log("|                                             |");
         console.log("===============================================\n");

         let usuarioExistente = users.some(cliente => cliente.username === username);

         if (usuarioExistente) {
            console.log("==============================================");
            console.log("|            O USUÁRIO JÁ EXISTE             |");
            console.log("==============================================\n");

            console.log("Pressione Enter para voltar à tela principal");
            console.clear();
         } else {
            users.push({ username, password });
            console.log("===============================================");
            console.log("|       CADASTRO REALIZADO COM SUCESSO!       |");
            console.log("===============================================\n");

            console.log("Pressione Enter para voltar à tela principal");
            console.clear();
         }
         break;
      case 0:
         console.log("===============================================");
         console.log("|             SAINDO DO SISTEMA...            |");
         console.log("===============================================");

         readlineSync.question("Pressione ENTER para continuar...");
         console.clear();
         process.exit();
         break;

      default:
         console.log("===============================================");
         console.log("|     ESCOLHA ERRADA, TENTE NOVAMENTE...      |");
         console.log("===============================================\n");

         readlineSync.question("Pressione ENTER para continuar...");

         console.clear();
         break;
   }
}