const seacher = document.querySelector('#cidade');
const submit = document.querySelector('.pesquisa');

const city = submit.addEventListener('click', function (){
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=ed600e62357c49db8b5205211213012&q=Sobral&days=3&aqi=no&alerts=no&lang=pt`;

    const img = document.querySelector('.img-clima');
    const temp = document.querySelector('h1');
    const city = document.querySelector('.city h2');
    const day = document.querySelector('.city .day');
    const tempo = document.querySelector('.city .tempo');

    const celsius = document.querySelector('.estatistica .celsius');
    const fahrenheit = document.querySelector('.estatistica .fahrenheit');

    const chuva = document.querySelector('.chuva');
    const umidade = document.querySelector('.umidade');
    const vento = document.querySelector('.vento');

    const getWeather = async () => {
        try {

            const data = await fetch(URL);
            const json = await data.json();
            console.log(json);

            moment.updateLocale('pt-br',{
                weekdaysShort : ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.'],
                weekdays:['domingo','segunda-feira','terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira','sábado']
            })
            
            const datas = moment().format('dddd, H');
            const hora = moment().format('H:mm');
            const horaAtual = parseInt(hora);

            const dados = {
                image: json.forecast.forecastday[0].hour[horaAtual].condition.icon,
                adress:{
                    city: json.location.name,
                    state: json.location.region,
                },
                temp:{
                    celsius: json.forecast.forecastday[0].hour[horaAtual].temp_c,
                    fahrenheit: json.forecast.forecastday[0].hour[horaAtual].temp_f,
                },
                condition: json.forecast.forecastday[0].hour[horaAtual].condition.text,
                clima:{
                    chuva: json.forecast.forecastday[0].hour[horaAtual].chance_of_rain,
                    umidade: json.forecast.forecastday[0].hour[horaAtual].humidity,
                    vento_km: json.forecast.forecastday[0].hour[horaAtual].wind_kph,
                    vento_mph: json.forecast.forecastday[0].hour[horaAtual].wind_mph,
                }
            }

            img.src = dados.image;
            temp.innerHTML = parseInt(dados.temp.celsius);
            vento.innerHTML = `${parseInt(dados.clima.vento_km)} km/h`;

            celsius.addEventListener('click',()=>{
                if (celsius.classList.contains('ativo')) {
                    return;
                }
                temp.innerHTML = parseInt(dados.temp.celsius);
                celsius.classList.add('ativo');
                fahrenheit.classList.remove('ativo');
                vento.innerHTML = `${Math.ceil(dados.clima.vento_km)} km/h`;
            })

            fahrenheit.addEventListener('click',()=>{
                if (fahrenheit.classList.contains('ativo')) {
                    return;
                }
                temp.innerHTML = parseInt(dados.temp.fahrenheit);
                celsius.classList.remove('ativo');
                fahrenheit.classList.add('ativo');
                vento.innerHTML = `${Math.ceil(dados.clima.vento_mph)} mph`;
            })

            city.innerHTML = `${dados.adress.city}, ${dados.adress.state}`
            day.innerHTML = `${datas}:00`;
            tempo.innerHTML = dados.condition;
            umidade.innerHTML = `${dados.clima.umidade}%`;
            chuva.innerHTML = `${dados.clima.chuva}%`;

            return dados;
        } catch (error) {
            console.log(error.name);
        }
    }

    getWeather();
    
})


