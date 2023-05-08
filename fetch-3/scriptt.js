const inputCep = document.getElementById('cep');
const  btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

const btcDisplay = document.querySelector('.btc')

const piadas = document.querySelector('.piadas')
const btnProxima = document.querySelector('.proxima')



btnCep.addEventListener('click', handleclick);

function handleclick(event) {
    event.preventDefault()
    const cep = inputCep.value;
    buscaCep(cep);
}

   function buscaCep(cep){
       fetch(`https://viacep.com.br/ws/${cep}/json`)
       .then(response => response.text())
       .then(body => {
           resultadoCep.innerText = body;
       })
   }


 //api do BTC

 function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
       
    })
 }
    
 setInterval(fetchBtc, 1000*30);

 fetchBtc();


//API DE PIADAS

function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(piada => {
        piadas.innerText = piada.value
    })
}

btnProxima.addEventListener('click' , puxarPiada)

puxarPiada()

//filmes 

btnCep.addEventListener('click', handle);

function handle(event) {
    event.preventDefault()
    const cep = inputCep.value;
    buscaCep(cep);
}

   function buscaCep(cep){
       fetch(`https://viacep.com.br/ws/${cep}/json`)
       .then(response => response.text())
       .then(body => {
           resultadoCep.innerText = body;
       })
   }