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

const temperatura = document.querySelector('.temperaturas');
const chuvas = document.querySelector('.chuvas');
const umidades = document.querySelector('.umidades');

const diaAtivo = document.querySelector('.ativo-day');
const dia1 = document.querySelector('.day1 .day');
const dia2 = document.querySelector('.day2 .day');
const dia3 = document.querySelector('.day3 .day');

const max1 = document.querySelector('.day1 .max');
const max2 = document.querySelector('.day2 .max');
const max3 = document.querySelector('.day3 .max');

const min1 = document.querySelector('.day1 .min');
const min2 = document.querySelector('.day2 .min');
const min3 = document.querySelector('.day3 .min');

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

        temperatura.classList.toggle('dark-texto');
        chuvas.classList.toggle('dark-texto');
        umidades.classList.toggle('dark-texto');

        diaAtivo.classList.toggle('background-light');
        dia1.classList.toggle('dark-texto');
        dia2.classList.toggle('dark-texto');
        dia3.classList.toggle('dark-texto');

        max1.classList.toggle('dark-texto');
        max2.classList.toggle('dark-texto');
        max3.classList.toggle('dark-texto');

        min1.classList.toggle('dark-texto2');
        min2.classList.toggle('dark-texto2');
        min3.classList.toggle('dark-texto2');
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

        temperatura.classList.toggle('dark-texto');
        chuvas.classList.toggle('dark-texto');
        umidades.classList.toggle('dark-texto');

        diaAtivo.classList.toggle('background-light');
        dia1.classList.toggle('dark-texto');
        dia2.classList.toggle('dark-texto');
        dia3.classList.toggle('dark-texto');

        max1.classList.toggle('dark-texto');
        max2.classList.toggle('dark-texto');
        max3.classList.toggle('dark-texto');

        min1.classList.toggle('dark-texto2');
        min2.classList.toggle('dark-texto2');
        min3.classList.toggle('dark-texto2');
    }
})