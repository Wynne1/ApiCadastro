/* global fetch */

const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
  // capturar os dados do formulário
  const cliente = getDadosForm()
  // enviar os dados para api
  enviarDadosParaAPI(cliente)
})

function getDadosForm () {
  const inputNome = document.querySelector('#nome')
  const inputCPF = document.querySelector('#CPF')
  if (inputNome.value === null || inputCPF.value === null) {
    console.log('campos vazios')
    return
  }

  const cliente = {
    nome: inputNome.value,
    CPF: inputCPF.value
  }
  return cliente
}

async function enviarDadosParaAPI (cliente) {
  try {
    const resposta = await fetch('http://localhost:3000/api/cliente', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    })
    if (resposta.status === 201) {
      limparCampos()
      window.location.href = 'index.html'
    } else {
      console.log('Erro ao adicionar cliente')
    }
  } catch (erro) {
    console.error(erro)
  }
}

function limparCampos () {
  document.querySelector('#nome').value = ''
  document.querySelector('#CPF').value = ''
}
