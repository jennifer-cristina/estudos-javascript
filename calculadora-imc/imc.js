const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const container = document.querySelector('.container');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== ''&& altura !== '' && peso !== '') {
        
        const valorIMC = (peso  / (altura * altura)).toFixed(2);

        let classificacao = '';
        let imgPeso = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
            imgPeso = './img/imc-abaixo-peso.jpg';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!';
            imgPeso = './img/imc-pessoa-saudavel.jpg';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso.';
            imgPeso = './img/imc-levemente-acima.jpg';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I.';
            imgPeso = './img/imc-acima-peso.jpg';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau II.';
            imgPeso = './img/imc-obesa.jpg';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
            imgPeso = './img/imc-obesa.jpg';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        container.style.backgroundImage = `url(${imgPeso})`;

    }else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);