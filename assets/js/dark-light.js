const header = document.querySelector('.pesquisar');

const tema = document.querySelector('#toggle');
const body = document.querySelector('body');

const celsius = document.querySelector('.estatistica .celsius');
const fahrenheit = document.querySelector('.estatistica .fahrenheit');
const temp = document.querySelector('h1');

const chuva = document.querySelector('.chuva');
const umidade = document.querySelector('.umidade');
const vento = document.querySelector('.vento');

const cidade = document.querySelector('.city h2');
const day = document.querySelector('.city .day');
const tempo = document.querySelector('.city .tempo');

tema.addEventListener('click',()=>{
    const temaTexto = document.querySelector('.tema-nome')
    if(tema.checked){
        temaTexto.innerHTML = 'Tema: Light';
        temaTexto.classList.add("dark-texto");

        body.classList.toggle('body-light');
        header.classList.toggle('pesquisa-light');

        celsius.classList.toggle('dark-texto');
        temp.classList.toggle('dark-texto');
        fahrenheit.classList.toggle('dark-texto2');

        chuva.classList.toggle('dark-texto2');
        umidade.classList.toggle('dark-texto2');
        vento.classList.toggle('dark-texto2');

        cidade.classList.toggle('dark-texto');
        day.classList.toggle('dark-texto2');
        tempo.classList.toggle('dark-texto2');
    }else{
        temaTexto.innerHTML = 'Tema: Dark';
        temaTexto.classList.toggle("dark-texto");
        
        body.classList.toggle('body-light');
        header.classList.toggle('pesquisa-light');

        celsius.classList.toggle('dark-texto');
        temp.classList.toggle('dark-texto');
        fahrenheit.classList.toggle('dark-texto2');

        chuva.classList.toggle('dark-texto2');
        umidade.classList.toggle('dark-texto2');
        vento.classList.toggle('dark-texto2');

        cidade.classList.toggle('dark-texto');
        day.classList.toggle('dark-texto2');
        tempo.classList.toggle('dark-texto2');
    }
})