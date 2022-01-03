tema.addEventListener('click',()=>{
    const temaTexto = document.querySelector('.tema-nome')
    if(tema.checked){
        temaTexto.innerHTML = 'Tema: Light';
        temaTexto.classList.add("dark-texto");

        body.classList.toggle('body-light');
        header.classList.toggle('pesquisa-light');

        temp.classList.toggle('dark-texto');
        if(celsius.classList.contains('ativo')){
            celsius.classList.add('dark-texto');
            celsius.classList.remove('dark-texto2');
            celsius.classList.add('ativo');

            fahrenheit.classList.add('dark-texto2');
            fahrenheit.classList.remove('dark-texto');
            fahrenheit.classList.remove('ativo')
        }else if (!fahrenheit.classList.contains('ativo')){
            celsius.classList.add('ativo');
            celsius.classList.add('dark-texto');
            celsius.classList.remove('dark-texto2');
        }
        if (fahrenheit.classList.contains('ativo')){
            celsius.classList.remove('ativo');
            celsius.classList.remove('dark-texto');
            celsius.classList.add('dark-texto2');

            fahrenheit.classList.add('dark-texto');
            fahrenheit.classList.remove('dark-texto2');
            fahrenheit.classList.add('ativo');
        }else if(!celsius.classList.contains('ativo')){
            fahrenheit.classList.add('dark-texto');
            fahrenheit.classList.remove('dark-texto2');
            fahrenheit.classList.add('ativo');
        }

        celsius.addEventListener('click',()=>{
            if(celsius.classList.contains('ativo')){
                celsius.classList.add('dark-texto');
                celsius.classList.remove('dark-texto2');
                celsius.classList.add('ativo');
    
                fahrenheit.classList.add('dark-texto2');
                fahrenheit.classList.remove('dark-texto');
                fahrenheit.classList.remove('ativo')
            }else if (!fahrenheit.classList.contains('ativo')){
                celsius.classList.add('ativo');
                celsius.classList.add('dark-texto');
                celsius.classList.remove('dark-texto2');
            }
        })
        fahrenheit.addEventListener('click',()=>{
            if (fahrenheit.classList.contains('ativo')){
                celsius.classList.remove('ativo');
                celsius.classList.remove('dark-texto');
                celsius.classList.add('dark-texto2');
    
                fahrenheit.classList.add('dark-texto');
                fahrenheit.classList.remove('dark-texto2');
                fahrenheit.classList.add('ativo');
            }else if(!celsius.classList.contains('ativo')){
                fahrenheit.classList.add('dark-texto');
                fahrenheit.classList.remove('dark-texto2');
                fahrenheit.classList.add('ativo');
            }
        })

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

        temp.classList.toggle('dark-texto');
        if(celsius.classList.contains('ativo')){
            celsius.classList.remove('dark-texto');
            celsius.classList.remove('dark-texto2');
            celsius.classList.add('ativo');

            fahrenheit.classList.remove('dark-texto2');
            fahrenheit.classList.remove('dark-texto');
            fahrenheit.classList.remove('ativo')
        }else if(!fahrenheit.classList.contains('ativo')){
            celsius.classList.add('ativo');
            celsius.classList.remove('dark-texto');
            celsius.classList.remove('dark-texto2');
        }
        if (fahrenheit.classList.contains('ativo')){
            celsius.classList.remove('ativo');
            celsius.classList.remove('dark-texto');
            celsius.classList.remove('dark-texto2');

            fahrenheit.classList.remove('dark-texto');
            fahrenheit.classList.remove('dark-texto2');
            fahrenheit.classList.add('ativo');
        }else if(!celsius.classList.contains('ativo')){
            fahrenheit.classList.add('ativo');
            fahrenheit.classList.remove('dark-texto');
            fahrenheit.classList.remove('dark-texto2');
        }

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