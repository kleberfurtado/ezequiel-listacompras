
var listaItens = [];
      
function inserirElemento() {
  const nomeProduto = document.querySelector('#campoNomeProduto').value;
  const objetoProduto = {selecionado: false, nome: nomeProduto, valor: 0};

  listaItens.push(objetoProduto);

  preencherListaHTML();
}

function preencherListaHTML() {
  textoHTML = '';
  for (indice = 0; indice < listaItens.length; indice++) {
    const objetoProduto = listaItens[indice];
    textoHTML = `${textoHTML}<li><input type="checkbox" onclick="marcarSelecionado(this, '${objetoProduto.nome}')"`;
    if (objetoProduto.selecionado) {
      textoHTML += ' checked ';
    }
    textoHTML = `${textoHTML}><span>${objetoProduto.nome}</span><button onclick="removerItem('${objetoProduto.nome}')">X</button></li>`;
  }
  
  const listaHTML = document.querySelector('#listaItens');
  listaHTML.innerHTML = textoHTML;
}


function valorItem() {
  var x = parseFloat(prompt("digite o valor", "0"));
  return x
}

function marcarSelecionado(checkbox, itemClicado) {
  for (indice = 0; indice < listaItens.length; indice++) {
    const objetoProduto = listaItens[indice];
    if (objetoProduto.nome == itemClicado) {
      objetoProduto.selecionado = checkbox.checked;
      if(checkbox.checked) {
        objetoProduto.valor = valorItem()
      } else {
        objetoProduto.valor = 0

      }
      calcular()
      return;
    }
  }
}

function calcular() {
  var total = 0
  for (indice = 0; indice < listaItens.length; indice++) {
    total += listaItens[indice].valor
  }
  const somarHTML = document.querySelector('#total')
  somarHTML.innerHTML = total


}

function removerItem(itemClicado) {
  for (indice = 0; indice < listaItens.length; indice++) {
    const objetoProduto = listaItens[indice];
    if (objetoProduto.nome == itemClicado) {
      listaItens.splice(indice, 1);
      break;
    }
  }
  calcular()
  preencherListaHTML();
}

