const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const altura = parseFloat(document.getElementById('height').value.replace(',', '.'));
const peso = parseFloat(document.getElementById('weight').value.replace(',', '.'));

    const imc = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');
    
    document.getElementById('infos').classList.remove('hidden');


    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso.'
    } else if (imc >= 18.5 && imc <= 24.9) {
        description = 'Você está no peso ideal.'
        value.classList.remove('attention');
        value.classList.remove('normal')
    } else if (imc > 25 && imc <= 29.9) {
        description = 'Cuidado você está com sobrepeso!'
    } else if (imc > 30 && imc <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (imc > 35 && imc <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade morbida!";

    }
        value.textContent = imc.replace('.', ',');
        document.getElementById('descricao').textContent = description;
    });