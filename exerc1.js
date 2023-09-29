import PromptSync from "prompt-sync";

const prompt = PromptSync()

function calcularPrecoComDesconto(valorProduto, quantidade, callbackDesconto) {
    const valorTotal = valorProduto * quantidade;
    const valorComDesconto = callbackDesconto(valorTotal);
    return valorComDesconto;
  }
  
  function aplicarDesconto(valorTotal) {
    const desconto = valorTotal * 0.1;
    return valorTotal - desconto;
  }
  
  const valorProduto = Number(prompt("Digite o do produto : "))
  const quantidade = Number(prompt("Digite a quantidade: "))
  const valorFinal = calcularPrecoComDesconto(valorProduto, quantidade, aplicarDesconto);
  
  console.log(`O valor final com desconto é: R$${valorFinal}`);
  