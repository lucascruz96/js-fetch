function getAddress() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let url2 = 'https://viacep.com.br/ws/' + cep + '/json/';
    console.log('url1', url);
    console.log('url2', url2);

    fetch(url, {
        method: 'get' // opcional 
    })
    .then((response) => {
        console.log(response);

        response.json().then((addressResult) => {
            console.log(addressResult);

            let address = `${addressResult.logradouro}, ${addressResult.bairro}, ${addressResult.localidade} - ${addressResult.uf}`;

            document.getElementById("resultado").innerText = address;
        }).catch((erro) => {console.log(erro)});        
    })
    .catch(function (err) {
        console.error(err);
    });
}

function sendAddress() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url, {
        method: 'get' // opcional 
    })
    .then((response) => {
        response.json().then((addressResult) => {
            console.log(addressResult);
            let address = `${addressResult.logradouro}, ${addressResult.bairro}, ${addressResult.localidade} - ${addressResult.uf}`;
            document.getElementById("resultado").innerText = address;    
            sendToApi(addressResult);

        }).catch((erro) => {console.log(erro)});        
    })
    .catch(function (err) {
        console.error(err);
    });
}

function sendToApi(userAddress) {
    let url = 'url_to_post';
    console.log('userAddress', userAddress);

    fetch(url, {
        method: 'POST',
        mode: 'cors', // pode ser cors ou basic(default)
        redirect: 'follow',
        headers: new Headers({
        'Content-Type': 'application/json',
        'Authorize': 'iposauhdvkbasyehbo'
        }),
        body: JSON.stringify(userAddress)
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => console.log(error));
}