const divClientes = document.querySelector('#clientes')

async function consultaClientes() {
  const retorno = await fetch('http://localhost:3000/api/clientes')
  const response = await retorno.json()

  preencheTela(response.result)
}

function preencheTela(clientes) {
  clientes.forEach(cliente => {
    const novoClienteHTML = `
      <div class="cliente">
        <h3>${cliente.name}</h3>
        <p>CPF: ${cliente.cpf}</p>
      </div>
    `
    divClientes.innerHTML += novoClienteHTML
  })
}

consultaClientes()
