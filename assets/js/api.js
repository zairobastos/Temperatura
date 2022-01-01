const seacher = document.querySelector('#cidade');
const submit = document.querySelector('.pesquisa');

/* const city = submit.addEventListener('click', function (){
        
    
})
 */

const URL = `http://api.weatherapi.com/v1/forecast.json?key=ed600e62357c49db8b5205211213012&q=sobral&days=3&aqi=no&alerts=no&lang=pt`;

    const img = document.querySelector('.img-clima');
    const temp = document.querySelector('h1');
    const city = document.querySelector('.city h2');
    const day = document.querySelector('.city .day');
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

            const dados = {
                image: json.current.condition.icon,
                adress:{
                    city: json.location.name,
                    state: json.location.region,
                },
                temp:{
                    celsius: json.current.temp_c,
                    fahrenheit: json.current.temp_f,
                },
            }

            img.src = dados.image;
            temp.innerHTML = dados.temp.celsius;
            city.innerHTML = `${dados.adress.city}, ${dados.adress.state}`
            day.innerHTML = `${datas}:00`;

            return dados;
        } catch (error) {
            console.log(error.name);
        }
    }

    getWeather();