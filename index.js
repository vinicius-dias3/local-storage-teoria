const tempClient = {
    nome: 'Arluce',
    email: 'arluce.dias@gmail.com',
    celular: '21 12345-6789',
    cidade: 'São Paulo',
    UF: 'SP'
}

const addClient = (client) => {
    let db_client = JSON.parse(localStorage.getItem('db_clients')) || []
    db_client.push(client)
    localStorage.setItem('db_clients', JSON.stringify(db_client))
}


addClient(tempClient)