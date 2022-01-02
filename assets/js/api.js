const seacher = document.querySelector('#cidade');
const submit = document.querySelector('.pesquisa');

const city = submit.addEventListener('click', function (){
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=ed600e62357c49db8b5205211213012&q=${seacher.value}&days=3&aqi=no&alerts=no&lang=pt`;

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

    const tempImg1 = document.querySelector('.tempo1');
    const tempImg2 = document.querySelector('.tempo2');
    const tempImg3 = document.querySelector('.tempo3'); 

    const dayMin1 = document.querySelector('.day1 .day');
    const dayMin2 = document.querySelector('.day2 .day');
    const dayMin3 = document.querySelector('.day3 .day');

    const maxtemp1 = document.querySelector('.day1 .max');
    const maxtemp2 = document.querySelector('.day2 .max');
    const maxtemp3 = document.querySelector('.day3 .max');

    const mintemp1 = document.querySelector('.day1 .min');
    const mintemp2 = document.querySelector('.day2 .min');
    const mintemp3 = document.querySelector('.day3 .min');

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
                },
                days: {
                    day1:{
                        icon: json.forecast.forecastday[0].day.condition.icon,
                        daymin: json.forecast.forecastday[0].date,
                        max_c: json.forecast.forecastday[0].day.maxtemp_c,
                        max_f: json.forecast.forecastday[0].day.maxtemp_f,
                        min_c: json.forecast.forecastday[0].day.mintemp_c,
                        min_f: json.forecast.forecastday[0].day.mintemp_f,
                    },
                    day2:{
                        icon: json.forecast.forecastday[1].day.condition.icon,
                        daymin: json.forecast.forecastday[1].date,
                        max_c: json.forecast.forecastday[1].day.maxtemp_c,
                        max_f: json.forecast.forecastday[1].day.maxtemp_f,
                        min_c: json.forecast.forecastday[1].day.mintemp_c,
                        min_f: json.forecast.forecastday[1].day.mintemp_f,
                    },
                    day3:{
                        icon: json.forecast.forecastday[2].day.condition.icon,
                        daymin: json.forecast.forecastday[2].date,
                        max_c: json.forecast.forecastday[2].day.maxtemp_c,
                        max_f: json.forecast.forecastday[2].day.maxtemp_f,
                        min_c: json.forecast.forecastday[2].day.mintemp_c,
                        min_f: json.forecast.forecastday[2].day.mintemp_f,
                    },
                }
            }
            console.log(dados);
            img.src = dados.image;
            temp.innerHTML = parseInt(dados.temp.celsius);
            vento.innerHTML = `${parseInt(dados.clima.vento_km)} km/h`;

            dayMin1.innerHTML = moment(`${dados.days.day1.daymin}`).format('ddd')
            dayMin2.innerHTML = moment(`${dados.days.day2.daymin}`).format('ddd')
            dayMin3.innerHTML = moment(`${dados.days.day3.daymin}`).format('ddd')

            maxtemp1.innerHTML = `${Math.ceil(dados.days.day1.max_c)}º`
            maxtemp2.innerHTML = `${Math.ceil(dados.days.day2.max_c)}º`
            maxtemp3.innerHTML = `${Math.ceil(dados.days.day3.max_c)}º`

            mintemp1.innerHTML = `${Math.ceil(dados.days.day1.min_c)}º`
            mintemp2.innerHTML = `${Math.ceil(dados.days.day2.min_c)}º`
            mintemp3.innerHTML = `${Math.ceil(dados.days.day3.min_c)}º`


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

            tempImg1.src = dados.days.day1.icon;
            tempImg2.src = dados.days.day2.icon;
            tempImg3.src = dados.days.day3.icon;

            var options = {
                series: [{
                    name: 'temperatura',
                    data: [
                        json.forecast.forecastday[0].hour[0].temp_c, 
                        json.forecast.forecastday[0].hour[1].temp_c, 
                        json.forecast.forecastday[0].hour[2].temp_c, 
                        json.forecast.forecastday[0].hour[3].temp_c, 
                        json.forecast.forecastday[0].hour[4].temp_c, 
                        json.forecast.forecastday[0].hour[5].temp_c, 
                        json.forecast.forecastday[0].hour[6].temp_c, 
                        json.forecast.forecastday[0].hour[7].temp_c
                    ]
                }],
                chart: {
                    height: 150,
                    type: 'area',
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        tools:{
                            download: false,
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'middle',
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        `${json.forecast.forecastday[0].hour[0].time}`, 
                        `${json.forecast.forecastday[0].hour[1].time}`, 
                        `${json.forecast.forecastday[0].hour[2].time}`, 
                        `${json.forecast.forecastday[0].hour[3].time}`, 
                        `${json.forecast.forecastday[0].hour[4].time}`, 
                        `${json.forecast.forecastday[0].hour[5].time}`, 
                        `${json.forecast.forecastday[0].hour[6].time}`, 
                        `${json.forecast.forecastday[0].hour[7].time}`,
                    ],axisBorder: {
                        show: false,
                    }, axisTicks: {
                        show: false,
                    },labels: {
                        show: true,
                        style: {
                            colors: "#9aa0a6",
                            fontSize:"12px",
                            fontWeight: 400,
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                    x: {
                        format: 'HH:mm'
                    },
                },grid: {
                    yaxis: {
                        lines: {
                            show: false
                        },
                    },
                },yaxis:{
                    show: false,
                },
            };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

            return dados;
        } catch (error) {
            console.log(error);
        }
    }

    getWeather();
    
})
